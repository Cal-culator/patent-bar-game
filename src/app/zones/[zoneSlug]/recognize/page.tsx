"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getZoneBySlug } from "@/data/zones";
import { useGameStore } from "@/stores/gameStore";
import TrapDetector from "@/components/phases/recognize/TrapDetector";
import SourceSorter from "@/components/phases/recognize/SourceSorter";
import PatternHighlighter from "@/components/phases/recognize/PatternHighlighter";
import { ZONE1_TRAP_DETECTORS, ZONE1_SOURCE_SORTS, ZONE1_PATTERN_HIGHLIGHTS } from "@/data/questions/zone1-recognize";
import { ZONE2_TRAP_DETECTORS, ZONE2_SOURCE_SORTS, ZONE2_PATTERN_HIGHLIGHTS } from "@/data/questions/zone2-recognize";
import { ZONE3_TRAP_DETECTORS, ZONE3_SOURCE_SORTS, ZONE3_PATTERN_HIGHLIGHTS } from "@/data/questions/zone3-recognize";
import { ZONE4_TRAP_DETECTORS, ZONE4_SOURCE_SORTS, ZONE4_PATTERN_HIGHLIGHTS } from "@/data/questions/zone4-recognize";
import { ZONE5_TRAP_DETECTORS, ZONE5_SOURCE_SORTS, ZONE5_PATTERN_HIGHLIGHTS } from "@/data/questions/zone5-recognize";
import {
  ZONE6_TRAP_DETECTORS,
  ZONE6_SOURCE_SORTS,
  ZONE6_PATTERN_HIGHLIGHTS,
} from "@/data/questions/zone6-recognize";
import { ZONE7_TRAP_DETECTORS, ZONE7_SOURCE_SORTS, ZONE7_PATTERN_HIGHLIGHTS } from "@/data/questions/zone7-recognize";
import {
  ZoneSlug,
  TrapDetectorQuestion,
  SourceSortItem,
  PatternHighlightExcerpt,
} from "@/types";

function getRecognizeContent(slug: ZoneSlug): {
  traps: TrapDetectorQuestion[];
  sources: SourceSortItem[];
  highlights: PatternHighlightExcerpt[];
} {
  switch (slug) {
    case "the-vault":
      return { traps: ZONE1_TRAP_DETECTORS, sources: ZONE1_SOURCE_SORTS, highlights: ZONE1_PATTERN_HIGHLIGHTS };
    case "the-reading-room":
      return { traps: ZONE2_TRAP_DETECTORS, sources: ZONE2_SOURCE_SORTS, highlights: ZONE2_PATTERN_HIGHLIGHTS };
    case "the-gatekeepers":
      return { traps: ZONE3_TRAP_DETECTORS, sources: ZONE3_SOURCE_SORTS, highlights: ZONE3_PATTERN_HIGHLIGHTS };
    case "the-classified-wing":
      return { traps: ZONE4_TRAP_DETECTORS, sources: ZONE4_SOURCE_SORTS, highlights: ZONE4_PATTERN_HIGHLIGHTS };
    case "the-sealed-chamber":
      return { traps: ZONE5_TRAP_DETECTORS, sources: ZONE5_SOURCE_SORTS, highlights: ZONE5_PATTERN_HIGHLIGHTS };
    case "the-border":
      return {
        traps: ZONE6_TRAP_DETECTORS,
        sources: ZONE6_SOURCE_SORTS,
        highlights: ZONE6_PATTERN_HIGHLIGHTS,
      };
    case "the-agencies":
      return { traps: ZONE7_TRAP_DETECTORS, sources: ZONE7_SOURCE_SORTS, highlights: ZONE7_PATTERN_HIGHLIGHTS };
    default:
      return { traps: [], sources: [], highlights: [] };
  }
}

type RecognizeSubPhase = "traps" | "sources" | "highlights" | "complete";

const SUB_PHASE_LABELS: Record<RecognizeSubPhase, string> = {
  traps: "Identify traps in answer choices",
  sources: "Classify rules by source type",
  highlights: "Spot exam-testable phrases",
  complete: "Phase complete!",
};

