import type { Phase } from "./types";

export interface AppConfig {
  // Branding
  appName: string;
  appSubtitle: string;
  storageKey: string;

  // Level system
  levelTitles: { title: string; xp: number }[];

  // Scoring
  scoring: {
    baseXp: Record<Phase, number>;
    coinEarn: Partial<Record<Phase, number>>;
    starThresholds: [number, number, number]; // [3-star, 2-star, 1-star]
    speedBonusThresholdMs: number;
    speedBonusMultiplier: number;
    streakMultipliers: { streak: number; multiplier: number }[];
    startingCoins: number;
  };

  // Domain categories (for Recognize phase)
  sourceCategories: { value: string; label: string; icon: string }[];
  trapCategories: { value: string; label: string }[];

  // Reference material labels
  referenceLabel: string;
  referenceSectionLabel: string;

  // Zone display
  zoneSectionLabel: string;
}

export const DEFAULT_CONFIG: AppConfig = {
  appName: "Study Game",
  appSubtitle: "Interactive Learning",
  storageKey: "study-game-storage",

  levelTitles: [
    { title: "Beginner", xp: 0 },
    { title: "Intermediate", xp: 500 },
    { title: "Advanced", xp: 2000 },
    { title: "Expert", xp: 5000 },
    { title: "Master", xp: 10000 },
  ],

  scoring: {
    baseXp: {
      absorb: 5,
      build: 10,
      recognize: 15,
      apply: 20,
      search: 25,
      boss: 30,
    },
    coinEarn: {
      build: 2,
      recognize: 3,
    },
    starThresholds: [90, 75, 60],
    speedBonusThresholdMs: 10000,
    speedBonusMultiplier: 1.5,
    streakMultipliers: [
      { streak: 5, multiplier: 2 },
      { streak: 10, multiplier: 3 },
      { streak: 20, multiplier: 5 },
    ],
    startingCoins: 50,
  },

  sourceCategories: [
    { value: "statute", label: "Statute", icon: "📜" },
    { value: "regulation", label: "Regulation", icon: "📋" },
    { value: "guidance", label: "Guidance", icon: "📘" },
  ],

  trapCategories: [
    { value: "timeline_trap", label: "Timeline Trap" },
    { value: "one_word_trap", label: "One-Word Trap" },
    { value: "wrong_anchor", label: "Wrong Anchor" },
    { value: "source_swap", label: "Source Swap" },
    { value: "scope_creep", label: "Scope Creep" },
    { value: "verbatim_correct", label: "Correct Answer" },
  ],

  referenceLabel: "Reference",
  referenceSectionLabel: "Reference Section",
  zoneSectionLabel: "Section",
};
