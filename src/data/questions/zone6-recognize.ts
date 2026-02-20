import {
  TrapDetectorQuestion,
  SourceSortItem,
  PatternHighlightExcerpt,
  SpotTheErrorData,
} from "@/types";

// ============================================================
// Zone 6: The Border — Recognize Phase Content
// Trap Detectors, Source Sorts, Pattern Highlights
// ============================================================

// --- TRAP DETECTOR QUESTIONS (10) ---
// Each has 1 verbatim_correct + 3 trap-type distractors

export const ZONE6_TRAP_DETECTORS: TrapDetectorQuestion[] = [
  {
    id: "z6-trap-1",
    conceptId: "ffl-basic-rule",
    zoneSlug: "the-border",
    stem: "Under 35 USC 184, an applicant who files a US patent application may not file the same invention abroad without a foreign filing license within what time period?",
    options: [
      {
        text: "6 months from the date of US filing",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 35 USC 184 establishes the 6-month window during which a license is required.",
      },
      {
        text: "3 months from the date of US filing",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — swaps 6 months for 3 months. The correct period is 6 months.",
      },
      {
        text: "6 months from the date the license is granted",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — changes 'US filing' to 'license is granted.' The 6-month clock starts at US filing, not license grant.",
      },
      {
        text: "6 months from the date of US filing, as specified in 37 CFR 5.12",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the 6-month rule is in 35 USC 184, not 37 CFR 5.12. CFR 5.12 covers the automatic petition.",
      },
    ],
    correctIndex: 0,
    explanation:
      "The 6-month rule under 35 USC 184 bars foreign filing without a license within 6 months from the date the US application is filed.",
    citationRef: "35 USC 184",
  },
  {
    id: "z6-trap-2",
    conceptId: "ffl-basic-rule",
    zoneSlug: "the-border",
    stem: "How is a petition for a foreign filing license typically made?",
    options: [
      {
        text: "By filing a separate petition form with the Technology Center",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — there is no separate petition form. Filing a US application IS the petition.",
      },
      {
        text: "Filing a US patent application automatically constitutes a petition for a foreign filing license",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Under 37 CFR 5.12, the act of filing automatically petitions for a license.",
      },
      {
        text: "Filing a US patent application automatically constitutes a petition for a secrecy order",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — replaces 'foreign filing license' with 'secrecy order.' Filing petitions for a license, not a secrecy order.",
      },
      {
        text: "By requesting it from the examiner during the first office action",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — mixes prosecution procedure into the license process. The license is automatic at filing, not during examination.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 5.12, filing a US application automatically constitutes a petition for a foreign filing license. No separate action is needed.",
    citationRef: "37 CFR 5.12",
  },
  {
    id: "z6-trap-3",
    conceptId: "ffl-basic-rule",
    zoneSlug: "the-border",
    stem: "After the 6-month period, what can still prevent an applicant from filing abroad without a license?",
    options: [
      {
        text: "A pending office action on the US application",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — office actions are part of prosecution, not foreign filing restrictions. They do not affect the right to file abroad.",
      },
      {
        text: "Failure to pay the issue fee on the US application",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — issue fees relate to patent grant, not foreign filing authorization.",
      },
      {
        text: "A secrecy order imposed on the application under 35 USC 181",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. A secrecy order is the only thing that can override the 6-month safe harbor.",
      },
      {
        text: "A secrecy order imposed under 37 CFR 5.25",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — secrecy orders are under 35 USC 181, not 37 CFR 5.25. CFR 5.25 covers retroactive licenses.",
      },
    ],
    correctIndex: 2,
    explanation:
      "Only a secrecy order under 35 USC 181 can override the 6-month automatic authorization to file abroad.",
    citationRef: "35 USC 181 / 35 USC 184",
  },
  {
    id: "z6-trap-4",
    conceptId: "ffl-license-scope",
    zoneSlug: "the-border",
    stem: "What is the key distinction between broad-scope and narrow-scope foreign filing licenses?",
    options: [
      {
        text: "Broad scope permits amendments without changing the general nature of the invention; narrow scope restricts filing to only reviewed materials",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Broad = amendments OK if nature unchanged (5.15(a)); narrow = only reviewed materials (5.15(b)).",
      },
      {
        text: "Broad scope permits filing in any country; narrow scope limits filing to treaty countries only",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — scope refers to what material can be filed, not which countries. Neither scope type restricts countries.",
      },
      {
        text: "Broad scope permits amendments without changing the general nature of the invention; narrow scope restricts filing to only reviewed materials under 35 USC 184",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the scope distinction is in 37 CFR 5.15, not 35 USC 184. The statute addresses timing, not scope.",
      },
      {
        text: "Broad scope permits any amendments including changing the nature of the invention; narrow scope restricts filing to only reviewed materials",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — removes the critical qualifier 'without changing the general nature.' Broad scope does NOT permit unlimited changes.",
      },
    ],
    correctIndex: 0,
    explanation:
      "Under 37 CFR 5.15, broad scope (a) allows amendments that don't change the invention's general nature, while narrow scope (b) limits filing to specifically reviewed materials.",
    citationRef: "37 CFR 5.15",
  },
  {
    id: "z6-trap-5",
    conceptId: "ffl-penalties",
    zoneSlug: "the-border",
    stem: "Under 35 USC 185, what is the consequence of filing abroad without the required foreign filing license?",
    options: [
      {
        text: "The US patent application is automatically abandoned",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — the consequence is patent invalidation, not application abandonment. Abandonment is the penalty for secrecy order violation under 35 USC 182.",
      },
      {
        text: "Any resulting US patent shall be invalid",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 35 USC 185 makes the resulting patent invalid/barred.",
      },
      {
        text: "A fine of up to $10,000 and imprisonment for up to 2 years",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — these are the criminal penalties under 35 USC 186, not 185. Section 185 addresses patent validity.",
      },
      {
        text: "Any resulting US patent shall be invalid, with no exceptions",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — adds 'with no exceptions.' There IS an exception: filing through error when no secrecy order applies.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 185, a patent obtained on an application that was filed abroad without the required license is invalid (barred).",
    citationRef: "35 USC 185",
  },
  {
    id: "z6-trap-6",
    conceptId: "ffl-penalties",
    zoneSlug: "the-border",
    stem: "When is a patent NOT barred despite unauthorized foreign filing under 35 USC 185?",
    options: [
      {
        text: "When the foreign application is withdrawn within 6 months",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — there is no 6-month withdrawal cure. The exception is about error + no secrecy restriction, not timing of withdrawal.",
      },
      {
        text: "When the unauthorized filing was through error and the subject matter was not under a secrecy order",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. The error exception under 35 USC 185 requires both: filing through error AND no secrecy-restricted subject matter.",
      },
      {
        text: "When the unauthorized filing was through error, regardless of secrecy orders",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — drops the secrecy order condition. BOTH requirements must be met: error AND no secrecy restriction.",
      },
      {
        text: "When the applicant obtains a retroactive license under 35 USC 185",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — retroactive licenses are under 37 CFR 5.25, not 35 USC 185. Section 185 provides the error exception itself.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 185, the patent is not barred if the unauthorized filing was through error and the subject matter was not restricted under 35 USC 181.",
    citationRef: "35 USC 185",
  },
  {
    id: "z6-trap-7",
    conceptId: "ffl-retroactive",
    zoneSlug: "the-border",
    stem: "What must a retroactive foreign filing license petition under 37 CFR 5.25 include?",
    options: [
      {
        text: "A list of countries, filing dates, a verified statement that no secrecy order was in effect, and evidence of diligent pursuit",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. These are the four requirements of a 37 CFR 5.25 petition.",
      },
      {
        text: "A list of countries, filing dates, a copy of the foreign patent, and a petition fee",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — a copy of the foreign patent is NOT required. The requirement is a verified statement about secrecy orders + diligent pursuit.",
      },
      {
        text: "A list of countries, filing dates, a verified statement that no secrecy order was in effect, and evidence of diligent pursuit within 3 months",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — adds a fabricated '3 months' deadline. The rule requires 'diligent pursuit' but specifies no fixed time limit for the initial petition.",
      },
      {
        text: "A list of countries, filing dates, a verified statement that no secrecy order was in effect, and evidence of diligent pursuit under 35 USC 184",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — retroactive license petitions are governed by 37 CFR 5.25, not 35 USC 184.",
      },
    ],
    correctIndex: 0,
    explanation:
      "37 CFR 5.25 requires: (1) countries where filed, (2) filing dates, (3) verified statement—no secrecy order, (4) diligent pursuit after discovering error.",
    citationRef: "37 CFR 5.25",
  },
  {
    id: "z6-trap-8",
    conceptId: "ffl-penalties",
    zoneSlug: "the-border",
    stem: "What are the maximum criminal penalties for willful unauthorized foreign filing under 35 USC 186?",
    options: [
      {
        text: "A fine of up to $10,000 or imprisonment for up to 2 years, or both",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 35 USC 186 specifies $10,000 maximum fine and 2 years maximum imprisonment.",
      },
      {
        text: "A fine of up to $10,000 or imprisonment for up to 5 years, or both",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — inflates imprisonment from 2 to 5 years. The correct maximum is 2 years.",
      },
      {
        text: "A fine of up to $100,000 or imprisonment for up to 2 years, or both",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — inflates the fine from $10,000 to $100,000. The correct maximum fine is $10,000.",
      },
      {
        text: "Patent invalidation plus a fine of up to $10,000",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — combines two different statutes. Patent invalidation is 35 USC 185; criminal penalties are 35 USC 186. They are separate consequences.",
      },
    ],
    correctIndex: 0,
    explanation:
      "35 USC 186: willful violations carry a maximum fine of $10,000 and/or imprisonment for up to 2 years.",
    citationRef: "35 USC 186",
  },
  {
    id: "z6-trap-9",
    conceptId: "ffl-retroactive",
    zoneSlug: "the-border",
    stem: "If a retroactive license petition is denied, what options does the applicant have?",
    options: [
      {
        text: "Appeal directly to the Federal Circuit within 60 days",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — the Federal Circuit hears appeals from the PTAB, not retroactive license denials. The remedy is renewal or 37 CFR 1.181 petition.",
      },
      {
        text: "Renew the petition within 60 days or challenge under 37 CFR 1.181",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — the renewal period is 30 days, not 60 days.",
      },
      {
        text: "Renew the petition within 30 days or challenge under 37 CFR 1.181",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. A denied petition may be renewed within 30 days or challenged under 37 CFR 1.181.",
      },
      {
        text: "Renew the petition within 30 days or challenge under 37 CFR 5.12",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the challenge provision is 37 CFR 1.181, not 5.12. CFR 5.12 covers the automatic petition at filing.",
      },
    ],
    correctIndex: 2,
    explanation:
      "A denied retroactive license petition can be renewed within 30 days of denial or challenged via petition under 37 CFR 1.181.",
    citationRef: "37 CFR 5.25 / 37 CFR 1.181",
  },
  {
    id: "z6-trap-10",
    conceptId: "ffl-no-us-app",
    zoneSlug: "the-border",
    stem: "Is a foreign filing license required when no US application has been filed?",
    options: [
      {
        text: "No — the license requirement only applies when a US application exists",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — this is a common misconception. The license is required for inventions MADE in the US, regardless of whether a US application exists.",
      },
      {
        text: "Yes — a license is required for inventions made in the US, and legible copies of the materials must be submitted under 37 CFR 5.13",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Under 37 CFR 5.11, a license is needed for US-made inventions. Under 5.13, materials must be submitted for review.",
      },
      {
        text: "Yes — a license is required for inventions made in the US, and legible copies must be submitted under 35 USC 184",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the material submission requirement is under 37 CFR 5.13, not 35 USC 184. The statute addresses the general rule; the regulation specifies procedure.",
      },
      {
        text: "Yes — but only if the inventor is a US citizen or permanent resident",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — adds a citizenship requirement that doesn't exist. The rule applies to inventions made in the US regardless of the inventor's citizenship.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 5.11, a foreign filing license is required for inventions made in the US even without a corresponding US application. Under 37 CFR 5.13, legible copies must be submitted.",
    citationRef: "37 CFR 5.11 / 37 CFR 5.13",
  },
];

// --- SOURCE SORT ITEMS (12) ---
// 4 statutes, 4 regulations, 4 MPEP guidance

export const ZONE6_SOURCE_SORTS: SourceSortItem[] = [
  // Statutes
  {
    id: "z6-sort-1",
    zoneSlug: "the-border",
    ruleText:
      "An applicant shall not file in a foreign country without a license within 6 months from the date of filing in the United States.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 184, which establishes the core 6-month foreign filing license requirement.",
    specificRef: "35 USC 184",
  },
  {
    id: "z6-sort-2",
    zoneSlug: "the-border",
    ruleText:
      "A patent shall be invalid if the application was filed in a foreign country without the required license.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 185 establishing the patent invalidity penalty.",
    specificRef: "35 USC 185",
  },
  {
    id: "z6-sort-3",
    zoneSlug: "the-border",
    ruleText:
      "Willful violation shall be punished by a fine of up to $10,000 or imprisonment for up to 2 years, or both.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 186 establishing criminal penalties for willful violations.",
    specificRef: "35 USC 186",
  },
  {
    id: "z6-sort-4",
    zoneSlug: "the-border",
    ruleText:
      "If a secrecy order is violated, the invention shall be deemed abandoned and the inventor forfeits all claims against the United States government.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 182 establishing consequences for secrecy order violations.",
    specificRef: "35 USC 182",
  },
  // Regulations
  {
    id: "z6-sort-5",
    zoneSlug: "the-border",
    ruleText:
      "The filing of a US patent application automatically constitutes a petition for a foreign filing license.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 5.12, which implements the automatic petition mechanism.",
    specificRef: "37 CFR 5.12",
  },
  {
    id: "z6-sort-6",
    zoneSlug: "the-border",
    ruleText:
      "A license is required before filing abroad for inventions made in the United States, even when no corresponding US application has been filed.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 5.11, extending the license requirement to cases without a US filing.",
    specificRef: "37 CFR 5.11",
  },
  {
    id: "z6-sort-7",
    zoneSlug: "the-border",
    ruleText:
      "Broad scope licenses permit amendments and modifications without altering the general nature of the invention. Narrow scope licenses restrict filing to only the reviewed materials.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 5.15 defining the two license scope levels.",
    specificRef: "37 CFR 5.15",
  },
  {
    id: "z6-sort-8",
    zoneSlug: "the-border",
    ruleText:
      "A petition for a retroactive license must include a listing of each foreign country in which the unlicensed material was filed, the dates of filing, and a verified statement that the subject matter was not under a secrecy order.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 5.25 detailing the requirements for retroactive license petitions.",
    specificRef: "37 CFR 5.25",
  },
  // MPEP guidance
  {
    id: "z6-sort-9",
    zoneSlug: "the-border",
    ruleText:
      "Security screening is typically completed and licenses granted within approximately 3 business days when no national security concerns are identified.",
    correctSource: "mpep_guidance",
    explanation:
      "This is practical guidance from MPEP 140 about typical processing times — not codified in statute or regulation.",
    specificRef: "MPEP 140",
  },
  {
    id: "z6-sort-10",
    zoneSlug: "the-border",
    ruleText:
      "Practitioners should check the filing receipt carefully to confirm whether a foreign filing license has been granted before advising clients to file abroad.",
    correctSource: "mpep_guidance",
    explanation:
      "This is practical guidance from MPEP 140 advising practitioners on best practices — not a binding legal requirement.",
    specificRef: "MPEP 140",
  },
  {
    id: "z6-sort-11",
    zoneSlug: "the-border",
    ruleText:
      "When an invention involves subject matter that may be classified, applicants are advised to consult with their patent practitioner about foreign filing license requirements before filing any international applications.",
    correctSource: "mpep_guidance",
    explanation:
      "This is advisory guidance from MPEP 140 — a best practice recommendation, not a statutory or regulatory mandate.",
    specificRef: "MPEP 140",
  },
  {
    id: "z6-sort-12",
    zoneSlug: "the-border",
    ruleText:
      "In practice, most applications receive a broad-scope license automatically with the filing receipt, and only applications flagged during defense agency review receive narrow-scope licenses.",
    correctSource: "mpep_guidance",
    explanation:
      "This describes typical USPTO practice as noted in MPEP 140, not a legal requirement found in statute or regulation.",
    specificRef: "MPEP 140",
  },
];

// --- PATTERN HIGHLIGHT EXCERPTS (6) ---
// MPEP-style text with testable segments

export const ZONE6_PATTERN_HIGHLIGHTS: PatternHighlightExcerpt[] = [
  {
    id: "z6-ph-1",
    zoneSlug: "the-border",
    title: "The 6-Month Rule",
    mpepRef: "35 USC 184",
    instruction:
      "Tap the phrases most likely to be tested on the patent bar exam.",
    segments: [
      { text: "An applicant who files a patent application ", isTestable: false },
      { text: "shall not file in a foreign country", isTestable: true, explanation: "Key prohibition — the core of the foreign filing license requirement." },
      { text: " prior to ", isTestable: false },
      { text: "6 months", isTestable: true, explanation: "Critical time period — the most frequently tested number in this topic." },
      { text: " after the date of filing ", isTestable: false },
      { text: "unless a license", isTestable: true, explanation: "The license is the central mechanism — without it, filing abroad is barred." },
      { text: " for filing has been obtained from the Commissioner of Patents. ", isTestable: false },
      { text: "A secrecy order", isTestable: true, explanation: "Secrecy orders override the 6-month safe harbor — a frequent exam trap." },
      { text: " shall bar the grant of any foreign filing license ", isTestable: false },
      { text: "on the application to which it pertains.", isTestable: false },
    ],
  },
  {
    id: "z6-ph-2",
    zoneSlug: "the-border",
    title: "Patent Invalidation",
    mpepRef: "35 USC 185",
    instruction:
      "Identify the exam-critical phrases about patent invalidity consequences.",
    segments: [
      { text: "Notwithstanding any other provisions of law, ", isTestable: false },
      { text: "no patent shall be granted", isTestable: true, explanation: "The consequence is complete patent bar — not partial invalidation." },
      { text: " on any application ", isTestable: false },
      { text: "in which the inventions were made in the United States", isTestable: false },
      { text: " by any person who has ", isTestable: false },
      { text: "filed or caused to be filed in any foreign country", isTestable: true, explanation: "'Caused to be filed' extends liability beyond direct filing — agents and attorneys can trigger this." },
      { text: " an application for patent ", isTestable: false },
      { text: "without a license as required by this title", isTestable: true, explanation: "The specific trigger — filing without the required license." },
      { text: ", unless ", isTestable: false },
      { text: "the failure to obtain such license was through error", isTestable: true, explanation: "The error exception is a critical exam topic — it's the only way to avoid the bar." },
      { text: " and the patent does not disclose subject matter ", isTestable: false },
      { text: "within the scope of section 181.", isTestable: true, explanation: "Both conditions must be met: error AND no secrecy-restricted subject matter." },
    ],
  },
  {
    id: "z6-ph-3",
    zoneSlug: "the-border",
    title: "Criminal Penalties",
    mpepRef: "35 USC 186",
    instruction:
      "Highlight the specific penalty amounts and conditions examiners test.",
    segments: [
      { text: "Whoever, ", isTestable: false },
      { text: "willfully", isTestable: true, explanation: "The mens rea requirement — criminal penalties only apply to willful violations, not mere error." },
      { text: " files or causes to be filed in any foreign country an application for patent ", isTestable: false },
      { text: "in violation of the provisions of this title", isTestable: false },
      { text: " shall, upon conviction, be fined ", isTestable: false },
      { text: "not more than $10,000", isTestable: true, explanation: "The maximum fine amount — frequently tested alongside the imprisonment term." },
      { text: ", or ", isTestable: false },
      { text: "imprisoned for not more than 2 years", isTestable: true, explanation: "Maximum imprisonment — exam frequently tests whether it's 1, 2, or 5 years." },
      { text: ", or both.", isTestable: false },
    ],
  },
  {
    id: "z6-ph-4",
    zoneSlug: "the-border",
    title: "Retroactive License Petition",
    mpepRef: "37 CFR 5.25",
    instruction:
      "Tap the requirements for a valid retroactive license petition.",
    segments: [
      { text: "A petition for a retroactive license must be accompanied by ", isTestable: false },
      { text: "a listing of each foreign country", isTestable: true, explanation: "Required element — USPTO needs to know the scope of the unauthorized filing." },
      { text: " in which the unlicensed subject matter was filed, ", isTestable: false },
      { text: "the dates of filing", isTestable: true, explanation: "Required element — establishes the timeline of the violation." },
      { text: ", and ", isTestable: false },
      { text: "a verified statement that the subject matter was not under a secrecy order", isTestable: true, explanation: "Required element — confirms no national security breach occurred." },
      { text: " at the time of filing, together with ", isTestable: false },
      { text: "a showing that the failure to obtain a license was through error", isTestable: true, explanation: "The 'error' requirement — intentional violations cannot be cured retroactively." },
      { text: " and that the petition was filed ", isTestable: false },
      { text: "with due diligence after discovery", isTestable: true, explanation: "Diligent pursuit requirement — the petitioner must act promptly after learning of the error." },
      { text: " of the proscribed foreign filing.", isTestable: false },
    ],
  },
  {
    id: "z6-ph-5",
    zoneSlug: "the-border",
    title: "License Scope Rules",
    mpepRef: "37 CFR 5.15",
    instruction:
      "Identify the key distinctions between broad and narrow scope licenses.",
    segments: [
      { text: "A ", isTestable: false },
      { text: "broad scope license", isTestable: true, explanation: "One of two license types — the more common and permissive kind." },
      { text: " under paragraph (a) permits the filing of applications abroad on the subject matter of the US application, ", isTestable: false },
      { text: "including amendments, modifications, and supplements", isTestable: true, explanation: "Key permission — broad scope allows changes to the foreign application." },
      { text: " thereto, provided that ", isTestable: false },
      { text: "the general nature of the invention is not changed", isTestable: true, explanation: "Critical limitation — even broad scope has this boundary." },
      { text: ". A ", isTestable: false },
      { text: "narrow scope license", isTestable: true, explanation: "The more restrictive license type — typically for defense-sensitive applications." },
      { text: " under paragraph (b) permits the filing abroad only on ", isTestable: false },
      { text: "the specific subject matter that was reviewed by defense agencies", isTestable: true, explanation: "Key restriction — no modifications beyond what was reviewed." },
      { text: " during the security screening process.", isTestable: false },
    ],
  },
  {
    id: "z6-ph-6",
    zoneSlug: "the-border",
    title: "License Without US Application",
    mpepRef: "37 CFR 5.11 / 5.13",
    instruction:
      "Highlight the requirements for obtaining a license when no US application exists.",
    segments: [
      { text: "A ", isTestable: false },
      { text: "foreign filing license is required", isTestable: true, explanation: "Key rule — the license requirement exists even without a US application." },
      { text: " before filing abroad on ", isTestable: false },
      { text: "inventions made in the United States", isTestable: true, explanation: "The geographic trigger — 'made in the US' is the key test, not citizenship." },
      { text: ", regardless of whether a US application has been filed. ", isTestable: false },
      { text: "When no US application has been filed, ", isTestable: false },
      { text: "the petitioner must submit legible copies", isTestable: true, explanation: "Required submission — materials must be provided for security review since there is no application on file." },
      { text: " of the material for which licensing is sought. ", isTestable: false },
      { text: "The material will be reviewed by defense agencies", isTestable: false },
      { text: " to determine if a license can be granted.", isTestable: false },
    ],
  },
];

// --- SPOT THE ERROR ITEMS (4) ---
// Passages with deliberate errors in legal facts

export const ZONE6_SPOT_ERRORS: SpotTheErrorData[] = [
  {
    id: "z6-spot-1",
    zoneSlug: "the-border",
    title: "Foreign Filing License Timeline Errors",
    mpepRef: "MPEP 140 / 35 USC 184",
    instruction: "Read the passage and tap any segments that contain errors.",
    segments: [
      {
        text: "Under 35 USC 184, an applicant who files a patent application in the United States",
        hasError: false,
      },
      {
        text: "may not file the same invention in a foreign country within 3 months from the date of US filing",
        hasError: true,
        correctedText: "may not file the same invention in a foreign country within 6 months from the date of US filing",
        explanation: "The foreign filing bar under 35 USC 184 is 6 months from the date of US filing, not 3 months. This is one of the most frequently tested time periods on the patent bar.",
      },
      {
        text: "unless a foreign filing license has been obtained from the Commissioner of Patents.",
        hasError: false,
      },
      {
        text: "Under 37 CFR 5.12, the filing of a US patent application automatically constitutes a petition for a foreign filing license.",
        hasError: false,
      },
      {
        text: "Security screening is typically completed within approximately 3 business days when no national security concerns are identified.",
        hasError: false,
      },
      {
        text: "After the 6-month period, the applicant is free to file abroad without restriction,",
        hasError: false,
      },
      {
        text: "unless a secrecy order has been imposed on the application under 35 USC 181, which bars foreign filing regardless of timing.",
        hasError: false,
      },
    ],
  },
  {
    id: "z6-spot-2",
    zoneSlug: "the-border",
    title: "Patent Invalidation and Error Exception Errors",
    mpepRef: "MPEP 140 / 35 USC 185",
    instruction: "Read the passage and tap any segments that contain errors.",
    segments: [
      {
        text: "Under 35 USC 185, filing abroad without the required foreign filing license carries significant consequences.",
        hasError: false,
      },
      {
        text: "The US patent application is automatically abandoned",
        hasError: true,
        correctedText: "Any resulting US patent shall be invalid",
        explanation: "Under 35 USC 185, the consequence is patent invalidity (the patent is barred), not application abandonment. Application abandonment is the penalty for secrecy order violations under 35 USC 182, not for unauthorized foreign filing.",
      },
      {
        text: "if the applicant filed or caused to be filed in any foreign country without the required license.",
        hasError: false,
      },
      {
        text: "However, there is an exception: the patent is not barred if the failure to obtain the license was through error",
        hasError: false,
      },
      {
        text: "regardless of whether the subject matter was under a secrecy order.",
        hasError: true,
        correctedText: "and the subject matter was not under a secrecy order within the scope of section 181.",
        explanation: "The error exception under 35 USC 185 requires BOTH conditions: (1) the filing was through error AND (2) the subject matter was not under a secrecy order. If the subject matter was under a secrecy order, the error exception does not apply.",
      },
      {
        text: "This exception reflects the statutory intent to distinguish between willful violations and inadvertent mistakes.",
        hasError: false,
      },
      {
        text: "The criminal penalties under 35 USC 186 also require willful conduct, with a maximum fine of $10,000 and/or imprisonment for up to 2 years.",
        hasError: false,
      },
    ],
  },
  {
    id: "z6-spot-3",
    zoneSlug: "the-border",
    title: "License Scope and Retroactive License Errors",
    mpepRef: "MPEP 140 / 37 CFR 5.15 / 37 CFR 5.25",
    instruction: "Read the passage and tap any segments that contain errors.",
    segments: [
      {
        text: "Foreign filing licenses come in two scope levels under 37 CFR 5.15.",
        hasError: false,
      },
      {
        text: "A broad scope license permits the filing of applications abroad including amendments and modifications,",
        hasError: false,
      },
      {
        text: "provided that the general nature of the invention is not changed.",
        hasError: false,
      },
      {
        text: "A narrow scope license permits the filing abroad only on the specific subject matter reviewed by defense agencies.",
        hasError: false,
      },
      {
        text: "If an applicant discovers that foreign filing occurred without the required license, a retroactive license may be sought under 35 USC 184.",
        hasError: true,
        correctedText: "If an applicant discovers that foreign filing occurred without the required license, a retroactive license may be sought under 37 CFR 5.25.",
        explanation: "Retroactive foreign filing license petitions are governed by 37 CFR 5.25, not 35 USC 184. The statute (35 USC 184) addresses the general foreign filing license requirement and timing, while the regulation (37 CFR 5.25) provides the specific procedure for obtaining a retroactive license.",
      },
      {
        text: "The petition must include a listing of each foreign country where filing occurred, the dates of filing, a verified statement that no secrecy order was in effect, and evidence of diligent pursuit after discovering the error.",
        hasError: false,
      },
      {
        text: "If a retroactive license petition is denied, the applicant may renew the petition within 60 days or challenge the denial under 37 CFR 1.181.",
        hasError: true,
        correctedText: "If a retroactive license petition is denied, the applicant may renew the petition within 30 days or challenge the denial under 37 CFR 1.181.",
        explanation: "The renewal period for a denied retroactive license petition is 30 days, not 60 days.",
      },
    ],
  },
  {
    id: "z6-spot-4",
    zoneSlug: "the-border",
    title: "Foreign Filing Without US Application Errors",
    mpepRef: "MPEP 140 / 37 CFR 5.11 / 37 CFR 5.13",
    instruction: "Read the passage and tap any segments that contain errors.",
    segments: [
      {
        text: "A common misconception is that a foreign filing license is only required when a US patent application has been filed.",
        hasError: false,
      },
      {
        text: "In fact, under 37 CFR 5.11, a foreign filing license is required before filing abroad for any invention made in the United States,",
        hasError: false,
      },
      {
        text: "but only if the inventor is a US citizen or permanent resident.",
        hasError: true,
        correctedText: "regardless of the inventor's citizenship or residency status.",
        explanation: "The foreign filing license requirement applies to inventions made in the United States regardless of the inventor's citizenship. The geographic trigger is where the invention was made, not the inventor's nationality.",
      },
      {
        text: "When no US application exists, the petitioner must submit legible copies of the material for which licensing is sought under 37 CFR 5.13.",
        hasError: false,
      },
      {
        text: "The material is reviewed by defense agencies to determine if a license can be granted.",
        hasError: false,
      },
      {
        text: "Broad scope licenses are commonly granted with the filing receipt, and only applications flagged during defense agency review typically receive narrow scope licenses.",
        hasError: false,
      },
      {
        text: "Practitioners should check the filing receipt carefully to confirm whether a foreign filing license has been granted before advising clients to file abroad.",
        hasError: false,
      },
    ],
  },
];
