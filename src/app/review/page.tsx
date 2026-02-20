"use client";

import Link from "next/link";

export default function ReviewPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-baloo), 'Baloo 2', system-ui, sans-serif" }}>Daily Review</h1>
      <p className="text-base text-[var(--color-text-secondary)] mb-6">
        Spaced repetition review of concepts across all completed zones.
      </p>
      <div className="bg-white rounded-2xl p-8 md:p-10 border border-[var(--color-border)] shadow-sm text-center">
        <p className="text-4xl mb-4">&#x1F4DA;</p>
        <p className="text-[var(--color-text-secondary)] text-base font-semibold">
          Complete at least one zone phase to unlock daily reviews.
        </p>
      </div>
      <Link
        href="/"
        className="text-base font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] mt-4 inline-block"
      >
        &larr; Back to zones
      </Link>
    </div>
  );
}
