import { RuleBuilderData, TableFillData } from "@study-game/engine";

// ============================================================
// Zone 5: The Sealed Chamber — Build Phase Content
// Rule Builders + Comparison Table Fill-Ins
// MPEP 120, 121, 130 — Secrecy Orders
// ============================================================

// --- RULE BUILDERS ---
// Students assemble statute text from shuffled fragments

export const ZONE5_RULE_BUILDERS: RuleBuilderData[] = [
  {
    id: "z5-rb-1",
    conceptId: "sec-imposition",
    zoneSlug: "the-sealed-chamber",
    title: "Secrecy Order Imposition",
    statuteRef: "35 USC 181",
    fragments: [
      "the publication or disclosure of",
      "the Commissioner shall order",
      "the invention to be kept secret",
      "Whenever",
      "an invention",
      "might be detrimental",
      "to the national security",
    ],
    correctOrder: [3, 0, 4, 5, 6, 1, 2],
    // "Whenever the publication or disclosure of an invention might be detrimental to the national security the Commissioner shall order the invention to be kept secret"
    completeSentence:
      "Whenever the publication or disclosure of an invention might be detrimental to the national security the Commissioner shall order the invention to be kept secret.",
  },
  {
    id: "z5-rb-2",
    conceptId: "sec-type-i",
    zoneSlug: "the-sealed-chamber",
    title: "Type I Secrecy Order — Limited Filing",
    statuteRef: "DoD Directive 5230.25",
    fragments: [
      "A Type I secrecy order",
      "permits foreign filing",
      "only in the",
      "18 countries",
      "approved by the",
      "Department of Defense",
    ],
    correctOrder: [0, 1, 2, 3, 4, 5],
    // "A Type I secrecy order permits foreign filing only in the 18 countries approved by the Department of Defense"
    completeSentence:
      "A Type I secrecy order permits foreign filing only in the 18 countries approved by the Department of Defense.",
  },
  {
    id: "z5-rb-3",
    conceptId: "sec-type-ii",
    zoneSlug: "the-sealed-chamber",
    title: "Type II Secrecy Order — No Foreign Filing",
    statuteRef: "35 USC 181",
    fragments: [
      "prohibits",
      "any foreign filing",
      "A Type II secrecy order",
      "of the application",
      "or any subject matter",
      "substantially the same",
    ],
    correctOrder: [2, 0, 1, 4, 5, 3],
    // "A Type II secrecy order prohibits any foreign filing or any subject matter substantially the same of the application"
    completeSentence:
      "A Type II secrecy order prohibits any foreign filing or any subject matter substantially the same of the application.",
  },
  {
    id: "z5-rb-4",
    conceptId: "sec-duration",
    zoneSlug: "the-sealed-chamber",
    title: "Duration and Renewal of Secrecy Orders",
    statuteRef: "35 USC 181",
    fragments: [
      "A secrecy order",
      "shall remain in effect",
      "for one year",
      "and may be renewed",
      "for additional periods",
      "during the pendency",
      "of the application",
    ],
    correctOrder: [0, 1, 2, 3, 4, 5, 6],
    // "A secrecy order shall remain in effect for one year and may be renewed for additional periods during the pendency of the application"
    completeSentence:
      "A secrecy order shall remain in effect for one year and may be renewed for additional periods during the pendency of the application.",
  },
  {
    id: "z5-rb-5",
    conceptId: "sec-related-matter",
    zoneSlug: "the-sealed-chamber",
    title: "Extension to Related Subject Matter",
    statuteRef: "37 CFR 5.3",
    fragments: [
      "extends to",
      "A secrecy order",
      "any application",
      "containing subject matter",
      "disclosed in the application",
      "that is substantially the same as",
    ],
    correctOrder: [1, 0, 2, 3, 5, 4],
    // "A secrecy order extends to any application containing subject matter that is substantially the same as disclosed in the application"
    completeSentence:
      "A secrecy order extends to any application containing subject matter that is substantially the same as disclosed in the application.",
  },
  {
    id: "z5-rb-6",
    conceptId: "sec-compensation",
    zoneSlug: "the-sealed-chamber",
    title: "Compensation for Damages",
    statuteRef: "35 USC 183",
    fragments: [
      "An applicant",
      "whose invention has been",
      "placed under a secrecy order",
      "may apply to the head",
      "of any government department",
      "for compensation",
      "for damages caused",
      "by the secrecy order",
    ],
    correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
    // "An applicant whose invention has been placed under a secrecy order may apply to the head of any government department for compensation for damages caused by the secrecy order"
    completeSentence:
      "An applicant whose invention has been placed under a secrecy order may apply to the head of any government department for compensation for damages caused by the secrecy order.",
  },
  {
    id: "z5-rb-7",
    conceptId: "sec-exam-secrecy",
    zoneSlug: "the-sealed-chamber",
    title: "Examination Under Secrecy",
    statuteRef: "MPEP 130",
    fragments: [
      "Examination of",
      "a secret application",
      "continues normally",
      "but the application",
      "shall not be published",
      "and no interference",
      "shall be declared",
    ],
    correctOrder: [0, 1, 2, 3, 4, 5, 6],
    // "Examination of a secret application continues normally but the application shall not be published and no interference shall be declared"
    completeSentence:
      "Examination of a secret application continues normally but the application shall not be published and no interference shall be declared.",
  },
];

// --- COMPARISON TABLE FILL-INS ---
// Students fill blank cells in comparison tables

