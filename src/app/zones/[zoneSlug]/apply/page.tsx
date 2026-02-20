"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getZoneBySlug } from "@/data/zones";
import { useGameStore } from "@/stores/gameStore";
import ScenarioQuestions from "@/components/phases/apply/ScenarioQuestions";
import QuickFireRound from "@/components/phases/apply/QuickFireRound";
import ProceduralCascade from "@/components/phases/apply/ProceduralCascade";
import MatchingGame from "@/components/phases/apply/MatchingGame";
import TimelinePuzzle from "@/components/phases/apply/TimelinePuzzle";
import { ZONE1_SCENARIOS, ZONE1_QUICK_FIRE, ZONE1_CASCADES, ZONE1_MATCHING, ZONE1_TIMELINES } from "@/data/questions/zone1-apply";
import { ZONE2_SCENARIOS, ZONE2_QUICK_FIRE, ZONE2_CASCADES, ZONE2_MATCHING, ZONE2_TIMELINES } from "@/data/questions/zone2-apply";
import { ZONE3_SCENARIOS, ZONE3_QUICK_FIRE, ZONE3_CASCADES, ZONE3_MATCHING, ZONE3_TIMELINES } from "@/data/questions/zone3-apply";
import { ZONE4_SCENARIOS, ZONE4_QUICK_FIRE, ZONE4_CASCADES, ZONE4_MATCHING, ZONE4_TIMELINES } from "@/data/questions/zone4-apply";
import { ZONE5_SCENARIOS, ZONE5_QUICK_FIRE, ZONE5_CASCADES, ZONE5_MATCHING, ZONE5_TIMELINES } from "@/data/questions/zone5-apply";
import {
  ZONE6_SCENARIOS,
  ZONE6_QUICK_FIRE,
  ZONE6_CASCADES,
  ZONE6_MATCHING,
  ZONE6_TIMELINES,
} from "@/data/questions/zone6-apply";
import { ZONE7_SCENARIOS, ZONE7_QUICK_FIRE, ZONE7_CASCADES, ZONE7_MATCHING, ZONE7_TIMELINES } from "@/data/questions/zone7-apply";
import {
  ZoneSlug,
  ScenarioQuestion,
  QuickFireQuestion,
  ProceduralCascadeData,
  MatchingGameData,
  TimelinePuzzleData,
} from "@/types";

function getApplyContent(slug: ZoneSlug): {
  scenarios: ScenarioQuestion[];
  quickfire: QuickFireQuestion[];
  cascades: ProceduralCascadeData[];
  matching: MatchingGameData[];
  timelines: TimelinePuzzleData[];
} {
  switch (slug) {
    case "the-vault":
      return { scenarios: ZONE1_SCENARIOS, quickfire: ZONE1_QUICK_FIRE, cascades: ZONE1_CASCADES, matching: ZONE1_MATCHING, timelines: ZONE1_TIMELINES };
    case "the-reading-room":
      return { scenarios: ZONE2_SCENARIOS, quickfire: ZONE2_QUICK_FIRE, cascades: ZONE2_CASCADES, matching: ZONE2_MATCHING, timelines: ZONE2_TIMELINES };
    case "the-gatekeepers":
      return { scenarios: ZONE3_SCENARIOS, quickfire: ZONE3_QUICK_FIRE, cascades: ZONE3_CASCADES, matching: ZONE3_MATCHING, timelines: ZONE3_TIMELINES };
    case "the-classified-wing":
      return { scenarios: ZONE4_SCENARIOS, quickfire: ZONE4_QUICK_FIRE, cascades: ZONE4_CASCADES, matching: ZONE4_MATCHING, timelines: ZONE4_TIMELINES };
    case "the-sealed-chamber":
      return { scenarios: ZONE5_SCENARIOS, quickfire: ZONE5_QUICK_FIRE, cascades: ZONE5_CASCADES, matching: ZONE5_MATCHING, timelines: ZONE5_TIMELINES };
    case "the-border":
      return {
        scenarios: ZONE6_SCENARIOS,
        quickfire: ZONE6_QUICK_FIRE,
        cascades: ZONE6_CASCADES,
        matching: ZONE6_MATCHING,
        timelines: ZONE6_TIMELINES,
      };
    case "the-agencies":
      return { scenarios: ZONE7_SCENARIOS, quickfire: ZONE7_QUICK_FIRE, cascades: ZONE7_CASCADES, matching: ZONE7_MATCHING, timelines: ZONE7_TIMELINES };
    default:
      return { scenarios: [], quickfire: [], cascades: [], matching: [], timelines: [] };
  }
}

type ApplySubPhase = "scenarios" | "quickfire" | "cascades" | "matching" | "timelines" | "complete";

const SUB_PHASE_LABELS: Record<ApplySubPhase, string> = {
  scenarios: "Solve exam-style scenarios",
  quickfire: "Rapid true/false recall",
  cascades: "Walk through multi-step procedures",
  matching: "Match terms to definitions",
  timelines: "Arrange events in order",
  complete: "Phase complete!",
};

