// ============================================================
// Core Domain Types for Study Game Engine
// ============================================================

// --- Zones ---

export interface Zone {
  id: number;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  referenceSections: string[];
  order: number;
  accentColor: string;
  icon: string;
  importance: string;
  locked: boolean;
}

// --- Phases ---

export type Phase =
  | "absorb"
  | "build"
  | "recognize"
  | "apply"
  | "search"
  | "boss";

export const PHASE_ORDER: Phase[] = [
  "absorb",
  "build",
  "recognize",
  "apply",
  "search",
  "boss",
];

export interface PhaseProgress {
  phase: Phase;
  status: "locked" | "available" | "in_progress" | "completed";
  stars: number; // 0-3
  bestScore: number; // percentage
}

// --- Concepts (Knowledge Graph) ---

export interface Concept {
  id: string;
  zoneId: number;
  name: string;
  parentConceptId: string | null;
  referenceId: string;
  ruleText: string;
  sourceType: string;
  layerOrder: number;
}

// --- Questions ---

export type QuestionType =
  // Absorb
  | "rule_layer"
  | "analogy_map"
  | "visual_timeline"
  // Build
  | "rule_builder"
  | "table_fill"
  | "flowchart"
  // Recognize
  | "trap_detector"
  | "source_sort"
  | "pattern_highlight"
  | "spot_error"
  // Apply
  | "scenario"
  | "quick_fire"
  | "procedural_cascade"
  | "matching"
  | "timeline_puzzle"
  // Search
  | "open_book"
  | "speedrun";

export interface QuestionOption {
  text: string;
  trapType?: string;
  trapExplanation?: string;
}

// --- Absorb Phase Types ---

export interface RuleLayer {
  id: string;
  conceptId: string;
  zoneSlug: string;
  layerNumber: number;
  totalLayers: number;
  ruleText: string;
  highlightedAddition: string;
  question: {
    stem: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface AnalogyMapping {
  id: string;
  conceptId: string;
  zoneSlug: string;
  analogyText: string;
  mappings: {
    analogyTerm: string;
    formalTerm: string;
  }[];
  followUp: {
    stem: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface TimelineMilestone {
  id: string;
  label: string;
  description: string;
  position: number;
}

export interface VisualTimelineData {
  id: string;
  conceptId: string;
  zoneSlug: string;
  title: string;
  description: string;
  milestones: TimelineMilestone[];
  startLabel: string;
  endLabel: string;
}

// --- Build Phase Types ---

export interface RuleBuilderData {
  id: string;
  conceptId: string;
  zoneSlug: string;
  title: string;
  statuteRef: string;
  fragments: string[];
  correctOrder: number[];
  completeSentence: string;
}

export interface TableFillData {
  id: string;
  conceptId: string;
  zoneSlug: string;
  title: string;
  columns: string[];
  rows: string[];
  cells: (string | null)[][];
  answers: { row: number; col: number; value: string }[];
  answerBank: string[];
}

// --- Recognize Phase Types ---

export interface TrapDetectorQuestion {
  id: string;
  conceptId: string;
  zoneSlug: string;
  stem: string;
  options: QuestionOption[];
  correctIndex: number;
  explanation: string;
  citationRef: string;
}

export interface SourceSortItem {
  id: string;
  zoneSlug: string;
  ruleText: string;
  correctSource: string;
  explanation: string;
  specificRef: string;
}

export interface PatternHighlightSegment {
  text: string;
  isTestable: boolean;
  explanation?: string;
}

export interface PatternHighlightExcerpt {
  id: string;
  zoneSlug: string;
  title: string;
  referenceId: string;
  instruction: string;
  segments: PatternHighlightSegment[];
}

// --- Apply Phase Types ---

export interface ScenarioQuestion {
  id: string;
  conceptId: string;
  zoneSlug: string;
  stem: string;
  options: QuestionOption[];
  correctIndex: number;
  explanation: string;
  citationRef: string;
  difficulty: 1 | 2 | 3 | 4;
}

export interface QuickFireQuestion {
  id: string;
  zoneSlug: string;
  statement: string;
  isTrue: boolean;
  explanation: string;
  citationRef: string;
}

export interface CascadeStep {
  stem: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ProceduralCascadeData {
  id: string;
  conceptId: string;
  zoneSlug: string;
  title: string;
  setup: string;
  steps: CascadeStep[];
}

// --- Search Phase Types ---

export interface ReferenceSection {
  id: string;
  number: string;
  title: string;
  content: string;
  subsections?: ReferenceSection[];
}

export interface OpenBookQuestion {
  id: string;
  conceptId: string;
  zoneSlug: string;
  stem: string;
  options: QuestionOption[];
  correctIndex: number;
  explanation: string;
  citationRef: string;
  targetSectionId: string;
  searchHint?: string;
}

export interface SpeedrunPrompt {
  id: string;
  conceptId: string;
  zoneSlug: string;
  prompt: string;
  acceptedAnswers: string[];
  canonicalAnswer: string;
  explanation: string;
  difficulty: 1 | 2 | 3;
}

// --- Boss Battle Types ---

export interface BossQuestion {
  id: string;
  conceptId: string;
  zoneSlug: string;
  questionType: "scenario" | "true_false";
  stem: string;
  options?: QuestionOption[];
  correctIndex?: number;
  isTrue?: boolean;
  explanation: string;
  citationRef: string;
  difficulty: 3 | 4;
}

// --- Scoring & Progress ---

export interface UserStats {
  totalXp: number;
  coins: number;
  currentStreak: number;
  longestStreak: number;
  levelTitle: string;
  lastActiveDate: string;
}

export interface ZoneProgress {
  zoneSlug: string;
  phases: PhaseProgress[];
}

export interface AnswerRecord {
  questionId: string;
  phase: Phase;
  selectedIndex: number;
  correct: boolean;
  timeMs: number;
  lifelineUsed: boolean;
  trapTagsCorrect?: number;
  timestamp: number;
}

// --- Spaced Repetition ---

export interface ReviewCard {
  conceptId: string;
  easeFactor: number;
  intervalDays: number;
  nextReview: string;
  lastReviewed: string;
  weakPhase: Phase | null;
}

// --- Competency ---

export type CompetencyAxis =
  | "search_speed"
  | "trap_avoidance"
  | "citation_precision"
  | "timeline_accuracy"
  | "source_classification"
  | "scenario_reasoning";

export type CompetencyScores = Record<CompetencyAxis, number>;

// --- Content Registry ---

export interface ContentRegistry {
  zones: Zone[];
  getAbsorbContent: (slug: string) => { layers: RuleLayer[]; analogies: AnalogyMapping[] };
  getBuildContent: (slug: string) => { fragments: RuleBuilderData[]; tables: TableFillData[] };
  getRecognizeContent: (slug: string) => { traps: TrapDetectorQuestion[]; sources: SourceSortItem[]; highlights: PatternHighlightExcerpt[] };
  getApplyContent: (slug: string) => { scenarios: ScenarioQuestion[]; quickFire: QuickFireQuestion[]; cascades: ProceduralCascadeData[] };
  getSearchContent: (slug: string) => { openBook: OpenBookQuestion[]; speedrun: SpeedrunPrompt[]; referenceSections: ReferenceSection[] };
  getBossContent: (slug: string) => { questions: BossQuestion[] };
}
