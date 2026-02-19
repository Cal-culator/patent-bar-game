"use client";

import { useGameStore } from "@/stores/gameStore";
import { getNextLevelXp } from "@/lib/scoring";
import { motion } from "framer-motion";

export default function StatsBar() {
  const stats = useGameStore((s) => s.stats);
  const sessionStreak = useGameStore((s) => s.currentStreak);
  const multiplier = useGameStore((s) => s.streakMultiplier);
  const level = getNextLevelXp(stats.totalXp);

  return (
    <div className="flex items-center gap-4 px-4 py-2 bg-white border-b-2 border-b-[var(--color-border)] text-sm">
      {/* Level + XP Bar */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <span className="text-[var(--color-text-secondary)] whitespace-nowrap text-xs font-bold">
          {stats.levelTitle}
        </span>
        <div className="flex-1 h-4 bg-[var(--color-border)] rounded-full overflow-hidden min-w-[60px] max-w-[200px]">
          <motion.div
            className="h-full bg-[var(--color-primary)] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${level.progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <span className="text-[var(--color-xp)] font-bold text-xs whitespace-nowrap">
          {stats.totalXp} XP
        </span>
      </div>

      {/* Coins */}
      <div className="flex items-center gap-1">
        <span className="text-base">&#x1FA99;</span>
        <span className="font-bold text-xs text-[var(--color-text-primary)]">
          {stats.coins}
        </span>
      </div>

      {/* Daily Streak */}
      <div className="flex items-center gap-1">
        <span className="text-base">&#x1F525;</span>
        <span className="font-bold text-xs text-[var(--color-streak)]">
          {stats.currentStreak}d
        </span>
      </div>

      {/* Session Streak + Multiplier */}
      {sessionStreak > 0 && (
        <motion.div
          className="flex items-center gap-1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <span className="text-base">&#x26A1;</span>
          <span className="font-bold text-xs text-[var(--color-text-primary)]">
            {sessionStreak}
          </span>
          {multiplier > 1 && (
            <span className="text-xs font-extrabold text-[var(--color-xp)]">
              {multiplier}x
            </span>
          )}
        </motion.div>
      )}
    </div>
  );
}
