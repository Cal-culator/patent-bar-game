"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProceduralCascadeData } from "@/types";
import { useGameStore } from "@/stores/gameStore";
import { calculateXp } from "@/lib/scoring";
import { shuffle, shuffleWithCorrectIndex } from "@/lib/shuffle";

interface ProceduralCascadeProps {
  cascades: ProceduralCascadeData[];
  onComplete: () => void;
  accentColor: string;
}

export default function ProceduralCascade({
  cascades,
  onComplete,
  accentColor,
}: ProceduralCascadeProps) {
  const addXp = useGameStore((s) => s.addXp);
  const multiplier = useGameStore((s) => s.streakMultiplier);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetSessionStreak = useGameStore((s) => s.resetSessionStreak);
  const recordAnswer = useGameStore((s) => s.recordAnswer);

  const [shuffledCascades] = useState(() => shuffle(cascades));
  const [cascadeIndex, setCascadeIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [stepCorrectCount, setStepCorrectCount] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [stepStartTime, setStepStartTime] = useState(Date.now());

  const cascade = shuffledCascades[cascadeIndex];

  const step = cascade?.steps[stepIndex] ?? null;

  const shuffledStepOpts = useMemo(
    () =>
      step
        ? shuffleWithCorrectIndex(step.options, step.correctIndex)
        : { options: [] as string[], correctIndex: -1 },
    [step]
  );

  if (!cascade) return null;

  const isCorrect = selectedAnswer === shuffledStepOpts.correctIndex;
  const totalSteps = cascade.steps.length;

  const handleSelectAnswer = (optionIndex: number) => {
    if (answered || !step) return;

    setSelectedAnswer(optionIndex);
    setAnswered(true);

    const correct = optionIndex === shuffledStepOpts.correctIndex;
    const timeMs = Date.now() - stepStartTime;

    if (correct) {
      setStepCorrectCount((c) => c + 1);
    }

    const xp = calculateXp("apply", correct, multiplier, timeMs);
    addXp(xp);

    if (correct) {
      incrementStreak();
    } else {
      resetSessionStreak();
    }

    recordAnswer({
      questionId: `${cascade.id}-step-${stepIndex}`,
      phase: "apply",
      selectedIndex: optionIndex,
      correct,
      timeMs,
      lifelineUsed: false,
      timestamp: Date.now(),
    });
  };

  const handleNext = () => {
    if (stepIndex < totalSteps - 1) {
      // Next step in this cascade
      setStepIndex((i) => i + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setStepStartTime(Date.now());
    } else {
      // Show summary for this cascade
      setShowSummary(true);
    }
  };

  const handleNextCascade = () => {
    if (cascadeIndex < cascades.length - 1) {
      setCascadeIndex((i) => i + 1);
      setStepIndex(0);
      setSelectedAnswer(null);
      setAnswered(false);
      setStepCorrectCount(0);
      setShowSummary(false);
      setStepStartTime(Date.now());
    } else {
      onComplete();
    }
  };

  const overallProgress =
    ((cascadeIndex * totalSteps + stepIndex + (answered ? 1 : 0)) /
      (cascades.length * totalSteps)) *
    100;

  // Summary view after all steps in a cascade
  if (showSummary) {
    return (
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm text-center"
        >
          <p className="text-2xl mb-2">
            {stepCorrectCount === totalSteps ? "🎯" : "📋"}
          </p>
          <h3 className="text-lg font-extrabold text-[var(--color-text-primary)] mb-1">{cascade.title}</h3>
          <p className="text-base font-semibold text-[var(--color-text-secondary)] mb-4">
            Cascade Complete
          </p>

          <div
            className="inline-block rounded-xl px-4 py-2 mb-4"
            style={{
              backgroundColor: `${accentColor}15`,
              color: accentColor,
            }}
          >
            <span className="text-lg font-extrabold" data-testid="cascade-score">
              {stepCorrectCount}/{totalSteps}
            </span>
            <span className="text-base font-bold ml-1">correct</span>
          </div>

          <div className="flex gap-2 mb-4 justify-center">
            {cascade.steps.map((_, i) => (
              <div
                key={i}
                className="w-8 h-2 rounded-full"
                style={{
                  backgroundColor:
                    i < stepCorrectCount
                      ? "var(--color-correct)"
                      : "var(--color-incorrect)",
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNextCascade}
            className="w-full py-3 rounded-xl font-bold text-base text-white bg-[var(--color-primary)] shadow-sm hover:shadow-md transition-shadow uppercase tracking-wide"
          >
            {cascadeIndex < cascades.length - 1
              ? "Next Cascade"
              : "Complete Cascades"}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-bold text-[var(--color-text-muted)]">
            Cascade {cascadeIndex + 1} of {cascades.length} — Step{" "}
            {stepIndex + 1} of {totalSteps}
          </span>
        </div>
        <div className="h-2.5 bg-[var(--color-border)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--color-primary)] rounded-full"
            animate={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>

      {/* Cascade title */}
      <div className="mb-3">
        <span
          className="text-sm font-extrabold uppercase tracking-wider"
          style={{ color: accentColor }}
        >
          {cascade.title}
        </span>
      </div>

      {/* Setup / fact pattern (persistent) */}
      <div className="bg-white rounded-2xl p-4 border border-[var(--color-border)] shadow-sm mb-4">
        <p className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
          Fact Pattern
        </p>
        <p
          className="text-base text-[var(--color-text-primary)] leading-relaxed font-semibold"
          data-testid="cascade-setup"
        >
          {cascade.setup}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {step && (
          <motion.div
            key={`${cascadeIndex}-${stepIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-3">
              {cascade.steps.map((_, i) => (
                <div
                  key={i}
                  className="h-2 flex-1 rounded-full"
                  style={{
                    backgroundColor:
                      i < stepIndex
                        ? "var(--color-primary)"
                        : i === stepIndex
                          ? "var(--color-primary)"
                          : "var(--color-border)",
                    opacity: i === stepIndex ? 1 : i < stepIndex ? 0.6 : 1,
                  }}
                />
              ))}
            </div>

            {/* Step stem */}
            <div className="bg-white rounded-2xl p-4 border border-[var(--color-border)] shadow-sm mb-4">
              <p className="text-base text-[var(--color-text-primary)] leading-relaxed font-bold">
                {step.stem}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-4">
              {shuffledStepOpts.options.map((opt, i) => {
                const letter = String.fromCharCode(65 + i);
                const isSelected = selectedAnswer === i;
                const isCorrectOption = i === shuffledStepOpts.correctIndex;

                let cardClass = "border border-[var(--color-border)] hover:bg-[var(--color-surface)] hover:shadow-sm transition-all";

                if (answered) {
                  if (isCorrectOption) {
                    cardClass =
                      "border-2 border-[var(--color-correct)] bg-[var(--color-correct-bg)]";
                  } else if (isSelected && !isCorrectOption) {
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
                    onClick={() => handleSelectAnswer(i)}
                    disabled={answered}
                    data-testid={`option-${i}${isCorrectOption ? '-correct' : ''}`}
                    className={`w-full text-left p-3 rounded-xl text-base font-semibold transition-all ${cardClass}`}
                  >
                    <span className="text-[var(--color-text-muted)] mr-2 font-bold">
                      {letter})
                    </span>
                    {opt}
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
                  className={`rounded-2xl p-4 text-base mb-3 ${
                    isCorrect
                      ? "bg-[var(--color-correct-bg)]"
                      : "bg-[var(--color-incorrect-bg)]"
                  }`}
                >
                  <p className={`font-extrabold mb-1 ${isCorrect ? "text-[var(--color-correct)]" : "text-[var(--color-incorrect)]"}`}>
                    {isCorrect ? "Correct!" : "Incorrect"}
                  </p>
                  <p className="text-[var(--color-text-secondary)] text-sm font-semibold">
                    {step.explanation}
                  </p>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full py-3 rounded-xl font-bold text-base text-white bg-[var(--color-primary)] shadow-sm hover:shadow-md transition-shadow uppercase tracking-wide"
                >
                  {stepIndex < totalSteps - 1
                    ? "Next Step"
                    : "View Summary"}
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
