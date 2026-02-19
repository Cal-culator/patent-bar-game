"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SourceSortItem, SourceType } from "@/types";
import { useGameStore } from "@/stores/gameStore";
import { calculateXp, calculateCoins } from "@/lib/scoring";
import { shuffle } from "@/lib/shuffle";

interface SourceSorterProps {
  items: SourceSortItem[];
  onComplete: () => void;
  accentColor: string;
}

const BUCKETS: { value: SourceType; label: string; icon: string }[] = [
  { value: "statute", label: "Statute", icon: "📜" },
  { value: "regulation", label: "Regulation", icon: "📋" },
  { value: "mpep_guidance", label: "MPEP", icon: "📘" },
];

const TIMER_SECONDS = 15;

export default function SourceSorter({
  items,
  onComplete,
  accentColor,
}: SourceSorterProps) {
  const addXp = useGameStore((s) => s.addXp);
  const addCoins = useGameStore((s) => s.addCoins);
  const multiplier = useGameStore((s) => s.streakMultiplier);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetSessionStreak = useGameStore((s) => s.resetSessionStreak);
  const recordAnswer = useGameStore((s) => s.recordAnswer);

  const [shuffledItems] = useState(() => shuffle(items));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<SourceType | null>(null);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const item = shuffledItems[currentIndex];

  const handleAnswer = useCallback(
    (choice: SourceType | null) => {
      if (checked || !item) return;

      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      const correct = choice === item.correctSource;
      setSelected(choice);
      setChecked(true);
      setIsCorrect(correct);

      const xp = calculateXp("recognize", correct, multiplier);
      const coins = calculateCoins("recognize", correct);

      addXp(xp);
      if (coins > 0) addCoins(coins);

      if (correct) {
        incrementStreak();
      } else {
        resetSessionStreak();
      }

      recordAnswer({
        questionId: item.id,
        phase: "recognize",
        selectedIndex: choice
          ? BUCKETS.findIndex((b) => b.value === choice)
          : -1,
        correct,
        timeMs: (TIMER_SECONDS - timeLeft) * 1000,
        lifelineUsed: false,
        timestamp: Date.now(),
      });
    },
    [
      checked,
      item,
      multiplier,
      timeLeft,
      addXp,
      addCoins,
      incrementStreak,
      resetSessionStreak,
      recordAnswer,
    ]
  );

  // Timer
  useEffect(() => {
    if (checked) return;

    setTimeLeft(TIMER_SECONDS);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleAnswer(null); // timeout
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [currentIndex, checked, handleAnswer]);

  if (!item) return null;

  const handleBucketClick = (source: SourceType) => {
    if (checked) return;
    handleAnswer(source);
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setChecked(false);
      setIsCorrect(false);
      setTimeLeft(TIMER_SECONDS);
    } else {
      onComplete();
    }
  };

  const progress = ((currentIndex + 1) / items.length) * 100;
  const timerPercent = (timeLeft / TIMER_SECONDS) * 100;

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold text-[var(--color-text-muted)]">
            Item {currentIndex + 1} of {items.length}
          </span>
          {!checked && (
            <span
              className="text-xs font-mono font-bold"
              style={{
                color: timeLeft <= 5 ? "var(--color-incorrect)" : accentColor,
              }}
            >
              {timeLeft}s
            </span>
          )}
        </div>
        <div className="h-4 bg-[var(--color-border)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--color-primary)] rounded-full"
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Timer bar */}
      {!checked && (
        <div className="h-2 bg-[var(--color-border)] rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full rounded-full"
            style={{
              backgroundColor:
                timeLeft <= 5 ? "var(--color-incorrect)" : "var(--color-primary)",
            }}
            animate={{ width: `${timerPercent}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {/* Rule text */}
          <div className="bg-white rounded-2xl p-4 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] mb-4">
            <p className="text-sm text-[var(--color-text-primary)] leading-relaxed italic font-semibold">
              &ldquo;{item.ruleText}&rdquo;
            </p>
          </div>

          {/* Instruction */}
          <p className="text-xs font-bold text-[var(--color-text-muted)] mb-3 text-center">
            {checked
              ? ""
              : "Which type of legal source is this?"}
          </p>

          {/* Buckets */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {BUCKETS.map((bucket) => {
              const isSelected = selected === bucket.value;
              const isCorrectBucket = item.correctSource === bucket.value;

              let cardClass = "border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)]";
              let cardStyle: React.CSSProperties = {};

              if (checked) {
                if (isCorrectBucket) {
                  cardClass = "border-2 border-b-4 border-[var(--color-correct)] border-b-[var(--color-correct-shadow)] bg-[var(--color-correct-bg)]";
                } else if (isSelected && !isCorrectBucket) {
                  cardClass = "border-2 border-b-4 border-[var(--color-incorrect)] border-b-[var(--color-incorrect-shadow)] bg-[var(--color-incorrect-bg)]";
                } else {
                  cardClass = "border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border)] opacity-40";
                }
              }

              return (
                <button
                  key={bucket.value}
                  onClick={() => handleBucketClick(bucket.value)}
                  disabled={checked}
                  className={`flex flex-col items-center gap-1 py-4 rounded-xl transition-all active:border-b-2 active:translate-y-[2px] hover:bg-[var(--color-surface)] disabled:hover:bg-transparent ${cardClass}`}
                  style={cardStyle}
                >
                  <span className="text-2xl">{bucket.icon}</span>
                  <span className="text-xs font-bold text-[var(--color-text-secondary)]">
                    {bucket.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {checked && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
            >
              <div
                className={`rounded-2xl p-4 text-sm mb-3 ${
                  isCorrect
                    ? "bg-[var(--color-correct-bg)]"
                    : "bg-[var(--color-incorrect-bg)]"
                }`}
              >
                <p className={`font-extrabold mb-1 ${isCorrect ? "text-[var(--color-correct)]" : "text-[var(--color-incorrect)]"}`}>
                  {selected === null
                    ? "Time's up!"
                    : isCorrect
                      ? "Correct!"
                      : "Not quite."}
                </p>
                <p className="text-[var(--color-text-secondary)] text-xs font-semibold">
                  {item.explanation}
                </p>
                <p
                  className="text-xs font-mono font-bold mt-1"
                  style={{ color: accentColor }}
                >
                  {item.specificRef}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-sm text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide"
              >
                {currentIndex < items.length - 1
                  ? "Next Item"
                  : "Complete Source Sorter"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
