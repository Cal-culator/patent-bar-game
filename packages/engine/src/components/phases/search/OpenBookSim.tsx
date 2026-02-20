"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OpenBookQuestion, ReferenceSection } from "../../../types";
import { useGameStore } from "../../../store/gameStore";
import { calculateXp } from "../../../lib/scoring";
import { calculateOpenBookScore } from "../../../lib/search-scoring";
import { shuffle, shuffleWithCorrectIndex } from "../../../lib/shuffle";
import { useAppConfig } from "../../../context";
import ReferenceViewer from "./ReferenceViewer";

interface OpenBookSimProps {
  questions: OpenBookQuestion[];
  mpepSections: ReferenceSection[];
  onComplete: () => void;
  accentColor: string;
}

type MobileTab = "question" | "mpep";

export default function OpenBookSim({
  questions,
  mpepSections,
  onComplete,
  accentColor,
}: OpenBookSimProps) {
  const config = useAppConfig();
  const addXp = useGameStore((s) => s.addXp);
  const multiplier = useGameStore((s) => s.streakMultiplier);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetSessionStreak = useGameStore((s) => s.resetSessionStreak);
  const recordAnswer = useGameStore((s) => s.recordAnswer);

  const [shuffledQuestions] = useState(() => shuffle(questions));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [mobileTab, setMobileTab] = useState<MobileTab>("question");

  // Tracking for scoring
  const [searchCount, setSearchCount] = useState(0);
  const [sectionsViewed, setSectionsViewed] = useState<Set<string>>(new Set());
  const [lastScore, setLastScore] = useState<{
    total: number;
    breakdown: {
      correctness: number;
      timeEfficiency: number;
      searchEfficiency: number;
      citationPrecision: number;
    };
  } | null>(null);

  const question = shuffledQuestions[currentIndex];

  const shuffledOpts = useMemo(
    () =>
      question
        ? shuffleWithCorrectIndex(question.options, question.correctIndex)
        : { options: [] as typeof questions[0]["options"], correctIndex: -1 },
    [question]
  );

  if (!question) return null;

  const isCorrect = selectedAnswer === shuffledOpts.correctIndex;

  const handleSectionView = useCallback((id: string) => {
    setSectionsViewed((prev) => new Set(prev).add(id));
  }, []);

  const handleSearchPerformed = useCallback(() => {
    setSearchCount((c) => c + 1);
  }, []);

  const handleSelectAnswer = (optionIndex: number) => {
    if (answered) return;

    setSelectedAnswer(optionIndex);
    setAnswered(true);

    const correct = optionIndex === shuffledOpts.correctIndex;
    const timeMs = Date.now() - questionStartTime;
    const viewedTargetSection = sectionsViewed.has(question.targetSectionId);

    const score = calculateOpenBookScore({
      correct,
      timeMs,
      searchCount,
      sectionsViewed: sectionsViewed.size,
      viewedTargetSection,
    });
    setLastScore(score);

    const xp = calculateXp("search", correct, multiplier, timeMs);
    addXp(xp);

    if (correct) {
      incrementStreak();
    } else {
      resetSessionStreak();
    }

    recordAnswer({
      questionId: question.id,
      phase: "search",
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
      setSearchCount(0);
      setSectionsViewed(new Set());
      setLastScore(null);
      setMobileTab("question");
    } else {
      onComplete();
    }
  };

  const progress = ((currentIndex + 1) / questions.length) * 100;

  const questionPanel = (
    <div>
      {/* Progress */}
      <div className="mb-4">
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

      {/* Search hint */}
      {question.searchHint && !answered && (
        <div className="mb-3">
          <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--color-text-muted)]">
            Hint: try searching for &ldquo;{question.searchHint}&rdquo;
          </span>
        </div>
      )}

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

      {/* Feedback with score breakdown */}
      {answered && lastScore && (
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
            <p className="text-[var(--color-text-secondary)] text-xs font-semibold mb-2">
              {question.explanation}
            </p>

            {/* Score breakdown */}
            <div className="border-t-2 border-[var(--color-border)] pt-2 mt-2">
              <p className="text-[10px] uppercase tracking-wider font-bold text-[var(--color-text-muted)] mb-1">
                Score Breakdown
              </p>
              <div className="grid grid-cols-2 gap-1 text-xs font-semibold">
                <span className="text-[var(--color-text-muted)]">
                  Correctness:
                </span>
                <span className="font-mono font-bold">
                  {lastScore.breakdown.correctness}/50
                </span>
                <span className="text-[var(--color-text-muted)]">
                  Time:
                </span>
                <span className="font-mono font-bold">
                  {lastScore.breakdown.timeEfficiency}/25
                </span>
                <span className="text-[var(--color-text-muted)]">
                  Search efficiency:
                </span>
                <span className="font-mono font-bold">
                  {lastScore.breakdown.searchEfficiency}/15
                </span>
                <span className="text-[var(--color-text-muted)]">
                  Citation precision:
                </span>
                <span className="font-mono font-bold">
                  {lastScore.breakdown.citationPrecision}/10
                </span>
              </div>
              <p
                className="text-xs font-extrabold mt-1"
                style={{ color: accentColor }}
              >
                Total: {lastScore.total}/100
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-full py-3 rounded-xl font-bold text-sm text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide"
          >
            {currentIndex < questions.length - 1
              ? "Next Question"
              : "Complete Open Book"}
          </button>
        </motion.div>
      )}
    </div>
  );

  return (
    <div>
      {/* Mobile tab toggle */}
      <div className="flex gap-2 mb-4 md:hidden">
        <button
          onClick={() => setMobileTab("question")}
          className={`flex-1 py-2 rounded-xl text-xs font-bold border-2 border-b-4 transition-colors active:border-b-2 active:translate-y-[2px] ${
            mobileTab === "question"
              ? "border-[var(--color-selected)] border-b-[var(--color-selected-shadow)] bg-[var(--color-selected-bg)] text-[var(--color-selected)]"
              : "border-[var(--color-border)] border-b-[var(--color-border-strong)] text-[var(--color-text-secondary)]"
          }`}
        >
          Question
        </button>
        <button
          onClick={() => setMobileTab("mpep")}
          className={`flex-1 py-2 rounded-xl text-xs font-bold border-2 border-b-4 transition-colors active:border-b-2 active:translate-y-[2px] ${
            mobileTab === "mpep"
              ? "border-[var(--color-selected)] border-b-[var(--color-selected-shadow)] bg-[var(--color-selected-bg)] text-[var(--color-selected)]"
              : "border-[var(--color-border)] border-b-[var(--color-border-strong)] text-[var(--color-text-secondary)]"
          }`}
        >
          {config.referenceLabel} Reference
        </button>
      </div>

      {/* Desktop: side by side layout */}
      <div className="hidden md:grid md:grid-cols-5 md:gap-4">
        <div className="col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {questionPanel}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="col-span-3 h-[600px]">
          <ReferenceViewer
            sections={mpepSections}
            accentColor={accentColor}
            onSectionView={handleSectionView}
            onSearchPerformed={handleSearchPerformed}
          />
        </div>
      </div>

      {/* Mobile: tabbed layout */}
      <div className="md:hidden">
        {mobileTab === "question" ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {questionPanel}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="h-[500px]">
            <ReferenceViewer
              sections={mpepSections}
              accentColor={accentColor}
              onSectionView={handleSectionView}
              onSearchPerformed={handleSearchPerformed}
            />
          </div>
        )}
      </div>
    </div>
  );
}
