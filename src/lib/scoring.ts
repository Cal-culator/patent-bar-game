import { Phase } from "@/types";

// XP awarded per correct answer by phase
const BASE_XP: Record<Phase, number> = {
  absorb: 5,
  build: 10,
  recognize: 15,
  apply: 20,
  search: 25,
  boss: 30,
};

// Coins earned per correct answer (only Build and Recognize)
const COIN_EARN: Partial<Record<Phase, number>> = {
  build: 2,
  recognize: 3,
};

export function calculateXp(
  phase: Phase,
  correct: boolean,
  streakMultiplier: number,
  timeMs?: number
): number {
  if (!correct) return 0;
  let xp = BASE_XP[phase];

  // Speed bonus: if answered in under 10 seconds, +50% XP
  if (timeMs && timeMs < 10000) {
    xp = Math.round(xp * 1.5);
  }

  return xp * streakMultiplier;
}

export function calculateCoins(phase: Phase, correct: boolean): number {
  if (!correct) return 0;
  return COIN_EARN[phase] ?? 0;
}

export function calculateStars(scorePercent: number): number {
  if (scorePercent >= 90) return 3;
  if (scorePercent >= 75) return 2;
  if (scorePercent >= 60) return 1;
  return 0;
}

export function getNextLevelXp(currentXp: number): {
  current: number;
  next: number;
  progress: number;
} {
  const thresholds = [0, 500, 2000, 5000, 10000];
  let current = 0;
  let next = 500;

  for (let i = 0; i < thresholds.length - 1; i++) {
    if (currentXp >= thresholds[i]) {
      current = thresholds[i];
      next = thresholds[i + 1];
    }
  }

  if (currentXp >= thresholds[thresholds.length - 1]) {
    return { current: currentXp, next: currentXp, progress: 100 };
  }

  const progress = ((currentXp - current) / (next - current)) * 100;
  return { current, next, progress };
}
