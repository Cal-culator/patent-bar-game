"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuickFireQuestion } from "@/types";
import { useGameStore } from "@/stores/gameStore";
import { calculateXp } from "@/lib/scoring";
import { shuffle } from "@/lib/shuffle";

interface QuickFireRoundProps {
  questions: QuickFireQuestion[];
  onComplete: () => void;
  accentColor: string;
}

const TIMER_SECONDS = 10;

export default function QuickFireRound({
  questions,
  onComplete,
  accentColor,
}: QuickFireRoundProps) {
  const addXp = useGameStore((s) => s.addXp);
  const multiplier = useGameStore((s) => s.streakMultiplier);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetSessionStreak = useGameStore((s) => s.resetSessionStreak);
  const recordAnswer = useGameStore((s) => s.recordAnswer);

  const [shuffledQuestions] = useState(() => shuffle(questions));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedTrue, setSelectedTrue] = useState<boolean | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [correctCount, setCorrectCount] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const question = shuffledQuestions[currentIndex];

  const handleAnswer = useCallback(
    (choice: boolean | null) => {
      if (answered || !question) return;

      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      const correct = choice === question.isTrue;
      setSelectedTrue(choice);
      setAnswered(true);
      setIsCorrect(correct);

      if (correct) {
        setCorrectCount((c) => c + 1);
      }

      const timeMs = (TIMER_SECONDS - timeLeft) * 1000;
      const xp = calculateXp("apply", correct, multiplier, timeMs);
      addXp(xp);

      if (correct) {
        incrementStreak();
      } else {
        resetSessionStreak();
      }

      recordAnswer({
        questionId: question.id,
        phase: "apply",
        selectedIndex: choice === true ? 0 : choice === false ? 1 : -1,
        correct,
        timeMs,
        lifelineUsed: false,
        timestamp: Date.now(),
      });
    },
    [
      answered,
      question,
      multiplier,
      timeLeft,
      addXp,
      incrementStreak,
      resetSessionStreak,
      recordAnswer,
    ]
  );

  // Timer
  useEffect(() => {
    if (answered) return;

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
  }, [currentIndex, answered, handleAnswer]);

  if (!question) return null;

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedTrue(null);
      setAnswered(false);
      setIsCorrect(false);
      setTimeLeft(TIMER_SECONDS);
    } else {
      onComplete();
    }
  };

  const progress = ((currentIndex + 1) / questions.length) * 100;
  const timerPercent = (timeLeft / TIMER_SECONDS) * 100;

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress + running score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-bold text-[var(--color-text-muted)]">
            Item {currentIndex + 1} of {questions.length}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold" data-testid="running-score">
              {correctCount}/{currentIndex + (answered ? 1 : 0)} correct
            </span>
            {!answered && (
              <span
                className="text-sm font-mono font-bold"
                style={{
                  color:
                    timeLeft <= 3 ? "var(--color-incorrect)" : accentColor,
                }}
                data-testid="timer-display"
              >
                {timeLeft}s
              </span>
            )}
          </div>
        </div>
        <div className="h-2.5 bg-[var(--color-border)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--color-primary)] rounded-full"
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Timer bar */}
      {!answered && (
        <div className="h-2 bg-[var(--color-border)] rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full rounded-full"
            style={{
              backgroundColor:
                timeLeft <= 3 ? "var(--color-incorrect)" : "var(--color-primary)",
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
          {/* Statement */}
          <div className="bg-white rounded-2xl p-5 border border-[var(--color-border)] shadow-sm mb-6">
            <p className="text-base text-[var(--color-text-primary)] leading-relaxed text-center font-bold">
              {question.statement}
            </p>
          </div>

          {/* TRUE / FALSE buttons */}
          {!answered && (
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button
                onClick={() => handleAnswer(true)}
                className="py-4 rounded-xl border-2 border-[var(--color-correct)] text-[var(--color-correct)] font-bold text-lg hover:bg-[var(--color-correct-bg)] transition-all hover:shadow-sm uppercase tracking-wide"
                data-testid="true-button"
              >
                TRUE
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="py-4 rounded-xl border-2 border-[var(--color-incorrect)] text-[var(--color-incorrect)] font-bold text-lg hover:bg-[var(--color-incorrect-bg)] transition-all hover:shadow-sm uppercase tracking-wide"
                data-testid="false-button"
              >
                FALSE
              </button>
            </div>
          )}

          {/* Feedback */}
          {answered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
            >
              <div
                className={`rounded-2xl p-4 text-base mb-3 ${
                  isCorrect
                    ? "bg-[var(--color-correct-bg)]"
                    : "bg-[var(--color-incorrect-bg)]"
                }`}
              >
                <p className={`font-extrabold mb-1 ${isCorrect ? "text-[var(--color-correct)]" : "text-[var(--color-incorrect)]"}`}>
                  {selectedTrue === null
                    ? "Time's up!"
                    : isCorrect
                      ? "Correct!"
                      : "Incorrect"}
                </p>
                <p className="text-sm font-semibold text-[var(--color-text-muted)] mb-2">
                  The answer is{" "}
                  <span className="font-bold text-[var(--color-text-primary)]">
                    {question.isTrue ? "TRUE" : "FALSE"}
                  </span>
                </p>
                <p className="text-[var(--color-text-secondary)] text-sm font-semibold">
                  {question.explanation}
                </p>
                <p
                  className="text-sm font-mono font-bold mt-1"
                  style={{ color: accentColor }}
                >
                  {question.citationRef}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-base text-white bg-[var(--color-primary)] shadow-sm hover:shadow-md transition-shadow uppercase tracking-wide"
              >
                {currentIndex < questions.length - 1
                  ? "Next"
                  : "Complete Quick-Fire"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
