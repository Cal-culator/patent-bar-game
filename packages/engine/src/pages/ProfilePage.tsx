"use client";

import { useGameStore } from "../store/gameStore";
import Link from "next/link";

export function ProfilePage() {
  const stats = useGameStore((s) => s.stats);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: "var(--font-baloo), 'Baloo 2', system-ui, sans-serif" }}>Profile</h1>

      <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm mb-6">
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">&#x1F464;</div>
          <h2 className="text-xl font-bold text-[var(--color-text-primary)]">{stats.levelTitle}</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[var(--color-surface)] rounded-xl p-4 text-center border border-[var(--color-border)]">
            <div className="text-2xl font-extrabold text-[var(--color-xp)]">
              {stats.totalXp}
            </div>
            <div className="text-sm font-semibold text-[var(--color-text-muted)]">Total XP</div>
          </div>
          <div className="bg-[var(--color-surface)] rounded-xl p-4 text-center border border-[var(--color-border)]">
            <div className="text-2xl font-extrabold text-[var(--color-text-primary)]">
              {stats.coins}
            </div>
            <div className="text-sm font-semibold text-[var(--color-text-muted)]">Coins</div>
          </div>
          <div className="bg-[var(--color-surface)] rounded-xl p-4 text-center border border-[var(--color-border)]">
            <div className="text-2xl font-extrabold text-[var(--color-streak)]">
              {stats.currentStreak}
            </div>
            <div className="text-sm font-semibold text-[var(--color-text-muted)]">Day Streak</div>
          </div>
          <div className="bg-[var(--color-surface)] rounded-xl p-4 text-center border border-[var(--color-border)]">
            <div className="text-2xl font-extrabold text-[var(--color-text-primary)]">
              {stats.longestStreak}
            </div>
            <div className="text-sm font-semibold text-[var(--color-text-muted)]">Best Streak</div>
          </div>
        </div>
      </div>

      <Link
        href="/"
        className="text-base font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] mt-2 inline-block"
      >
        &larr; Back to zones
      </Link>
    </div>
  );
}