export default function RecognizePage() {
  const params = useParams();
  const slug = params.zoneSlug as ZoneSlug;
  const zone = getZoneBySlug(slug);

  const completePhase = useGameStore((s) => s.completePhase);
  const unlockNextPhase = useGameStore((s) => s.unlockNextPhase);
  const phaseProgress = useGameStore((s) => s.getPhaseProgress);

  const [subPhase, setSubPhase] = useState<RecognizeSubPhase>("traps");

  if (!zone) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <p className="font-semibold text-[var(--color-text-primary)]">Zone not found.</p>
        <Link href="/" className="text-[var(--color-selected)] text-sm font-bold hover:underline">
          &larr; Back
        </Link>
      </div>
    );
  }

  const content = getRecognizeContent(slug);

  let buildStatus: string;
  try {
    buildStatus = phaseProgress(slug, "build").status;
  } catch {
    buildStatus = "locked";
  }

  if (buildStatus !== "completed" && content.traps.length > 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link
          href={`/zones/${slug}`}
          className="text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block"
        >
          &larr; Back to {zone.name}
        </Link>
        <div className="bg-white rounded-2xl p-8 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] text-center">
          <p className="text-3xl mb-3">🔒</p>
          <p className="text-[var(--color-text-secondary)] text-sm font-semibold">
            Complete the Build phase first to unlock Recognize.
          </p>
          <Link
            href={`/zones/${slug}/build`}
            className="inline-block mt-4 text-sm font-bold text-[var(--color-primary)]"
          >
            Go to Build Phase &rarr;
          </Link>
        </div>
      </div>
    );
  }

  if (content.traps.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link
          href={`/zones/${slug}`}
          className="text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block"
        >
          &larr; Back to {zone.name}
        </Link>
        <div className="bg-white rounded-2xl p-8 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] text-center">
          <p className="text-[var(--color-text-secondary)] font-semibold">
            Content for this zone is coming soon.
          </p>
        </div>
      </div>
    );
  }

  const handleTrapsComplete = () => {
    if (content.sources.length > 0) {
      setSubPhase("sources");
    } else if (content.highlights.length > 0) {
      setSubPhase("highlights");
    } else {
      handlePhaseComplete();
    }
  };

  const handleSourcesComplete = () => {
    if (content.highlights.length > 0) {
      setSubPhase("highlights");
    } else {
      handlePhaseComplete();
    }
  };

  const handleHighlightsComplete = () => {
    handlePhaseComplete();
  };

  const handlePhaseComplete = () => {
    setSubPhase("complete");
    completePhase(slug, "recognize", 85);
    unlockNextPhase(slug, "recognize");
  };

  const subPhases: RecognizeSubPhase[] = ["traps", "sources", "highlights"];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8" data-zone={slug}>
      <Link
        href={`/zones/${slug}`}
        className="text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block"
      >
        &larr; Back to {zone.name}
      </Link>

      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">{zone.icon}</span>
        <div>
          <h1 className="text-lg font-extrabold text-[var(--color-text-primary)]">
            Phase 3:{" "}
            <span style={{ color: zone.accentColor }}>Recognize</span>
          </h1>
          <p className="text-xs font-semibold text-[var(--color-text-secondary)]">
            {SUB_PHASE_LABELS[subPhase]}
          </p>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        {subPhases.map((sp) => (
          <div
            key={sp}
            className="h-3 flex-1 rounded-full transition-colors"
            style={{
              backgroundColor:
                sp === subPhase
                  ? "var(--color-primary)"
                  : subPhase === "complete" ||
                      subPhases.indexOf(sp) < subPhases.indexOf(subPhase)
                    ? "var(--color-primary)"
                    : "var(--color-border)",
              opacity:
                sp === subPhase || subPhase === "complete"
                  ? 1
                  : subPhases.indexOf(sp) < subPhases.indexOf(subPhase)
                    ? 0.6
                    : 1,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {subPhase === "traps" && (
          <motion.div key="traps" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <TrapDetector questions={content.traps} onComplete={handleTrapsComplete} accentColor={zone.accentColor} />
          </motion.div>
        )}
        {subPhase === "sources" && (
          <motion.div key="sources" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SourceSorter items={content.sources} onComplete={handleSourcesComplete} accentColor={zone.accentColor} />
          </motion.div>
        )}
        {subPhase === "highlights" && (
          <motion.div key="highlights" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <PatternHighlighter excerpts={content.highlights} onComplete={handleHighlightsComplete} accentColor={zone.accentColor} />
          </motion.div>
        )}
        {subPhase === "complete" && (
          <motion.div key="complete" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="text-5xl mb-4">
              🔍
            </motion.div>
            <h2 className="text-xl font-extrabold text-[var(--color-text-primary)] mb-2">Recognize Phase Complete!</h2>
            <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-6">
              You can now spot traps and identify testable patterns for {zone.name}.
              <br />
              The Apply phase is now unlocked.
            </p>
            <div className="flex gap-3 justify-center">
              <Link href={`/zones/${slug}`} className="px-5 py-2.5 rounded-xl text-sm font-bold border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] hover:bg-[var(--color-surface)] transition-colors active:border-b-2 active:translate-y-[2px]">
                Back to Zone
              </Link>
              <Link href={`/zones/${slug}/apply`} className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide">
                Start Apply Phase &rarr;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
