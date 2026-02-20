import type { ContentRegistry } from "@study-game/engine";
import { ZONES } from "./zones";

// --- Absorb (vault/reading-room/etc.) ---
import { ZONE1_RULE_LAYERS, ZONE1_ANALOGIES } from "./questions/zone1-vault";
import { ZONE2_RULE_LAYERS, ZONE2_ANALOGIES } from "./questions/zone2-reading-room";
import { ZONE3_RULE_LAYERS, ZONE3_ANALOGIES } from "./questions/zone3-gatekeepers";
import { ZONE4_RULE_LAYERS, ZONE4_ANALOGIES } from "./questions/zone4-classified-wing";
import { ZONE5_RULE_LAYERS, ZONE5_ANALOGIES } from "./questions/zone5-sealed-chamber";
import { ZONE6_RULE_LAYERS, ZONE6_ANALOGIES } from "./questions/zone6-border";
import { ZONE7_RULE_LAYERS, ZONE7_ANALOGIES } from "./questions/zone7-agencies";

// --- Build ---
import { ZONE1_RULE_BUILDERS, ZONE1_TABLE_FILLS } from "./questions/zone1-build";
import { ZONE2_RULE_BUILDERS, ZONE2_TABLE_FILLS } from "./questions/zone2-build";
import { ZONE3_RULE_BUILDERS, ZONE3_TABLE_FILLS } from "./questions/zone3-build";
import { ZONE4_RULE_BUILDERS, ZONE4_TABLE_FILLS } from "./questions/zone4-build";
import { ZONE5_RULE_BUILDERS, ZONE5_TABLE_FILLS } from "./questions/zone5-build";
import { ZONE6_RULE_BUILDERS, ZONE6_TABLE_FILLS } from "./questions/zone6-build";
import { ZONE7_RULE_BUILDERS, ZONE7_TABLE_FILLS } from "./questions/zone7-build";

// --- Recognize ---
import { ZONE1_TRAP_DETECTORS, ZONE1_SOURCE_SORTS, ZONE1_PATTERN_HIGHLIGHTS } from "./questions/zone1-recognize";
import { ZONE2_TRAP_DETECTORS, ZONE2_SOURCE_SORTS, ZONE2_PATTERN_HIGHLIGHTS } from "./questions/zone2-recognize";
import { ZONE3_TRAP_DETECTORS, ZONE3_SOURCE_SORTS, ZONE3_PATTERN_HIGHLIGHTS } from "./questions/zone3-recognize";
import { ZONE4_TRAP_DETECTORS, ZONE4_SOURCE_SORTS, ZONE4_PATTERN_HIGHLIGHTS } from "./questions/zone4-recognize";
import { ZONE5_TRAP_DETECTORS, ZONE5_SOURCE_SORTS, ZONE5_PATTERN_HIGHLIGHTS } from "./questions/zone5-recognize";
import { ZONE6_TRAP_DETECTORS, ZONE6_SOURCE_SORTS, ZONE6_PATTERN_HIGHLIGHTS } from "./questions/zone6-recognize";
import { ZONE7_TRAP_DETECTORS, ZONE7_SOURCE_SORTS, ZONE7_PATTERN_HIGHLIGHTS } from "./questions/zone7-recognize";

// --- Apply ---
import { ZONE1_SCENARIOS, ZONE1_QUICK_FIRE, ZONE1_CASCADES } from "./questions/zone1-apply";
import { ZONE2_SCENARIOS, ZONE2_QUICK_FIRE, ZONE2_CASCADES } from "./questions/zone2-apply";
import { ZONE3_SCENARIOS, ZONE3_QUICK_FIRE, ZONE3_CASCADES } from "./questions/zone3-apply";
import { ZONE4_SCENARIOS, ZONE4_QUICK_FIRE, ZONE4_CASCADES } from "./questions/zone4-apply";
import { ZONE5_SCENARIOS, ZONE5_QUICK_FIRE, ZONE5_CASCADES } from "./questions/zone5-apply";
import { ZONE6_SCENARIOS, ZONE6_QUICK_FIRE, ZONE6_CASCADES } from "./questions/zone6-apply";
import { ZONE7_SCENARIOS, ZONE7_QUICK_FIRE, ZONE7_CASCADES } from "./questions/zone7-apply";

// --- Search ---
import { ZONE1_OPEN_BOOK, ZONE1_SPEEDRUN } from "./questions/zone1-search";
import { ZONE2_OPEN_BOOK, ZONE2_SPEEDRUN } from "./questions/zone2-search";
import { ZONE3_OPEN_BOOK, ZONE3_SPEEDRUN } from "./questions/zone3-search";
import { ZONE4_OPEN_BOOK, ZONE4_SPEEDRUN } from "./questions/zone4-search";
import { ZONE5_OPEN_BOOK, ZONE5_SPEEDRUN } from "./questions/zone5-search";
import { ZONE6_OPEN_BOOK, ZONE6_SPEEDRUN } from "./questions/zone6-search";
import { ZONE7_OPEN_BOOK, ZONE7_SPEEDRUN } from "./questions/zone7-search";

