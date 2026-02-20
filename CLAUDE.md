# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start all apps dev servers via Turborepo
- `npm run build` — Production build all packages/apps via Turborepo
- `npm run lint` — Run ESLint across all apps via Turborepo
- To build/dev a single app: `npx turbo build --filter=patent-bar`

## Architecture

Turborepo monorepo with a shared engine package (`@study-game/engine`) and per-subject apps. The engine contains all generic game logic, UI components, and page components. Apps provide only config + content.

### Monorepo Structure

- `packages/engine/` — `@study-game/engine`: shared game engine (types, store, scoring, phase components, page components, CSS theme)
- `apps/patent-bar/` — Patent Bar exam study app (first app using the engine)

### Engine Package (`packages/engine/`)

- `src/types.ts` — All generic types (Zone, Phase, question types, ContentRegistry interface)
- `src/config.ts` — `AppConfig` interface and defaults (branding, scoring params, categories)
- `src/context.ts` + `src/provider.tsx` — React context (`StudyGameProvider`) and hooks (`useAppConfig()`, `useContent()`)
- `src/store/gameStore.ts` — Zustand store factory: `createGameStore(config, zones)`, singleton pattern with persist middleware
- `src/lib/scoring.ts` — Config-driven scoring: call `initScoring(config)` before use
- `src/lib/shuffle.ts` — Fisher-Yates shuffle utilities
- `src/components/phases/` — 14 phase components (absorb, build, recognize, apply, search, boss)
- `src/components/ui/` — StatsBar, BottomNav
- `src/pages/` — 10 pre-built page components (HomePage, ZoneHubPage, AbsorbPage, etc.)
- `src/index.ts` — Barrel exports for the public API
- `globals.css` — Theme CSS variables (Duolingo-inspired)
- Consumed as TypeScript source via Next.js `transpilePackages` (no build step)

### Patent Bar App (`apps/patent-bar/`)

- `src/content/config.ts` — `AppConfig` for patent bar (MPEP labels, examiner levels, scoring)
- `src/content/zones.ts` — 7 zone definitions
- `src/content/registry.ts` — `ContentRegistry` implementation mapping zone slugs to question data
- `src/content/questions/` — 42 question files (per zone × phase)
- `src/content/reference-text/` — 13 MPEP section text files
- `src/app/` — Thin route pages re-exporting engine page components
- `src/app/AppShell.tsx` — Client component wrapping children with `StudyGameProvider`, initializes store + scoring

### Game Flow

7 zones × 6 sequential phases: **absorb → build → recognize → apply → search → boss**. Phases unlock sequentially within a zone. All zones are currently unlocked.

### State Management

Zustand store (singleton via `createGameStore`) manages: user stats (XP, coins, streaks, level), zone/phase progress, answer history (last 500), absorb layer progress, review cards, and session streak with multiplier (1x→2x→3x→5x).

### Key Patterns

- All components use `"use client"` — fully client-side app with localStorage persistence
- Engine components read config/content from React context (no prop drilling)
- Apps re-export engine page components as default exports from thin route files
- `@/*` path alias in apps maps to `./src/*`
- Fonts: Nunito (primary) + Geist Mono
