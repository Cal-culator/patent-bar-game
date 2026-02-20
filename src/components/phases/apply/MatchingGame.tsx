"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MatchingGameData } from "@/types";
import { useGameStore } from "@/stores/gameStore";
import { calculateXp, calculateCoins } from "@/lib/scoring";
import { shuffle } from "@/lib/shuffle";

interface MatchingGameProps {
  items: MatchingGameData[];
  onComplete: () => void;
  accentColor: string;
}

export default function MatchingGame({
  items,
  onComplete,
  accentColor,
}: MatchingGameProps) {
  const addXp = useGameStore((s) => s.addXp);
  const addCoins = useGameStore((s) => s.addCoins);
  const multiplier = useGameStore((s) => s.streakMultiplier);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetSessionStreak = useGameStore((s) => s.resetSessionStreak);
  const recordAnswer = useGameStore((s) => s.recordAnswer);

  const [shuffledItems] = useState(() => shuffle(items));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [connections, setConnections] = useState<Map<number, number>>(new Map());
  const [selectedTerm, setSelectedTerm] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const item = shuffledItems[currentIndex];
  if (!item) return null;

  // Shuffle definitions on mount per item
  const shuffledDefIndices = useMemo(
    () => shuffle(item.pairs.map((_, i) => i)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentIndex]
  );

  const handleTermClick = (termIdx: number) => {
    if (checked) return;
    // If already connected, disconnect it
    if (connections.has(termIdx)) {
      setConnections((prev) => {
        const next = new Map(prev);
        next.delete(termIdx);
        return next;
      });
      return;
    }
    setSelectedTerm(termIdx);
  };

  const handleDefClick = (defIdx: number) => {
    if (checked || selectedTerm === null) return;
    // If this definition is already used, ignore
    const usedDefs = new Set(connections.values());
    if (usedDefs.has(defIdx)) return;

    setConnections((prev) => {
      const next = new Map(prev);
      next.set(selectedTerm, defIdx);
      return next;
    });
    setSelectedTerm(null);
  };

  const handleCheck = () => {
    let correct = 0;
    connections.forEach((defIdx, termIdx) => {
      // The correct definition for termIdx is termIdx itself (since shuffledDefIndices maps display position to original index)
      if (defIdx === termIdx) correct++;
    });

    setCorrectCount(correct);
    setChecked(true);

    const total = item.pairs.length;
    const accuracy = total > 0 ? correct / total : 0;
    const isCorrect = accuracy >= 0.5;
    const baseXp = calculateXp("apply", true, multiplier);
    const scaledXp = Math.round(baseXp * accuracy);
    const coins = calculateCoins("apply", isCorrect);

    addXp(scaledXp);
    if (coins > 0) addCoins(coins);

    if (isCorrect) {
      incrementStreak();
    } else {
      resetSessionStreak();
    }

    recordAnswer({
      questionId: item.id,
      phase: "apply",
      selectedIndex: correct,
      correct: isCorrect,
      timeMs: 0,
      lifelineUsed: false,
      timestamp: Date.now(),
    });
  };

  const handleNext = () => {
    if (currentIndex < shuffledItems.length - 1) {
      setCurrentIndex((i) => i + 1);
      setConnections(new Map());
      setSelectedTerm(null);
      setChecked(false);
      setCorrectCount(0);
    } else {
      onComplete();
    }
  };

  const allConnected = connections.size === item.pairs.length;
  const progress = ((currentIndex + 1) / shuffledItems.length) * 100;
  const usedDefs = new Set(connections.values());

  // Reverse map: defIdx → termIdx for display
  const defToTerm = new Map<number, number>();
  connections.forEach((defIdx, termIdx) => {
    defToTerm.set(defIdx, termIdx);
  });

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-bold text-[var(--color-text-muted)]">
            Match {currentIndex + 1} of {shuffledItems.length}
          </span>
        </div>
        <div className="h-2.5 bg-[var(--color-border)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--color-primary)] rounded-full"
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {/* Title & instruction */}
          <div className="mb-4">
            <h3 className="font-bold text-base text-[var(--color-text-primary)]">
              {item.title}
            </h3>
            <p className="text-sm font-semibold text-[var(--color-text-secondary)]">
              {item.instruction}
            </p>
          </div>

          {/* Two columns: Terms (left) and Definitions (right) */}
          <div className="grid grid-cols-2 gap-3 mb-4" data-testid="matching-grid">
            {/* Terms column */}
            <div className="space-y-2">
              <div className="text-sm uppercase tracking-wider font-bold text-[var(--color-text-muted)] mb-1">
                Terms
              </div>
              {item.pairs.map((pair, termIdx) => {
                const isConnected = connections.has(termIdx);
                const isSelected = selectedTerm === termIdx;

                let borderClass = "border-[var(--color-border)]";
                let bgClass = "";

                if (checked && isConnected) {
                  const defIdx = connections.get(termIdx)!;
                  if (defIdx === termIdx) {
                    borderClass = "border-[var(--color-correct)]";
                    bgClass = "bg-[var(--color-correct-bg)]";
                  } else {
                    borderClass = "border-[var(--color-incorrect)]";
                    bgClass = "bg-[var(--color-incorrect-bg)]";
                  }
                } else if (isSelected) {
                  borderClass = "border-[var(--color-selected)]";
                  bgClass = "bg-[var(--color-selected-bg)]";
                } else if (isConnected) {
                  bgClass = `bg-opacity-10`;
                  borderClass = ``;
                }

                return (
                  <button
                    key={`term-${termIdx}`}
                    onClick={() => handleTermClick(termIdx)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-bold border transition-all ${borderClass} ${bgClass} ${
                      !checked ? "cursor-pointer hover:shadow-sm" : ""
                    }`}
                    style={isConnected && !checked ? { borderColor: accentColor, backgroundColor: `${accentColor}15` } : undefined}
                    data-testid={`term-${termIdx}`}
                  >
                    {pair.term}
                    {isConnected && !checked && (
                      <span className="ml-1 text-xs opacity-60">linked</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Definitions column (shuffled) */}
            <div className="space-y-2">
              <div className="text-sm uppercase tracking-wider font-bold text-[var(--color-text-muted)] mb-1">
                Definitions
              </div>
              {shuffledDefIndices.map((origIdx) => {
                const pair = item.pairs[origIdx];
                const isUsed = usedDefs.has(origIdx);
                const isSelected = selectedTerm !== null && !isUsed;

                let borderClass = "border-[var(--color-border)]";
                let bgClass = "";

                if (checked && isUsed) {
                  const termIdx = defToTerm.get(origIdx)!;
                  if (origIdx === termIdx) {
                    borderClass = "border-[var(--color-correct)]";
                    bgClass = "bg-[var(--color-correct-bg)]";
                  } else {
                    borderClass = "border-[var(--color-incorrect)]";
                    bgClass = "bg-[var(--color-incorrect-bg)]";
                  }
                } else if (isUsed) {
                  bgClass = `bg-opacity-10`;
                } else if (isSelected) {
                  bgClass = "bg-[var(--color-surface)]";
                }

                return (
                  <button
                    key={`def-${origIdx}`}
                    onClick={() => handleDefClick(origIdx)}
                    disabled={checked || isUsed}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-semibold border transition-all ${borderClass} ${bgClass} ${
                      !checked && !isUsed ? "cursor-pointer hover:bg-[var(--color-surface)] hover:shadow-sm" : ""
                    } ${isUsed && !checked ? "opacity-50" : ""}`}
                    style={isUsed && !checked ? { borderColor: accentColor, backgroundColor: `${accentColor}15` } : undefined}
                    data-testid={`def-${origIdx}`}
                  >
                    {pair.definition}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          {!checked ? (
            <button
              onClick={handleCheck}
              disabled={!allConnected}
              className={`w-full py-3 rounded-xl font-bold text-base transition-colors disabled:opacity-40 uppercase tracking-wide ${
                allConnected
                  ? "bg-[var(--color-primary)] text-white shadow-sm hover:shadow-md transition-shadow"
                  : "bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
              }`}
              data-testid="matching-check"
            >
              Check Matches
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
            >
              <div
                className={`rounded-2xl p-4 text-base mb-3 ${
                  correctCount === item.pairs.length
                    ? "bg-[var(--color-correct-bg)]"
                    : "bg-[var(--color-incorrect-bg)]"
                }`}
              >
                <p
                  className={`font-extrabold ${
                    correctCount === item.pairs.length
                      ? "text-[var(--color-correct)]"
                      : "text-[var(--color-incorrect)]"
                  }`}
                >
                  {correctCount === item.pairs.length
                    ? "Perfect!"
                    : `${correctCount} of ${item.pairs.length} correct.`}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-base text-white bg-[var(--color-primary)] shadow-sm hover:shadow-md transition-shadow uppercase tracking-wide"
                data-testid="matching-next"
              >
                {currentIndex < shuffledItems.length - 1
                  ? "Next Match"
                  : "Complete Matching"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
