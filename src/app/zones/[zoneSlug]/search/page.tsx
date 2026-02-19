"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getZoneBySlug } from "@/data/zones";
import { useGameStore } from "@/stores/gameStore";
import OpenBookSim from "@/components/phases/search/OpenBookSim";
import SpeedrunDrill from "@/components/phases/search/SpeedrunDrill";
import { ZONE1_OPEN_BOOK, ZONE1_SPEEDRUN } from "@/data/questions/zone1-search";
import { ZONE2_OPEN_BOOK, ZONE2_SPEEDRUN } from "@/data/questions/zone2-search";
import { ZONE3_OPEN_BOOK, ZONE3_SPEEDRUN } from "@/data/questions/zone3-search";
import { ZONE4_OPEN_BOOK, ZONE4_SPEEDRUN } from "@/data/questions/zone4-search";
import { ZONE5_OPEN_BOOK, ZONE5_SPEEDRUN } from "@/data/questions/zone5-search";
import {
  ZONE6_OPEN_BOOK,
  ZONE6_SPEEDRUN,
} from "@/data/questions/zone6-search";
import { ZONE7_OPEN_BOOK, ZONE7_SPEEDRUN } from "@/data/questions/zone7-search";
import { MPEP_SECTION_101 } from "@/data/mpep-text/zone1-mpep101";
import { MPEP_SECTION_102 } from "@/data/mpep-text/zone1-mpep102";
import { MPEP_SECTION_103 } from "@/data/mpep-text/zone2-mpep103";
import { MPEP_SECTION_104 } from "@/data/mpep-text/zone2-mpep104";
import { MPEP_SECTION_105 } from "@/data/mpep-text/zone3-mpep105";
import { MPEP_SECTION_106 } from "@/data/mpep-text/zone3-mpep106";
import { MPEP_SECTION_115 } from "@/data/mpep-text/zone4-mpep115";
import { MPEP_SECTION_120 } from "@/data/mpep-text/zone5-mpep120";
import { MPEP_SECTION_121 } from "@/data/mpep-text/zone5-mpep121";
import { MPEP_SECTION_130 } from "@/data/mpep-text/zone5-mpep130";
import { MPEP_SECTION_140 } from "@/data/mpep-text/zone6-mpep140";
import { MPEP_SECTION_150 } from "@/data/mpep-text/zone7-mpep150";
import { MPEP_SECTION_151 } from "@/data/mpep-text/zone7-mpep151";
import {
  ZoneSlug,
  OpenBookQuestion,
  SpeedrunPrompt,
  MPEPSection,
} from "@/types";

function getSearchContent(slug: ZoneSlug): {
  openBook: OpenBookQuestion[];
  speedrun: SpeedrunPrompt[];
  mpepSections: MPEPSection[];
} {
  switch (slug) {
    case "the-vault":
      return { openBook: ZONE1_OPEN_BOOK, speedrun: ZONE1_SPEEDRUN, mpepSections: [...MPEP_SECTION_101, ...MPEP_SECTION_102] };
    case "the-reading-room":
      return { openBook: ZONE2_OPEN_BOOK, speedrun: ZONE2_SPEEDRUN, mpepSections: [...MPEP_SECTION_103, ...MPEP_SECTION_104] };
    case "the-gatekeepers":
      return { openBook: ZONE3_OPEN_BOOK, speedrun: ZONE3_SPEEDRUN, mpepSections: [...MPEP_SECTION_105, ...MPEP_SECTION_106] };
    case "the-classified-wing":
      return { openBook: ZONE4_OPEN_BOOK, speedrun: ZONE4_SPEEDRUN, mpepSections: MPEP_SECTION_115 };
    case "the-sealed-chamber":
      return { openBook: ZONE5_OPEN_BOOK, speedrun: ZONE5_SPEEDRUN, mpepSections: [...MPEP_SECTION_120, ...MPEP_SECTION_121, ...MPEP_SECTION_130] };
    case "the-border":
      return {
        openBook: ZONE6_OPEN_BOOK,
        speedrun: ZONE6_SPEEDRUN,
        mpepSections: MPEP_SECTION_140,
      };
    case "the-agencies":
      return { openBook: ZONE7_OPEN_BOOK, speedrun: ZONE7_SPEEDRUN, mpepSections: [...MPEP_SECTION_150, ...MPEP_SECTION_151] };
    default:
      return { openBook: [], speedrun: [], mpepSections: [] };
  }
}

type SearchSubPhase = "openbook" | "speedrun" | "complete";

