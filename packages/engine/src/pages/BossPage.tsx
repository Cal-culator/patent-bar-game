"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContent } from "../context";
import { useGameStore } from "../store/gameStore";
import BossBattle from "../components/phases/boss/BossBattle";

export function BossPage() {
  const params = useParams();
  const slug = params.zoneSlug as string;

  const content = useContent();
  const zone = content.zones.find((z) => z.slug === slug);

  const completePhase = useGameStore((s) => s.completePhase);
  const unlockNextPhase = useGameStore((s) => s.unlockNextPhase);
  const phaseProgress = useGameStore((s) => s.getPhaseProgress);

  const [complete, setComplete] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

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

  const bossContent = content.getBossContent(slug);
  const questions = bossContent.questions;

  // Lock check: search phase must be completed
  let searchStatus: string;
  try {
    searchStatus = phaseProgress(slug, "search").status;
  } catch {
    searchStatus = "locked";
  }

  if (searchStatus !== "completed" && questions.length > 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <Link
          href={`/zones/${slug}`}
          className="text-base font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 inline-block"
        >
          &larr; Back to {zone.name}
        </Link>
        <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm text-center">
          <p className="text-3xl mb-3">🔒</p>
          <p className="text-[var(--color-text-secondary)] text-sm font-semibold">
            Complete the Search phase first to unlock Boss Battle.
          </p>
          <Link
            href={`/zones/${slug}/search`}
            className="inline-block mt-4 text-base font-bold text-[var(--color-primary)]"
          >
            Go to Search Phase &rarr;
          </Link>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
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

  const handleBossComplete = (scorePercent: number) => {
    setFinalScore(scorePercent);
    setComplete(true);
    completePhase(slug, "boss", scorePercent);
    unlockNextPhase(slug, "boss");
  };

  const stars = finalScore >= 90 ? 3 : finalScore >= 75 ? 2 : finalScore >= 60 ? 1 : 0;

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
            Phase 6:{" "}
            <span style={{ color: zone.accentColor }}>Boss Battle</span>
          </h1>
          <p className="text-sm font-semibold text-[var(--color-text-secondary)]">
            {complete ? "Zone Mastered!" : "10-question mixed exam"}
          </p>
        </div>
      </div>

      {!complete ? (
        <BossBattle
          questions={questions}
          onComplete={handleBossComplete}
          accentColor={zone.accentColor}
        />
      ) : (
        <motion.div
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
            👾
          </motion.div>
          <h2 className="text-2xl font-extrabold text-[var(--color-text-primary)] mb-2">Zone Mastered!</h2>
          <p className="text-base font-semibold text-[var(--color-text-secondary)] mb-2">
            You&apos;ve conquered {zone.name}!
          </p>
          <p className="text-3xl font-extrabold mb-1" style={{ color: zone.accentColor }}>
            {finalScore}%
          </p>
          <div className="flex justify-center gap-1 mb-6">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`text-xl ${i < stars ? "text-[var(--color-xp)]" : "text-[var(--color-text-muted)]"}`}
              >
                ★
              </span>
            ))}
          </div>
          <div className="flex gap-3 justify-center">
            <Link
              href={`/zones/${slug}`}
              className="px-6 py-3 rounded-xl text-base font-bold text-white bg-[var(--color-primary)] shadow-sm hover:shadow-md transition-shadow uppercase tracking-wide"
            >
              Back to Zone Hub
            </Link>
            <Link
              href="/"
              className="px-6 py-3 rounded-xl text-base font-bold border border-[var(--color-border)] hover:bg-[var(--color-surface)] shadow-sm transition-all"
            >
              Home
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
