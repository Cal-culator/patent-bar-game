import { RuleBuilderData, TableFillData } from "@/types";

// ============================================================
// Zone 6: The Border — Build Phase Content
// Rule Builders + Comparison Table Fill-Ins
// ============================================================

// --- RULE BUILDERS ---
// Students assemble statute text from shuffled fragments

export const ZONE6_RULE_BUILDERS: RuleBuilderData[] = [
  {
    id: "z6-rb-1",
    conceptId: "ffl-basic-rule",
    zoneSlug: "the-border",
    title: "The 6-Month Rule",
    statuteRef: "35 USC 184",
    fragments: [
      "shall not",
      "file",
      "in a foreign country",
      "An applicant",
      "within 6 months",
      "without a license",
      "from the Commissioner",
      "from the date of US filing",
    ],
    correctOrder: [3, 0, 1, 2, 5, 6, 4, 7],
    // "An applicant shall not file in a foreign country without a license from the Commissioner within 6 months from the date of US filing"
    completeSentence:
      "An applicant shall not file in a foreign country without a license from the Commissioner within 6 months from the date of US filing.",
  },
  {
    id: "z6-rb-2",
    conceptId: "ffl-penalties",
    zoneSlug: "the-border",
    title: "Patent Invalidation for Unauthorized Filing",
    statuteRef: "35 USC 185",
    fragments: [
      "shall be invalid",
      "A patent",
      "if the application",
      "was filed",
      "in a foreign country",
      "without the required",
      "foreign filing license",
    ],
    correctOrder: [1, 0, 2, 3, 4, 5, 6],
    // "A patent shall be invalid if the application was filed in a foreign country without the required foreign filing license"
    completeSentence:
      "A patent shall be invalid if the application was filed in a foreign country without the required foreign filing license.",
  },
  {
    id: "z6-rb-3",
    conceptId: "ffl-penalties",
    zoneSlug: "the-border",
    title: "Criminal Penalties",
    statuteRef: "35 USC 186",
    fragments: [
      "a fine",
      "Willful violation",
      "shall be punished by",
      "of up to $10,000",
      "or imprisonment",
      "for up to 2 years",
      "or both",
    ],
    correctOrder: [1, 2, 0, 3, 4, 5, 6],
    // "Willful violation shall be punished by a fine of up to $10,000 or imprisonment for up to 2 years or both"
    completeSentence:
      "Willful violation shall be punished by a fine of up to $10,000 or imprisonment for up to 2 years or both.",
  },
  {
    id: "z6-rb-4",
    conceptId: "ffl-basic-rule",
    zoneSlug: "the-border",
    title: "Automatic Petition via Filing",
    statuteRef: "37 CFR 5.12",
    fragments: [
      "constitutes a petition",
      "The filing of",
      "for a foreign filing license",
      "a US patent application",
      "automatically",
    ],
    correctOrder: [1, 3, 4, 0, 2],
    // "The filing of a US patent application automatically constitutes a petition for a foreign filing license"
    completeSentence:
      "The filing of a US patent application automatically constitutes a petition for a foreign filing license.",
  },
  {
    id: "z6-rb-5",
    conceptId: "ffl-license-scope",
    zoneSlug: "the-border",
    title: "Broad Scope License",
    statuteRef: "37 CFR 5.15(a)",
    fragments: [
      "without altering",
      "A broad scope license",
      "permits amendments",
      "and modifications",
      "the general nature",
      "of the invention",
    ],
    correctOrder: [1, 2, 3, 0, 4, 5],
    // "A broad scope license permits amendments and modifications without altering the general nature of the invention"
    completeSentence:
      "A broad scope license permits amendments and modifications without altering the general nature of the invention.",
  },
  {
    id: "z6-rb-6",
    conceptId: "ffl-retroactive",
    zoneSlug: "the-border",
    title: "Retroactive License Exception",
    statuteRef: "35 USC 185",
    fragments: [
      "the patent is not barred",
      "if the filing was",
      "through error",
      "and the subject matter",
      "was not restricted",
      "under 35 USC 181",
    ],
    correctOrder: [0, 1, 2, 3, 4, 5],
    // "The patent is not barred if the filing was through error and the subject matter was not restricted under 35 USC 181"
    completeSentence:
      "The patent is not barred if the filing was through error and the subject matter was not restricted under 35 USC 181.",
  },
  {
    id: "z6-rb-7",
    conceptId: "ffl-revocation",
    zoneSlug: "the-border",
    title: "Secrecy Order Override",
    statuteRef: "37 CFR 5.2",
    fragments: [
      "immediately revokes",
      "A secrecy order",
      "all prior",
      "foreign filing authorization",
      "including licenses",
      "already granted",
    ],
    correctOrder: [1, 0, 2, 3, 4, 5],
    // "A secrecy order immediately revokes all prior foreign filing authorization including licenses already granted"
    completeSentence:
      "A secrecy order immediately revokes all prior foreign filing authorization including licenses already granted.",
  },
];

