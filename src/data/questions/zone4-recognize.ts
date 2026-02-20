import {
  TrapDetectorQuestion,
  SourceSortItem,
  PatternHighlightExcerpt,
  SpotTheErrorData,
} from "@/types";

// ============================================================
// Zone 4: The Classified Wing — Recognize Phase Content
// MPEP 115 — National Security Review
// Trap Detectors, Source Sorts, Pattern Highlights
// ============================================================

// --- TRAP DETECTOR QUESTIONS (10) ---
// Each has 1 verbatim_correct + 3 trap-type distractors

export const ZONE4_TRAP_DETECTORS: TrapDetectorQuestion[] = [
  {
    id: "z4-trap-1",
    conceptId: "nsr-screening-authority",
    zoneSlug: "the-classified-wing",
    stem: "Under 35 USC 181, who has the authority to order that a patent application be screened for national security concerns?",
    options: [
      {
        text: "The heads of interested government agencies notify the Commissioner, who refers applications for screening by appropriate defense agencies",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Under 35 USC 181, the Commissioner refers applications to defense agencies upon notification from the heads of interested government agencies.",
      },
      {
        text: "The patent examiner determines whether screening is necessary based on the subject matter classification",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — the patent examiner does not decide whether screening occurs. Screening is handled by defense agencies and directed by government agency heads, not the examiner.",
      },
      {
        text: "The heads of interested government agencies notify the Commissioner, who refers applications for screening within 3 months of filing",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — adds a fabricated 3-month deadline. The statute does not impose a specific time limit on when screening must occur after filing.",
      },
      {
        text: "The Director of National Intelligence coordinates screening across all defense and civilian agencies",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the Director of National Intelligence is not referenced in 35 USC 181. The statute designates the Commissioner acting upon notification from agency heads.",
      },
    ],
    correctIndex: 0,
    explanation:
      "Under 35 USC 181, the heads of interested government agencies (such as DoD) notify the Commissioner that certain subject matter warrants screening, and the Commissioner refers applications to appropriate defense agencies.",
    citationRef: "35 USC 181",
  },
  {
    id: "z4-trap-2",
    conceptId: "nsr-screening-purposes",
    zoneSlug: "the-classified-wing",
    stem: "According to MPEP 115, for what three purposes are patent applications screened during national security review?",
    options: [
      {
        text: "Imposition of a secrecy order, compliance with export control regulations, and determination of government property interest",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. MPEP 115 identifies these three distinct screening purposes: secrecy orders, export control, and government property interest.",
      },
      {
        text: "Imposition of a secrecy order, compliance with export control regulations, and determination of patent eligibility",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — substitutes 'patent eligibility' for 'government property interest.' Patent eligibility is a substantive examination issue under 35 USC 101, not a screening purpose.",
      },
      {
        text: "Imposition of a secrecy order, identification of classified subject matter, and determination of government property interest",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — replaces 'export control compliance' with 'identification of classified subject matter.' While related, the screening specifically addresses export control regulations, not classification status.",
      },
      {
        text: "Imposition of a secrecy order, compliance with export control regulations, and determination of government property interest under 37 CFR 5.2",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the three screening purposes are described in MPEP 115, not 37 CFR 5.2. Section 5.2 addresses the effect of secrecy orders on foreign filing licenses.",
      },
    ],
    correctIndex: 0,
    explanation:
      "MPEP 115 explains that applications are screened for three purposes: (1) whether a secrecy order should be imposed, (2) compliance with export control regulations, and (3) whether the government has a property interest in the invention.",
    citationRef: "MPEP 115",
  },
  {
    id: "z4-trap-3",
    conceptId: "nsr-classified-filing",
    zoneSlug: "the-classified-wing",
    stem: "According to MPEP 115, how must a classified patent application be filed with the USPTO?",
    options: [
      {
        text: "By secure electronic filing through the Patent Center classified portal",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — there is no classified electronic portal. Classified applications cannot be filed electronically; they must be hand-carried.",
      },
      {
        text: "By hand-carrying the application to the Licensing and Review division",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. MPEP 115 requires that classified applications be hand-carried to the L&R division. Electronic and mail filing are not permitted for classified material.",
      },
      {
        text: "By hand-carrying the application to the Office of Patent Application Processing",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — substitutes the wrong office. Classified applications go to Licensing and Review (L&R), not the Office of Patent Application Processing, which handles unclassified filings.",
      },
      {
        text: "By registered mail with security markings to the Licensing and Review division",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — adds registered mail as an option. Classified applications must be hand-carried; they cannot be sent through any mail system, even registered mail.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under MPEP 115, classified patent applications must be hand-carried directly to the Licensing and Review (L&R) division. They cannot be filed electronically or sent through the mail.",
    citationRef: "MPEP 115",
  },
  {
    id: "z4-trap-4",
    conceptId: "nsr-security-clearance",
    zoneSlug: "the-classified-wing",
    stem: "What is required of a patent practitioner who prosecutes a classified patent application?",
    options: [
      {
        text: "The practitioner must sign a non-disclosure agreement with the USPTO",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — a non-disclosure agreement is not sufficient. The practitioner must hold an actual security clearance at the appropriate level.",
      },
      {
        text: "The practitioner must hold an appropriate security clearance",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Under MPEP 115, a practitioner must possess an appropriate security clearance to prosecute classified patent applications before the USPTO.",
      },
      {
        text: "The practitioner must hold an appropriate security clearance, which must be renewed every 6 months",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — adds a fabricated 6-month renewal cycle. While security clearances do have renewal requirements, MPEP 115 does not specify a 6-month renewal period.",
      },
      {
        text: "The practitioner must hold an appropriate security clearance issued by the USPTO under 37 CFR 5.1",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the USPTO does not issue security clearances. Clearances are issued by the appropriate government agency (e.g., DoD), not the USPTO, and 37 CFR 5.1 does not govern clearances.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under MPEP 115, any practitioner who prosecutes a classified application must hold an appropriate security clearance. The clearance level must correspond to the classification level of the application.",
    citationRef: "MPEP 115",
  },
  {
    id: "z4-trap-5",
    conceptId: "nsr-lr-code-assignment",
    zoneSlug: "the-classified-wing",
    stem: "According to MPEP 115, what does the Licensing and Review division do after completing national security screening of an application?",
    options: [
      {
        text: "L&R assigns a code to the application indicating the screening outcome, such as whether a foreign filing license is granted",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. After screening, L&R assigns a code to the application that reflects the result of the national security review, including foreign filing license status.",
      },
      {
        text: "L&R issues a formal written opinion to the applicant detailing the security review findings",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — L&R does not issue formal written opinions to applicants about screening findings. The outcome is communicated through codes assigned to the application.",
      },
      {
        text: "L&R assigns a code to the application indicating the screening outcome within 30 days of filing",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — adds a fabricated 30-day deadline. While screening occurs early in prosecution, MPEP 115 does not specify a 30-day period for code assignment.",
      },
      {
        text: "L&R assigns a code and forwards the results to the examiner, who then decides whether to impose a secrecy order",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — adds an incorrect role for the examiner. The examiner does not decide whether to impose secrecy orders; that determination is made by defense agencies and the Commissioner.",
      },
    ],
    correctIndex: 0,
    explanation:
      "After completing national security screening, the Licensing and Review division assigns a code to each application indicating the outcome. This code reflects whether a secrecy order is imposed, a foreign filing license is granted, or other actions are taken.",
    citationRef: "MPEP 115",
  },
  {
    id: "z4-trap-6",
    conceptId: "nsr-defense-screening",
    zoneSlug: "the-classified-wing",
    stem: "Which agencies are primarily responsible for screening patent applications for national defense concerns under 35 USC 181?",
    options: [
      {
        text: "The Department of Defense and the National Security Agency",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Under 35 USC 181, the Department of Defense (DoD) and the National Security Agency (NSA) are the primary agencies responsible for screening applications for national defense concerns.",
      },
      {
        text: "The Department of Defense and the Central Intelligence Agency",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — substitutes the CIA for the NSA. While the CIA deals with national security, the NSA is the agency specifically involved in patent application screening under this provision.",
      },
      {
        text: "The Department of Defense, the National Security Agency, and the Department of Energy",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — includes DOE in the defense screening category. DOE screens for atomic energy inventions under 42 USC 2182, which is a separate screening category from the defense screening under 35 USC 181.",
      },
      {
        text: "The Department of Defense and the National Security Agency under authority of 37 CFR 5.1",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the screening authority comes from 35 USC 181, not 37 CFR 5.1. The statute provides the authority; the regulation addresses procedural matters.",
      },
    ],
    correctIndex: 0,
    explanation:
      "Under 35 USC 181, the Department of Defense (DoD) and the National Security Agency (NSA) are the primary agencies responsible for screening patent applications for potential national defense concerns.",
    citationRef: "35 USC 181",
  },
  {
    id: "z4-trap-7",
    conceptId: "nsr-doe-nasa-screening",
    zoneSlug: "the-classified-wing",
    stem: "Under what statutory authority does the Department of Energy screen patent applications for atomic energy inventions?",
    options: [
      {
        text: "42 USC 2182, which grants DOE authority to screen for inventions useful in the production or utilization of special nuclear material or atomic energy",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 42 USC 2182 (Atomic Energy Act) grants DOE the authority to screen patent applications for atomic energy related inventions.",
      },
      {
        text: "35 USC 181, which grants DOE authority to screen for inventions related to atomic energy as a subcategory of national defense",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — DOE's screening authority comes from 42 USC 2182 (Atomic Energy Act), not 35 USC 181. Section 181 covers defense agency screening, not DOE's specific atomic energy mandate.",
      },
      {
        text: "42 USC 2182, which grants DOE authority to screen for inventions useful in the production or utilization of special nuclear material or atomic energy, within 60 days of filing",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — adds a fabricated 60-day deadline. The statute does not specify a time limit within which DOE must complete its screening.",
      },
      {
        text: "51 USC 20135, which grants DOE authority to screen for inventions related to energy production",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — 51 USC 20135 is NASA's statutory authority for space-related inventions, not DOE's authority. DOE's authority is under 42 USC 2182.",
      },
    ],
    correctIndex: 0,
    explanation:
      "The Department of Energy screens patent applications under 42 USC 2182 (Atomic Energy Act) for inventions related to the production or utilization of special nuclear material or atomic energy.",
    citationRef: "42 USC 2182",
  },
  {
    id: "z4-trap-8",
    conceptId: "nsr-screening-timing",
    zoneSlug: "the-classified-wing",
    stem: "When during patent prosecution does national security screening occur according to MPEP 115?",
    options: [
      {
        text: "After the first office action is issued by the examiner",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — screening does not wait for the first office action. It occurs early in prosecution, before substantive examination begins.",
      },
      {
        text: "Early in prosecution, before substantive examination of the application begins",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Under MPEP 115, national security screening occurs early in the prosecution process, before the examiner conducts substantive examination.",
      },
      {
        text: "Early in prosecution, before substantive examination, and must be completed within 90 days of filing",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — adds a fabricated 90-day completion deadline. While screening does occur early, MPEP 115 does not impose a specific 90-day time limit.",
      },
      {
        text: "Early in prosecution, before substantive examination, as required by 37 CFR 5.2",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the screening timing is described in MPEP 115, not 37 CFR 5.2. Section 5.2 addresses the effect of secrecy orders on foreign filing licenses.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under MPEP 115, national security screening is conducted early in prosecution, before substantive examination begins. This ensures that any security concerns are identified before the application is examined on its merits.",
    citationRef: "MPEP 115",
  },
  {
    id: "z4-trap-9",
    conceptId: "nsr-nasa-screening",
    zoneSlug: "the-classified-wing",
    stem: "Under what statutory authority does NASA screen patent applications for space-related inventions?",
    options: [
      {
        text: "51 USC 20135, which addresses inventions made under NASA contracts and space-related technology",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 51 USC 20135 (formerly 42 USC 2457) provides NASA's authority to screen for and assert rights in space-related and aeronautics inventions.",
      },
      {
        text: "42 USC 2182, which addresses inventions related to aeronautics and space exploration",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — 42 USC 2182 is DOE's authority for atomic energy, not NASA's authority. NASA's authority is under 51 USC 20135.",
      },
      {
        text: "51 USC 20135, which addresses inventions made under any government contract involving aerospace technology",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — broadens the scope to 'any government contract involving aerospace technology.' The statute specifically covers NASA contracts and space-related technology, not all government aerospace contracts.",
      },
      {
        text: "35 USC 181, which covers all national security screening including NASA's review of space technologies",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — 35 USC 181 addresses defense agency screening, not NASA's specific authority. NASA has its own statutory basis under 51 USC 20135.",
      },
    ],
    correctIndex: 0,
    explanation:
      "NASA screens patent applications under 51 USC 20135 for inventions related to aeronautics and space. This is a separate screening authority from the defense screening under 35 USC 181 and DOE screening under 42 USC 2182.",
    citationRef: "51 USC 20135",
  },
  {
    id: "z4-trap-10",
    conceptId: "nsr-lr-role",
    zoneSlug: "the-classified-wing",
    stem: "According to MPEP 115, what is the role of the Licensing and Review (L&R) division in the national security screening process?",
    options: [
      {
        text: "L&R receives applications, coordinates screening with defense agencies, manages classified applications, and assigns codes indicating the screening outcome",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. L&R serves as the central hub for national security screening: receiving applications (especially classified ones), coordinating with defense agencies, and assigning outcome codes.",
      },
      {
        text: "L&R independently determines whether applications contain national security-sensitive subject matter without consulting defense agencies",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — L&R does not make independent determinations. It coordinates with defense agencies (DoD, NSA), DOE, and NASA, which perform the actual security assessments.",
      },
      {
        text: "L&R receives applications, coordinates screening with defense agencies, and must complete all screening within 6 months of filing",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — adds a fabricated 6-month completion deadline. MPEP 115 does not impose a specific time limit on L&R's screening coordination activities.",
      },
      {
        text: "L&R receives applications and coordinates screening, but only for applications filed by government employees or contractors",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — incorrectly limits L&R's role to government-related applications. L&R handles national security screening for all patent applications, not just those filed by government employees or contractors.",
      },
    ],
    correctIndex: 0,
    explanation:
      "The Licensing and Review division is the central office within the USPTO responsible for national security screening. It receives classified applications by hand-carry, coordinates with defense agencies for screening, and assigns codes indicating the screening outcome.",
    citationRef: "MPEP 115",
  },
];

// --- SOURCE SORT ITEMS (12) ---
// 4 statutes, 4 regulations, 4 MPEP guidance

export const ZONE4_SOURCE_SORTS: SourceSortItem[] = [
  // Statutes
  {
    id: "z4-sort-1",
    zoneSlug: "the-classified-wing",
    ruleText:
      "Each application for patent shall be referred to the appropriate defense agency for a determination of whether disclosure of the invention would be detrimental to the national security.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 181, which authorizes the referral of patent applications to defense agencies for national security screening.",
    specificRef: "35 USC 181",
  },
  {
    id: "z4-sort-2",
    zoneSlug: "the-classified-wing",
    ruleText:
      "Any invention which is useful in the production or utilization of special nuclear material or atomic energy may be the subject of a declaration by the Department of Energy that the government has a property interest.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 42 USC 2182 (Atomic Energy Act), which grants DOE authority over atomic energy related inventions, including the ability to declare government property interest.",
    specificRef: "42 USC 2182",
  },
  {
    id: "z4-sort-3",
    zoneSlug: "the-classified-wing",
    ruleText:
      "Inventions made by any person under a NASA contract or in the performance of work under a NASA contract shall be the exclusive property of the United States unless the Administrator waives all or any part of such rights.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 51 USC 20135, which establishes NASA's rights in inventions made under its contracts and provides the basis for NASA's screening of patent applications.",
    specificRef: "51 USC 20135",
  },
  {
    id: "z4-sort-4",
    zoneSlug: "the-classified-wing",
    ruleText:
      "Whenever the publication or disclosure of an invention would be detrimental to the national security, the Commissioner shall order that the invention be kept secret and shall withhold the publication of the application.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 181, establishing the Commissioner's mandatory duty to impose secrecy orders when disclosure would harm national security.",
    specificRef: "35 USC 181",
  },
  // Regulations
  {
    id: "z4-sort-5",
    zoneSlug: "the-classified-wing",
    ruleText:
      "A secrecy order shall bar the grant of any foreign filing license on the application to which it applies and shall revoke any license previously granted.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 5.2, which specifies the automatic effect of a secrecy order on foreign filing licenses — both barring new ones and revoking existing ones.",
    specificRef: "37 CFR 5.2",
  },
  {
    id: "z4-sort-6",
    zoneSlug: "the-classified-wing",
    ruleText:
      "The scope of a secrecy order extends to any related application containing subject matter that is substantially the same as the application originally placed under the order.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 5.3, which extends secrecy orders beyond the original application to any application containing substantially the same subject matter.",
    specificRef: "37 CFR 5.3",
  },
  {
    id: "z4-sort-7",
    zoneSlug: "the-classified-wing",
    ruleText:
      "The filing of a patent application in the United States Patent and Trademark Office shall constitute a petition for a foreign filing license under 35 USC 184.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 5.12, implementing the automatic petition for a foreign filing license upon filing a US application.",
    specificRef: "37 CFR 5.12",
  },
  {
    id: "z4-sort-8",
    zoneSlug: "the-classified-wing",
    ruleText:
      "A petition to rescind a secrecy order shall be accompanied by evidence showing that the subject matter no longer warrants the classification that led to imposition of the order.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 5.4, which provides the procedure for petitioning to have a secrecy order lifted when the security concern no longer exists.",
    specificRef: "37 CFR 5.4",
  },
  // MPEP guidance
  {
    id: "z4-sort-9",
    zoneSlug: "the-classified-wing",
    ruleText:
      "Applications are screened for three purposes: imposition of a secrecy order, compliance with export control regulations, and determination of whether the government has a property interest in the invention.",
    correctSource: "mpep_guidance",
    explanation:
      "This is procedural guidance from MPEP 115 describing the three purposes of national security screening — an informational summary, not a binding legal requirement from statute or regulation.",
    specificRef: "MPEP 115",
  },
  {
    id: "z4-sort-10",
    zoneSlug: "the-classified-wing",
    ruleText:
      "Classified patent applications must be hand-carried to the Licensing and Review division and may not be filed electronically or sent through the mail.",
    correctSource: "mpep_guidance",
    explanation:
      "This is procedural guidance from MPEP 115 describing the filing procedure for classified applications — an internal USPTO practice instruction rather than a statutory or regulatory mandate.",
    specificRef: "MPEP 115",
  },
  {
    id: "z4-sort-11",
    zoneSlug: "the-classified-wing",
    ruleText:
      "National security screening occurs early in prosecution, before substantive examination begins. The Licensing and Review division assigns codes to applications indicating the result of the screening process.",
    correctSource: "mpep_guidance",
    explanation:
      "This is practical guidance from MPEP 115 explaining when screening occurs and how results are communicated through L&R codes — an internal procedure description, not a codified legal rule.",
    specificRef: "MPEP 115",
  },
  {
    id: "z4-sort-12",
    zoneSlug: "the-classified-wing",
    ruleText:
      "A practitioner must hold an appropriate security clearance to prosecute a classified patent application. Applications bearing security markings are forwarded to Licensing and Review for special handling.",
    correctSource: "mpep_guidance",
    explanation:
      "This is practical guidance from MPEP 115 advising practitioners about clearance requirements and the routing of security-marked applications — a practice note rather than a statutory or regulatory provision.",
    specificRef: "MPEP 115",
  },
];

// --- PATTERN HIGHLIGHT EXCERPTS (6) ---
// MPEP-style text with testable segments

export const ZONE4_PATTERN_HIGHLIGHTS: PatternHighlightExcerpt[] = [
  {
    id: "z4-ph-1",
    zoneSlug: "the-classified-wing",
    title: "National Security Screening Authority",
    mpepRef: "35 USC 181",
    instruction:
      "Tap the phrases most likely to be tested on the patent bar exam.",
    segments: [
      { text: "Each ", isTestable: false },
      {
        text: "application for patent",
        isTestable: true,
        explanation:
          "Broad scope — screening applies to all patent applications, not just those in defense-related fields.",
      },
      { text: " which is filed in the Patent and Trademark Office ", isTestable: false },
      {
        text: "shall be referred to the appropriate defense agency",
        isTestable: true,
        explanation:
          "Mandatory referral — 'shall' means the referral is required, not discretionary. The Commissioner must refer applications for screening.",
      },
      { text: " for a determination of whether ", isTestable: false },
      {
        text: "disclosure of the invention would be detrimental to the national security",
        isTestable: true,
        explanation:
          "The legal standard — 'detrimental to national security' is the specific threshold. Exam traps substitute 'public interest' or 'national defense.'",
      },
      { text: ". If, in the opinion of ", isTestable: false },
      {
        text: "the head of the interested Government agency",
        isTestable: true,
        explanation:
          "Decision-maker — the agency head (not the Commissioner or examiner) makes the determination about national security impact.",
      },
      { text: ", disclosure would be detrimental, the agency head shall ", isTestable: false },
      { text: "so notify the Commissioner and the Commissioner shall order ", isTestable: false },
      { text: "that the invention be kept secret.", isTestable: false },
    ],
  },
  {
    id: "z4-ph-2",
    zoneSlug: "the-classified-wing",
    title: "Three Screening Purposes",
    mpepRef: "MPEP 115",
    instruction:
      "Identify the three distinct screening purposes that the exam commonly tests.",
    segments: [
      { text: "Patent applications filed with the USPTO are screened for ", isTestable: false },
      {
        text: "three purposes",
        isTestable: true,
        explanation:
          "Key number — the exam tests whether students know there are exactly three screening purposes, not two or four.",
      },
      { text: " during the national security review process. First, applications are screened to determine whether ", isTestable: false },
      {
        text: "a secrecy order should be imposed",
        isTestable: true,
        explanation:
          "Purpose 1 — secrecy orders under 35 USC 181. This is the most commonly tested screening purpose.",
      },
      { text: " under 35 USC 181. Second, screening assesses ", isTestable: false },
      {
        text: "compliance with export control regulations",
        isTestable: true,
        explanation:
          "Purpose 2 — export controls. Exam traps may substitute 'foreign filing license requirements' for 'export control regulations.'",
      },
      { text: " to ensure that sensitive technology is not improperly disclosed. Third, screening determines whether ", isTestable: false },
      {
        text: "the government has a property interest in the invention",
        isTestable: true,
        explanation:
          "Purpose 3 — government property interest. This applies especially to DOE (atomic energy) and NASA (space) inventions made under government contracts.",
      },
      { text: ", particularly for inventions made under government contracts.", isTestable: false },
    ],
  },
  {
    id: "z4-ph-3",
    zoneSlug: "the-classified-wing",
    title: "Classified Application Filing Procedures",
    mpepRef: "MPEP 115",
    instruction:
      "Highlight the procedural requirements for filing classified applications that are commonly tested.",
    segments: [
      {
        text: "Classified patent applications",
        isTestable: true,
        explanation:
          "Scope — these special procedures apply only to classified applications, not to all security-screened applications.",
      },
      { text: " require special filing procedures that differ from standard practice. Such applications ", isTestable: false },
      {
        text: "must be hand-carried",
        isTestable: true,
        explanation:
          "Filing method — hand-carry is the only permitted method. The exam tests whether electronic filing or mail is permitted (it is not).",
      },
      { text: " directly ", isTestable: false },
      {
        text: "to the Licensing and Review division",
        isTestable: true,
        explanation:
          "Destination — L&R is the specific office that handles classified applications. Exam traps substitute other USPTO offices.",
      },
      { text: " of the USPTO. ", isTestable: false },
      {
        text: "Electronic filing is not permitted",
        isTestable: true,
        explanation:
          "Prohibition — classified material cannot be filed electronically through Patent Center or any other electronic system.",
      },
      { text: " for classified applications, ", isTestable: false },
      { text: "nor may they be sent through the mail. ", isTestable: false },
      {
        text: "The practitioner must hold an appropriate security clearance",
        isTestable: true,
        explanation:
          "Clearance requirement — this is a prerequisite for the practitioner, not just for USPTO staff handling the application.",
      },
      { text: " to file and prosecute such applications.", isTestable: false },
    ],
  },
  {
    id: "z4-ph-4",
    zoneSlug: "the-classified-wing",
    title: "DOE Screening for Atomic Energy Inventions",
    mpepRef: "42 USC 2182",
    instruction:
      "Tap the phrases that describe DOE's specific screening authority and scope.",
    segments: [
      {
        text: "The Department of Energy",
        isTestable: true,
        explanation:
          "Screening agency — DOE (not DoD or NSA) handles atomic energy screening. Exam tests whether students can distinguish agency roles.",
      },
      { text: " screens patent applications for inventions ", isTestable: false },
      {
        text: "useful in the production or utilization of special nuclear material or atomic energy",
        isTestable: true,
        explanation:
          "Scope of review — the specific statutory language from 42 USC 2182. Exam traps may broaden this to 'any energy-related technology.'",
      },
      { text: ". This authority derives from ", isTestable: false },
      {
        text: "42 USC 2182",
        isTestable: true,
        explanation:
          "Citation — the Atomic Energy Act provision. Exam traps substitute 35 USC 181 (defense screening) or 51 USC 20135 (NASA screening).",
      },
      { text: " of the Atomic Energy Act. When DOE identifies a relevant invention, it may ", isTestable: false },
      {
        text: "declare that the government has a property interest",
        isTestable: true,
        explanation:
          "Key outcome — DOE can assert government property rights in atomic energy inventions, a distinct outcome from a secrecy order.",
      },
      { text: " in the invention, which can affect the applicant's rights in the patent.", isTestable: false },
    ],
  },
  {
    id: "z4-ph-5",
    zoneSlug: "the-classified-wing",
    title: "NASA Screening for Space-Related Inventions",
    mpepRef: "51 USC 20135",
    instruction:
      "Identify the key elements of NASA's screening authority that distinguish it from defense and DOE screening.",
    segments: [
      {
        text: "NASA screens patent applications",
        isTestable: true,
        explanation:
          "Agency role — NASA has its own independent screening authority separate from defense agencies and DOE.",
      },
      { text: " for inventions related to ", isTestable: false },
      {
        text: "aeronautics and space",
        isTestable: true,
        explanation:
          "Subject matter scope — specifically aeronautics and space, not broader national security or energy. Exam traps may confuse this with DOE's atomic energy scope.",
      },
      { text: " under the authority of ", isTestable: false },
      {
        text: "51 USC 20135",
        isTestable: true,
        explanation:
          "Statutory authority — formerly 42 USC 2457. The exam tests whether students can correctly identify NASA's specific statute versus DOE's (42 USC 2182) or defense (35 USC 181).",
      },
      { text: ". Under this provision, inventions made ", isTestable: false },
      {
        text: "under a NASA contract",
        isTestable: true,
        explanation:
          "Contract nexus — NASA's rights typically arise from inventions made under NASA contracts, which is the triggering connection for screening.",
      },
      { text: " may be claimed as the exclusive property of the United States ", isTestable: false },
      { text: "unless the NASA Administrator waives all or part of such rights.", isTestable: false },
    ],
  },
  {
    id: "z4-ph-6",
    zoneSlug: "the-classified-wing",
    title: "Licensing and Review Division Procedures",
    mpepRef: "MPEP 115",
    instruction:
      "Highlight the key procedural elements of L&R's role in the screening process.",
    segments: [
      { text: "The ", isTestable: false },
      {
        text: "Licensing and Review division",
        isTestable: true,
        explanation:
          "Central office — L&R is the USPTO office that coordinates all national security screening activities. Exam tests whether students know this specific office name.",
      },
      { text: " within the USPTO serves as the central point for ", isTestable: false },
      {
        text: "national security screening of patent applications",
        isTestable: true,
        explanation:
          "Core function — L&R handles screening coordination, not substantive patent examination.",
      },
      { text: ". After receiving an application, L&R coordinates with ", isTestable: false },
      {
        text: "defense agencies, DOE, and NASA",
        isTestable: true,
        explanation:
          "Three screening partners — all three categories of screening agencies are coordinated through L&R.",
      },
      { text: " as appropriate based on the subject matter of the application. ", isTestable: false },
      {
        text: "Screening occurs early in prosecution",
        isTestable: true,
        explanation:
          "Timing — screening happens before substantive examination, not during or after. Exam tests whether screening occurs before or after the first office action.",
      },
      { text: ", before substantive examination begins. Upon completion, ", isTestable: false },
      {
        text: "L&R assigns a code to the application",
        isTestable: true,
        explanation:
          "Outcome communication — the code system is how L&R communicates screening results, indicating foreign filing license status and any secrecy order.",
      },
      { text: " indicating the result of the screening process.", isTestable: false },
    ],
  },
];

// --- SPOT THE ERROR ITEMS (4) ---
// Each has 6-8 segments forming a readable paragraph, with 2-3 deliberate errors

export const ZONE4_SPOT_ERRORS: SpotTheErrorData[] = [
  {
    id: "z4-spot-1",
    zoneSlug: "the-classified-wing",
    title: "Secrecy Order Authority Errors",
    mpepRef: "MPEP 130 — 35 USC 181",
    instruction: "Read the passage and tap any segments that contain errors.",
    segments: [
      {
        text: "Under 35 USC 181, whenever the publication or disclosure of an invention would be detrimental to the national security, ",
        hasError: false,
      },
      {
        text: "the Commissioner shall order that the invention be kept secret and shall withhold the publication of the application. ",
        hasError: false,
      },
      {
        text: "The determination of whether disclosure would be detrimental is made by the patent examiner assigned to the application",
        hasError: true,
        correctedText:
          "The determination of whether disclosure would be detrimental is made by the head of the interested government agency, who notifies the Commissioner",
        explanation:
          "The patent examiner does not decide whether an application poses a national security concern. Under 35 USC 181, the heads of interested government agencies (such as the Department of Defense) make this determination and notify the Commissioner.",
      },
      {
        text: ", who evaluates the subject matter against national security criteria. ",
        hasError: false,
      },
      {
        text: "Applications are referred to the appropriate defense agencies, including the Department of Defense and the National Security Agency, for screening. ",
        hasError: false,
      },
      {
        text: "A secrecy order bars the grant of a patent on the application",
        hasError: true,
        correctedText:
          "A secrecy order bars the publication of the application and withholds the grant of the patent, but the application may still be examined",
        explanation:
          "A secrecy order withholds publication and patent grant, but it does not prevent the application from being examined. The application continues in prosecution; only the public disclosure and patent issuance are blocked.",
      },
      {
        text: " and may remain in effect for renewable periods as specified by the ordering agency.",
        hasError: false,
      },
    ],
  },
  {
    id: "z4-spot-2",
    zoneSlug: "the-classified-wing",
    title: "Classified Filing Procedure Errors",
    mpepRef: "MPEP 130 — Classified Applications",
    instruction: "Read the passage and tap any segments that contain errors.",
    segments: [
      {
        text: "Classified patent applications require special filing procedures that differ from standard practice. ",
        hasError: false,
      },
      {
        text: "Such applications must be hand-carried directly to the Licensing and Review division of the USPTO. ",
        hasError: false,
      },
      {
        text: "Electronic filing through Patent Center is not permitted for classified applications, nor may they be sent through the mail. ",
        hasError: false,
      },
      {
        text: "The practitioner filing a classified application must hold an appropriate security clearance issued by the USPTO",
        hasError: true,
        correctedText:
          "The practitioner filing a classified application must hold an appropriate security clearance issued by the appropriate government agency (e.g., Department of Defense)",
        explanation:
          "The USPTO does not issue security clearances. Security clearances are issued by the appropriate government agency, such as the Department of Defense. The clearance level must correspond to the classification level of the application.",
      },
      {
        text: " at the level corresponding to the classification of the application. ",
        hasError: false,
      },
      {
        text: "After receiving the classified application, the Licensing and Review division coordinates with defense agencies ",
        hasError: false,
      },
      {
        text: "and assigns a code indicating the screening outcome. ",
        hasError: false,
      },
      {
        text: "Screening occurs after the examiner completes substantive examination of the application",
        hasError: true,
        correctedText:
          "Screening occurs early in prosecution, before substantive examination of the application begins",
        explanation:
          "National security screening occurs early in prosecution, before substantive examination begins, not after. This ensures security concerns are identified before the examiner engages with the application on its merits.",
      },
    ],
  },
  {
    id: "z4-spot-3",
    zoneSlug: "the-classified-wing",
    title: "Agency Screening Authority Errors",
    mpepRef: "MPEP 130 — 42 USC 2182 / 51 USC 20135",
    instruction: "Read the passage and tap any segments that contain errors.",
    segments: [
      {
        text: "Patent applications are screened by multiple agencies depending on the subject matter. The Department of Defense and the National Security Agency screen for national defense concerns under 35 USC 181. ",
        hasError: false,
      },
      {
        text: "The Department of Energy screens patent applications for atomic energy inventions under 42 USC 2182, which covers inventions useful in the production or utilization of special nuclear material or atomic energy. ",
        hasError: false,
      },
      {
        text: "NASA screens patent applications for space-related inventions under 42 USC 2182, the same statutory authority used by the Department of Energy",
        hasError: true,
        correctedText:
          "NASA screens patent applications for space-related inventions under 51 USC 20135, a separate statutory authority from DOE's 42 USC 2182",
        explanation:
          "NASA's screening authority comes from 51 USC 20135 (formerly 42 USC 2457), not 42 USC 2182. Each screening agency has its own distinct statutory basis: DOD/NSA under 35 USC 181, DOE under 42 USC 2182, and NASA under 51 USC 20135.",
      },
      {
        text: ". When DOE identifies a relevant invention, it may declare that the government has a property interest in the invention, ",
        hasError: false,
      },
      {
        text: "which can affect the applicant's rights in the patent. ",
        hasError: false,
      },
      {
        text: "Similarly, inventions made under a NASA contract may be claimed as the exclusive property of the United States unless the NASA Administrator waives such rights.",
        hasError: false,
      },
    ],
  },
  {
    id: "z4-spot-4",
    zoneSlug: "the-classified-wing",
    title: "Foreign Filing License and Secrecy Order Errors",
    mpepRef: "MPEP 130 — 37 CFR 5.2 / 35 USC 184",
    instruction: "Read the passage and tap any segments that contain errors.",
    segments: [
      {
        text: "The filing of a patent application in the United States Patent and Trademark Office constitutes a petition for a foreign filing license under 35 USC 184, as implemented by 37 CFR 5.12. ",
        hasError: false,
      },
      {
        text: "The Licensing and Review division reviews each application to determine whether a foreign filing license may be granted. ",
        hasError: false,
      },
      {
        text: "When a secrecy order is imposed on an application under 35 USC 181, the foreign filing license previously granted for that application remains valid",
        hasError: true,
        correctedText:
          "When a secrecy order is imposed on an application under 35 USC 181, any foreign filing license previously granted for that application is automatically revoked",
        explanation:
          "Under 37 CFR 5.2, a secrecy order bars the grant of any foreign filing license and revokes any license previously granted. The foreign filing license does not survive the imposition of a secrecy order.",
      },
      {
        text: " unless explicitly revoked by a separate order. ",
        hasError: false,
      },
      {
        text: "The scope of a secrecy order extends to any related application containing subject matter that is substantially the same as the application originally placed under the order. ",
        hasError: false,
      },
      {
        text: "A petition to rescind a secrecy order must be accompanied by evidence showing that the subject matter no longer warrants the classification that led to its imposition.",
        hasError: false,
      },
      {
        text: " Applications under secrecy orders continue to be examined by the USPTO",
        hasError: true,
        correctedText:
          " Applications under secrecy orders may continue to be examined by the USPTO, but the patent will not be granted while the order remains in effect",
        explanation:
          "While applications under secrecy orders can still be examined, the patent itself will not be granted (issued) while the secrecy order is in effect. The statement as written omits this critical limitation on patent grant.",
      },
      {
        text: " and patents are issued in the normal course upon allowance.",
        hasError: false,
      },
    ],
  },
];
