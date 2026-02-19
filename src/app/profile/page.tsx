"use client";

import { useGameStore } from "@/stores/gameStore";
import Link from "next/link";

export default function ProfilePage() {
  const stats = useGameStore((s) => s.stats);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-xl font-extrabold text-[var(--color-text-primary)] mb-6">Profile</h1>

      <div className="bg-white rounded-2xl p-5 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] mb-4">
        <div className="text-center mb-4">
          <div className="text-4xl mb-2">&#x1F464;</div>
          <h2 className="font-bold text-[var(--color-text-primary)]">{stats.levelTitle}</h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[var(--color-surface)] rounded-xl p-3 text-center border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)]">
            <div className="text-xl font-extrabold text-[var(--color-xp)]">
              {stats.totalXp}
            </div>
            <div className="text-xs font-bold text-[var(--color-text-muted)]">Total XP</div>
          </div>
          <div className="bg-[var(--color-surface)] rounded-xl p-3 text-center border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)]">
            <div className="text-xl font-extrabold text-[var(--color-text-primary)]">
              {stats.coins}
            </div>
            <div className="text-xs font-bold text-[var(--color-text-muted)]">Coins</div>
          </div>
          <div className="bg-[var(--color-surface)] rounded-xl p-3 text-center border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)]">
            <div className="text-xl font-extrabold text-[var(--color-streak)]">
              {stats.currentStreak}
            </div>
            <div className="text-xs font-bold text-[var(--color-text-muted)]">Day Streak</div>
          </div>
          <div className="bg-[var(--color-surface)] rounded-xl p-3 text-center border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)]">
            <div className="text-xl font-extrabold text-[var(--color-text-primary)]">
              {stats.longestStreak}
            </div>
            <div className="text-xs font-bold text-[var(--color-text-muted)]">Best Streak</div>
          </div>
        </div>
      </div>

      <Link
        href="/"
        className="text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] mt-2 inline-block"
      >
        &larr; Back to zones
      </Link>
    </div>
  );
}
