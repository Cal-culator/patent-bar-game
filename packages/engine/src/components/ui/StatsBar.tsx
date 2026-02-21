"use client";

import Link from "next/link";
import { useGameStore } from "../../store/gameStore";

export default function StatsBar() {
  const stats = useGameStore((s) => s.stats);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[var(--color-border)]">
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[#4F46E5] flex items-center justify-center text-white text-[11px] font-black tracking-tight shadow-md shadow-purple-500/20">
            PB
          </div>
          <span
            className="font-bold text-[var(--color-text-primary)] text-lg group-hover:text-[var(--color-primary)] transition-colors"
            style={{ fontFamily: "var(--font-baloo), 'Baloo 2', system-ui, sans-serif" }}
          >
            Patent Bar
          </span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text-secondary)] bg-[var(--color-surface)] px-3 py-1 rounded-full">
              🔥 {stats.currentStreak}d
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text-secondary)] bg-[var(--color-surface)] px-3 py-1 rounded-full">
              ⭐ {stats.totalXp} XP
            </span>
          </div>
          <Link
            href="/"
            className="bg-[var(--color-primary)] text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-[var(--color-primary-shadow)] hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-200"
          >
            Join the Quest
          </Link>
        </div>
      </div>
      {/* Gradient accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent" />
    </header>
  );
}
