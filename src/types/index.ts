// ============================================================
// Core Domain Types for Patent Bar Gamified Study App
// ============================================================

// --- Zones ---

export type ZoneSlug =
  | "the-vault"
  | "the-reading-room"
  | "the-gatekeepers"
  | "the-classified-wing"
  | "the-sealed-chamber"
  | "the-border"
  | "the-agencies";

export interface Zone {
  id: number;
  name: string;
  slug: ZoneSlug;
  subtitle: string;
  description: string;
  mpepSections: string[];
  order: number;
  accentColor: string;
  icon: string;
  examWeight: "Low" | "Medium" | "High" | "Very High";
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

export type SourceType = "statute" | "regulation" | "mpep_guidance";

export interface Concept {
  id: string;
  zoneId: number;
  name: string;
  parentConceptId: string | null;
  statuteRef: string; // e.g., "35 USC 184"
  ruleText: string;
  sourceType: SourceType;
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

export type TrapType =
  | "timeline_trap"
  | "one_word_trap"
  | "wrong_anchor"
  | "source_swap"
  | "scope_creep"
  | "verbatim_correct";

export interface QuestionOption {
  text: string;
  trapType?: TrapType;
  trapExplanation?: string;
}

// --- Absorb Phase Types ---

export interface RuleLayer {
  id: string;
  conceptId: string;
  zoneSlug: ZoneSlug;
  layerNumber: number;
  totalLayers: number;
  ruleText: string;
  highlightedAddition: string; // the new part added in this layer
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
  zoneSlug: ZoneSlug;
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
  position: number; // 0-100 on the timeline track
}

export interface VisualTimelineData {
  id: string;
  conceptId: string;
  zoneSlug: ZoneSlug;
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
  zoneSlug: ZoneSlug;
  title: string;
  statuteRef: string;
  fragments: string[]; // shuffled word/phrase pieces
  correctOrder: number[]; // indices into fragments for correct sentence
  completeSentence: string;
}

export interface TableFillData {
  id: string;
  conceptId: string;
  zoneSlug: ZoneSlug;
  title: string;
  columns: string[];
  rows: string[];
  cells: (string | null)[][]; // null = blank (to be filled)
  answers: { row: number; col: number; value: string }[];
  answerBank: string[]; // available answers to drag
}

// --- Recognize Phase Types ---

export interface TrapDetectorQuestion {
  id: string;
  conceptId: string;
  zoneSlug: ZoneSlug;
  stem: string;
  options: QuestionOption[];
  correctIndex: number;
  explanation: string;
  citationRef: string;
}

export interface SourceSortItem {
  id: string;
  zoneSlug: ZoneSlug;
  ruleText: string;
  correctSource: SourceType;
  explanation: string;
  specificRef: string; // e.g., "35 USC 122" or "37 CFR 5.12"
}

export interface PatternHighlightSegment {
  text: string;
  isTestable: boolean;
  explanation?: string;
}

export interface PatternHighlightExcerpt {
  id: string;
  zoneSlug: ZoneSlug;
  title: string;
  mpepRef: string;
  instruction: string;
  segments: PatternHighlightSegment[];
}

// --- Apply Phase Types ---

export interface ScenarioQuestion {
  id: string;
  conceptId: string;
  zoneSlug: ZoneSlug;
  stem: string;
  options: QuestionOption[];
  correctIndex: number;
  explanation: string;
  citationRef: string;
  difficulty: 1 | 2 | 3 | 4;
}

export interface QuickFireQuestion {
  id: string;
  zoneSlug: ZoneSlug;
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
  zoneSlug: ZoneSlug;
  title: string;
  setup: string; // initial fact pattern
  steps: CascadeStep[];
}

// --- Search Phase Types ---

export interface MPEPSection {
  id: string;           // e.g., "mpep-140-01"
  number: string;       // e.g., "140.01"
  title: string;        // e.g., "General Requirements"
  content: string;      // Full text of section
  subsections?: MPEPSection[];
}

export interface OpenBookQuestion {
  id: string;
  conceptId: string;
  zoneSlug: ZoneSlug;
  stem: string;
  options: QuestionOption[];
  correctIndex: number;
  explanation: string;
  citationRef: string;          // The MPEP section containing the answer
  targetSectionId: string;      // MPEPSection.id where answer lives
  searchHint?: string;          // Optional hint for what to search
}

export interface SpeedrunPrompt {
  id: string;
  conceptId: string;
  zoneSlug: ZoneSlug;
  prompt: string;               // Description of the rule to find
  acceptedAnswers: string[];    // e.g., ["35 USC 184", "184", "§184"]
  canonicalAnswer: string;      // The primary/best answer
  explanation: string;
  difficulty: 1 | 2 | 3;       // For time baseline scaling
}

// --- Boss Battle Types ---

export interface BossQuestion {
  id: string;
  conceptId: string;
  zoneSlug: ZoneSlug;
  questionType: "scenario" | "true_false";
  stem: string;
  // For scenario type:
  options?: QuestionOption[];
  correctIndex?: number;
  // For true_false type:
  isTrue?: boolean;
  // Common:
  explanation: string;
  citationRef: string;
  difficulty: 3 | 4;
}

// --- Scoring & Progress ---

export type LevelTitle =
  | "Examiner Intern"
  | "Junior Associate"
  | "Primary Examiner"
  | "Art Unit Lead"
  | "SPE";

export const LEVEL_THRESHOLDS: { title: LevelTitle; xp: number }[] = [
  { title: "Examiner Intern", xp: 0 },
  { title: "Junior Associate", xp: 500 },
  { title: "Primary Examiner", xp: 2000 },
  { title: "Art Unit Lead", xp: 5000 },
  { title: "SPE", xp: 10000 },
];

export interface UserStats {
  totalXp: number;
  coins: number;
  currentStreak: number;
  longestStreak: number;
  levelTitle: LevelTitle;
  lastActiveDate: string; // ISO date string
}

export interface ZoneProgress {
  zoneSlug: ZoneSlug;
  phases: PhaseProgress[];
}

export interface AnswerRecord {
  questionId: string;
  phase: Phase;
  selectedIndex: number;
  correct: boolean;
  timeMs: number;
  lifelineUsed: boolean;
  trapTagsCorrect?: number; // for trap detector
  timestamp: number;
}

// --- Spaced Repetition ---

export interface ReviewCard {
  conceptId: string;
  easeFactor: number;
  intervalDays: number;
  nextReview: string; // ISO date
  lastReviewed: string; // ISO date
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
