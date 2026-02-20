import { OpenBookQuestion, SpeedrunPrompt } from "@study-game/engine";

// ============================================================
// Zone 7: The Agencies — Search Phase Content
// Open Book Questions + Speedrun Prompts
// ============================================================

// --- OPEN-BOOK QUESTIONS (10) ---

export const ZONE7_OPEN_BOOK: OpenBookQuestion[] = [
  // Group 1: DOE/NASA overview (mpep-150-01 through mpep-150-03) — 4 questions
  {
    id: "ob-z7-01",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    stem: "Under 42 U.S.C. 2182, what authority does the Department of Energy have regarding inventions made under Atomic Energy Commission or DOE contracts?",
    options: [
      { text: "DOE may request a non-exclusive license only" },
      { text: "DOE may claim title to the patent application" },
      { text: "DOE may block the patent from issuing entirely" },
      { text: "DOE has no authority over contractor inventions" },
    ],
    correctIndex: 1,
    explanation:
      "Under 42 U.S.C. 2182, the DOE may claim title to inventions made or conceived under contracts with the Atomic Energy Commission or DOE.",
    citationRef: "42 USC 2182",
    targetSectionId: "mpep-150-01",
    searchHint: "DOE authority",
  },
  {
    id: "ob-z7-02",
    conceptId: "gov-nasa-authority",
    zoneSlug: "the-agencies",
    stem: "Under 51 U.S.C. 20135, what right does NASA have regarding inventions made by contractors performing work under NASA contracts?",
    options: [
      { text: "NASA may only require disclosure of the invention" },
      { text: "NASA may claim title to the invention" },
      { text: "NASA may require the contractor to abandon the application" },
      { text: "NASA has authority only over classified inventions" },
    ],
    correctIndex: 1,
    explanation:
      "Under 51 U.S.C. 20135 (the Space Act), NASA may claim title to inventions made by contractors under NASA contracts.",
    citationRef: "51 USC 20135",
    targetSectionId: "mpep-150-02",
    searchHint: "NASA authority",
  },
  {
    id: "ob-z7-03",
    conceptId: "gov-45day-letter",
    zoneSlug: "the-agencies",
    stem: "According to MPEP 150, what happens when DOE or NASA identifies a patent application with potential government interest?",
    options: [
      { text: "The application is immediately transferred to the agency" },
      { text: "The USPTO sends a 45-day letter to the applicant" },
      { text: "The examiner issues a final rejection" },
      { text: "The application is placed under a secrecy order" },
    ],
    correctIndex: 1,
    explanation:
      "When DOE or NASA identifies potential government interest, the USPTO sends a 45-day letter notifying the applicant and requiring a response.",
    citationRef: "MPEP 150",
    targetSectionId: "mpep-150-03",
    searchHint: "45-day letter",
  },
  {
    id: "ob-z7-04",
    conceptId: "gov-30day-response",
    zoneSlug: "the-agencies",
    stem: "What is the deadline for an applicant to respond to a 45-day letter regarding DOE or NASA interest, and what happens if the deadline is missed?",
    options: [
      { text: "45 days; the examiner issues an advisory action" },
      { text: "30 days; the application may be regarded as abandoned" },
      { text: "60 days; a surcharge is imposed" },
      { text: "90 days; the application is transferred to the agency" },
    ],
    correctIndex: 1,
    explanation:
      "The applicant must respond within 30 days of the 45-day letter date. Failure to respond may result in the application being regarded as abandoned.",
    citationRef: "MPEP 150",
    targetSectionId: "mpep-150-03",
    searchHint: "30-day response deadline",
  },

  // Group 2: Statement requirements (mpep-151-01 through mpep-151-04) — 4 questions
  {
    id: "ob-z7-05",
    conceptId: "gov-statement-content",
    zoneSlug: "the-agencies",
    stem: "Under MPEP 151, what three elements must be included in the statement filed in response to a 45-day letter?",
    options: [
      { text: "Inventorship declaration, oath, and filing fee" },
      { text: "Contract identification, whether the invention was made under the contract, and the government's rights" },
      { text: "Prior art search results, claim chart, and patentability analysis" },
      { text: "Inventor's biography, contract value, and project timeline" },
    ],
    correctIndex: 1,
    explanation:
      "MPEP 151 requires the statement to include: (1) identification of the government contract, (2) whether the invention was made under the contract, and (3) the rights of the government in the invention.",
    citationRef: "MPEP 151",
    targetSectionId: "mpep-151-01",
    searchHint: "statement content requirements",
  },
  {
    id: "ob-z7-06",
    conceptId: "gov-statement-content",
    zoneSlug: "the-agencies",
    stem: "When describing the government's rights in the required statement under MPEP 151, what types of rights might the statement address?",
    options: [
      { text: "Only whether the government has title to the invention" },
      { text: "Whether the government has a license, holds title, or has waived its rights" },
      { text: "Only whether the invention is classified for national security" },
      { text: "Whether the government has approved the patent claims" },
    ],
    correctIndex: 1,
    explanation:
      "The statement must describe the government's rights, which may include holding a license, claiming title, or having waived its interest in the invention.",
    citationRef: "MPEP 151",
    targetSectionId: "mpep-151-02",
    searchHint: "government rights",
  },
  {
    id: "ob-z7-07",
    conceptId: "gov-multiple-inventors",
    zoneSlug: "the-agencies",
    stem: "According to MPEP 151, when a patent application has multiple inventors and some worked under a government contract, who must file a statement?",
    options: [
      { text: "Only the first-named inventor" },
      { text: "All named inventors regardless of contract involvement" },
      { text: "Each inventor who was involved in the government contract must file a separate statement" },
      { text: "The assignee files a single statement on behalf of all inventors" },
    ],
    correctIndex: 2,
    explanation:
      "Each inventor who participated in the government contract must file a separate statement. Inventors not under the contract are not required to file.",
    citationRef: "MPEP 151",
    targetSectionId: "mpep-151-03",
    searchHint: "multiple inventors",
  },
  {
    id: "ob-z7-08",
    conceptId: "gov-substitute-statement",
    zoneSlug: "the-agencies",
    stem: "Under what circumstances does MPEP 151 permit a substitute statement to be filed in response to a 45-day letter?",
    options: [
      { text: "Whenever the applicant prefers not to respond personally" },
      { text: "When the inventor cannot be reached or refuses to cooperate" },
      { text: "Only when the inventor is deceased" },
      { text: "When the assignee wants to assert its own rights" },
    ],
    correctIndex: 1,
    explanation:
      "MPEP 151 permits a substitute statement when the inventor cannot be reached or refuses to cooperate. The substitute must be filed by a party with sufficient knowledge of the facts.",
    citationRef: "MPEP 151",
    targetSectionId: "mpep-151-04",
    searchHint: "substitute statement",
  },

  // Group 3: Waiver and appeals (mpep-150-02, mpep-150-03) — 2 questions
  {
    id: "ob-z7-09",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    stem: "Can a government contractor request that DOE or NASA waive its rights to an invention made under a government contract?",
    options: [
      { text: "No, the government's rights are always absolute and cannot be waived" },
      { text: "Yes, the contractor may request a waiver, and the agency may grant it if retention serves the public interest" },
      { text: "Yes, but only if the invention has no commercial value" },
      { text: "Waivers are available only for NASA, not for DOE" },
    ],
    correctIndex: 1,
    explanation:
      "Both DOE and NASA may waive their rights to contractor inventions. The contractor must request the waiver and demonstrate that retaining rights serves the public interest.",
    citationRef: "MPEP 150",
    targetSectionId: "mpep-150-02",
    searchHint: "government waiver",
  },
  {
    id: "ob-z7-10",
    conceptId: "gov-abandonment",
    zoneSlug: "the-agencies",
    stem: "If an applicant disagrees with the government agency's determination of rights in their invention, what recourse is available?",
    options: [
      { text: "No recourse — the agency's determination is final" },
      { text: "The applicant can petition the agency to reconsider the rights determination" },
      { text: "The applicant must abandon the application and refile" },
      { text: "The applicant can only appeal to the Federal Circuit" },
    ],
    correctIndex: 1,
    explanation:
      "An applicant who disagrees with the government's rights determination can petition the agency to reconsider. Additional administrative and legal remedies may also be available depending on the circumstances.",
    citationRef: "MPEP 150",
    targetSectionId: "mpep-150-03",
    searchHint: "petition disagree determination",
  },
];

