import {
  ScenarioQuestion,
  QuickFireQuestion,
  ProceduralCascadeData,
  MatchingGameData,
  TimelinePuzzleData,
} from "@/types";

// ============================================================
// Zone 5: The Sealed Chamber — Apply Phase Content
// MPEP 120, 121, 130 — Secrecy Orders (35 USC 181–186)
// Scenarios, Quick-Fire, Procedural Cascades
// ============================================================

// --- SCENARIO QUESTIONS (8) ---
// Realistic exam-style fact patterns at escalating difficulty

export const ZONE5_SCENARIOS: ScenarioQuestion[] = [
  // Difficulty 1 — Basic secrecy order concepts
  {
    id: "z5-scenario-1",
    conceptId: "sec-order-basics",
    zoneSlug: "the-sealed-chamber",
    difficulty: 1,
    stem: "Dr. Nakamura, a physicist at a defense contractor, files a patent application for a novel directed-energy targeting system. Several weeks after filing, she receives a secrecy order from the USPTO. Under what authority is this order issued?",
    options: [
      { text: "35 USC 101 — the Commissioner determines the invention lacks utility for civilian purposes" },
      { text: "35 USC 181 — the Commissioner orders secrecy when publication or disclosure would be detrimental to national security" },
      { text: "35 USC 122 — the Commissioner withholds publication at the applicant's request for sensitive inventions" },
      { text: "37 CFR 1.14 — the Commissioner restricts access to confidential application files" },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 181, whenever publication or disclosure of an invention by the granting of a patent would be detrimental to national security, the Commissioner shall order that the invention be kept secret and withhold the grant of a patent. The order is based on national security considerations, not utility or applicant preference.",
    citationRef: "35 USC 181; MPEP 120",
  },
  {
    id: "z5-scenario-2",
    conceptId: "sec-order-duration",
    zoneSlug: "the-sealed-chamber",
    difficulty: 1,
    stem: "Engineer Patel's patent application received a secrecy order on June 1, 2023. He has heard that secrecy orders expire automatically. What is the initial duration of a secrecy order?",
    options: [
      { text: "6 months from the date of the order" },
      { text: "1 year from the date of the order, but it is renewable annually" },
      { text: "5 years from the date of the order, after which it must be reviewed" },
      { text: "The order persists indefinitely with no expiration date" },
    ],
    correctIndex: 1,
    explanation:
      "A secrecy order under 35 USC 181 is in effect for a period of one year. The order may be renewed for additional periods of one year upon review by the agency that originated the order. There is no statutory limit on the number of renewals, so theoretically a secrecy order can persist for the life of the application.",
    citationRef: "35 USC 181; MPEP 120",
  },

  // Difficulty 2 — Secrecy order types and foreign filing revocation
  {
    id: "z5-scenario-3",
    conceptId: "sec-type-i-filing",
    zoneSlug: "the-sealed-chamber",
    difficulty: 2,
    stem: "Inventor Martinez receives a Type I secrecy order (per DoD 5230.25) on her stealth coating application. She wants to file a corresponding patent application in Canada. Which of the following is correct?",
    options: [
      { text: "A Type I order prohibits all foreign filing without exception" },
      { text: "A Type I order permits filing in up to 18 approved allied countries, including Canada, subject to certain conditions" },
      { text: "A Type I order permits filing only in NATO member countries" },
      { text: "A Type I order permits foreign filing anywhere as long as the applicant notifies the USPTO first" },
    ],
    correctIndex: 1,
    explanation:
      "A Type I secrecy order (DoD Directive 5230.25) permits the applicant to file corresponding patent applications in up to 18 approved allied countries, which include Australia, Canada, France, Germany, Italy, Japan, Netherlands, Norway, Sweden, the UK, and others. Filing in non-approved countries remains prohibited. Type II prohibits all foreign filing, and Type III prohibits any disclosure at all.",
    citationRef: "35 USC 181; DoD 5230.25; MPEP 120",
  },
  {
    id: "z5-scenario-4",
    conceptId: "sec-ffl-revocation",
    zoneSlug: "the-sealed-chamber",
    difficulty: 2,
    stem: "Attorney Reeves's client received a foreign filing license when his application for an advanced propulsion system was filed on January 10. On March 20, a secrecy order was imposed on the application. The client wants to rely on the previously granted foreign filing license to file in Germany on April 15. What should Attorney Reeves advise?",
    options: [
      { text: "The previously granted foreign filing license remains valid because it was granted before the secrecy order" },
      { text: "The secrecy order immediately revokes any previously granted foreign filing license, so the client cannot file abroad" },
      { text: "The client may file in Germany only if he obtains a supplemental license from the Department of Defense" },
      { text: "The foreign filing license is suspended but can be reinstated upon petition within 60 days" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 5.2, a secrecy order immediately revokes any foreign filing license that has been granted for the application. Once a secrecy order is imposed, the applicant cannot rely on a previously issued license to file abroad. Any foreign filing would require rescission of the secrecy order or specific authorization under a Type I order for approved countries.",
    citationRef: "37 CFR 5.2; MPEP 120",
  },

  // Difficulty 3 — Compensation, related subject matter
  {
    id: "z5-scenario-5",
    conceptId: "sec-compensation-claim",
    zoneSlug: "the-sealed-chamber",
    difficulty: 3,
    stem: "Inventor Okafor's patent application for an advanced cryptographic processor has been under a secrecy order for 8 years. She has been unable to commercialize or patent the invention during this time and has suffered significant financial losses. She wants to seek compensation. What is the correct procedure?",
    options: [
      { text: "She must file a claim directly with the Court of Federal Claims as a first step" },
      { text: "She must first apply for compensation to the head of the department or agency that caused the secrecy order; if denied or unsatisfied, she may then sue in the Court of Federal Claims" },
      { text: "She must petition the Commissioner of Patents to award compensation from the USPTO's operating budget" },
      { text: "She has no right to compensation because secrecy orders are a valid exercise of government power with no remedy" },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 183, an owner whose patent is withheld due to a secrecy order may apply for compensation to the head of the department or agency that caused the order to be issued. If the claim is denied or the applicant is dissatisfied with the amount awarded, the applicant may then bring suit in the United States Court of Federal Claims. The applicant cannot go directly to court without first presenting the claim to the agency.",
    citationRef: "35 USC 183; MPEP 120",
  },
  {
    id: "z5-scenario-6",
    conceptId: "sec-related-subject-matter",
    zoneSlug: "the-sealed-chamber",
    difficulty: 3,
    stem: "Dr. Johannsen has a secrecy order on Application A, which covers a classified radar frequency-hopping algorithm. He files a new Application B that describes an improved antenna design. Application B does not explicitly claim the frequency-hopping algorithm but discusses how the antenna optimizes performance of the classified system. Does the secrecy order on Application A affect Application B?",
    options: [
      { text: "No, because Application B claims different subject matter than Application A" },
      { text: "Yes, but only if the USPTO independently reviews Application B and issues a new secrecy order" },
      { text: "Yes — under 37 CFR 5.3, the secrecy order extends to related subject matter in any application by the same applicant" },
      { text: "No, secrecy orders are application-specific and cannot extend to other filings" },
    ],
    correctIndex: 2,
    explanation:
      "Under 37 CFR 5.3, a secrecy order is not limited to the specific application on which it was imposed. The order extends to any application containing related subject matter, including continuations, divisionals, and new applications filed by the same or different inventors that contain the classified subject matter. Because Application B discusses how the antenna interfaces with the classified system, it contains related subject matter and falls under the existing secrecy order.",
    citationRef: "37 CFR 5.3; MPEP 120",
  },

  // Difficulty 4 — Criminal penalties, examination under secrecy
  {
    id: "z5-scenario-7",
    conceptId: "sec-willful-violation",
    zoneSlug: "the-sealed-chamber",
    difficulty: 4,
    stem: "Inventor Volkov receives a secrecy order on his guided missile navigation application. Frustrated by the restrictions, he intentionally publishes a detailed technical paper describing the invention in an online journal and files a patent application in a non-approved foreign country. Assuming the government pursues all available remedies, which combination of consequences could Volkov face?",
    options: [
      { text: "The invention is deemed abandoned, he forfeits claims against the US government for compensation, and he faces criminal penalties of up to a $10,000 fine and 2 years imprisonment" },
      { text: "The invention is deemed abandoned and he faces a $5,000 civil fine, but no criminal penalties apply" },
      { text: "He loses only the right to seek compensation but retains the patent application and faces no criminal liability" },
      { text: "The secrecy order is simply extended by 5 years and the foreign application is invalidated, but no penalties attach to the inventor personally" },
    ],
    correctIndex: 0,
    explanation:
      "Under 35 USC 182, violation of a secrecy order causes the invention to be deemed abandoned and the applicant forfeits any right to compensation from the US government. Additionally, under 35 USC 186, willful violation of a secrecy order carries criminal penalties of a fine of not more than $10,000 or imprisonment for not more than 2 years, or both. All three consequences can apply when the violation is willful.",
    citationRef: "35 USC 182; 35 USC 186; MPEP 120",
  },
  {
    id: "z5-scenario-8",
    conceptId: "sec-examination-under-secrecy",
    zoneSlug: "the-sealed-chamber",
    difficulty: 4,
    stem: "Attorney Kim represents a client whose application for a satellite communication encryption method is under a secrecy order. The examiner has issued a final rejection. Attorney Kim wants to understand the procedural constraints that apply during examination under secrecy. Which of the following accurately describes the examination process for applications under secrecy orders?",
    options: [
      { text: "Examination is suspended entirely while the secrecy order is in effect; no office actions will be issued until the order is rescinded" },
      { text: "Examination continues normally, but the application will not be published, interference proceedings are barred, and any appeal decisions will not be published" },
      { text: "Examination continues but the applicant may not file amendments or responses until the secrecy order is lifted" },
      { text: "Examination continues and the application is published at 18 months as usual, but with classified portions redacted" },
    ],
    correctIndex: 1,
    explanation:
      "Under MPEP 130, examination of an application under a secrecy order continues in the normal manner — the applicant receives office actions and can respond with amendments and arguments. However, the application will not be published under 35 USC 122(b), interference proceedings involving the application are barred, and any Board of Patent Appeals and Interferences decisions will not be published. The secrecy order does not suspend examination.",
    citationRef: "MPEP 130; 35 USC 181",
  },
];

// --- QUICK-FIRE QUESTIONS (12) ---
// True/false statements covering secrecy order concepts

export const ZONE5_QUICK_FIRE: QuickFireQuestion[] = [
  {
    id: "z5-qf-1",
    zoneSlug: "the-sealed-chamber",
    statement:
      "A secrecy order under 35 USC 181 is issued when the Commissioner determines that publication or disclosure of the invention would be detrimental to national security.",
    isTrue: true,
    explanation:
      "This is the statutory basis for secrecy orders. The Commissioner shall order secrecy when disclosure would be detrimental to the national security.",
    citationRef: "35 USC 181",
  },
  {
    id: "z5-qf-2",
    zoneSlug: "the-sealed-chamber",
    statement:
      "A secrecy order expires after 2 years unless renewed by the originating agency.",
    isTrue: false,
    explanation:
      "A secrecy order lasts for 1 year, not 2 years. It may be renewed for additional 1-year periods. There is no automatic 2-year duration.",
    citationRef: "35 USC 181",
  },
  {
    id: "z5-qf-3",
    zoneSlug: "the-sealed-chamber",
    statement:
      "A Type III secrecy order prohibits any disclosure of the invention whatsoever, not just foreign filing.",
    isTrue: true,
    explanation:
      "Type III is the most restrictive secrecy order. It prohibits any disclosure of the invention to anyone not authorized. Type I permits filing in approved allied countries, Type II prohibits foreign filing but allows limited domestic disclosure, and Type III bars all disclosure.",
    citationRef: "35 USC 181; DoD 5230.25",
  },
  {
    id: "z5-qf-4",
    zoneSlug: "the-sealed-chamber",
    statement:
      "Imposition of a secrecy order does not affect a previously granted foreign filing license — the license remains valid.",
    isTrue: false,
    explanation:
      "Under 37 CFR 5.2, a secrecy order immediately revokes any previously granted foreign filing license. The applicant may not rely on a license granted before the secrecy order was imposed.",
    citationRef: "37 CFR 5.2",
  },
  {
    id: "z5-qf-5",
    zoneSlug: "the-sealed-chamber",
    statement:
      "Under a Type I secrecy order, the applicant may file corresponding patent applications in up to 18 approved allied countries, including Australia, Canada, and the United Kingdom.",
    isTrue: true,
    explanation:
      "A Type I order (DoD Directive 5230.25) permits filing in a list of approved allied countries. Australia, Canada, and the UK are among the 18 approved countries, along with France, Germany, Italy, Japan, Netherlands, Norway, Sweden, and others.",
    citationRef: "DoD 5230.25; MPEP 120",
  },
  {
    id: "z5-qf-6",
    zoneSlug: "the-sealed-chamber",
    statement:
      "Willful violation of a secrecy order can result in criminal penalties of up to $10,000 fine and 2 years imprisonment.",
    isTrue: true,
    explanation:
      "Under 35 USC 186, anyone who willfully violates a secrecy order shall, upon conviction, be fined not more than $10,000 or imprisoned for not more than 2 years, or both.",
    citationRef: "35 USC 186",
  },
  {
    id: "z5-qf-7",
    zoneSlug: "the-sealed-chamber",
    statement:
      "An applicant whose invention is withheld due to a secrecy order may sue for compensation directly in federal district court without first applying to the responsible agency.",
    isTrue: false,
    explanation:
      "Under 35 USC 183, the applicant must first apply for compensation to the head of the department or agency that caused the secrecy order. Only after being denied or unsatisfied may the applicant sue in the Court of Federal Claims (not federal district court).",
    citationRef: "35 USC 183",
  },
  {
    id: "z5-qf-8",
    zoneSlug: "the-sealed-chamber",
    statement:
      "Examination of a patent application continues in the normal manner even while a secrecy order is in effect.",
    isTrue: true,
    explanation:
      "Under MPEP 130, examination proceeds normally under a secrecy order. The applicant receives office actions and can file responses. The secrecy order does not suspend prosecution.",
    citationRef: "MPEP 130",
  },
  {
    id: "z5-qf-9",
    zoneSlug: "the-sealed-chamber",
    statement:
      "A secrecy order applies only to the specific application on which it was imposed and does not extend to continuation or divisional applications.",
    isTrue: false,
    explanation:
      "Under 37 CFR 5.3, a secrecy order extends to any application that contains subject matter related to the classified invention, including continuations, divisionals, and continuations-in-part. It is not limited to the single original application.",
    citationRef: "37 CFR 5.3",
  },
  {
    id: "z5-qf-10",
    zoneSlug: "the-sealed-chamber",
    statement:
      "Security-marked documents received by the USPTO are directed to the Licensing and Review division for handling.",
    isTrue: true,
    explanation:
      "Under MPEP 121, documents bearing security markings are routed to the Licensing and Review division, which is responsible for handling classified and security-related patent materials.",
    citationRef: "MPEP 121",
  },
  {
    id: "z5-qf-11",
    zoneSlug: "the-sealed-chamber",
    statement:
      "An application under a secrecy order is published at 18 months from the earliest filing date, just like any other application.",
    isTrue: false,
    explanation:
      "Applications under secrecy orders are not published. Under MPEP 130, the application is withheld from publication under 35 USC 122(b) for the duration of the secrecy order.",
    citationRef: "MPEP 130; 35 USC 122(b)",
  },
  {
    id: "z5-qf-12",
    zoneSlug: "the-sealed-chamber",
    statement:
      "A secrecy order can be rescinded either by the originating government agency or by the Commissioner of Patents.",
    isTrue: true,
    explanation:
      "A secrecy order may be rescinded by the agency that originated it (upon determining that the national security concern no longer exists) or by the Commissioner. Either authority can lift the order.",
    citationRef: "35 USC 181; MPEP 120",
  },
];

// --- PROCEDURAL CASCADES (3) ---
// Multi-step procedural walkthroughs

export const ZONE5_CASCADES: ProceduralCascadeData[] = [
  {
    id: "z5-cascade-1",
    conceptId: "sec-order-imposition-response",
    zoneSlug: "the-sealed-chamber",
    title: "Responding to a Newly Imposed Secrecy Order",
    setup:
      "Dr. Angela Whitfield, a materials scientist at a defense contractor, files a patent application for a novel ceramic armor composite on March 1. On April 15, she receives a secrecy order from the USPTO. She had already obtained a foreign filing license and planned to file in Germany and Japan by May 1. Her patent attorney must guide her through the immediate consequences and next steps.",
    steps: [
      {
        stem: "What is the immediate effect of the secrecy order on Dr. Whitfield's previously granted foreign filing license?",
        options: [
          "The foreign filing license remains valid for 90 days after the secrecy order, giving her a grace period",
          "The foreign filing license is immediately revoked by operation of the secrecy order",
          "The foreign filing license is suspended pending review by the Department of Defense",
          "The foreign filing license is unaffected because it was granted before the secrecy order",
        ],
        correctIndex: 1,
        explanation:
          "Under 37 CFR 5.2, a secrecy order immediately revokes any foreign filing license previously granted for the application. There is no grace period. Dr. Whitfield must cancel her plans to file in Germany and Japan.",
      },
      {
        stem: "Dr. Whitfield's secrecy order is classified as Type I under DoD Directive 5230.25. Her attorney informs her this provides some foreign filing flexibility. What does a Type I designation allow?",
        options: [
          "Filing in any country that is a signatory to the Patent Cooperation Treaty",
          "Filing in up to 18 approved allied countries, subject to specified conditions",
          "Filing in any NATO member country without further authorization",
          "Filing only in Canada and the United Kingdom",
        ],
        correctIndex: 1,
        explanation:
          "A Type I secrecy order permits filing corresponding patent applications in up to 18 approved allied countries, which include Australia, Canada, France, Germany, Italy, Japan, Netherlands, Norway, Sweden, the UK, and others. Germany and Japan are on the approved list, so Dr. Whitfield may be able to file there under the Type I conditions.",
      },
      {
        stem: "The secrecy order was imposed on April 15, 2023. On April 10, 2024, Dr. Whitfield asks whether the order is still in effect. What should her attorney check?",
        options: [
          "Whether the order has been renewed — secrecy orders expire after 1 year unless the originating agency renews them",
          "Whether 18 months have passed since the application filing date, which is the automatic expiration point",
          "Whether the patent has been granted, since secrecy orders expire upon patent issuance",
          "Whether the Commissioner has reviewed the order, which happens automatically every 6 months",
        ],
        correctIndex: 0,
        explanation:
          "Secrecy orders last for 1 year from the date of issuance and must be renewed annually by the originating agency. The attorney should check whether the agency renewed the order before April 15, 2024. If not renewed, the order lapses. There is no automatic 18-month or 6-month review cycle.",
      },
    ],
  },
  {
    id: "z5-cascade-2",
    conceptId: "sec-violation-consequences",
    zoneSlug: "the-sealed-chamber",
    title: "Consequences of Unauthorized Disclosure Under Secrecy Order",
    setup:
      "Inventor Rajesh Gupta has a patent application for an advanced sonar detection algorithm under a Type II secrecy order. Growing impatient after 5 years, Gupta discloses the invention to a foreign company during negotiations for a licensing deal without obtaining authorization. His attorney, Sandra Lee, must assess the legal consequences and advise Gupta on his remaining options.",
    steps: [
      {
        stem: "What is the first legal consequence that attaches to Gupta's unauthorized disclosure under the secrecy order?",
        options: [
          "The patent application is deemed abandoned and Gupta forfeits any right to compensation from the US government",
          "The USPTO issues a warning letter and gives Gupta 30 days to cure the violation",
          "The application is converted to a provisional application with a new 12-month pendency",
          "The secrecy order is automatically escalated from Type II to Type III",
        ],
        correctIndex: 0,
        explanation:
          "Under 35 USC 182, anyone who violates a secrecy order shall have their invention deemed abandoned. Additionally, the violator forfeits the right to any claim against the United States government for compensation under 35 USC 183. These consequences are automatic upon violation — there is no cure period.",
      },
      {
        stem: "Attorney Lee discovers that Gupta's disclosure was intentional — he knowingly disregarded the secrecy order. What additional consequence does willful violation carry?",
        options: [
          "A civil fine of up to $1,000 imposed by the USPTO Director",
          "Criminal penalties of up to $10,000 fine and up to 2 years imprisonment",
          "Permanent disbarment from filing any future patent applications",
          "Mandatory restitution to the Department of Defense for security breach remediation costs",
        ],
        correctIndex: 1,
        explanation:
          "Under 35 USC 186, willful publication or disclosure of an invention in violation of a secrecy order, or willful filing in a foreign country in violation of such an order, is punishable by a fine of not more than $10,000 or imprisonment for not more than 2 years, or both. This is in addition to the abandonment and forfeiture of compensation rights under 35 USC 182.",
      },
      {
        stem: "Despite the violation, Gupta asks Attorney Lee whether there is any way to salvage the situation and obtain patent protection. What is her best advice?",
        options: [
          "File a petition to revive the application under 37 CFR 1.137 based on unintentional delay",
          "File a continuation application which would not be subject to the secrecy order",
          "The application is deemed abandoned by statute with no provision for revival due to secrecy order violation — Gupta cannot recover the patent rights",
          "Appeal the abandonment to the Patent Trial and Appeal Board within 60 days",
        ],
        correctIndex: 2,
        explanation:
          "When an application is deemed abandoned under 35 USC 182 for violation of a secrecy order, it is a statutory abandonment — not an administrative abandonment that can be revived by petition. There is no mechanism to revive such an application. A continuation would also contain the same subject matter and face the same secrecy order restrictions. Gupta has lost his patent rights.",
      },
    ],
  },
  {
    id: "z5-cascade-3",
    conceptId: "sec-compensation-process",
    zoneSlug: "the-sealed-chamber",
    title: "Pursuing Compensation for a Long-Standing Secrecy Order",
    setup:
      "Dr. Evelyn Torres invented a breakthrough satellite jamming countermeasure system and filed a patent application 12 years ago. The application has been under a secrecy order the entire time, preventing her from obtaining a patent or commercializing the technology. She has documented $2.3 million in lost licensing revenue and development costs. Her attorney, Mark Chen, is helping her pursue compensation under 35 USC 183.",
    steps: [
      {
        stem: "As a first step in seeking compensation, where must Attorney Chen file Dr. Torres's claim?",
        options: [
          "With the United States Court of Federal Claims",
          "With the head of the department or agency that caused the secrecy order to be issued",
          "With the Commissioner of Patents at the USPTO",
          "With the Government Accountability Office for review of the financial claim",
        ],
        correctIndex: 1,
        explanation:
          "Under 35 USC 183, the owner of an application placed under a secrecy order must first apply for compensation to the head of the department or agency that caused the secrecy order. This administrative claim is a mandatory prerequisite before any court action can be taken.",
      },
      {
        stem: "The Department of Defense reviews Dr. Torres's claim and offers $400,000 in compensation. Dr. Torres believes this is grossly inadequate given her $2.3 million in documented losses. What is her next legal option?",
        options: [
          "She must accept the agency's determination as final and binding",
          "She may appeal to the USPTO Director for a higher award",
          "She may bring suit against the United States in the Court of Federal Claims for just compensation",
          "She may file a civil rights complaint with the Department of Justice",
        ],
        correctIndex: 2,
        explanation:
          "Under 35 USC 183, if the applicant is not satisfied with the compensation awarded by the agency, she has the right to bring suit against the United States in the United States Court of Federal Claims. The agency's determination is not final — the court provides an independent review of the claim.",
      },
      {
        stem: "While the compensation claim is pending, Attorney Chen learns that the originating agency has determined the national security concern no longer exists. What happens to the secrecy order?",
        options: [
          "The order remains in effect until the compensation claim is fully resolved",
          "The order can be rescinded by the originating agency, and once rescinded, the application may proceed to patent issuance",
          "The order automatically converts to a Type I order, permitting foreign filing but maintaining domestic secrecy",
          "The Commissioner must conduct an independent review before the order can be lifted",
        ],
        correctIndex: 1,
        explanation:
          "A secrecy order can be rescinded by the originating agency when it determines the national security concern no longer exists. Once rescinded, the application is no longer subject to secrecy restrictions and may proceed through normal prosecution to patent issuance. The rescission of the secrecy order is independent of any pending compensation claim — both processes can proceed separately.",
      },
    ],
  },
];

// --- MATCHING GAMES (4) ---
// Term-definition matching exercises for secrecy order concepts

export const ZONE5_MATCHING: MatchingGameData[] = [
  {
    id: "z5-match-1",
    conceptId: "sec-order-basics",
    zoneSlug: "the-sealed-chamber",
    title: "Secrecy Order Fundamentals",
    instruction: "Match each term with its correct definition.",
    pairs: [
      {
        term: "35 USC 181",
        definition:
          "Statutory authority for the Commissioner to order secrecy when disclosure of an invention would be detrimental to national security",
      },
      {
        term: "Secrecy order duration",
        definition:
          "One year from the date of issuance, renewable annually by the originating agency",
      },
      {
        term: "Commissioner of Patents",
        definition:
          "The official who issues the secrecy order upon determination by a defense or government agency",
      },
      {
        term: "Originating agency",
        definition:
          "The government department or agency whose determination that disclosure would harm national security triggers the secrecy order",
      },
      {
        term: "Rescission of secrecy order",
        definition:
          "The lifting of the order, which may be done by the originating agency or the Commissioner when the national security concern no longer exists",
      },
    ],
  },
  {
    id: "z5-match-2",
    conceptId: "sec-type-i-filing",
    zoneSlug: "the-sealed-chamber",
    title: "Types of Secrecy Orders",
    instruction: "Match each term with its correct definition.",
    pairs: [
      {
        term: "Type I secrecy order",
        definition:
          "Permits filing in up to 18 approved allied countries (including Australia, Canada, UK, Germany, Japan) subject to conditions",
      },
      {
        term: "Type II secrecy order",
        definition:
          "Prohibits all foreign filing but allows limited domestic disclosure to authorized persons",
      },
      {
        term: "Type III secrecy order",
        definition:
          "The most restrictive order — prohibits any disclosure of the invention whatsoever",
      },
      {
        term: "DoD Directive 5230.25",
        definition:
          "The Department of Defense directive that classifies secrecy orders into Type I, II, and III categories",
      },
      {
        term: "Foreign filing license revocation",
        definition:
          "Under 37 CFR 5.2, a secrecy order immediately revokes any previously granted foreign filing license",
      },
    ],
  },
  {
    id: "z5-match-3",
    conceptId: "sec-compensation-claim",
    zoneSlug: "the-sealed-chamber",
    title: "Compensation and Penalties Under Secrecy Orders",
    instruction: "Match each term with its correct definition.",
    pairs: [
      {
        term: "35 USC 183",
        definition:
          "Provides that an applicant may apply for compensation to the head of the agency that caused the secrecy order",
      },
      {
        term: "Court of Federal Claims",
        definition:
          "The court where an applicant may sue if denied or dissatisfied with the agency's compensation determination",
      },
      {
        term: "35 USC 182 — violation consequences",
        definition:
          "The invention is deemed abandoned and the applicant forfeits any right to compensation from the government",
      },
      {
        term: "35 USC 186 — willful violation",
        definition:
          "Criminal penalties of up to $10,000 fine and up to 2 years imprisonment for knowingly violating a secrecy order",
      },
      {
        term: "Statutory abandonment",
        definition:
          "Abandonment imposed by law upon secrecy order violation — it cannot be revived by petition under 37 CFR 1.137",
      },
    ],
  },
  {
    id: "z5-match-4",
    conceptId: "sec-examination-under-secrecy",
    zoneSlug: "the-sealed-chamber",
    title: "Examination and Administration Under Secrecy Orders",
    instruction: "Match each term with its correct definition.",
    pairs: [
      {
        term: "MPEP 130 — examination under secrecy",
        definition:
          "Examination proceeds normally with office actions and responses, but publication, interference, and appeal publication are barred",
      },
      {
        term: "37 CFR 5.3 — related subject matter",
        definition:
          "A secrecy order extends to any application containing related subject matter, including continuations and divisionals",
      },
      {
        term: "Publication withheld",
        definition:
          "Applications under secrecy orders are not published at 18 months under 35 USC 122(b)",
      },
      {
        term: "MPEP 121 — security-marked documents",
        definition:
          "Documents bearing security markings are routed to the Licensing and Review division for handling",
      },
      {
        term: "Annual renewal review",
        definition:
          "The originating agency reviews the secrecy order each year to determine whether the national security concern persists",
      },
    ],
  },
];

// --- TIMELINE PUZZLES (3) ---
// Chronological ordering exercises for secrecy order procedures

export const ZONE5_TIMELINES: TimelinePuzzleData[] = [
  {
    id: "z5-timeline-1",
    conceptId: "sec-order-basics",
    zoneSlug: "the-sealed-chamber",
    title: "Lifecycle of a Secrecy Order",
    instruction: "Arrange these events in correct chronological order.",
    events: [
      {
        id: "z5-tl1-evt-1",
        label: "Patent application filed with the USPTO",
        description:
          "An applicant files a patent application containing subject matter with potential national security implications.",
      },
      {
        id: "z5-tl1-evt-2",
        label: "Defense agency determines national security risk",
        description:
          "During national security screening, the relevant agency determines that disclosure would be detrimental to national security.",
      },
      {
        id: "z5-tl1-evt-3",
        label: "Commissioner imposes secrecy order under 35 USC 181",
        description:
          "The Commissioner orders the invention to be kept secret and withholds the grant of a patent.",
      },
      {
        id: "z5-tl1-evt-4",
        label: "Any previously granted foreign filing license is revoked",
        description:
          "Under 37 CFR 5.2, the secrecy order immediately revokes any foreign filing license that had been granted for the application.",
      },
      {
        id: "z5-tl1-evt-5",
        label: "Secrecy order reviewed annually for renewal or rescission",
        description:
          "The originating agency reviews the order each year. If renewed, it continues for another year; if the concern no longer exists, it may be rescinded.",
      },
    ],
  },
  {
    id: "z5-timeline-2",
    conceptId: "sec-compensation-claim",
    zoneSlug: "the-sealed-chamber",
    title: "Pursuing Compensation Under 35 USC 183",
    instruction: "Arrange these events in correct chronological order.",
    events: [
      {
        id: "z5-tl2-evt-1",
        label: "Secrecy order prevents patent grant and commercialization",
        description:
          "The applicant is unable to obtain a patent or commercialize the invention due to the secrecy order, resulting in financial losses.",
      },
      {
        id: "z5-tl2-evt-2",
        label: "Applicant documents damages and losses",
        description:
          "The applicant compiles evidence of lost licensing revenue, development costs, and other financial harm caused by the secrecy order.",
      },
      {
        id: "z5-tl2-evt-3",
        label: "Compensation claim filed with the originating agency",
        description:
          "Under 35 USC 183, the applicant must first apply for compensation to the head of the department or agency that caused the secrecy order.",
      },
      {
        id: "z5-tl2-evt-4",
        label: "Agency issues compensation determination",
        description:
          "The agency reviews the claim and either awards compensation or denies it. The applicant may find the award inadequate.",
      },
      {
        id: "z5-tl2-evt-5",
        label: "Suit filed in the Court of Federal Claims",
        description:
          "If denied or dissatisfied, the applicant may bring suit against the United States in the Court of Federal Claims for just compensation.",
      },
    ],
  },
  {
    id: "z5-timeline-3",
    conceptId: "sec-willful-violation",
    zoneSlug: "the-sealed-chamber",
    title: "Consequences of Violating a Secrecy Order",
    instruction: "Arrange these events in correct chronological order.",
    events: [
      {
        id: "z5-tl3-evt-1",
        label: "Secrecy order imposed on the application",
        description:
          "The Commissioner imposes a secrecy order under 35 USC 181, restricting disclosure and foreign filing.",
      },
      {
        id: "z5-tl3-evt-2",
        label: "Applicant makes unauthorized disclosure or foreign filing",
        description:
          "The applicant willfully discloses the invention to an unauthorized party or files a patent application in a non-approved foreign country.",
      },
      {
        id: "z5-tl3-evt-3",
        label: "Invention deemed abandoned under 35 USC 182",
        description:
          "By operation of statute, the invention is deemed abandoned and cannot be revived by petition — this is a statutory, not administrative, abandonment.",
      },
      {
        id: "z5-tl3-evt-4",
        label: "Forfeiture of compensation rights",
        description:
          "The applicant forfeits any right to claim compensation from the United States government under 35 USC 183.",
      },
      {
        id: "z5-tl3-evt-5",
        label: "Criminal prosecution for willful violation",
        description:
          "Under 35 USC 186, the applicant faces criminal penalties of up to $10,000 fine and up to 2 years imprisonment, or both.",
      },
    ],
  },
];
