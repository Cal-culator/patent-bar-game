import { RuleBuilderData, TableFillData, FlowchartBuilderData, FlowchartStep } from "@/types";

// ============================================================
// Zone 7: The Agencies — Build Phase Content
// Rule Builders + Comparison Table Fill-Ins
// ============================================================

// --- RULE BUILDERS ---
// Students assemble statute text from shuffled fragments

export const ZONE7_RULE_BUILDERS: RuleBuilderData[] = [
  {
    id: "z7-rb-1",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    title: "DOE Authority Over Contract Inventions",
    statuteRef: "42 USC 2182",
    fragments: [
      "made or conceived",
      "The Department of Energy",
      "under contracts with",
      "has authority over inventions",
      "the Atomic Energy Commission",
      "or the DOE",
    ],
    correctOrder: [1, 3, 0, 2, 4, 5],
    completeSentence:
      "The Department of Energy has authority over inventions made or conceived under contracts with the Atomic Energy Commission or the DOE.",
  },
  {
    id: "z7-rb-2",
    conceptId: "gov-nasa-authority",
    zoneSlug: "the-agencies",
    title: "NASA Authority Over Contractor Inventions",
    statuteRef: "51 USC 20135",
    fragments: [
      "may claim title to",
      "NASA",
      "inventions made by contractors",
      "performing work",
      "under NASA contracts",
    ],
    correctOrder: [1, 0, 2, 3, 4],
    completeSentence:
      "NASA may claim title to inventions made by contractors performing work under NASA contracts.",
  },
  {
    id: "z7-rb-3",
    conceptId: "gov-45day-letter",
    zoneSlug: "the-agencies",
    title: "The 45-Day Notification Letter",
    statuteRef: "MPEP 150",
    fragments: [
      "sends a 45-day letter",
      "When DOE or NASA identifies",
      "to the applicant",
      "a patent application",
      "with potential government interest",
      "the USPTO",
    ],
    correctOrder: [1, 3, 4, 5, 0, 2],
    completeSentence:
      "When DOE or NASA identifies a patent application with potential government interest the USPTO sends a 45-day letter to the applicant.",
  },
  {
    id: "z7-rb-4",
    conceptId: "gov-30day-response",
    zoneSlug: "the-agencies",
    title: "The 30-Day Response Deadline",
    statuteRef: "MPEP 150",
    fragments: [
      "the applicant has",
      "30 days to respond",
      "with a statement",
      "establishing rights",
      "in the invention",
    ],
    correctOrder: [0, 1, 2, 3, 4],
    completeSentence:
      "The applicant has 30 days to respond with a statement establishing rights in the invention.",
  },
  {
    id: "z7-rb-5",
    conceptId: "gov-abandonment",
    zoneSlug: "the-agencies",
    title: "Abandonment for Failure to Respond",
    statuteRef: "MPEP 150",
    fragments: [
      "may be regarded",
      "Failure to respond",
      "as abandoned",
      "within the deadline",
      "means the application",
    ],
    correctOrder: [1, 3, 4, 0, 2],
    completeSentence:
      "Failure to respond within the deadline means the application may be regarded as abandoned.",
  },
  {
    id: "z7-rb-6",
    conceptId: "gov-statement-content",
    zoneSlug: "the-agencies",
    title: "Required Statement Contents",
    statuteRef: "MPEP 151",
    fragments: [
      "the rights of the government",
      "The statement must include",
      "whether the invention was made",
      "identification of the contract",
      "under the contract, and",
    ],
    correctOrder: [1, 3, 2, 4, 0],
    completeSentence:
      "The statement must include identification of the contract whether the invention was made under the contract, and the rights of the government.",
  },
  {
    id: "z7-rb-7",
    conceptId: "gov-substitute-statement",
    zoneSlug: "the-agencies",
    title: "Substitute Statement Availability",
    statuteRef: "MPEP 151",
    fragments: [
      "a substitute statement",
      "When the inventor",
      "may be filed by",
      "cannot be reached",
      "or refuses to cooperate",
      "a party with sufficient knowledge",
    ],
    correctOrder: [1, 3, 4, 0, 2, 5],
    completeSentence:
      "When the inventor cannot be reached or refuses to cooperate a substitute statement may be filed by a party with sufficient knowledge.",
  },
];

