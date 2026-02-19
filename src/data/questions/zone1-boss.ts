import { BossQuestion } from "@/types";

// ============================================================
// Zone 1: The Vault — Boss Battle Questions
// MPEP 101, 102 — Confidentiality & Access (35 USC 122, 37 CFR 1.14)
// 10 mixed questions (7 scenario, 3 true/false) at difficulty 3-4
// ============================================================

export const ZONE1_BOSS: BossQuestion[] = [
  // Q1: Scenario — Non-publication request + later foreign filing obligation (difficulty 4)
  {
    id: "z1-boss-1",
    conceptId: "conf-nonpub-foreign-filing",
    zoneSlug: "the-vault",
    questionType: "scenario",
    difficulty: 4,
    stem: "Attorney Larson files a US non-provisional utility application on January 10 with a non-publication request under 35 USC 122(b)(2)(B)(i). On June 15 of the same year, the applicant's business team decides to file a counterpart application in Japan. Attorney Larson files the Japanese application on June 20. She notifies the USPTO of the foreign filing on July 30. Which statement best describes the consequences?",
    options: [
      { text: "The notification was timely because it was within 6 months of the US filing date, so the non-publication request remains in effect" },
      { text: "The non-publication request is rescinded because the applicant filed in a foreign country, but the notification was timely since it was given within 45 days of the Japanese filing" },
      { text: "The US application will be regarded as abandoned because the applicant failed to notify the USPTO before filing in Japan" },
      { text: "The non-publication request remains valid because the 45-day notification period runs from the date the USPTO receives the notice, not from the foreign filing date" },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 122(b)(2)(B)(i), an applicant who files a non-publication request certifies the invention will not be filed in a country requiring 18-month publication. If the applicant later files in such a country (here, Japan on June 20), they must rescind the non-publication request and notify the USPTO within 45 days of the foreign filing date. July 30 is 40 days after June 20, so the notification is timely. The non-publication request is rescinded and the application will be published in due course. Option A is wrong because the 6-month window from the US filing date is irrelevant — the 45-day period runs from the foreign filing date. Option C is wrong because the statute does not require advance notice before the foreign filing, only notification within 45 days after. Option D misstates the trigger — the 45-day period runs from the date of the foreign filing, not from the date the USPTO receives notice. Failure to timely notify would result in the application being regarded as abandoned under 35 USC 122(b)(2)(B)(iii).",
    citationRef: "35 USC 122(b)(2)(B)(i)-(iii); 37 CFR 1.213(a)",
  },
  // Q2: Scenario — Access to unpublished abandoned application (difficulty 4)
  {
    id: "z1-boss-2",
    conceptId: "conf-abandoned-access",
    zoneSlug: "the-vault",
    questionType: "scenario",
    difficulty: 4,
    stem: "Inventor Martinez filed a non-provisional utility application that was never published and went abandoned after he failed to respond to an office action. Two years later, a competitor named Briggs discovers a reference to Martinez's application number in a court filing and wants to inspect the application file. The application was not referenced in any issued patent or published application. Which path, if any, could give Briggs access to the file?",
    options: [
      { text: "Briggs may freely inspect the file because abandoned applications are public records" },
      { text: "Briggs may file a petition under 37 CFR 1.14(i) to access the unpublished abandoned application, but must show a proper basis such as that the application is the subject of litigation or the applicant has waived confidentiality" },
      { text: "Briggs has no way to access the file under any circumstances because 35 USC 122(a) absolutely bars access to unpublished applications" },
      { text: "Briggs can access the file simply by paying the standard document retrieval fee to the USPTO" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 1.14(i), a petition may be filed to access an unpublished abandoned application. The petition must establish a proper basis — for example, that the application is identified in a court proceeding and access is needed, or that the applicant has authorized access. Under 37 CFR 1.14(b), pending and unpublished abandoned applications are generally maintained in confidence per 35 USC 122(a). However, 37 CFR 1.14(i) provides a petition mechanism for special circumstances. The mere discovery of an application number does not automatically entitle a third party to access — they must petition and demonstrate a qualifying basis.",
    citationRef: "37 CFR 1.14(b); 37 CFR 1.14(i); 35 USC 122(a)",
  },
  // Q3: Scenario — Design patent publication and confidentiality (difficulty 3)
  {
    id: "z1-boss-3",
    conceptId: "conf-design-provisional-exceptions",
    zoneSlug: "the-vault",
    questionType: "scenario",
    difficulty: 3,
    stem: "Inventor Nakamura files a design patent application on March 1. Thirteen months later, a competitor searches the USPTO public databases looking for Nakamura's design application but finds nothing. The competitor assumes Nakamura never filed. Eighteen months after filing, the competitor searches again and still finds nothing published. Which explanation is most accurate?",
    options: [
      { text: "The USPTO made an error in failing to publish the application at 18 months" },
      { text: "Nakamura must have filed a non-publication request" },
      { text: "Design patent applications are not subject to the 18-month publication rule under 35 USC 122(b); they remain confidential until the design patent is granted" },
      { text: "Design applications are published at 18 months but only in a separate database not accessible to the public" },
    ],
    correctIndex: 2,
    explanation:
      "Under 35 USC 122(b)(2)(A)(iv), design patent applications are specifically excepted from the 18-month publication requirement. Design applications remain confidential under 35 USC 122(a) until the patent actually issues. This is a key distinction from utility applications. Similarly, provisional applications are not published at 18 months. Once the design patent issues, the full file becomes available to the public under 37 CFR 1.14(a).",
    citationRef: "35 USC 122(b)(2)(A)(iv); 35 USC 122(a); 37 CFR 1.14(a)",
  },
  // Q4: Scenario — Published application file access vs. unpublished (difficulty 3)
  {
    id: "z1-boss-4",
    conceptId: "conf-published-vs-unpublished",
    zoneSlug: "the-vault",
    questionType: "scenario",
    difficulty: 3,
    stem: "Examiner trainee Kim is learning about file access rules. She encounters three applications: (A) a utility application published at 18 months that is still pending, (B) a pending utility application for which the applicant filed a non-publication request that has not yet been rescinded, and (C) an issued patent. Which files may the public inspect?",
    options: [
      { text: "Only C — issued patents are the only files open to the public" },
      { text: "A and C — published applications and patented files are open; B remains confidential because the non-publication request keeps it unpublished" },
      { text: "All three — once an application is filed, it becomes a public record" },
      { text: "B and C — non-publication requests are public records, and issued patents are public" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 1.14(a), the file of a published application or an application in which a patent has been issued is open to the public. Application A was published at 18 months, so its file is publicly accessible. Application C is an issued patent, so it is also public. Application B has a valid non-publication request and has not been published, so under 37 CFR 1.14(b) and 35 USC 122(a), it remains confidential. The non-publication request itself keeps the application from being published, maintaining its confidential status.",
    citationRef: "37 CFR 1.14(a); 37 CFR 1.14(b); 35 USC 122(a)-(b)",
  },
  // Q5: Scenario — Trade secret redaction in published application (difficulty 4)
  {
    id: "z1-boss-5",
    conceptId: "conf-trade-secret-redaction",
    zoneSlug: "the-vault",
    questionType: "scenario",
    difficulty: 4,
    stem: "BioPharm Corp files a utility application disclosing a novel manufacturing process. The application includes detailed trade secret information about a proprietary catalyst in the specification that is not necessary for enablement but was inadvertently included. The application is approaching the 18-month publication date. BioPharm's attorney wants to prevent the trade secret from being published. What is the most appropriate course of action?",
    options: [
      { text: "File a petition under 37 CFR 1.217 to request redaction of the trade secret material before publication, demonstrating that the redacted portions constitute trade secrets and are not necessary for the disclosure requirements" },
      { text: "Withdraw the application entirely and refile without the trade secret information, relying on the original filing date through a continuation" },
      { text: "Request that the entire application not be published by filing a non-publication request, even though the 18-month deadline is approaching" },
      { text: "Trade secrets cannot be redacted from patent applications; BioPharm must accept that the information will become public" },
    ],
    correctIndex: 0,
    explanation:
      "Under 37 CFR 1.217, an applicant may petition to have trade secret information redacted from a published application. The petition must identify the specific material to be redacted and explain why it constitutes a trade secret. This mechanism allows applicants to protect proprietary information that was inadvertently included while maintaining the application. A non-publication request cannot be filed if the 18-month deadline is imminent and the application was not filed with one originally. Withdrawing and refiling would cause loss of the original filing date for the new matter.",
    citationRef: "37 CFR 1.217",
  },
  // Q6: Scenario — Status information vs. full file access (difficulty 3)
  {
    id: "z1-boss-6",
    conceptId: "conf-status-info",
    zoneSlug: "the-vault",
    questionType: "scenario",
    difficulty: 3,
    stem: "Patent attorney Okafor represents a client in a patent infringement suit. The opposing party has cited a pending, unpublished US application as a potential prior art reference. Okafor knows the application number but cannot access the full file. She contacts the USPTO to obtain information about the application. What information, if any, can the USPTO provide about this unpublished pending application?",
    options: [
      { text: "The USPTO cannot confirm or deny the existence of any unpublished pending application" },
      { text: "The USPTO can provide the full file wrapper because the application was cited in litigation" },
      { text: "Under 37 CFR 1.14(e), the USPTO can provide status information — whether the application is pending, abandoned, or patented — but not the substantive contents of the unpublished file" },
      { text: "The USPTO will provide only the filing date and inventor name, nothing else" },
    ],
    correctIndex: 2,
    explanation:
      "Under 37 CFR 1.14(e), status information about an application — specifically whether it is pending, abandoned, or patented — is available to the public upon request. This is a limited exception to the confidentiality of unpublished applications. The full file contents remain confidential under 35 USC 122(a) and 37 CFR 1.14(b). To obtain access to the full file of an unpublished application, a proper petition under 37 CFR 1.14(i) or other qualifying provision would be necessary.",
    citationRef: "37 CFR 1.14(e); 37 CFR 1.14(b); 35 USC 122(a)",
  },
  // Q7: Scenario — Criminal penalties for unauthorized disclosure (difficulty 4)
  {
    id: "z1-boss-7",
    conceptId: "conf-criminal-penalties",
    zoneSlug: "the-vault",
    questionType: "scenario",
    difficulty: 4,
    stem: "USPTO employee Davis is assigned to examine a pending, unpublished patent application from a major tech company. Davis's friend works for a competing company. Over dinner, Davis describes the key claims and technical details of the unpublished application to his friend, who uses the information to accelerate his company's product development. Which combination of legal consequences most accurately applies to Davis?",
    options: [
      { text: "Davis faces only internal USPTO disciplinary action; there is no statutory criminal penalty for an examiner disclosing application contents" },
      { text: "Davis may face criminal penalties under 18 USC 1905 for unauthorized disclosure of confidential government information, as well as potential termination; additionally, 35 USC 122(a) makes clear that applications are to be kept in confidence" },
      { text: "Davis faces civil liability to the tech company but no criminal charges because the disclosure was oral, not written" },
      { text: "Only the friend faces consequences for misappropriation of trade secrets; Davis is protected by government employee immunity" },
    ],
    correctIndex: 1,
    explanation:
      "35 USC 122(a) requires that patent applications be kept in confidence by the USPTO. Unauthorized disclosure by a USPTO employee violates this confidentiality mandate. Under 18 USC 1905, any government employee who publishes, divulges, or makes known in any manner not authorized by law any information coming to that employee in the course of employment relating to trade secrets, processes, or confidential statistical data is subject to criminal penalties including fines and imprisonment, and shall be removed from office or employment. The disclosure being oral rather than written does not provide a defense.",
    citationRef: "35 USC 122(a); 18 USC 1905",
  },
  // Q8: True/False — Provisional applications and 18-month publication (difficulty 3)
  {
    id: "z1-boss-8",
    conceptId: "conf-provisional-publication",
    zoneSlug: "the-vault",
    questionType: "true_false",
    difficulty: 3,
    stem: "True or False: A provisional patent application that is never converted to a non-provisional application will be published by the USPTO 18 months after its filing date.",
    isTrue: false,
    explanation:
      "Provisional applications are not published by the USPTO. Under 35 USC 122(b)(2)(A), the 18-month publication rule applies to applications filed under 35 USC 111(a) (non-provisional) or entering the national stage under 35 USC 371 (PCT national phase). Provisional applications filed under 35 USC 111(b) are excluded from publication. If a provisional is never converted or claimed as a priority basis for a non-provisional, it simply goes abandoned after 12 months and is never published. The provisional's contents remain confidential under 35 USC 122(a).",
    citationRef: "35 USC 111(b); 35 USC 122(b)(2)(A); 35 USC 122(a)",
  },
  // Q9: True/False — Non-publication request and the 45-day notification rule (difficulty 4)
  {
    id: "z1-boss-9",
    conceptId: "conf-nonpub-abandonment",
    zoneSlug: "the-vault",
    questionType: "true_false",
    difficulty: 4,
    stem: "True or False: If an applicant who made a non-publication request later files a counterpart application in a foreign country that provides for 18-month publication, and fails to notify the USPTO within 45 days of the foreign filing, the US application shall be regarded as abandoned.",
    isTrue: true,
    explanation:
      "This is a correct statement of 35 USC 122(b)(2)(B)(iii). When an applicant submits a non-publication request under 35 USC 122(b)(2)(B)(i), they are certifying that the invention has not been and will not be the subject of an application filed in a country that provides for 18-month publication. If the applicant subsequently files in such a country, they must rescind the non-publication request and notify the USPTO within 45 days of the foreign filing. Failure to provide timely notice results in the application being regarded as abandoned. This is a serious consequence that makes the 45-day notification deadline critical.",
    citationRef: "35 USC 122(b)(2)(B)(iii); 37 CFR 1.213(a)",
  },
  // Q10: True/False — Patented file access (difficulty 3)
  {
    id: "z1-boss-10",
    conceptId: "conf-patented-file-access",
    zoneSlug: "the-vault",
    questionType: "true_false",
    difficulty: 3,
    stem: "True or False: Once a patent has been issued, the entire prosecution history file — including all office actions, amendments, declarations, and the examiner's search notes — becomes available to the public under 37 CFR 1.14(a), regardless of whether the application was previously subject to a non-publication request.",
    isTrue: true,
    explanation:
      "Under 37 CFR 1.14(a), the complete file of a patent (including the application as originally filed, all correspondence, amendments, office actions, and other papers) is open to public inspection. This applies regardless of whether the applicant had previously filed a non-publication request. The non-publication request only delays public access until issuance; once the patent issues, the full file wrapper becomes publicly available. The public policy rationale is that issued patents represent a public grant, and the public is entitled to review the full prosecution history to understand the scope of the patent rights.",
    citationRef: "37 CFR 1.14(a); 35 USC 122(a)",
  },
];
