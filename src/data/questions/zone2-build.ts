import { RuleBuilderData, TableFillData } from "@/types";

// ============================================================
// Zone 2: The Reading Room — Build Phase Content
// Rule Builders + Comparison Table Fill-Ins
// ============================================================

// --- RULE BUILDERS ---
// Students assemble statute/regulation text from shuffled fragments

export const ZONE2_RULE_BUILDERS: RuleBuilderData[] = [
  {
    id: "z2-rb-1",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    title: "Files Open to Public Inspection",
    statuteRef: "37 CFR 1.11(a)",
    fragments: [
      "and published applications",
      "are open to",
      "Patents",
      "public inspection",
      "in the USPTO",
    ],
    correctOrder: [2, 0, 1, 3, 4],
    completeSentence:
      "Patents and published applications are open to public inspection in the USPTO.",
  },
  {
    id: "z2-rb-2",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    title: "Confidentiality of Applications",
    statuteRef: "35 USC 122(a)",
    fragments: [
      "shall be kept",
      "Applications",
      "for patent",
      "in confidence",
      "by the Office",
      "unless otherwise provided",
    ],
    correctOrder: [1, 2, 0, 3, 4, 5],
    completeSentence:
      "Applications for patent shall be kept in confidence by the Office unless otherwise provided.",
  },
  {
    id: "z2-rb-3",
    conceptId: "insp-petition-access",
    zoneSlug: "the-reading-room",
    title: "Petition for Access to Abandoned Applications",
    statuteRef: "37 CFR 1.14(i)",
    fragments: [
      "may be obtained",
      "to an unpublished",
      "by petition",
      "abandoned application",
      "Access",
      "to the Director",
    ],
    correctOrder: [4, 1, 3, 0, 2, 5],
    completeSentence:
      "Access to an unpublished abandoned application may be obtained by petition to the Director.",
  },
  {
    id: "z2-rb-4",
    conceptId: "insp-incorporation",
    zoneSlug: "the-reading-room",
    title: "Incorporation by Reference",
    statuteRef: "37 CFR 1.57",
    fragments: [
      "as though",
      "Material incorporated",
      "by reference",
      "fully set forth",
      "becomes part of",
      "the application",
    ],
    correctOrder: [1, 2, 4, 5, 0, 3],
    completeSentence:
      "Material incorporated by reference becomes part of the application as though fully set forth.",
  },
  {
    id: "z2-rb-5",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    title: "Power to Inspect — Attorney of Record",
    statuteRef: "37 CFR 1.14(c)",
    fragments: [
      "and the attorney",
      "may inspect",
      "The applicant",
      "or agent of record",
      "the unpublished application",
    ],
    correctOrder: [2, 0, 3, 1, 4],
    completeSentence:
      "The applicant and the attorney or agent of record may inspect the unpublished application.",
  },
  {
    id: "z2-rb-6",
    conceptId: "insp-foia",
    zoneSlug: "the-reading-room",
    title: "FOIA Exemption for Patent Files",
    statuteRef: "35 USC 122 / 5 USC 552",
    fragments: [
      "from FOIA",
      "are largely exempt",
      "Unpublished patent",
      "disclosure requirements",
      "application files",
      "under 35 USC 122",
    ],
    correctOrder: [2, 4, 1, 0, 3, 5],
    completeSentence:
      "Unpublished patent application files are largely exempt from FOIA disclosure requirements under 35 USC 122.",
  },
  {
    id: "z2-rb-7",
    conceptId: "insp-provisional",
    zoneSlug: "the-reading-room",
    title: "Provisional Application Confidentiality",
    statuteRef: "35 USC 122",
    fragments: [
      "and are not",
      "are not published",
      "for public inspection",
      "Provisional applications",
      "available",
      "by the USPTO",
    ],
    correctOrder: [3, 1, 5, 0, 4, 2],
    completeSentence:
      "Provisional applications are not published by the USPTO and are not available for public inspection.",
  },
];

// --- COMPARISON TABLE FILL-INS ---
// Students fill blank cells in comparison tables