// --- COMPARISON TABLE FILL-INS ---
// Students fill blank cells in comparison tables

export const ZONE7_TABLE_FILLS: TableFillData[] = [
  {
    id: "z7-table-1",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    title: "DOE vs. NASA Authority Comparison",
    columns: ["Feature", "DOE", "NASA"],
    rows: ["Governing statute", "Subject matter", "Agency authority", "Waiver available?"],
    cells: [
      ["Governing statute", null, null],
      ["Subject matter", null, null],
      ["Agency authority", null, "May claim title"],
      ["Waiver available?", "Yes", null],
    ],
    answers: [
      { row: 0, col: 1, value: "42 USC 2182" },
      { row: 0, col: 2, value: "51 USC 20135" },
      { row: 1, col: 1, value: "Atomic energy inventions" },
      { row: 1, col: 2, value: "Space/aeronautics inventions" },
      { row: 2, col: 1, value: "May claim title" },
      { row: 3, col: 2, value: "Yes" },
    ],
    answerBank: [
      "42 USC 2182",
      "51 USC 20135",
      "Atomic energy inventions",
      "Space/aeronautics inventions",
      "May claim title",
      "Yes",
    ],
  },
  {
    id: "z7-table-2",
    conceptId: "gov-statement-content",
    zoneSlug: "the-agencies",
    title: "Statement Content Requirements",
    columns: ["Required Element", "Description", "MPEP Reference"],
    rows: [
      "Contract identification",
      "Invention nexus",
      "Government rights",
    ],
    cells: [
      ["Contract identification", null, "MPEP 151"],
      ["Invention nexus", null, null],
      [null, "Description of government's license, title, or waiver", "MPEP 151"],
    ],
    answers: [
      { row: 0, col: 1, value: "Name and number of the government contract" },
      { row: 1, col: 1, value: "Whether invention was made under the contract" },
      { row: 1, col: 2, value: "MPEP 151" },
      { row: 2, col: 0, value: "Government rights" },
    ],
    answerBank: [
      "Name and number of the government contract",
      "Whether invention was made under the contract",
      "MPEP 151",
      "Government rights",
    ],
  },
  {
    id: "z7-table-3",
    conceptId: "gov-45day-letter",
    zoneSlug: "the-agencies",
    title: "45-Day Letter Process Steps",
    columns: ["Step", "Action", "Deadline"],
    rows: [
      "Step 1",
      "Step 2",
      "Step 3",
      "Step 4",
    ],
    cells: [
      ["Step 1", null, "N/A"],
      ["Step 2", null, null],
      ["Step 3", "Applicant files statement", null],
      ["Step 4", null, "Varies"],
    ],
    answers: [
      { row: 0, col: 1, value: "Agency identifies government interest" },
      { row: 1, col: 1, value: "USPTO sends 45-day letter" },
      { row: 1, col: 2, value: "N/A" },
      { row: 2, col: 2, value: "30 days from letter" },
      { row: 3, col: 1, value: "Agency reviews and resolves rights" },
    ],
    answerBank: [
      "Agency identifies government interest",
      "USPTO sends 45-day letter",
      "N/A",
      "30 days from letter",
      "Agency reviews and resolves rights",
    ],
  },
  {
    id: "z7-table-4",
    conceptId: "gov-multiple-inventors",
    zoneSlug: "the-agencies",
    title: "Statement Requirements by Inventor Status",
    columns: ["Inventor Status", "Statement Required?", "Content"],
    rows: [
      "Under government contract",
      "Not under government contract",
      "Unavailable inventor",
    ],
    cells: [
      ["Under government contract", null, null],
      ["Not under government contract", null, "N/A"],
      [null, "Yes (substitute)", null],
    ],
    answers: [
      { row: 0, col: 1, value: "Yes" },
      { row: 0, col: 2, value: "Full statement with contract details" },
      { row: 1, col: 1, value: "No" },
      { row: 2, col: 0, value: "Unavailable inventor" },
      { row: 2, col: 2, value: "Same content plus unavailability explanation" },
    ],
    answerBank: [
      "Yes",
      "Full statement with contract details",
      "No",
      "Unavailable inventor",
      "Same content plus unavailability explanation",
    ],
  },
];

