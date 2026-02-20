import type { AppConfig } from "@study-game/engine";

export const patentBarConfig: AppConfig = {
  appName: "The Patent Office",
  appSubtitle: "MPEP Chapter 100 — Secrecy & Foreign Filing",
  storageKey: "patent-bar-game-storage",

  levelTitles: [
    { title: "Examiner Intern", xp: 0 },
    { title: "Junior Associate", xp: 500 },
    { title: "Primary Examiner", xp: 2000 },
    { title: "Art Unit Lead", xp: 5000 },
    { title: "SPE", xp: 10000 },
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
    { value: "mpep_guidance", label: "MPEP", icon: "📘" },
  ],

  trapCategories: [
    { value: "timeline_trap", label: "Timeline Trap" },
    { value: "one_word_trap", label: "One-Word Trap" },
    { value: "wrong_anchor", label: "Wrong Anchor" },
    { value: "source_swap", label: "Source Swap" },
    { value: "scope_creep", label: "Scope Creep" },
    { value: "verbatim_correct", label: "Correct Answer" },
  ],

  referenceLabel: "MPEP",
  referenceSectionLabel: "MPEP Section",
  zoneSectionLabel: "MPEP",
};