// --- SPEEDRUN PROMPTS (8) ---

export const ZONE7_SPEEDRUN: SpeedrunPrompt[] = [
  {
    id: "sr-z7-01",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    prompt: "The statute giving DOE authority over inventions made under Atomic Energy Act contracts",
    acceptedAnswers: [
      "42 USC 2182",
      "42 U.S.C. 2182",
      "2182",
      "section 2182",
    ],
    canonicalAnswer: "42 USC 2182",
    explanation:
      "42 U.S.C. 2182 is the Atomic Energy Act provision granting DOE authority over contractor inventions.",
    difficulty: 1,
  },
  {
    id: "sr-z7-02",
    conceptId: "gov-nasa-authority",
    zoneSlug: "the-agencies",
    prompt: "The statute giving NASA authority over inventions made under NASA contracts (Space Act)",
    acceptedAnswers: [
      "51 USC 20135",
      "51 U.S.C. 20135",
      "20135",
      "section 20135",
    ],
    canonicalAnswer: "51 USC 20135",
    explanation:
      "51 U.S.C. 20135 is the Space Act provision granting NASA authority over contractor inventions.",
    difficulty: 1,
  },
  {
    id: "sr-z7-03",
    conceptId: "gov-45day-letter",
    zoneSlug: "the-agencies",
    prompt: "The MPEP section covering DOE and NASA property rights procedures (overview)",
    acceptedAnswers: [
      "MPEP 150",
      "150",
      "section 150",
    ],
    canonicalAnswer: "MPEP 150",
    explanation:
      "MPEP 150 covers the overview of procedures for DOE and NASA property rights in patent applications.",
    difficulty: 1,
  },
  {
    id: "sr-z7-04",
    conceptId: "gov-statement-content",
    zoneSlug: "the-agencies",
    prompt: "The MPEP section detailing statement requirements and filing procedures for DOE/NASA",
    acceptedAnswers: [
      "MPEP 151",
      "151",
      "section 151",
    ],
    canonicalAnswer: "MPEP 151",
    explanation:
      "MPEP 151 details the content requirements, filing procedures, and special rules for statements in DOE/NASA matters.",
    difficulty: 2,
  },
  {
    id: "sr-z7-05",
    conceptId: "gov-30day-response",
    zoneSlug: "the-agencies",
    prompt: "The number of days an applicant has to respond to a DOE/NASA 45-day letter",
    acceptedAnswers: [
      "30",
      "30 days",
      "thirty days",
      "thirty",
    ],
    canonicalAnswer: "30 days",
    explanation:
      "The applicant has 30 days from the date of the 45-day letter to file a statement establishing rights.",
    difficulty: 1,
  },
  {
    id: "sr-z7-06",
    conceptId: "gov-abandonment",
    zoneSlug: "the-agencies",
    prompt: "The consequence for failing to respond to a DOE/NASA 45-day letter within the deadline",
    acceptedAnswers: [
      "abandonment",
      "abandoned",
      "application abandoned",
      "regarded as abandoned",
    ],
    canonicalAnswer: "abandonment",
    explanation:
      "Failure to respond within the 30-day deadline may result in the application being regarded as abandoned.",
    difficulty: 2,
  },
  {
    id: "sr-z7-07",
    conceptId: "gov-substitute-statement",
    zoneSlug: "the-agencies",
    prompt: "The type of statement that can be filed when an inventor cannot be reached for a DOE/NASA response",
    acceptedAnswers: [
      "substitute statement",
      "substitute",
      "substitute statements",
    ],
    canonicalAnswer: "substitute statement",
    explanation:
      "When an inventor cannot be reached or refuses to cooperate, a substitute statement may be filed by a knowledgeable party.",
    difficulty: 2,
  },
  {
    id: "sr-z7-08",
    conceptId: "gov-statement-content",
    zoneSlug: "the-agencies",
    prompt: "The three required elements of a statement filed in response to a DOE/NASA 45-day letter",
    acceptedAnswers: [
      "contract identification, invention nexus, government rights",
      "contract, invention under contract, government rights",
      "identification of contract, whether made under contract, rights of government",
    ],
    canonicalAnswer: "contract identification, invention nexus, government rights",
    explanation:
      "The statement must include: (1) identification of the contract, (2) whether the invention was made under the contract, and (3) the rights of the government.",
    difficulty: 3,
  },
];
