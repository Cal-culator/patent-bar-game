"use client";

import Link from "next/link";
import { useGameStore } from "@/stores/gameStore";
import { ZONES } from "@/data/zones";
import { motion } from "framer-motion";

export default function Home() {
  const stats = useGameStore((s) => s.stats);
  const zoneProgress = useGameStore((s) => s.zoneProgress);

  const completedPhases = zoneProgress.reduce(
    (acc, zp) => acc + zp.phases.filter((p) => p.status === "completed").length,
    0
  );
  const totalPhases = zoneProgress.length * 6;
  const overallProgress = Math.round((completedPhases / totalPhases) * 100);

  const activeZones = ZONES.filter((z) => !z.locked);

  // Find current active zone & phase for sidebar
  const activeZoneProgress = zoneProgress.find((zp) =>
    zp.phases.some((p) => p.status === "available" || p.status === "in_progress")
  );
  const activeZone = activeZoneProgress
    ? ZONES.find((z) => z.slug === activeZoneProgress.zoneSlug)
    : activeZones[0];
  const activePhase = activeZoneProgress?.phases.find(
    (p) => p.status === "available" || p.status === "in_progress"
  );

  return (
    <div className="mx-auto px-4 md:px-6 lg:px-12 py-6 pb-20">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[2rem] bg-gradient-to-br from-[#7C3AED] via-[#6D28D9] to-[#5B21B6] p-8 md:p-12 mb-10 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
        <div className="relative z-10">
          <div className="flex gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-base font-semibold">
              🔥 {stats.currentStreak} Day Streak
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-base font-semibold">
              ⭐ {stats.totalXp.toLocaleString()} XP
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Turn the MPEP
            <br />
            <span className="text-yellow-300">Into a Game</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-lg mb-6">
            Level up for your patent exam one tiny quest at a time. The heavy manual just got a whole lot lighter.
          </p>
          <Link
            href={activeZone ? `/zones/${activeZone.slug}${activePhase ? `/${activePhase.phase}` : ""}` : "/"}
            className="inline-flex items-center gap-2 bg-white text-[#7C3AED] font-bold text-lg px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            ⚡ Start Today&apos;s Quest
          </Link>
        </div>
      </motion.div>

      {/* Main two-column layout */}
      <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 items-start">
        {/* Left column — stats + zones (2/3 width) */}
        <div className="lg:col-span-2">
          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-3 gap-4 md:gap-6 mb-10"
          >
            <div className="bg-white rounded-2xl p-5 md:p-6 border border-[var(--color-border)] shadow-sm flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#EDE9FE] flex items-center justify-center shrink-0">
                <span className="text-xl">🌍</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">Chapter Worlds</p>
                <p className="text-2xl font-bold text-[var(--color-text-primary)]">{activeZones.length}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 md:p-6 border border-[var(--color-border)] shadow-sm flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#ECFDF5] flex items-center justify-center shrink-0">
                <span className="text-xl">📋</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">Phases Done</p>
                <p className="text-2xl font-bold text-[var(--color-text-primary)]">{completedPhases}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 md:p-6 border border-[var(--color-border)] shadow-sm flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#FEF3C7] flex items-center justify-center shrink-0">
                <span className="text-xl">🎯</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">Accuracy</p>
                <p className="text-2xl font-bold text-[var(--color-text-primary)]">{overallProgress}%</p>
              </div>
            </div>
          </motion.div>

          {/* Explore Worlds */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-2">
              Explore Worlds
            </h2>
            <p className="text-base text-[var(--color-text-muted)] mb-6">Pick a chapter to start your learning journey</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {activeZones.map((zone, i) => {
                const zp = zoneProgress.find((z) => z.zoneSlug === zone.slug);
                const completedCount =
                  zp?.phases.filter((p) => p.status === "completed").length ?? 0;
                const currentPhase = zp?.phases.find(
                  (p) => p.status === "available" || p.status === "in_progress"
                );
                const progressPct = Math.round((completedCount / 6) * 100);

                return (
                  <motion.div
                    key={zone.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.05 }}
                  >
                    <Link href={`/zones/${zone.slug}`}>
                      <div className="bg-white rounded-2xl p-6 md:p-7 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-all cursor-pointer group relative overflow-hidden min-h-[180px] flex flex-col justify-between">
                        {/* Colored top bar */}
                        <div
                          className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl"
                          style={{ backgroundColor: zone.accentColor }}
                        />

                        <div>
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                                style={{ backgroundColor: `${zone.accentColor}15` }}
                              >
                                {zone.icon}
                              </div>
                            </div>
                            {currentPhase && (
                              <span
                                className="text-sm font-semibold px-3 py-1 rounded-full"
                                style={{
                                  backgroundColor: `${zone.accentColor}15`,
                                  color: zone.accentColor,
                                }}
                              >
                                {currentPhase.phase.charAt(0).toUpperCase() +
                                  currentPhase.phase.slice(1)}
                              </span>
                            )}
                          </div>

                          <h3 className="font-bold text-xl text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors mb-1">
                            {zone.name}
                          </h3>
                          <p className="text-sm text-[var(--color-text-muted)] mb-4">
                            {zone.subtitle}
                          </p>
                        </div>

                        {/* Progress bar */}
                        <div>
                          <div className="flex items-center justify-between text-xs font-semibold text-[var(--color-text-muted)] mb-2">
                            <span>PROGRESS</span>
                            <span>{progressPct}%</span>
                          </div>
                          <div className="h-2 bg-[var(--color-surface)] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${progressPct}%`,
                                backgroundColor: zone.accentColor,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right sidebar (1/3 width) */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Active Quest card */}
          <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-sm p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Active Quest</h2>
              <p className="text-sm text-[var(--color-text-muted)]">Quick practice session</p>
            </div>
            {activeZone ? (
              <Link
                href={`/zones/${activeZone.slug}${activePhase ? `/${activePhase.phase}` : ""}`}
                className="block"
              >
                <div className="bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{activeZone.icon}</span>
                    <span className="text-lg font-bold text-[var(--color-text-primary)]">
                      {activeZone.name}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {activePhase
                      ? `Continue ${activePhase.phase.charAt(0).toUpperCase() + activePhase.phase.slice(1)} phase`
                      : "Start your journey"}
                  </p>
                  <div className="mt-4 text-base font-bold text-[var(--color-primary)]">
                    Continue &rarr;
                  </div>
                </div>
              </Link>
            ) : (
              <div className="bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-text-muted)]">Pick a zone below to begin!</p>
              </div>
            )}
          </div>

          {/* Pro Tip card */}
          <div className="bg-[#1E293B] rounded-2xl p-6 text-white">
            <h3 className="font-bold text-xl mb-3">Pro Tip</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Most patent law students spend too much time reading and not enough time doing.
              Practice at least 5 phases a day to build muscle memory!
            </p>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-sm p-6">
            <h3 className="font-bold text-xl text-[var(--color-text-primary)] mb-4">Your Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-base text-[var(--color-text-muted)]">Total XP</span>
                <span className="text-lg font-bold text-[var(--color-text-primary)]">{stats.totalXp.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base text-[var(--color-text-muted)]">Coins</span>
                <span className="text-lg font-bold text-[var(--color-text-primary)]">{stats.coins}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base text-[var(--color-text-muted)]">Day Streak</span>
                <span className="text-lg font-bold text-[var(--color-streak)]">{stats.currentStreak}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base text-[var(--color-text-muted)]">Level</span>
                <span className="text-lg font-bold text-[var(--color-primary)]">{stats.levelTitle}</span>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>

      {/* Locked Zones Preview */}
      {ZONES.filter((z) => z.locked).length > 0 && (
        <div className="mt-10">
          <h2 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">
            Coming Soon
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ZONES.filter((z) => z.locked).map((zone) => (
              <div
                key={zone.slug}
                className="bg-white rounded-2xl p-5 border border-[var(--color-border)] opacity-50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl grayscale">{zone.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-[var(--color-text-muted)]">
                      {zone.name}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      {zone.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
