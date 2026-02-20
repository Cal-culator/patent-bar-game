"use client";

import { create, type StoreApi, type UseBoundStore } from "zustand";
import { persist } from "zustand/middleware";
import type {
  UserStats,
  ZoneProgress,
  Phase,
  PhaseProgress,
  AnswerRecord,
  ReviewCard,
  Zone,
} from "../types";
import { PHASE_ORDER } from "../types";
import type { AppConfig } from "../config";

// --- Helpers ---

function getLevelTitle(xp: number, levelTitles: { title: string; xp: number }[]): string {
  let title = levelTitles[0]?.title ?? "Beginner";
  for (const t of levelTitles) {
    if (xp >= t.xp) title = t.title;
  }
  return title;
}

function todayISO(): string {
  return new Date().toISOString().split("T")[0];
}

function createInitialZoneProgress(zones: Zone[]): ZoneProgress[] {
  return zones.map((zone) => ({
    zoneSlug: zone.slug,
    phases: PHASE_ORDER.map((phase, i) => ({
      phase,
      status: i === 0 && !zone.locked ? "available" : "locked",
      stars: 0,
      bestScore: 0,
    })) as PhaseProgress[],
  }));
}

function getStreakMultiplier(streak: number, config: AppConfig): number {
  let multiplier = 1;
  for (const sm of config.scoring.streakMultipliers) {
    if (streak >= sm.streak) multiplier = sm.multiplier;
  }
  return multiplier;
}

// --- Store Interface ---

export interface GameState {
  // User stats
  stats: UserStats;
  addXp: (amount: number) => void;
  addCoins: (amount: number) => void;
  spendCoins: (amount: number) => boolean;
  updateStreak: () => void;

  // Zone progress
  zoneProgress: ZoneProgress[];
  getZoneProgress: (slug: string) => ZoneProgress;
  getPhaseProgress: (slug: string, phase: Phase) => PhaseProgress;
  completePhase: (slug: string, phase: Phase, score: number) => void;
  unlockNextPhase: (slug: string, phase: Phase) => void;

  // Absorb phase tracking
  absorbProgress: Record<string, number>;
  getAbsorbLayerIndex: (slug: string) => number;
  completeAbsorbLayer: (slug: string) => void;
  resetAbsorbProgress: (slug: string) => void;

  // Answer history
  answerHistory: AnswerRecord[];
  recordAnswer: (record: AnswerRecord) => void;

  // Spaced repetition
  reviewCards: ReviewCard[];

  // Active session
  currentStreak: number;
  streakMultiplier: number;
  incrementStreak: () => void;
  resetSessionStreak: () => void;
}

// --- Store Factory ---

let storeInstance: UseBoundStore<StoreApi<GameState>> | null = null;

