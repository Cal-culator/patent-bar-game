import type { Phase } from "../types";
import type { AppConfig } from "../config";

let _config: AppConfig | null = null;

export function initScoring(config: AppConfig) {
  _config = config;
}

function getConfig(): AppConfig {
  if (!_config) throw new Error("Scoring not initialized. Call initScoring first.");
  return _config;
}

export function calculateXp(
  phase: Phase,
  correct: boolean,
  streakMultiplier: number,
  timeMs?: number
): number {
  if (!correct) return 0;
  const config = getConfig();
  let xp = config.scoring.baseXp[phase];

  if (timeMs && timeMs < config.scoring.speedBonusThresholdMs) {
    xp = Math.round(xp * config.scoring.speedBonusMultiplier);
  }

  return xp * streakMultiplier;
}

export function calculateCoins(phase: Phase, correct: boolean): number {
  if (!correct) return 0;
  const config = getConfig();
  return config.scoring.coinEarn[phase] ?? 0;
}

export function calculateStars(scorePercent: number): number {
  const config = getConfig();
  const [t3, t2, t1] = config.scoring.starThresholds;
  if (scorePercent >= t3) return 3;
  if (scorePercent >= t2) return 2;
  if (scorePercent >= t1) return 1;
  return 0;
}

export function getNextLevelXp(currentXp: number): {
  current: number;
  next: number;
  progress: number;
} {
  const config = getConfig();
  const thresholds = config.levelTitles.map((l) => l.xp);

  let current = 0;
  let next = thresholds[1] ?? 500;

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