// --- COMPARISON TABLE FILL-INS ---
// Students fill blank cells in comparison tables

export const ZONE6_TABLE_FILLS: TableFillData[] = [
  {
    id: "z6-table-1",
    conceptId: "ffl-license-scope",
    zoneSlug: "the-border",
    title: "License Scope Comparison",
    columns: ["Feature", "Broad Scope", "Narrow Scope"],
    rows: ["CFR Section", "Amendments allowed?", "Restriction", "Typical use"],
    cells: [
      ["CFR Section", null, null],
      ["Amendments allowed?", null, null],
      ["Restriction", null, "Only reviewed materials"],
      ["Typical use", "Most applications", null],
    ],
    answers: [
      { row: 0, col: 1, value: "37 CFR 5.15(a)" },
      { row: 0, col: 2, value: "37 CFR 5.15(b)" },
      { row: 1, col: 1, value: "Yes" },
      { row: 1, col: 2, value: "No" },
      { row: 2, col: 1, value: "Don't change general nature" },
      { row: 3, col: 2, value: "Defense-sensitive applications" },
    ],
    answerBank: [
      "37 CFR 5.15(a)",
      "37 CFR 5.15(b)",
      "Yes",
      "No",
      "Don't change general nature",
      "Defense-sensitive applications",
    ],
  },
  {
    id: "z6-table-2",
    conceptId: "ffl-penalties",
    zoneSlug: "the-border",
    title: "Penalty Statute Comparison",
    columns: ["Statute", "Violation Type", "Consequence"],
    rows: [
      "35 USC 182",
      "35 USC 185",
      "35 USC 186",
    ],
    cells: [
      ["35 USC 182", null, null],
      ["35 USC 185", null, null],
      ["35 USC 186", null, null],
    ],
    answers: [
      { row: 0, col: 1, value: "Violating a secrecy order" },
      { row: 0, col: 2, value: "Invention deemed abandoned" },
      { row: 1, col: 1, value: "Filing abroad without license" },
      { row: 1, col: 2, value: "Patent invalid/barred" },
      { row: 2, col: 1, value: "Willful violation" },
      { row: 2, col: 2, value: "$10K fine / 2 years prison" },
    ],
    answerBank: [
      "Violating a secrecy order",
      "Filing abroad without license",
      "Willful violation",
      "Invention deemed abandoned",
      "Patent invalid/barred",
      "$10K fine / 2 years prison",
    ],
  },
  {
    id: "z6-table-3",
    conceptId: "ffl-exemptions",
    zoneSlug: "the-border",
    title: "Export Regulation Exemptions",
    columns: ["Agency", "Regulation", "How USPTO Compliance Helps"],
    rows: ["Dept of State", "Dept of Commerce", "Dept of Energy"],
    cells: [
      ["Dept of State", null, null],
      ["Dept of Commerce", null, null],
      ["Dept of Energy", null, null],
    ],
    answers: [
      { row: 0, col: 1, value: "ITAR (arms & munitions)" },
      { row: 0, col: 2, value: "USPTO compliance satisfies export req" },
      { row: 1, col: 1, value: "Export Administration Regs" },
      { row: 1, col: 2, value: "Patent filings exempt from export license" },
      { row: 2, col: 1, value: "Nuclear technology regs" },
      { row: 2, col: 2, value: "Filings treated as publicly available" },
    ],
    answerBank: [
      "ITAR (arms & munitions)",
      "Export Administration Regs",
      "Nuclear technology regs",
      "USPTO compliance satisfies export req",
      "Patent filings exempt from export license",
      "Filings treated as publicly available",
    ],
  },
  {
    id: "z6-table-4",
    conceptId: "ffl-retroactive",
    zoneSlug: "the-border",
    title: "Retroactive License Requirements",
    columns: ["Requirement", "Source", "Why It Matters"],
    rows: [
      "List of countries",
      "Filing dates",
      "No secrecy order statement",
      "Diligent pursuit",
    ],
    cells: [
      ["List of countries", null, "USPTO must know scope of violation"],
      ["Filing dates", null, null],
      ["No secrecy order statement", "37 CFR 5.25", null],
      [null, "37 CFR 5.25", "Shows good faith after discovering error"],
    ],
    answers: [
      { row: 0, col: 1, value: "37 CFR 5.25" },
      { row: 1, col: 1, value: "37 CFR 5.25" },
      { row: 1, col: 2, value: "Establishes timeline of violation" },
      { row: 2, col: 2, value: "Confirms no national security breach" },
      { row: 3, col: 0, value: "Diligent pursuit" },
    ],
    answerBank: [
      "37 CFR 5.25",
      "37 CFR 5.25",
      "Establishes timeline of violation",
      "Confirms no national security breach",
      "Diligent pursuit",
    ],
  },
];
