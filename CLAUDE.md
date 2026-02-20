# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npm run lint` — Run ESLint
- `npx playwright test` — Run all E2E tests
- `npx playwright test tests/example.spec.ts` — Run a single test file

## Architecture

This is a gamified Patent Bar exam study app built with Next.js (App Router), TypeScript, Zustand, Framer Motion, and Tailwind CSS. It runs entirely client-side with localStorage persistence — no backend/API routes.

### Structure

- `src/app/` — Next.js App Router pages. Routes: `/`, `/zones/[zoneSlug]`, `/zones/[zoneSlug]/[phase]`, `/profile`, `/review`
- `src/components/phases/` — Phase-specific components organized by subdirectory (`absorb/`, `build/`, `recognize/`, `apply/`, `search/`, `boss/`)
- `src/components/ui/` — Shared UI components (`StatsBar`, `BottomNav`)
- `src/data/questions/` — Static question data per zone and phase (e.g., `zone1-recognize.ts`)
- `src/data/mpep-text/` — MPEP section text used in search phase
- `src/data/zones.ts` — Zone definitions (7 zones, each with 6 phases)
- `src/stores/gameStore.ts` — Zustand store with persist middleware (localStorage key: `"patent-bar-game-storage"`)
- `src/lib/` — Utilities: `scoring.ts` (XP/coins), `search.ts`, `shuffle.ts` (Fisher-Yates)
- `src/types/index.ts` — All TypeScript types (Zone, Phase, question types, AnswerRecord, ReviewCard)

### Game Flow

7 zones × 6 sequential phases: **absorb → build → recognize → apply → search → boss**. Phases unlock sequentially within a zone. All zones are currently unlocked.

### State Management

Zustand store (`gameStore.ts`) manages: user stats (XP, coins, streaks, level), zone/phase progress, answer history (last 500), absorb layer progress, review cards, and session streak with multiplier (1x→2x→3x→5x).

### Scoring

XP awarded per correct answer varies by phase (5–30 base), modified by speed bonus (+50% if <10s) and streak multiplier. Coins only from Build (2/correct) and Recognize (3/correct). Phase stars: 3★ ≥90%, 2★ ≥75%, 1★ ≥60%.

### Key Patterns

- All components use `"use client"` — this is a fully client-side app
- Questions are shuffled on component mount via `shuffleWithCorrectIndex()` from `src/lib/shuffle.ts`
- Path alias: `@/*` maps to `src/*`
- Fonts: Nunito (primary) + Geist Mono
