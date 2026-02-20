"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import type { RuleBuilderData } from "../../../types";
import { useGameStore } from "../../../store/gameStore";
import { calculateXp, calculateCoins } from "../../../lib/scoring";

interface RuleBuilderProps {
  builders: RuleBuilderData[];
  onComplete: () => void;
  accentColor: string;
}

export default function RuleBuilder({
  builders,
  onComplete,
  accentColor,
}: RuleBuilderProps) {
  const addXp = useGameStore((s) => s.addXp);
  const addCoins = useGameStore((s) => s.addCoins);
  const multiplier = useGameStore((s) => s.streakMultiplier);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetSessionStreak = useGameStore((s) => s.resetSessionStreak);
  const recordAnswer = useGameStore((s) => s.recordAnswer);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [placed, setPlaced] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const builder = builders[currentIndex];
  if (!builder) return null;

  const availableFragments = builder.fragments
    .map((f, i) => ({ text: f, originalIndex: i }))
    .filter((f) => !placed.includes(f.originalIndex));

  const placedFragments = placed.map((i) => ({
    text: builder.fragments[i],
    originalIndex: i,
  }));

  const handlePlaceFragment = (originalIndex: number) => {
    if (checked) return;
    setPlaced((prev) => [...prev, originalIndex]);
  };

  const handleRemoveFragment = (positionIndex: number) => {
    if (checked) return;
    setPlaced((prev) => prev.filter((_, i) => i !== positionIndex));
  };

  const handleCheck = () => {
    const correct =
      placed.length === builder.correctOrder.length &&
      placed.every((val, idx) => val === builder.correctOrder[idx]);

    setChecked(true);
    setIsCorrect(correct);

    recordAnswer({
      questionId: builder.id,
      phase: "build",
      selectedIndex: correct ? 0 : 1,
      correct,
      timeMs: 0,
      lifelineUsed: false,
      timestamp: Date.now(),
    });

    if (correct) {
      const xp = calculateXp("build", true, multiplier);
      const coins = calculateCoins("build", true);
      addXp(xp);
      if (coins > 0) addCoins(coins);
      incrementStreak();
    } else {
      resetSessionStreak();
    }
  };

  const handleClear = () => {
    if (checked) return;
    setPlaced([]);
  };

  const handleNext = () => {
    if (currentIndex < builders.length - 1) {
      setCurrentIndex((i) => i + 1);
      setPlaced([]);
      setChecked(false);
      setIsCorrect(false);
    } else {
      onComplete();
    }
  };

  const progress = ((currentIndex + 1) / builders.length) * 100;
  const allPlaced = placed.length === builder.fragments.length;

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-bold text-[var(--color-text-muted)]">
            Rule {currentIndex + 1} of {builders.length}
          </span>
          <span className="text-sm font-mono font-bold" style={{ color: accentColor }}>
            {builder.statuteRef}
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
          {/* Title */}
          <div className="mb-4">
            <h3 className="font-bold text-base text-[var(--color-text-primary)]">
              {builder.title}
            </h3>
            <p className="text-sm font-semibold text-[var(--color-text-secondary)]">
              Arrange the fragments to build the correct rule.
            </p>
          </div>

          {/* Sentence Slots (placed fragments) */}
          <div className="bg-white rounded-2xl p-4 border border-[var(--color-border)] shadow-sm mb-4 min-h-[80px]">
            <div className="text-sm uppercase tracking-wider font-bold text-[var(--color-text-muted)] mb-2">
              Your sentence
            </div>
            <div className="flex flex-wrap gap-1.5">
              {placedFragments.length === 0 ? (
                <span className="text-base font-semibold text-[var(--color-text-muted)] italic">
                  Tap fragments below to build the rule...
                </span>
              ) : (
                placedFragments.map((frag, i) => {
                  let borderClass = "border-[var(--color-border)]";
                  let bgClass = "bg-[var(--color-surface)]";
                  if (checked) {
                    if (builder.correctOrder[i] === frag.originalIndex) {
                      borderClass = "border-[var(--color-correct)]";
                      bgClass = "bg-[var(--color-correct-bg)]";
                    } else {
                      borderClass = "border-[var(--color-incorrect)]";
                      bgClass = "bg-[var(--color-incorrect-bg)]";
                    }
                  }
                  return (
                    <motion.button
                      key={`placed-${i}`}
                      layout
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      onClick={() => handleRemoveFragment(i)}
                      className={`px-3 py-2 rounded-lg text-base font-semibold border transition-colors text-[var(--color-text-primary)] ${borderClass} ${bgClass}`}
                      style={{ cursor: checked ? "default" : "pointer" }}
                    >
                      {frag.text}
                    </motion.button>
                  );
                })
              )}
            </div>
          </div>

          {/* Available fragments */}
          <div className="mb-4">
            <div className="text-sm uppercase tracking-wider font-bold text-[var(--color-text-muted)] mb-2">
              Available fragments
            </div>
            <div className="flex flex-wrap gap-1.5">
              {availableFragments.map((frag) => (
                <motion.button
                  key={`avail-${frag.originalIndex}`}
                  layout
                  onClick={() => handlePlaceFragment(frag.originalIndex)}
                  disabled={checked}
                  className="px-3 py-2 rounded-lg text-base font-semibold border border-[var(--color-border)] hover:bg-[var(--color-surface)] hover:shadow-sm transition-all disabled:opacity-30"
                  whileHover={!checked ? { scale: 1.03 } : undefined}
                  whileTap={!checked ? { scale: 0.97 } : undefined}
                >
                  {frag.text}
                </motion.button>
              ))}
              {availableFragments.length === 0 && !checked && (
                <span className="text-sm font-semibold text-[var(--color-text-muted)] italic">
                  All fragments placed
                </span>
              )}
            </div>
          </div>

          {/* Action buttons */}
          {!checked ? (
            <div className="flex gap-2">
              <button
                onClick={handleClear}
                disabled={placed.length === 0}
                className="px-5 py-2.5 rounded-xl text-base font-bold border border-[var(--color-border)] hover:bg-[var(--color-surface)] hover:shadow-sm transition-all disabled:opacity-30"
              >
                Clear
              </button>
              <button
                onClick={handleCheck}
                disabled={!allPlaced}
                className={`flex-1 py-2.5 rounded-xl font-bold text-base transition-colors disabled:opacity-40 uppercase tracking-wide ${
                  allPlaced
                    ? "bg-[var(--color-primary)] text-white shadow-sm hover:shadow-md transition-shadow"
                    : "bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                }`}
              >
                Check
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
            >
              <div className={`rounded-2xl p-4 text-base mb-3 ${isCorrect ? "bg-[var(--color-correct-bg)]" : "bg-[var(--color-incorrect-bg)]"}`}>
                <p className={`font-extrabold mb-1 ${isCorrect ? "text-[var(--color-correct)]" : "text-[var(--color-incorrect)]"}`}>
                  {isCorrect ? "Correct!" : "Not quite."}
                </p>
                <p className="text-[var(--color-text-secondary)] font-semibold">
                  <span className="font-bold">Correct sentence:</span>{" "}
                  {builder.completeSentence}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-base text-white bg-[var(--color-primary)] shadow-sm hover:shadow-md transition-shadow uppercase tracking-wide"
              >
                {currentIndex < builders.length - 1
                  ? "Next Rule"
                  : "Complete Rule Builders"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
