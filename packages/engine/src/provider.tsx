"use client";

import React from "react";
import { StudyGameContext } from "./context";
import type { AppConfig } from "./config";
import type { ContentRegistry } from "./types";

export function StudyGameProvider({
  config,
  content,
  headerActions,
  children,
}: {
  config: AppConfig;
  content: ContentRegistry;
  headerActions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <StudyGameContext.Provider value={{ config, content, headerActions }}>
      {children}
    </StudyGameContext.Provider>
  );
}
