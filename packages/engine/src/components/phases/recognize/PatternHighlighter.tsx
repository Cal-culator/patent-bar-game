"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PatternHighlightExcerpt } from "../../../types";
import { useGameStore } from "../../../store/gameStore";
import { calculateXp, calculateCoins } from "../../../lib/scoring";
import { shuffle } from "../../../lib/shuffle";

interface PatternHighlighterProps {
  excerpts: PatternHighlightExcerpt[];
  onComplete: () => void;
  accentColor: string;
}

export default function PatternHighlighter({
  excerpts,
  onComplete,
  accentColor,
}: PatternHighlighterProps) {
  const addXp = useGameStore((s) => s.addXp);
  const addCoins = useGameStore((s) => s.addCoins);
  const multiplier = useGameStore((s) => s.streakMultiplier);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetSessionStreak = useGameStore((s) => s.resetSessionStreak);
  const recordAnswer = useGameStore((s) => s.recordAnswer);

  const [shuffledExcerpts] = useState(() => shuffle(excerpts));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [checked, setChecked] = useState(false);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [falsePositives, setFalsePositives] = useState(0);

  const excerpt = shuffledExcerpts[currentIndex];
  if (!excerpt) return null;

  const totalTestable = excerpt.segments.filter((s) => s.isTestable).length;

  const handleToggleSegment = (segIndex: number) => {
    if (checked) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(segIndex)) {
        next.delete(segIndex);
      } else {
        next.add(segIndex);
      }
      return next;
    });
  };

  const handleCheck = () => {
    let h = 0;
    let m = 0;
    let fp = 0;

    excerpt.segments.forEach((seg, i) => {
      const wasSelected = selected.has(i);
      if (seg.isTestable && wasSelected) h++;
      else if (seg.isTestable && !wasSelected) m++;
      else if (!seg.isTestable && wasSelected) fp++;
    });

    setHits(h);
    setMisses(m);
    setFalsePositives(fp);
    setChecked(true);

    const accuracy = totalTestable > 0 ? h / totalTestable : 0;
    const correct = accuracy >= 0.5;
    const baseXp = calculateXp("recognize", true, multiplier);
    const scaledXp = Math.round(baseXp * accuracy);
    const coins = calculateCoins("recognize", correct);

    addXp(scaledXp);
    if (coins > 0) addCoins(coins);

    if (correct) {
      incrementStreak();
    } else {
      resetSessionStreak();
    }

    recordAnswer({
      questionId: excerpt.id,
      phase: "recognize",
      selectedIndex: h,
      correct,
      timeMs: 0,
      lifelineUsed: false,
      timestamp: Date.now(),
    });
  };

  const handleNext = () => {
    if (currentIndex < excerpts.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelected(new Set());
      setChecked(false);
      setHits(0);
      setMisses(0);
      setFalsePositives(0);
    } else {
      onComplete();
    }
  };

  const progress = ((currentIndex + 1) / excerpts.length) * 100;

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold text-[var(--color-text-muted)]">
            Excerpt {currentIndex + 1} of {excerpts.length}
          </span>
          <span className="text-xs font-mono font-bold" style={{ color: accentColor }}>
            {excerpt.referenceId}
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
          {/* Title & instruction */}
          <div className="mb-4">
            <h3 className="font-bold text-sm text-[var(--color-text-primary)]">
              {excerpt.title}
            </h3>
            <p className="text-xs font-semibold text-[var(--color-text-secondary)]">
              {excerpt.instruction}
            </p>
          </div>

          {/* Excerpt text with clickable segments */}
          <div className="bg-white rounded-2xl p-4 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] mb-4">
            <p className="text-sm leading-relaxed font-semibold">
              {excerpt.segments.map((seg, i) => {
                const isSelected = selected.has(i);
                const isTestable = seg.isTestable;

                let style: React.CSSProperties = {};
                let className = "transition-all cursor-pointer rounded-sm px-0.5";

                if (checked) {
                  className = "rounded-sm px-0.5";
                  if (isTestable && isSelected) {
                    // Hit — green
                    style = {
                      backgroundColor: "var(--color-correct-bg)",
                      borderBottom: "2px solid var(--color-correct)",
                    };
                  } else if (isTestable && !isSelected) {
                    // Miss — yellow/orange
                    style = {
                      backgroundColor: "rgba(255, 150, 0, 0.2)",
                      borderBottom: "2px solid var(--color-xp)",
                    };
                  } else if (!isTestable && isSelected) {
                    // False positive — red strikethrough
                    style = {
                      backgroundColor: "var(--color-incorrect-bg)",
                      textDecoration: "line-through",
                      color: "var(--color-incorrect)",
                    };
                  }
                } else if (isSelected) {
                  style = {
                    backgroundColor: `${accentColor}25`,
                    borderBottom: `2px solid ${accentColor}`,
                  };
                } else {
                  className += " hover:bg-[var(--color-surface)]";
                }

                return (
                  <span
                    key={i}
                    onClick={() => handleToggleSegment(i)}
                    className={className}
                    style={style}
                    data-testid={`segment-${i}`}
                  >
                    {seg.text}
                  </span>
                );
              })}
            </p>
          </div>

          {/* Legend for results */}
          {checked && (
            <div className="flex gap-4 mb-3 text-[10px] font-bold text-[var(--color-text-muted)]">
              <span className="flex items-center gap-1">
                <span
                  className="inline-block w-3 h-3 rounded-sm"
                  style={{ backgroundColor: "var(--color-correct-bg)" }}
                />
                Hit ({hits})
              </span>
              <span className="flex items-center gap-1">
                <span
                  className="inline-block w-3 h-3 rounded-sm"
                  style={{ backgroundColor: "rgba(255, 150, 0, 0.3)" }}
                />
                Missed ({misses})
              </span>
              <span className="flex items-center gap-1">
                <span
                  className="inline-block w-3 h-3 rounded-sm"
                  style={{ backgroundColor: "var(--color-incorrect-bg)" }}
                />
                False ({falsePositives})
              </span>
            </div>
          )}

          {/* Explanations for testable segments after check */}
          {checked && (
            <div className="space-y-2 mb-4">
              {excerpt.segments
                .filter((seg) => seg.isTestable && seg.explanation)
                .map((seg, i) => (
                  <div
                    key={i}
                    className="text-xs font-semibold text-[var(--color-text-secondary)] bg-white rounded-xl p-3 border-2 border-[var(--color-border)]"
                  >
                    <span className="font-bold" style={{ color: accentColor }}>
                      &ldquo;{seg.text.trim()}&rdquo;
                    </span>{" "}
                    — {seg.explanation}
                  </div>
                ))}
            </div>
          )}

          {/* Actions */}
          {!checked ? (
            <button
              onClick={handleCheck}
              disabled={selected.size === 0}
              className={`w-full py-3 rounded-xl font-bold text-sm border-2 border-b-4 transition-colors disabled:opacity-40 uppercase tracking-wide active:border-b-2 active:translate-y-[2px] ${
                selected.size > 0
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)]"
                  : "bg-[var(--color-surface)] text-[var(--color-text-muted)] border-[var(--color-border)] border-b-[var(--color-border-strong)]"
              }`}
            >
              Check ({selected.size} selected)
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
            >
              <div
                className={`rounded-2xl p-4 text-sm mb-3 ${
                  hits === totalTestable
                    ? "bg-[var(--color-correct-bg)]"
                    : "bg-[var(--color-incorrect-bg)]"
                }`}
              >
                <p className={`font-extrabold mb-1 ${hits === totalTestable ? "text-[var(--color-correct)]" : "text-[var(--color-incorrect)]"}`}>
                  {hits}/{totalTestable} testable phrases identified
                </p>
                {falsePositives > 0 && (
                  <p className="text-xs font-semibold text-[var(--color-text-secondary)] mt-1">
                    {falsePositives} false positive{falsePositives !== 1 ? "s" : ""}
                  </p>
                )}
              </div>

              <button
                onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-sm text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide"
              >
                {currentIndex < excerpts.length - 1
                  ? "Next Excerpt"
                  : "Complete Pattern Highlighter"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