const SUB_PHASE_LABELS: Record<SearchSubPhase, string> = {
  openbook: "Open-book MPEP simulation",
  speedrun: "Timed citation speedrun",
  complete: "Phase complete!",
};

export default function SearchPage() {
  const params = useParams();
  const slug = params.zoneSlug as ZoneSlug;
  const zone = getZoneBySlug(slug);

  const completePhase = useGameStore((s) => s.completePhase);
  const unlockNextPhase = useGameStore((s) => s.unlockNextPhase);
  const phaseProgress = useGameStore((s) => s.getPhaseProgress);

  const [subPhase, setSubPhase] = useState<SearchSubPhase>("openbook");

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

  const content = getSearchContent(slug);

  let applyStatus: string;
  try {
    applyStatus = phaseProgress(slug, "apply").status;
  } catch {
    applyStatus = "locked";
  }

  if (applyStatus !== "completed" && content.openBook.length > 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link href={`/zones/${slug}`} className="text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block">
          &larr; Back to {zone.name}
        </Link>
        <div className="bg-white rounded-2xl p-8 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] text-center">
          <p className="text-3xl mb-3">🔒</p>
          <p className="text-[var(--color-text-secondary)] text-sm font-semibold">Complete the Apply phase first to unlock Search.</p>
          <Link href={`/zones/${slug}/apply`} className="inline-block mt-4 text-sm font-bold text-[var(--color-primary)]">Go to Apply Phase &rarr;</Link>
        </div>
      </div>
    );
  }

  if (content.openBook.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link href={`/zones/${slug}`} className="text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block">
          &larr; Back to {zone.name}
        </Link>
        <div className="bg-white rounded-2xl p-8 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] text-center">
          <p className="text-[var(--color-text-secondary)] font-semibold">Content for this zone is coming soon.</p>
        </div>
      </div>
    );
  }

  const handleOpenBookComplete = () => {
    if (content.speedrun.length > 0) setSubPhase("speedrun");
    else handlePhaseComplete();
  };

  const handleSpeedrunComplete = () => { handlePhaseComplete(); };

  const handlePhaseComplete = () => {
    setSubPhase("complete");
    completePhase(slug, "search", 85);
    unlockNextPhase(slug, "search");
  };

  const subPhases: SearchSubPhase[] = ["openbook", "speedrun"];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8" data-zone={slug}>
      <Link href={`/zones/${slug}`} className="text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block">
        &larr; Back to {zone.name}
      </Link>

      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">{zone.icon}</span>
        <div>
          <h1 className="text-lg font-extrabold text-[var(--color-text-primary)]">
            Phase 5: <span style={{ color: zone.accentColor }}>Search</span>
          </h1>
          <p className="text-xs font-semibold text-[var(--color-text-secondary)]">{SUB_PHASE_LABELS[subPhase]}</p>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        {subPhases.map((sp) => (
          <div key={sp} className="h-3 flex-1 rounded-full transition-colors" style={{
            backgroundColor: sp === subPhase ? "var(--color-primary)" : subPhase === "complete" || subPhases.indexOf(sp) < subPhases.indexOf(subPhase) ? "var(--color-primary)" : "var(--color-border)",
            opacity: sp === subPhase || subPhase === "complete" ? 1 : subPhases.indexOf(sp) < subPhases.indexOf(subPhase) ? 0.6 : 1,
          }} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {subPhase === "openbook" && (
          <motion.div key="openbook" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <OpenBookSim questions={content.openBook} mpepSections={content.mpepSections} onComplete={handleOpenBookComplete} accentColor={zone.accentColor} />
          </motion.div>
        )}
        {subPhase === "speedrun" && (
          <motion.div key="speedrun" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SpeedrunDrill prompts={content.speedrun} onComplete={handleSpeedrunComplete} accentColor={zone.accentColor} />
          </motion.div>
        )}
        {subPhase === "complete" && (
          <motion.div key="complete" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="text-5xl mb-4">🔍</motion.div>
            <h2 className="text-xl font-extrabold text-[var(--color-text-primary)] mb-2">Search Phase Complete!</h2>
            <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-6">
              You can now efficiently find answers in the MPEP for {zone.name}.<br />The Boss Battle phase is now unlocked.
            </p>
            <div className="flex gap-3 justify-center">
              <Link href={`/zones/${slug}`} className="px-5 py-2.5 rounded-xl text-sm font-bold border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] hover:bg-[var(--color-surface)] transition-colors active:border-b-2 active:translate-y-[2px]">Back to Zone</Link>
              <Link href={`/zones/${slug}/boss`} className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide">Start Boss Battle &rarr;</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
