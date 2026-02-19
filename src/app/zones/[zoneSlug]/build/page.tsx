"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getZoneBySlug } from "@/data/zones";
import { useGameStore } from "@/stores/gameStore";
import RuleBuilder from "@/components/phases/build/RuleBuilder";
import TableFillIn from "@/components/phases/build/TableFillIn";
import { ZONE1_RULE_BUILDERS, ZONE1_TABLE_FILLS } from "@/data/questions/zone1-build";
import { ZONE2_RULE_BUILDERS, ZONE2_TABLE_FILLS } from "@/data/questions/zone2-build";
import { ZONE3_RULE_BUILDERS, ZONE3_TABLE_FILLS } from "@/data/questions/zone3-build";
import { ZONE4_RULE_BUILDERS, ZONE4_TABLE_FILLS } from "@/data/questions/zone4-build";
import { ZONE5_RULE_BUILDERS, ZONE5_TABLE_FILLS } from "@/data/questions/zone5-build";
import { ZONE6_RULE_BUILDERS, ZONE6_TABLE_FILLS } from "@/data/questions/zone6-build";
import { ZONE7_RULE_BUILDERS, ZONE7_TABLE_FILLS } from "@/data/questions/zone7-build";
import { ZoneSlug, RuleBuilderData, TableFillData } from "@/types";

function getBuildContent(slug: ZoneSlug): {
  builders: RuleBuilderData[];
  tables: TableFillData[];
} {
  switch (slug) {
    case "the-vault":
      return { builders: ZONE1_RULE_BUILDERS, tables: ZONE1_TABLE_FILLS };
    case "the-reading-room":
      return { builders: ZONE2_RULE_BUILDERS, tables: ZONE2_TABLE_FILLS };
    case "the-gatekeepers":
      return { builders: ZONE3_RULE_BUILDERS, tables: ZONE3_TABLE_FILLS };
    case "the-classified-wing":
      return { builders: ZONE4_RULE_BUILDERS, tables: ZONE4_TABLE_FILLS };
    case "the-sealed-chamber":
      return { builders: ZONE5_RULE_BUILDERS, tables: ZONE5_TABLE_FILLS };
    case "the-border":
      return { builders: ZONE6_RULE_BUILDERS, tables: ZONE6_TABLE_FILLS };
    case "the-agencies":
      return { builders: ZONE7_RULE_BUILDERS, tables: ZONE7_TABLE_FILLS };
    default:
      return { builders: [], tables: [] };
  }
}

type BuildSubPhase = "builders" | "tables" | "complete";

export default function BuildPage() {
  const params = useParams();
  const slug = params.zoneSlug as ZoneSlug;
  const zone = getZoneBySlug(slug);

  const completePhase = useGameStore((s) => s.completePhase);
  const unlockNextPhase = useGameStore((s) => s.unlockNextPhase);
  const phaseProgress = useGameStore((s) => s.getPhaseProgress);

  const [subPhase, setSubPhase] = useState<BuildSubPhase>("builders");

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

  const content = getBuildContent(slug);

  // Check if absorb phase is completed (build should be locked otherwise)
  let absorbStatus: string;
  try {
    absorbStatus = phaseProgress(slug, "absorb").status;
  } catch {
    absorbStatus = "locked";
  }

  if (absorbStatus !== "completed" && content.builders.length > 0) {
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
            Complete the Absorb phase first to unlock Build.
          </p>
          <Link
            href={`/zones/${slug}/absorb`}
            className="inline-block mt-4 text-sm font-bold text-[var(--color-primary)]"
          >
            Go to Absorb Phase &rarr;
          </Link>
        </div>
      </div>
    );
  }

  if (content.builders.length === 0) {
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

  const handleBuildersComplete = () => {
    if (content.tables.length > 0) {
      setSubPhase("tables");
    } else {
      handlePhaseComplete();
    }
  };

  const handleTablesComplete = () => {
    handlePhaseComplete();
  };

  const handlePhaseComplete = () => {
    setSubPhase("complete");
    completePhase(slug, "build", 85);
    unlockNextPhase(slug, "build");
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
            Phase 2:{" "}
            <span style={{ color: zone.accentColor }}>Build</span>
          </h1>
          <p className="text-xs font-semibold text-[var(--color-text-secondary)]">
            {subPhase === "builders"
              ? "Construct rules from fragments"
              : subPhase === "tables"
                ? "Fill in comparison tables"
                : "Phase complete!"}
          </p>
        </div>
      </div>

      {/* Sub-phase dots */}
      <div className="flex gap-2 mb-6">
        {["builders", "tables"].map((sp) => (
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
        {subPhase === "builders" && (
          <motion.div
            key="builders"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <RuleBuilder
              builders={content.builders}
              onComplete={handleBuildersComplete}
              accentColor={zone.accentColor}
            />
          </motion.div>
        )}

        {subPhase === "tables" && (
          <motion.div
            key="tables"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TableFillIn
              tables={content.tables}
              onComplete={handleTablesComplete}
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
              🔨
            </motion.div>
            <h2 className="text-xl font-extrabold text-[var(--color-text-primary)] mb-2">Build Phase Complete!</h2>
            <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-6">
              You can now construct the key rules for {zone.name} from memory.
              <br />
              The Recognize phase is now unlocked.
            </p>
            <div className="flex gap-3 justify-center">
              <Link
                href={`/zones/${slug}`}
                className="px-5 py-2.5 rounded-xl text-sm font-bold border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] hover:bg-[var(--color-surface)] transition-colors active:border-b-2 active:translate-y-[2px]"
              >
                Back to Zone
              </Link>
              <Link
                href={`/zones/${slug}/recognize`}
                className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[var(--color-primary)] border-2 border-b-4 border-[var(--color-primary-shadow)] border-b-[var(--color-primary-shadow)] active:border-b-2 active:translate-y-[2px] uppercase tracking-wide"
              >
                Start Recognize Phase &rarr;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
