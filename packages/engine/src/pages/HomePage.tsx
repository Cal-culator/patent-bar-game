"use client";

import Link from "next/link";
import { useGameStore } from "../store/gameStore";
import { useAppConfig } from "../context";
import { useContent } from "../context";
import { motion } from "framer-motion";

export function HomePage() {
  const config = useAppConfig();
  const { zones } = useContent();
  const stats = useGameStore((s) => s.stats);
  const zoneProgress = useGameStore((s) => s.zoneProgress);

  const completedPhases = zoneProgress.reduce(
    (acc, zp) => acc + zp.phases.filter((p) => p.status === "completed").length,
    0
  );
  const totalPhases = zoneProgress.length * 6;
  const overallProgress = Math.round((completedPhases / totalPhases) * 100);

  const activeZones = zones.filter((z) => !z.locked);

  const activeZoneProgress = zoneProgress.find((zp) =>
    zp.phases.some((p) => p.status === "available" || p.status === "in_progress")
  );
  const activeZone = activeZoneProgress
    ? zones.find((z) => z.slug === activeZoneProgress.zoneSlug)
    : activeZones[0];
  const activePhase = activeZoneProgress?.phases.find(
    (p) => p.status === "available" || p.status === "in_progress"
  );

  return (
    <div className="mx-auto px-4 md:px-6 lg:px-12 py-6 pb-20">
      {/* Hero Banner — Mesh gradient with floating shapes */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[2rem] p-8 md:p-12 mb-10 text-white relative overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 15% 50%, rgba(139, 92, 246, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.6) 0%, transparent 40%),
            radial-gradient(circle at 60% 100%, rgba(109, 40, 217, 0.7) 0%, transparent 50%),
            linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)
          `,
        }}
      >
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        {/* Floating ambient shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.06] rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/[0.04] rounded-full translate-y-1/3 -translate-x-1/4 blur-2xl" />
        <motion.div
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-yellow-300/[0.08] rounded-full blur-3xl"
          animate={{ y: [-8, 8, -8], x: [-4, 4, -4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-indigo-300/[0.1] rounded-full blur-2xl"
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10">
          <div className="flex gap-3 mb-6">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/[0.12] backdrop-blur-sm rounded-full px-4 py-1.5 text-base font-semibold border border-white/[0.08]"
            >
              🔥 {stats.currentStreak} Day Streak
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/[0.12] backdrop-blur-sm rounded-full px-4 py-1.5 text-base font-semibold border border-white/[0.08]"
            >
              ⭐ {stats.totalXp.toLocaleString()} XP
            </motion.span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            Turn the MPEP
            <br />
            <span className="bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-200 bg-clip-text text-transparent">
              Into a Game
            </span>
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            Level up for your patent exam one tiny quest at a time. The heavy manual just got a whole lot lighter.
          </p>
          <Link
            href={activeZone ? `/zones/${activeZone.slug}${activePhase ? `/${activePhase.phase}` : ""}` : "/"}
            className="group inline-flex items-center gap-2 bg-white text-[#7C3AED] font-bold text-lg px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            ⚡ Start Today&apos;s Quest
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">&rarr;</span>
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
            {[
              { icon: "🌍", label: "Chapter Worlds", value: activeZones.length, bg: "#EDE9FE" },
              { icon: "📋", label: "Phases Done", value: completedPhases, bg: "#ECFDF5" },
              { icon: "🎯", label: "Accuracy", value: `${overallProgress}%`, bg: "#FEF3C7" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05 }}
                className="bg-white rounded-2xl p-5 md:p-6 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: stat.bg }}
                >
                  <span className="text-xl">{stat.icon}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">{stat.label}</p>
                  <p className="text-2xl font-bold text-[var(--color-text-primary)]">{stat.value}</p>
                </div>
              </motion.div>
            ))}
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
                    whileHover={{ y: -4 }}
                    transition={{ delay: 0.15 + i * 0.05 }}
                  >
                    <Link href={`/zones/${zone.slug}`}>
                      <div className="bg-white rounded-2xl p-6 md:p-7 border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group relative overflow-hidden min-h-[180px] flex flex-col justify-between">
                        {/* Gradient top bar */}
                        <div
                          className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl"
                          style={{
                            background: `linear-gradient(90deg, ${zone.accentColor}, ${zone.accentColor}99)`,
                          }}
                        />

                        <div>
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 shadow-sm"
                                style={{ backgroundColor: `${zone.accentColor}15` }}
                              >
                                {zone.icon}
                              </div>
                            </div>
                            {currentPhase && (
                              <span
                                className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                                style={{
                                  backgroundColor: `${zone.accentColor}12`,
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
                            <span className="uppercase tracking-wider">Progress</span>
                            <span>{progressPct}%</span>
                          </div>
                          <div className="h-2 bg-[var(--color-surface)] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-700"
                              style={{
                                width: `${progressPct}%`,
                                background: `linear-gradient(90deg, ${zone.accentColor}, ${zone.accentColor}CC)`,
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
          <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-sm overflow-hidden">
            <div className="p-6 pb-4">
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Active Quest</h2>
              <p className="text-sm text-[var(--color-text-muted)]">Quick practice session</p>
            </div>
            {activeZone ? (
              <Link
                href={`/zones/${activeZone.slug}${activePhase ? `/${activePhase.phase}` : ""}`}
                className="block px-6 pb-6"
              >
                <div className="bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-md hover:shadow-purple-500/10 transition-all duration-200">
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
                  <div className="mt-4 text-base font-bold text-[var(--color-primary)] flex items-center gap-2">
                    Continue <span>&rarr;</span>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="px-6 pb-6">
                <div className="bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-border)]">
                  <p className="text-sm text-[var(--color-text-muted)]">Pick a zone below to begin!</p>
                </div>
              </div>
            )}
          </div>

          {/* Pro Tip card — dark with gradient accent */}
          <div
            className="rounded-2xl p-6 text-white relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1E1B3A 0%, #1A1235 100%)',
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="relative">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-amber-400">💡</span> Pro Tip
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Most patent law students spend too much time reading and not enough time doing.
                Practice at least 5 phases a day to build muscle memory!
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-sm p-6">
            <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-4">Your Stats</h3>
            <div className="space-y-3">
              {[
                { label: "Total XP", value: stats.totalXp.toLocaleString(), color: "var(--color-xp)" },
                { label: "Coins", value: stats.coins, color: "var(--color-text-primary)" },
                { label: "Day Streak", value: stats.currentStreak, color: "var(--color-streak)" },
                { label: "Level", value: stats.levelTitle, color: "var(--color-primary)" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between py-1">
                  <span className="text-sm text-[var(--color-text-muted)]">{stat.label}</span>
                  <span className="text-base font-bold" style={{ color: stat.color }}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>

      {/* Locked Zones Preview */}
      {zones.filter((z) => z.locked).length > 0 && (
        <div className="mt-12">
          <h2 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">
            Coming Soon
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {zones.filter((z) => z.locked).map((zone) => (
              <div
                key={zone.slug}
                className="bg-white/60 rounded-2xl p-5 border border-[var(--color-border)] opacity-50 backdrop-blur-sm"
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
