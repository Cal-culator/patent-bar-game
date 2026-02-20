import {
  TrapDetectorQuestion,
  SourceSortItem,
  PatternHighlightExcerpt,
} from "@study-game/engine";

// ============================================================
// Zone 1: The Vault — Recognize Phase Content
// MPEP 101, 102 — Confidentiality & Access
// Trap Detectors, Source Sorts, Pattern Highlights
// ============================================================

// --- TRAP DETECTOR QUESTIONS (10) ---
// Each has 1 verbatim_correct + 3 trap-type distractors

export const ZONE1_TRAP_DETECTORS: TrapDetectorQuestion[] = [
  {
    id: "z1-trap-1",
    conceptId: "conf-general-confidentiality",
    zoneSlug: "the-vault",
    stem: "Under 35 USC 122(a), what is the general rule regarding confidentiality of patent applications?",
    options: [
      {
        text: "Applications shall be kept in confidence and no information shall be given without authority of the applicant",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 35 USC 122(a) establishes that applications are confidential and information may not be disclosed without applicant authority.",
      },
      {
        text: "Applications shall be kept in confidence and no information shall be given without authority of the examiner",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — substitutes 'examiner' for 'applicant.' The authority to release information belongs to the applicant, not the examiner.",
      },
      {
        text: "Applications shall be kept in confidence until 12 months after the filing date",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — the confidentiality rule under 122(a) is not limited to 12 months. Publication occurs at 18 months under 122(b), and 122(a) establishes the general confidentiality principle.",
      },
      {
        text: "Applications shall be kept in confidence and no information shall be given without authority of the applicant, as provided in 37 CFR 1.14(b)",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the general confidentiality rule is in 35 USC 122(a), not 37 CFR 1.14(b). The CFR section implements the rule but the core principle is statutory.",
      },
    ],
    correctIndex: 0,
    explanation:
      "35 USC 122(a) provides the foundational rule: patent applications are confidential and no information may be disclosed without the applicant's authority.",
    citationRef: "35 USC 122(a)",
  },
  {
    id: "z1-trap-2",
    conceptId: "conf-18-month-publication",
    zoneSlug: "the-vault",
    stem: "Under 35 USC 122(b)(1)(A), when are patent applications published?",
    options: [
      {
        text: "After 18 months from the earliest filing date",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 35 USC 122(b)(1)(A) requires publication promptly after 18 months from the earliest filing date.",
      },
      {
        text: "After 12 months from the earliest filing date",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — swaps 18 months for 12 months. Twelve months is the term for provisional applications, not the publication timeline.",
      },
      {
        text: "After 18 months from the date the application is assigned to an examiner",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — the 18-month clock runs from the earliest filing date, not from examiner assignment. Examiner assignment is unrelated to publication timing.",
      },
      {
        text: "After 18 months from the earliest priority date, including all application types",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — adds 'including all application types.' Design patents and provisional applications are NOT published at 18 months.",
      },
    ],
    correctIndex: 0,
    explanation:
      "35 USC 122(b)(1)(A) mandates publication of applications promptly after the expiration of 18 months from the earliest filing date.",
    citationRef: "35 USC 122(b)(1)(A)",
  },
  {
    id: "z1-trap-3",
    conceptId: "conf-non-publication-request",
    zoneSlug: "the-vault",
    stem: "Under 35 USC 122(b)(2)(B)(i), when is an applicant eligible to request non-publication of a patent application?",
    options: [
      {
        text: "When the applicant certifies that the invention has not been and will not be the subject of an application filed in a foreign country that requires publication",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. The applicant must certify no foreign filing has occurred or will occur in a country that requires 18-month publication.",
      },
      {
        text: "When the applicant certifies that the invention has not been and will not be the subject of an application filed in any foreign country",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — drops 'that requires publication.' The restriction is specifically about countries that require publication, not all foreign countries.",
      },
      {
        text: "When the applicant certifies that the invention has not been filed abroad within 6 months of the US filing date",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — introduces a fabricated 6-month window. The certification involves no time limit; it is about whether any foreign filing requiring publication exists or is contemplated.",
      },
      {
        text: "When the application is a provisional application or a design patent application",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — provisionals and design patents are not published at 18 months anyway, so no non-publication request is needed. This confuses types that are exempt with the opt-out mechanism.",
      },
    ],
    correctIndex: 0,
    explanation:
      "Under 35 USC 122(b)(2)(B)(i), non-publication may be requested when the applicant certifies no foreign filing in a country requiring publication has been or will be made.",
    citationRef: "35 USC 122(b)(2)(B)(i)",
  },
  {
    id: "z1-trap-4",
    conceptId: "conf-public-access-patented",
    zoneSlug: "the-vault",
    stem: "Under 37 CFR 1.14(a), which files are open to public inspection?",
    options: [
      {
        text: "Only applications that have been published but not yet patented",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — this is too narrow. Both patented files AND published application files are open to the public, not just published-but-unpatented applications.",
      },
      {
        text: "Patented files and published application files are open to public inspection",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 37 CFR 1.14(a) makes both patented files and published application files available for public inspection.",
      },
      {
        text: "Patented files and published application files are open to public inspection under 35 USC 122(b)",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the public access rule is in 37 CFR 1.14(a), not 35 USC 122(b). The statute addresses publication; the regulation addresses access.",
      },
      {
        text: "All application files are open to public inspection once a first office action has been mailed",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — office actions do not trigger public access. Access depends on publication or patent grant, not prosecution milestones.",
      },
    ],
    correctIndex: 1,
    explanation:
      "37 CFR 1.14(a) provides that the files of patented applications and published applications are open to public inspection.",
    citationRef: "37 CFR 1.14(a)",
  },
  {
    id: "z1-trap-5",
    conceptId: "conf-unpublished-pending",
    zoneSlug: "the-vault",
    stem: "What is the confidentiality status of pending unpublished patent applications under 37 CFR 1.14(b)?",
    options: [
      {
        text: "Pending unpublished applications are available to the public upon written request",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — a written request does not grant access to unpublished pending applications. These are confidential regardless of how the request is made.",
      },
      {
        text: "Pending unpublished applications are confidential and not open to public inspection",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 37 CFR 1.14(b) establishes that pending unpublished applications are kept confidential.",
      },
      {
        text: "Pending unpublished applications are confidential for 18 months, then automatically become public",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — while many applications are published at 18 months, this conflates publication with the confidentiality rule. Applications with non-publication requests or design applications remain confidential beyond 18 months.",
      },
      {
        text: "Pending unpublished applications are confidential unless another applicant cites them as prior art",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — citation as prior art does not override confidentiality. Unpublished applications remain confidential regardless of citation by others.",
      },
    ],
    correctIndex: 1,
    explanation:
      "37 CFR 1.14(b) confirms that pending unpublished applications are confidential and not available for public inspection.",
    citationRef: "37 CFR 1.14(b)",
  },
  {
    id: "z1-trap-6",
    conceptId: "conf-status-information",
    zoneSlug: "the-vault",
    stem: "Under 37 CFR 1.14(e), what status information about a patent application may be disclosed to the public?",
    options: [
      {
        text: "Whether the application is pending, abandoned, or patented",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 37 CFR 1.14(e) permits disclosure of whether an application is pending, abandoned, or patented.",
      },
      {
        text: "Whether the application is pending, abandoned, or patented, along with the names of the inventors",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — inventor names are not part of the status information disclosed under 37 CFR 1.14(e). Status is limited to the application's procedural posture.",
      },
      {
        text: "Whether the application is pending or patented only",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — omits 'abandoned.' All three statuses (pending, abandoned, and patented) are disclosable under this section.",
      },
      {
        text: "Whether the application is pending, abandoned, or patented, as set forth in 35 USC 122(a)",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the status information rule is in 37 CFR 1.14(e), not 35 USC 122(a). Section 122(a) addresses general confidentiality, not status disclosure.",
      },
    ],
    correctIndex: 0,
    explanation:
      "37 CFR 1.14(e) allows disclosure of application status — specifically whether an application is pending, abandoned, or patented.",
    citationRef: "37 CFR 1.14(e)",
  },
  {
    id: "z1-trap-7",
    conceptId: "conf-design-patent-publication",
    zoneSlug: "the-vault",
    stem: "How are design patent applications treated with respect to the 18-month publication requirement?",
    options: [
      {
        text: "Design patent applications are published at 18 months, the same as utility applications",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — design patents are NOT subject to 18-month publication. They are only published when granted.",
      },
      {
        text: "Design patent applications are published at 12 months from the filing date",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — 12 months is the term for provisional applications, not the publication rule for design patents. Design patents are not published until grant.",
      },
      {
        text: "Design patent applications are not subject to 18-month publication and are published only upon grant of the patent",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Design patent applications are exempt from the 18-month publication requirement and are only published when granted.",
      },
      {
        text: "Design patent applications are not subject to 18-month publication and are never published",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — design patents ARE published, just not at 18 months. They are published upon patent grant.",
      },
    ],
    correctIndex: 2,
    explanation:
      "Design patent applications are not published at 18 months. They remain confidential until the patent is granted, at which point they are published.",
    citationRef: "35 USC 122(b)(2)(A)(iv) / MPEP 101",
  },
  {
    id: "z1-trap-8",
    conceptId: "conf-provisional-publication",
    zoneSlug: "the-vault",
    stem: "Are provisional patent applications subject to the 18-month publication requirement?",
    options: [
      {
        text: "Yes — provisional applications are published at 18 months like all other applications",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — provisional applications are not published. They expire after 12 months and are never examined or published.",
      },
      {
        text: "No — provisional applications expire after 18 months without publication",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — provisionals expire after 12 months, not 18 months. The 18-month figure is the publication timeline for utility applications.",
      },
      {
        text: "No — provisional applications are not published because they expire after 12 months and are not examined",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Provisional applications expire 12 months after filing and are never published or examined.",
      },
      {
        text: "No — provisional applications are not published unless converted to a nonprovisional application under 37 CFR 1.14",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — conversion of a provisional is governed by 35 USC 111(b) and 37 CFR 1.53, not 37 CFR 1.14. Section 1.14 addresses public access rules.",
      },
    ],
    correctIndex: 2,
    explanation:
      "Provisional applications are not published. They automatically expire 12 months after their filing date and are never examined.",
    citationRef: "35 USC 111(b) / MPEP 101",
  },
  {
    id: "z1-trap-9",
    conceptId: "conf-criminal-penalties",
    zoneSlug: "the-vault",
    stem: "Under 18 USC 1905, what consequence does a government employee face for unauthorized disclosure of patent application information?",
    options: [
      {
        text: "Administrative reassignment to a different technology center",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — 18 USC 1905 imposes criminal penalties, not merely administrative action. Reassignment is not part of the statute.",
      },
      {
        text: "Criminal penalties including fines and imprisonment, and removal from office or employment",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 18 USC 1905 provides for criminal penalties (fine and/or imprisonment) and removal from office for unauthorized disclosure.",
      },
      {
        text: "Criminal penalties including fines and imprisonment, and removal from office or employment, under 35 USC 122(a)",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the criminal penalty provision is in 18 USC 1905, not 35 USC 122(a). Section 122(a) establishes confidentiality but does not itself specify criminal penalties.",
      },
      {
        text: "Criminal penalties including fines up to $10,000 and imprisonment for up to 2 years",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — the $10,000/2-year figures are from 35 USC 186 (foreign filing license violations). The penalty amounts under 18 USC 1905 are different.",
      },
    ],
    correctIndex: 1,
    explanation:
      "18 USC 1905 imposes criminal penalties, including fines, imprisonment, and removal from office, on government employees who make unauthorized disclosures of confidential information, including patent application information.",
    citationRef: "18 USC 1905",
  },
  {
    id: "z1-trap-10",
    conceptId: "conf-access-abandoned-apps",
    zoneSlug: "the-vault",
    stem: "How can a member of the public gain access to an unpublished abandoned patent application?",
    options: [
      {
        text: "By filing a Freedom of Information Act (FOIA) request with the USPTO",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — FOIA does not override patent application confidentiality. Access to unpublished abandoned applications requires a petition under 37 CFR 1.14(i).",
      },
      {
        text: "By filing a petition under 37 CFR 1.14(i) demonstrating that the application is relied upon as a reference in a pending action",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 37 CFR 1.14(i) allows petitioned access to unpublished abandoned applications when relied upon as a reference.",
      },
      {
        text: "By filing a petition under 37 CFR 1.14(i) within 6 months of the date of abandonment",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — there is no 6-month deadline for filing a petition. The petition must demonstrate a proper basis for access, not meet a time limit.",
      },
      {
        text: "Unpublished abandoned applications automatically become available to the public upon abandonment",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — abandonment alone does not make applications public. Unpublished abandoned applications remain confidential unless accessed through a petition.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Access to unpublished abandoned applications requires a petition under 37 CFR 1.14(i), typically by showing the application is relied upon as a reference in a pending action.",
    citationRef: "37 CFR 1.14(i)",
  },
];

// --- SOURCE SORT ITEMS (12) ---
// 4 statutes, 4 regulations, 4 MPEP guidance

export const ZONE1_SOURCE_SORTS: SourceSortItem[] = [
  // Statutes
  {
    id: "z1-sort-1",
    zoneSlug: "the-vault",
    ruleText:
      "Applications for patents shall be kept in confidence by the Patent and Trademark Office and no information concerning the same shall be given without authority of the applicant.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 122(a), which establishes the foundational rule of patent application confidentiality.",
    specificRef: "35 USC 122(a)",
  },
  {
    id: "z1-sort-2",
    zoneSlug: "the-vault",
    ruleText:
      "Each application for a patent shall be published promptly after the expiration of a period of 18 months from the earliest filing date.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 122(b)(1)(A), mandating the 18-month publication timeline for patent applications.",
    specificRef: "35 USC 122(b)(1)(A)",
  },
  {
    id: "z1-sort-3",
    zoneSlug: "the-vault",
    ruleText:
      "An applicant may request that the application not be published if the invention has not been and will not be the subject of an application filed in a foreign country that requires publication of applications 18 months after filing.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 122(b)(2)(B)(i), providing the non-publication request option.",
    specificRef: "35 USC 122(b)(2)(B)(i)",
  },
  {
    id: "z1-sort-4",
    zoneSlug: "the-vault",
    ruleText:
      "Whoever, being an officer or employee of the United States, publishes or discloses any confidential information coming to him in the course of his employment shall be fined, imprisoned, or removed from office.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 18 USC 1905, establishing criminal penalties for unauthorized disclosure by government employees.",
    specificRef: "18 USC 1905",
  },
  // Regulations
  {
    id: "z1-sort-5",
    zoneSlug: "the-vault",
    ruleText:
      "The file of a patent application that has been published or for which a patent has been issued is available to the public.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 1.14(a), implementing the public access rule for published and patented files.",
    specificRef: "37 CFR 1.14(a)",
  },
  {
    id: "z1-sort-6",
    zoneSlug: "the-vault",
    ruleText:
      "Pending applications that have not been published are not available to the public and are maintained in confidence.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 1.14(b), implementing the confidentiality requirement for unpublished pending applications.",
    specificRef: "37 CFR 1.14(b)",
  },
  {
    id: "z1-sort-7",
    zoneSlug: "the-vault",
    ruleText:
      "Status information such as whether an application is pending, abandoned, or patented may be disclosed to the public.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 1.14(e), permitting disclosure of limited status information even for otherwise confidential applications.",
    specificRef: "37 CFR 1.14(e)",
  },
  {
    id: "z1-sort-8",
    zoneSlug: "the-vault",
    ruleText:
      "Access to an unpublished abandoned application may be provided by petition if the application is identified in a document relied on by the examiner or applicant in a pending or patented application.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 1.14(i), providing the petition-based mechanism for accessing unpublished abandoned applications.",
    specificRef: "37 CFR 1.14(i)",
  },
  // MPEP guidance
  {
    id: "z1-sort-9",
    zoneSlug: "the-vault",
    ruleText:
      "Examiners and other USPTO employees must exercise caution to ensure that confidential information from unpublished applications is not inadvertently disclosed during prosecution or in communications with third parties.",
    correctSource: "mpep_guidance",
    explanation:
      "This is practical guidance from MPEP 101 advising USPTO employees on handling confidential information — not a binding statutory or regulatory provision.",
    specificRef: "MPEP 101",
  },
  {
    id: "z1-sort-10",
    zoneSlug: "the-vault",
    ruleText:
      "When a member of the public inquires about the status of an application, the information that may be provided is limited to whether the application is pending, abandoned, or has resulted in a patent.",
    correctSource: "mpep_guidance",
    explanation:
      "This is MPEP guidance from MPEP 102 explaining how to handle public inquiries — procedural direction interpreting 37 CFR 1.14(e), not the regulation itself.",
    specificRef: "MPEP 102",
  },
  {
    id: "z1-sort-11",
    zoneSlug: "the-vault",
    ruleText:
      "Design patent applications are not published prior to the grant of the patent. Accordingly, design application files are not open to the public until the patent issues.",
    correctSource: "mpep_guidance",
    explanation:
      "This is MPEP guidance from MPEP 101 explaining the practical effect of the design patent publication exception — an interpretive statement, not statutory text.",
    specificRef: "MPEP 101",
  },
  {
    id: "z1-sort-12",
    zoneSlug: "the-vault",
    ruleText:
      "An applicant who has filed a non-publication request and subsequently files in a foreign country requiring 18-month publication must notify the USPTO within 45 days or the application may be regarded as abandoned.",
    correctSource: "mpep_guidance",
    explanation:
      "This is procedural guidance from MPEP 101 explaining the rescue obligation under 35 USC 122(b)(2)(B)(iii). The MPEP provides the practical detail about the 45-day notification window.",
    specificRef: "MPEP 101",
  },
];

// --- PATTERN HIGHLIGHT EXCERPTS (6) ---
// MPEP-style text with testable segments

export const ZONE1_PATTERN_HIGHLIGHTS: PatternHighlightExcerpt[] = [
  {
    id: "z1-ph-1",
    zoneSlug: "the-vault",
    title: "General Confidentiality Rule",
    referenceId: "35 USC 122(a) / MPEP 101",
    instruction:
      "Tap the phrases most likely to be tested on the patent bar exam.",
    segments: [
      {
        text: "Applications for patents ",
        isTestable: false,
      },
      {
        text: "shall be kept in confidence",
        isTestable: true,
        explanation:
          "Key mandate — the word 'shall' makes this a mandatory obligation, not discretionary.",
      },
      {
        text: " by the Patent and Trademark Office and ",
        isTestable: false,
      },
      {
        text: "no information concerning the same shall be given",
        isTestable: true,
        explanation:
          "Absolute prohibition — 'no information' means the restriction is comprehensive, covering all aspects of the application.",
      },
      {
        text: " without ",
        isTestable: false,
      },
      {
        text: "authority of the applicant",
        isTestable: true,
        explanation:
          "The gatekeeper — only the applicant can authorize disclosure. Examiners, supervisors, and third parties cannot override this.",
      },
      {
        text: " or as otherwise provided in this title.",
        isTestable: false,
      },
    ],
  },
  {
    id: "z1-ph-2",
    zoneSlug: "the-vault",
    title: "18-Month Publication Rule",
    referenceId: "35 USC 122(b)(1)(A) / MPEP 101",
    instruction:
      "Identify the exam-critical phrases about publication timing and scope.",
    segments: [
      {
        text: "Each application for a patent ",
        isTestable: false,
      },
      {
        text: "shall be published",
        isTestable: true,
        explanation:
          "Mandatory publication — uses 'shall,' making this the default rule. Only specific exceptions override it.",
      },
      {
        text: " promptly after the expiration of a period of ",
        isTestable: false,
      },
      {
        text: "18 months",
        isTestable: true,
        explanation:
          "Critical time period — the most frequently tested number in this topic. Distinguish from 12 months (provisional term) and 20 years (patent term).",
      },
      {
        text: " from ",
        isTestable: false,
      },
      {
        text: "the earliest filing date",
        isTestable: true,
        explanation:
          "The clock anchor — this includes domestic and foreign priority dates. Exam questions often try to change this to 'US filing date' or 'examination date.'",
      },
      {
        text: " for which a benefit is sought under this title. ",
        isTestable: false,
      },
      {
        text: "At the request of the applicant, an application may be published earlier",
        isTestable: true,
        explanation:
          "Optional early publication — the applicant may voluntarily publish earlier, but cannot be compelled to do so before 18 months.",
      },
      {
        text: " than the end of such 18-month period.",
        isTestable: false,
      },
    ],
  },
  {
    id: "z1-ph-3",
    zoneSlug: "the-vault",
    title: "Non-Publication Request",
    referenceId: "35 USC 122(b)(2)(B)(i) / MPEP 101",
    instruction:
      "Highlight the conditions required for a valid non-publication request.",
    segments: [
      {
        text: "An applicant may request that ",
        isTestable: false,
      },
      {
        text: "the application not be published",
        isTestable: true,
        explanation:
          "The opt-out mechanism — this is one of the key exceptions to mandatory 18-month publication.",
      },
      {
        text: " if the applicant makes a certification at the time of filing that ",
        isTestable: false,
      },
      {
        text: "the invention disclosed has not been and will not be",
        isTestable: true,
        explanation:
          "Dual temporal scope — covers both past filings ('has not been') and future intent ('will not be'). The exam tests whether applicants understand this ongoing obligation.",
      },
      {
        text: " the subject of an application filed in ",
        isTestable: false,
      },
      {
        text: "a foreign country that requires publication",
        isTestable: true,
        explanation:
          "Critical qualifier — the restriction is only about countries that require 18-month publication. Filing in a country that does not require publication would not disqualify the request.",
      },
      {
        text: " of applications ",
        isTestable: false,
      },
      {
        text: "18 months after filing",
        isTestable: true,
        explanation:
          "Specific publication regime — the non-publication exception is keyed to the same 18-month publication standard used internationally.",
      },
      {
        text: " or under the treaty described in section 351(a).",
        isTestable: false,
      },
    ],
  },
  {
    id: "z1-ph-4",
    zoneSlug: "the-vault",
    title: "Public Access to Patent Files",
    referenceId: "37 CFR 1.14(a) / MPEP 102",
    instruction:
      "Tap the phrases that define what the public can and cannot access.",
    segments: [
      {
        text: "The file of ",
        isTestable: false,
      },
      {
        text: "a patented application",
        isTestable: true,
        explanation:
          "First category of public files — once a patent issues, the entire prosecution file becomes publicly available.",
      },
      {
        text: " or ",
        isTestable: false,
      },
      {
        text: "a published application",
        isTestable: true,
        explanation:
          "Second category of public files — publication at 18 months opens the file to public access, even while the application remains pending.",
      },
      {
        text: " is open to public inspection. However, ",
        isTestable: false,
      },
      {
        text: "pending applications that have not been published",
        isTestable: true,
        explanation:
          "The confidential category — these remain off-limits to the public. This is the core confidentiality protection for applications in prosecution.",
      },
      {
        text: " are maintained in confidence pursuant to ",
        isTestable: false,
      },
      {
        text: "35 USC 122",
        isTestable: true,
        explanation:
          "Statutory anchor — the regulation explicitly ties back to the statute. Exam questions may try to swap this with a different CFR section.",
      },
      {
        text: " and are not available to the public.",
        isTestable: false,
      },
    ],
  },
  {
    id: "z1-ph-5",
    zoneSlug: "the-vault",
    title: "Status Information Disclosure",
    referenceId: "37 CFR 1.14(e) / MPEP 102",
    instruction:
      "Identify the specific categories of information that may be disclosed and any limitations.",
    segments: [
      {
        text: "The Office may provide to any person ",
        isTestable: false,
      },
      {
        text: "status information",
        isTestable: true,
        explanation:
          "Limited exception to confidentiality — only status information is disclosed, not the substantive content of the application.",
      },
      {
        text: " of a patent application, which includes whether the application is ",
        isTestable: false,
      },
      {
        text: "pending, abandoned, or patented",
        isTestable: true,
        explanation:
          "The three permitted statuses — exam questions often add extra categories (e.g., 'under appeal' or 'allowed') to test whether you know the exact list.",
      },
      {
        text: ". However, ",
        isTestable: false,
      },
      {
        text: "no other information about the application may be disclosed",
        isTestable: true,
        explanation:
          "Strict boundary — status disclosure does not open the door to any other information such as claims, inventor names, or prosecution history.",
      },
      {
        text: " unless the application has been published or patented, ",
        isTestable: false,
      },
      {
        text: "or the applicant has provided written authority",
        isTestable: true,
        explanation:
          "Applicant control — even beyond status, broader disclosure requires either publication/patent or explicit applicant consent.",
      },
      {
        text: " for the release of such information.",
        isTestable: false,
      },
    ],
  },
  {
    id: "z1-ph-6",
    zoneSlug: "the-vault",
    title: "Access to Unpublished Abandoned Applications",
    referenceId: "37 CFR 1.14(i) / MPEP 102",
    instruction:
      "Highlight the conditions under which unpublished abandoned applications may be accessed.",
    segments: [
      {
        text: "Access to an ",
        isTestable: false,
      },
      {
        text: "unpublished abandoned application",
        isTestable: true,
        explanation:
          "Key application category — abandoned applications are no longer pending, but if unpublished, they remain confidential by default.",
      },
      {
        text: " may be provided to any person ",
        isTestable: false,
      },
      {
        text: "by petition",
        isTestable: true,
        explanation:
          "Required procedure — access is not automatic. A formal petition must be filed and granted.",
      },
      {
        text: " if the application ",
        isTestable: false,
      },
      {
        text: "is identified in a patent, a published application, or a document cited in a pending or patented file",
        isTestable: true,
        explanation:
          "The nexus requirement — the petitioner must show a connection between the abandoned application and a publicly accessible document or file.",
      },
      {
        text: ". The petition must establish that ",
        isTestable: false,
      },
      {
        text: "the application is relied upon as a reference",
        isTestable: true,
        explanation:
          "Substantive justification — mere curiosity is not enough. The petitioner must show the abandoned application is actually being relied upon in a matter affecting them.",
      },
      {
        text: " in a pending or patented application.",
        isTestable: false,
      },
    ],
  },
];