export function createGameStore(config: AppConfig, zones: Zone[]) {
  if (storeInstance) return storeInstance;

  storeInstance = create<GameState>()(
    persist(
      (set, get) => ({
        // --- User Stats ---
        stats: {
          totalXp: 0,
          coins: config.scoring.startingCoins,
          currentStreak: 0,
          longestStreak: 0,
          levelTitle: config.levelTitles[0]?.title ?? "Beginner",
          lastActiveDate: todayISO(),
        },

        addXp: (amount: number) =>
          set((state) => {
            const newXp = state.stats.totalXp + amount;
            return {
              stats: {
                ...state.stats,
                totalXp: newXp,
                levelTitle: getLevelTitle(newXp, config.levelTitles),
              },
            };
          }),

        addCoins: (amount: number) =>
          set((state) => ({
            stats: { ...state.stats, coins: state.stats.coins + amount },
          })),

        spendCoins: (amount: number) => {
          const { stats } = get();
          if (stats.coins < amount) return false;
          set((state) => ({
            stats: { ...state.stats, coins: state.stats.coins - amount },
          }));
          return true;
        },

        updateStreak: () =>
          set((state) => {
            const today = todayISO();
            const last = state.stats.lastActiveDate;
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayISO = yesterday.toISOString().split("T")[0];

            let newStreak = state.stats.currentStreak;
            if (last === today) {
              // Already active today
            } else if (last === yesterdayISO) {
              newStreak += 1;
            } else {
              newStreak = 1;
            }

            return {
              stats: {
                ...state.stats,
                currentStreak: newStreak,
                longestStreak: Math.max(state.stats.longestStreak, newStreak),
                lastActiveDate: today,
              },
            };
          }),

        // --- Zone Progress ---
        zoneProgress: createInitialZoneProgress(zones),

        getZoneProgress: (slug: string) => {
          const progress = get().zoneProgress.find((z) => z.zoneSlug === slug);
          if (!progress) throw new Error(`Zone ${slug} not found`);
          return progress;
        },

        getPhaseProgress: (slug: string, phase: Phase) => {
          const zp = get().getZoneProgress(slug);
          const pp = zp.phases.find((p) => p.phase === phase);
          if (!pp) throw new Error(`Phase ${phase} not found in zone ${slug}`);
          return pp;
        },

        completePhase: (slug: string, phase: Phase, score: number) =>
          set((state) => {
            const [threshold3, threshold2, threshold1] = config.scoring.starThresholds;
            const newProgress = state.zoneProgress.map((zp) => {
              if (zp.zoneSlug !== slug) return zp;
              return {
                ...zp,
                phases: zp.phases.map((pp) => {
                  if (pp.phase !== phase) return pp;
                  const stars =
                    score >= threshold3 ? 3 : score >= threshold2 ? 2 : score >= threshold1 ? 1 : 0;
                  return {
                    ...pp,
                    status: "completed" as const,
                    stars: Math.max(pp.stars, stars),
                    bestScore: Math.max(pp.bestScore, score),
                  };
                }),
              };
            });
            return { zoneProgress: newProgress };
          }),

        unlockNextPhase: (slug: string, currentPhase: Phase) =>
          set((state) => {
            const currentIdx = PHASE_ORDER.indexOf(currentPhase);
            if (currentIdx === PHASE_ORDER.length - 1) return state;
            const nextPhase = PHASE_ORDER[currentIdx + 1];

            const newProgress = state.zoneProgress.map((zp) => {
              if (zp.zoneSlug !== slug) return zp;
              return {
                ...zp,
                phases: zp.phases.map((pp) => {
                  if (pp.phase !== nextPhase || pp.status !== "locked") return pp;
                  return { ...pp, status: "available" as const };
                }),
              };
            });
            return { zoneProgress: newProgress };
          }),

        // --- Absorb Progress ---
        absorbProgress: {},

        getAbsorbLayerIndex: (slug: string) => {
          return get().absorbProgress[slug] ?? 0;
        },

        completeAbsorbLayer: (slug: string) =>
          set((state) => ({
            absorbProgress: {
              ...state.absorbProgress,
              [slug]: (state.absorbProgress[slug] ?? 0) + 1,
            },
          })),

        resetAbsorbProgress: (slug: string) =>
          set((state) => ({
            absorbProgress: {
              ...state.absorbProgress,
              [slug]: 0,
            },
          })),

        // --- Answer History ---
        answerHistory: [],

        recordAnswer: (record: AnswerRecord) =>
          set((state) => ({
            answerHistory: [...state.answerHistory.slice(-500), record],
          })),

        // --- Spaced Repetition ---
        reviewCards: [],

        // --- Session Streak ---
        currentStreak: 0,
        streakMultiplier: 1,

        incrementStreak: () =>
          set((state) => {
            const newStreak = state.currentStreak + 1;
            return {
              currentStreak: newStreak,
              streakMultiplier: getStreakMultiplier(newStreak, config),
            };
          }),

        resetSessionStreak: () =>
          set({ currentStreak: 0, streakMultiplier: 1 }),
      }),
      {
        name: config.storageKey,
      }
    )
  );

  return storeInstance;
}

// Hook for use in components — requires store to be initialized first
export function useGameStore<T>(selector: (state: GameState) => T): T {
  if (!storeInstance) {
    throw new Error("Game store not initialized. Wrap your app with StudyGameProvider.");
  }
  return storeInstance(selector);
}

// Reset for testing
export function resetGameStore() {
  storeInstance = null;
}
