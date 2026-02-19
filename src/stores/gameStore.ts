import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  UserStats,
  LevelTitle,
  LEVEL_THRESHOLDS,
  ZoneProgress,
  Phase,
  PhaseProgress,
  PHASE_ORDER,
  AnswerRecord,
  ReviewCard,
  ZoneSlug,
} from "@/types";
import { ZONES } from "@/data/zones";

// --- Helpers ---

function getLevelTitle(xp: number): LevelTitle {
  let title: LevelTitle = "Examiner Intern";
  for (const t of LEVEL_THRESHOLDS) {
    if (xp >= t.xp) title = t.title;
  }
  return title;
}

function todayISO(): string {
  return new Date().toISOString().split("T")[0];
}

function createInitialZoneProgress(): ZoneProgress[] {
  return ZONES.map((zone) => ({
    zoneSlug: zone.slug,
    phases: PHASE_ORDER.map((phase, i) => ({
      phase,
      status: i === 0 && !zone.locked ? "available" : "locked",
      stars: 0,
      bestScore: 0,
    })) as PhaseProgress[],
  }));
}

// --- Store Interface ---

interface GameState {
  // User stats
  stats: UserStats;
  addXp: (amount: number) => void;
  addCoins: (amount: number) => void;
  spendCoins: (amount: number) => boolean;
  updateStreak: () => void;

  // Zone progress
  zoneProgress: ZoneProgress[];
  getZoneProgress: (slug: ZoneSlug) => ZoneProgress;
  getPhaseProgress: (slug: ZoneSlug, phase: Phase) => PhaseProgress;
  completePhase: (slug: ZoneSlug, phase: Phase, score: number) => void;
  unlockNextPhase: (slug: ZoneSlug, phase: Phase) => void;

  // Absorb phase tracking
  absorbProgress: Record<string, number>; // zoneSlug -> last completed layer index
  getAbsorbLayerIndex: (slug: ZoneSlug) => number;
  completeAbsorbLayer: (slug: ZoneSlug) => void;
  resetAbsorbProgress: (slug: ZoneSlug) => void;

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

// --- Store ---

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      // --- User Stats ---
      stats: {
        totalXp: 0,
        coins: 50, // starting coins
        currentStreak: 0,
        longestStreak: 0,
        levelTitle: "Examiner Intern",
        lastActiveDate: todayISO(),
      },

      addXp: (amount: number) =>
        set((state) => {
          const newXp = state.stats.totalXp + amount;
          return {
            stats: {
              ...state.stats,
              totalXp: newXp,
              levelTitle: getLevelTitle(newXp),
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
            // Already active today, no change
          } else if (last === yesterdayISO) {
            newStreak += 1;
          } else {
            newStreak = 1; // streak broken
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
      zoneProgress: createInitialZoneProgress(),

      getZoneProgress: (slug: ZoneSlug) => {
        const progress = get().zoneProgress.find((z) => z.zoneSlug === slug);
        if (!progress) throw new Error(`Zone ${slug} not found`);
        return progress;
      },

      getPhaseProgress: (slug: ZoneSlug, phase: Phase) => {
        const zp = get().getZoneProgress(slug);
        const pp = zp.phases.find((p) => p.phase === phase);
        if (!pp) throw new Error(`Phase ${phase} not found in zone ${slug}`);
        return pp;
      },

      completePhase: (slug: ZoneSlug, phase: Phase, score: number) =>
        set((state) => {
          const newProgress = state.zoneProgress.map((zp) => {
            if (zp.zoneSlug !== slug) return zp;
            return {
              ...zp,
              phases: zp.phases.map((pp) => {
                if (pp.phase !== phase) return pp;
                const stars =
                  score >= 90 ? 3 : score >= 75 ? 2 : score >= 60 ? 1 : 0;
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

      unlockNextPhase: (slug: ZoneSlug, currentPhase: Phase) =>
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

      getAbsorbLayerIndex: (slug: ZoneSlug) => {
        return get().absorbProgress[slug] ?? 0;
      },

      completeAbsorbLayer: (slug: ZoneSlug) =>
        set((state) => ({
          absorbProgress: {
            ...state.absorbProgress,
            [slug]: (state.absorbProgress[slug] ?? 0) + 1,
          },
        })),

      resetAbsorbProgress: (slug: ZoneSlug) =>
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
          answerHistory: [...state.answerHistory.slice(-500), record], // keep last 500
        })),

      // --- Spaced Repetition ---
      reviewCards: [],

      // --- Session Streak ---
      currentStreak: 0,
      streakMultiplier: 1,

      incrementStreak: () =>
        set((state) => {
          const newStreak = state.currentStreak + 1;
          let multiplier = 1;
          if (newStreak >= 20) multiplier = 5;
          else if (newStreak >= 10) multiplier = 3;
          else if (newStreak >= 5) multiplier = 2;
          return {
            currentStreak: newStreak,
            streakMultiplier: multiplier,
          };
        }),

      resetSessionStreak: () =>
        set({ currentStreak: 0, streakMultiplier: 1 }),
    }),
    {
      name: "patent-bar-game-storage",
    }
  )
);
