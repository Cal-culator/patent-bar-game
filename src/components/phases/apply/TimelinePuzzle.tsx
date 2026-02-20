"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TimelinePuzzleData } from "@/types";
import { useGameStore } from "@/stores/gameStore";
import { calculateXp, calculateCoins } from "@/lib/scoring";
import { shuffle } from "@/lib/shuffle";

interface TimelinePuzzleProps {
  items: TimelinePuzzleData[];
  onComplete: () => void;
  accentColor: string;
}

export default function TimelinePuzzle({
  items,
  onComplete,
  accentColor,
}: TimelinePuzzleProps) {
  const addXp = useGameStore((s) => s.addXp);
  const addCoins = useGameStore((s) => s.addCoins);
  const multiplier = useGameStore((s) => s.streakMultiplier);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetSessionStreak = useGameStore((s) => s.resetSessionStreak);
  const recordAnswer = useGameStore((s) => s.recordAnswer);

  const [shuffledItems] = useState(() => shuffle(items));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [orderedIds, setOrderedIds] = useState<string[]>([]);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const item = shuffledItems[currentIndex];
  if (!item) return null;

  // Shuffle events on mount per item
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialShuffled = useMemo(() => shuffle(item.events), [currentIndex]);

  // Initialize orderedIds from shuffled events when moving to a new item
  if (orderedIds.length === 0 && initialShuffled.length > 0) {
    // Use a micro-pattern: set state in render only if empty (safe for initial mount)
    // We need to use useEffect or lazy init — let's use the pattern from the codebase
  }

  // We'll use a derived state approach: orderedIds tracks current user arrangement
  const effectiveOrder = orderedIds.length > 0 ? orderedIds : initialShuffled.map((e) => e.id);
  const eventsMap = useMemo(() => {
    const map = new Map<string, (typeof item.events)[0]>();
    item.events.forEach((e) => map.set(e.id, e));
    return map;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleCardClick = (idx: number) => {
    if (checked) return;

    const currentOrder = [...effectiveOrder];

    if (selectedIdx === null) {
      setSelectedIdx(idx);
    } else if (selectedIdx === idx) {
      setSelectedIdx(null);
    } else {
      // Swap the two items
      const temp = currentOrder[selectedIdx];
      currentOrder[selectedIdx] = currentOrder[idx];
      currentOrder[idx] = temp;
      setOrderedIds(currentOrder);
      setSelectedIdx(null);
    }
  };

  const handleCheck = () => {
    const correctOrder = item.events.map((e) => e.id);
    let correct = 0;
    effectiveOrder.forEach((id, i) => {
      if (correctOrder[i] === id) correct++;
    });

    setCorrectCount(correct);
    setChecked(true);

    const total = item.events.length;
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
      setOrderedIds([]);
      setSelectedIdx(null);
      setChecked(false);
      setCorrectCount(0);
    } else {
      onComplete();
    }
  };

  const progress = ((currentIndex + 1) / shuffledItems.length) * 100;
  const correctOrder = item.events.map((e) => e.id);

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-bold text-[var(--color-text-muted)]">
            Timeline {currentIndex + 1} of {shuffledItems.length}
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

          {/* Timeline track */}
          <div className="space-y-2 mb-4" data-testid="timeline-track">
            {effectiveOrder.map((id, idx) => {
              const event = eventsMap.get(id);
              if (!event) return null;

              const isSelected = selectedIdx === idx;
              const isCorrectPosition = checked && correctOrder[idx] === id;
              const isWrongPosition = checked && correctOrder[idx] !== id;

              let borderClass = "border-[var(--color-border)]";
              let bgClass = "bg-white";

              if (isCorrectPosition) {
                borderClass = "border-[var(--color-correct)]";
                bgClass = "bg-[var(--color-correct-bg)]";
              } else if (isWrongPosition) {
                borderClass = "border-[var(--color-incorrect)]";
                bgClass = "bg-[var(--color-incorrect-bg)]";
              } else if (isSelected) {
                borderClass = "border-[var(--color-selected)]";
                bgClass = "bg-[var(--color-selected-bg)]";
              }

              return (
                <div key={id} className="flex items-start gap-3">
                  {/* Step number */}
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold text-white mt-2"
                    style={{ backgroundColor: isCorrectPosition ? "var(--color-correct)" : isWrongPosition ? "var(--color-incorrect)" : accentColor }}
                  >
                    {idx + 1}
                  </div>

                  {/* Connector line */}
                  {idx < effectiveOrder.length - 1 && (
                    <div className="absolute left-[13px] top-9 w-0.5 h-4 bg-[var(--color-border)]" />
                  )}

                  {/* Card */}
                  <motion.button
                    layout
                    onClick={() => handleCardClick(idx)}
                    className={`flex-1 text-left px-3 py-2.5 rounded-xl border transition-all ${borderClass} ${bgClass} ${
                      !checked ? "cursor-pointer hover:shadow-sm" : ""
                    }`}
                    data-testid={`timeline-card-${idx}`}
                  >
                    <div className="text-sm font-bold text-[var(--color-text-primary)]">
                      {event.label}
                    </div>
                    <div className="text-xs font-semibold text-[var(--color-text-secondary)] mt-0.5">
                      {event.description}
                    </div>
                    {checked && isWrongPosition && (
                      <div className="text-xs font-bold text-[var(--color-correct)] mt-1">
                        Correct position: {correctOrder.indexOf(id) + 1}
                      </div>
                    )}
                  </motion.button>
                </div>
              );
            })}
          </div>

          {/* Hint */}
          {!checked && selectedIdx !== null && (
            <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-3 text-center">
              Tap another card to swap positions
            </p>
          )}

          {/* Actions */}
          {!checked ? (
            <button
              onClick={handleCheck}
              className="w-full py-3 rounded-xl font-bold text-base transition-colors uppercase tracking-wide bg-[var(--color-primary)] text-white shadow-sm hover:shadow-md transition-shadow"
              data-testid="timeline-check"
            >
              Check Order
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
            >
              <div
                className={`rounded-2xl p-4 text-base mb-3 ${
                  correctCount === item.events.length
                    ? "bg-[var(--color-correct-bg)]"
                    : "bg-[var(--color-incorrect-bg)]"
                }`}
              >
                <p
                  className={`font-extrabold ${
                    correctCount === item.events.length
                      ? "text-[var(--color-correct)]"
                      : "text-[var(--color-incorrect)]"
                  }`}
                >
                  {correctCount === item.events.length
                    ? "Perfect order!"
                    : `${correctCount} of ${item.events.length} in correct position.`}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-base text-white bg-[var(--color-primary)] shadow-sm hover:shadow-md transition-shadow uppercase tracking-wide"
                data-testid="timeline-next"
              >
                {currentIndex < shuffledItems.length - 1
                  ? "Next Timeline"
                  : "Complete Timelines"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
