import {
  TrapDetectorQuestion,
  SourceSortItem,
  PatternHighlightExcerpt,
  SpotTheErrorData,
} from "@/types";

// ============================================================
// Zone 5: The Sealed Chamber — Recognize Phase Content
// MPEP 120, 121, 130 — Secrecy Orders (35 USC 181-186)
// Trap Detectors, Source Sorts, Pattern Highlights
// ============================================================

// --- TRAP DETECTOR QUESTIONS (10) ---
// Each has 1 verbatim_correct + 3 trap-type distractors

export const ZONE5_TRAP_DETECTORS: TrapDetectorQuestion[] = [
  {
    id: "z5-trap-1",
    conceptId: "sec-order-basics",
    zoneSlug: "the-sealed-chamber",
    stem: "Under 35 USC 181, when may a secrecy order be imposed on a patent application?",
    options: [
      {
        text: "When the publication or disclosure of the invention would be detrimental to the national security",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 35 USC 181 authorizes secrecy orders when disclosure would be detrimental to national security.",
      },
      {
        text: "When the publication or disclosure of the invention would be detrimental to the public interest",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — substitutes 'public interest' for 'national security.' The standard is specifically national security, not the broader public interest.",
      },
      {
        text: "When the publication or disclosure of the invention would be detrimental to the national security, as determined by the examiner under 37 CFR 5.2",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — secrecy orders are authorized by 35 USC 181, not 37 CFR 5.2. Furthermore, the determination is made by the head of an interested government agency, not the examiner.",
      },
      {
        text: "When the publication or disclosure of the invention could potentially affect national defense capabilities",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — broadens the standard from 'detrimental to the national security' to 'could potentially affect.' The statute requires a finding of actual detriment, not mere potential effect.",
      },
    ],
    correctIndex: 0,
    explanation:
      "Under 35 USC 181, a secrecy order is imposed when the head of an interested government agency determines that publication or disclosure of the invention would be detrimental to national security.",
    citationRef: "35 USC 181",
  },
  {
    id: "z5-trap-2",
    conceptId: "sec-order-duration",
    zoneSlug: "the-sealed-chamber",
    stem: "How long does a secrecy order remain in effect under 35 USC 181?",
    options: [
      {
        text: "The order remains in effect for 2 years and may be renewed",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — doubles the actual duration. Secrecy orders last 1 year, not 2 years.",
      },
      {
        text: "The order remains in effect for 1 year and may be renewed for additional periods",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Under 35 USC 181, secrecy orders last 1 year and are renewable for additional periods.",
      },
      {
        text: "The order remains in effect for 1 year and may be renewed once for one additional year",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — adds a fabricated renewal limitation. There is no statutory limit on the number of renewals; orders can be renewed indefinitely.",
      },
      {
        text: "The order remains in effect indefinitely until the Commissioner revokes it",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — secrecy orders are not indefinite. They have a defined 1-year term, though they can be renewed.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 181, a secrecy order is in effect for a period of 1 year. It may be renewed for additional periods of 1 year upon notification by the head of the interested agency.",
    citationRef: "35 USC 181",
  },
  {
    id: "z5-trap-3",
    conceptId: "sec-order-types",
    zoneSlug: "the-sealed-chamber",
    stem: "What distinguishes a Type I secrecy order from Type II and Type III orders?",
    options: [
      {
        text: "Type I permits filing in up to 18 specified countries; Type II prohibits all foreign filing; Type III prohibits any disclosure",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Type I allows filing in certain allied countries (up to 18), Type II bars foreign filing entirely, and Type III bars all disclosure.",
      },
      {
        text: "Type I permits filing in up to 12 specified countries; Type II prohibits all foreign filing; Type III prohibits any disclosure",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — uses the wrong number. Type I permits filing in up to 18 countries, not 12.",
      },
      {
        text: "Type I permits filing in up to 18 specified countries; Type II prohibits any disclosure; Type III prohibits all foreign filing",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — swaps the descriptions of Type II and Type III. Type II prohibits foreign filing; Type III is the most restrictive and prohibits any disclosure.",
      },
      {
        text: "Type I permits foreign filing with prior approval; Type II permits filing in allied countries only; Type III prohibits all disclosure",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — mischaracterizes Type I and Type II entirely. Type I has a specified list of 18 countries (no prior approval needed); Type II is a complete bar on foreign filing.",
      },
    ],
    correctIndex: 0,
    explanation:
      "The three types of secrecy orders impose escalating restrictions: Type I allows filing in up to 18 allied countries, Type II bars all foreign filing, and Type III (the most restrictive) bars any disclosure of the subject matter.",
    citationRef: "35 USC 181 / MPEP 120",
  },
  {
    id: "z5-trap-4",
    conceptId: "sec-foreign-license-revoke",
    zoneSlug: "the-sealed-chamber",
    stem: "Under 37 CFR 5.2, what is the effect of a secrecy order on any previously granted foreign filing license?",
    options: [
      {
        text: "The foreign filing license is suspended but may be reinstated upon petition",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — the license is revoked, not suspended. There is no reinstatement by petition while the secrecy order is in effect.",
      },
      {
        text: "The secrecy order revokes any previously granted foreign filing license",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Under 37 CFR 5.2, a secrecy order automatically revokes any foreign filing license that was previously issued.",
      },
      {
        text: "The foreign filing license remains valid for filings already in progress",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — adds a carve-out for in-progress filings that does not exist. The revocation is complete and immediate.",
      },
      {
        text: "The secrecy order revokes any previously granted foreign filing license under 35 USC 184",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the revocation rule is in 37 CFR 5.2, not 35 USC 184. Section 184 addresses the general foreign filing license requirement.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 5.2, a secrecy order automatically revokes any foreign filing license that has been granted on the application. No foreign filing may occur while the order is in effect.",
    citationRef: "37 CFR 5.2",
  },
  {
    id: "z5-trap-5",
    conceptId: "sec-related-matter",
    zoneSlug: "the-sealed-chamber",
    stem: "Under 37 CFR 5.3, to what material does a secrecy order extend beyond the original application?",
    options: [
      {
        text: "Only to continuation applications that directly claim priority to the original",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — too narrowly limits the scope. The order extends to all related or substantially same subject matter, not just continuations claiming priority.",
      },
      {
        text: "To any application containing substantially the same subject matter as the original",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Under 37 CFR 5.3, a secrecy order extends to any related application or material containing substantially the same subject matter.",
      },
      {
        text: "To any application containing substantially the same subject matter, as determined by the examiner under MPEP 130",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the extension rule is in 37 CFR 5.3, and the determination is not made by the examiner under MPEP 130. MPEP 130 addresses examination procedures under secrecy.",
      },
      {
        text: "To any application filed within 1 year of the original that covers the same technology field",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — invents a 1-year window and substitutes 'technology field' for 'substantially the same subject matter.' There is no time limitation on the extension.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 5.3, a secrecy order extends to any application or material that contains subject matter substantially the same as that in the application under the secrecy order.",
    citationRef: "37 CFR 5.3",
  },
  {
    id: "z5-trap-6",
    conceptId: "sec-violation-penalty",
    zoneSlug: "the-sealed-chamber",
    stem: "Under 35 USC 182, what happens if an applicant violates a secrecy order?",
    options: [
      {
        text: "The applicant is subject to criminal prosecution and a fine of $10,000",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — criminal penalties are under 35 USC 186, not 182. Section 182 addresses abandonment and forfeiture of government claims, not criminal prosecution.",
      },
      {
        text: "The invention is deemed abandoned and the inventor forfeits all claims against the United States government",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Under 35 USC 182, violation of a secrecy order results in the invention being deemed abandoned and forfeiture of any claims against the government.",
      },
      {
        text: "The invention is deemed abandoned but the inventor retains claims against the United States government",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — changes 'forfeits' to 'retains.' The inventor loses both the patent rights AND any claims for compensation against the government.",
      },
      {
        text: "The patent application is deemed abandoned after a 6-month grace period",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — invents a 6-month grace period. Abandonment is immediate upon violation; there is no grace period.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 182, violating a secrecy order causes the invention to be deemed abandoned and the inventor forfeits all rights to compensation from the government for the use of the invention.",
    citationRef: "35 USC 182",
  },
  {
    id: "z5-trap-7",
    conceptId: "sec-compensation",
    zoneSlug: "the-sealed-chamber",
    stem: "Under 35 USC 183, what remedy is available to an inventor whose patent application is subject to a secrecy order?",
    options: [
      {
        text: "The inventor may seek compensation for damages caused by the secrecy order",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 35 USC 183 provides a right to compensation for damages caused by the secrecy order, including the inability to exploit the invention.",
      },
      {
        text: "The inventor may seek compensation for damages caused by the secrecy order, but only within 2 years of the order being lifted",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — adds a fabricated 2-year filing deadline. While there are procedural requirements, the statute does not impose a rigid 2-year limitation on seeking compensation.",
      },
      {
        text: "The inventor may seek compensation for damages from the examining agency that requested the secrecy order",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — changes the target of the claim. Compensation is sought from the United States government (through the appropriate process), not from the individual examining agency.",
      },
      {
        text: "The inventor may seek expedited examination in exchange for the delay caused by the secrecy order",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — the remedy is monetary compensation, not expedited examination. There is no provision for fast-tracking examination as a remedy for secrecy orders.",
      },
    ],
    correctIndex: 0,
    explanation:
      "Under 35 USC 183, an inventor whose application is under a secrecy order may apply for compensation for damages caused by the order, including the inability to file abroad or exploit the invention commercially.",
    citationRef: "35 USC 183",
  },
  {
    id: "z5-trap-8",
    conceptId: "sec-criminal-penalty",
    zoneSlug: "the-sealed-chamber",
    stem: "What are the maximum criminal penalties for willful violation of a secrecy order under 35 USC 186?",
    options: [
      {
        text: "A fine of up to $10,000 or imprisonment for up to 5 years, or both",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — inflates imprisonment from 2 years to 5 years. The correct maximum is 2 years.",
      },
      {
        text: "A fine of up to $10,000 or imprisonment for up to 2 years, or both",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 35 USC 186 specifies a maximum fine of $10,000 and/or imprisonment for up to 2 years for willful violations.",
      },
      {
        text: "A fine of up to $50,000 or imprisonment for up to 2 years, or both",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — inflates the fine from $10,000 to $50,000. The correct statutory maximum fine is $10,000.",
      },
      {
        text: "Invention abandonment plus a fine of up to $10,000 or imprisonment for up to 2 years",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — merges two separate penalties. Abandonment is under 35 USC 182; criminal penalties are under 35 USC 186. They are distinct provisions.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 186, willful violation of a secrecy order is punishable by a fine of not more than $10,000, or imprisonment for not more than 2 years, or both.",
    citationRef: "35 USC 186",
  },
  {
    id: "z5-trap-9",
    conceptId: "sec-examination-under-secrecy",
    zoneSlug: "the-sealed-chamber",
    stem: "According to MPEP 130, how is a patent application handled during examination while under a secrecy order?",
    options: [
      {
        text: "Examination is suspended until the secrecy order is lifted",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — examination is NOT suspended. It continues normally under secrecy, but the application is not published and certain procedures are restricted.",
      },
      {
        text: "Examination continues under secrecy; the application is not published; and the right to appeal is restricted",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Under MPEP 130, examination proceeds normally under the secrecy order, but the application is withheld from publication and appeal rights are limited.",
      },
      {
        text: "Examination continues under secrecy; the application is not published; and the right to appeal is restricted under 37 CFR 5.2",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the examination procedure is described in MPEP 130, not 37 CFR 5.2. Section 5.2 addresses the effect of secrecy orders on foreign filing licenses.",
      },
      {
        text: "Examination continues under secrecy; the application is not published; the right to appeal is unrestricted to preserve due process",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — changes 'restricted' to 'unrestricted.' Appeal rights ARE restricted for applications under secrecy orders.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under MPEP 130, examination of an application under a secrecy order continues, but the application is withheld from publication and appeal procedures are restricted to maintain secrecy.",
    citationRef: "MPEP 130",
  },
  {
    id: "z5-trap-10",
    conceptId: "sec-licensing-review",
    zoneSlug: "the-sealed-chamber",
    stem: "According to MPEP 121, which office within the USPTO handles applications that bear security markings?",
    options: [
      {
        text: "The Technology Center to which the application is assigned",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — Technology Centers handle prosecution, not security-marked applications. The initial handling is by the Licensing and Review office.",
      },
      {
        text: "Licensing and Review",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Under MPEP 121, applications bearing security markings are handled by the Licensing and Review office within the USPTO.",
      },
      {
        text: "The Office of Patent Legal Administration",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — the Office of Patent Legal Administration handles legal policy, not security-marked applications.",
      },
      {
        text: "Licensing and Review, as directed by 37 CFR 5.3",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — while Licensing and Review is correct, the handling of security-marked applications is described in MPEP 121, not 37 CFR 5.3. Section 5.3 addresses the scope of secrecy orders.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Under MPEP 121, applications received with security markings are forwarded to and processed by the Licensing and Review office within the USPTO.",
    citationRef: "MPEP 121",
  },
];

// --- SOURCE SORT ITEMS (12) ---
// 4 statutes, 4 regulations, 4 MPEP guidance

export const ZONE5_SOURCE_SORTS: SourceSortItem[] = [
  // Statutes
  {
    id: "z5-sort-1",
    zoneSlug: "the-sealed-chamber",
    ruleText:
      "Whenever the publication or disclosure of an invention would be detrimental to the national security, the Commissioner shall order that the invention be kept secret.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 181, which authorizes the imposition of secrecy orders on patent applications.",
    specificRef: "35 USC 181",
  },
  {
    id: "z5-sort-2",
    zoneSlug: "the-sealed-chamber",
    ruleText:
      "An order of secrecy shall remain in effect for a period of one year and may be renewed for additional periods.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 181 establishing the 1-year duration of secrecy orders and the renewal mechanism.",
    specificRef: "35 USC 181",
  },
  {
    id: "z5-sort-3",
    zoneSlug: "the-sealed-chamber",
    ruleText:
      "If a secrecy order is violated, the invention shall be deemed abandoned, and the inventor shall forfeit all claims against the United States government.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 182 establishing the consequences of violating a secrecy order — abandonment plus forfeiture of government claims.",
    specificRef: "35 USC 182",
  },
  {
    id: "z5-sort-4",
    zoneSlug: "the-sealed-chamber",
    ruleText:
      "An applicant whose invention is subject to a secrecy order may apply for compensation for the damage caused by such order.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 35 USC 183, which provides a right to compensation for damages resulting from a secrecy order.",
    specificRef: "35 USC 183",
  },
  // Regulations
  {
    id: "z5-sort-5",
    zoneSlug: "the-sealed-chamber",
    ruleText:
      "A secrecy order shall revoke any foreign filing license previously granted on the application.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 5.2, which specifies the automatic revocation of foreign filing licenses upon imposition of a secrecy order.",
    specificRef: "37 CFR 5.2",
  },
  {
    id: "z5-sort-6",
    zoneSlug: "the-sealed-chamber",
    ruleText:
      "A secrecy order applies not only to the original application but also to any application containing subject matter substantially the same as that under the order.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 5.3, extending secrecy orders to related applications containing substantially the same subject matter.",
    specificRef: "37 CFR 5.3",
  },
  {
    id: "z5-sort-7",
    zoneSlug: "the-sealed-chamber",
    ruleText:
      "Any person who has knowledge of an invention subject to a secrecy order shall not disclose the invention to any unauthorized person.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language implementing the disclosure restrictions under secrecy orders. The prohibition extends to any person with knowledge, not only the inventor.",
    specificRef: "37 CFR 5.2",
  },
  {
    id: "z5-sort-8",
    zoneSlug: "the-sealed-chamber",
    ruleText:
      "A petition to rescind a secrecy order may be filed by the applicant, accompanied by evidence that the subject matter no longer warrants classification.",
    correctSource: "regulation",
    explanation:
      "This is regulatory language from 37 CFR 5.4, which provides the procedure for petitioning to have a secrecy order rescinded.",
    specificRef: "37 CFR 5.4",
  },
  // MPEP guidance
  {
    id: "z5-sort-9",
    zoneSlug: "the-sealed-chamber",
    ruleText:
      "Applications bearing security markings from a government agency should be forwarded to the Licensing and Review office for initial processing and determination.",
    correctSource: "mpep_guidance",
    explanation:
      "This is procedural guidance from MPEP 121 directing how security-marked applications are routed internally at the USPTO.",
    specificRef: "MPEP 121",
  },
  {
    id: "z5-sort-10",
    zoneSlug: "the-sealed-chamber",
    ruleText:
      "Examination of applications under secrecy orders proceeds in the normal manner, but the application is not published and appeal procedures are subject to additional restrictions.",
    correctSource: "mpep_guidance",
    explanation:
      "This is procedural guidance from MPEP 130 describing how examination continues under secrecy orders — a practical instruction, not a statutory or regulatory requirement.",
    specificRef: "MPEP 130",
  },
  {
    id: "z5-sort-11",
    zoneSlug: "the-sealed-chamber",
    ruleText:
      "When a secrecy order is rescinded, the application is processed for publication in the ordinary course, and any previously restricted appeal rights are restored.",
    correctSource: "mpep_guidance",
    explanation:
      "This is practical guidance from MPEP 130 about post-rescission procedures — describing internal USPTO practice rather than a codified legal requirement.",
    specificRef: "MPEP 130",
  },
  {
    id: "z5-sort-12",
    zoneSlug: "the-sealed-chamber",
    ruleText:
      "Practitioners should be aware that secrecy orders may be imposed at any time during prosecution and are not limited to the initial filing stage. The Licensing and Review office monitors applications referred by defense agencies on an ongoing basis.",
    correctSource: "mpep_guidance",
    explanation:
      "This is advisory guidance from MPEP 120/121 informing practitioners about the ongoing nature of security review — a practice note, not a binding legal rule.",
    specificRef: "MPEP 120",
  },
];

// --- PATTERN HIGHLIGHT EXCERPTS (6) ---
// MPEP-style text with testable segments

export const ZONE5_PATTERN_HIGHLIGHTS: PatternHighlightExcerpt[] = [
  {
    id: "z5-ph-1",
    zoneSlug: "the-sealed-chamber",
    title: "Imposition of Secrecy Orders",
    mpepRef: "35 USC 181",
    instruction:
      "Tap the phrases most likely to be tested on the patent bar exam.",
    segments: [
      { text: "Whenever ", isTestable: false },
      {
        text: "the publication or disclosure of an invention",
        isTestable: true,
        explanation:
          "Key trigger — covers both formal publication and informal disclosure.",
      },
      { text: " by the publication of an application or by the granting of a patent ", isTestable: false },
      {
        text: "would be detrimental to the national security",
        isTestable: true,
        explanation:
          "The legal standard — 'detrimental to national security' is the specific threshold. Exam traps substitute 'public interest' or 'national defense.'",
      },
      { text: ", the Commissioner upon being so notified shall ", isTestable: false },
      {
        text: "order that the invention be kept secret",
        isTestable: true,
        explanation:
          "Mandatory action — 'shall order' means the Commissioner must impose the order upon notification; there is no discretion.",
      },
      { text: " and shall withhold the publication of the application ", isTestable: false },
      { text: "or the grant of a patent therefor ", isTestable: false },
      { text: "under the conditions set forth hereinafter. ", isTestable: false },
      {
        text: "An order of secrecy shall remain in effect for a period of one year.",
        isTestable: true,
        explanation:
          "Duration — 1 year is the defined period. Exam commonly tests whether it is 6 months, 1 year, or 2 years.",
      },
    ],
  },
  {
    id: "z5-ph-2",
    zoneSlug: "the-sealed-chamber",
    title: "Three Types of Secrecy Orders",
    mpepRef: "MPEP 120",
    instruction:
      "Identify the critical distinctions between secrecy order types that appear on the exam.",
    segments: [
      {
        text: "Type I secrecy orders",
        isTestable: true,
        explanation:
          "The least restrictive type — permits filing in certain allied countries.",
      },
      { text: " permit the filing of corresponding patent applications ", isTestable: false },
      {
        text: "in up to 18 specified countries",
        isTestable: true,
        explanation:
          "The country limit — 18 countries is a frequently tested number. Common traps use 12 or 20.",
      },
      { text: " that have security agreements with the United States. ", isTestable: false },
      {
        text: "Type II secrecy orders",
        isTestable: true,
        explanation:
          "The mid-level restriction — complete bar on foreign filing but not on all disclosure.",
      },
      { text: " prohibit ", isTestable: false },
      {
        text: "any filing in a foreign country",
        isTestable: true,
        explanation:
          "Total foreign filing bar — distinguishes Type II from Type I, which allows some foreign filing.",
      },
      { text: " but do not restrict all disclosure of the subject matter. ", isTestable: false },
      {
        text: "Type III secrecy orders",
        isTestable: true,
        explanation:
          "The most restrictive type — bars all disclosure, not just foreign filing.",
      },
      { text: " prohibit ", isTestable: false },
      {
        text: "any disclosure of the subject matter whatsoever",
        isTestable: true,
        explanation:
          "Complete disclosure bar — the key distinction from Type II. Exam tests whether Type II or III is the total bar on disclosure.",
      },
      { text: " to any unauthorized person.", isTestable: false },
    ],
  },
  {
    id: "z5-ph-3",
    zoneSlug: "the-sealed-chamber",
    title: "Violation Consequences",
    mpepRef: "35 USC 182",
    instruction:
      "Highlight the specific consequences that examiners test for secrecy order violations.",
    segments: [
      { text: "Whoever, during the period or periods of ", isTestable: false },
      { text: "an order of secrecy under section 181, ", isTestable: false },
      { text: "shall, without due authorization, ", isTestable: false },
      {
        text: "willfully publish or disclose",
        isTestable: true,
        explanation:
          "Intent requirement — 'willfully' limits the violation to intentional acts, not inadvertent disclosure.",
      },
      { text: " or cause to be published or disclosed ", isTestable: false },
      { text: "the invention or ", isTestable: false },
      { text: "any material information with respect thereto, ", isTestable: false },
      { text: "or shall ", isTestable: false },
      {
        text: "willfully, in any manner, file in a foreign country",
        isTestable: true,
        explanation:
          "Foreign filing violation — covers any manner of foreign filing, not just patent applications.",
      },
      { text: " an application for patent or a registration for a utility model, industrial design, or model, ", isTestable: false },
      {
        text: "the invention shall be deemed abandoned",
        isTestable: true,
        explanation:
          "First consequence — the invention itself is deemed abandoned, not just the application.",
      },
      { text: " and ", isTestable: false },
      {
        text: "the inventor shall forfeit all claims against the United States government",
        isTestable: true,
        explanation:
          "Second consequence — forfeiture of compensation claims. Exam tests whether the inventor retains or forfeits government claims.",
      },
      { text: " for the use of the invention.", isTestable: false },
    ],
  },
  {
    id: "z5-ph-4",
    zoneSlug: "the-sealed-chamber",
    title: "Compensation for Secrecy Orders",
    mpepRef: "35 USC 183",
    instruction:
      "Tap the phrases that describe the compensation remedy and its conditions.",
    segments: [
      { text: "An applicant ", isTestable: false },
      {
        text: "whose patent is withheld as herein provided",
        isTestable: true,
        explanation:
          "Eligibility — the applicant must be one whose patent has been withheld due to a secrecy order.",
      },
      { text: " shall have the right, beginning at the date the applicant is notified ", isTestable: false },
      { text: "that, except for such order, ", isTestable: false },
      { text: "the application is otherwise in condition for allowance, ", isTestable: false },
      {
        text: "to apply to the head of any department or agency who caused the order to be issued",
        isTestable: true,
        explanation:
          "The claim target — compensation is sought from the agency that requested the order, routed through the government.",
      },
      { text: " for compensation for ", isTestable: false },
      {
        text: "the damage caused by such order",
        isTestable: true,
        explanation:
          "Scope of damages — compensation covers all damage caused by the secrecy order itself.",
      },
      { text: " to the applicant. ", isTestable: false },
      { text: "The right to compensation ", isTestable: false },
      {
        text: "shall not be waived or forfeited",
        isTestable: true,
        explanation:
          "Protection of the right — the compensation right persists and cannot be unilaterally waived, except by violation of the order under 35 USC 182.",
      },
      { text: " by reason of any failure to file for such compensation.", isTestable: false },
    ],
  },
  {
    id: "z5-ph-5",
    zoneSlug: "the-sealed-chamber",
    title: "Criminal Penalties for Secrecy Violations",
    mpepRef: "35 USC 186",
    instruction:
      "Highlight the specific penalty amounts and mens rea requirements the exam tests.",
    segments: [
      { text: "Whoever, ", isTestable: false },
      {
        text: "willfully",
        isTestable: true,
        explanation:
          "Mens rea requirement — criminal penalties require willful conduct. Inadvertent disclosure does not trigger criminal liability.",
      },
      { text: " violates the provisions of ", isTestable: false },
      { text: "section 181 or section 182 of this title, ", isTestable: false },
      { text: "shall, upon conviction, be fined ", isTestable: false },
      {
        text: "not more than $10,000",
        isTestable: true,
        explanation:
          "Maximum fine — $10,000 is frequently tested. Exam traps use $50,000 or $100,000.",
      },
      { text: ", or ", isTestable: false },
      {
        text: "imprisoned for not more than 2 years",
        isTestable: true,
        explanation:
          "Maximum imprisonment — 2 years. Common exam traps inflate this to 5 years or reduce it to 1 year.",
      },
      { text: ", or both.", isTestable: false },
    ],
  },
  {
    id: "z5-ph-6",
    zoneSlug: "the-sealed-chamber",
    title: "Examination Under Secrecy Orders",
    mpepRef: "MPEP 130",
    instruction:
      "Identify the procedural rules that govern examination of applications under secrecy orders.",
    segments: [
      {
        text: "Examination of an application under a secrecy order",
        isTestable: true,
        explanation:
          "Key principle — examination does proceed. A common misconception is that examination is suspended.",
      },
      { text: " is conducted in ", isTestable: false },
      {
        text: "the same manner as other applications",
        isTestable: true,
        explanation:
          "Normal examination — the secrecy order does not change the substantive examination process.",
      },
      { text: ", except that ", isTestable: false },
      {
        text: "the application shall not be published",
        isTestable: true,
        explanation:
          "Publication bar — secrecy-ordered applications are withheld from publication, unlike the standard 18-month publication.",
      },
      { text: " under 35 USC 122(b) and ", isTestable: false },
      {
        text: "appeal to the Patent Trial and Appeal Board is restricted",
        isTestable: true,
        explanation:
          "Appeal restriction — appeals are limited to maintain secrecy. The PTAB must follow special security procedures.",
      },
      { text: ". When the secrecy order is rescinded, ", isTestable: false },
      { text: "the application is ", isTestable: false },
      {
        text: "processed in the ordinary course",
        isTestable: true,
        explanation:
          "Restoration — once the order is lifted, the application resumes normal processing including publication and unrestricted appeals.",
      },
      { text: " and made available for publication.", isTestable: false },
    ],
  },
];

// --- SPOT THE ERROR ITEMS (4) ---
// Passages with deliberate errors in legal facts

export const ZONE5_SPOT_ERRORS: SpotTheErrorData[] = [
  {
    id: "z5-spot-1",
    zoneSlug: "the-sealed-chamber",
    title: "Secrecy Order Duration and Renewal Errors",
    mpepRef: "MPEP 120 / 35 USC 181",
    instruction: "Read the passage and tap any segments that contain errors.",
    segments: [
      {
        text: "Under 35 USC 181, a secrecy order may be imposed when the publication or disclosure of an invention would be detrimental to the national security.",
        hasError: false,
      },
      {
        text: "Once imposed, the secrecy order remains in effect for a period of two years",
        hasError: true,
        correctedText: "Once imposed, the secrecy order remains in effect for a period of one year",
        explanation: "A secrecy order lasts 1 year, not 2 years. Under 35 USC 181, the order is effective for one year and may be renewed for additional one-year periods.",
      },
      {
        text: "and may be renewed for additional periods upon notification by the head of the interested government agency.",
        hasError: false,
      },
      {
        text: "There is no statutory limit on the number of times a secrecy order may be renewed,",
        hasError: false,
      },
      {
        text: "meaning that in practice, some secrecy orders have remained in effect for decades.",
        hasError: false,
      },
      {
        text: "The determination to impose a secrecy order is made by the patent examiner",
        hasError: true,
        correctedText: "The determination to impose a secrecy order is made by the head of an interested government agency",
        explanation: "The patent examiner does not decide whether to impose a secrecy order. Under 35 USC 181, the head of an interested government agency makes the determination that publication would be detrimental to national security, and the Commissioner then issues the order.",
      },
      {
        text: "who notifies the Commissioner, and the Commissioner shall order the invention kept secret.",
        hasError: false,
      },
    ],
  },
  {
    id: "z5-spot-2",
    zoneSlug: "the-sealed-chamber",
    title: "Secrecy Order Type Classification Errors",
    mpepRef: "MPEP 120",
    instruction: "Read the passage and tap any segments that contain errors.",
    segments: [
      {
        text: "There are three types of secrecy orders, each imposing escalating levels of restriction.",
        hasError: false,
      },
      {
        text: "Type I secrecy orders are the least restrictive, permitting the filing of corresponding patent applications in up to 12 specified countries",
        hasError: true,
        correctedText: "Type I secrecy orders are the least restrictive, permitting the filing of corresponding patent applications in up to 18 specified countries",
        explanation: "Type I orders permit filing in up to 18 specified allied countries, not 12. This is a commonly tested number on the patent bar exam.",
      },
      {
        text: "that have security agreements with the United States.",
        hasError: false,
      },
      {
        text: "Type II secrecy orders prohibit any filing in a foreign country but do not restrict all disclosure of the subject matter.",
        hasError: false,
      },
      {
        text: "Type III secrecy orders are the most restrictive, prohibiting any disclosure of the subject matter whatsoever to any unauthorized person.",
        hasError: false,
      },
      {
        text: "When a secrecy order is imposed, any previously granted foreign filing license remains valid for applications already in progress",
        hasError: true,
        correctedText: "When a secrecy order is imposed, any previously granted foreign filing license is automatically revoked",
        explanation: "Under 37 CFR 5.2, a secrecy order automatically revokes any foreign filing license that has been granted. There is no carve-out for applications in progress.",
      },
      {
        text: "until the secrecy order is rescinded.",
        hasError: false,
      },
    ],
  },
  {
    id: "z5-spot-3",
    zoneSlug: "the-sealed-chamber",
    title: "Secrecy Order Violation Consequences Errors",
    mpepRef: "MPEP 120 / 35 USC 182 / 35 USC 186",
    instruction: "Read the passage and tap any segments that contain errors.",
    segments: [
      {
        text: "Violating a secrecy order carries severe consequences under federal law.",
        hasError: false,
      },
      {
        text: "Under 35 USC 182, if an applicant willfully publishes or discloses an invention subject to a secrecy order, the invention shall be deemed abandoned",
        hasError: false,
      },
      {
        text: "but the inventor retains all claims for compensation against the United States government.",
        hasError: true,
        correctedText: "and the inventor forfeits all claims for compensation against the United States government.",
        explanation: "Under 35 USC 182, the inventor forfeits (not retains) all claims against the government. Violation results in both abandonment and forfeiture of government claims.",
      },
      {
        text: "In addition to these civil consequences, criminal penalties may apply.",
        hasError: false,
      },
      {
        text: "Under 35 USC 186, willful violation of a secrecy order is punishable by a fine of not more than $10,000,",
        hasError: false,
      },
      {
        text: "or imprisonment for not more than 5 years, or both.",
        hasError: true,
        correctedText: "or imprisonment for not more than 2 years, or both.",
        explanation: "The maximum imprisonment under 35 USC 186 is 2 years, not 5 years. The correct penalties are a fine of up to $10,000 and/or imprisonment for up to 2 years.",
      },
      {
        text: "Criminal penalties require a showing of willful conduct; inadvertent disclosure does not trigger criminal liability.",
        hasError: false,
      },
      {
        text: "The secrecy order extends to any application containing subject matter substantially the same as that under the order, as specified in 37 CFR 5.3.",
        hasError: false,
      },
    ],
  },
  {
    id: "z5-spot-4",
    zoneSlug: "the-sealed-chamber",
    title: "Compensation and Examination Under Secrecy Errors",
    mpepRef: "MPEP 120 / MPEP 130 / 35 USC 183",
    instruction: "Read the passage and tap any segments that contain errors.",
    segments: [
      {
        text: "Under 35 USC 183, an inventor whose application is subject to a secrecy order has the right to seek compensation for damages caused by the order.",
        hasError: false,
      },
      {
        text: "This right to compensation arises when the applicant is notified that the application is otherwise in condition for allowance.",
        hasError: false,
      },
      {
        text: "The applicant must file a compensation claim within 2 years of the secrecy order being lifted,",
        hasError: true,
        correctedText: "The right to compensation shall not be waived or forfeited by reason of any failure to file,",
        explanation: "There is no 2-year filing deadline for compensation claims under 35 USC 183. The statute provides that the right to compensation shall not be waived or forfeited by reason of any failure to file for such compensation.",
      },
      {
        text: "or the right is waived.",
        hasError: false,
      },
      {
        text: "Regarding examination, under MPEP 130, examination of an application under a secrecy order is suspended until the order is lifted.",
        hasError: true,
        correctedText: "Regarding examination, under MPEP 130, examination of an application under a secrecy order continues in the same manner as other applications.",
        explanation: "Examination is NOT suspended. Under MPEP 130, examination proceeds normally under the secrecy order. The application is not published and appeal rights are restricted, but examination itself continues.",
      },
      {
        text: "Applications bearing security markings from a government agency are forwarded to the Licensing and Review office for initial processing under MPEP 121.",
        hasError: false,
      },
      {
        text: "Appeal to the Patent Trial and Appeal Board is restricted for applications under secrecy orders, to maintain the confidentiality of the subject matter.",
        hasError: false,
      },
    ],
  },
];