// --- FLOWCHART BUILDERS ---
// Students arrange procedural steps in the correct order

export const ZONE7_FLOWCHARTS: FlowchartBuilderData[] = [
  {
    id: "z7-flow-1",
    conceptId: "gov-45day-letter",
    zoneSlug: "the-agencies",
    title: "The 45-Day Letter Process",
    statuteRef: "MPEP 150",
    instruction:
      "Place the steps of the 45-day letter process for government interest inventions in the correct order.",
    steps: [
      { id: "z7-flow-1-s1", label: "DOE or NASA identifies a patent application with potential government interest" },
      { id: "z7-flow-1-s2", label: "Agency notifies the USPTO of its interest in the application" },
      { id: "z7-flow-1-s3", label: "USPTO sends a 45-day letter to the applicant requiring a statement of government interest" },
      { id: "z7-flow-1-s4", label: "Applicant files a statement within 30 days identifying the contract and government rights" },
      { id: "z7-flow-1-s5", label: "USPTO forwards the statement to the interested agency for review and resolution" },
    ],
    distractors: [
      { id: "z7-flow-1-d1", label: "Applicant pays a government interest processing fee to the USPTO" },
      { id: "z7-flow-1-d2", label: "USPTO publishes the application immediately to notify the public of government interest" },
      { id: "z7-flow-1-d3", label: "Applicant files a petition to the PTAB to contest the government interest claim" },
    ],
  },
  {
    id: "z7-flow-2",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    title: "DOE Patent Rights Determination",
    statuteRef: "42 USC 2182; MPEP 150",
    instruction:
      "Place the steps for determining DOE patent rights in a contractor's invention in the correct order.",
    steps: [
      { id: "z7-flow-2-s1", label: "Contractor makes or conceives an invention under a DOE contract" },
      { id: "z7-flow-2-s2", label: "Contractor files a patent application at the USPTO" },
      { id: "z7-flow-2-s3", label: "DOE identifies the application as relating to work under its contract" },
      { id: "z7-flow-2-s4", label: "USPTO issues a 45-day letter; applicant responds with a statement of government interest" },
      { id: "z7-flow-2-s5", label: "DOE determines whether to claim title, grant a waiver, or retain a royalty-free license" },
    ],
    distractors: [
      { id: "z7-flow-2-d1", label: "Contractor assigns all patent rights to the USPTO before prosecution begins" },
      { id: "z7-flow-2-d2", label: "DOE files its own separate patent application on the same invention" },
    ],
  },
  {
    id: "z7-flow-3",
    conceptId: "gov-substitute-statement",
    zoneSlug: "the-agencies",
    title: "Filing a Substitute Statement for an Unavailable Inventor",
    statuteRef: "MPEP 151; 37 CFR 1.64",
    instruction:
      "Place the steps for filing a substitute statement when an inventor is unavailable or uncooperative in the correct order.",
    steps: [
      { id: "z7-flow-3-s1", label: "USPTO requires a statement of government interest from the inventor" },
      { id: "z7-flow-3-s2", label: "Inventor cannot be reached or refuses to cooperate" },
      { id: "z7-flow-3-s3", label: "A party with sufficient knowledge of the facts prepares a substitute statement" },
      { id: "z7-flow-3-s4", label: "Substitute statement includes the same required content plus an explanation of the inventor's unavailability" },
      { id: "z7-flow-3-s5", label: "Substitute statement is filed with the USPTO within the response deadline" },
    ],
    distractors: [
      { id: "z7-flow-3-d1", label: "USPTO waives the statement requirement entirely when the inventor is unavailable" },
      { id: "z7-flow-3-d2", label: "Applicant files a petition to declare the inventor deceased" },
      { id: "z7-flow-3-d3", label: "The agency files the patent application on behalf of the inventor" },
    ],
  },
];
