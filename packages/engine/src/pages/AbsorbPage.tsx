"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useContent } from "../context";
import { useGameStore } from "../store/gameStore";
import RuleLayering from "../components/phases/absorb/RuleLayering";
import AnalogyMapper from "../components/phases/absorb/AnalogyMapper";

type AbsorbSubPhase = "layers" | "analogies" | "complete";

export function AbsorbPage() {
  const params = useParams();
  const slug = params.zoneSlug as string;

  const content = useContent();
  const zone = content.zones.find((z) => z.slug === slug);

  const completePhase = useGameStore((s) => s.completePhase);
  const unlockNextPhase = useGameStore((s) => s.unlockNextPhase);

  const [subPhase, setSubPhase] = useState<AbsorbSubPhase>("layers");
  const [layerScore, setLayerScore] = useState(0);

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

  const absorbContent = content.getAbsorbContent(slug);

  if (absorbContent.layers.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <Link
          href={`/zones/${slug}`}
          className="text-base font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block"
        >
          &larr; Back to {zone.name}
        </Link>
        <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm text-center">
          <p className="text-[var(--color-text-secondary)] text-base font-semibold">
            Content for this zone is coming soon.
          </p>
        </div>
      </div>
    );
  }

  const handleLayersComplete = () => {
    if (absorbContent.analogies.length > 0) {
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
    // Score is approximate -- real scoring would accumulate during play
    completePhase(slug, "absorb", 85);
    unlockNextPhase(slug, "absorb");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8" data-zone={slug}>
      {/* Header */}
      <Link
        href={`/zones/${slug}`}
        className="text-base font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block"
      >
        &larr; Back to {zone.name}
      </Link>

      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">{zone.icon}</span>
        <div>
          <h1 className="text-2xl font-extrabold text-[var(--color-text-primary)]">
            Phase 1:{" "}
            <span style={{ color: zone.accentColor }}>Absorb</span>
          </h1>
          <p className="text-sm font-semibold text-[var(--color-text-secondary)]">
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
              layers={absorbContent.layers}
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
              analogies={absorbContent.analogies}
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
            <h2 className="text-2xl font-extrabold text-[var(--color-text-primary)] mb-2">Absorb Phase Complete!</h2>
            <p className="text-base font-semibold text-[var(--color-text-secondary)] mb-6">
              You&apos;ve learned the foundational rules for {zone.name}.
              <br />
              The Build phase is now unlocked.
            </p>
            <div className="flex gap-3 justify-center">
              <Link
                href={`/zones/${slug}`}
                className="px-6 py-3 rounded-xl text-base font-bold border border-[var(--color-border)] hover:bg-[var(--color-surface)] shadow-sm transition-all"
              >
                Back to Zone
              </Link>
              <Link
                href={`/zones/${slug}/build`}
                className="px-6 py-3 rounded-xl text-base font-bold text-white bg-[var(--color-primary)] shadow-sm hover:shadow-md transition-shadow uppercase tracking-wide"
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
