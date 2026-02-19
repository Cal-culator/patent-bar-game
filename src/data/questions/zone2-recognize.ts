import {
  TrapDetectorQuestion,
  SourceSortItem,
  PatternHighlightExcerpt,
} from "@/types";

// ============================================================
// Zone 2: The Reading Room — Recognize Phase Content
// Trap Detectors, Source Sorts, Pattern Highlights
// ============================================================

// --- TRAP DETECTOR QUESTIONS (10) ---
// Each has 1 verbatim_correct + 3 trap-type distractors

export const ZONE2_TRAP_DETECTORS: TrapDetectorQuestion[] = [
  {
    id: "z2-trap-1",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    stem: "Under 37 CFR 1.11(a), which patent files are open to public inspection?",
    options: [
      {
        text: "Patents and published applications for patent",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 37 CFR 1.11(a) makes patents and published applications open to public inspection.",
      },
      {
        text: "All pending applications for patent",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — expands access to ALL pending applications. Only published applications are open, not unpublished pending ones.",
      },
      {
        text: "Patents and published applications, as provided in 37 CFR 1.14",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — 37 CFR 1.14 covers access to unpublished applications, not the general rule for public inspection of published files.",
      },
      {
        text: "Patents only — applications are not available until grant",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — omits published applications. Both patents AND published applications are open to public inspection.",
      },
    ],
    correctIndex: 0,
    explanation:
      "Under 37 CFR 1.11(a), patents and published applications for patent are open to public inspection.",
    citationRef: "37 CFR 1.11(a)",
  },
  {
    id: "z2-trap-2",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    stem: "What is the default confidentiality status of an unpublished pending patent application?",
    options: [
      {
        text: "It is available to any registered patent attorney",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — only the attorney of record has access, not any registered attorney.",
      },
      {
        text: "It is maintained in confidence by the Office under 35 USC 122(a)",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 35 USC 122(a) provides that applications shall be kept in confidence.",
      },
      {
        text: "It is maintained in confidence by the Office under 37 CFR 1.11(a)",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — 37 CFR 1.11(a) covers public inspection of published files. Confidentiality is governed by 35 USC 122(a).",
      },
      {
        text: "It is available to the public after 12 months from filing",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — publication occurs at 18 months, not 12, and only published applications become public.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 122(a), unpublished pending patent applications are maintained in confidence by the Office.",
    citationRef: "35 USC 122(a)",
  },
  {
    id: "z2-trap-3",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    stem: "Under 37 CFR 1.14(c), who has the power to inspect an unpublished pending application?",
    options: [
      {
        text: "The applicant and the attorney or agent of record",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 37 CFR 1.14(c) grants inspection rights to the applicant and the attorney or agent of record.",
      },
      {
        text: "Any registered patent attorney or agent",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — only the attorney of record has access, not any registered practitioner. Others need written authorization.",
      },
      {
        text: "The applicant and the attorney or agent of record, as set forth in 37 CFR 1.11",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the power to inspect unpublished applications is in 37 CFR 1.14(c), not 37 CFR 1.11.",
      },
      {
        text: "The applicant, the attorney of record, and the assigned examiner's supervisor",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — the examiner's supervisor is not mentioned in 37 CFR 1.14(c). Access is limited to the applicant and their representative.",
      },
    ],
    correctIndex: 0,
    explanation:
      "Under 37 CFR 1.14(c), the applicant and the attorney or agent of record may inspect unpublished pending applications.",
    citationRef: "37 CFR 1.14(c)",
  },
  {
    id: "z2-trap-4",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    stem: "What status information about a patent application is available to the general public under 37 CFR 1.14(e)?",
    options: [
      {
        text: "The full prosecution history including office actions",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — the full prosecution history is only available for published or patented applications. Status information is more limited.",
      },
      {
        text: "Whether the application is pending, abandoned, or patented",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 37 CFR 1.14(e) makes basic status information available to the public.",
      },
      {
        text: "Whether the application is pending, abandoned, or patented, along with the names of the inventors",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — adds 'names of the inventors.' Status information under 37 CFR 1.14(e) covers the application's status, not inventor identities for unpublished apps.",
      },
      {
        text: "No information is available to the public for any pending application",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — while unpublished applications are confidential, basic status information IS available under 37 CFR 1.14(e).",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 1.14(e), the public may obtain basic status information about an application, specifically whether it is pending, abandoned, or has resulted in a patent.",
    citationRef: "37 CFR 1.14(e)",
  },
  {
    id: "z2-trap-5",
    conceptId: "insp-petition-access",
    zoneSlug: "the-reading-room",
    stem: "How can a third party obtain access to an unpublished abandoned patent application?",
    options: [
      {
        text: "By filing a FOIA request under 5 USC 552",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — FOIA does not override the 35 USC 122 confidentiality for patent application files. Access is through 37 CFR 1.14(i).",
      },
      {
        text: "By petitioning under 37 CFR 1.14(i), showing the application is relied upon as a reference",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 37 CFR 1.14(i) provides for petition-based access to unpublished abandoned applications.",
      },
      {
        text: "By petitioning under 37 CFR 1.11, showing the application is relied upon as a reference",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — 37 CFR 1.11 covers files open to public inspection. Petition for access to unpublished abandoned apps is under 37 CFR 1.14(i).",
      },
      {
        text: "By waiting 12 months after abandonment, when the file automatically becomes public",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — there is no automatic publication or public access after abandonment. Unpublished abandoned applications remain confidential.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 1.14(i), a third party may petition for access to an unpublished abandoned application by showing it is relied upon as a reference or identified in a published document.",
    citationRef: "37 CFR 1.14(i)",
  },
  {
    id: "z2-trap-6",
    conceptId: "insp-incorporation",
    zoneSlug: "the-reading-room",
    stem: "What is the legal effect of incorporating material by reference under 37 CFR 1.57?",
    options: [
      {
        text: "The referenced material becomes part of the application as though fully set forth therein",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 37 CFR 1.57 provides that incorporated material is treated as part of the application.",
      },
      {
        text: "The referenced material is noted for informational purposes but is not part of the disclosure",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — changes 'part of the application' to 'informational purposes.' Incorporation by reference makes the material legally part of the application.",
      },
      {
        text: "The referenced material becomes part of the application, as provided under 35 USC 122",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — incorporation by reference is governed by 37 CFR 1.57, not 35 USC 122. Section 122 addresses confidentiality.",
      },
      {
        text: "The referenced material must be physically attached to the application within 60 days",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — fabricates a 60-day deadline. While applicants may need to supply copies upon request, there is no specific 60-day attachment requirement.",
      },
    ],
    correctIndex: 0,
    explanation:
      "Under 37 CFR 1.57, material incorporated by reference is treated as part of the application as though it were fully set forth in the specification.",
    citationRef: "37 CFR 1.57",
  },
  {
    id: "z2-trap-7",
    conceptId: "insp-ifw",
    zoneSlug: "the-reading-room",
    stem: "How does the public access the Image File Wrapper (IFW) for published patent applications?",
    options: [
      {
        text: "By submitting a written request to the Technology Center Director",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — no written request to the TC Director is needed. Published IFW files are available electronically.",
      },
      {
        text: "Through Patent Center (formerly PAIR) — the USPTO's electronic access system",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Public access to IFW records for published applications is available through Patent Center.",
      },
      {
        text: "Through Patent Center, which provides access to all applications including unpublished ones",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — Patent Center's public portal only provides access to published applications and patents, not unpublished files.",
      },
      {
        text: "Only by visiting the USPTO in Alexandria, Virginia in person",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — in-person visits are possible but not the only method. Electronic access through Patent Center is the primary access method.",
      },
    ],
    correctIndex: 1,
    explanation:
      "The public can access IFW records for published applications through Patent Center (formerly PAIR), the USPTO's electronic access system.",
    citationRef: "MPEP 103",
  },
  {
    id: "z2-trap-8",
    conceptId: "insp-provisional",
    zoneSlug: "the-reading-room",
    stem: "Are provisional patent applications available for public inspection?",
    options: [
      {
        text: "No, provisional applications are not published and not available for public inspection",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Provisional applications are not published by the USPTO and remain confidential.",
      },
      {
        text: "Yes, provisional applications are published at 18 months just like non-provisional applications",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — only non-provisional applications are published at 18 months. Provisionals are never independently published.",
      },
      {
        text: "No, but they automatically become public after the 12-month pendency period expires",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — expiration of the 12-month provisional period does not trigger publication. The provisional remains confidential.",
      },
      {
        text: "No, provisional applications are not published and not available for public inspection under 37 CFR 1.11",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — while the conclusion is correct, 37 CFR 1.11 covers what IS open to inspection. Provisional confidentiality is based on 35 USC 122.",
      },
    ],
    correctIndex: 0,
    explanation:
      "Provisional applications are not published by the USPTO and are not available for public inspection under normal circumstances.",
    citationRef: "35 USC 122 / MPEP 103",
  },
  {
    id: "z2-trap-9",
    conceptId: "insp-foia",
    zoneSlug: "the-reading-room",
    stem: "Can unpublished patent application files be obtained through a FOIA request?",
    options: [
      {
        text: "Yes — FOIA applies to all federal agency records without exception",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — while FOIA generally applies to federal agencies, patent files have a specific statutory exemption under 35 USC 122.",
      },
      {
        text: "No — unpublished patent files are exempt under the trade secrets exemption of FOIA",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — the exemption is under 35 USC 122 (patent-specific confidentiality), not the general trade secrets exemption of FOIA.",
      },
      {
        text: "No — unpublished patent application files are largely exempt from FOIA under 35 USC 122",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 35 USC 122 provides that applications shall be kept in confidence, which exempts them from FOIA disclosure.",
      },
      {
        text: "No — unpublished patent application files are exempt from FOIA under 37 CFR 1.14",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the FOIA exemption comes from the statute 35 USC 122, not the regulation 37 CFR 1.14.",
      },
    ],
    correctIndex: 2,
    explanation:
      "Unpublished patent application files are largely exempt from FOIA because 35 USC 122 provides that applications shall be kept in confidence.",
    citationRef: "35 USC 122 / 5 USC 552",
  },
  {
    id: "z2-trap-10",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    stem: "Under 37 CFR 1.14, when does an application file become fully open to public inspection?",
    options: [
      {
        text: "When the application is published under 35 USC 122(b) or when a patent is granted",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Applications become fully open upon publication or patent grant under 37 CFR 1.11(a).",
      },
      {
        text: "When the application is published under 35 USC 122(b) or 12 months after filing",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — there is no 12-month trigger for public access. Publication occurs at 18 months, and patents grant at varying times.",
      },
      {
        text: "When the first office action is mailed by the examiner",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — office actions do not trigger public access. Publication or patent grant is the trigger.",
      },
      {
        text: "When the applicant files a request for publication under 37 CFR 1.14(c)",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — 37 CFR 1.14(c) covers who may inspect unpublished apps, not requests for publication. Publication is under 35 USC 122(b).",
      },
    ],
    correctIndex: 0,
    explanation:
      "An application file becomes fully open to public inspection when the application is published under 35 USC 122(b) or when a patent is granted.",
    citationRef: "37 CFR 1.11(a) / 35 USC 122(b)",
  },
];

// --- SOURCE SORT ITEMS (12) ---
// 4 statutes, 4 regulations, 4 MPEP guidance

export const ZONE2_SOURCE_SORTS: SourceSortItem[] = [
  // Statutes
  {
    id: "z2-sort-1",
    zoneSlug: "the-reading-room",
    ruleText:
      "Applications for patents shall be kept in confidence by the Patent and Trademark Office and no information concerning the same shall be given without authority of the applicant or owner.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 122(a), establishing the fundamental confidentiality requirement for patent applications.",
    specificRef: "35 USC 122(a)",
  },
  {
    id: "z2-sort-2",
    zoneSlug: "the-reading-room",
    ruleText:
      "Each application for patent shall be published promptly after the expiration of a period of 18 months from the earliest filing date.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 122(b)(1)(A) establishing the 18-month publication requirement.",
    specificRef: "35 USC 122(b)(1)(A)",
  },
  {
    id: "z2-sort-3",
    zoneSlug: "the-reading-room",
    ruleText:
      "Each agency shall make available to the public information as provided in this section, in accordance with the procedures and requirements of FOIA.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 5 USC 552, the Freedom of Information Act, which establishes the general public records access requirement.",
    specificRef: "5 USC 552",
  },
  {
    id: "z2-sort-4",
    zoneSlug: "the-reading-room",
    ruleText:
      "An applicant may request that the application not be published pursuant to this subsection if the invention has not been and will not be the subject of an application filed in another country.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 122(b)(2)(B)(i) providing the opt-out from 18-month publication.",
    specificRef: "35 USC 122(b)(2)(B)(i)",
  },
  // Regulations
  {
    id: "z2-sort-5",
    zoneSlug: "the-reading-room",
    ruleText:
      "The file of a patent application which has been published or for which a patent has been issued is available to the public as set forth in this section.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 1.11(a), implementing the public inspection requirement for published applications and patents.",
    specificRef: "37 CFR 1.11(a)",
  },
  {
    id: "z2-sort-6",
    zoneSlug: "the-reading-room",
    ruleText:
      "Access to an unpublished pending application may be provided to the applicant, the attorney or agent of record, and any person with written authority from the applicant.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 1.14(c), specifying who has the power to inspect unpublished pending applications.",
    specificRef: "37 CFR 1.14(c)",
  },
  {
    id: "z2-sort-7",
    zoneSlug: "the-reading-room",
    ruleText:
      "Any person may obtain status information about a patent application, including whether the application is pending, abandoned, or patented.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 1.14(e), providing for public access to application status information.",
    specificRef: "37 CFR 1.14(e)",
  },
  {
    id: "z2-sort-8",
    zoneSlug: "the-reading-room",
    ruleText:
      "Subject matter which is incorporated by reference where permitted under this section is treated as though it were set forth in full in the application.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 1.57, defining the legal effect of incorporation by reference.",
    specificRef: "37 CFR 1.57",
  },
  // MPEP guidance
  {
    id: "z2-sort-9",
    zoneSlug: "the-reading-room",
    ruleText:
      "The Image File Wrapper system provides electronic access to all documents in the patent application file, including office actions, amendments, and applicant correspondence.",
    correctSource: "mpep_guidance",
    explanation:
      "This is practical guidance from MPEP 103 describing the IFW system — not codified in statute or regulation.",
    specificRef: "MPEP 103",
  },
  {
    id: "z2-sort-10",
    zoneSlug: "the-reading-room",
    ruleText:
      "Practitioners should advise clients that once an application is published, the entire file wrapper becomes available for public review through Patent Center.",
    correctSource: "mpep_guidance",
    explanation:
      "This is practical guidance from MPEP 103 advising practitioners about the effect of publication on file access — not a binding legal requirement.",
    specificRef: "MPEP 103",
  },
  {
    id: "z2-sort-11",
    zoneSlug: "the-reading-room",
    ruleText:
      "When considering a petition for access to an unpublished abandoned application, the Office will evaluate whether the petitioner has demonstrated a legitimate need for the file contents.",
    correctSource: "mpep_guidance",
    explanation:
      "This is administrative guidance from MPEP 104 describing how the Office evaluates access petitions — not a specific regulatory requirement.",
    specificRef: "MPEP 104",
  },
  {
    id: "z2-sort-12",
    zoneSlug: "the-reading-room",
    ruleText:
      "Applicants are encouraged to include sufficient description in the specification rather than relying solely on incorporation by reference, particularly for essential subject matter.",
    correctSource: "mpep_guidance",
    explanation:
      "This is best-practice guidance from MPEP 103 about incorporation by reference — a recommendation, not a statutory or regulatory mandate.",
    specificRef: "MPEP 103",
  },
];

// --- PATTERN HIGHLIGHT EXCERPTS (6) ---
// MPEP-style text with testable segments

export const ZONE2_PATTERN_HIGHLIGHTS: PatternHighlightExcerpt[] = [
  {
    id: "z2-ph-1",
    zoneSlug: "the-reading-room",
    title: "Confidentiality of Applications",
    mpepRef: "35 USC 122(a)",
    instruction:
      "Tap the phrases most likely to be tested on the patent bar exam.",
    segments: [
      { text: "Applications for patents ", isTestable: false },
      { text: "shall be kept in confidence", isTestable: true, explanation: "Core confidentiality rule — the foundation of all patent file access restrictions." },
      { text: " by the Patent and Trademark Office and ", isTestable: false },
      { text: "no information concerning the same shall be given", isTestable: true, explanation: "Absolute prohibition — no information may be disclosed without authorization." },
      { text: " without authority of the applicant or owner ", isTestable: false },
      { text: "unless necessary to carry out the provisions of an Act of Congress", isTestable: true, explanation: "Exception clause — allows disclosure when required by statute (e.g., publication under 35 USC 122(b))." },
      { text: " or in such special circumstances as may be determined by the Director.", isTestable: false },
    ],
  },
  {
    id: "z2-ph-2",
    zoneSlug: "the-reading-room",
    title: "18-Month Publication Rule",
    mpepRef: "35 USC 122(b)",
    instruction:
      "Identify the exam-critical phrases about patent application publication.",
    segments: [
      { text: "Each application for patent ", isTestable: false },
      { text: "shall be published", isTestable: true, explanation: "Mandatory publication — not optional (unless the applicant opts out under specific conditions)." },
      { text: " promptly after the expiration of a period of ", isTestable: false },
      { text: "18 months", isTestable: true, explanation: "Critical time period — the most frequently tested publication deadline." },
      { text: " from the ", isTestable: false },
      { text: "earliest filing date", isTestable: true, explanation: "Key date — measured from earliest filing date, which includes priority dates, not just the US filing date." },
      { text: " for which a benefit is sought under this title. ", isTestable: false },
      { text: "At the request of the applicant, an application may be published earlier", isTestable: true, explanation: "Early publication option — applicants can request publication before the 18-month date." },
      { text: " than the end of such 18-month period.", isTestable: false },
    ],
  },
  {
    id: "z2-ph-3",
    zoneSlug: "the-reading-room",
    title: "Files Open to Public Inspection",
    mpepRef: "37 CFR 1.11(a)",
    instruction:
      "Highlight the key terms defining what is open to public inspection.",
    segments: [
      { text: "The file of a patent application which has been ", isTestable: false },
      { text: "published", isTestable: true, explanation: "First trigger — publication opens the file to public inspection." },
      { text: " or for which ", isTestable: false },
      { text: "a patent has been issued", isTestable: true, explanation: "Second trigger — patent grant also opens the file to the public." },
      { text: " is ", isTestable: false },
      { text: "available to the public", isTestable: true, explanation: "Key consequence — the full file becomes accessible, not just the published document." },
      { text: " as set forth in this section. ", isTestable: false },
      { text: "The contents of any published application", isTestable: false },
      { text: " may be accessed through the Patent Center system.", isTestable: false },
    ],
  },
  {
    id: "z2-ph-4",
    zoneSlug: "the-reading-room",
    title: "Power to Inspect Unpublished Applications",
    mpepRef: "37 CFR 1.14(c)",
    instruction:
      "Tap the key phrases about who has the power to inspect unpublished files.",
    segments: [
      { text: "Access to an unpublished pending application may be provided to ", isTestable: false },
      { text: "the applicant", isTestable: true, explanation: "First authorized person — the applicant always has access to their own application." },
      { text: ", ", isTestable: false },
      { text: "the attorney or agent of record", isTestable: true, explanation: "Second authorized person — must be of record, not just any registered practitioner." },
      { text: ", and any person ", isTestable: false },
      { text: "with written authority", isTestable: true, explanation: "Third path — anyone authorized in writing by the applicant or attorney of record." },
      { text: " from the applicant or the attorney or agent of record. ", isTestable: false },
      { text: "The Office will not provide access to anyone not identified", isTestable: false },
      { text: " under this section without proper authorization.", isTestable: false },
    ],
  },
  {
    id: "z2-ph-5",
    zoneSlug: "the-reading-room",
    title: "Status Information Available to Public",
    mpepRef: "37 CFR 1.14(e)",
    instruction:
      "Identify the specific information the public may obtain about any application.",
    segments: [
      { text: "The Office will provide to ", isTestable: false },
      { text: "any person", isTestable: true, explanation: "Key phrase — status information is available to ANY person, not just authorized parties." },
      { text: " upon request, the following information about ", isTestable: false },
      { text: "any patent application", isTestable: true, explanation: "Scope — this applies to ANY application, not just published ones." },
      { text: ": whether the application is ", isTestable: false },
      { text: "pending, abandoned, or patented", isTestable: true, explanation: "The three status categories — the only information available to the public for unpublished applications." },
      { text: ". No other information about the application ", isTestable: false },
      { text: "will be provided without proper authorization", isTestable: true, explanation: "Limitation — status is the ceiling of public access for unpublished applications." },
      { text: " under this section.", isTestable: false },
    ],
  },
  {
    id: "z2-ph-6",
    zoneSlug: "the-reading-room",
    title: "Petition for Access to Unpublished Abandoned Applications",
    mpepRef: "37 CFR 1.14(i)",
    instruction:
      "Highlight the requirements for petitioning for access to unpublished abandoned files.",
    segments: [
      { text: "A petition may be filed to obtain access to ", isTestable: false },
      { text: "an unpublished abandoned application", isTestable: true, explanation: "Scope — this provision applies specifically to applications that are both unpublished AND abandoned." },
      { text: " when the petitioner can show that ", isTestable: false },
      { text: "the application is relied upon as a reference", isTestable: true, explanation: "First basis — the abandoned application is being used as prior art or a reference in another proceeding." },
      { text: " or has been ", isTestable: false },
      { text: "identified in a published document", isTestable: true, explanation: "Second basis — the application was mentioned in a published patent, paper, or other public document." },
      { text: ". The petition must ", isTestable: false },
      { text: "identify the application", isTestable: true, explanation: "Procedural requirement — the petitioner must specify which application they seek access to." },
      { text: " and provide sufficient information to support the request.", isTestable: false },
    ],
  },
];
