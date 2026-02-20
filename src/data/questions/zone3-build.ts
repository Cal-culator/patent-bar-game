import { RuleBuilderData, TableFillData, FlowchartBuilderData, FlowchartStep } from "@/types";

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

// --- FLOWCHART BUILDERS ---
// Students arrange procedural steps in the correct order, ignoring distractors

export const ZONE3_FLOWCHARTS: FlowchartBuilderData[] = [
  {
    id: "z3-flow-1",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    title: "Establishing Assignee Entitlement to Take Action",
    statuteRef: "37 CFR 3.71 / 37 CFR 3.73(c)",
    instruction:
      "Place the steps for an assignee to establish entitlement to take action in a patent application in the correct order.",
    steps: [
      { id: "z3-flow-1-s1", label: "Assignment of the entire right, title, and interest is executed by the inventor" },
      { id: "z3-flow-1-s2", label: "Assignment is recorded at the USPTO Assignment Recordation Branch" },
      { id: "z3-flow-1-s3", label: "Assignee files a statement under 37 CFR 3.73(c) setting forth the basis for entitlement" },
      { id: "z3-flow-1-s4", label: "Documentary evidence of the chain of title is submitted to support the statement" },
      { id: "z3-flow-1-s5", label: "Assignee is recognized by the USPTO and may direct prosecution of the application" },
    ],
    distractors: [
      { id: "z3-flow-1-d1", label: "Assignee obtains a registered patent attorney number from the OED" },
      { id: "z3-flow-1-d2", label: "Partial assignee files a petition to the Director for prosecution rights" },
    ],
  },
  {
    id: "z3-flow-2",
    conceptId: "gate-written-consent",
    zoneSlug: "the-gatekeepers",
    title: "Appointing a Power of Attorney",
    statuteRef: "37 CFR 1.32 / 37 CFR 1.34",
    instruction:
      "Arrange the steps for establishing power of attorney in a patent application.",
    steps: [
      { id: "z3-flow-2-s1", label: "Applicant or assignee identifies a registered patent practitioner to represent them" },
      { id: "z3-flow-2-s2", label: "A power of attorney document designating the practitioner is prepared and signed" },
      { id: "z3-flow-2-s3", label: "The signed power of attorney is filed with the USPTO in the application file" },
      { id: "z3-flow-2-s4", label: "The designated practitioner becomes the attorney or agent of record" },
      { id: "z3-flow-2-s5", label: "USPTO directs all correspondence to the practitioner of record" },
    ],
    distractors: [
      { id: "z3-flow-2-d1", label: "Practitioner passes a background check conducted by the OED before appointment" },
      { id: "z3-flow-2-d2", label: "USPTO examiner approves the power of attorney before it takes effect" },
      { id: "z3-flow-2-d3", label: "The applicant pays a power of attorney filing fee" },
    ],
  },
  {
    id: "z3-flow-3",
    conceptId: "gate-oed-role",
    zoneSlug: "the-gatekeepers",
    title: "OED Disciplinary Proceeding Against a Practitioner",
    statuteRef: "37 CFR 11.22 / 37 CFR 11.116",
    instruction:
      "Place the steps of an OED disciplinary proceeding against a registered practitioner in the correct order.",
    steps: [
      { id: "z3-flow-3-s1", label: "A grievance or complaint is filed with the OED Director" },
      { id: "z3-flow-3-s2", label: "OED investigates the allegations of practitioner misconduct" },
      { id: "z3-flow-3-s3", label: "OED Director files a complaint with the USPTO Administrative Law Judge if warranted" },
      { id: "z3-flow-3-s4", label: "A hearing is held before the Administrative Law Judge" },
      { id: "z3-flow-3-s5", label: "Sanction is imposed (reprimand, probation, suspension, or exclusion)" },
    ],
    distractors: [
      { id: "z3-flow-3-d1", label: "The practitioner's clients are automatically notified by the USPTO before the investigation" },
      { id: "z3-flow-3-d2", label: "The practitioner must retake the patent bar exam before the hearing" },
    ],
  },
];
