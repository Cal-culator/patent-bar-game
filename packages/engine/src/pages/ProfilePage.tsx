"use client";

import { useGameStore } from "../store/gameStore";
import Link from "next/link";

export function ProfilePage() {
  const stats = useGameStore((s) => s.stats);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: "var(--font-baloo), 'Baloo 2', system-ui, sans-serif" }}>Profile</h1>

      <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-sm overflow-hidden mb-6">
        {/* Gradient header */}
        <div
          className="h-24 relative"
          style={{
            background: `
              radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 70% 40%, rgba(99, 102, 241, 0.4) 0%, transparent 40%),
              linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)
            `,
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />
        </div>

        <div className="px-6 md:px-8 pb-6 md:pb-8 -mt-8 relative">
          <div className="w-16 h-16 rounded-2xl bg-white border-4 border-white shadow-md flex items-center justify-center text-3xl mb-4">
            &#x1F464;
          </div>
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">{stats.levelTitle}</h2>
          <p className="text-sm text-[var(--color-text-muted)]">Keep going to level up!</p>
        </div>

        <div className="px-6 md:px-8 pb-6 md:pb-8">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Total XP", value: stats.totalXp, color: "var(--color-xp)" },
              { label: "Coins", value: stats.coins, color: "var(--color-text-primary)" },
              { label: "Day Streak", value: stats.currentStreak, color: "var(--color-streak)" },
              { label: "Best Streak", value: stats.longestStreak, color: "var(--color-text-primary)" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[var(--color-surface)] rounded-xl p-4 text-center border border-[var(--color-border)]">
                <div className="text-2xl font-extrabold" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-[var(--color-text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link
        href="/"
        className="text-base font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mt-2 inline-block"
      >
        &larr; Back to zones
      </Link>
    </div>
  );
}
