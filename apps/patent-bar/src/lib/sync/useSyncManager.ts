"use client";

import { useEffect, useRef, useCallback } from "react";
import { useGameStore, getGameState, subscribeGameStore } from "@study-game/engine";
import { useAuth } from "../auth/AuthContext";

export function useSyncManager() {
  const { user } = useAuth();
  const pendingSave = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastAnswerCount = useRef(0);
  const isSaving = useRef(false);
  const hasMigrated = useRef(false);

  const hydrateFromExternal = useGameStore((s) => s.hydrateFromExternal);

  // ---- Save current state to DB via API ----
  const flushToDb = useCallback(async () => {
    if (!user || isSaving.current) return;
    isSaving.current = true;

    try {
      const state = getGameState();

      await fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stats: state.stats,
          zoneProgress: state.zoneProgress,
          absorbProgress: state.absorbProgress,
          reviewCards: state.reviewCards,
          newAnswers: state.answerHistory.slice(lastAnswerCount.current),
        }),
      });

      lastAnswerCount.current = state.answerHistory.length;
    } finally {
      isSaving.current = false;
    }
  }, [user]);

  // ---- Debounced save ----
  const scheduleSave = useCallback(() => {
    if (pendingSave.current) clearTimeout(pendingSave.current);
    pendingSave.current = setTimeout(() => {
      flushToDb();
    }, 2000);
  }, [flushToDb]);

  // ---- On login: load from DB or migrate localStorage ----
  useEffect(() => {
    if (!user || hasMigrated.current) return;

    (async () => {
      const res = await fetch("/api/sync");
      if (!res.ok) return;
      const data = await res.json();

      if (data.hasData) {
        hydrateFromExternal(data.state);
        lastAnswerCount.current = data.answerCount ?? 0;
      } else {
        // First login — migrate current localStorage state to DB
        await flushToDb();
      }
      hasMigrated.current = true;
    })();
  }, [user, hydrateFromExternal, flushToDb]);

  // ---- Subscribe to store changes → debounced DB save ----
  useEffect(() => {
    if (!user) return;

    const unsub = subscribeGameStore(() => {
      scheduleSave();
    });

    return () => unsub();
  }, [user, scheduleSave]);

  // ---- Tab focus → refresh from DB ----
  useEffect(() => {
    if (!user) return;

    const handleFocus = async () => {
      const res = await fetch("/api/sync");
      if (!res.ok) return;
      const data = await res.json();
      if (data.hasData) {
        hydrateFromExternal(data.state);
      }
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [user, hydrateFromExternal]);

  // ---- beforeunload → flush via sendBeacon ----
  useEffect(() => {
    if (!user) return;

    const handleUnload = () => {
      if (pendingSave.current) clearTimeout(pendingSave.current);

      const state = getGameState();
      const payload = JSON.stringify({
        stats: state.stats,
        zoneProgress: state.zoneProgress,
        absorbProgress: state.absorbProgress,
        reviewCards: state.reviewCards,
      });

      navigator.sendBeacon("/api/sync", payload);
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [user]);
}
