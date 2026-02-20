export interface SearchScoreBreakdown {
  correctness: number;
  timeEfficiency: number;
  searchEfficiency: number;
  citationPrecision: number;
}

export function calculateOpenBookScore(params: {
  correct: boolean;
  timeMs: number;
  searchCount: number;
  sectionsViewed: number;
  viewedTargetSection: boolean;
}): { total: number; breakdown: SearchScoreBreakdown } {
  const { correct, timeMs, searchCount, viewedTargetSection } = params;

  const correctness = correct ? 50 : 0;

  const timeSec = timeMs / 1000;
  let timeEfficiency = 0;
  if (correct) {
    if (timeSec <= 15) {
      timeEfficiency = 25;
    } else if (timeSec <= 90) {
      timeEfficiency = Math.round(25 * (1 - (timeSec - 15) / 75));
    }
  }

  let searchEfficiency = 0;
  if (correct) {
    if (searchCount <= 1) {
      searchEfficiency = 15;
    } else if (searchCount <= 3) {
      searchEfficiency = Math.round(15 * (1 - (searchCount - 1) / 3));
    }
  }

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
  const fastThreshold = baseline * 0.4;
  const avgThreshold = baseline * 0.75;

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
