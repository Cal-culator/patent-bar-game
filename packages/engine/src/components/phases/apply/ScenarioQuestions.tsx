"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScenarioQuestion } from "../../../types";
import { useGameStore } from "../../../store/gameStore";
import { calculateXp } from "../../../lib/scoring";
import { shuffle, shuffleWithCorrectIndex } from "../../../lib/shuffle";

interface ScenarioQuestionsProps {
  questions: ScenarioQuestion[];
  onComplete: () => void;
  accentColor: string;
}

const DIFFICULTY_CONFIG: Record<
  1 | 2 | 3 | 4,
  { label: string; color: string }
> = {
  1: { label: "Easy", color: "#58CC02" },
  2: { label: "Medium", color: "#FF9600" },
  3: { label: "Hard", color: "#FF9600" },
  4: { label: "Expert", color: "#FF4B4B" },
};

export default function ScenarioQuestions({
  questions,
  onComplete,
  accentColor,
}: ScenarioQuestionsProps) {
  const addXp = useGameStore((s) => s.addXp);
  const multiplier = useGameStore((s) => s.streakMultiplier);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetSessionStreak = useGameStore((s) => s.resetSessionStreak);
  const recordAnswer = useGameStore((s) => s.recordAnswer);

  const [shuffledQuestions] = useState(() => shuffle(questions));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [startTime] = useState(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  const question = shuffledQuestions[currentIndex];

  const shuffledOpts = useMemo(
    () =>
      question
        ? shuffleWithCorrectIndex(question.options, question.correctIndex)
        : { options: [] as typeof questions[0]["options"], correctIndex: -1 },
    [question]
  );

  if (!question) return null;

  const diffConfig = DIFFICULTY_CONFIG[question.difficulty];
  const isCorrect = selectedAnswer === shuffledOpts.correctIndex;

  const handleSelectAnswer = (optionIndex: number) => {
    if (answered) return;

    setSelectedAnswer(optionIndex);
    setAnswered(true);

    const correct = optionIndex === shuffledOpts.correctIndex;
    const timeMs = Date.now() - questionStartTime;

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
      selectedIndex: optionIndex,
      correct,
      timeMs,
      lifelineUsed: false,
      timestamp: Date.now(),
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setQuestionStartTime(Date.now());
    } else {
      onComplete();
    }
  };

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold text-[var(--color-text-muted)]">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span className="text-xs font-mono font-bold" style={{ color: accentColor }}>
            {question.citationRef}
          </span>
        </div>
        <div className="h-4 bg-[var(--color-border)] rounded-full overflow-hidden">
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
          {/* Difficulty badge */}
          <div className="mb-3">
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: `${diffConfig.color}20`,
                color: diffConfig.color,
              }}
              data-testid="difficulty-badge"
            >
              {diffConfig.label}
            </span>
          </div>

          {/* Stem */}
          <div className="bg-white rounded-2xl p-4 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] mb-4">
            <p className="text-sm text-[var(--color-text-primary)] leading-relaxed font-semibold">
              {question.stem}
            </p>
          </div>

          {/* Options */}
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
                } else if (
                  isSelected &&
                  !isCorrectOption
                ) {
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
                  onClick={() => handleSelectAnswer(i)}
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

          {/* Feedback */}
          {answered && (
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
                  {isCorrect ? "Correct!" : "Incorrect"}
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

              <button
                onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-sm text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide"
              >
                {currentIndex < questions.length - 1
                  ? "Next Question"
                  : "Complete Scenarios"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
