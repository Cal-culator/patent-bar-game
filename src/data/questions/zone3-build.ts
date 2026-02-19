import { RuleBuilderData, TableFillData } from "@/types";

// ============================================================
// Zone 3: The Gatekeepers — Build Phase Content
// Rule Builders + Comparison Table Fill-Ins
// ============================================================

// --- RULE BUILDERS ---
// Students assemble statute text from shuffled fragments

export const ZONE3_RULE_BUILDERS: RuleBuilderData[] = [
  {
    id: "z3-rb-1",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    title: "Communication Ban with Suspended Practitioners",
    statuteRef: "37 CFR 11.116",
    fragments: [
      "about pending",
      "USPTO employees",
      "patent applications",
      "shall not communicate",
      "with suspended or excluded",
      "practitioners",
    ],
    correctOrder: [1, 3, 0, 2, 4, 5],
    // "USPTO employees shall not communicate about pending patent applications with suspended or excluded practitioners"
    completeSentence:
      "USPTO employees shall not communicate about pending patent applications with suspended or excluded practitioners.",
  },
  {
    id: "z3-rb-2",
    conceptId: "gate-exception",
    zoneSlug: "the-gatekeepers",
    title: "Pro Se Exception for Suspended Practitioners",
    statuteRef: "MPEP 105",
    fragments: [
      "A suspended practitioner",
      "who is the actual",
      "inventor or applicant",
      "may file and prosecute",
      "their own application",
      "pro se",
    ],
    correctOrder: [0, 1, 2, 3, 4, 5],
    // "A suspended practitioner who is the actual inventor or applicant may file and prosecute their own application pro se"
    completeSentence:
      "A suspended practitioner who is the actual inventor or applicant may file and prosecute their own application pro se.",
  },
  {
    id: "z3-rb-3",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    title: "Assignee Right to Take Action",
    statuteRef: "37 CFR 3.71",
    fragments: [
      "may take action",
      "An assignee of",
      "the entire right,",
      "title, and interest",
      "in a patent application",
    ],
    correctOrder: [1, 2, 3, 4, 0],
    // "An assignee of the entire right, title, and interest in a patent application may take action"
    completeSentence:
      "An assignee of the entire right, title, and interest in a patent application may take action.",
  },
  {
    id: "z3-rb-4",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    title: "Establishing Assignee Entitlement",
    statuteRef: "37 CFR 3.73(c)",
    fragments: [
      "The assignee must file",
      "a statement",
      "setting forth the basis",
      "for entitlement",
      "supported by documentary evidence",
      "of the chain of title",
    ],
    correctOrder: [0, 1, 2, 3, 4, 5],
    // "The assignee must file a statement setting forth the basis for entitlement supported by documentary evidence of the chain of title"
    completeSentence:
      "The assignee must file a statement setting forth the basis for entitlement supported by documentary evidence of the chain of title.",
  },
  {
    id: "z3-rb-5",
    conceptId: "gate-partial-interest",
    zoneSlug: "the-gatekeepers",
    title: "Partial Assignee Limitation",
    statuteRef: "37 CFR 3.71",
    fragments: [
      "may inspect the file",
      "A partial assignee",
      "but may not",
      "direct prosecution",
      "or amend claims",
    ],
    correctOrder: [1, 0, 2, 3, 4],
    // "A partial assignee may inspect the file but may not direct prosecution or amend claims"
    completeSentence:
      "A partial assignee may inspect the file but may not direct prosecution or amend claims.",
  },
  {
    id: "z3-rb-6",
    conceptId: "gate-written-consent",
    zoneSlug: "the-gatekeepers",
    title: "Third-Party Access Requirement",
    statuteRef: "MPEP 106",
    fragments: [
      "Written authorization",
      "from the applicant",
      "or assignee",
      "is required",
      "for third-party access",
      "to unpublished applications",
    ],
    correctOrder: [0, 1, 2, 3, 4, 5],
    // "Written authorization from the applicant or assignee is required for third-party access to unpublished applications"
    completeSentence:
      "Written authorization from the applicant or assignee is required for third-party access to unpublished applications.",
  },
  {
    id: "z3-rb-7",
    conceptId: "gate-oed-role",
    zoneSlug: "the-gatekeepers",
    title: "OED Disciplinary Authority",
    statuteRef: "37 CFR 11.116",
    fragments: [
      "The OED is responsible for",
      "the registration,",
      "investigation,",
      "and discipline",
      "of patent practitioners",
      "before the USPTO",
    ],
    correctOrder: [0, 1, 2, 3, 4, 5],
    // "The OED is responsible for the registration, investigation, and discipline of patent practitioners before the USPTO"
    completeSentence:
      "The OED is responsible for the registration, investigation, and discipline of patent practitioners before the USPTO.",
  },
];

