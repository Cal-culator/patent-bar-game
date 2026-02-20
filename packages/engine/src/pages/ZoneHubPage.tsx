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
    <span className="text-xs">
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
      <div className="max-w-2xl mx-auto px-4 py-8">
        <p className="text-[var(--color-text-secondary)] font-semibold">Zone not found.</p>
        <Link href="/" className="text-sm text-[var(--color-selected)] font-bold hover:underline mt-2 inline-block">
          &larr; Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8" data-zone={zone.slug}>
      {/* Back link */}
      <Link
        href="/"
        className="text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block"
      >
        &larr; Back to zones
      </Link>

      {/* Zone Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{zone.icon}</span>
          <div>
            <h1 className="text-2xl font-extrabold" style={{ color: zone.accentColor }}>
              {zone.name}
            </h1>
            <p className="text-sm font-semibold text-[var(--color-text-secondary)]">
              {zone.subtitle} — {config.zoneSectionLabel} {zone.referenceSections.join(", ")}
            </p>
          </div>
        </div>
        <p className="text-sm font-semibold text-[var(--color-text-secondary)] mt-2">
          {zone.description}
        </p>
        <span
          className="inline-block mt-2 text-xs font-bold px-3 py-1 rounded-full"
          style={{
            backgroundColor: `${zone.accentColor}20`,
            color: zone.accentColor,
          }}
        >
          Importance: {zone.importance}
        </span>
      </motion.div>

      {/* Phase List */}
      <div className="space-y-3">
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
      className={`rounded-2xl p-4 border-2 border-b-4 transition-all ${
        isLocked
          ? "bg-[var(--color-surface)] border-[var(--color-border)] border-b-[var(--color-border)] opacity-40 cursor-not-allowed"
          : isCompleted
            ? "bg-white border-[var(--color-border)] border-b-[var(--color-border-strong)] hover:bg-[var(--color-surface)] cursor-pointer active:border-b-2 active:translate-y-[2px]"
            : "bg-white border-[var(--color-border)] border-b-[var(--color-border-strong)] hover:bg-[var(--color-surface)] cursor-pointer active:border-b-2 active:translate-y-[2px]"
      }`}
      style={
        isAvailable
          ? { borderLeftWidth: "4px", borderLeftColor: "var(--color-primary)" }
          : undefined
      }
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg border-2 border-b-4"
            style={{
              backgroundColor: isLocked ? "var(--color-surface)" : `${accentColor}15`,
              borderColor: isLocked ? "var(--color-border)" : `${accentColor}40`,
              borderBottomColor: isLocked ? "var(--color-border-strong)" : `${accentColor}60`,
            }}
          >
            {isLocked ? "🔒" : meta.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[var(--color-text-muted)]">
                Phase {phaseNumber}
              </span>
              <h3 className="font-bold text-sm text-[var(--color-text-primary)]">{meta.label}</h3>
            </div>
            <p className="text-xs font-semibold text-[var(--color-text-secondary)]">
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
              className="text-xs font-bold"
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
