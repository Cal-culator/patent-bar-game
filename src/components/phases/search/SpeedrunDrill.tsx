"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpeedrunPrompt } from "@/types";
import { useGameStore } from "@/stores/gameStore";
import { calculateXp } from "@/lib/scoring";
import { calculateSpeedrunScore } from "@/lib/search-scoring";
import { shuffle } from "@/lib/shuffle";

interface SpeedrunDrillProps {
  prompts: SpeedrunPrompt[];
  onComplete: () => void;
  accentColor: string;
}

const TIMER_SECONDS = 30;

function normalizeAnswer(input: string): string {
  return input
    .trim()
    .replace(/§/g, "")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function checkAnswer(input: string, acceptedAnswers: string[]): boolean {
  const normalized = normalizeAnswer(input);
  return acceptedAnswers.some(
    (accepted) => normalizeAnswer(accepted) === normalized
  );
}

export default function SpeedrunDrill({
  prompts,
  onComplete,
  accentColor,
}: SpeedrunDrillProps) {
  const addXp = useGameStore((s) => s.addXp);
  const multiplier = useGameStore((s) => s.streakMultiplier);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetSessionStreak = useGameStore((s) => s.resetSessionStreak);
  const recordAnswer = useGameStore((s) => s.recordAnswer);

  const [shuffledPrompts] = useState(() => shuffle(prompts));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [promptStartTime, setPromptStartTime] = useState(Date.now());
  const [correctCount, setCorrectCount] = useState(0);
  const [lastRating, setLastRating] = useState<
    "fast" | "average" | "slow" | null
  >(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const prompt = shuffledPrompts[currentIndex];

  const handleSubmit = useCallback(
    (input: string | null) => {
      if (submitted || !prompt) return;

      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      const timeMs = Date.now() - promptStartTime;
      const correct = input !== null && checkAnswer(input, prompt.acceptedAnswers);

      setSubmitted(true);
      setIsCorrect(correct);

      const { rating } = calculateSpeedrunScore({
        correct,
        timeMs,
        difficulty: prompt.difficulty,
      });
      setLastRating(rating);

      if (correct) {
        setCorrectCount((c) => c + 1);
        incrementStreak();
      } else {
        resetSessionStreak();
      }

      const xp = calculateXp("search", correct, multiplier, timeMs);
      addXp(xp);

      recordAnswer({
        questionId: prompt.id,
        phase: "search",
        selectedIndex: correct ? 0 : -1,
        correct,
        timeMs,
        lifelineUsed: false,
        timestamp: Date.now(),
      });
    },
    [
      submitted,
      prompt,
      promptStartTime,
      multiplier,
      addXp,
      incrementStreak,
      resetSessionStreak,
      recordAnswer,
    ]
  );

  // Timer
  useEffect(() => {
    if (submitted) return;

    setTimeLeft(TIMER_SECONDS);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit(null);
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
  }, [currentIndex, submitted, handleSubmit]);

  // Auto-focus input
  useEffect(() => {
    if (!submitted) {
      inputRef.current?.focus();
    }
  }, [currentIndex, submitted]);

  if (!prompt) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && userInput.trim()) {
      handleSubmit(userInput);
    }
  };

  const handleNext = () => {
    if (currentIndex < prompts.length - 1) {
      setCurrentIndex((i) => i + 1);
      setUserInput("");
      setSubmitted(false);
      setIsCorrect(false);
      setTimeLeft(TIMER_SECONDS);
      setPromptStartTime(Date.now());
      setLastRating(null);
    } else {
      onComplete();
    }
  };

  const progress = ((currentIndex + 1) / prompts.length) * 100;
  const timerPercent = (timeLeft / TIMER_SECONDS) * 100;

  const DIFFICULTY_LABELS: Record<number, { label: string; color: string }> = {
    1: { label: "Easy", color: "#58CC02" },
    2: { label: "Medium", color: "#FF9600" },
    3: { label: "Hard", color: "#FF4B4B" },
  };
  const diff = DIFFICULTY_LABELS[prompt.difficulty];

  const RATING_CONFIG: Record<string, { label: string; color: string }> = {
    fast: { label: "Fast!", color: "#58CC02" },
    average: { label: "Average", color: "#FF9600" },
    slow: { label: "Slow", color: "#FF4B4B" },
  };

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress & running score */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-bold text-[var(--color-text-muted)]">
            Prompt {currentIndex + 1} of {prompts.length}
          </span>
          <span className="text-sm font-mono font-bold" style={{ color: accentColor }}>
            {correctCount}/{currentIndex + (submitted ? 1 : 0)} correct
          </span>
        </div>
        <div className="h-2.5 bg-[var(--color-border)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--color-primary)] rounded-full"
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Timer bar */}
      {!submitted && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-[var(--color-text-muted)]">
              Time remaining
            </span>
            <span
              className="text-sm font-mono font-bold"
              style={{
                color:
                  timeLeft <= 10 ? "var(--color-incorrect)" : accentColor,
              }}
              data-testid="speedrun-timer"
            >
              {timeLeft}s
            </span>
          </div>
          <div className="h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                backgroundColor:
                  timeLeft <= 10 ? "var(--color-incorrect)" : "var(--color-primary)",
              }}
              animate={{ width: `${timerPercent}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {/* Difficulty badge */}
          <div className="mb-3">
            <span
              className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: `${diff.color}20`,
                color: diff.color,
              }}
            >
              {diff.label}
            </span>
          </div>

          {/* Prompt */}
          <div className="bg-white rounded-2xl p-4 border border-[var(--color-border)] shadow-sm mb-4">
            <p className="text-sm font-bold text-[var(--color-text-muted)] mb-1">
              Name the section or statute:
            </p>
            <p className="text-base text-[var(--color-text-primary)] leading-relaxed font-bold">
              {prompt.prompt}
            </p>
          </div>

          {/* Input */}
          <div className="mb-4">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={submitted}
              placeholder="Type your answer (e.g., 35 USC 184)..."
              className="w-full text-base font-semibold bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-selected)] disabled:opacity-60"
              data-testid="speedrun-input"
            />
            {!submitted && (
              <button
                onClick={() => handleSubmit(userInput)}
                disabled={!userInput.trim()}
                className={`w-full mt-2 py-3 rounded-xl font-bold text-base transition-colors disabled:opacity-40 uppercase tracking-wide ${
                  userInput.trim()
                    ? "bg-[var(--color-primary)] text-white shadow-sm hover:shadow-md transition-shadow"
                    : "bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                }`}
              >
                Submit
              </button>
            )}
          </div>

          {/* Result */}
          {submitted && (
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
                <div className="flex items-center justify-between mb-1">
                  <p className={`font-extrabold ${isCorrect ? "text-[var(--color-correct)]" : "text-[var(--color-incorrect)]"}`}>
                    {timeLeft === 0 && !isCorrect
                      ? "Time's up!"
                      : isCorrect
                        ? "Correct!"
                        : "Incorrect"}
                  </p>
                  {lastRating && isCorrect && (
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${RATING_CONFIG[lastRating].color}20`,
                        color: RATING_CONFIG[lastRating].color,
                      }}
                      data-testid="speedrun-rating"
                    >
                      {RATING_CONFIG[lastRating].label}
                    </span>
                  )}
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm font-semibold mb-1">
                  {prompt.explanation}
                </p>
                <p
                  className="text-sm font-mono font-bold"
                  style={{ color: accentColor }}
                >
                  Answer: {prompt.canonicalAnswer}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-base text-white bg-[var(--color-primary)] shadow-sm hover:shadow-md transition-shadow uppercase tracking-wide"
              >
                {currentIndex < prompts.length - 1
                  ? "Next Prompt"
                  : "Complete Speedrun"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
