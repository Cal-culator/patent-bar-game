"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useContent } from "../context";
import { useGameStore } from "../store/gameStore";
import ScenarioQuestions from "../components/phases/apply/ScenarioQuestions";
import QuickFireRound from "../components/phases/apply/QuickFireRound";
import ProceduralCascade from "../components/phases/apply/ProceduralCascade";

type ApplySubPhase = "scenarios" | "quickfire" | "cascades" | "complete";

const SUB_PHASE_LABELS: Record<ApplySubPhase, string> = {
  scenarios: "Solve exam-style scenarios",
  quickfire: "Rapid true/false recall",
  cascades: "Walk through multi-step procedures",
  complete: "Phase complete!",
};

export function ApplyPage() {
  const params = useParams();
  const slug = params.zoneSlug as string;

  const content = useContent();
  const zone = content.zones.find((z) => z.slug === slug);

  const completePhase = useGameStore((s) => s.completePhase);
  const unlockNextPhase = useGameStore((s) => s.unlockNextPhase);
  const phaseProgress = useGameStore((s) => s.getPhaseProgress);

  const [subPhase, setSubPhase] = useState<ApplySubPhase>("scenarios");

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

  const applyContent = content.getApplyContent(slug);

  let recognizeStatus: string;
  try {
    recognizeStatus = phaseProgress(slug, "recognize").status;
  } catch {
    recognizeStatus = "locked";
  }

  if (recognizeStatus !== "completed" && applyContent.scenarios.length > 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link href={`/zones/${slug}`} className="text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block">
          &larr; Back to {zone.name}
        </Link>
        <div className="bg-white rounded-2xl p-8 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] text-center">
          <p className="text-3xl mb-3">🔒</p>
          <p className="text-[var(--color-text-secondary)] text-sm font-semibold">
            Complete the Recognize phase first to unlock Apply.
          </p>
          <Link href={`/zones/${slug}/recognize`} className="inline-block mt-4 text-sm font-bold text-[var(--color-primary)]">
            Go to Recognize Phase &rarr;
          </Link>
        </div>
      </div>
    );
  }

  if (applyContent.scenarios.length === 0) {
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

  const handleScenariosComplete = () => {
    if (applyContent.quickFire.length > 0) setSubPhase("quickfire");
    else if (applyContent.cascades.length > 0) setSubPhase("cascades");
    else handlePhaseComplete();
  };

  const handleQuickFireComplete = () => {
    if (applyContent.cascades.length > 0) setSubPhase("cascades");
    else handlePhaseComplete();
  };

  const handleCascadesComplete = () => { handlePhaseComplete(); };

  const handlePhaseComplete = () => {
    setSubPhase("complete");
    completePhase(slug, "apply", 85);
    unlockNextPhase(slug, "apply");
  };

  const subPhases: ApplySubPhase[] = ["scenarios", "quickfire", "cascades"];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8" data-zone={slug}>
      <Link href={`/zones/${slug}`} className="text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block">
        &larr; Back to {zone.name}
      </Link>

      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">{zone.icon}</span>
        <div>
          <h1 className="text-lg font-extrabold text-[var(--color-text-primary)]">
            Phase 4: <span style={{ color: zone.accentColor }}>Apply</span>
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
        {subPhase === "scenarios" && (
          <motion.div key="scenarios" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ScenarioQuestions questions={applyContent.scenarios} onComplete={handleScenariosComplete} accentColor={zone.accentColor} />
          </motion.div>
        )}
        {subPhase === "quickfire" && (
          <motion.div key="quickfire" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <QuickFireRound questions={applyContent.quickFire} onComplete={handleQuickFireComplete} accentColor={zone.accentColor} />
          </motion.div>
        )}
        {subPhase === "cascades" && (
          <motion.div key="cascades" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ProceduralCascade cascades={applyContent.cascades} onComplete={handleCascadesComplete} accentColor={zone.accentColor} />
          </motion.div>
        )}
        {subPhase === "complete" && (
          <motion.div key="complete" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="text-5xl mb-4">⚡</motion.div>
            <h2 className="text-xl font-extrabold text-[var(--color-text-primary)] mb-2">Apply Phase Complete!</h2>
            <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-6">
              You can now apply rules to realistic exam scenarios for {zone.name}.<br />The Search phase is now unlocked.
            </p>
            <div className="flex gap-3 justify-center">
              <Link href={`/zones/${slug}`} className="px-5 py-2.5 rounded-xl text-sm font-bold border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] hover:bg-[var(--color-surface)] transition-colors active:border-b-2 active:translate-y-[2px]">Back to Zone</Link>
              <Link href={`/zones/${slug}/search`} className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide">Start Search Phase &rarr;</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