// --- Reference Text ---
import { MPEP_SECTION_101 } from "./reference-text/zone1-mpep101";
import { MPEP_SECTION_102 } from "./reference-text/zone1-mpep102";
import { MPEP_SECTION_103 } from "./reference-text/zone2-mpep103";
import { MPEP_SECTION_104 } from "./reference-text/zone2-mpep104";
import { MPEP_SECTION_105 } from "./reference-text/zone3-mpep105";
import { MPEP_SECTION_106 } from "./reference-text/zone3-mpep106";
import { MPEP_SECTION_115 } from "./reference-text/zone4-mpep115";
import { MPEP_SECTION_120 } from "./reference-text/zone5-mpep120";
import { MPEP_SECTION_121 } from "./reference-text/zone5-mpep121";
import { MPEP_SECTION_130 } from "./reference-text/zone5-mpep130";
import { MPEP_SECTION_140 } from "./reference-text/zone6-mpep140";
import { MPEP_SECTION_150 } from "./reference-text/zone7-mpep150";
import { MPEP_SECTION_151 } from "./reference-text/zone7-mpep151";

// --- Boss ---
import { ZONE1_BOSS } from "./questions/zone1-boss";
import { ZONE2_BOSS } from "./questions/zone2-boss";
import { ZONE3_BOSS } from "./questions/zone3-boss";
import { ZONE4_BOSS } from "./questions/zone4-boss";
import { ZONE5_BOSS } from "./questions/zone5-boss";
import { ZONE6_BOSS } from "./questions/zone6-boss";
import { ZONE7_BOSS } from "./questions/zone7-boss";

const absorbMap: Record<string, ReturnType<ContentRegistry["getAbsorbContent"]>> = {
  "the-vault": { layers: ZONE1_RULE_LAYERS, analogies: ZONE1_ANALOGIES },
  "the-reading-room": { layers: ZONE2_RULE_LAYERS, analogies: ZONE2_ANALOGIES },
  "the-gatekeepers": { layers: ZONE3_RULE_LAYERS, analogies: ZONE3_ANALOGIES },
  "the-classified-wing": { layers: ZONE4_RULE_LAYERS, analogies: ZONE4_ANALOGIES },
  "the-sealed-chamber": { layers: ZONE5_RULE_LAYERS, analogies: ZONE5_ANALOGIES },
  "the-border": { layers: ZONE6_RULE_LAYERS, analogies: ZONE6_ANALOGIES },
  "the-agencies": { layers: ZONE7_RULE_LAYERS, analogies: ZONE7_ANALOGIES },
};

const buildMap: Record<string, ReturnType<ContentRegistry["getBuildContent"]>> = {
  "the-vault": { fragments: ZONE1_RULE_BUILDERS, tables: ZONE1_TABLE_FILLS },
  "the-reading-room": { fragments: ZONE2_RULE_BUILDERS, tables: ZONE2_TABLE_FILLS },
  "the-gatekeepers": { fragments: ZONE3_RULE_BUILDERS, tables: ZONE3_TABLE_FILLS },
  "the-classified-wing": { fragments: ZONE4_RULE_BUILDERS, tables: ZONE4_TABLE_FILLS },
  "the-sealed-chamber": { fragments: ZONE5_RULE_BUILDERS, tables: ZONE5_TABLE_FILLS },
  "the-border": { fragments: ZONE6_RULE_BUILDERS, tables: ZONE6_TABLE_FILLS },
  "the-agencies": { fragments: ZONE7_RULE_BUILDERS, tables: ZONE7_TABLE_FILLS },
};

const recognizeMap: Record<string, ReturnType<ContentRegistry["getRecognizeContent"]>> = {
  "the-vault": { traps: ZONE1_TRAP_DETECTORS, sources: ZONE1_SOURCE_SORTS, highlights: ZONE1_PATTERN_HIGHLIGHTS },
  "the-reading-room": { traps: ZONE2_TRAP_DETECTORS, sources: ZONE2_SOURCE_SORTS, highlights: ZONE2_PATTERN_HIGHLIGHTS },
  "the-gatekeepers": { traps: ZONE3_TRAP_DETECTORS, sources: ZONE3_SOURCE_SORTS, highlights: ZONE3_PATTERN_HIGHLIGHTS },
  "the-classified-wing": { traps: ZONE4_TRAP_DETECTORS, sources: ZONE4_SOURCE_SORTS, highlights: ZONE4_PATTERN_HIGHLIGHTS },
  "the-sealed-chamber": { traps: ZONE5_TRAP_DETECTORS, sources: ZONE5_SOURCE_SORTS, highlights: ZONE5_PATTERN_HIGHLIGHTS },
  "the-border": { traps: ZONE6_TRAP_DETECTORS, sources: ZONE6_SOURCE_SORTS, highlights: ZONE6_PATTERN_HIGHLIGHTS },
  "the-agencies": { traps: ZONE7_TRAP_DETECTORS, sources: ZONE7_SOURCE_SORTS, highlights: ZONE7_PATTERN_HIGHLIGHTS },
};