export const ZONE2_TABLE_FILLS: TableFillData[] = [
  {
    id: "z2-table-1",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    title: "Application Status and Public Access",
    columns: ["Application Status", "Public Access?", "Legal Basis"],
    rows: [
      "Published application",
      "Unpublished pending",
      "Granted patent",
      "Unpublished abandoned",
    ],
    cells: [
      ["Published application", null, null],
      ["Unpublished pending", null, "35 USC 122(a)"],
      ["Granted patent", null, null],
      ["Unpublished abandoned", "Petition required", null],
    ],
    answers: [
      { row: 0, col: 1, value: "Yes — open to public" },
      { row: 0, col: 2, value: "37 CFR 1.11(a)" },
      { row: 1, col: 1, value: "No — confidential" },
      { row: 2, col: 1, value: "Yes — open to public" },
      { row: 2, col: 2, value: "37 CFR 1.11(a)" },
      { row: 3, col: 2, value: "37 CFR 1.14(i)" },
    ],
    answerBank: [
      "Yes — open to public",
      "Yes — open to public",
      "No — confidential",
      "37 CFR 1.11(a)",
      "37 CFR 1.11(a)",
      "37 CFR 1.14(i)",
    ],
  },
  {
    id: "z2-table-2",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    title: "Who Can Inspect Unpublished Applications",
    columns: ["Person", "Access Level", "Requirement"],
    rows: [
      "Applicant",
      "Attorney of record",
      "Other registered attorney",
      "General public",
    ],
    cells: [
      ["Applicant", null, "None — inherent right"],
      ["Attorney of record", null, null],
      ["Other registered attorney", null, null],
      ["General public", null, "N/A"],
    ],
    answers: [
      { row: 0, col: 1, value: "Full access" },
      { row: 1, col: 1, value: "Full access" },
      { row: 1, col: 2, value: "Must be of record (37 CFR 1.14(c))" },
      { row: 2, col: 1, value: "Access with authorization" },
      { row: 2, col: 2, value: "Written authorization required" },
      { row: 3, col: 1, value: "Status info only" },
    ],
    answerBank: [
      "Full access",
      "Full access",
      "Access with authorization",
      "Status info only",
      "Must be of record (37 CFR 1.14(c))",
      "Written authorization required",
    ],
  },
  {
    id: "z2-table-3",
    conceptId: "insp-ifw",
    zoneSlug: "the-reading-room",
    title: "IFW Access Methods",
    columns: ["Access Method", "Who Can Use", "What Is Accessible"],
    rows: [
      "Patent Center (public)",
      "Patent Center (private)",
      "In-person at USPTO",
    ],
    cells: [
      ["Patent Center (public)", null, null],
      ["Patent Center (private)", null, "Full file of user's own applications"],
      [null, "Anyone visiting USPTO", null],
    ],
    answers: [
      { row: 0, col: 1, value: "Anyone" },
      { row: 0, col: 2, value: "Published apps and patents" },
      { row: 1, col: 1, value: "Applicant/attorney with account" },
      { row: 2, col: 0, value: "In-person at USPTO" },
      { row: 2, col: 2, value: "Published files and patent copies" },
    ],
    answerBank: [
      "Anyone",
      "Published apps and patents",
      "Applicant/attorney with account",
      "In-person at USPTO",
      "Published files and patent copies",
    ],
  },
  {
    id: "z2-table-4",
    conceptId: "insp-foia",
    zoneSlug: "the-reading-room",
    title: "FOIA vs. Patent-Specific Access",
    columns: ["Record Type", "Access Mechanism", "Key Statute"],
    rows: [
      "Unpublished patent apps",
      "Published patent apps",
      "USPTO admin records",
      "Examiner guidance docs",
    ],
    cells: [
      ["Unpublished patent apps", null, null],
      ["Published patent apps", null, "37 CFR 1.11"],
      ["USPTO admin records", null, null],
      [null, "FOIA request", "5 USC 552"],
    ],
    answers: [
      { row: 0, col: 1, value: "37 CFR 1.14 petition" },
      { row: 0, col: 2, value: "35 USC 122" },
      { row: 1, col: 1, value: "Patent Center / public" },
      { row: 2, col: 1, value: "FOIA request" },
      { row: 2, col: 2, value: "5 USC 552" },
      { row: 3, col: 0, value: "Examiner guidance docs" },
    ],
    answerBank: [
      "37 CFR 1.14 petition",
      "35 USC 122",
      "Patent Center / public",
      "FOIA request",
      "5 USC 552",
      "Examiner guidance docs",
    ],
  },
];
