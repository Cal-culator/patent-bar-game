import {
  ScenarioQuestion,
  QuickFireQuestion,
  ProceduralCascadeData,
} from "@study-game/engine";

// ============================================================
// Zone 6: The Border — Apply Phase Content
// Scenarios, Quick-Fire, Procedural Cascades
// ============================================================

// --- SCENARIO QUESTIONS (8) ---
// Realistic exam-style fact patterns at escalating difficulty

export const ZONE6_SCENARIOS: ScenarioQuestion[] = [
  // Difficulty 1 — Basic license requirement
  {
    id: "z6-scenario-1",
    conceptId: "ffl-basic-rule",
    zoneSlug: "the-border",
    difficulty: 1,
    stem: "Dr. Park files a US patent application on March 1 for a new semiconductor manufacturing process. She wants to file a corresponding application in South Korea. Which of the following is correct?",
    options: [
      { text: "She may file abroad immediately because the US application establishes priority" },
      { text: "She must wait 6 months from March 1 before filing abroad unless she obtains a foreign filing license" },
      { text: "She must wait 12 months under the Paris Convention before filing abroad" },
      { text: "She may file abroad only after the US application is published" },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 184, an applicant may not file in a foreign country before 6 months from the US filing date unless a foreign filing license has been granted. The Paris Convention priority period is separate from the license requirement.",
    citationRef: "35 USC 184",
  },
  {
    id: "z6-scenario-2",
    conceptId: "ffl-automatic-petition",
    zoneSlug: "the-border",
    difficulty: 1,
    stem: "Attorney Chen files a US utility patent application for her client on January 15. She wants to know when and how to petition for a foreign filing license. What should she advise her client?",
    options: [
      { text: "A separate petition form must be filed within 30 days of the US filing" },
      { text: "The filing of the US application itself automatically constitutes a petition for a foreign filing license" },
      { text: "The client must request a license from the Department of Commerce" },
      { text: "A petition is only needed if the invention relates to national security" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 5.12, the act of filing a US patent application automatically constitutes a petition for a foreign filing license. No separate petition is needed.",
    citationRef: "37 CFR 5.12",
  },

  // Difficulty 2 — Secrecy order complication, license scope
  {
    id: "z6-scenario-3",
    conceptId: "ffl-secrecy-order",
    zoneSlug: "the-border",
    difficulty: 2,
    stem: "Inventor Torres filed a US application on February 1. On March 15, a secrecy order was imposed on the application under 35 USC 181. On August 5 (more than 6 months after filing), Torres wants to file the same invention in Japan. Can he do so?",
    options: [
      { text: "Yes, because more than 6 months have passed since US filing, so no license is needed" },
      { text: "Yes, but only if he files a petition for a retroactive license first" },
      { text: "No, because a secrecy order bars foreign filing regardless of the 6-month period" },
      { text: "No, because Japan does not recognize US secrecy orders" },
    ],
    correctIndex: 2,
    explanation:
      "A secrecy order under 35 USC 181 overrides the 6-month rule. Even after 6 months, the applicant cannot file abroad while a secrecy order is in effect. The secrecy order must be rescinded before foreign filing is permitted.",
    citationRef: "35 USC 181; 35 USC 184",
  },
  {
    id: "z6-scenario-4",
    conceptId: "ffl-license-scope",
    zoneSlug: "the-border",
    difficulty: 2,
    stem: "A foreign filing license was granted to Smith for her US application covering a lithium battery design. She now wants to file in Germany on an improved version that adds a new thermal management system not disclosed in the US application. Does the existing license cover this filing?",
    options: [
      { text: "Yes, the license covers all related inventions by the same applicant" },
      { text: "Yes, because the improvement is an extension of the original invention" },
      { text: "No, the license only covers the subject matter of the application for which it was granted" },
      { text: "No, but she can file in Germany and request a retroactive license later" },
    ],
    correctIndex: 2,
    explanation:
      "A foreign filing license is limited to the subject matter of the application on which it was granted. New subject matter not disclosed in the original US application requires its own license, typically obtained by filing a new US application covering that subject matter.",
    citationRef: "MPEP 140; 37 CFR 5.11",
  },

  // Difficulty 3 — Retroactive license, error exception
  {
    id: "z6-scenario-5",
    conceptId: "ffl-retroactive-license",
    zoneSlug: "the-border",
    difficulty: 3,
    stem: "Inventor Liu filed directly in China without first filing in the US or obtaining a foreign filing license, but the invention was made entirely in the United States. She later discovers her error and wants to file a US patent application. What is her best course of action?",
    options: [
      { text: "She cannot obtain a US patent under any circumstances" },
      { text: "She should file a US application and petition for a retroactive foreign filing license under 37 CFR 5.25" },
      { text: "She should file in the US and claim priority from the Chinese filing" },
      { text: "She must wait until the Chinese application is published, then file in the US" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 5.25, an applicant who filed abroad without a license may petition for a retroactive license. If granted, the US application will not be barred by the unauthorized foreign filing. The petition must show that the foreign filing was through error and without deceptive intent.",
    citationRef: "37 CFR 5.25",
  },
  {
    id: "z6-scenario-6",
    conceptId: "ffl-error-exception",
    zoneSlug: "the-border",
    difficulty: 3,
    stem: "Attorney Patel's firm filed a PCT application designating multiple countries for an invention made in the US. They later realize no foreign filing license was obtained and no US application was filed first. The firm claims this was an innocent administrative error. Which factor is most critical for obtaining a retroactive license?",
    options: [
      { text: "The size of the law firm and its track record with the USPTO" },
      { text: "That the filing was made through error and without deceptive intent" },
      { text: "That no foreign patent has yet been granted on the application" },
      { text: "That the invention does not relate to defense technology" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 5.25, the key requirement for a retroactive license is demonstrating that the unauthorized foreign filing was made 'through error and without deceptive intent.' The applicant must submit a petition with a verified statement explaining the circumstances of the error.",
    citationRef: "37 CFR 5.25",
  },

  // Difficulty 4 — Combined penalty, defense-sensitive materials
  {
    id: "z6-scenario-7",
    conceptId: "ffl-penalties",
    zoneSlug: "the-border",
    difficulty: 4,
    stem: "Company X knowingly filed a patent application in Russia for a defense-related encryption invention made in the US without obtaining a foreign filing license. The company later files a US application for the same invention. What are ALL the potential consequences?",
    options: [
      { text: "The US application may be barred, and the company faces possible criminal penalties including fines up to $10,000 and/or imprisonment up to 2 years" },
      { text: "Only the US application is barred; there are no criminal penalties for foreign filing violations" },
      { text: "Criminal penalties apply but the US application is unaffected since it was filed later" },
      { text: "The US application is barred, but criminal penalties only apply if a secrecy order was violated" },
    ],
    correctIndex: 0,
    explanation:
      "Under 35 USC 185, a patent shall not be granted on an invention filed abroad in violation of the foreign filing license requirement. Additionally, 35 USC 186 provides criminal penalties: a fine of not more than $10,000 or imprisonment for not more than 2 years, or both. Both consequences can apply simultaneously.",
    citationRef: "35 USC 185; 35 USC 186",
  },
  {
    id: "z6-scenario-8",
    conceptId: "ffl-no-us-app",
    zoneSlug: "the-border",
    difficulty: 4,
    stem: "Dr. Nakamura, a researcher at a US university, invents a novel material in her campus lab. She has not filed any US application but wants to file directly in Japan. Her employer tells her no license is needed because there is no US application. Is this correct?",
    options: [
      { text: "Yes, the foreign filing license requirement only applies when a US application has been filed" },
      { text: "Yes, because university research is exempt from foreign filing license requirements" },
      { text: "No, a foreign filing license is required for any invention made in the US, regardless of whether a US application has been filed" },
      { text: "No, but only because the material might have defense applications" },
    ],
    correctIndex: 2,
    explanation:
      "Under 35 USC 184, a license is required before filing in a foreign country for any invention 'made in this country.' This applies regardless of whether a US application has been filed. The inventor must either file a US application first (which automatically petitions for a license) or separately request a license from the USPTO.",
    citationRef: "35 USC 184; MPEP 140",
  },
];

// --- QUICK-FIRE QUESTIONS (12) ---
// True/false rapid recall covering all concept groups

export const ZONE6_QUICK_FIRE: QuickFireQuestion[] = [
  {
    id: "z6-qf-1",
    zoneSlug: "the-border",
    statement:
      "Filing a US patent application automatically constitutes a petition for a foreign filing license.",
    isTrue: true,
    explanation:
      "Under 37 CFR 5.12, the act of filing a US application is itself a petition for a foreign filing license.",
    citationRef: "37 CFR 5.12",
  },
  {
    id: "z6-qf-2",
    zoneSlug: "the-border",
    statement:
      "The 6-month foreign filing bar runs from the date the license is granted, not the US filing date.",
    isTrue: false,
    explanation:
      "The 6-month period runs from the date of US filing, not from when the license is granted.",
    citationRef: "35 USC 184",
  },
  {
    id: "z6-qf-3",
    zoneSlug: "the-border",
    statement:
      "A secrecy order under 35 USC 181 prevents foreign filing even after the 6-month period has expired.",
    isTrue: true,
    explanation:
      "A secrecy order overrides the normal 6-month rule and bars all foreign filing until the order is rescinded.",
    citationRef: "35 USC 181",
  },
  {
    id: "z6-qf-4",
    zoneSlug: "the-border",
    statement:
      "Criminal penalties for unauthorized foreign filing include fines up to $50,000.",
    isTrue: false,
    explanation:
      "The maximum fine under 35 USC 186 is $10,000, not $50,000. Imprisonment of up to 2 years may also apply.",
    citationRef: "35 USC 186",
  },
  {
    id: "z6-qf-5",
    zoneSlug: "the-border",
    statement:
      "A retroactive foreign filing license may be granted if the unauthorized filing was made through error and without deceptive intent.",
    isTrue: true,
    explanation:
      "37 CFR 5.25 allows petitioning for a retroactive license when the filing was through error and without deceptive intent.",
    citationRef: "37 CFR 5.25",
  },
  {
    id: "z6-qf-6",
    zoneSlug: "the-border",
    statement:
      "The foreign filing license requirement applies only to inventions related to national defense.",
    isTrue: false,
    explanation:
      "The license requirement under 35 USC 184 applies to all inventions made in the US, not just defense-related ones.",
    citationRef: "35 USC 184",
  },
  {
    id: "z6-qf-7",
    zoneSlug: "the-border",
    statement:
      "A foreign filing license covers only the subject matter of the application on which it was granted.",
    isTrue: true,
    explanation:
      "The license is limited to the specific subject matter disclosed in the US application. New subject matter requires a new license.",
    citationRef: "MPEP 140",
  },
  {
    id: "z6-qf-8",
    zoneSlug: "the-border",
    statement:
      "An invention made in the US can be filed directly abroad without any license if no US application is ever filed.",
    isTrue: false,
    explanation:
      "Under 35 USC 184, a license is required for any invention made in the US before filing abroad, regardless of whether a US application has been filed.",
    citationRef: "35 USC 184",
  },
  {
    id: "z6-qf-9",
    zoneSlug: "the-border",
    statement:
      "If a foreign filing license is not granted within 6 months of the US filing, the applicant may file abroad without one.",
    isTrue: true,
    explanation:
      "Under 35 USC 184, after 6 months from the US filing date, the applicant may file abroad without a license — unless a secrecy order has been imposed.",
    citationRef: "35 USC 184",
  },
  {
    id: "z6-qf-10",
    zoneSlug: "the-border",
    statement:
      "Filing abroad without a license permanently bars the inventor from ever obtaining a US patent on that invention.",
    isTrue: false,
    explanation:
      "Under 35 USC 185, the bar can be overcome if a retroactive license is obtained under 37 CFR 5.25, provided the filing was through error and without deceptive intent.",
    citationRef: "35 USC 185; 37 CFR 5.25",
  },
  {
    id: "z6-qf-11",
    zoneSlug: "the-border",
    statement:
      "A provisional US patent application triggers the same automatic petition for a foreign filing license as a non-provisional application.",
    isTrue: true,
    explanation:
      "Filing any US patent application — including a provisional — automatically constitutes a petition for a foreign filing license under 37 CFR 5.12.",
    citationRef: "37 CFR 5.12",
  },
  {
    id: "z6-qf-12",
    zoneSlug: "the-border",
    statement:
      "A foreign filing license granted by the USPTO also authorizes the applicant to disclose the invention to foreign persons within the US.",
    isTrue: false,
    explanation:
      "A foreign filing license only authorizes filing in a foreign country. Disclosure to foreign nationals may be subject to separate export control regulations (e.g., EAR, ITAR).",
    citationRef: "MPEP 140",
  },
];

// --- PROCEDURAL CASCADES (3) ---
// Multi-step fact patterns with 3 steps each

export const ZONE6_CASCADES: ProceduralCascadeData[] = [
  {
    id: "z6-cascade-1",
    conceptId: "ffl-filing-timeline",
    zoneSlug: "the-border",
    title: "New Inventor Filing Timeline",
    setup:
      "Dr. Rivera invents a new biomedical sensor in her US lab on January 10. She files a US provisional patent application on February 1. She wants to file corresponding applications in Europe and Japan as soon as possible. Walk through the key decision points.",
    steps: [
      {
        stem: "What happened automatically when Dr. Rivera filed the US provisional application on February 1?",
        options: [
          "Nothing — provisionals do not trigger license procedures",
          "A petition for a foreign filing license was automatically made",
          "A secrecy order review was automatically initiated",
          "The 6-month clock for foreign filing started on the invention date of January 10",
        ],
        correctIndex: 1,
        explanation:
          "Under 37 CFR 5.12, filing any US application — including a provisional — automatically constitutes a petition for a foreign filing license. The 6-month clock starts from the filing date (February 1), not the invention date.",
      },
      {
        stem: "Dr. Rivera receives her foreign filing license on February 20. Can she file in Europe and Japan immediately?",
        options: [
          "No, she must wait until 6 months after the US filing date",
          "Yes, the license authorizes her to file abroad immediately",
          "Yes, but only in countries that have a treaty with the US",
          "No, she must wait 30 days after the license is granted",
        ],
        correctIndex: 1,
        explanation:
          "Once a foreign filing license is granted, the applicant may file abroad immediately. There is no additional waiting period after the license is received.",
      },
      {
        stem: "On March 10, before Dr. Rivera files abroad, a secrecy order is imposed on her application. What is the effect?",
        options: [
          "The secrecy order has no effect because the license was already granted",
          "She can still file abroad but must notify the USPTO within 30 days",
          "The previously granted license is effectively overridden — she cannot file abroad while the secrecy order is in effect",
          "She can file abroad only in NATO countries",
        ],
        correctIndex: 2,
        explanation:
          "A secrecy order under 35 USC 181 bars all foreign filing regardless of any previously granted license. The applicant must wait until the secrecy order is rescinded before filing abroad.",
      },
    ],
  },
  {
    id: "z6-cascade-2",
    conceptId: "ffl-unauthorized-filing",
    zoneSlug: "the-border",
    title: "Unauthorized Filing Discovery",
    setup:
      "BioGen Corp discovers that its patent attorney filed a PCT application on March 1 for an invention made in the US without first filing a US application or obtaining a foreign filing license. The error was discovered on September 15. Advise BioGen through the remediation process.",
    steps: [
      {
        stem: "What is BioGen's most immediate legal exposure from the unauthorized foreign filing?",
        options: [
          "The PCT application is automatically void",
          "BioGen may be barred from obtaining a US patent on this invention under 35 USC 185, and may face criminal penalties under 35 USC 186",
          "BioGen must withdraw the PCT application within 30 days or face penalties",
          "There are no consequences because PCT applications are international, not foreign",
        ],
        correctIndex: 1,
        explanation:
          "Under 35 USC 185, filing abroad without a license bars the grant of a US patent. Under 35 USC 186, willful violations carry criminal penalties (fine up to $10,000 and/or imprisonment up to 2 years). A PCT application designating foreign countries constitutes a foreign filing.",
      },
      {
        stem: "BioGen wants to pursue a US patent. What must they do to overcome the bar of 35 USC 185?",
        options: [
          "Withdraw the PCT application and re-file in the US",
          "File a US application and petition for a retroactive foreign filing license under 37 CFR 5.25",
          "Request a waiver from the Commissioner of Patents",
          "Wait 12 months from the PCT filing date, then file in the US",
        ],
        correctIndex: 1,
        explanation:
          "Under 37 CFR 5.25, BioGen must petition for a retroactive foreign filing license. The petition must include a verified statement showing the filing was through error and without deceptive intent.",
      },
      {
        stem: "What is the single most important element BioGen must demonstrate in its retroactive license petition?",
        options: [
          "That the invention has no defense or national security implications",
          "That the unauthorized filing was made through error and without deceptive intent",
          "That the PCT application has not yet entered national phase in any country",
          "That the patent attorney responsible has been disciplined",
        ],
        correctIndex: 1,
        explanation:
          "The critical requirement under 37 CFR 5.25 is demonstrating that the filing was 'through error and without deceptive intent.' This must be supported by a verified statement from the applicant.",
      },
    ],
  },
  {
    id: "z6-cascade-3",
    conceptId: "ffl-no-us-app",
    zoneSlug: "the-border",
    title: "No-US-App Foreign Filing",
    setup:
      "Dr. Tanaka, a visiting researcher at MIT, develops a novel AI algorithm entirely in the US. She is a Japanese national and her employer (a Japanese company) wants to file a patent application directly in Japan without filing in the US first. Analyze the legal requirements.",
    steps: [
      {
        stem: "Does the foreign filing license requirement of 35 USC 184 apply to Dr. Tanaka's situation?",
        options: [
          "No, because Dr. Tanaka is a Japanese national, not a US citizen",
          "No, because the invention is a software algorithm, not a physical device",
          "Yes, because the invention was made in the United States, regardless of the inventor's nationality",
          "Yes, but only because MIT is a US institution",
        ],
        correctIndex: 2,
        explanation:
          "35 USC 184 applies to any invention 'made in this country.' The inventor's nationality is irrelevant — what matters is where the invention was made. Since the algorithm was developed at MIT in the US, a license is required.",
      },
      {
        stem: "How can Dr. Tanaka's employer obtain a foreign filing license without filing a US application?",
        options: [
          "They cannot — a US application must be filed to obtain a license",
          "They can request a license directly from the USPTO under 37 CFR 5.13",
          "They can request a license from the Japanese Patent Office",
          "No license is needed if they file within 6 months of the invention date",
        ],
        correctIndex: 1,
        explanation:
          "Under 37 CFR 5.13, a person may petition the Commissioner for a license to file abroad without first filing a US application. This provides a path for obtaining a license when no US filing is planned.",
      },
      {
        stem: "If the employer files in Japan without obtaining any license, and later wants to file a US application, what determines the scope of consequences?",
        options: [
          "Whether the Japanese application has been published",
          "Whether the filing was through error and without deceptive intent, which affects eligibility for a retroactive license",
          "Whether the invention was commercially successful in Japan",
          "Whether Dr. Tanaka has returned to Japan before the US filing",
        ],
        correctIndex: 1,
        explanation:
          "The key factor is whether the unauthorized filing was through error and without deceptive intent (37 CFR 5.25). If so, a retroactive license can be obtained. If the filing was knowing and intentional, the US patent bar under 35 USC 185 applies and criminal penalties under 35 USC 186 may follow.",
      },
    ],
  },
];
