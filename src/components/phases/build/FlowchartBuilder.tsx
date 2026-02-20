"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FlowchartBuilderData } from "@/types";
import { useGameStore } from "@/stores/gameStore";
import { calculateXp, calculateCoins } from "@/lib/scoring";
import { shuffle } from "@/lib/shuffle";

interface FlowchartBuilderProps {
  items: FlowchartBuilderData[];
  onComplete: () => void;
  accentColor: string;
}

export default function FlowchartBuilder({
  items,
  onComplete,
  accentColor,
}: FlowchartBuilderProps) {
  const addXp = useGameStore((s) => s.addXp);
  const addCoins = useGameStore((s) => s.addCoins);
  const multiplier = useGameStore((s) => s.streakMultiplier);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetSessionStreak = useGameStore((s) => s.resetSessionStreak);
  const recordAnswer = useGameStore((s) => s.recordAnswer);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [placedSteps, setPlacedSteps] = useState<(string | null)[]>([]);
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const item = items[currentIndex];
  if (!item) return null;

  // Initialize placedSteps for new item
  if (placedSteps.length !== item.steps.length) {
    setPlacedSteps(new Array(item.steps.length).fill(null));
  }

  // Shuffle bank: correct steps + distractors
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const bankItems = useMemo(
    () => shuffle([...item.steps, ...item.distractors]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentIndex]
  );

  const usedIds = new Set(placedSteps.filter((id): id is string => id !== null));
  const availableBank = bankItems.filter((step) => !usedIds.has(step.id));

  const handleBankClick = (stepId: string) => {
    if (checked) return;
    setSelectedBank((prev) => (prev === stepId ? null : stepId));
  };

  const handleSlotClick = (slotIdx: number) => {
    if (checked) return;

    // If slot is filled, remove it
    if (placedSteps[slotIdx] !== null) {
      setPlacedSteps((prev) => {
        const next = [...prev];
        next[slotIdx] = null;
        return next;
      });
      return;
    }

    // If a bank item is selected, place it
    if (selectedBank) {
      setPlacedSteps((prev) => {
        const next = [...prev];
        next[slotIdx] = selectedBank;
        return next;
      });
      setSelectedBank(null);
    }
  };

  const handleCheck = () => {
    let correct = 0;
    item.steps.forEach((step, i) => {
      if (placedSteps[i] === step.id) correct++;
    });

    setCorrectCount(correct);
    setChecked(true);

    const total = item.steps.length;
    const accuracy = total > 0 ? correct / total : 0;
    const isCorrect = accuracy >= 0.5;

    recordAnswer({
      questionId: item.id,
      phase: "build",
      selectedIndex: correct,
      correct: isCorrect,
      timeMs: 0,
      lifelineUsed: false,
      timestamp: Date.now(),
    });

    if (isCorrect) {
      const baseXp = calculateXp("build", true, multiplier);
      const scaledXp = Math.round(baseXp * accuracy);
      const coins = calculateCoins("build", isCorrect);
      addXp(scaledXp);
      if (coins > 0) addCoins(coins);
      incrementStreak();
    } else {
      resetSessionStreak();
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((i) => i + 1);
      setPlacedSteps([]);
      setSelectedBank(null);
      setChecked(false);
      setCorrectCount(0);
    } else {
      onComplete();
    }
  };

  const allFilled = placedSteps.every((id) => id !== null);
  const progress = ((currentIndex + 1) / items.length) * 100;

  // Build a map for quick lookups
  const allStepsMap = useMemo(() => {
    const map = new Map<string, string>();
    [...item.steps, ...item.distractors].forEach((s) => map.set(s.id, s.label));
    return map;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-bold text-[var(--color-text-muted)]">
            Flowchart {currentIndex + 1} of {items.length}
          </span>
          <span className="text-sm font-mono font-bold" style={{ color: accentColor }}>
            {item.statuteRef}
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

          {/* Flowchart slots */}
          <div className="mb-4" data-testid="flowchart-slots">
            {placedSteps.map((stepId, slotIdx) => {
              const label = stepId ? allStepsMap.get(stepId) : null;
              const isCorrectStep = checked && stepId === item.steps[slotIdx]?.id;
              const isWrongStep = checked && stepId !== null && stepId !== item.steps[slotIdx]?.id;
              const isEmpty = stepId === null;

              let borderClass = "border-[var(--color-border)]";
              let bgClass = "bg-white";

              if (isCorrectStep) {
                borderClass = "border-[var(--color-correct)]";
                bgClass = "bg-[var(--color-correct-bg)]";
              } else if (isWrongStep) {
                borderClass = "border-[var(--color-incorrect)]";
                bgClass = "bg-[var(--color-incorrect-bg)]";
              } else if (isEmpty && selectedBank) {
                borderClass = "border-[var(--color-selected)]";
                bgClass = "bg-[var(--color-surface)]";
              }

              return (
                <div key={slotIdx}>
                  <div className="flex items-center gap-3">
                    {/* Step number circle */}
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold text-white"
                      style={{
                        backgroundColor: isCorrectStep
                          ? "var(--color-correct)"
                          : isWrongStep
                            ? "var(--color-incorrect)"
                            : accentColor,
                      }}
                    >
                      {slotIdx + 1}
                    </div>

                    {/* Slot */}
                    <button
                      onClick={() => handleSlotClick(slotIdx)}
                      className={`flex-1 text-left px-3 py-2.5 rounded-xl border transition-all min-h-[44px] ${borderClass} ${bgClass} ${
                        !checked ? "cursor-pointer hover:shadow-sm" : ""
                      }`}
                      data-testid={`flowchart-slot-${slotIdx}`}
                    >
                      {label ? (
                        <span className="text-sm font-bold" style={!checked ? { color: accentColor } : undefined}>
                          {label}
                        </span>
                      ) : (
                        <span className="text-sm font-semibold text-[var(--color-text-muted)] italic">
                          {selectedBank ? "Tap to place" : "Empty slot"}
                        </span>
                      )}
                      {checked && isWrongStep && (
                        <div className="text-xs font-bold text-[var(--color-correct)] mt-0.5">
                          Correct: {item.steps[slotIdx]?.label}
                        </div>
                      )}
                    </button>
                  </div>

                  {/* Arrow between slots */}
                  {slotIdx < placedSteps.length - 1 && (
                    <div className="flex items-center gap-3 my-1">
                      <div className="w-8 flex justify-center">
                        <div className="text-[var(--color-text-muted)] text-lg">↓</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Answer Bank */}
          {!checked && (
            <div className="mb-4">
              <div className="text-sm uppercase tracking-wider font-bold text-[var(--color-text-muted)] mb-2">
                Step bank
              </div>
              <div className="flex flex-wrap gap-1.5">
                {availableBank.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => handleBankClick(step.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                      selectedBank === step.id
                        ? "border-2 border-[var(--color-selected)] bg-[var(--color-selected-bg)] text-[var(--color-selected)]"
                        : "border border-[var(--color-border)] hover:bg-[var(--color-surface)] hover:shadow-sm"
                    }`}
                    data-testid={`flowchart-bank-${step.id}`}
                  >
                    {step.label}
                  </button>
                ))}
                {availableBank.length === 0 && (
                  <span className="text-sm font-semibold text-[var(--color-text-muted)] italic">
                    All steps placed
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Actions */}
          {!checked ? (
            <button
              onClick={handleCheck}
              disabled={!allFilled}
              className={`w-full py-3 rounded-xl font-bold text-base transition-colors disabled:opacity-40 uppercase tracking-wide ${
                allFilled
                  ? "bg-[var(--color-primary)] text-white shadow-sm hover:shadow-md transition-shadow"
                  : "bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
              }`}
              data-testid="flowchart-check"
            >
              Check Flowchart
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
            >
              <div
                className={`rounded-2xl p-4 text-base mb-3 ${
                  correctCount === item.steps.length
                    ? "bg-[var(--color-correct-bg)]"
                    : "bg-[var(--color-incorrect-bg)]"
                }`}
              >
                <p
                  className={`font-extrabold ${
                    correctCount === item.steps.length
                      ? "text-[var(--color-correct)]"
                      : "text-[var(--color-incorrect)]"
                  }`}
                >
                  {correctCount === item.steps.length
                    ? "Perfect!"
                    : `${correctCount} of ${item.steps.length} steps correct.`}
                </p>
                {correctCount < item.steps.length && (
                  <p className="text-sm font-semibold text-[var(--color-text-secondary)] mt-1">
                    Corrections are shown in the flowchart above.
                  </p>
                )}
              </div>

              <button
                onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-base text-white bg-[var(--color-primary)] shadow-sm hover:shadow-md transition-shadow uppercase tracking-wide"
                data-testid="flowchart-next"
              >
                {currentIndex < items.length - 1
                  ? "Next Flowchart"
                  : "Complete Flowcharts"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
