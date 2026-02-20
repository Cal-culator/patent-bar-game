"use client";

import React from "react";
import { StudyGameContext } from "./context";
import type { AppConfig } from "./config";
import type { ContentRegistry } from "./types";

export function StudyGameProvider({
  config,
  content,
  children,
}: {
  config: AppConfig;
  content: ContentRegistry;
  children: React.ReactNode;
}) {
  return (
    <StudyGameContext.Provider value={{ config, content }}>
      {children}
    </StudyGameContext.Provider>
  );
}