// --- COMPARISON TABLE FILL-INS ---
// Students fill blank cells in comparison tables

export const ZONE3_TABLE_FILLS: TableFillData[] = [
  {
    id: "z3-table-1",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    title: "Full Assignee vs. Partial Assignee Rights",
    columns: ["Right", "Full Assignee", "Partial Assignee"],
    rows: [
      "Direct prosecution",
      "Inspect application file",
      "Revoke power of attorney",
      "Amend claims",
    ],
    cells: [
      ["Direct prosecution", null, null],
      ["Inspect application file", null, null],
      ["Revoke power of attorney", null, "No"],
      ["Amend claims", "Yes", null],
    ],
    answers: [
      { row: 0, col: 1, value: "Yes" },
      { row: 0, col: 2, value: "No" },
      { row: 1, col: 1, value: "Yes" },
      { row: 1, col: 2, value: "Yes" },
      { row: 2, col: 1, value: "Yes" },
      { row: 3, col: 2, value: "No" },
    ],
    answerBank: [
      "Yes",
      "Yes",
      "Yes",
      "Yes",
      "No",
      "No",
    ],
  },
  {
    id: "z3-table-2",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    title: "Suspended Practitioner vs. Registered Practitioner",
    columns: ["Activity", "Registered Practitioner", "Suspended Practitioner"],
    rows: [
      "File applications for clients",
      "Communicate with USPTO about pending apps",
      "File own application as inventor (pro se)",
      "Represent others at USPTO",
    ],
    cells: [
      ["File applications for clients", null, null],
      ["Communicate with USPTO about pending apps", null, null],
      ["File own application as inventor (pro se)", "Yes", null],
      ["Represent others at USPTO", null, "No"],
    ],
    answers: [
      { row: 0, col: 1, value: "Yes" },
      { row: 0, col: 2, value: "No" },
      { row: 1, col: 1, value: "Yes" },
      { row: 1, col: 2, value: "No" },
      { row: 2, col: 2, value: "Yes" },
      { row: 3, col: 1, value: "Yes" },
    ],
    answerBank: [
      "Yes",
      "Yes",
      "Yes",
      "Yes",
      "No",
      "No",
    ],
  },
  {
    id: "z3-table-3",
    conceptId: "gate-oed-role",
    zoneSlug: "the-gatekeepers",
    title: "OED Disciplinary Sanctions",
    columns: ["Sanction", "Severity Level", "Effect on Practice"],
    rows: [
      "Reprimand",
      "Probation",
      "Suspension",
      "Exclusion",
    ],
    cells: [
      ["Reprimand", null, "May continue practice"],
      ["Probation", "Moderate", null],
      ["Suspension", null, null],
      ["Exclusion", null, "Permanently barred from practice"],
    ],
    answers: [
      { row: 0, col: 1, value: "Lowest" },
      { row: 1, col: 2, value: "May practice under conditions" },
      { row: 2, col: 1, value: "Severe" },
      { row: 2, col: 2, value: "Temporarily barred from practice" },
      { row: 3, col: 1, value: "Most severe" },
    ],
    answerBank: [
      "Lowest",
      "Severe",
      "Most severe",
      "May practice under conditions",
      "Temporarily barred from practice",
    ],
  },
  {
    id: "z3-table-4",
    conceptId: "gate-written-consent",
    zoneSlug: "the-gatekeepers",
    title: "Application Access Requirements by Status",
    columns: ["Application Status", "Who Can Inspect", "Written Consent Needed?"],
    rows: [
      "Unpublished (pre-publication)",
      "Published (post-publication)",
      "Issued patent",
    ],
    cells: [
      ["Unpublished (pre-publication)", null, null],
      ["Published (post-publication)", null, "No"],
      ["Issued patent", "Anyone (public record)", null],
    ],
    answers: [
      { row: 0, col: 1, value: "Applicant, assignee, or authorized third party" },
      { row: 0, col: 2, value: "Yes" },
      { row: 1, col: 1, value: "Anyone (public record)" },
      { row: 2, col: 2, value: "No" },
    ],
    answerBank: [
      "Applicant, assignee, or authorized third party",
      "Anyone (public record)",
      "Yes",
      "No",
    ],
  },
];