export default function ApplyPage() {
  const params = useParams();
  const slug = params.zoneSlug as ZoneSlug;
  const zone = getZoneBySlug(slug);

  const completePhase = useGameStore((s) => s.completePhase);
  const unlockNextPhase = useGameStore((s) => s.unlockNextPhase);
  const phaseProgress = useGameStore((s) => s.getPhaseProgress);

  const [subPhase, setSubPhase] = useState<ApplySubPhase>("scenarios");

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

  const content = getApplyContent(slug);

  let recognizeStatus: string;
  try {
    recognizeStatus = phaseProgress(slug, "recognize").status;
  } catch {
    recognizeStatus = "locked";
  }

  if (recognizeStatus !== "completed" && content.scenarios.length > 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <Link href={`/zones/${slug}`} className="text-base font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block">
          &larr; Back to {zone.name}
        </Link>
        <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm text-center">
          <p className="text-3xl mb-3">🔒</p>
          <p className="text-[var(--color-text-secondary)] text-base font-semibold">
            Complete the Recognize phase first to unlock Apply.
          </p>
          <Link href={`/zones/${slug}/recognize`} className="inline-block mt-4 text-base font-bold text-[var(--color-primary)]">
            Go to Recognize Phase &rarr;
          </Link>
        </div>
      </div>
    );
  }

  if (content.scenarios.length === 0) {
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

  const handleScenariosComplete = () => {
    if (content.quickfire.length > 0) setSubPhase("quickfire");
    else if (content.cascades.length > 0) setSubPhase("cascades");
    else if (content.matching.length > 0) setSubPhase("matching");
    else if (content.timelines.length > 0) setSubPhase("timelines");
    else handlePhaseComplete();
  };

  const handleQuickFireComplete = () => {
    if (content.cascades.length > 0) setSubPhase("cascades");
    else if (content.matching.length > 0) setSubPhase("matching");
    else if (content.timelines.length > 0) setSubPhase("timelines");
    else handlePhaseComplete();
  };

  const handleCascadesComplete = () => {
    if (content.matching.length > 0) setSubPhase("matching");
    else if (content.timelines.length > 0) setSubPhase("timelines");
    else handlePhaseComplete();
  };

  const handleMatchingComplete = () => {
    if (content.timelines.length > 0) setSubPhase("timelines");
    else handlePhaseComplete();
  };

  const handleTimelinesComplete = () => { handlePhaseComplete(); };

  const handlePhaseComplete = () => {
    setSubPhase("complete");
    completePhase(slug, "apply", 85);
    unlockNextPhase(slug, "apply");
  };

  const subPhases: ApplySubPhase[] = ["scenarios", "quickfire", "cascades", "matching", "timelines"];

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8" data-zone={slug}>
      <Link href={`/zones/${slug}`} className="text-base font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block">
        &larr; Back to {zone.name}
      </Link>

      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">{zone.icon}</span>
        <div>
          <h1 className="text-2xl font-extrabold text-[var(--color-text-primary)]">
            Phase 4: <span style={{ color: zone.accentColor }}>Apply</span>
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
        {subPhase === "scenarios" && (
          <motion.div key="scenarios" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ScenarioQuestions questions={content.scenarios} onComplete={handleScenariosComplete} accentColor={zone.accentColor} />
          </motion.div>
        )}
        {subPhase === "quickfire" && (
          <motion.div key="quickfire" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <QuickFireRound questions={content.quickfire} onComplete={handleQuickFireComplete} accentColor={zone.accentColor} />
          </motion.div>
        )}
        {subPhase === "cascades" && (
          <motion.div key="cascades" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ProceduralCascade cascades={content.cascades} onComplete={handleCascadesComplete} accentColor={zone.accentColor} />
          </motion.div>
        )}
        {subPhase === "matching" && (
          <motion.div key="matching" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MatchingGame items={content.matching} onComplete={handleMatchingComplete} accentColor={zone.accentColor} />
          </motion.div>
        )}
        {subPhase === "timelines" && (
          <motion.div key="timelines" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <TimelinePuzzle items={content.timelines} onComplete={handleTimelinesComplete} accentColor={zone.accentColor} />
          </motion.div>
        )}
        {subPhase === "complete" && (
          <motion.div key="complete" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="text-5xl mb-4">⚡</motion.div>
            <h2 className="text-2xl font-extrabold text-[var(--color-text-primary)] mb-2">Apply Phase Complete!</h2>
            <p className="text-base font-semibold text-[var(--color-text-secondary)] mb-6">
              You can now apply rules to realistic exam scenarios for {zone.name}.<br />The Search phase is now unlocked.
            </p>
            <div className="flex gap-3 justify-center">
              <Link href={`/zones/${slug}`} className="px-6 py-3 rounded-xl text-base font-bold border border-[var(--color-border)] hover:bg-[var(--color-surface)] shadow-sm transition-all">Back to Zone</Link>
              <Link href={`/zones/${slug}/search`} className="px-6 py-3 rounded-xl text-base font-bold text-white bg-[var(--color-primary)] shadow-sm hover:shadow-md transition-shadow uppercase tracking-wide">Start Search Phase &rarr;</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
