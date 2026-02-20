import { OpenBookQuestion, SpeedrunPrompt } from "@study-game/engine";

// ============================================================
// OPEN-BOOK QUESTIONS (10)
// Zone 5: The Sealed Chamber — MPEP 120, 121, 130
// Secrecy Orders
// ============================================================

export const ZONE5_OPEN_BOOK: OpenBookQuestion[] = [
  // Group 1: Secrecy Order Authority & Basics (MPEP 120) — 4 questions
  {
    id: "ob-z5-01",
    conceptId: "sec-secrecy-authority",
    zoneSlug: "the-sealed-chamber",
    stem: "Under 35 U.S.C. 181, who determines whether disclosure of an invention would be detrimental to national security and recommends that a secrecy order be imposed?",
    options: [
      { text: "The Commissioner of Patents" },
      { text: "The head of an interested government agency" },
      { text: "The Secretary of Defense exclusively" },
      { text: "A federal judge upon petition by the government" },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 U.S.C. 181, the head of an interested government agency (or a designee) notifies the Commissioner that disclosure of the invention would be detrimental to national security and recommends that a secrecy order be issued. The Commissioner then issues the order.",
    citationRef: "35 USC 181",
    targetSectionId: "mpep-120-01",
    searchHint: "head of the interested Government agency",
  },
  {
    id: "ob-z5-02",
    conceptId: "sec-secrecy-duration",
    zoneSlug: "the-sealed-chamber",
    stem: "What is the initial duration of a secrecy order imposed under 35 U.S.C. 181?",
    options: [
      { text: "6 months, renewable indefinitely" },
      { text: "1 year, renewable upon notification by the agency head" },
      { text: "2 years, non-renewable" },
      { text: "Until the patent is granted or the application is abandoned" },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 U.S.C. 181, a secrecy order remains in effect for 1 year. It may be renewed for additional periods upon notification by the head of the agency who caused the order to be issued that the national interest continues to require secrecy.",
    citationRef: "35 USC 181",
    targetSectionId: "mpep-120-01",
    searchHint: "one year",
  },
  {
    id: "ob-z5-03",
    conceptId: "sec-secrecy-types",
    zoneSlug: "the-sealed-chamber",
    stem: "Which type of secrecy order permits filing in a limited set of up to 18 designated countries?",
    options: [
      { text: "Type I secrecy order" },
      { text: "Type II secrecy order" },
      { text: "Type III secrecy order" },
      { text: "All types of secrecy orders permit filing in designated countries" },
    ],
    correctIndex: 0,
    explanation:
      "A Type I secrecy order permits foreign filing in a specified list of up to 18 countries that have security agreements with the United States. Type II prohibits all foreign filing, and Type III prohibits any disclosure of the subject matter.",
    citationRef: "MPEP 120",
    targetSectionId: "mpep-120-02",
    searchHint: "Type I",
  },
  {
    id: "ob-z5-04",
    conceptId: "sec-license-revocation",
    zoneSlug: "the-sealed-chamber",
    stem: "Under 37 C.F.R. 5.2, what effect does the imposition of a secrecy order have on any previously granted foreign filing license?",
    options: [
      { text: "The foreign filing license remains valid for 6 months after the secrecy order" },
      { text: "The foreign filing license is suspended pending agency review" },
      { text: "The foreign filing license is revoked" },
      { text: "The foreign filing license is unaffected by the secrecy order" },
    ],
    correctIndex: 2,
    explanation:
      "37 C.F.R. 5.2 provides that the imposition of a secrecy order on an application revokes any previously granted foreign filing license for that application.",
    citationRef: "37 CFR 5.2",
    targetSectionId: "mpep-120-03",
    searchHint: "revoke",
  },

  // Group 2: Related Subject Matter & Scope (MPEP 120) — 1 question
  {
    id: "ob-z5-05",
    conceptId: "sec-related-subject",
    zoneSlug: "the-sealed-chamber",
    stem: "According to 37 C.F.R. 5.3, the restrictions of a secrecy order extend to which of the following?",
    options: [
      { text: "Only the exact claims recited in the application under the secrecy order" },
      { text: "All applications and patents owned by the same applicant" },
      { text: "Any related applications containing subject matter within the scope of the secrecy order" },
      { text: "Only continuation applications filed after the secrecy order date" },
    ],
    correctIndex: 2,
    explanation:
      "37 C.F.R. 5.3 provides that the restrictions of a secrecy order apply to any related application or patent that contains subject matter within the scope of the order, not just the original application.",
    citationRef: "37 CFR 5.3",
    targetSectionId: "mpep-120-04",
    searchHint: "related subject matter",
  },

  // Group 3: Violations & Abandonment (MPEP 120 / 35 USC 182) — 2 questions
  {
    id: "ob-z5-06",
    conceptId: "sec-violation-abandon",
    zoneSlug: "the-sealed-chamber",
    stem: "Under 35 U.S.C. 182, what is the consequence for an applicant who publishes or discloses the subject matter of an application in violation of a secrecy order?",
    options: [
      { text: "The applicant receives a warning and a 90-day cure period" },
      { text: "The application is deemed abandoned" },
      { text: "The application is converted to a provisional application" },
      { text: "The applicant is barred from filing new applications for 5 years" },
    ],
    correctIndex: 1,
    explanation:
      "35 U.S.C. 182 provides that if an applicant publishes or discloses the invention in violation of a secrecy order, the application shall be deemed abandoned.",
    citationRef: "35 USC 182",
    targetSectionId: "mpep-120-03",
    searchHint: "deemed abandoned",
  },
  {
    id: "ob-z5-07",
    conceptId: "sec-compensation",
    zoneSlug: "the-sealed-chamber",
    stem: "Under 35 U.S.C. 183, who is entitled to compensation for damage caused by a secrecy order, and where must the claim be filed?",
    options: [
      { text: "The inventor; claim filed with the U.S. Patent Trial and Appeal Board" },
      { text: "The applicant or assignee; claim filed with the head of the agency that caused the order" },
      { text: "The applicant; claim filed in any U.S. District Court" },
      { text: "Only government contractors; claim filed with the Government Accountability Office" },
    ],
    correctIndex: 1,
    explanation:
      "35 U.S.C. 183 provides that an applicant, assignee, or their legal representative may apply to the head of the agency that caused the secrecy order to be issued for compensation for damage caused by the order.",
    citationRef: "35 USC 183",
    targetSectionId: "mpep-120-03",
    searchHint: "compensation",
  },

  // Group 4: Security Marking Handling (MPEP 121) — 2 questions
  {
    id: "ob-z5-08",
    conceptId: "sec-marking-handling",
    zoneSlug: "the-sealed-chamber",
    stem: "According to MPEP 121, how must applications under secrecy orders be physically handled within the USPTO?",
    options: [
      { text: "They may be stored with regular applications but must be in sealed envelopes" },
      { text: "They must be stored in locked containers and handled only by authorized personnel" },
      { text: "They are digitized and stored in an encrypted database accessible to all examiners" },
      { text: "They must be returned to the applicant for safekeeping until examination" },
    ],
    correctIndex: 1,
    explanation:
      "MPEP 121 requires that applications under secrecy orders be stored in locked containers (such as safes or security cabinets) and handled only by personnel who are authorized to access classified or restricted material.",
    citationRef: "MPEP 121",
    targetSectionId: "mpep-121-01",
    searchHint: "locked containers",
  },
  {
    id: "ob-z5-09",
    conceptId: "sec-marking-classification",
    zoneSlug: "the-sealed-chamber",
    stem: "Under MPEP 121, what security markings must appear on an application that is subject to a secrecy order?",
    options: [
      { text: "No special markings are required beyond the secrecy order itself" },
      { text: "The application must bear markings indicating the level of classification or restriction applied by the ordering agency" },
      { text: "Only the word 'CONFIDENTIAL' stamped on the cover page" },
      { text: "A red border around every page of the application" },
    ],
    correctIndex: 1,
    explanation:
      "MPEP 121 provides that applications under secrecy orders must bear appropriate security markings as designated by the agency that requested the order, indicating the level of classification or restriction applicable to the subject matter.",
    citationRef: "MPEP 121",
    targetSectionId: "mpep-121-02",
    searchHint: "security markings",
  },

  // Group 5: Examination Under Secrecy (MPEP 130) — 1 question
  {
    id: "ob-z5-10",
    conceptId: "sec-exam-secrecy",
    zoneSlug: "the-sealed-chamber",
    stem: "According to MPEP 130, what happens to the publication and appeal rights of an application under a secrecy order?",
    options: [
      { text: "The application is published in redacted form and appeals proceed normally" },
      { text: "Publication is suspended and the application is not published; appeals to the Federal Circuit are restricted" },
      { text: "The application is published only after the secrecy order expires" },
      { text: "Publication proceeds normally but under a pseudonym for the inventor" },
    ],
    correctIndex: 1,
    explanation:
      "MPEP 130 provides that applications under secrecy orders are not published under 35 U.S.C. 122(b). Additionally, appeals from decisions on these applications to the U.S. Court of Appeals for the Federal Circuit are restricted during the period the secrecy order is in effect.",
    citationRef: "MPEP 130",
    targetSectionId: "mpep-130-01",
    searchHint: "not published",
  },
];

// ============================================================
// SPEEDRUN PROMPTS (8)
// ============================================================

export const ZONE5_SPEEDRUN: SpeedrunPrompt[] = [
  {
    id: "sr-z5-01",
    conceptId: "sec-secrecy-authority",
    zoneSlug: "the-sealed-chamber",
    prompt: "The statute authorizing secrecy orders when disclosure is detrimental to national security",
    acceptedAnswers: [
      "35 USC 181",
      "35 U.S.C. 181",
      "181",
      "§181",
      "section 181",
    ],
    canonicalAnswer: "35 USC 181",
    explanation:
      "35 U.S.C. 181 authorizes the Commissioner to issue secrecy orders when an agency head determines that disclosure of the invention would be detrimental to national security.",
    difficulty: 1,
  },
  {
    id: "sr-z5-02",
    conceptId: "sec-violation-abandon",
    zoneSlug: "the-sealed-chamber",
    prompt: "The statute providing that violation of a secrecy order results in the application being deemed abandoned",
    acceptedAnswers: [
      "35 USC 182",
      "35 U.S.C. 182",
      "182",
      "§182",
      "section 182",
    ],
    canonicalAnswer: "35 USC 182",
    explanation:
      "35 U.S.C. 182 provides that unauthorized publication or disclosure in violation of a secrecy order causes the application to be deemed abandoned.",
    difficulty: 1,
  },
  {
    id: "sr-z5-03",
    conceptId: "sec-compensation",
    zoneSlug: "the-sealed-chamber",
    prompt: "The statute providing for compensation to applicants damaged by secrecy orders",
    acceptedAnswers: [
      "35 USC 183",
      "35 U.S.C. 183",
      "183",
      "§183",
      "section 183",
    ],
    canonicalAnswer: "35 USC 183",
    explanation:
      "35 U.S.C. 183 allows applicants, assignees, or their legal representatives to seek compensation for damage caused by secrecy orders from the head of the ordering agency.",
    difficulty: 2,
  },
  {
    id: "sr-z5-04",
    conceptId: "sec-license-revocation",
    zoneSlug: "the-sealed-chamber",
    prompt: "The regulation providing that a secrecy order revokes any previously granted foreign filing license",
    acceptedAnswers: [
      "37 CFR 5.2",
      "37 C.F.R. 5.2",
      "5.2",
      "§5.2",
      "CFR 5.2",
    ],
    canonicalAnswer: "37 CFR 5.2",
    explanation:
      "37 C.F.R. 5.2 provides that the imposition of a secrecy order revokes any foreign filing license previously granted for the application.",
    difficulty: 2,
  },
  {
    id: "sr-z5-05",
    conceptId: "sec-related-subject",
    zoneSlug: "the-sealed-chamber",
    prompt: "The regulation extending secrecy order restrictions to related subject matter in other applications",
    acceptedAnswers: [
      "37 CFR 5.3",
      "37 C.F.R. 5.3",
      "5.3",
      "§5.3",
      "CFR 5.3",
    ],
    canonicalAnswer: "37 CFR 5.3",
    explanation:
      "37 C.F.R. 5.3 extends the restrictions of a secrecy order to any related application containing subject matter within the scope of the order.",
    difficulty: 2,
  },
  {
    id: "sr-z5-06",
    conceptId: "sec-secrecy-general",
    zoneSlug: "the-sealed-chamber",
    prompt: "The MPEP section covering secrecy orders generally, including types and procedures",
    acceptedAnswers: [
      "MPEP 120",
      "120",
      "§120",
      "section 120",
      "MPEP §120",
    ],
    canonicalAnswer: "MPEP 120",
    explanation:
      "MPEP 120 covers secrecy orders generally, including the three types (Type I, II, III), their duration, and procedures for imposition and rescission.",
    difficulty: 1,
  },
  {
    id: "sr-z5-07",
    conceptId: "sec-marking-handling",
    zoneSlug: "the-sealed-chamber",
    prompt: "The MPEP section addressing security markings and physical handling of applications under secrecy orders",
    acceptedAnswers: [
      "MPEP 121",
      "121",
      "§121",
      "section 121",
      "MPEP §121",
    ],
    canonicalAnswer: "MPEP 121",
    explanation:
      "MPEP 121 addresses how applications under secrecy orders must be marked with appropriate security classifications and physically stored in locked containers by authorized personnel.",
    difficulty: 3,
  },
  {
    id: "sr-z5-08",
    conceptId: "sec-exam-secrecy",
    zoneSlug: "the-sealed-chamber",
    prompt: "The MPEP section governing examination procedures for applications under secrecy orders, including publication suspension",
    acceptedAnswers: [
      "MPEP 130",
      "130",
      "§130",
      "section 130",
      "MPEP §130",
    ],
    canonicalAnswer: "MPEP 130",
    explanation:
      "MPEP 130 governs examination under secrecy, including the suspension of publication under 35 U.S.C. 122(b) and restrictions on appeals to the Federal Circuit.",
    difficulty: 3,
  },
];
