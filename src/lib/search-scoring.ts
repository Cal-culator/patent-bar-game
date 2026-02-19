export interface SearchScoreBreakdown {
  correctness: number;     // 0 or 50
  timeEfficiency: number;  // 0-25
  searchEfficiency: number; // 0-15
  citationPrecision: number; // 0-10
}

// Open-Book scoring (4 metrics):
// 1. Answer correctness (50% weight) — correct/incorrect
// 2. Time efficiency (25% weight) — faster = better, baseline 90s
// 3. Search efficiency (15% weight) — fewer searches = better, baseline 3
// 4. Citation precision (10% weight) — did they view the right section?

export function calculateOpenBookScore(params: {
  correct: boolean;
  timeMs: number;
  searchCount: number;
  sectionsViewed: number;
  viewedTargetSection: boolean;
}): { total: number; breakdown: SearchScoreBreakdown } {
  const { correct, timeMs, searchCount, viewedTargetSection } = params;

  // 1. Correctness (50 points)
  const correctness = correct ? 50 : 0;

  // 2. Time efficiency (25 points) — baseline 90s, minimum 10s
  const timeSec = timeMs / 1000;
  let timeEfficiency = 0;
  if (correct) {
    if (timeSec <= 15) {
      timeEfficiency = 25;
    } else if (timeSec <= 90) {
      timeEfficiency = Math.round(25 * (1 - (timeSec - 15) / 75));
    }
  }

  // 3. Search efficiency (15 points) — fewer searches = better, baseline 3
  let searchEfficiency = 0;
  if (correct) {
    if (searchCount <= 1) {
      searchEfficiency = 15;
    } else if (searchCount <= 3) {
      searchEfficiency = Math.round(15 * (1 - (searchCount - 1) / 3));
    }
  }

  // 4. Citation precision (10 points) — did they view the target section?
  const citationPrecision = correct && viewedTargetSection ? 10 : 0;

  const total = correctness + timeEfficiency + searchEfficiency + citationPrecision;

  return {
    total,
    breakdown: {
      correctness,
      timeEfficiency,
      searchEfficiency,
      citationPrecision,
    },
  };
}

// Speedrun scoring:
// Time-based, with difficulty scaling
// Difficulty 1: baseline 15s, Difficulty 2: baseline 20s, Difficulty 3: baseline 25s

export function calculateSpeedrunScore(params: {
  correct: boolean;
  timeMs: number;
  difficulty: 1 | 2 | 3;
}): { score: number; rating: "fast" | "average" | "slow" } {
  const { correct, timeMs, difficulty } = params;

  if (!correct) {
    return { score: 0, rating: "slow" };
  }

  const baselines: Record<number, number> = { 1: 15000, 2: 20000, 3: 25000 };
  const baseline = baselines[difficulty];
  const fastThreshold = baseline * 0.4; // 40% of baseline = fast
  const avgThreshold = baseline * 0.75; // 75% of baseline = average

  let score: number;
  let rating: "fast" | "average" | "slow";

  if (timeMs <= fastThreshold) {
    score = 100;
    rating = "fast";
  } else if (timeMs <= avgThreshold) {
    score = 75;
    rating = "average";
  } else if (timeMs <= baseline) {
    score = 50;
    rating = "average";
  } else {
    score = 25;
    rating = "slow";
  }

  return { score, rating };
}