const applyMap: Record<string, ReturnType<ContentRegistry["getApplyContent"]>> = {
  "the-vault": { scenarios: ZONE1_SCENARIOS, quickFire: ZONE1_QUICK_FIRE, cascades: ZONE1_CASCADES },
  "the-reading-room": { scenarios: ZONE2_SCENARIOS, quickFire: ZONE2_QUICK_FIRE, cascades: ZONE2_CASCADES },
  "the-gatekeepers": { scenarios: ZONE3_SCENARIOS, quickFire: ZONE3_QUICK_FIRE, cascades: ZONE3_CASCADES },
  "the-classified-wing": { scenarios: ZONE4_SCENARIOS, quickFire: ZONE4_QUICK_FIRE, cascades: ZONE4_CASCADES },
  "the-sealed-chamber": { scenarios: ZONE5_SCENARIOS, quickFire: ZONE5_QUICK_FIRE, cascades: ZONE5_CASCADES },
  "the-border": { scenarios: ZONE6_SCENARIOS, quickFire: ZONE6_QUICK_FIRE, cascades: ZONE6_CASCADES },
  "the-agencies": { scenarios: ZONE7_SCENARIOS, quickFire: ZONE7_QUICK_FIRE, cascades: ZONE7_CASCADES },
};

const searchMap: Record<string, ReturnType<ContentRegistry["getSearchContent"]>> = {
  "the-vault": { openBook: ZONE1_OPEN_BOOK, speedrun: ZONE1_SPEEDRUN, referenceSections: [...MPEP_SECTION_101, ...MPEP_SECTION_102] },
  "the-reading-room": { openBook: ZONE2_OPEN_BOOK, speedrun: ZONE2_SPEEDRUN, referenceSections: [...MPEP_SECTION_103, ...MPEP_SECTION_104] },
  "the-gatekeepers": { openBook: ZONE3_OPEN_BOOK, speedrun: ZONE3_SPEEDRUN, referenceSections: [...MPEP_SECTION_105, ...MPEP_SECTION_106] },
  "the-classified-wing": { openBook: ZONE4_OPEN_BOOK, speedrun: ZONE4_SPEEDRUN, referenceSections: MPEP_SECTION_115 },
  "the-sealed-chamber": { openBook: ZONE5_OPEN_BOOK, speedrun: ZONE5_SPEEDRUN, referenceSections: [...MPEP_SECTION_120, ...MPEP_SECTION_121, ...MPEP_SECTION_130] },
  "the-border": { openBook: ZONE6_OPEN_BOOK, speedrun: ZONE6_SPEEDRUN, referenceSections: MPEP_SECTION_140 },
  "the-agencies": { openBook: ZONE7_OPEN_BOOK, speedrun: ZONE7_SPEEDRUN, referenceSections: [...MPEP_SECTION_150, ...MPEP_SECTION_151] },
};

const bossMap: Record<string, ReturnType<ContentRegistry["getBossContent"]>> = {
  "the-vault": { questions: ZONE1_BOSS },
  "the-reading-room": { questions: ZONE2_BOSS },
  "the-gatekeepers": { questions: ZONE3_BOSS },
  "the-classified-wing": { questions: ZONE4_BOSS },
  "the-sealed-chamber": { questions: ZONE5_BOSS },
  "the-border": { questions: ZONE6_BOSS },
  "the-agencies": { questions: ZONE7_BOSS },
};

export const patentBarContent: ContentRegistry = {
  zones: ZONES,
  getAbsorbContent: (slug) => absorbMap[slug] ?? { layers: [], analogies: [] },
  getBuildContent: (slug) => buildMap[slug] ?? { fragments: [], tables: [] },
  getRecognizeContent: (slug) => recognizeMap[slug] ?? { traps: [], sources: [], highlights: [] },
  getApplyContent: (slug) => applyMap[slug] ?? { scenarios: [], quickFire: [], cascades: [] },
  getSearchContent: (slug) => searchMap[slug] ?? { openBook: [], speedrun: [], referenceSections: [] },
  getBossContent: (slug) => bossMap[slug] ?? { questions: [] },
};
