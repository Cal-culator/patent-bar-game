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

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-extrabold text-[var(--color-text-primary)] mb-1">The Patent Office</h1>
        <p className="text-[var(--color-text-secondary)] text-sm font-semibold">
          MPEP Chapter 100 — Secrecy & Foreign Filing
        </p>
      </motion.div>

      {/* Overall Progress */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-5 mb-6 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)]"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-[var(--color-text-secondary)]">
            Overall Progress
          </span>
          <span className="text-sm font-bold text-[var(--color-text-primary)]">
            {overallProgress}%
          </span>
        </div>
        <div className="h-4 bg-[var(--color-border)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--color-primary)] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <div className="flex items-center justify-between mt-3 text-xs font-semibold text-[var(--color-text-muted)]">
          <span>{completedPhases} of {totalPhases} phases completed</span>
          <span>{stats.levelTitle}</span>
        </div>
      </motion.div>

      {/* Active Zones */}
      <div className="mb-4">
        <h2 className="text-sm font-extrabold text-[var(--color-text-secondary)] uppercase tracking-wider mb-3">
          Available Zones
        </h2>
        <div className="space-y-3">
          {activeZones.map((zone, i) => {
            const zp = zoneProgress.find((z) => z.zoneSlug === zone.slug);
            const completedCount =
              zp?.phases.filter((p) => p.status === "completed").length ?? 0;
            const currentPhase = zp?.phases.find(
              (p) => p.status === "available" || p.status === "in_progress"
            );

            return (
              <motion.div
                key={zone.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Link href={`/zones/${zone.slug}`}>
                  <div
                    className="bg-white rounded-2xl p-4 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] hover:bg-[var(--color-surface)] transition-all cursor-pointer active:border-b-2 active:translate-y-[2px]"
                    style={{
                      borderLeftWidth: "4px",
                      borderLeftColor: zone.accentColor,
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{zone.icon}</span>
                        <div>
                          <h3 className="font-bold text-[var(--color-text-primary)]">
                            {zone.name}
                          </h3>
                          <p className="text-xs font-semibold text-[var(--color-text-secondary)]">
                            {zone.subtitle} — MPEP{" "}
                            {zone.mpepSections.join(", ")}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-[var(--color-text-muted)]">
                          {completedCount}/6 phases
                        </div>
                        {currentPhase && (
                          <div
                            className="text-xs mt-0.5 font-bold"
                            style={{ color: zone.accentColor }}
                          >
                            {currentPhase.phase.charAt(0).toUpperCase() +
                              currentPhase.phase.slice(1)}{" "}
                            &rarr;
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Mini phase dots */}
                    <div className="flex gap-1.5 mt-3">
                      {zp?.phases.map((p) => (
                        <div
                          key={p.phase}
                          className="h-2 flex-1 rounded-full"
                          style={{
                            backgroundColor:
                              p.status === "completed"
                                ? "var(--color-primary)"
                                : p.status === "available" ||
                                    p.status === "in_progress"
                                  ? "var(--color-primary)"
                                  : "var(--color-border)",
                            opacity:
                              p.status === "completed"
                                ? 1
                                : p.status === "available" ||
                                    p.status === "in_progress"
                                  ? 0.4
                                  : 1,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Locked Zones Preview */}
      <div className="mt-6">
        <h2 className="text-sm font-extrabold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
          Locked
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {ZONES.filter((z) => z.locked).map((zone) => (
            <div
              key={zone.slug}
              className="bg-[var(--color-surface)] rounded-2xl p-3 border-2 border-[var(--color-border)] opacity-50"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg grayscale">{zone.icon}</span>
                <div>
                  <p className="text-xs font-bold text-[var(--color-text-muted)]">
                    {zone.name}
                  </p>
                  <p className="text-[10px] font-semibold text-[var(--color-text-muted)]">
                    {zone.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