export const ZONE5_TABLE_FILLS: TableFillData[] = [
  {
    id: "z5-table-1",
    conceptId: "sec-order-types",
    zoneSlug: "the-sealed-chamber",
    title: "Secrecy Order Type Comparison",
    columns: ["Feature", "Type I", "Type II", "Type III"],
    rows: [
      "Foreign filing",
      "Disclosure permitted?",
      "Typical subject matter",
      "Restriction level",
    ],
    cells: [
      ["Foreign filing", null, null, null],
      ["Disclosure permitted?", null, null, null],
      ["Typical subject matter", "NATO-shared defense tech", null, null],
      ["Restriction level", null, "High", null],
    ],
    answers: [
      { row: 0, col: 1, value: "18 approved countries only" },
      { row: 0, col: 2, value: "No foreign filing" },
      { row: 0, col: 3, value: "No foreign filing" },
      { row: 1, col: 1, value: "Limited disclosure" },
      { row: 1, col: 2, value: "No" },
      { row: 1, col: 3, value: "No disclosure of any kind" },
      { row: 2, col: 2, value: "Classified military tech" },
      { row: 2, col: 3, value: "Top-secret / nuclear" },
      { row: 3, col: 1, value: "Moderate" },
      { row: 3, col: 3, value: "Maximum" },
    ],
    answerBank: [
      "18 approved countries only",
      "No foreign filing",
      "No foreign filing",
      "Limited disclosure",
      "No",
      "No disclosure of any kind",
      "Classified military tech",
      "Top-secret / nuclear",
      "Moderate",
      "Maximum",
    ],
  },
  {
    id: "z5-table-2",
    conceptId: "sec-timeline",
    zoneSlug: "the-sealed-chamber",
    title: "Secrecy Order Timeline Milestones",
    columns: ["Event", "Timing", "Authority"],
    rows: [
      "Initial order imposed",
      "First renewal decision",
      "Subsequent renewals",
      "Rescission of order",
      "Patent issues after rescission",
    ],
    cells: [
      ["Initial order imposed", null, null],
      ["First renewal decision", null, "35 USC 181"],
      ["Subsequent renewals", null, null],
      ["Rescission of order", null, null],
      ["Patent issues after rescission", "Normal prosecution timeline", null],
    ],
    answers: [
      { row: 0, col: 1, value: "During examination" },
      { row: 0, col: 2, value: "35 USC 181" },
      { row: 1, col: 1, value: "One year from imposition" },
      { row: 2, col: 1, value: "Each additional year" },
      { row: 2, col: 2, value: "35 USC 181" },
      { row: 3, col: 1, value: "When no longer detrimental" },
      { row: 3, col: 2, value: "Imposing agency" },
      { row: 4, col: 2, value: "35 USC 181" },
    ],
    answerBank: [
      "During examination",
      "35 USC 181",
      "One year from imposition",
      "Each additional year",
      "35 USC 181",
      "When no longer detrimental",
      "Imposing agency",
      "35 USC 181",
    ],
  },
  {
    id: "z5-table-3",
    conceptId: "sec-compensation",
    zoneSlug: "the-sealed-chamber",
    title: "Compensation Requirements Under 35 USC 183",
    columns: ["Requirement", "Description", "Who Bears Burden"],
    rows: [
      "Secrecy order applied",
      "Government use",
      "Reasonable compensation",
      "Suit in Court of Federal Claims",
    ],
    cells: [
      ["Secrecy order applied", null, null],
      ["Government use", null, null],
      ["Reasonable compensation", null, "Applicant"],
      [null, "Filed if agency head denies claim", null],
    ],
    answers: [
      { row: 0, col: 1, value: "Order must be in effect on the application" },
      { row: 0, col: 2, value: "Government (imposing agency)" },
      { row: 1, col: 1, value: "Government must have used the invention" },
      { row: 1, col: 2, value: "Applicant must prove use" },
      { row: 2, col: 1, value: "Damages directly caused by the order" },
      { row: 3, col: 0, value: "Suit in Court of Federal Claims" },
      { row: 3, col: 2, value: "Applicant" },
    ],
    answerBank: [
      "Order must be in effect on the application",
      "Government (imposing agency)",
      "Government must have used the invention",
      "Applicant must prove use",
      "Damages directly caused by the order",
      "Suit in Court of Federal Claims",
      "Applicant",
    ],
  },
  {
    id: "z5-table-4",
    conceptId: "sec-markings",
    zoneSlug: "the-sealed-chamber",
    title: "Security Marking Categories",
    columns: ["Marking Level", "Handling Requirement", "Who Manages"],
    rows: [
      "Confidential",
      "Secret",
      "Top Secret",
      "Restricted Data (Atomic Energy)",
    ],
    cells: [
      ["Confidential", null, null],
      ["Secret", null, null],
      ["Top Secret", null, "Licensing & Review"],
      [null, "DOE protocols; special clearance required", null],
    ],
    answers: [
      { row: 0, col: 1, value: "Standard secure storage at USPTO" },
      { row: 0, col: 2, value: "Licensing & Review" },
      { row: 1, col: 1, value: "Restricted access; secure safe required" },
      { row: 1, col: 2, value: "Licensing & Review" },
      { row: 2, col: 1, value: "Highest security handling at USPTO" },
      { row: 3, col: 0, value: "Restricted Data (Atomic Energy)" },
      { row: 3, col: 2, value: "Licensing & Review + DOE" },
    ],
    answerBank: [
      "Standard secure storage at USPTO",
      "Licensing & Review",
      "Restricted access; secure safe required",
      "Licensing & Review",
      "Highest security handling at USPTO",
      "Restricted Data (Atomic Energy)",
      "Licensing & Review + DOE",
    ],
  },
];
