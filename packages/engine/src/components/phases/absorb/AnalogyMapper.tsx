"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AnalogyMapping } from "../../../types";
import { useGameStore } from "../../../store/gameStore";
import { shuffle, shuffleWithCorrectIndex } from "../../../lib/shuffle";

interface AnalogyMapperProps {
  analogies: AnalogyMapping[];
  onComplete: () => void;
  accentColor: string;
}

type Stage = "read" | "map" | "followup" | "result";

export default function AnalogyMapper({
  analogies,
  onComplete,
  accentColor,
}: AnalogyMapperProps) {
  const addXp = useGameStore((s) => s.addXp);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetSessionStreak = useGameStore((s) => s.resetSessionStreak);

  const [shuffledAnalogies] = useState(() => shuffle(analogies));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stage, setStage] = useState<Stage>("read");
  const [mappingAnswers, setMappingAnswers] = useState<Record<string, string>>(
    {}
  );
  const [mappingChecked, setMappingChecked] = useState(false);
  const [followUpAnswer, setFollowUpAnswer] = useState<number | null>(null);
  const [followUpChecked, setFollowUpChecked] = useState(false);

  const analogy = shuffledAnalogies[currentIndex];

  const shuffledFollowUpOpts = useMemo(
    () =>
      analogy
        ? shuffleWithCorrectIndex(analogy.followUp.options, analogy.followUp.correctIndex)
        : { options: [] as string[], correctIndex: -1 },
    [analogy]
  );

  if (!analogy) return null;

  // Shuffle the formal terms for the mapping exercise
  const formalTerms = analogy.mappings.map((m) => m.formalTerm);

  const handleMapSelect = (analogyTerm: string, formalTerm: string) => {
    if (mappingChecked) return;
    setMappingAnswers((prev) => ({ ...prev, [analogyTerm]: formalTerm }));
  };

  const handleCheckMapping = () => {
    setMappingChecked(true);
    const correctCount = analogy.mappings.filter(
      (m) => mappingAnswers[m.analogyTerm] === m.formalTerm
    ).length;
    if (correctCount === analogy.mappings.length) {
      addXp(10);
      incrementStreak();
    } else {
      resetSessionStreak();
    }
  };

  const handleFollowUpAnswer = (idx: number) => {
    if (followUpChecked) return;
    setFollowUpAnswer(idx);
    setFollowUpChecked(true);
    const correct = idx === shuffledFollowUpOpts.correctIndex;
    if (correct) {
      addXp(10);
      incrementStreak();
    } else {
      resetSessionStreak();
    }
  };

  const handleNext = () => {
    if (currentIndex < analogies.length - 1) {
      setCurrentIndex((i) => i + 1);
      setStage("read");
      setMappingAnswers({});
      setMappingChecked(false);
      setFollowUpAnswer(null);
      setFollowUpChecked(false);
    } else {
      onComplete();
    }
  };

  const allMapped = Object.keys(mappingAnswers).length === analogy.mappings.length;
  const progress = ((currentIndex + 1) / analogies.length) * 100;

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold text-[var(--color-text-muted)]">
            Analogy {currentIndex + 1} of {analogies.length}
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
        {/* Stage 1: Read the analogy */}
        {stage === "read" && (
          <motion.div
            key="read"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="bg-white rounded-2xl p-5 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] mb-4">
              <div className="text-xs uppercase tracking-wider font-bold text-[var(--color-text-muted)] mb-3">
                Analogy
              </div>
              <p className="text-[var(--color-text-primary)] leading-relaxed italic font-semibold">
                &ldquo;{analogy.analogyText}&rdquo;
              </p>
            </div>
            <button
              onClick={() => setStage("map")}
              className="w-full py-3 rounded-xl font-bold text-sm text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide"
            >
              Now map it to the real rules
            </button>
          </motion.div>
        )}

        {/* Stage 2: Map analogy terms to formal terms */}
        {stage === "map" && (
          <motion.div
            key="map"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="text-xs uppercase tracking-wider font-bold text-[var(--color-text-muted)] mb-3">
              Match each analogy element to its legal equivalent
            </div>

            <div className="space-y-3 mb-4">
              {analogy.mappings.map((mapping) => {
                const selected = mappingAnswers[mapping.analogyTerm];
                const isCorrect =
                  mappingChecked && selected === mapping.formalTerm;
                const isWrong =
                  mappingChecked && selected && selected !== mapping.formalTerm;

                return (
                  <div
                    key={mapping.analogyTerm}
                    className={`bg-white rounded-xl p-3 border-2 border-b-4 transition-colors ${
                      isCorrect
                        ? "border-[var(--color-correct)] border-b-[var(--color-correct-shadow)] bg-[var(--color-correct-bg)]"
                        : isWrong
                          ? "border-[var(--color-incorrect)] border-b-[var(--color-incorrect-shadow)] bg-[var(--color-incorrect-bg)]"
                          : "border-[var(--color-border)] border-b-[var(--color-border-strong)]"
                    }`}
                  >
                    <div className="text-sm font-bold mb-2" style={{ color: accentColor }}>
                      {mapping.analogyTerm} =
                    </div>
                    {selected ? (
                      <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {selected}
                        {mappingChecked && isWrong && (
                          <span className="block text-xs font-bold text-[var(--color-correct)] mt-1">
                            Correct: {mapping.formalTerm}
                          </span>
                        )}
                      </div>
                    ) : (
                      <select
                        className="w-full bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-xl px-2 py-1.5 text-sm font-semibold text-[var(--color-text-primary)]"
                        value=""
                        onChange={(e) =>
                          handleMapSelect(mapping.analogyTerm, e.target.value)
                        }
                      >
                        <option value="" disabled>
                          Select...
                        </option>
                        {formalTerms
                          .filter(
                            (ft) =>
                              !Object.values(mappingAnswers).includes(ft)
                          )
                          .map((ft) => (
                            <option key={ft} value={ft}>
                              {ft}
                            </option>
                          ))}
                      </select>
                    )}
                  </div>
                );
              })}
            </div>

            {!mappingChecked ? (
              <button
                onClick={handleCheckMapping}
                disabled={!allMapped}
                className={`w-full py-3 rounded-xl font-bold text-sm border-2 border-b-4 transition-colors disabled:opacity-40 uppercase tracking-wide active:border-b-2 active:translate-y-[2px] ${
                  allMapped
                    ? "bg-[var(--color-primary)] text-white border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)]"
                    : "bg-[var(--color-surface)] text-[var(--color-text-muted)] border-[var(--color-border)] border-b-[var(--color-border-strong)]"
                }`}
              >
                Check Mapping
              </button>
            ) : (
              <button
                onClick={() => setStage("followup")}
                className="w-full py-3 rounded-xl font-bold text-sm text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide"
              >
                Continue to Follow-Up Question
              </button>
            )}
          </motion.div>
        )}

        {/* Stage 3: Follow-up question */}
        {stage === "followup" && (
          <motion.div
            key="followup"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="bg-white rounded-2xl p-5 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] mb-4">
              <div className="text-xs uppercase tracking-wider font-bold text-[var(--color-text-muted)] mb-3">
                Where does the analogy break?
              </div>
              <p className="text-sm font-bold text-[var(--color-text-primary)] mb-4">
                {analogy.followUp.stem}
              </p>
              <div className="space-y-2">
                {shuffledFollowUpOpts.options.map((opt, i) => {
                  const isCorrectOption = i === shuffledFollowUpOpts.correctIndex;
                  let cardClass =
                    "border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] hover:bg-[var(--color-surface)] active:border-b-2 active:translate-y-[2px]";
                  if (followUpChecked) {
                    if (isCorrectOption) {
                      cardClass = "border-2 border-b-4 border-[var(--color-correct)] border-b-[var(--color-correct-shadow)] bg-[var(--color-correct-bg)]";
                    } else if (
                      i === followUpAnswer &&
                      !isCorrectOption
                    ) {
                      cardClass = "border-2 border-b-4 border-[var(--color-incorrect)] border-b-[var(--color-incorrect-shadow)] bg-[var(--color-incorrect-bg)]";
                    } else {
                      cardClass = "border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border)] opacity-40";
                    }
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => handleFollowUpAnswer(i)}
                      disabled={followUpChecked}
                      data-testid={`option-${i}${isCorrectOption ? '-correct' : ''}`}
                      className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-all ${cardClass}`}
                    >
                      <span className="text-[var(--color-text-muted)] mr-2 font-bold">
                        {String.fromCharCode(65 + i)})
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {followUpChecked && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
              >
                <div
                  className={`rounded-2xl p-4 text-sm mb-3 ${
                    followUpAnswer === shuffledFollowUpOpts.correctIndex
                      ? "bg-[var(--color-correct-bg)]"
                      : "bg-[var(--color-incorrect-bg)]"
                  }`}
                >
                  <p className={`font-extrabold mb-1 ${followUpAnswer === shuffledFollowUpOpts.correctIndex ? "text-[var(--color-correct)]" : "text-[var(--color-incorrect)]"}`}>
                    {followUpAnswer === shuffledFollowUpOpts.correctIndex ? "Correct!" : "Not quite."}
                  </p>
                  <p className="text-[var(--color-text-secondary)] font-semibold">
                    {analogy.followUp.explanation}
                  </p>
                </div>
                <button
                  onClick={handleNext}
                  className="w-full py-3 rounded-xl font-bold text-sm text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide"
                >
                  {currentIndex < analogies.length - 1
                    ? "Next Analogy"
                    : "Complete Analogies"}
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
