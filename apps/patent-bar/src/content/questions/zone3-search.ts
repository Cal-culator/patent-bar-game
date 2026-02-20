import { OpenBookQuestion, SpeedrunPrompt } from "@study-game/engine";

// ============================================================
// Zone 3: The Gatekeepers — Search Phase Content
// Open-Book Questions + Speedrun Prompts
// ============================================================

// --- OPEN-BOOK QUESTIONS (10) ---

export const ZONE3_OPEN_BOOK: OpenBookQuestion[] = [
  // Group 1: Suspended/excluded practitioners (§105) — 3 questions
  {
    id: "ob-z3-01",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    stem: "Under 37 CFR 11.116, what are USPTO employees prohibited from doing with respect to suspended or excluded practitioners?",
    options: [
      { text: "Accepting any documents filed by them" },
      { text: "Communicating about pending patent applications with them" },
      { text: "Allowing them to enter USPTO buildings" },
      { text: "Processing fee payments submitted by them" },
    ],
    correctIndex: 1,
    explanation:
      "37 CFR 11.116 specifically prohibits USPTO employees from communicating about pending patent applications with practitioners who have been suspended or excluded from practice.",
    citationRef: "37 CFR 11.116",
    targetSectionId: "mpep-105-01",
    searchHint: "communication prohibition",
  },
  {
    id: "ob-z3-02",
    conceptId: "gate-exception",
    zoneSlug: "the-gatekeepers",
    stem: "Under what exception may a suspended or excluded practitioner file a patent application with the USPTO?",
    options: [
      { text: "When acting under the supervision of a registered practitioner" },
      { text: "When the practitioner is the actual inventor or applicant and files pro se" },
      { text: "When the practitioner pays a reinstatement surcharge" },
      { text: "When the suspension has been in effect for more than one year" },
    ],
    correctIndex: 1,
    explanation:
      "A suspended or excluded practitioner who is the actual inventor or applicant retains the right to file and prosecute their own application pro se, as this right belongs to all individuals.",
    citationRef: "MPEP 105",
    targetSectionId: "mpep-105-02",
    searchHint: "pro se exception",
  },
  {
    id: "ob-z3-03",
    conceptId: "gate-oed-role",
    zoneSlug: "the-gatekeepers",
    stem: "What entity within the USPTO is responsible for maintaining the roster of suspended and excluded practitioners?",
    options: [
      { text: "The Patent Trial and Appeal Board (PTAB)" },
      { text: "The Office of Patent Legal Administration (OPLA)" },
      { text: "The Office of Enrollment and Discipline (OED)" },
      { text: "The Technology Center Directors" },
    ],
    correctIndex: 2,
    explanation:
      "The Office of Enrollment and Discipline (OED) is responsible for maintaining and publishing the roster of practitioners who have been suspended, excluded, or who resigned in lieu of discipline.",
    citationRef: "MPEP 105",
    targetSectionId: "mpep-105-03",
    searchHint: "OED roster",
  },

  // Group 2: Assignee control (§106) — 4 questions
  {
    id: "ob-z3-04",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    stem: "Under 37 CFR 3.71, who may take action in a patent application to the exclusion of the inventor?",
    options: [
      { text: "Any person who has a financial interest in the application" },
      { text: "The assignee of the entire right, title, and interest" },
      { text: "Any partial assignee who holds at least 50% interest" },
      { text: "The attorney of record, regardless of assignment status" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 3.71, only the assignee of the entire right, title, and interest may take action in a patent application to the exclusion of the inventor.",
    citationRef: "37 CFR 3.71",
    targetSectionId: "mpep-106-01",
    searchHint: "assignee entire interest",
  },
  {
    id: "ob-z3-05",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    stem: "What must an assignee file under 37 CFR 3.73(c) to establish the right to take action in a patent application?",
    options: [
      { text: "A sworn affidavit witnessed by a notary public" },
      { text: "A statement setting forth the basis for entitlement, supported by documentary evidence of the chain of title" },
      { text: "A copy of the assignment agreement only" },
      { text: "A petition to the Commissioner requesting authority" },
    ],
    correctIndex: 1,
    explanation:
      "37 CFR 3.73(c) requires the assignee to file a statement setting forth the basis for entitlement to take action, supported by documentary evidence establishing the chain of title from the inventor.",
    citationRef: "37 CFR 3.73(c)",
    targetSectionId: "mpep-106-01",
    searchHint: "statement chain of title",
  },
  {
    id: "ob-z3-06",
    conceptId: "gate-partial-interest",
    zoneSlug: "the-gatekeepers",
    stem: "What rights does a partial assignee have in a patent application under 37 CFR 3.71?",
    options: [
      { text: "Full prosecution rights proportional to their ownership percentage" },
      { text: "The right to inspect the application file but not to direct prosecution" },
      { text: "No rights whatsoever until they acquire the entire interest" },
      { text: "The right to file continuation applications based on their partial interest" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 3.71, a partial assignee may inspect the application file but may not independently direct prosecution or amend claims. All partial assignees together with the inventor must join to take action.",
    citationRef: "37 CFR 3.71",
    targetSectionId: "mpep-106-02",
    searchHint: "partial assignee rights",
  },
  {
    id: "ob-z3-07",
    conceptId: "gate-written-consent",
    zoneSlug: "the-gatekeepers",
    stem: "Under 35 USC 122(a) and MPEP 106, what is required for a third party to access an unpublished patent application?",
    options: [
      { text: "Payment of a standard access fee to the USPTO" },
      { text: "Written authorization from the applicant or assignee" },
      { text: "A court order from a federal district court" },
      { text: "Approval from the examiner handling the application" },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 122(a), applications are kept in confidence. MPEP 106 provides that written authorization from the applicant or assignee is required for third-party access to unpublished applications.",
    citationRef: "35 USC 122(a); MPEP 106",
    targetSectionId: "mpep-106-03",
    searchHint: "written authorization access",
  },

  // Group 3: Additional control and access questions — 3 questions
  {
    id: "ob-z3-08",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    stem: "Can an assignee of the entire interest revoke a power of attorney previously granted by the inventor?",
    options: [
      { text: "No, only the inventor can revoke a power of attorney" },
      { text: "Yes, and the assignee may also appoint a new registered practitioner" },
      { text: "Yes, but only with the inventor's written consent" },
      { text: "Yes, but only after the application is published" },
    ],
    correctIndex: 1,
    explanation:
      "An assignee of the entire right, title, and interest has the authority to revoke the existing power of attorney and appoint a new registered practitioner, without needing the inventor's consent.",
    citationRef: "37 CFR 3.71; MPEP 106",
    targetSectionId: "mpep-106-01",
    searchHint: "revoke power of attorney",
  },
  {
    id: "ob-z3-09",
    conceptId: "gate-written-consent",
    zoneSlug: "the-gatekeepers",
    stem: "When does the written consent requirement for third-party access cease to apply?",
    options: [
      { text: "After 18 months from the filing date, regardless of publication" },
      { text: "When the application is published or a patent issues" },
      { text: "When the assignment is recorded at the USPTO" },
      { text: "When the first office action is mailed" },
    ],
    correctIndex: 1,
    explanation:
      "The written consent requirement ceases once the application is published or a patent issues, as the file becomes part of the public record and is freely accessible.",
    citationRef: "MPEP 106; 35 USC 122",
    targetSectionId: "mpep-106-03",
    searchHint: "publication public access",
  },
  {
    id: "ob-z3-10",
    conceptId: "gate-oed-role",
    zoneSlug: "the-gatekeepers",
    stem: "What consequences may follow if a suspended practitioner engages in unauthorized practice before the USPTO?",
    options: [
      { text: "A warning letter is issued with no further action" },
      { text: "OED investigation, possible contempt proceedings, and referral to appropriate authorities" },
      { text: "An automatic fine of $1,000 per occurrence" },
      { text: "The practitioner's suspension is extended by 6 months" },
    ],
    correctIndex: 1,
    explanation:
      "Unauthorized practice by a suspended or excluded practitioner can trigger an OED investigation, possible contempt proceedings, and referral to appropriate law enforcement or judicial authorities.",
    citationRef: "MPEP 105; 37 CFR Part 11",
    targetSectionId: "mpep-105-03",
    searchHint: "unauthorized practice consequences",
  },
];

// ============================================================
// SPEEDRUN PROMPTS (8)
// ============================================================

export const ZONE3_SPEEDRUN: SpeedrunPrompt[] = [
  {
    id: "sr-z3-01",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    prompt: "The regulation prohibiting communication with suspended/excluded practitioners about pending applications",
    acceptedAnswers: [
      "37 CFR 11.116",
      "37 C.F.R. 11.116",
      "11.116",
      "CFR 11.116",
    ],
    canonicalAnswer: "37 CFR 11.116",
    explanation:
      "37 CFR 11.116 prohibits USPTO employees from communicating about pending patent applications with suspended or excluded practitioners.",
    difficulty: 1,
  },
  {
    id: "sr-z3-02",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    prompt: "The regulation establishing the assignee's right to take action in a patent application",
    acceptedAnswers: [
      "37 CFR 3.71",
      "37 C.F.R. 3.71",
      "3.71",
      "CFR 3.71",
    ],
    canonicalAnswer: "37 CFR 3.71",
    explanation:
      "37 CFR 3.71 provides that an assignee of the entire right, title, and interest may take action in a patent application.",
    difficulty: 1,
  },
  {
    id: "sr-z3-03",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    prompt: "The regulation requiring a statement of assignee interest to prove chain of title",
    acceptedAnswers: [
      "37 CFR 3.73",
      "37 C.F.R. 3.73",
      "37 CFR 3.73(c)",
      "37 C.F.R. 3.73(c)",
      "3.73",
      "3.73(c)",
      "CFR 3.73",
    ],
    canonicalAnswer: "37 CFR 3.73(c)",
    explanation:
      "37 CFR 3.73(c) requires assignees to file a statement establishing entitlement to take action, supported by documentary evidence of the chain of title.",
    difficulty: 2,
  },
  {
    id: "sr-z3-04",
    conceptId: "gate-written-consent",
    zoneSlug: "the-gatekeepers",
    prompt: "The statute establishing confidentiality of unpublished patent applications",
    acceptedAnswers: [
      "35 USC 122",
      "35 U.S.C. 122",
      "35 USC 122(a)",
      "35 U.S.C. 122(a)",
      "122",
      "§122",
      "section 122",
    ],
    canonicalAnswer: "35 USC 122(a)",
    explanation:
      "35 USC 122(a) provides that applications for patents shall be kept in confidence by the USPTO.",
    difficulty: 1,
  },
  {
    id: "sr-z3-05",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    prompt: "The MPEP section covering communications with suspended and excluded practitioners",
    acceptedAnswers: [
      "MPEP 105",
      "105",
      "§105",
      "section 105",
    ],
    canonicalAnswer: "MPEP 105",
    explanation:
      "MPEP 105 covers the rules regarding suspended and excluded practitioners, including the communication ban and pro se exception.",
    difficulty: 2,
  },
  {
    id: "sr-z3-06",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    prompt: "The MPEP section covering assignee control and inspection rights",
    acceptedAnswers: [
      "MPEP 106",
      "106",
      "§106",
      "section 106",
    ],
    canonicalAnswer: "MPEP 106",
    explanation:
      "MPEP 106 covers the assignee's right to control inspection of their application and related access rules.",
    difficulty: 2,
  },
  {
    id: "sr-z3-07",
    conceptId: "gate-oed-role",
    zoneSlug: "the-gatekeepers",
    prompt: "The part of the Code of Federal Regulations governing practitioner discipline before the USPTO",
    acceptedAnswers: [
      "37 CFR Part 11",
      "37 C.F.R. Part 11",
      "Part 11",
      "CFR Part 11",
      "37 CFR 11",
    ],
    canonicalAnswer: "37 CFR Part 11",
    explanation:
      "37 CFR Part 11 governs the registration, investigation, and discipline of patent practitioners before the USPTO.",
    difficulty: 3,
  },
  {
    id: "sr-z3-08",
    conceptId: "gate-oed-role",
    zoneSlug: "the-gatekeepers",
    prompt: "The statute granting the USPTO Director authority to regulate practitioner conduct",
    acceptedAnswers: [
      "35 USC 2(b)(2)(D)",
      "35 U.S.C. 2(b)(2)(D)",
      "35 USC 2",
      "35 U.S.C. 2",
      "section 2",
    ],
    canonicalAnswer: "35 USC 2(b)(2)(D)",
    explanation:
      "35 USC 2(b)(2)(D) grants the Director authority to establish regulations governing the recognition and conduct of agents and attorneys representing applicants before the Office.",
    difficulty: 3,
  },
];
