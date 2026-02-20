import { OpenBookQuestion, SpeedrunPrompt } from "@study-game/engine";

// ============================================================
// OPEN-BOOK QUESTIONS (10)
// ============================================================

export const ZONE6_OPEN_BOOK: OpenBookQuestion[] = [
  // Group 1: Basic rule & automatic petition (§140.01) — 3 questions
  {
    id: "ob-z6-01",
    conceptId: "ffl-basic-rule",
    zoneSlug: "the-border",
    stem: "Under 35 U.S.C. 184, what is the minimum waiting period before an applicant can file a patent application in a foreign country after filing in the United States?",
    options: [
      { text: "3 months from the date of filing" },
      { text: "6 months from the date of filing" },
      { text: "12 months from the date of filing" },
      { text: "No waiting period if a license is obtained" },
    ],
    correctIndex: 1,
    explanation:
      "35 U.S.C. 184 establishes that an applicant shall not file in a foreign country before 6 months after filing in the United States, unless authorized by a license from the Commissioner.",
    citationRef: "35 USC 184",
    targetSectionId: "mpep-140-01",
    searchHint: "6 months",
  },
  {
    id: "ob-z6-02",
    conceptId: "ffl-auto-license",
    zoneSlug: "the-border",
    stem: "According to 37 C.F.R. 5.12, how is a foreign filing license typically granted to applicants?",
    options: [
      { text: "Through a separate petition filed after the application is published" },
      { text: "Automatically with the filing receipt, unless a notation indicates otherwise" },
      { text: "By a letter from the Secretary of Commerce" },
      { text: "Only after a national security review lasting 90 days" },
    ],
    correctIndex: 1,
    explanation:
      "37 C.F.R. 5.12 provides that the filing receipt serves as an automatic foreign filing license, unless the receipt notes that a license has not been granted.",
    citationRef: "37 CFR 5.12",
    targetSectionId: "mpep-140-01",
    searchHint: "filing receipt",
  },
  {
    id: "ob-z6-03",
    conceptId: "ffl-6month-start",
    zoneSlug: "the-border",
    stem: "When does the 6-month foreign filing bar under 35 U.S.C. 184 begin?",
    options: [
      { text: "On the date the inventor first conceives the invention" },
      { text: "On the date the U.S. application is filed" },
      { text: "On the date the filing receipt is mailed" },
      { text: "On the date the application is published" },
    ],
    correctIndex: 1,
    explanation:
      "The 6-month foreign filing bar under 35 U.S.C. 184 begins on the date the U.S. application is filed.",
    citationRef: "35 USC 184",
    targetSectionId: "mpep-140-01",
    searchHint: "date of filing",
  },

  // Group 2: License scope (§140.02) — 2 questions
  {
    id: "ob-z6-04",
    conceptId: "ffl-broad-license",
    zoneSlug: "the-border",
    stem: "What is the scope of a broad foreign filing license as defined in 37 C.F.R. 5.15(a)?",
    options: [
      { text: "Filing in up to 5 designated countries" },
      { text: "Filing only in countries with reciprocal patent treaties" },
      { text: "Filing in any foreign country on the subject matter of the U.S. application" },
      { text: "Filing only for non-military inventions" },
    ],
    correctIndex: 2,
    explanation:
      "A broad license under 37 C.F.R. 5.15(a) permits filing patent applications in any foreign country on the subject matter of the U.S. application. This is the default type granted with the filing receipt.",
    citationRef: "37 CFR 5.15(a)",
    targetSectionId: "mpep-140-02",
    searchHint: "broad license",
  },
  {
    id: "ob-z6-05",
    conceptId: "ffl-narrow-license",
    zoneSlug: "the-border",
    stem: "What happens if an applicant files in a country not covered by their narrow foreign filing license under 37 C.F.R. 5.15(b)?",
    options: [
      { text: "The filing is automatically converted to a PCT application" },
      { text: "It is treated the same as filing without a license, carrying the same penalties" },
      { text: "The applicant receives a 30-day grace period to obtain an additional license" },
      { text: "The narrow license is automatically upgraded to a broad license" },
    ],
    correctIndex: 1,
    explanation:
      "Filing beyond the scope of a granted license is treated the same as filing without a license and carries the same penalties under 35 U.S.C. 185.",
    citationRef: "37 CFR 5.15(b)",
    targetSectionId: "mpep-140-02",
    searchHint: "scope of the license",
  },

  // Group 3: Retroactive license (§140.05) — 2 questions
  {
    id: "ob-z6-06",
    conceptId: "ffl-retro-petition",
    zoneSlug: "the-border",
    stem: "Under 37 C.F.R. 5.25, which of the following must be included in a petition for a retroactive foreign filing license?",
    options: [
      { text: "A copy of the foreign patent as issued" },
      { text: "A verified statement that the subject matter was not under a secrecy order at the time of foreign filing" },
      { text: "Written approval from the foreign patent office" },
      { text: "A declaration that no patent will issue from the foreign filing" },
    ],
    correctIndex: 1,
    explanation:
      "A petition under 37 C.F.R. 5.25 must include a verified statement containing an averment that the subject matter was not under a secrecy order at the time of foreign filing.",
    citationRef: "37 CFR 5.25",
    targetSectionId: "mpep-140-05",
    searchHint: "retroactive license",
  },
  {
    id: "ob-z6-07",
    conceptId: "ffl-retro-criminal",
    zoneSlug: "the-border",
    stem: "Does the grant of a retroactive foreign filing license under 37 C.F.R. 5.25 excuse criminal liability for willful violations?",
    options: [
      { text: "Yes, it fully excuses all liability" },
      { text: "Yes, but only if the petition is filed within 6 months of the violation" },
      { text: "No, a retroactive license does not excuse criminal liability under 35 U.S.C. 186" },
      { text: "No, but it reduces the maximum penalty by half" },
    ],
    correctIndex: 2,
    explanation:
      "A retroactive license does not excuse criminal liability under 35 U.S.C. 186 for willful violations. It can only cure the defect that would invalidate the patent under 35 U.S.C. 185.",
    citationRef: "37 CFR 5.25 / 35 USC 186",
    targetSectionId: "mpep-140-05",
    searchHint: "criminal liability",
  },

  // Group 4: Penalties (§140.04) — 2 questions
  {
    id: "ob-z6-08",
    conceptId: "ffl-patent-invalidity",
    zoneSlug: "the-border",
    stem: "Under 35 U.S.C. 185, what is the consequence for a U.S. patent when the underlying invention was filed in a foreign country without the required license?",
    options: [
      { text: "The patent claims are narrowed to exclude the foreign-filed subject matter" },
      { text: "The patent is placed under a secrecy order" },
      { text: "The U.S. patent shall be invalid" },
      { text: "The patent term is reduced by 6 months" },
    ],
    correctIndex: 2,
    explanation:
      "Under 35 U.S.C. 185, any U.S. patent obtained on an invention for which an application was filed in a foreign country without the required license shall be invalid.",
    citationRef: "35 USC 185",
    targetSectionId: "mpep-140-04",
    searchHint: "patent invalidity",
  },
  {
    id: "ob-z6-09",
    conceptId: "ffl-criminal-penalty",
    zoneSlug: "the-border",
    stem: "What are the maximum criminal penalties under 35 U.S.C. 186 for willfully filing a patent application in a foreign country without the required license?",
    options: [
      { text: "A fine of not more than $5,000 or imprisonment for not more than 1 year" },
      { text: "A fine of not more than $10,000 or imprisonment for not more than 2 years, or both" },
      { text: "A fine of not more than $50,000 or imprisonment for not more than 5 years" },
      { text: "Only civil penalties, no criminal penalties apply" },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 U.S.C. 186, any person who willfully files abroad without the required license may be fined not more than $10,000, or imprisoned for not more than 2 years, or both.",
    citationRef: "35 USC 186",
    targetSectionId: "mpep-140-04",
    searchHint: "criminal penalties",
  },

  // Group 5: No US application filed (§140.06) — 1 question
  {
    id: "ob-z6-10",
    conceptId: "ffl-no-us-app",
    zoneSlug: "the-border",
    stem: "If an inventor wishes to file directly in a foreign country without first filing a U.S. application for an invention made in the United States, what must they do?",
    options: [
      { text: "They can file freely abroad since there is no U.S. application to trigger 35 U.S.C. 184" },
      { text: "They must wait 12 months before filing abroad" },
      { text: "They must file a petition under 37 C.F.R. 5.13 to obtain a foreign filing license" },
      { text: "They must obtain a license from the State Department" },
    ],
    correctIndex: 2,
    explanation:
      "Under 37 C.F.R. 5.11, a license is still required if the invention was made in the United States, even with no U.S. filing. The petition is filed under 37 C.F.R. 5.13.",
    citationRef: "37 CFR 5.11 / 5.13",
    targetSectionId: "mpep-140-06",
    searchHint: "without a U.S. application",
  },
];

// ============================================================
// SPEEDRUN PROMPTS (8)
// ============================================================

export const ZONE6_SPEEDRUN: SpeedrunPrompt[] = [
  {
    id: "sr-z6-01",
    conceptId: "ffl-basic-rule",
    zoneSlug: "the-border",
    prompt: "The statute establishing the 6-month foreign filing bar",
    acceptedAnswers: [
      "35 USC 184",
      "35 U.S.C. 184",
      "184",
      "§184",
      "section 184",
    ],
    canonicalAnswer: "35 USC 184",
    explanation:
      "35 U.S.C. 184 establishes that applicants must wait 6 months before filing abroad unless a license is obtained.",
    difficulty: 1,
  },
  {
    id: "sr-z6-02",
    conceptId: "ffl-auto-license",
    zoneSlug: "the-border",
    prompt: "The regulation providing for automatic foreign filing license at filing",
    acceptedAnswers: [
      "37 CFR 5.12",
      "37 C.F.R. 5.12",
      "5.12",
      "§5.12",
      "CFR 5.12",
    ],
    canonicalAnswer: "37 CFR 5.12",
    explanation:
      "37 C.F.R. 5.12 provides that the filing receipt serves as an automatic foreign filing license.",
    difficulty: 1,
  },
  {
    id: "sr-z6-03",
    conceptId: "ffl-retro-license",
    zoneSlug: "the-border",
    prompt: "The regulation covering retroactive foreign filing license petitions",
    acceptedAnswers: [
      "37 CFR 5.25",
      "37 C.F.R. 5.25",
      "5.25",
      "§5.25",
      "CFR 5.25",
    ],
    canonicalAnswer: "37 CFR 5.25",
    explanation:
      "37 C.F.R. 5.25 governs petitions for retroactive foreign filing licenses when filing was made without authorization.",
    difficulty: 2,
  },
  {
    id: "sr-z6-04",
    conceptId: "ffl-secrecy-order",
    zoneSlug: "the-border",
    prompt: "The statute authorizing secrecy orders on patent applications for national security",
    acceptedAnswers: [
      "35 USC 181",
      "35 U.S.C. 181",
      "181",
      "§181",
      "section 181",
    ],
    canonicalAnswer: "35 USC 181",
    explanation:
      "35 U.S.C. 181 authorizes the Commissioner to impose secrecy orders on inventions detrimental to national security.",
    difficulty: 1,
  },
  {
    id: "sr-z6-05",
    conceptId: "ffl-patent-invalidity",
    zoneSlug: "the-border",
    prompt: "The statute making U.S. patents invalid when filed abroad without a license",
    acceptedAnswers: [
      "35 USC 185",
      "35 U.S.C. 185",
      "185",
      "§185",
      "section 185",
    ],
    canonicalAnswer: "35 USC 185",
    explanation:
      "35 U.S.C. 185 renders any U.S. patent invalid if the invention was filed in a foreign country without the required license.",
    difficulty: 2,
  },
  {
    id: "sr-z6-06",
    conceptId: "ffl-criminal-penalty",
    zoneSlug: "the-border",
    prompt: "The statute imposing criminal penalties for willful unauthorized foreign filing",
    acceptedAnswers: [
      "35 USC 186",
      "35 U.S.C. 186",
      "186",
      "§186",
      "section 186",
    ],
    canonicalAnswer: "35 USC 186",
    explanation:
      "35 U.S.C. 186 imposes fines up to $10,000 and/or imprisonment up to 2 years for willful violations.",
    difficulty: 2,
  },
  {
    id: "sr-z6-07",
    conceptId: "ffl-no-us-app",
    zoneSlug: "the-border",
    prompt: "The regulation for petitioning for a license when no U.S. application has been filed",
    acceptedAnswers: [
      "37 CFR 5.13",
      "37 C.F.R. 5.13",
      "5.13",
      "§5.13",
      "CFR 5.13",
    ],
    canonicalAnswer: "37 CFR 5.13",
    explanation:
      "37 C.F.R. 5.13 provides the petition path for obtaining a foreign filing license when no U.S. application will be filed.",
    difficulty: 3,
  },
  {
    id: "sr-z6-08",
    conceptId: "ffl-license-scope",
    zoneSlug: "the-border",
    prompt: "The regulation defining broad and narrow foreign filing license scope",
    acceptedAnswers: [
      "37 CFR 5.15",
      "37 C.F.R. 5.15",
      "5.15",
      "§5.15",
      "CFR 5.15",
    ],
    canonicalAnswer: "37 CFR 5.15",
    explanation:
      "37 C.F.R. 5.15 defines broad licenses (5.15(a)) and narrow licenses (5.15(b)) for foreign filing.",
    difficulty: 3,
  },
];
