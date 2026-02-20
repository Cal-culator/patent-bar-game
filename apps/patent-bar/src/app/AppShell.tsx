"use client";

import { useRef } from "react";
import {
  StudyGameProvider,
  StatsBar,
  BottomNav,
  createGameStore,
  initScoring,
} from "@study-game/engine";
import { patentBarConfig } from "@/content/config";
import { patentBarContent } from "@/content/registry";

export function AppShell({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    initScoring(patentBarConfig);
    createGameStore(patentBarConfig, patentBarContent.zones);
    initialized.current = true;
  }

  return (
    <StudyGameProvider config={patentBarConfig} content={patentBarContent}>
      <StatsBar />
      <main className="pb-16 md:pb-0">{children}</main>
      <BottomNav />
    </StudyGameProvider>
  );
}
