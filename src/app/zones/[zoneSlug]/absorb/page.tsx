"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getZoneBySlug } from "@/data/zones";
import { useGameStore } from "@/stores/gameStore";
import RuleLayering from "@/components/phases/absorb/RuleLayering";
import AnalogyMapper from "@/components/phases/absorb/AnalogyMapper";
import { ZONE1_RULE_LAYERS, ZONE1_ANALOGIES } from "@/data/questions/zone1-vault";
import { ZONE2_RULE_LAYERS, ZONE2_ANALOGIES } from "@/data/questions/zone2-reading-room";
import { ZONE3_RULE_LAYERS, ZONE3_ANALOGIES } from "@/data/questions/zone3-gatekeepers";
import { ZONE4_RULE_LAYERS, ZONE4_ANALOGIES } from "@/data/questions/zone4-classified-wing";
import { ZONE5_RULE_LAYERS, ZONE5_ANALOGIES } from "@/data/questions/zone5-sealed-chamber";
import { ZONE6_RULE_LAYERS, ZONE6_ANALOGIES } from "@/data/questions/zone6-border";
import { ZONE7_RULE_LAYERS, ZONE7_ANALOGIES } from "@/data/questions/zone7-agencies";
import { ZoneSlug, RuleLayer, AnalogyMapping } from "@/types";
import Link from "next/link";

// Content registry — extend as more zones are built
function getAbsorbContent(slug: ZoneSlug): {
  layers: RuleLayer[];
  analogies: AnalogyMapping[];
} {
  switch (slug) {
    case "the-vault":
      return { layers: ZONE1_RULE_LAYERS, analogies: ZONE1_ANALOGIES };
    case "the-reading-room":
      return { layers: ZONE2_RULE_LAYERS, analogies: ZONE2_ANALOGIES };
    case "the-gatekeepers":
      return { layers: ZONE3_RULE_LAYERS, analogies: ZONE3_ANALOGIES };
    case "the-classified-wing":
      return { layers: ZONE4_RULE_LAYERS, analogies: ZONE4_ANALOGIES };
    case "the-sealed-chamber":
      return { layers: ZONE5_RULE_LAYERS, analogies: ZONE5_ANALOGIES };
    case "the-border":
      return { layers: ZONE6_RULE_LAYERS, analogies: ZONE6_ANALOGIES };
    case "the-agencies":
      return { layers: ZONE7_RULE_LAYERS, analogies: ZONE7_ANALOGIES };
    default:
      return { layers: [], analogies: [] };
  }
}

type AbsorbSubPhase = "layers" | "analogies" | "complete";

export default function AbsorbPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.zoneSlug as ZoneSlug;
  const zone = getZoneBySlug(slug);

  const completePhase = useGameStore((s) => s.completePhase);
  const unlockNextPhase = useGameStore((s) => s.unlockNextPhase);

  const [subPhase, setSubPhase] = useState<AbsorbSubPhase>("layers");
  const [layerScore, setLayerScore] = useState(0);

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

  const content = getAbsorbContent(slug);

  if (content.layers.length === 0) {
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

  const handleLayersComplete = () => {
    if (content.analogies.length > 0) {
      setSubPhase("analogies");
    } else {
      handlePhaseComplete();
    }
  };

  const handleAnalogiesComplete = () => {
    handlePhaseComplete();
  };

  const handlePhaseComplete = () => {
    setSubPhase("complete");
    // Score is approximate — real scoring would accumulate during play
    completePhase(slug, "absorb", 85);
    unlockNextPhase(slug, "absorb");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8" data-zone={slug}>
      {/* Header */}
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
            Phase 1:{" "}
            <span style={{ color: zone.accentColor }}>Absorb</span>
          </h1>
          <p className="text-xs font-semibold text-[var(--color-text-secondary)]">
            {subPhase === "layers"
              ? "Learn the rules layer by layer"
              : subPhase === "analogies"
                ? "Map analogies to formal rules"
                : "Phase complete!"}
          </p>
        </div>
      </div>

      {/* Sub-phase navigation dots */}
      <div className="flex gap-2 mb-6">
        {["layers", "analogies"].map((sp) => (
          <div
            key={sp}
            className="h-3 flex-1 rounded-full transition-colors"
            style={{
              backgroundColor:
                sp === subPhase
                  ? "var(--color-primary)"
                  : subPhase === "complete"
                    ? "var(--color-primary)"
                    : "var(--color-border)",
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {subPhase === "layers" && (
          <motion.div
            key="layers"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <RuleLayering
              layers={content.layers}
              onComplete={handleLayersComplete}
              accentColor={zone.accentColor}
            />
          </motion.div>
        )}

        {subPhase === "analogies" && (
          <motion.div
            key="analogies"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AnalogyMapper
              analogies={content.analogies}
              onComplete={handleAnalogiesComplete}
              accentColor={zone.accentColor}
            />
          </motion.div>
        )}

        {subPhase === "complete" && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="text-5xl mb-4"
            >
              &#x2705;
            </motion.div>
            <h2 className="text-xl font-extrabold text-[var(--color-text-primary)] mb-2">Absorb Phase Complete!</h2>
            <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-6">
              You&apos;ve learned the foundational rules for {zone.name}.
              <br />
              The Build phase is now unlocked.
            </p>
            <div className="flex gap-3 justify-center">
              <Link
                href={`/zones/${slug}`}
                className="px-5 py-2.5 rounded-xl text-sm font-bold border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] hover:bg-[var(--color-surface)] transition-colors active:border-b-2 active:translate-y-[2px]"
              >
                Back to Zone
              </Link>
              <Link
                href={`/zones/${slug}/build`}
                className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide"
              >
                Start Build Phase &rarr;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
