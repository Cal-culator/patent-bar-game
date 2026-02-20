import {
  ScenarioQuestion,
  QuickFireQuestion,
  ProceduralCascadeData,
  MatchingGameData,
  TimelinePuzzleData,
} from "@/types";

// ============================================================
// Zone 1: The Vault — Apply Phase Content
// MPEP 101, 102 — Confidentiality & Access
// Scenarios, Quick-Fire, Procedural Cascades
// ============================================================

// --- SCENARIO QUESTIONS (8) ---
// Realistic exam-style fact patterns at escalating difficulty

export const ZONE1_SCENARIOS: ScenarioQuestion[] = [
  // Difficulty 1 — Basic confidentiality rule
  {
    id: "z1-scenario-1",
    conceptId: "conf-basic-confidentiality",
    zoneSlug: "the-vault",
    difficulty: 1,
    stem: "Attorney Rivera represents inventor Nakamura, who filed a utility patent application on June 1. A competitor contacts Rivera asking for details about the pending application. The application has not yet been published. What should Rivera tell the competitor?",
    options: [
      { text: "She may share the abstract and claims but not the specification" },
      { text: "She may confirm the application exists but cannot share its contents" },
      { text: "She cannot confirm or deny the existence of the application or share any of its contents, because unpublished applications are held in confidence" },
      { text: "She may share the application because it will eventually become public upon publication" },
    ],
    correctIndex: 2,
    explanation:
      "Under 35 USC 122(a), patent applications are held in confidence by the USPTO and no information concerning them may be given without authority of the applicant. Until publication or patent grant, the application is confidential. Even confirming its existence would violate this confidentiality.",
    citationRef: "35 USC 122(a); 37 CFR 1.14(b)",
  },
  {
    id: "z1-scenario-2",
    conceptId: "conf-published-access",
    zoneSlug: "the-vault",
    difficulty: 1,
    stem: "Dr. Patel is a researcher who wants to review the complete file wrapper of a patent that issued last month to a competitor. He has no connection to the applicant or the prosecution. Can Dr. Patel obtain access to the file?",
    options: [
      { text: "No, only the patent owner and their attorney can access the file wrapper" },
      { text: "Yes, once a patent has issued, the application file is open to the public" },
      { text: "Only if Dr. Patel files a petition and pays a special fee" },
      { text: "Only if Dr. Patel demonstrates a legitimate business need to the USPTO" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 1.14(a), the file of a patented application is open to public inspection. Once a patent issues, any member of the public may access the complete file wrapper, including the prosecution history, without any special petition or showing of need.",
    citationRef: "37 CFR 1.14(a)",
  },

  // Difficulty 2 — Publication timing, non-publication request
  {
    id: "z1-scenario-3",
    conceptId: "conf-18-month-publication",
    zoneSlug: "the-vault",
    difficulty: 2,
    stem: "Inventor Chen filed a US utility application on January 15, 2024, claiming priority to a provisional application filed on March 10, 2023. Assuming no non-publication request was filed, when will the application be published?",
    options: [
      { text: "18 months from January 15, 2024 (the non-provisional filing date), which is approximately July 15, 2025" },
      { text: "18 months from March 10, 2023 (the earliest filing date), which is approximately September 10, 2024" },
      { text: "12 months from January 15, 2024, which is approximately January 15, 2025" },
      { text: "The USPTO will publish it only after the examiner completes a first action on the merits" },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 122(b)(1)(A), applications are published promptly after the expiration of 18 months from the earliest filing date for which a benefit is sought. Since Chen claims priority to the March 10, 2023 provisional, that is the earliest filing date, and publication occurs approximately 18 months later.",
    citationRef: "35 USC 122(b)(1)(A)",
  },
  {
    id: "z1-scenario-4",
    conceptId: "conf-non-publication-request",
    zoneSlug: "the-vault",
    difficulty: 2,
    stem: "Attorney Hoffman is filing a US utility application for her client, BioTech Solutions, which has decided not to pursue patent protection in any foreign country. BioTech wants to keep the application confidential for as long as possible. What should Hoffman do?",
    options: [
      { text: "File a petition to make special requesting delayed publication" },
      { text: "File a non-publication request under 35 USC 122(b)(2)(B)(i) at the time of filing, certifying the invention has not been and will not be the subject of a foreign filing" },
      { text: "Simply do nothing; the USPTO will not publish the application unless instructed to do so" },
      { text: "Request that the application be converted to a provisional application to avoid publication" },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 122(b)(2)(B)(i), an applicant may request that the application not be published if the invention disclosed has not been and will not be the subject of an application filed in a foreign country that requires 18-month publication. The non-publication request must be filed at the time of filing or within the time prescribed by the USPTO.",
    citationRef: "35 USC 122(b)(2)(B)(i)",
  },

  // Difficulty 3 — Non-pub + foreign filing complication, status info
  {
    id: "z1-scenario-5",
    conceptId: "conf-non-pub-foreign-filing",
    zoneSlug: "the-vault",
    difficulty: 3,
    stem: "Inventor Martinez filed a US utility application on April 1, 2024, with a non-publication request. Six months later, Martinez's company decides to file a corresponding application in Japan. Martinez's attorney files the Japanese application on October 15, 2024, but forgets to notify the USPTO. On January 5, 2025 (82 days after the Japanese filing), the attorney realizes the omission. What is the status of Martinez's US application?",
    options: [
      { text: "The application remains pending because the USPTO was not aware of the Japanese filing" },
      { text: "The application is deemed abandoned because the applicant failed to notify the USPTO within 45 days of the foreign filing" },
      { text: "The application will simply be published at 18 months and proceed normally" },
      { text: "The non-publication request is automatically rescinded but the application remains pending" },
    ],
    correctIndex: 1,
    explanation:
      "When an applicant who has filed a non-publication request subsequently files in a foreign country, they must notify the USPTO within 45 days of the foreign filing under 35 USC 122(b)(2)(B)(iii). Failure to do so results in the application being regarded as abandoned. Here, 82 days have passed since the Japanese filing, well beyond the 45-day window.",
    citationRef: "35 USC 122(b)(2)(B)(iii)",
  },
  {
    id: "z1-scenario-6",
    conceptId: "conf-status-information",
    zoneSlug: "the-vault",
    difficulty: 3,
    stem: "Attorney Lin represents a client who wants to determine whether a competitor's patent application (which has not been published) is still pending at the USPTO. Lin has no authorization from the competitor. Under what circumstances, if any, can Lin obtain status information about the unpublished application?",
    options: [
      { text: "Lin can obtain no information whatsoever about an unpublished pending application" },
      { text: "Lin can obtain the full file wrapper if she files a Freedom of Information Act (FOIA) request" },
      { text: "Lin can obtain status information—specifically whether the application is pending, abandoned, or patented—by filing a written request under 37 CFR 1.14(a)(1)(vi) identifying the application by its application number, provided she has the application number" },
      { text: "Lin can obtain status information only through a court-ordered subpoena" },
    ],
    correctIndex: 2,
    explanation:
      "Under 37 CFR 1.14(a)(1)(vi) and 37 CFR 1.14(e), status information (whether an application is pending, abandoned, or patented) may be provided for any identified application. However, this requires knowing the application number. The substantive contents of an unpublished application remain confidential.",
    citationRef: "37 CFR 1.14(a)(1)(vi); 37 CFR 1.14(e)",
  },

  // Difficulty 4 — Abandoned unpublished access, trade secret redaction
  {
    id: "z1-scenario-7",
    conceptId: "conf-abandoned-unpublished-access",
    zoneSlug: "the-vault",
    difficulty: 4,
    stem: "GlobalChem Inc. is involved in a patent dispute and needs to review an unpublished, abandoned patent application filed by a former employee who later assigned rights to a third party. The application was never published and never issued as a patent. GlobalChem believes the abandoned application contains prior art relevant to a pending interference. How can GlobalChem obtain access?",
    options: [
      { text: "File a petition under 37 CFR 1.14(i) to access the abandoned unpublished application, demonstrating that the application is relied upon and identifying the proceeding in which it is relevant" },
      { text: "Unpublished abandoned applications are permanently sealed and can never be accessed by anyone other than the original applicant" },
      { text: "File a FOIA request with the USPTO, which must disclose all government records upon request" },
      { text: "Request access through the Board of Patent Appeals and Interferences as part of the interference proceeding, since the USPTO will automatically make all relevant files available" },
    ],
    correctIndex: 0,
    explanation:
      "Under 37 CFR 1.14(i), a petition may be filed to access an unpublished abandoned application. The petitioner must identify the application and establish that it is relied upon (e.g., as prior art in a proceeding). Access is not automatic; it requires a specific showing. FOIA does not override the statutory confidentiality of patent applications under 35 USC 122.",
    citationRef: "37 CFR 1.14(i); 35 USC 122(a)",
  },
  {
    id: "z1-scenario-8",
    conceptId: "conf-trade-secret-redaction",
    zoneSlug: "the-vault",
    difficulty: 4,
    stem: "PharmaCorp filed a utility application disclosing a new drug synthesis process. The application includes detailed manufacturing parameters that PharmaCorp considers trade secrets. The application is scheduled for publication in two months. PharmaCorp's attorney wants to prevent the trade secret portions from being published while still having the application published. What is the proper course of action?",
    options: [
      { text: "File a petition under 37 CFR 1.217 requesting redaction of the trade secret portions from the published application, providing a redacted version and a detailed explanation of why the material qualifies as a trade secret" },
      { text: "Withdraw the application before publication and refile without the trade secret information" },
      { text: "File a non-publication request; it can be filed at any time before the publication date" },
      { text: "Request that the examiner classify the application as containing Sensitive Security Information to prevent publication entirely" },
    ],
    correctIndex: 0,
    explanation:
      "Under 37 CFR 1.217, an applicant may petition to have trade secret information redacted from the published version of a patent application. The petition must include a redacted copy and an explanation establishing that the material constitutes a trade secret. A non-publication request cannot be filed after the time of filing (or within the prescribed period), so that option is unavailable this close to publication.",
    citationRef: "37 CFR 1.217",
  },
];

// --- QUICK-FIRE QUESTIONS (12) ---
// True/false statements — approximately half true, half false

export const ZONE1_QUICK_FIRE: QuickFireQuestion[] = [
  {
    id: "z1-qf-1",
    zoneSlug: "the-vault",
    statement:
      "Under 35 USC 122(a), patent applications are held in confidence by the USPTO until the application is published or a patent is granted.",
    isTrue: true,
    explanation:
      "This is a correct statement of the basic confidentiality rule. 35 USC 122(a) establishes that applications shall be kept in confidence until published under 122(b) or until a patent issues.",
    citationRef: "35 USC 122(a)",
  },
  {
    id: "z1-qf-2",
    zoneSlug: "the-vault",
    statement:
      "Provisional patent applications are published 18 months after their filing date, just like non-provisional utility applications.",
    isTrue: false,
    explanation:
      "Provisional applications are NOT published. They are maintained in confidence and automatically expire after 12 months. Only non-provisional utility applications (and certain other types) are subject to the 18-month publication requirement under 35 USC 122(b).",
    citationRef: "35 USC 122(b)(1)(A)",
  },
  {
    id: "z1-qf-3",
    zoneSlug: "the-vault",
    statement:
      "Design patent applications are subject to 18-month publication under 35 USC 122(b), just like utility applications.",
    isTrue: false,
    explanation:
      "Design patent applications are NOT published at 18 months. They remain confidential until the design patent is granted. The 18-month publication requirement applies to utility applications filed on or after November 29, 2000.",
    citationRef: "35 USC 122(b)(2)(A)(iv)",
  },
  {
    id: "z1-qf-4",
    zoneSlug: "the-vault",
    statement:
      "Once a patent has issued, any member of the public may inspect the complete application file wrapper without filing a petition.",
    isTrue: true,
    explanation:
      "Under 37 CFR 1.14(a), the file of a patented application is open to the public. No petition, fee, or special authorization is required to inspect the file wrapper of an issued patent.",
    citationRef: "37 CFR 1.14(a)",
  },
  {
    id: "z1-qf-5",
    zoneSlug: "the-vault",
    statement:
      "A non-publication request under 35 USC 122(b)(2)(B)(i) may be filed at any time before the application is actually published.",
    isTrue: false,
    explanation:
      "A non-publication request must be filed at the time of filing the application or within the time prescribed by the Director. It cannot be filed at any arbitrary time before publication.",
    citationRef: "35 USC 122(b)(2)(B)(i)",
  },
  {
    id: "z1-qf-6",
    zoneSlug: "the-vault",
    statement:
      "If an applicant files a non-publication request and later files the same invention in a foreign country, the applicant must notify the USPTO within 45 days or the application will be regarded as abandoned.",
    isTrue: true,
    explanation:
      "Under 35 USC 122(b)(2)(B)(iii), if an applicant who made a non-publication request subsequently files in a foreign country, they must rescind the non-publication request and notify the USPTO within 45 days of the foreign filing. Failure to do so results in the application being regarded as abandoned.",
    citationRef: "35 USC 122(b)(2)(B)(iii)",
  },
  {
    id: "z1-qf-7",
    zoneSlug: "the-vault",
    statement:
      "Under 18 USC 1905, a USPTO employee who willfully publishes or discloses confidential patent application information without authorization may face criminal penalties including fines and imprisonment.",
    isTrue: true,
    explanation:
      "18 USC 1905 provides for criminal penalties for federal employees who disclose confidential information, including trade secrets and patent application information. This reinforces the confidentiality obligations of USPTO personnel.",
    citationRef: "18 USC 1905",
  },
  {
    id: "z1-qf-8",
    zoneSlug: "the-vault",
    statement:
      "Status information about whether a patent application is pending, abandoned, or patented may be obtained by any person who can identify the application by its application number.",
    isTrue: true,
    explanation:
      "Under 37 CFR 1.14(a)(1)(vi) and 37 CFR 1.14(e), status information (whether an application is pending, abandoned, or patented) may be provided to any person who can identify the application, even for unpublished applications.",
    citationRef: "37 CFR 1.14(e)",
  },
  {
    id: "z1-qf-9",
    zoneSlug: "the-vault",
    statement:
      "The Freedom of Information Act (FOIA) overrides the confidentiality provisions of 35 USC 122, allowing any person to obtain the contents of unpublished patent applications.",
    isTrue: false,
    explanation:
      "FOIA does not override the statutory confidentiality of patent applications. 35 USC 122 provides a specific statutory exemption, and Exemption 3 of FOIA protects information specifically exempted from disclosure by other statutes. Patent application confidentiality falls within this exemption.",
    citationRef: "35 USC 122(a); 5 USC 552(b)(3)",
  },
  {
    id: "z1-qf-10",
    zoneSlug: "the-vault",
    statement:
      "An applicant may petition under 37 CFR 1.217 to have portions of their application containing trade secrets redacted from the published version.",
    isTrue: true,
    explanation:
      "37 CFR 1.217 permits an applicant to request that trade secret information be redacted from the published application. The applicant must provide a redacted version and establish that the information qualifies as a trade secret.",
    citationRef: "37 CFR 1.217",
  },
  {
    id: "z1-qf-11",
    zoneSlug: "the-vault",
    statement:
      "Once a patent application has been abandoned without ever being published, it can never be accessed by any third party under any circumstances.",
    isTrue: false,
    explanation:
      "While unpublished abandoned applications are generally confidential, access may be obtained by petition under 37 CFR 1.14(i). The petitioner must demonstrate that the abandoned application is relied upon (for example, as prior art cited in another proceeding).",
    citationRef: "37 CFR 1.14(i)",
  },
  {
    id: "z1-qf-12",
    zoneSlug: "the-vault",
    statement:
      "The 18-month publication date is calculated from the earliest filing date for which a benefit is sought, including provisional application filing dates.",
    isTrue: true,
    explanation:
      "Under 35 USC 122(b)(1)(A), publication occurs promptly after 18 months from the earliest filing date for which a benefit is sought. If the applicant claims priority to an earlier provisional application, the provisional filing date is the earliest filing date, and the 18-month clock starts from that date.",
    citationRef: "35 USC 122(b)(1)(A)",
  },
];

// --- PROCEDURAL CASCADES (3) ---
// Multi-step procedures walked through decision-by-decision

export const ZONE1_CASCADES: ProceduralCascadeData[] = [
  {
    id: "z1-cascade-1",
    conceptId: "conf-access-procedure",
    zoneSlug: "the-vault",
    title: "Requesting Access to an Unpublished Abandoned Application",
    setup:
      "You are Attorney Reeves, representing SolarTech Corp. in a patent dispute. During litigation, opposing counsel references a patent application (No. 14/555,000) that was filed by a former SolarTech engineer after leaving the company. The application was never published and was abandoned two years ago. SolarTech believes this application contains prior art relevant to invalidating an asserted patent. You need to obtain access to the file.",
    steps: [
      {
        stem: "What is your first step to request access to this unpublished, abandoned application?",
        options: [
          "File a FOIA request with the USPTO for the application contents",
          "File a petition under 37 CFR 1.14(i) requesting access to the unpublished abandoned application",
          "Subpoena the application directly from the inventor through the court",
          "Contact the USPTO examiner who handled the case and request an informal copy",
        ],
        correctIndex: 1,
        explanation:
          "The proper mechanism for accessing an unpublished, abandoned application is a petition under 37 CFR 1.14(i). FOIA does not override 35 USC 122 confidentiality, and informal requests to examiners are not an authorized channel for accessing confidential applications.",
      },
      {
        stem: "In your petition under 37 CFR 1.14(i), what must you include to support your request for access?",
        options: [
          "Only the application number and a filing fee",
          "The application number, a statement identifying the proceeding in which the application is relevant, and an explanation of how the application is relied upon as evidence",
          "A court order compelling the USPTO to release the application",
          "Written consent from the original applicant or their assigns",
        ],
        correctIndex: 1,
        explanation:
          "A petition under 37 CFR 1.14(i) must identify the application and establish that it is being relied upon. The petitioner must explain the specific basis for needing access, such as identifying the proceeding and explaining how the abandoned application is relevant as prior art or other evidence.",
      },
      {
        stem: "The USPTO grants your petition. What level of access does SolarTech receive to the abandoned application?",
        options: [
          "Access only to the abstract and claims of the application",
          "Access to the complete file wrapper, including the specification, claims, prosecution history, and all papers filed",
          "Access only to a summary prepared by the examiner",
          "Access only to those portions specifically identified as relevant in the petition",
        ],
        correctIndex: 1,
        explanation:
          "When a petition under 37 CFR 1.14(i) is granted, the petitioner receives access to the complete file wrapper of the abandoned application, not just selected portions. This includes the specification, claims, drawings, and prosecution history.",
      },
    ],
  },
  {
    id: "z1-cascade-2",
    conceptId: "conf-non-pub-procedure",
    zoneSlug: "the-vault",
    title: "Filing and Managing a Non-Publication Request",
    setup:
      "You are Attorney Kim, preparing to file a US utility patent application for NanoMed Inc., a small biotech startup. NanoMed has decided it only wants US patent protection and wants to keep its application confidential to maintain trade secret protection as a fallback if the patent does not issue. You are advising NanoMed on the non-publication request process.",
    steps: [
      {
        stem: "When must the non-publication request be filed, and what certification must it include?",
        options: [
          "It may be filed at any time before the 18-month publication date and requires no certification",
          "It must be filed at the time of filing the application (or within the prescribed period) and must include a certification that the invention has not been and will not be the subject of an application filed in a foreign country that requires 18-month publication",
          "It must be filed within 3 months of the filing date and must include certification that the applicant is a US citizen",
          "It must be filed by petition to the Director within 6 months of filing and must include a showing of good cause",
        ],
        correctIndex: 1,
        explanation:
          "Under 35 USC 122(b)(2)(B)(i), the non-publication request must be submitted at the time of filing (or within the time set by the Director). It must include a certification that the invention disclosed in the application has not been and will not be the subject of an application filed in another country that requires publication at 18 months.",
      },
      {
        stem: "Eighteen months after filing, NanoMed's business strategy changes and it decides to file a corresponding application in the European Patent Office (EPO). What must Attorney Kim do?",
        options: [
          "Nothing; the non-publication request only applies to the US application and has no effect on foreign filings",
          "Notify the USPTO within 45 days of the EPO filing date and rescind the non-publication request",
          "Withdraw the US application before filing in Europe to avoid any conflict",
          "File an amendment to the US application removing the non-publication request at any convenient time",
        ],
        correctIndex: 1,
        explanation:
          "Under 35 USC 122(b)(2)(B)(iii), if an applicant who made a non-publication request later files in a foreign country that requires 18-month publication, the applicant must notify the USPTO within 45 days of the foreign filing. This effectively rescinds the non-publication request, and the US application will be published.",
      },
      {
        stem: "Attorney Kim notifies the USPTO within 45 days of the EPO filing. What happens to the US application next?",
        options: [
          "The application is immediately published upon receipt of the notification",
          "The application will be published as soon as possible, following normal publication procedures, and the non-publication request is treated as rescinded",
          "The application remains unpublished because the original non-publication request was properly filed",
          "The application is deemed abandoned because the certification in the non-publication request was violated",
        ],
        correctIndex: 1,
        explanation:
          "Once the USPTO is timely notified (within 45 days), the non-publication request is rescinded and the application will be published following normal procedures. Because the notification was timely, the application is NOT abandoned. Abandonment only occurs when the applicant fails to provide the required 45-day notice.",
      },
    ],
  },
  {
    id: "z1-cascade-3",
    conceptId: "conf-third-party-access",
    zoneSlug: "the-vault",
    title: "Determining What Information a Third Party Can Obtain",
    setup:
      "You are a patent analyst at MegaCorp Industries. Your supervisor has asked you to gather as much information as possible about three different patent filings by a competitor, RivalTech: (1) US Patent No. 11,222,333, which issued six months ago; (2) Published Application No. US 2024/0012345, which is still pending; and (3) Application No. 16/888,000, which you believe was filed two years ago but has never been published. Your supervisor wants to know what information is available for each.",
    steps: [
      {
        stem: "For US Patent No. 11,222,333 (the issued patent), what level of access can you obtain?",
        options: [
          "Only the published patent document itself; the prosecution history is confidential",
          "The complete file wrapper including the specification, prosecution history, and all correspondence, because patented application files are open to the public under 37 CFR 1.14(a)",
          "The patent document and a summary of the prosecution, but not the actual office actions or applicant responses",
          "Full access, but only after filing a petition and paying a fee under 37 CFR 1.14(a)",
        ],
        correctIndex: 1,
        explanation:
          "Under 37 CFR 1.14(a), the file of a patented application is open to the public. This means the entire file wrapper—specification, claims, prosecution history, office actions, responses, amendments, and all other papers—is available for public inspection. No petition or special fee is required.",
      },
      {
        stem: "For Published Application No. US 2024/0012345 (the published but still pending application), what can you access?",
        options: [
          "Nothing beyond the published application itself, because the file is still pending and therefore confidential",
          "Only the claims as published and the filing date",
          "The application-as-published and the application file contents, since publication opens the file to public access under 37 CFR 1.14(a)",
          "The full file wrapper, but only the documents filed before the publication date",
        ],
        correctIndex: 2,
        explanation:
          "Under 37 CFR 1.14(a), once a patent application has been published, the application file is available to the public. This includes the prosecution history and all papers in the file. Publication effectively opens up the file for public access.",
      },
      {
        stem: "For Application No. 16/888,000 (the application that was filed two years ago and never published), what information, if any, can you obtain?",
        options: [
          "You can obtain the full file wrapper by filing a FOIA request",
          "You can obtain absolutely no information of any kind about this application",
          "You can obtain limited status information (whether it is pending, abandoned, or patented) if you submit a written request identifying the application number under 37 CFR 1.14(a)(1)(vi), but you cannot access the substantive contents",
          "You can obtain the abstract and independent claims but not the full specification",
        ],
        correctIndex: 2,
        explanation:
          "For an unpublished application, the substantive contents remain confidential under 35 USC 122(a) and 37 CFR 1.14(b). However, under 37 CFR 1.14(a)(1)(vi) and 37 CFR 1.14(e), limited status information—specifically whether the application is pending, abandoned, or patented—may be provided to anyone who identifies the application by its application number.",
      },
    ],
  },
];

// --- MATCHING GAMES (4) ---
// Term-definition matching exercises for key Zone 1 concepts

export const ZONE1_MATCHING: MatchingGameData[] = [
  {
    id: "z1-match-1",
    conceptId: "conf-basic-confidentiality",
    zoneSlug: "the-vault",
    title: "Confidentiality Fundamentals",
    instruction: "Match each patent law term with its correct definition.",
    pairs: [
      {
        term: "35 USC 122(a)",
        definition:
          "Statutory provision requiring patent applications to be kept in confidence by the USPTO",
      },
      {
        term: "18 USC 1905",
        definition:
          "Criminal statute penalizing federal employees who disclose confidential patent application information",
      },
      {
        term: "37 CFR 1.14(b)",
        definition:
          "Regulation establishing that unpublished pending applications are not available to the public",
      },
      {
        term: "Publication under 35 USC 122(b)",
        definition:
          "The event that ends the confidential status of a patent application by making it publicly available",
      },
      {
        term: "Patent grant",
        definition:
          "The issuance of a patent, which opens the entire application file wrapper to public inspection",
      },
    ],
  },
  {
    id: "z1-match-2",
    conceptId: "conf-18-month-publication",
    zoneSlug: "the-vault",
    title: "Publication Rules and Exceptions",
    instruction: "Match each patent law term with its correct definition.",
    pairs: [
      {
        term: "18-month publication",
        definition:
          "Default publication timing calculated from the earliest filing date for which benefit is sought",
      },
      {
        term: "Non-publication request",
        definition:
          "A certification filed at the time of filing that the invention will not be filed in a foreign country requiring 18-month publication",
      },
      {
        term: "Design patent applications",
        definition:
          "A category of patent applications exempt from the 18-month publication requirement",
      },
      {
        term: "Provisional applications",
        definition:
          "Applications that are never published by the USPTO and automatically expire after 12 months",
      },
      {
        term: "Earliest filing date",
        definition:
          "The date from which the 18-month publication period is measured, including any claimed priority date",
      },
    ],
  },
  {
    id: "z1-match-3",
    conceptId: "conf-non-publication-request",
    zoneSlug: "the-vault",
    title: "Non-Publication Request Requirements",
    instruction: "Match each patent law term with its correct definition.",
    pairs: [
      {
        term: "35 USC 122(b)(2)(B)(i)",
        definition:
          "Statutory basis for requesting that a patent application not be published",
      },
      {
        term: "45-day notification requirement",
        definition:
          "Deadline to notify the USPTO after filing in a foreign country when a non-publication request was previously made",
      },
      {
        term: "Rescission of non-publication request",
        definition:
          "Required action when an applicant who made a non-publication request later files a corresponding foreign application",
      },
      {
        term: "Regarded as abandoned",
        definition:
          "The consequence of failing to timely notify the USPTO of a foreign filing after making a non-publication request",
      },
      {
        term: "Certification at filing",
        definition:
          "The timing requirement for submitting a non-publication request to the USPTO",
      },
    ],
  },
  {
    id: "z1-match-4",
    conceptId: "conf-third-party-access",
    zoneSlug: "the-vault",
    title: "Third-Party Access to Patent Files",
    instruction: "Match each patent law term with its correct definition.",
    pairs: [
      {
        term: "37 CFR 1.14(a)",
        definition:
          "Regulation providing that files of patented and published applications are open to public inspection",
      },
      {
        term: "37 CFR 1.14(i)",
        definition:
          "Petition-based mechanism for accessing unpublished abandoned applications that are relied upon as references",
      },
      {
        term: "37 CFR 1.14(e)",
        definition:
          "Provision allowing any person to obtain status information (pending, abandoned, or patented) for an identified application",
      },
      {
        term: "37 CFR 1.217",
        definition:
          "Regulation allowing applicants to petition for redaction of trade secret information from published applications",
      },
      {
        term: "FOIA Exemption 3",
        definition:
          "The Freedom of Information Act exemption that protects patent application confidentiality under 35 USC 122",
      },
    ],
  },
];

// --- TIMELINE PUZZLES (3) ---
// Chronological ordering exercises for patent procedures

export const ZONE1_TIMELINES: TimelinePuzzleData[] = [
  {
    id: "z1-timeline-1",
    conceptId: "conf-18-month-publication",
    zoneSlug: "the-vault",
    title: "Patent Application Confidentiality Lifecycle",
    instruction: "Arrange these events in correct chronological order.",
    events: [
      {
        id: "z1-tl1-evt-1",
        label: "Application filed with the USPTO",
        description:
          "The applicant files a non-provisional utility patent application. The application is held in confidence under 35 USC 122(a).",
      },
      {
        id: "z1-tl1-evt-2",
        label: "Application maintained in confidence",
        description:
          "During the period before publication, the USPTO keeps the application confidential. Only the applicant, attorney of record, and authorized persons may access it.",
      },
      {
        id: "z1-tl1-evt-3",
        label: "Application published at 18 months",
        description:
          "The application is published under 35 USC 122(b)(1)(A), promptly after 18 months from the earliest filing date for which benefit is sought.",
      },
      {
        id: "z1-tl1-evt-4",
        label: "File wrapper open to public inspection",
        description:
          "After publication, the application file becomes open to public inspection under 37 CFR 1.11(a). Any member of the public can access the prosecution history.",
      },
      {
        id: "z1-tl1-evt-5",
        label: "Patent issues and full file permanently public",
        description:
          "When the patent is granted, the entire file wrapper including all prosecution documents remains permanently available for public inspection under 37 CFR 1.14(a).",
      },
    ],
  },
  {
    id: "z1-timeline-2",
    conceptId: "conf-non-pub-foreign-filing",
    zoneSlug: "the-vault",
    title: "Non-Publication Request with Foreign Filing Complication",
    instruction: "Arrange these events in correct chronological order.",
    events: [
      {
        id: "z1-tl2-evt-1",
        label: "File US application with non-publication request",
        description:
          "The applicant files a US utility application accompanied by a non-publication request under 35 USC 122(b)(2)(B)(i), certifying no foreign filing will be made.",
      },
      {
        id: "z1-tl2-evt-2",
        label: "Business strategy changes; foreign filing decided",
        description:
          "The applicant's business needs change and they decide to pursue patent protection abroad by filing a corresponding application in a foreign country.",
      },
      {
        id: "z1-tl2-evt-3",
        label: "Foreign application filed",
        description:
          "The applicant files the corresponding application in a foreign patent office that requires 18-month publication. The 45-day notification clock begins.",
      },
      {
        id: "z1-tl2-evt-4",
        label: "Notify USPTO and rescind non-publication request within 45 days",
        description:
          "The applicant must notify the USPTO of the foreign filing and rescind the non-publication request within 45 days under 35 USC 122(b)(2)(B)(iii). Failure results in abandonment.",
      },
      {
        id: "z1-tl2-evt-5",
        label: "US application published under normal procedures",
        description:
          "After timely notification and rescission, the USPTO publishes the US application following normal publication procedures.",
      },
    ],
  },
  {
    id: "z1-timeline-3",
    conceptId: "conf-abandoned-unpublished-access",
    zoneSlug: "the-vault",
    title: "Accessing an Unpublished Abandoned Application",
    instruction: "Arrange these events in correct chronological order.",
    events: [
      {
        id: "z1-tl3-evt-1",
        label: "Application filed but never published",
        description:
          "An applicant files a patent application that is maintained in confidence under 35 USC 122(a). The application is never published.",
      },
      {
        id: "z1-tl3-evt-2",
        label: "Application becomes abandoned",
        description:
          "The applicant fails to respond to an office action or otherwise abandons the application. The unpublished application remains confidential even after abandonment.",
      },
      {
        id: "z1-tl3-evt-3",
        label: "Third party identifies need for the abandoned application",
        description:
          "A third party discovers that the unpublished abandoned application is relevant as prior art or evidence in another proceeding.",
      },
      {
        id: "z1-tl3-evt-4",
        label: "Petition filed under 37 CFR 1.14(i)",
        description:
          "The third party files a petition identifying the application number and demonstrating that the abandoned application is relied upon as a reference in a specific proceeding.",
      },
    ],
  },
];