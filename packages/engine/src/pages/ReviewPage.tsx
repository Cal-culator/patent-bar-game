"use client";

import Link from "next/link";

export function ReviewPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-xl font-extrabold text-[var(--color-text-primary)] mb-2">Daily Review</h1>
      <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-6">
        Spaced repetition review of concepts across all completed zones.
      </p>
      <div className="bg-white rounded-2xl p-8 border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] text-center">
        <p className="text-3xl mb-3">&#x1F4DA;</p>
        <p className="text-[var(--color-text-secondary)] text-sm font-semibold">
          Complete at least one zone phase to unlock daily reviews.
        </p>
      </div>
      <Link
        href="/"
        className="text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] mt-4 inline-block"
      >
        &larr; Back to zones
      </Link>
    </div>
  );
}
