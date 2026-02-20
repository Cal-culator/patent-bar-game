"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrapDetectorQuestion } from "../../../types";
import { useGameStore } from "../../../store/gameStore";
import { calculateXp, calculateCoins } from "../../../lib/scoring";
import { shuffle, shuffleWithCorrectIndex } from "../../../lib/shuffle";
import { useAppConfig } from "../../../context";

interface TrapDetectorProps {
  questions: TrapDetectorQuestion[];
  onComplete: () => void;
  accentColor: string;
}

const TRAP_COLORS: Record<string, string> = {
  timeline_trap: "#FF9600",
  one_word_trap: "#FF4B4B",
  wrong_anchor: "#CE82FF",
  source_swap: "#1CB0F6",
  scope_creep: "#FF4B4B",
  verbatim_correct: "#58CC02",
};

type Stage = "tagging" | "answering" | "result";

export default function TrapDetector({
  questions,
  onComplete,
  accentColor,
}: TrapDetectorProps) {
  const config = useAppConfig();
  const TRAP_TYPE_OPTIONS = config.trapCategories;
  const TRAP_LABELS: Record<string, string> = Object.fromEntries(
    config.trapCategories.map((t) => [t.value, t.label])
  );

  const addXp = useGameStore((s) => s.addXp);
  const addCoins = useGameStore((s) => s.addCoins);
  const multiplier = useGameStore((s) => s.streakMultiplier);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetSessionStreak = useGameStore((s) => s.resetSessionStreak);
  const recordAnswer = useGameStore((s) => s.recordAnswer);

  const [shuffledQuestions] = useState(() => shuffle(questions));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stage, setStage] = useState<Stage>("tagging");
  const [tags, setTags] = useState<Record<number, string>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [tagScore, setTagScore] = useState(0);
  const [answerCorrect, setAnswerCorrect] = useState(false);

  const question = shuffledQuestions[currentIndex];

  const shuffledOpts = useMemo(
    () =>
      question
        ? shuffleWithCorrectIndex(question.options, question.correctIndex)
        : { options: [] as typeof questions[0]["options"], correctIndex: -1 },
    [question]
  );

  if (!question) return null;

  const allTagged = Object.keys(tags).length === shuffledOpts.options.length;

  const handleTagChange = (optionIndex: number, trapType: string) => {
    if (stage !== "tagging") return;
    setTags((prev) => ({ ...prev, [optionIndex]: trapType }));
  };

  const handleConfirmTags = () => {
    if (!allTagged) return;
    setStage("answering");
  };

  const handleSelectAnswer = (optionIndex: number) => {
    if (stage !== "answering") return;
    setSelectedAnswer(optionIndex);

    let correctTags = 0;
    shuffledOpts.options.forEach((opt, i) => {
      if (opt.trapType && tags[i] === opt.trapType) {
        correctTags++;
      }
    });
    setTagScore(correctTags);

    const isCorrect = optionIndex === shuffledOpts.correctIndex;
    setAnswerCorrect(isCorrect);
    setStage("result");

    const xp = calculateXp("recognize", isCorrect, multiplier);
    const bonusXp = correctTags * 2;
    const coins = calculateCoins("recognize", isCorrect);

    addXp(xp + bonusXp);
    if (coins > 0) addCoins(coins);

    if (isCorrect) {
      incrementStreak();
    } else {
      resetSessionStreak();
    }

    recordAnswer({
      questionId: question.id,
      phase: "recognize",
      selectedIndex: optionIndex,
      correct: isCorrect,
      timeMs: 0,
      lifelineUsed: false,
      trapTagsCorrect: correctTags,
      timestamp: Date.now(),
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setStage("tagging");
      setTags({});
      setSelectedAnswer(null);
      setTagScore(0);
      setAnswerCorrect(false);
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
          <span className="text-sm font-bold text-[var(--color-text-muted)]">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span className="text-sm font-mono font-bold" style={{ color: accentColor }}>
            {question.citationRef}
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
          key={`${currentIndex}-${stage}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {/* Stem */}
          <div className="bg-white rounded-2xl p-4 border border-[var(--color-border)] shadow-sm mb-4">
            <p className="text-base text-[var(--color-text-primary)] leading-relaxed font-semibold">
              {question.stem}
            </p>
          </div>

          {/* Stage indicator */}
          <div className="mb-3">
            <span
              className="text-xs font-extrabold uppercase tracking-wider"
              style={{ color: accentColor }}
            >
              {stage === "tagging"
                ? "Step 1: Tag each option's trap type"
                : stage === "answering"
                  ? "Step 2: Select the correct answer"
                  : "Results"}
            </span>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-4">
            {shuffledOpts.options.map((opt, i) => {
              const letter = String.fromCharCode(65 + i);
              const tag = tags[i];
              const isSelected = selectedAnswer === i;
              const isCorrectOption = i === shuffledOpts.correctIndex;

              let cardClass = "border border-[var(--color-border)] shadow-sm";
              if (stage === "result") {
                if (isCorrectOption) {
                  cardClass = "border-2 border-[var(--color-correct)] bg-[var(--color-correct-bg)]";
                } else if (isSelected && !isCorrectOption) {
                  cardClass = "border-2 border-[var(--color-incorrect)] bg-[var(--color-incorrect-bg)]";
                }
              } else if (stage === "answering" && tag) {
                cardClass = `border-2`;
              }

              return (
                <div
                  key={i}
                  className={`rounded-xl p-3 transition-all ${cardClass}`}
                  style={
                    stage === "answering" && tag
                      ? { borderColor: TRAP_COLORS[tag], borderBottomColor: TRAP_COLORS[tag] }
                      : undefined
                  }
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => handleSelectAnswer(i)}
                      disabled={stage !== "answering"}
                      data-testid={`option-${i}${isCorrectOption ? '-correct' : ''}`}
                      className="flex-1 text-left"
                    >
                      <span className="text-sm font-semibold">
                        <span className="font-bold text-[var(--color-text-secondary)]">
                          {letter})
                        </span>{" "}
                        {opt.text}
                      </span>
                    </button>

                    {(stage === "answering" || stage === "result") && tag && (
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                        style={{
                          backgroundColor: `${TRAP_COLORS[tag]}20`,
                          color: TRAP_COLORS[tag],
                        }}
                      >
                        {TRAP_LABELS[tag]}
                      </span>
                    )}
                  </div>

                  {stage === "tagging" && (
                    <div className="mt-2">
                      <select
                        value={tag || ""}
                        onChange={(e) =>
                          handleTagChange(i, e.target.value as string)
                        }
                        className="w-full text-xs font-semibold bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-xl px-2 py-1.5 text-[var(--color-text-secondary)]"
                        data-testid={`trap-select-${i}`}
                      >
                        <option value="">Select trap type...</option>
                        {TRAP_TYPE_OPTIONS.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {stage === "result" && opt.trapExplanation && (
                    <div className="mt-2 text-xs font-semibold text-[var(--color-text-muted)] border-t-2 border-[var(--color-border)] pt-2">
                      {tag === opt.trapType ? "✓ " : "✗ "}
                      {opt.trapExplanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {stage === "tagging" && (
            <button
              onClick={handleConfirmTags}
              disabled={!allTagged}
              className={`w-full py-3 rounded-xl font-bold text-base transition-colors disabled:opacity-40 uppercase tracking-wide shadow-sm hover:shadow-md transition-shadow ${
                allTagged
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
              }`}
            >
              Confirm Tags
            </button>
          )}

          {stage === "answering" && (
            <p className="text-xs font-bold text-center text-[var(--color-text-muted)]">
              Now click the option you believe is the correct answer.
            </p>
          )}

          {stage === "result" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
            >
              <div
                className={`rounded-2xl p-4 text-sm mb-3 ${
                  answerCorrect
                    ? "bg-[var(--color-correct-bg)]"
                    : "bg-[var(--color-incorrect-bg)]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-extrabold ${answerCorrect ? "text-[var(--color-correct)]" : "text-[var(--color-incorrect)]"}`}>
                    Tags: {tagScore}/{question.options.length}
                  </span>
                  <span className="text-[var(--color-text-muted)]">|</span>
                  <span className={`font-extrabold ${answerCorrect ? "text-[var(--color-correct)]" : "text-[var(--color-incorrect)]"}`}>
                    Answer: {answerCorrect ? "Correct!" : "Incorrect"}
                  </span>
                </div>
                <p className="text-[var(--color-text-secondary)] text-xs font-semibold mt-2">
                  {question.explanation}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-base text-white bg-[var(--color-primary)] shadow-sm hover:shadow-md transition-shadow uppercase tracking-wide"
              >
                {currentIndex < questions.length - 1
                  ? "Next Question"
                  : "Complete Trap Detector"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
