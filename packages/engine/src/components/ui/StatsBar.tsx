"use client";

import Link from "next/link";
import { useGameStore } from "../../store/gameStore";

export default function StatsBar() {
  const stats = useGameStore((s) => s.stats);

  return (
    <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-white border-b border-[var(--color-border)]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-xs font-bold">
          PB
        </div>
        <span
          className="font-bold text-[var(--color-text-primary)] text-xl"
          style={{ fontFamily: "var(--font-baloo), 'Baloo 2', system-ui, sans-serif" }}
        >
          Patent Bar
        </span>
      </Link>

      {/* Right side — CTA on desktop, minimal on mobile */}
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
          <span>🔥 {stats.currentStreak}d</span>
          <span>·</span>
          <span>⭐ {stats.totalXp} XP</span>
        </div>
        <Link
          href="/"
          className="bg-[var(--color-primary)] text-white text-sm font-bold px-6 py-2 rounded-full hover:bg-[var(--color-primary-shadow)] transition-colors"
        >
          Join the Quest
        </Link>
      </div>
    </div>
  );
}
