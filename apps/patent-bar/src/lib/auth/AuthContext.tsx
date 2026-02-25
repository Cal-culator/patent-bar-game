"use client";

import React, { createContext, useContext, useCallback } from "react";
import { SessionProvider, useSession, signIn, signOut } from "next-auth/react";

interface AuthContextValue {
  user: { id: string; email: string; name?: string | null; image?: string | null } | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>;
  signInWithEmail: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function AuthContextInner({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const user = session?.user
    ? {
        id: session.user.id ?? "",
        email: session.user.email ?? "",
        name: session.user.name,
        image: session.user.image,
      }
    : null;

  const signUpFn = useCallback(async (email: string, password: string) => {
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        return { error: new Error(data.error || "Signup failed") };
      }
      // Auto sign-in after signup
      const result = await signIn("credentials", { email, password, redirect: false });
      if (result?.error) {
        return { error: new Error(result.error) };
      }
      return { error: null };
    } catch (e) {
      return { error: e instanceof Error ? e : new Error("Signup failed") };
    }
  }, []);

  const signInWithEmail = useCallback(async (email: string, password: string) => {
    try {
      const result = await signIn("credentials", { email, password, redirect: false });
      if (result?.error) {
        return { error: new Error("Invalid email or password") };
      }
      return { error: null };
    } catch (e) {
      return { error: e instanceof Error ? e : new Error("Sign in failed") };
    }
  }, []);

  const signOutFn = useCallback(async () => {
    await signOut({ callbackUrl: "/" });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, signUp: signUpFn, signInWithEmail, signOut: signOutFn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AuthContextInner>{children}</AuthContextInner>
    </SessionProvider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
