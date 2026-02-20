"use client";

import { createContext, useContext } from "react";
import type { AppConfig } from "./config";
import type { ContentRegistry } from "./types";

export interface StudyGameContextValue {
  config: AppConfig;
  content: ContentRegistry;
}

export const StudyGameContext = createContext<StudyGameContextValue | null>(null);

export function useAppConfig(): AppConfig {
  const ctx = useContext(StudyGameContext);
  if (!ctx) throw new Error("useAppConfig must be used within StudyGameProvider");
  return ctx.config;
}

export function useContent(): ContentRegistry {
  const ctx = useContext(StudyGameContext);
  if (!ctx) throw new Error("useContent must be used within StudyGameProvider");
  return ctx.content;
}
