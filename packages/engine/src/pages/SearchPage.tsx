"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useContent } from "../context";
import { useGameStore } from "../store/gameStore";
import OpenBookSim from "../components/phases/search/OpenBookSim";
import SpeedrunDrill from "../components/phases/search/SpeedrunDrill";

type SearchSubPhase = "openbook" | "speedrun" | "complete";

const SUB_PHASE_LABELS: Record<SearchSubPhase, string> = {
  openbook: "Open-book MPEP simulation",
  speedrun: "Timed citation speedrun",
  complete: "Phase complete!",
};

export function SearchPage() {
  const params = useParams();
  const slug = params.zoneSlug as string;

  const content = useContent();
  const zone = content.zones.find((z) => z.slug === slug);

  const completePhase = useGameStore((s) => s.completePhase);
  const unlockNextPhase = useGameStore((s) => s.unlockNextPhase);
  const phaseProgress = useGameStore((s) => s.getPhaseProgress);

  const [subPhase, setSubPhase] = useState<SearchSubPhase>("openbook");

  if (!zone) {
    return (
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <p className="font-semibold text-[var(--color-text-primary)]">Zone not found.</p>
        <Link href="/" className="text-[var(--color-selected)] text-base font-semibold hover:underline">
          &larr; Back
        </Link>
      </div>
    );
  }

  const searchContent = content.getSearchContent(slug);

  let applyStatus: string;
  try {
    applyStatus = phaseProgress(slug, "apply").status;
  } catch {
    applyStatus = "locked";
  }

  if (applyStatus !== "completed" && searchContent.openBook.length > 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <Link href={`/zones/${slug}`} className="text-base font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block">
          &larr; Back to {zone.name}
        </Link>
        <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm text-center">
          <p className="text-3xl mb-3">🔒</p>
          <p className="text-[var(--color-text-secondary)] text-sm font-semibold">Complete the Apply phase first to unlock Search.</p>
          <Link href={`/zones/${slug}/apply`} className="inline-block mt-4 text-base font-bold text-[var(--color-primary)]">Go to Apply Phase &rarr;</Link>
        </div>
      </div>
    );
  }

  if (searchContent.openBook.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <Link href={`/zones/${slug}`} className="text-base font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block">
          &larr; Back to {zone.name}
        </Link>
        <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm text-center">
          <p className="text-[var(--color-text-secondary)] text-base font-semibold">Content for this zone is coming soon.</p>
        </div>
      </div>
    );
  }

  const handleOpenBookComplete = () => {
    if (searchContent.speedrun.length > 0) setSubPhase("speedrun");
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
    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8" data-zone={slug}>
      <Link href={`/zones/${slug}`} className="text-base font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block">
        &larr; Back to {zone.name}
      </Link>

      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">{zone.icon}</span>
        <div>
          <h1 className="text-2xl font-extrabold text-[var(--color-text-primary)]">
            Phase 5: <span style={{ color: zone.accentColor }}>Search</span>
          </h1>
          <p className="text-sm font-semibold text-[var(--color-text-secondary)]">{SUB_PHASE_LABELS[subPhase]}</p>
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
            <OpenBookSim questions={searchContent.openBook} mpepSections={searchContent.referenceSections} onComplete={handleOpenBookComplete} accentColor={zone.accentColor} />
          </motion.div>
        )}
        {subPhase === "speedrun" && (
          <motion.div key="speedrun" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SpeedrunDrill prompts={searchContent.speedrun} onComplete={handleSpeedrunComplete} accentColor={zone.accentColor} />
          </motion.div>
        )}
        {subPhase === "complete" && (
          <motion.div key="complete" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="text-5xl mb-4">🔍</motion.div>
            <h2 className="text-2xl font-extrabold text-[var(--color-text-primary)] mb-2">Search Phase Complete!</h2>
            <p className="text-base font-semibold text-[var(--color-text-secondary)] mb-6">
              You can now efficiently find answers in the MPEP for {zone.name}.<br />The Boss Battle phase is now unlocked.
            </p>
            <div className="flex gap-3 justify-center">
              <Link href={`/zones/${slug}`} className="px-6 py-3 rounded-xl text-base font-bold border border-[var(--color-border)] hover:bg-[var(--color-surface)] shadow-sm transition-all">Back to Zone</Link>
              <Link href={`/zones/${slug}/boss`} className="px-6 py-3 rounded-xl text-base font-bold text-white bg-[var(--color-primary)] shadow-sm hover:shadow-md transition-shadow uppercase tracking-wide">Start Boss Battle &rarr;</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
