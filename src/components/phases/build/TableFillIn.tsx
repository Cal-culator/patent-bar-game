"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TableFillData } from "@/types";
import { useGameStore } from "@/stores/gameStore";
import { calculateXp, calculateCoins } from "@/lib/scoring";

interface TableFillInProps {
  tables: TableFillData[];
  onComplete: () => void;
  accentColor: string;
}

export default function TableFillIn({
  tables,
  onComplete,
  accentColor,
}: TableFillInProps) {
  const addXp = useGameStore((s) => s.addXp);
  const addCoins = useGameStore((s) => s.addCoins);
  const multiplier = useGameStore((s) => s.streakMultiplier);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetSessionStreak = useGameStore((s) => s.resetSessionStreak);
  const recordAnswer = useGameStore((s) => s.recordAnswer);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [filledCells, setFilledCells] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [selectedBank, setSelectedBank] = useState<string | null>(null);

  const table = tables[currentIndex];
  if (!table) return null;

  const usedBankItems = Object.values(filledCells);
  const availableBank = table.answerBank.filter((item) => {
    const usedCount = usedBankItems.filter((u) => u === item).length;
    const totalCount = table.answerBank.filter((b) => b === item).length;
    return usedCount < totalCount;
  });

  const blankCells: { row: number; col: number }[] = [];
  table.cells.forEach((row, rowIdx) => {
    row.forEach((cell, colIdx) => {
      if (cell === null) {
        blankCells.push({ row: rowIdx, col: colIdx });
      }
    });
  });

  const getCellKey = (row: number, col: number) => `${row}-${col}`;

  const getCellValue = (rowIdx: number, colIdx: number): string | null => {
    const key = getCellKey(rowIdx, colIdx);
    if (filledCells[key]) return filledCells[key];
    return table.cells[rowIdx][colIdx];
  };

  const isCellBlank = (rowIdx: number, colIdx: number): boolean => {
    return table.cells[rowIdx][colIdx] === null;
  };

  const isCellFilled = (rowIdx: number, colIdx: number): boolean => {
    return !!filledCells[getCellKey(rowIdx, colIdx)];
  };

  const getCorrectAnswer = (rowIdx: number, colIdx: number): string | undefined => {
    const answer = table.answers.find((a) => a.row === rowIdx && a.col === colIdx);
    return answer?.value;
  };

  const handleCellClick = (rowIdx: number, colIdx: number) => {
    if (checked) return;
    if (!isCellBlank(rowIdx, colIdx)) return;

    const key = getCellKey(rowIdx, colIdx);

    if (isCellFilled(rowIdx, colIdx)) {
      setFilledCells((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
      return;
    }

    if (selectedBank) {
      setFilledCells((prev) => ({ ...prev, [key]: selectedBank }));
      setSelectedBank(null);
    }
  };

  const handleBankClick = (item: string) => {
    if (checked) return;
    setSelectedBank((prev) => (prev === item ? null : item));
  };

  const handleCheck = () => {
    let correct = 0;
    table.answers.forEach((answer) => {
      const key = getCellKey(answer.row, answer.col);
      if (filledCells[key] === answer.value) {
        correct++;
      }
    });

    setChecked(true);
    setCorrectCount(correct);

    const allCorrect = correct === table.answers.length;
    recordAnswer({
      questionId: table.id,
      phase: "build",
      selectedIndex: allCorrect ? 0 : 1,
      correct: allCorrect,
      timeMs: 0,
      lifelineUsed: false,
      timestamp: Date.now(),
    });

    if (allCorrect) {
      const xp = calculateXp("build", true, multiplier);
      const coins = calculateCoins("build", true);
      addXp(xp);
      if (coins > 0) addCoins(coins);
      incrementStreak();
    } else if (correct > 0) {
      addXp(Math.round(calculateXp("build", true, multiplier) * (correct / table.answers.length)));
    } else {
      resetSessionStreak();
    }
  };

  const handleNext = () => {
    if (currentIndex < tables.length - 1) {
      setCurrentIndex((i) => i + 1);
      setFilledCells({});
      setChecked(false);
      setCorrectCount(0);
      setSelectedBank(null);
    } else {
      onComplete();
    }
  };

  const allFilled = blankCells.every((c) => filledCells[getCellKey(c.row, c.col)]);
  const progress = ((currentIndex + 1) / tables.length) * 100;

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold text-[var(--color-text-muted)]">
            Table {currentIndex + 1} of {tables.length}
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
          <div className="mb-4">
            <h3 className="font-bold text-sm text-[var(--color-text-primary)]">{table.title}</h3>
            <p className="text-xs font-semibold text-[var(--color-text-secondary)]">
              {selectedBank
                ? `Now tap a blank cell to place "${selectedBank}"`
                : "Tap an answer from the bank, then tap a blank cell to place it."}
            </p>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] overflow-hidden mb-4">
            <div
              className="grid border-b-2 border-[var(--color-border)]"
              style={{ gridTemplateColumns: `repeat(${table.columns.length}, minmax(0, 1fr))` }}
            >
              {table.columns.map((col) => (
                <div key={col} className="px-3 py-2 text-xs font-extrabold uppercase tracking-wider" style={{ color: accentColor }}>
                  {col}
                </div>
              ))}
            </div>

            {table.cells.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="grid border-b border-[var(--color-border)] last:border-b-0"
                style={{ gridTemplateColumns: `repeat(${table.columns.length}, minmax(0, 1fr))` }}
              >
                {row.map((cell, colIdx) => {
                  const isBlank = cell === null;
                  const filled = filledCells[getCellKey(rowIdx, colIdx)];
                  const displayValue = filled || cell;
                  const correctAnswer = getCorrectAnswer(rowIdx, colIdx);

                  let cellBg = "";
                  let cellBorder = "";
                  if (checked && isBlank) {
                    if (filled === correctAnswer) {
                      cellBg = "bg-[var(--color-correct-bg)]";
                      cellBorder = "ring-2 ring-[var(--color-correct)]";
                    } else {
                      cellBg = "bg-[var(--color-incorrect-bg)]";
                      cellBorder = "ring-2 ring-[var(--color-incorrect)]";
                    }
                  } else if (isBlank && !filled && selectedBank) {
                    cellBg = "bg-[var(--color-surface)]";
                    cellBorder = "ring-2 ring-[var(--color-selected)]";
                  }

                  return (
                    <div
                      key={colIdx}
                      onClick={() => handleCellClick(rowIdx, colIdx)}
                      className={`px-3 py-2.5 text-xs font-semibold transition-all ${cellBg} ${cellBorder} ${
                        isBlank && !checked ? "cursor-pointer hover:bg-[var(--color-surface)]" : ""
                      }`}
                    >
                      {displayValue ? (
                        <span
                          className={isBlank && filled ? "font-bold" : "text-[var(--color-text-secondary)]"}
                          style={isBlank && filled && !checked ? { color: accentColor } : undefined}
                        >
                          {displayValue}
                        </span>
                      ) : (
                        <span className="text-[var(--color-text-muted)] italic">___</span>
                      )}
                      {checked && isBlank && filled !== correctAnswer && (
                        <div className="text-[10px] font-bold text-[var(--color-correct)] mt-0.5">{correctAnswer}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Answer Bank */}
          {!checked && (
            <div className="mb-4">
              <div className="text-xs uppercase tracking-wider font-bold text-[var(--color-text-muted)] mb-2">Answer bank</div>
              <div className="flex flex-wrap gap-1.5">
                {availableBank.map((item, i) => (
                  <button
                    key={`${item}-${i}`}
                    onClick={() => handleBankClick(item)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-bold border-2 border-b-4 transition-all active:border-b-2 active:translate-y-[2px] ${
                      selectedBank === item
                        ? "border-[var(--color-selected)] border-b-[var(--color-selected-shadow)] bg-[var(--color-selected-bg)] text-[var(--color-selected)]"
                        : "border-[var(--color-border)] border-b-[var(--color-border-strong)] hover:bg-[var(--color-surface)]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
                {availableBank.length === 0 && (
                  <span className="text-xs font-semibold text-[var(--color-text-muted)] italic">All answers placed</span>
                )}
              </div>
            </div>
          )}

          {/* Actions */}
          {!checked ? (
            <button
              onClick={handleCheck}
              disabled={!allFilled}
              className={`w-full py-3 rounded-xl font-bold text-sm border-2 border-b-4 transition-colors disabled:opacity-40 uppercase tracking-wide active:border-b-2 active:translate-y-[2px] ${
                allFilled
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)]"
                  : "bg-[var(--color-surface)] text-[var(--color-text-muted)] border-[var(--color-border)] border-b-[var(--color-border-strong)]"
              }`}
            >
              Check Answers
            </button>
          ) : (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
              <div className={`rounded-2xl p-4 text-sm mb-3 ${correctCount === table.answers.length ? "bg-[var(--color-correct-bg)]" : "bg-[var(--color-incorrect-bg)]"}`}>
                <p className={`font-extrabold ${correctCount === table.answers.length ? "text-[var(--color-correct)]" : "text-[var(--color-incorrect)]"}`}>
                  {correctCount === table.answers.length ? "Perfect!" : `${correctCount} of ${table.answers.length} correct.`}
                </p>
                {correctCount < table.answers.length && (
                  <p className="text-xs font-semibold text-[var(--color-text-secondary)] mt-1">Corrections are shown in the table above.</p>
                )}
              </div>

              <button
                onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-sm text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide"
              >
                {currentIndex < tables.length - 1 ? "Next Table" : "Complete Tables"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
