// Types
export type {
  Zone,
  Phase,
  PhaseProgress,
  Concept,
  QuestionType,
  QuestionOption,
  RuleLayer,
  AnalogyMapping,
  TimelineMilestone,
  VisualTimelineData,
  RuleBuilderData,
  TableFillData,
  TrapDetectorQuestion,
  SourceSortItem,
  PatternHighlightSegment,
  PatternHighlightExcerpt,
  ScenarioQuestion,
  QuickFireQuestion,
  CascadeStep,
  ProceduralCascadeData,
  ReferenceSection,
  OpenBookQuestion,
  SpeedrunPrompt,
  BossQuestion,
  UserStats,
  ZoneProgress,
  AnswerRecord,
  ReviewCard,
  CompetencyAxis,
  CompetencyScores,
  ContentRegistry,
} from "./types";

export { PHASE_ORDER } from "./types";

// Config
export type { AppConfig } from "./config";
export { DEFAULT_CONFIG } from "./config";

// Context
export { useAppConfig, useContent } from "./context";
export { StudyGameProvider } from "./provider";

// Store
export { createGameStore, useGameStore, resetGameStore } from "./store/gameStore";
export type { GameState } from "./store/gameStore";

// Lib
export {
  calculateXp,
  calculateCoins,
  calculateStars,
  getNextLevelXp,
  initScoring,
} from "./lib/scoring";
export {
  calculateOpenBookScore,
  calculateSpeedrunScore,
} from "./lib/search-scoring";
export { shuffle, shuffleWithCorrectIndex } from "./lib/shuffle";

// UI Components
export { default as StatsBar } from "./components/ui/StatsBar";
export { default as BottomNav } from "./components/ui/BottomNav";

// Phase Components
export { default as RuleLayering } from "./components/phases/absorb/RuleLayering";
export { default as AnalogyMapper } from "./components/phases/absorb/AnalogyMapper";
export { default as RuleBuilder } from "./components/phases/build/RuleBuilder";
export { default as TableFillIn } from "./components/phases/build/TableFillIn";
export { default as TrapDetector } from "./components/phases/recognize/TrapDetector";
export { default as SourceSorter } from "./components/phases/recognize/SourceSorter";
export { default as PatternHighlighter } from "./components/phases/recognize/PatternHighlighter";
export { default as ScenarioQuestions } from "./components/phases/apply/ScenarioQuestions";
export { default as QuickFireRound } from "./components/phases/apply/QuickFireRound";
export { default as ProceduralCascade } from "./components/phases/apply/ProceduralCascade";
export { default as OpenBookSim } from "./components/phases/search/OpenBookSim";
export { default as SpeedrunDrill } from "./components/phases/search/SpeedrunDrill";
export { default as ReferenceViewer } from "./components/phases/search/ReferenceViewer";
export { default as BossBattle } from "./components/phases/boss/BossBattle";

// Page Components
export { HomePage } from "./pages/HomePage";
export { ZoneHubPage } from "./pages/ZoneHubPage";
export { AbsorbPage } from "./pages/AbsorbPage";
export { BuildPage } from "./pages/BuildPage";
export { RecognizePage } from "./pages/RecognizePage";
export { ApplyPage } from "./pages/ApplyPage";
export { SearchPage } from "./pages/SearchPage";
export { BossPage } from "./pages/BossPage";
export { ProfilePage } from "./pages/ProfilePage";
export { ReviewPage } from "./pages/ReviewPage";
