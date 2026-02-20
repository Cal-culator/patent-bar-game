"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BossQuestion } from "../../../types";
import { useGameStore } from "../../../store/gameStore";
import { calculateXp } from "../../../lib/scoring";
import { shuffle, shuffleWithCorrectIndex } from "../../../lib/shuffle";

interface BossBattleProps {
  questions: BossQuestion[];
  onComplete: (scorePercent: number) => void;
  accentColor: string;
}

const MAX_LIVES = 3;
const QUESTION_TIME = 45; // seconds

type Screen = "intro" | "question" | "defeated" | "results";

interface QuestionResult {
  questionId: string;
  correct: boolean;
  timeMs: number;
  selectedAnswer: string;
}

export default function BossBattle({
  questions,
  onComplete,
  accentColor,
}: BossBattleProps) {
  const addXp = useGameStore((s) => s.addXp);
  const multiplier = useGameStore((s) => s.streakMultiplier);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetSessionStreak = useGameStore((s) => s.resetSessionStreak);
  const recordAnswer = useGameStore((s) => s.recordAnswer);

  const [shuffledQuestions] = useState(() => shuffle(questions));
  const [screen, setScreen] = useState<Screen>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [correctCount, setCorrectCount] = useState(0);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);

  const question = shuffledQuestions[currentIndex];

  const shuffledOpts = useMemo(() => {
    if (!question || question.questionType !== "scenario" || !question.options || question.correctIndex === undefined) {
      return null;
    }
    return shuffleWithCorrectIndex(question.options, question.correctIndex);
  }, [question]);

  // Timer countdown
  useEffect(() => {
    if (screen !== "question" || answered) return;
    setTimeLeft(QUESTION_TIME);

    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [screen, currentIndex, answered]);

  // Handle timeout
  const handleTimeout = useCallback(() => {
    if (answered || screen !== "question") return;

    setAnswered(true);
    setSelectedAnswer(-1); // timeout marker

    const timeMs = QUESTION_TIME * 1000;
    const newLives = lives - 1;
    setLives(newLives);
    resetSessionStreak();

    recordAnswer({
      questionId: question.id,
      phase: "boss",
      selectedIndex: -1,
      correct: false,
      timeMs,
      lifelineUsed: false,
      timestamp: Date.now(),
    });

    setResults((prev) => [
      ...prev,
      { questionId: question.id, correct: false, timeMs, selectedAnswer: "Timeout" },
    ]);

    if (newLives <= 0) {
      setTimeout(() => setScreen("defeated"), 1500);
    }
  }, [answered, screen, lives, question, resetSessionStreak, recordAnswer]);

  useEffect(() => {
    if (timeLeft === 0 && screen === "question" && !answered) {
      handleTimeout();
    }
  }, [timeLeft, screen, answered, handleTimeout]);

  const handleStart = () => {
    setScreen("question");
    setQuestionStartTime(Date.now());
  };

  const handleSelectScenarioAnswer = (optionIndex: number) => {
    if (answered) return;
    setSelectedAnswer(optionIndex);
    setAnswered(true);

    const correct = shuffledOpts ? optionIndex === shuffledOpts.correctIndex : false;
    const timeMs = Date.now() - questionStartTime;
    processAnswer(correct, timeMs, `Option ${String.fromCharCode(65 + optionIndex)}`);
  };

  const handleTrueFalseAnswer = (answer: boolean) => {
    if (answered) return;
    setSelectedAnswer(answer ? 1 : 0);
    setAnswered(true);

    const correct = answer === question.isTrue;
    const timeMs = Date.now() - questionStartTime;
    processAnswer(correct, timeMs, answer ? "True" : "False");
  };

  const processAnswer = (correct: boolean, timeMs: number, answerText: string) => {
    const xp = calculateXp("boss", correct, multiplier, timeMs);
    addXp(xp);

    if (correct) {
      incrementStreak();
      setCorrectCount((c) => c + 1);
    } else {
      resetSessionStreak();
      const newLives = lives - 1;
      setLives(newLives);
      if (newLives <= 0) {
        setTimeout(() => setScreen("defeated"), 1500);
      }
    }

    recordAnswer({
      questionId: question.id,
      phase: "boss",
      selectedIndex: selectedAnswer ?? -1,
      correct,
      timeMs,
      lifelineUsed: false,
      timestamp: Date.now(),
    });

    setResults((prev) => [
      ...prev,
      { questionId: question.id, correct, timeMs, selectedAnswer: answerText },
    ]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setQuestionStartTime(Date.now());
    } else {
      // All questions answered — show detailed results first
      setScreen("results");
    }
  };

  const handleRestart = () => {
    setScreen("intro");
    setCurrentIndex(0);
    setLives(MAX_LIVES);
    setCorrectCount(0);
    setResults([]);
    setSelectedAnswer(null);
    setAnswered(false);
  };

  const isCurrentCorrect = (): boolean => {
    if (question.questionType === "scenario") {
      return shuffledOpts ? selectedAnswer === shuffledOpts.correctIndex : false;
    }
    return (selectedAnswer === 1) === question.isTrue;
  };

  const currentIsCorrect = answered && selectedAnswer !== -1 && isCurrentCorrect();

  // Stars calculation
  const scorePercent = Math.round((correctCount / questions.length) * 100);
  const stars = scorePercent >= 90 ? 3 : scorePercent >= 75 ? 2 : scorePercent >= 60 ? 1 : 0;
  const avgTime = results.length > 0
    ? Math.round(results.reduce((sum, r) => sum + r.timeMs, 0) / results.length / 1000)
    : 0;
  const bestStreak = (() => {
    let max = 0;
    let cur = 0;
    for (const r of results) {
      if (r.correct) { cur++; max = Math.max(max, cur); }
      else { cur = 0; }
    }
    return max;
  })();

  // ---- RENDER ----

  // Intro screen
  if (screen === "intro") {
    return (
      <div className="max-w-xl mx-auto text-center py-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
          className="text-6xl mb-4"
        >
          {"\uD83D\uDC7E"}
        </motion.div>
        <h2 className="text-2xl font-extrabold text-[var(--color-text-primary)] mb-2">Boss Battle</h2>
        <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-6">
          10 questions. 3 lives. 45 seconds each.
          <br />
          Good luck.
        </p>
        <div className="flex justify-center gap-4 mb-6 text-sm font-bold text-[var(--color-text-secondary)]">
          <div className="flex items-center gap-1">
            <span className="text-[var(--color-incorrect)]">{"\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F"}</span> 3 Lives
          </div>
          <div className="flex items-center gap-1">
            <span>{"\u23F1\uFE0F"}</span> 45s per question
          </div>
        </div>
        <button
          onClick={handleStart}
          className="px-8 py-3 rounded-xl font-bold text-sm text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide"
          data-testid="boss-start"
        >
          Begin Battle
        </button>
      </div>
    );
  }

  // Defeated screen
  if (screen === "defeated") {
    return (
      <div className="max-w-xl mx-auto text-center py-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
          className="text-6xl mb-4"
        >
          {"\uD83D\uDC80"}
        </motion.div>
        <h2 className="text-2xl font-extrabold text-[var(--color-incorrect)] mb-2">Defeated!</h2>
        <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-2">
          You ran out of lives at question {currentIndex + 1} of {questions.length}.
        </p>
        <p className="text-sm font-bold text-[var(--color-text-secondary)] mb-6">
          Score: {correctCount}/{questions.length} correct
        </p>
        <button
          onClick={handleRestart}
          className="px-8 py-3 rounded-xl font-bold text-sm text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide"
          data-testid="boss-retry"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Results screen
  if (screen === "results") {
    return (
      <div className="max-w-xl mx-auto py-8">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
            className="text-5xl mb-3"
          >
            {stars >= 2 ? "\uD83C\uDFC6" : "\uD83D\uDC7E"}
          </motion.div>
          <h2 className="text-2xl font-extrabold text-[var(--color-text-primary)] mb-1">Battle Complete!</h2>
          <p className="text-4xl font-extrabold" style={{ color: accentColor }}>
            {scorePercent}%
          </p>

          {/* Stars */}
          <div className="flex justify-center gap-1 mt-2 mb-4" data-testid="boss-stars">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + i * 0.2 }}
                className={`text-2xl ${i < stars ? "text-[var(--color-xp)]" : "text-[var(--color-text-muted)]"}`}
              >
                {"\u2605"}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-2xl p-3 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] text-center">
            <p className="text-xs font-bold text-[var(--color-text-muted)]">Accuracy</p>
            <p className="text-lg font-extrabold text-[var(--color-text-primary)]">{correctCount}/{questions.length}</p>
          </div>
          <div className="bg-white rounded-2xl p-3 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] text-center">
            <p className="text-xs font-bold text-[var(--color-text-muted)]">Avg Time</p>
            <p className="text-lg font-extrabold text-[var(--color-text-primary)]">{avgTime}s</p>
          </div>
          <div className="bg-white rounded-2xl p-3 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] text-center">
            <p className="text-xs font-bold text-[var(--color-text-muted)]">Best Streak</p>
            <p className="text-lg font-extrabold text-[var(--color-text-primary)]">{bestStreak}</p>
          </div>
        </div>

        {/* Per-question breakdown */}
        <div className="bg-white rounded-2xl border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] p-4 mb-6">
          <h3 className="text-sm font-extrabold text-[var(--color-text-primary)] mb-3">Question Breakdown</h3>
          <div className="space-y-2">
            {results.map((r, i) => (
              <div
                key={r.questionId}
                className="flex items-center justify-between text-xs font-semibold"
              >
                <span className="text-[var(--color-text-secondary)]">
                  Q{i + 1}
                </span>
                <span className="flex-1 mx-3 truncate text-[var(--color-text-muted)]">
                  {shuffledQuestions[i]?.stem.slice(0, 50)}...
                </span>
                <span
                  className={`font-bold ${
                    r.correct ? "text-[var(--color-correct)]" : "text-[var(--color-incorrect)]"
                  }`}
                >
                  {r.correct ? "\u2713" : "\u2717"} {Math.round(r.timeMs / 1000)}s
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Continue button */}
        <button
          onClick={() => onComplete(scorePercent)}
          className="w-full py-3 rounded-xl font-bold text-sm text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide"
          data-testid="boss-continue"
        >
          Continue
        </button>
      </div>
    );
  }

  // Question screen
  const timerPercent = (timeLeft / QUESTION_TIME) * 100;
  const timerColor = timeLeft <= 10 ? "var(--color-incorrect)" : timeLeft <= 20 ? "var(--color-xp)" : "var(--color-primary)";

  return (
    <div className="max-w-xl mx-auto">
      {/* Top bar: Lives + Score + Timer */}
      <div className="flex items-center justify-between mb-4">
        {/* Lives */}
        <div className="flex gap-1" data-testid="boss-lives">
          {Array.from({ length: MAX_LIVES }).map((_, i) => (
            <span
              key={i}
              className={`text-lg transition-opacity ${i < lives ? "" : "opacity-20"}`}
            >
              {"\u2764\uFE0F"}
            </span>
          ))}
        </div>

        {/* Score */}
        <span className="text-sm font-bold text-[var(--color-text-secondary)]">
          {correctCount}/{questions.length} correct
        </span>

        {/* Question number */}
        <span className="text-xs font-bold text-[var(--color-text-muted)]">
          Q{currentIndex + 1}/{questions.length}
        </span>
      </div>

      {/* Timer bar */}
      <div className="mb-4" data-testid="boss-timer">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold text-[var(--color-text-muted)]">Time</span>
          <span
            className="text-xs font-mono font-bold"
            style={{ color: timerColor }}
          >
            {timeLeft}s
          </span>
        </div>
        <div className="h-4 bg-[var(--color-border)] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: timerColor }}
            animate={{ width: `${timerPercent}%` }}
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
        >
          {/* Question type badge */}
          <div className="mb-3 flex items-center gap-2">
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{
                backgroundColor:
                  question.questionType === "scenario"
                    ? `${accentColor}20`
                    : "rgba(206, 130, 255, 0.15)",
                color:
                  question.questionType === "scenario"
                    ? accentColor
                    : "#CE82FF",
              }}
            >
              {question.questionType === "scenario" ? "Scenario" : "True / False"}
            </span>
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: question.difficulty === 4 ? "rgba(255, 75, 75, 0.15)" : "rgba(255, 150, 0, 0.15)",
                color: question.difficulty === 4 ? "#FF4B4B" : "#FF9600",
              }}
            >
              {question.difficulty === 4 ? "Expert" : "Hard"}
            </span>
          </div>

          {/* Stem */}
          <div className="bg-white rounded-2xl p-4 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] mb-4">
            <p className="text-sm text-[var(--color-text-primary)] leading-relaxed font-semibold">
              {question.stem}
            </p>
          </div>

          {/* Answer options */}
          {question.questionType === "scenario" && shuffledOpts && (
            <div className="space-y-3 mb-4">
              {shuffledOpts.options.map((opt, i) => {
                const letter = String.fromCharCode(65 + i);
                const isSelected = selectedAnswer === i;
                const isCorrectOption = i === shuffledOpts.correctIndex;

                let cardClass = "border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] hover:bg-[var(--color-surface)] active:border-b-2 active:translate-y-[2px]";

                if (answered) {
                  if (isCorrectOption) {
                    cardClass =
                      "border-2 border-b-4 border-[var(--color-correct)] border-b-[var(--color-correct-shadow)] bg-[var(--color-correct-bg)]";
                  } else if (isSelected && !isCorrectOption) {
                    cardClass =
                      "border-2 border-b-4 border-[var(--color-incorrect)] border-b-[var(--color-incorrect-shadow)] bg-[var(--color-incorrect-bg)]";
                  } else {
                    cardClass =
                      "border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border)] opacity-40";
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectScenarioAnswer(i)}
                    disabled={answered}
                    data-testid={`option-${i}${isCorrectOption ? '-correct' : ''}`}
                    className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-all ${cardClass}`}
                  >
                    <span className="text-[var(--color-text-muted)] mr-2 font-bold">
                      {letter})
                    </span>
                    {opt.text}
                  </button>
                );
              })}
            </div>
          )}

          {question.questionType === "true_false" && (
            <div className="flex gap-3 mb-4">
              {[true, false].map((val) => {
                const isSelected = answered && selectedAnswer === (val ? 1 : 0);
                const isCorrectOption = val === question.isTrue;

                let cardClass = "border-2 border-b-4 hover:bg-[var(--color-surface)] active:border-b-2 active:translate-y-[2px]";

                if (!answered) {
                  cardClass += val
                    ? " border-[var(--color-correct)] border-b-[var(--color-correct-shadow)]"
                    : " border-[var(--color-incorrect)] border-b-[var(--color-incorrect-shadow)]";
                } else {
                  if (isCorrectOption) {
                    cardClass = "border-2 border-b-4 border-[var(--color-correct)] border-b-[var(--color-correct-shadow)] bg-[var(--color-correct-bg)]";
                  } else if (isSelected && !isCorrectOption) {
                    cardClass = "border-2 border-b-4 border-[var(--color-incorrect)] border-b-[var(--color-incorrect-shadow)] bg-[var(--color-incorrect-bg)]";
                  } else {
                    cardClass = "border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border)] opacity-40";
                  }
                }

                return (
                  <button
                    key={val.toString()}
                    onClick={() => handleTrueFalseAnswer(val)}
                    disabled={answered}
                    className={`flex-1 rounded-xl p-4 text-center font-bold text-sm transition-all uppercase tracking-wide ${cardClass}`}
                    style={!answered ? { color: val ? "var(--color-correct)" : "var(--color-incorrect)" } : undefined}
                    data-testid={`boss-tf-${val}${val === question.isTrue ? '-correct' : ''}`}
                  >
                    {val ? "True" : "False"}
                  </button>
                );
              })}
            </div>
          )}

          {/* Timeout feedback */}
          {answered && selectedAnswer === -1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="rounded-2xl p-4 text-sm mb-3 bg-[var(--color-incorrect-bg)]">
                <p className="font-extrabold mb-1 text-[var(--color-incorrect)]">Time&apos;s up!</p>
                <p className="text-[var(--color-text-secondary)] text-xs font-semibold">
                  {question.explanation}
                </p>
                <p className="text-xs font-mono font-bold mt-1" style={{ color: accentColor }}>
                  {question.citationRef}
                </p>
              </div>
            </motion.div>
          )}

          {/* Answer feedback */}
          {answered && selectedAnswer !== -1 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
            >
              <div
                className={`rounded-2xl p-4 text-sm mb-3 ${
                  currentIsCorrect
                    ? "bg-[var(--color-correct-bg)]"
                    : "bg-[var(--color-incorrect-bg)]"
                }`}
              >
                <p className={`font-extrabold mb-1 ${currentIsCorrect ? "text-[var(--color-correct)]" : "text-[var(--color-incorrect)]"}`}>
                  {currentIsCorrect ? "Correct!" : "Incorrect"}
                </p>
                <p className="text-[var(--color-text-secondary)] text-xs font-semibold">
                  {question.explanation}
                </p>
                <p
                  className="text-xs font-mono font-bold mt-1"
                  style={{ color: accentColor }}
                >
                  {question.citationRef}
                </p>
              </div>
            </motion.div>
          )}

          {/* Next button */}
          {answered && lives > 0 && (
            <button
              onClick={handleNext}
              className="w-full py-3 rounded-xl font-bold text-sm text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide"
            >
              {currentIndex < questions.length - 1
                ? "Next Question"
                : "See Results"}
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
