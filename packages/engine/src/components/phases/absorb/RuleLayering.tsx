"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { RuleLayer } from "../../../types";
import { useGameStore } from "../../../store/gameStore";
import { calculateXp, calculateCoins } from "../../../lib/scoring";
import { shuffleWithCorrectIndex } from "../../../lib/shuffle";

interface RuleLayeringProps {
  layers: RuleLayer[];
  onComplete: () => void;
  accentColor: string;
}

export default function RuleLayering({
  layers,
  onComplete,
  accentColor,
}: RuleLayeringProps) {
  const addXp = useGameStore((s) => s.addXp);
  const addCoins = useGameStore((s) => s.addCoins);
  const multiplier = useGameStore((s) => s.streakMultiplier);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetSessionStreak = useGameStore((s) => s.resetSessionStreak);
  const recordAnswer = useGameStore((s) => s.recordAnswer);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  const layer = layers[currentIndex];

  const shuffledOpts = useMemo(
    () =>
      layer
        ? shuffleWithCorrectIndex(layer.question.options, layer.question.correctIndex)
        : { options: [] as string[], correctIndex: -1 },
    [layer]
  );

  if (!layer) return null;

  const handleReadComplete = () => {
    setShowQuestion(true);
  };

  const handleAnswer = useCallback(
    (optionIndex: number) => {
      if (showResult) return;

      const correct = optionIndex === shuffledOpts.correctIndex;
      setSelectedOption(optionIndex);
      setShowResult(true);
      setIsCorrect(correct);

      // Record answer
      recordAnswer({
        questionId: layer.id,
        phase: "absorb",
        selectedIndex: optionIndex,
        correct,
        timeMs: 0,
        lifelineUsed: false,
        timestamp: Date.now(),
      });

      if (correct) {
        const xp = calculateXp("absorb", true, multiplier);
        const coins = calculateCoins("absorb", true);
        addXp(xp);
        if (coins > 0) addCoins(coins);
        incrementStreak();
      } else {
        resetSessionStreak();
      }
    },
    [
      showResult,
      layer,
      multiplier,
      addXp,
      addCoins,
      incrementStreak,
      resetSessionStreak,
      recordAnswer,
    ]
  );

  const handleNext = () => {
    if (currentIndex < layers.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setShowResult(false);
      setShowQuestion(false);
    } else {
      onComplete();
    }
  };

  const progress = ((currentIndex + 1) / layers.length) * 100;

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-bold text-[var(--color-text-muted)]">
            Layer {currentIndex + 1} of {layers.length}
          </span>
          <span className="text-sm font-bold text-[var(--color-text-muted)]">
            {layer.layerNumber}/{layer.totalLayers} in concept
          </span>
        </div>
        <div className="h-2.5 bg-[var(--color-border)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--color-primary)] rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Rule Text Card */}
          <div className="bg-white rounded-2xl p-5 border border-[var(--color-border)] shadow-sm mb-4">
            <div className="text-sm uppercase tracking-wider font-bold text-[var(--color-text-muted)] mb-3">
              The Rule
            </div>
            <p className="text-[var(--color-text-primary)] leading-relaxed font-semibold">
              {layer.ruleText.split(layer.highlightedAddition).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span
                      className="font-bold px-0.5 rounded"
                      style={{
                        backgroundColor: `${accentColor}20`,
                        color: accentColor,
                      }}
                    >
                      {layer.highlightedAddition}
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>

          {/* "I understand" button or Question */}
          {!showQuestion ? (
            <motion.button
              onClick={handleReadComplete}
              className="w-full py-3 rounded-xl font-bold text-base bg-[var(--color-primary)] text-white uppercase tracking-wide shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Got it — quiz me
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Question */}
              <div className="mb-4">
                <p className="text-base font-bold text-[var(--color-text-primary)] mb-3">
                  {layer.question.stem}
                </p>
                <div className="space-y-2">
                  {shuffledOpts.options.map((option, i) => {
                    const isCorrectOption = i === shuffledOpts.correctIndex;
                    let cardClass = "border border-[var(--color-border)] hover:bg-[var(--color-surface)] hover:shadow-sm transition-all";

                    if (showResult) {
                      if (isCorrectOption) {
                        cardClass =
                          "border-2 border-[var(--color-correct)] bg-[var(--color-correct-bg)]";
                      } else if (
                        i === selectedOption &&
                        !isCorrectOption
                      ) {
                        cardClass =
                          "border-2 border-[var(--color-incorrect)] bg-[var(--color-incorrect-bg)]";
                      } else {
                        cardClass =
                          "border border-[var(--color-border)] opacity-40";
                      }
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => handleAnswer(i)}
                        disabled={showResult}
                        data-testid={`option-${i}${isCorrectOption ? '-correct' : ''}`}
                        className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-all ${cardClass}`}
                      >
                        <span className="text-[var(--color-text-muted)] mr-2 font-bold">
                          {String.fromCharCode(65 + i)})
                        </span>
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Result + Explanation */}
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mb-4"
                >
                  <div
                    className={`rounded-2xl p-4 text-sm ${
                      isCorrect
                        ? "bg-[var(--color-correct-bg)]"
                        : "bg-[var(--color-incorrect-bg)]"
                    }`}
                  >
                    <p className={`font-extrabold mb-1 ${isCorrect ? "text-[var(--color-correct)]" : "text-[var(--color-incorrect)]"}`}>
                      {isCorrect ? "Correct!" : "Not quite."}
                    </p>
                    <p className="text-[var(--color-text-secondary)] font-semibold">
                      {layer.question.explanation}
                    </p>
                  </div>

                  <button
                    onClick={handleNext}
                    className="w-full mt-3 py-3 rounded-xl font-bold text-base text-white bg-[var(--color-primary)] shadow-sm hover:shadow-md transition-shadow uppercase tracking-wide"
                  >
                    {currentIndex < layers.length - 1
                      ? "Next Layer"
                      : "Complete"}
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
