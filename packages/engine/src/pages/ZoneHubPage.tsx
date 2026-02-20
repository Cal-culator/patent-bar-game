"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useGameStore } from "../store/gameStore";
import { useAppConfig } from "../context";
import { useContent } from "../context";
import { PHASE_ORDER } from "../types";
import type { Phase } from "../types";

const PHASE_META: Record<Phase, { label: string; icon: string; description: string }> = {
  absorb: {
    label: "Absorb",
    icon: "📥",
    description: "Learn rules layer by layer with analogies and timelines",
  },
  build: {
    label: "Build",
    icon: "🔨",
    description: "Construct rules from fragments and fill comparison tables",
  },
  recognize: {
    label: "Recognize",
    icon: "🎯",
    description: "Detect traps, sort sources, and highlight testable language",
  },
  apply: {
    label: "Apply",
    icon: "⚡",
    description: "Scenario questions, quick-fire rounds, and procedural cascades",
  },
  search: {
    label: "Search",
    icon: "🔍",
    description: "Open-book MPEP drills and citation speedruns",
  },
  boss: {
    label: "Boss Battle",
    icon: "👾",
    description: "10-question mixed exam — prove your mastery",
  },
};

function StarDisplay({ count }: { count: number }) {
  return (
    <span className="text-sm">
      {[0, 1, 2].map((i) => (
        <span key={i} className={i < count ? "text-[var(--color-xp)]" : "text-[var(--color-text-muted)]"}>
          ★
        </span>
      ))}
    </span>
  );
}

export function ZoneHubPage() {
  const params = useParams();
  const slug = params.zoneSlug as string;
  const config = useAppConfig();
  const { zones } = useContent();
  const zone = zones.find((z) => z.slug === slug);
  const zoneProgress = useGameStore((s) => s.zoneProgress);
  const zp = zoneProgress.find((z) => z.zoneSlug === slug);

  if (!zone) {
    return (
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <p className="text-[var(--color-text-secondary)] font-semibold">Zone not found.</p>
        <Link href="/" className="text-base text-[var(--color-selected)] font-semibold hover:underline mt-2 inline-block">
          &larr; Back to home
        </Link>
      </div>
    );
  }

  const completedCount = zp?.phases.filter((p) => p.status === "completed").length ?? 0;
  const totalPhaseCount = PHASE_ORDER.length;
  const zoneProgressPct = Math.round((completedCount / totalPhaseCount) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8" data-zone={zone.slug}>
      {/* Back link */}
      <Link
        href="/"
        className="text-base font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-flex items-center gap-1"
      >
        &larr; Back to zones
      </Link>

      {/* Zone Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${zone.accentColor}, ${zone.accentColor}CC)` }}
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center text-3xl">
              {zone.icon}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-baloo), 'Baloo 2', system-ui, sans-serif" }}>
                {zone.name}
              </h1>
              <p className="text-white/80 text-sm font-medium">
                {zone.subtitle} — {config.zoneSectionLabel} {zone.referenceSections.join(", ")}
              </p>
            </div>
          </div>
          <p className="text-base text-white/80 mb-4">
            {zone.description}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold bg-white/15 rounded-full px-3 py-1">
              Importance: {zone.importance}
            </span>
            <span className="text-sm font-semibold bg-white/15 rounded-full px-3 py-1">
              {completedCount}/{totalPhaseCount} Phases
            </span>
          </div>
          <div className="mt-3">
            <div className="h-2 bg-white/20 rounded-full overflow-hidden max-w-xs">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${zoneProgressPct}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Phase List */}
      <h2 className="text-base font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
        Learning Phases
      </h2>
      <div className="space-y-4">
        {PHASE_ORDER.map((phase, i) => {
          const meta = PHASE_META[phase];
          const pp = zp?.phases.find((p) => p.phase === phase);
          const status = pp?.status ?? "locked";
          const isCompleted = status === "completed";
          const isAvailable = status === "available" || status === "in_progress";

          return (
            <motion.div
              key={phase}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              {isAvailable ? (
                <Link href={`/zones/${zone.slug}/${phase}`}>
                  <PhaseCard
                    meta={meta}
                    status={status}
                    stars={pp?.stars ?? 0}
                    bestScore={pp?.bestScore ?? 0}
                    accentColor={zone.accentColor}
                    phaseNumber={i + 1}
                  />
                </Link>
              ) : isCompleted ? (
                <Link href={`/zones/${zone.slug}/${phase}`}>
                  <PhaseCard
                    meta={meta}
                    status={status}
                    stars={pp?.stars ?? 0}
                    bestScore={pp?.bestScore ?? 0}
                    accentColor={zone.accentColor}
                    phaseNumber={i + 1}
                  />
                </Link>
              ) : (
                <PhaseCard
                  meta={meta}
                  status={status}
                  stars={pp?.stars ?? 0}
                  bestScore={pp?.bestScore ?? 0}
                  accentColor={zone.accentColor}
                  phaseNumber={i + 1}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function PhaseCard({
  meta,
  status,
  stars,
  bestScore,
  accentColor,
  phaseNumber,
}: {
  meta: { label: string; icon: string; description: string };
  status: string;
  stars: number;
  bestScore: number;
  accentColor: string;
  phaseNumber: number;
}) {
  const isLocked = status === "locked";
  const isCompleted = status === "completed";
  const isAvailable = status === "available" || status === "in_progress";

  return (
    <div
      className={`rounded-2xl p-5 border transition-all relative overflow-hidden ${
        isLocked
          ? "bg-[var(--color-surface)] border-[var(--color-border)] opacity-40 cursor-not-allowed"
          : isCompleted
            ? "bg-white border-[var(--color-border)] shadow-sm hover:shadow-md cursor-pointer"
            : "bg-white border-[var(--color-border)] shadow-sm hover:shadow-md cursor-pointer"
      }`}
    >
      {/* Colored left accent for available phase */}
      {isAvailable && (
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ backgroundColor: accentColor }} />
      )}
      {isCompleted && (
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-[var(--color-correct)]" />
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
            style={{
              backgroundColor: isLocked ? "var(--color-surface)" : `${accentColor}15`,
            }}
          >
            {isLocked ? "🔒" : meta.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                Phase {phaseNumber}
              </span>
            </div>
            <h3 className="font-bold text-base text-[var(--color-text-primary)]">{meta.label}</h3>
            <p className="text-sm text-[var(--color-text-muted)]">
              {meta.description}
            </p>
          </div>
        </div>
        <div className="text-right">
          {isCompleted && (
            <>
              <StarDisplay count={stars} />
              <div className="text-xs font-bold text-[var(--color-text-muted)] mt-0.5">
                Best: {bestScore}%
              </div>
            </>
          )}
          {isAvailable && (
            <span
              className="text-sm font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              Start &rarr;
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
