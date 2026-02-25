"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth/AuthContext";

export function AuthButton() {
  const { user, loading, signOut } = useAuth();

  if (loading) {
    return (
      <div className="w-20 h-9 rounded-full bg-[var(--color-surface)] animate-pulse" />
    );
  }

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <Link
          href="/profile"
          className="bg-[var(--color-surface)] text-[var(--color-text-primary)] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[var(--color-border)] transition-colors"
        >
          Profile
        </Link>
        <button
          onClick={() => signOut()}
          className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/auth/login"
      className="bg-[var(--color-primary)] text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-[var(--color-primary-shadow)] hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-200"
    >
      Sign In
    </Link>
  );
}
