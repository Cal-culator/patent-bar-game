/**
 * Fisher-Yates shuffle — returns a new shuffled array.
 */
export function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Shuffles options and remaps the correct index.
 * Returns the shuffled options and the new correct index.
 */
export function shuffleWithCorrectIndex<T>(
  options: T[],
  correctIndex: number
): { options: T[]; correctIndex: number } {
  const indices = options.map((_, i) => i);
  const shuffledIndices = shuffle(indices);
  const shuffledOptions = shuffledIndices.map((i) => options[i]);
  const newCorrectIndex = shuffledIndices.indexOf(correctIndex);
  return { options: shuffledOptions, correctIndex: newCorrectIndex };
}
