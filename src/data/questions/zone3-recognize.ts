import {
  TrapDetectorQuestion,
  SourceSortItem,
  PatternHighlightExcerpt,
} from "@/types";

// ============================================================
// Zone 3: The Gatekeepers — Recognize Phase Content
// Trap Detectors, Source Sorts, Pattern Highlights
// ============================================================

// --- TRAP DETECTOR QUESTIONS (10) ---
// Each has 1 verbatim_correct + 3 trap-type distractors

export const ZONE3_TRAP_DETECTORS: TrapDetectorQuestion[] = [
  {
    id: "z3-trap-1",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    stem: "Under 37 CFR 11.116, what is the obligation of USPTO employees regarding suspended or excluded practitioners?",
    options: [
      {
        text: "They shall not communicate about pending patent applications with suspended or excluded practitioners",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 37 CFR 11.116 establishes a complete communication ban regarding pending applications.",
      },
      {
        text: "They shall not communicate about pending patent applications with suspended practitioners, unless the practitioner is a co-inventor",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — adds a co-inventor exception that does not exist in the rule. The ban applies regardless of inventor status.",
      },
      {
        text: "They may communicate about pending patent applications with suspended practitioners only in writing",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — changes 'shall not' to 'may ... only in writing.' The rule is a complete ban, not a format restriction.",
      },
      {
        text: "They shall not communicate about granted patents with suspended or excluded practitioners",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — changes 'pending patent applications' to 'granted patents.' The rule specifically covers pending applications.",
      },
    ],
    correctIndex: 0,
    explanation:
      "37 CFR 11.116 prohibits USPTO employees from communicating about pending patent applications with suspended or excluded practitioners.",
    citationRef: "37 CFR 11.116",
  },
  {
    id: "z3-trap-2",
    conceptId: "gate-exception",
    zoneSlug: "the-gatekeepers",
    stem: "Under what circumstance may a suspended practitioner file a patent application with the USPTO?",
    options: [
      {
        text: "When they pay a reinstatement fee to the OED",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — there is no reinstatement fee that restores filing privileges. The exception is based on inventor status, not payment.",
      },
      {
        text: "When they are the actual inventor or applicant and file pro se on their own behalf",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. A suspended practitioner who is the actual inventor/applicant retains the right to file pro se.",
      },
      {
        text: "When they are the actual inventor or applicant and file through a registered practitioner",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — changes 'pro se' to 'through a registered practitioner.' The exception allows pro se filing, not filing through another attorney.",
      },
      {
        text: "When they are the actual inventor or applicant and file pro se, as provided in 37 CFR 3.73",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — 37 CFR 3.73 covers assignee statements, not the pro se inventor exception. The exception is in MPEP 105.",
      },
    ],
    correctIndex: 1,
    explanation:
      "A suspended or excluded practitioner may file a patent application only when they are the actual inventor or applicant and proceed pro se.",
    citationRef: "MPEP 105",
  },
  {
    id: "z3-trap-3",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    stem: "How does an assignee establish the right to take action in a patent application under 37 CFR 3.73?",
    options: [
      {
        text: "By filing a statement under 37 CFR 3.73(c) setting forth the basis for entitlement, supported by documentary evidence of the chain of title",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 37 CFR 3.73(c) requires a statement with documentary evidence of the chain of title.",
      },
      {
        text: "By filing a statement under 37 CFR 3.73(c) setting forth the basis for entitlement, without needing supporting evidence",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — drops the documentary evidence requirement. The statement alone is insufficient; evidence of the chain of title is required.",
      },
      {
        text: "By recording the assignment with the USPTO and filing a petition under 37 CFR 1.181",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — recording the assignment is separate from establishing the right to take action. The correct mechanism is 37 CFR 3.73(c), not 1.181.",
      },
      {
        text: "By filing a statement under 37 CFR 3.71 setting forth the basis for entitlement within 3 months of the assignment",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — adds a fabricated 3-month deadline. There is no specific time limit for filing the 3.73(c) statement. Also swaps 3.73 with 3.71.",
      },
    ],
    correctIndex: 0,
    explanation:
      "Under 37 CFR 3.73(c), the assignee must file a statement of entitlement supported by documentary evidence establishing the chain of title from the inventor.",
    citationRef: "37 CFR 3.73(c)",
  },
  {
    id: "z3-trap-4",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    stem: "What authority does an assignee of the entire interest have regarding the power of attorney in a patent application?",
    options: [
      {
        text: "The assignee may revoke the existing power of attorney and appoint a new registered practitioner only with inventor consent",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — adds an inventor consent requirement that does not exist. An assignee of the entire interest may act independently.",
      },
      {
        text: "The assignee may revoke the existing power of attorney but cannot appoint a new practitioner",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — the assignee can both revoke AND appoint. This answer removes the appointment authority.",
      },
      {
        text: "The assignee may revoke the existing power of attorney and appoint a new registered practitioner",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. An assignee of the entire interest has full authority to revoke and replace the power of attorney.",
      },
      {
        text: "The assignee may request that the examiner revoke the power of attorney",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — the assignee acts directly, not through the examiner. Examiners do not manage power of attorney changes.",
      },
    ],
    correctIndex: 2,
    explanation:
      "An assignee who holds the entire right, title, and interest may revoke the existing power of attorney and appoint a new registered practitioner.",
    citationRef: "37 CFR 3.71; MPEP 106",
  },
  {
    id: "z3-trap-5",
    conceptId: "gate-partial-interest",
    zoneSlug: "the-gatekeepers",
    stem: "What rights does a partial assignee have in a patent application?",
    options: [
      {
        text: "A partial assignee may inspect the application file but may not direct prosecution or amend claims",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Partial assignees have inspection rights but cannot direct prosecution.",
      },
      {
        text: "A partial assignee may inspect the application file and may direct prosecution on the claims they own",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — partial ownership does not grant prosecution rights over specific claims. Claims are not divided among assignees.",
      },
      {
        text: "A partial assignee has no rights in the application and must obtain full assignment first",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — partial assignees do have inspection rights. They are not completely without rights.",
      },
      {
        text: "A partial assignee may inspect the application file and direct prosecution after 6 months",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — adds a fabricated 6-month waiting period after which prosecution rights vest. No such timeline exists.",
      },
    ],
    correctIndex: 0,
    explanation:
      "Partial assignees may inspect the application file but may not direct prosecution, amend claims, or make other substantive decisions.",
    citationRef: "37 CFR 3.71",
  },
  {
    id: "z3-trap-6",
    conceptId: "gate-written-consent",
    zoneSlug: "the-gatekeepers",
    stem: "What is required for a third party to access an unpublished patent application under MPEP 106?",
    options: [
      {
        text: "A Freedom of Information Act (FOIA) request filed with the USPTO",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — FOIA does not override the confidentiality of unpublished applications. Written consent from the applicant/assignee is required.",
      },
      {
        text: "Written authorization from the applicant or assignee",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. MPEP 106 requires written authorization from the applicant or assignee for third-party access to unpublished applications.",
      },
      {
        text: "Written authorization from the applicant or assignee, filed within 30 days of the access request",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — adds a fabricated 30-day deadline. There is no specific time limit tied to the access request.",
      },
      {
        text: "Oral authorization from the applicant or assignee given to the examiner",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — changes 'written' to 'oral.' The authorization must be in writing; oral consent is insufficient.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under MPEP 106, written authorization from the applicant or assignee is required for any third party to access an unpublished patent application.",
    citationRef: "MPEP 106",
  },
  {
    id: "z3-trap-7",
    conceptId: "gate-oed-role",
    zoneSlug: "the-gatekeepers",
    stem: "What disciplinary sanctions can the OED impose on a practitioner found to have engaged in misconduct?",
    options: [
      {
        text: "Reprimand, probation, suspension, or exclusion from practice before the USPTO",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. These are the four levels of OED disciplinary sanctions.",
      },
      {
        text: "Reprimand, probation, suspension, exclusion, or criminal prosecution",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — criminal prosecution is not an OED sanction. The OED may refer matters to law enforcement, but prosecution is a judicial function.",
      },
      {
        text: "Suspension or exclusion only — no lesser sanctions are available",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — the OED has a range of sanctions including reprimand and probation. It is not limited to only suspension and exclusion.",
      },
      {
        text: "Reprimand, probation, suspension, or exclusion from practice before the USPTO under 35 USC 186",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — 35 USC 186 addresses criminal penalties for foreign filing violations, not OED discipline. OED authority comes from 37 CFR Part 11.",
      },
    ],
    correctIndex: 0,
    explanation:
      "The OED may impose reprimand, probation, suspension, or exclusion. These are administrative sanctions; criminal prosecution is handled by other authorities.",
    citationRef: "37 CFR Part 11",
  },
  {
    id: "z3-trap-8",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    stem: "Who maintains the roster of suspended and excluded practitioners?",
    options: [
      {
        text: "The Patent Trial and Appeal Board (PTAB)",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — the PTAB handles appeals and trial proceedings, not practitioner discipline records.",
      },
      {
        text: "The Office of Enrollment and Discipline (OED), and the roster is published for public access",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. The OED maintains and publishes the roster of suspended, excluded, and resigned practitioners.",
      },
      {
        text: "The Office of Enrollment and Discipline (OED), but the roster is confidential and available only to USPTO employees",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — changes 'published' to 'confidential.' The roster is publicly available, not restricted to USPTO employees.",
      },
      {
        text: "The Commissioner for Patents, who updates the roster annually",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — adds a fabricated annual update schedule. The roster is maintained by OED and updated as disciplinary actions occur.",
      },
    ],
    correctIndex: 1,
    explanation:
      "The OED maintains and publishes the roster of suspended, excluded, and resigned practitioners. The roster is publicly available.",
    citationRef: "MPEP 105",
  },
  {
    id: "z3-trap-9",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    stem: "When an assignee controls prosecution of a patent application, what rights does the inventor retain?",
    options: [
      {
        text: "The inventor retains no rights once assignment is complete",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — inventors retain certain rights even after assignment. They are not completely excluded.",
      },
      {
        text: "The right to receive notice of all USPTO actions and the right to inspect the application file",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Even after assignment, inventors retain the right to notice of USPTO actions and file inspection.",
      },
      {
        text: "The right to receive notice of all USPTO actions, inspect the file, and veto claim amendments",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — adds a 'veto claim amendments' right that does not exist. The inventor has notice and inspection rights, not prosecution control.",
      },
      {
        text: "The right to receive notice of all USPTO actions and the right to inspect the file under 37 CFR 5.25",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — 37 CFR 5.25 covers retroactive foreign filing licenses, not inventor rights in assigned applications.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Even when an assignee controls prosecution, the inventor retains the right to receive notice of USPTO actions and to inspect the application file.",
    citationRef: "MPEP 106; 37 CFR 3.71",
  },
  {
    id: "z3-trap-10",
    conceptId: "gate-partial-interest",
    zoneSlug: "the-gatekeepers",
    stem: "When multiple partial assignees exist, what is required for them to take action in a patent application?",
    options: [
      {
        text: "A majority vote among the partial assignees",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — patent law does not use majority voting for prosecution decisions. Unanimous action is required.",
      },
      {
        text: "All partial assignees together with the inventor must join to take action",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. All partial assignees and the inventor must join together to take any action.",
      },
      {
        text: "All partial assignees must join, but the inventor's consent is not required",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — drops the inventor requirement. The inventor must also join when there are only partial assignees.",
      },
      {
        text: "All partial assignees together with the inventor must join to take action within 90 days of the assignment",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — adds a fabricated 90-day deadline. There is no time limit for establishing joint action.",
      },
    ],
    correctIndex: 1,
    explanation:
      "When there are multiple partial assignees, all of them together with the inventor must join to take action in the application.",
    citationRef: "37 CFR 3.71",
  },
];

// --- SOURCE SORT ITEMS (12) ---
// 4 statutes/regulations, 4 regulation-specific, 4 MPEP guidance

export const ZONE3_SOURCE_SORTS: SourceSortItem[] = [
  // Regulations
  {
    id: "z3-sort-1",
    zoneSlug: "the-gatekeepers",
    ruleText:
      "An assignee of the entire right, title, and interest may take action in a patent application to the exclusion of the inventor.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 3.71, which establishes the assignee's right to take action in applications.",
    specificRef: "37 CFR 3.71",
  },
  {
    id: "z3-sort-2",
    zoneSlug: "the-gatekeepers",
    ruleText:
      "The assignee must file a statement setting forth the basis for the assignee's entitlement to take action, supported by documentary evidence of a chain of title.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 3.73(c), detailing how assignees prove their authority.",
    specificRef: "37 CFR 3.73(c)",
  },
  {
    id: "z3-sort-3",
    zoneSlug: "the-gatekeepers",
    ruleText:
      "USPTO employees shall not have communications about pending patent applications with practitioners who have been suspended or excluded from practice.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 11.116, establishing the communication prohibition.",
    specificRef: "37 CFR 11.116",
  },
  {
    id: "z3-sort-4",
    zoneSlug: "the-gatekeepers",
    ruleText:
      "A partial assignee may not take action to the exclusion of the inventor or other partial assignees; all must join to take action.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 3.71, defining the limitations on partial assignees.",
    specificRef: "37 CFR 3.71",
  },
  // Statutes
  {
    id: "z3-sort-5",
    zoneSlug: "the-gatekeepers",
    ruleText:
      "The Director shall maintain a register of attorneys and agents authorized to represent applicants before the Patent and Trademark Office.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 2(b)(2)(D), establishing the legal basis for the USPTO's practitioner registration system.",
    specificRef: "35 USC 2(b)(2)(D)",
  },
  {
    id: "z3-sort-6",
    zoneSlug: "the-gatekeepers",
    ruleText:
      "The Director may establish regulations governing the recognition and conduct of agents, attorneys, or other persons representing applicants before the Office.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 2(b)(2)(D), granting the USPTO Director authority over practitioner conduct.",
    specificRef: "35 USC 2(b)(2)(D)",
  },
  {
    id: "z3-sort-7",
    zoneSlug: "the-gatekeepers",
    ruleText:
      "An applicant for patent may file and prosecute the application and take other actions in their own application without representation by a registered practitioner.",
    correctSource: "statute",
    explanation:
      "This reflects the statutory right of any applicant to proceed pro se under 35 USC 33, which underpins the exception for suspended practitioners who are inventors.",
    specificRef: "35 USC 33",
  },
  {
    id: "z3-sort-8",
    zoneSlug: "the-gatekeepers",
    ruleText:
      "Applications for patents shall be kept in confidence by the Patent and Trademark Office and no information concerning the same given without authority of the applicant.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 122(a), establishing the confidentiality requirement for unpublished applications.",
    specificRef: "35 USC 122(a)",
  },
  // MPEP guidance
  {
    id: "z3-sort-9",
    zoneSlug: "the-gatekeepers",
    ruleText:
      "Practitioners should verify whether a potential co-counsel or associate is in good standing with the OED before entering into any arrangement for USPTO representation.",
    correctSource: "mpep_guidance",
    explanation:
      "This is practical guidance from MPEP 105 advising practitioners on best practices — not a binding legal requirement.",
    specificRef: "MPEP 105",
  },
  {
    id: "z3-sort-10",
    zoneSlug: "the-gatekeepers",
    ruleText:
      "When an assignee wishes to take control of an application, it is advisable to file the 37 CFR 3.73(c) statement as early as possible to avoid delays in prosecution.",
    correctSource: "mpep_guidance",
    explanation:
      "This is advisory guidance from MPEP 106 — a best practice recommendation, not a regulatory mandate.",
    specificRef: "MPEP 106",
  },
  {
    id: "z3-sort-11",
    zoneSlug: "the-gatekeepers",
    ruleText:
      "If a practitioner is suspended during the prosecution of an application, the applicant or assignee should promptly appoint a new representative to avoid missing response deadlines.",
    correctSource: "mpep_guidance",
    explanation:
      "This is practical guidance from MPEP 105 about handling mid-prosecution suspension — it is advisory, not codified in statute or regulation.",
    specificRef: "MPEP 105",
  },
  {
    id: "z3-sort-12",
    zoneSlug: "the-gatekeepers",
    ruleText:
      "In practice, the OED publishes its disciplinary decisions on its website, and practitioners can check the status of any registered practitioner through the OED's online roster.",
    correctSource: "mpep_guidance",
    explanation:
      "This describes USPTO practice as noted in MPEP 105 — informational guidance about how to access OED records, not a legal requirement.",
    specificRef: "MPEP 105",
  },
];

// --- PATTERN HIGHLIGHT EXCERPTS (6) ---
// MPEP-style text with testable segments

export const ZONE3_PATTERN_HIGHLIGHTS: PatternHighlightExcerpt[] = [
  {
    id: "z3-ph-1",
    zoneSlug: "the-gatekeepers",
    title: "Communication Ban with Suspended Practitioners",
    mpepRef: "37 CFR 11.116",
    instruction:
      "Tap the phrases most likely to be tested on the patent bar exam.",
    segments: [
      { text: "USPTO employees ", isTestable: false },
      { text: "shall not communicate", isTestable: true, explanation: "Key prohibition — the absolute nature of this ban is frequently tested." },
      { text: " with practitioners who have been ", isTestable: false },
      { text: "suspended or excluded", isTestable: true, explanation: "Both categories are covered — suspended AND excluded. Exam may test whether 'resigned' practitioners are also included." },
      { text: " from practice before the Office ", isTestable: false },
      { text: "about pending patent applications", isTestable: true, explanation: "The ban covers pending applications specifically — a frequently tested scope limitation." },
      { text: ". The Office of Enrollment and Discipline maintains ", isTestable: false },
      { text: "a publicly available roster", isTestable: true, explanation: "The roster is public — exam tests whether it is confidential or public." },
      { text: " of such practitioners.", isTestable: false },
    ],
  },
  {
    id: "z3-ph-2",
    zoneSlug: "the-gatekeepers",
    title: "Assignee Statement of Entitlement",
    mpepRef: "37 CFR 3.73(c)",
    instruction:
      "Identify the exam-critical phrases about establishing assignee authority.",
    segments: [
      { text: "The ", isTestable: false },
      { text: "assignee of the entire right, title, and interest", isTestable: true, explanation: "Must be the ENTIRE interest — partial assignees cannot use this provision alone." },
      { text: " must file a ", isTestable: false },
      { text: "statement under 37 CFR 3.73(c)", isTestable: true, explanation: "The specific regulatory citation — frequently confused with 37 CFR 3.71 on exams." },
      { text: " setting forth the basis for the assignee's entitlement to take action, ", isTestable: false },
      { text: "supported by documentary evidence", isTestable: true, explanation: "Evidence requirement — a mere statement without documentation is insufficient." },
      { text: " establishing ", isTestable: false },
      { text: "the chain of title from the inventor", isTestable: true, explanation: "The chain must trace back to the inventor — gaps in the chain defeat the statement." },
      { text: " to the current assignee.", isTestable: false },
    ],
  },
  {
    id: "z3-ph-3",
    zoneSlug: "the-gatekeepers",
    title: "Pro Se Exception for Suspended Practitioners",
    mpepRef: "MPEP 105",
    instruction:
      "Highlight the conditions and limitations of the pro se exception.",
    segments: [
      { text: "A practitioner who has been ", isTestable: false },
      { text: "suspended or excluded from practice", isTestable: true, explanation: "Both suspended and excluded practitioners are covered by this exception." },
      { text: " before the USPTO ", isTestable: false },
      { text: "may not represent others", isTestable: true, explanation: "Critical limitation — the exception is personal only. Representing anyone else is prohibited." },
      { text: " but may, ", isTestable: false },
      { text: "as the actual inventor or applicant", isTestable: true, explanation: "They must be the actual inventor/applicant — not just a named party or co-owner." },
      { text: ", file and prosecute ", isTestable: false },
      { text: "their own application pro se", isTestable: true, explanation: "Pro se means on their own behalf — the narrow scope of this exception is frequently tested." },
      { text: " in accordance with applicable USPTO rules.", isTestable: false },
    ],
  },
  {
    id: "z3-ph-4",
    zoneSlug: "the-gatekeepers",
    title: "Partial Assignee Rights",
    mpepRef: "37 CFR 3.71",
    instruction:
      "Tap the phrases that define what partial assignees can and cannot do.",
    segments: [
      { text: "A ", isTestable: false },
      { text: "partial assignee", isTestable: true, explanation: "Key term — someone who holds less than the entire right, title, and interest." },
      { text: " holds less than the entire interest in the application. ", isTestable: false },
      { text: "Partial assignees may inspect the application file", isTestable: true, explanation: "Inspection right is preserved — partial assignees are not completely without access." },
      { text: " but ", isTestable: false },
      { text: "may not direct prosecution", isTestable: true, explanation: "Critical limitation — prosecution control requires the entire interest." },
      { text: " or amend claims. When multiple partial assignees exist, ", isTestable: false },
      { text: "all partial assignees together with the inventor must join", isTestable: true, explanation: "Unanimity requirement — all parties must agree; no majority rule." },
      { text: " to take action in the application.", isTestable: false },
    ],
  },
  {
    id: "z3-ph-5",
    zoneSlug: "the-gatekeepers",
    title: "Third-Party Access to Unpublished Applications",
    mpepRef: "MPEP 106 / 35 USC 122(a)",
    instruction:
      "Identify the requirements and limitations for accessing confidential applications.",
    segments: [
      { text: "Under 35 USC 122(a), ", isTestable: false },
      { text: "applications for patents shall be kept in confidence", isTestable: true, explanation: "Confidentiality is the default — the statutory mandate that underpins inspection restrictions." },
      { text: " by the Patent and Trademark Office. ", isTestable: false },
      { text: "Written authorization from the applicant or assignee", isTestable: true, explanation: "Must be written — oral authorization is insufficient. The source of consent matters." },
      { text: " is required for third-party access to unpublished applications. ", isTestable: false },
      { text: "Once the application is published or a patent issues", isTestable: true, explanation: "Publication or patent grant removes the confidentiality barrier — the application becomes public." },
      { text: ", the file becomes part of the public record ", isTestable: false },
      { text: "and written consent is no longer required", isTestable: true, explanation: "The consent requirement expires upon publication — a transition point frequently tested." },
      { text: " for inspection.", isTestable: false },
    ],
  },
  {
    id: "z3-ph-6",
    zoneSlug: "the-gatekeepers",
    title: "OED Disciplinary Process",
    mpepRef: "37 CFR Part 11",
    instruction:
      "Highlight the key elements of the OED's disciplinary authority and sanctions.",
    segments: [
      { text: "The ", isTestable: false },
      { text: "Office of Enrollment and Discipline (OED)", isTestable: true, explanation: "The specific office responsible — frequently tested to distinguish from PTAB, TC directors, etc." },
      { text: " is responsible for ", isTestable: false },
      { text: "registration, investigation, and discipline", isTestable: true, explanation: "Three core functions — knowing all three is important for exam questions." },
      { text: " of patent practitioners before the USPTO. Sanctions include ", isTestable: false },
      { text: "reprimand, probation, suspension, and exclusion", isTestable: true, explanation: "Four levels of sanctions in ascending severity — exam tests the full range." },
      { text: ". The OED ", isTestable: false },
      { text: "publishes disciplinary decisions", isTestable: true, explanation: "Decisions are public — the transparency aspect is testable." },
      { text: " to promote transparency and serve as a deterrent.", isTestable: false },
    ],
  },
];
