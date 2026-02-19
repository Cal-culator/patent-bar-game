import { BossQuestion } from "@/types";

// ============================================================
// Zone 5: The Sealed Chamber — Boss Battle Questions
// MPEP 120, 121, 130 — Secrecy Orders (35 USC 181-188)
// 10 mixed questions (7 scenario, 3 true/false) at difficulty 3-4
// ============================================================

export const ZONE5_BOSS: BossQuestion[] = [
  // Q1: Scenario — Secrecy order imposed after foreign filing license granted (difficulty 4)
  {
    id: "z5-boss-1",
    conceptId: "sec-revocation-of-license",
    zoneSlug: "the-sealed-chamber",
    questionType: "scenario",
    difficulty: 4,
    stem: "Dr. Harmon files a US non-provisional application for a radar-absorbing materials technology on March 1, receiving a foreign filing license on the filing receipt. On April 10, she files in Germany and Japan under that license. On May 15, the Commissioner imposes a secrecy order on the US application under 35 USC 181. On June 1, Harmon wants to file in Canada. Which statement best describes her legal situation?",
    options: [
      { text: "The secrecy order retroactively invalidates both the German and Japanese filings, and she cannot file in Canada" },
      { text: "The German and Japanese filings remain valid because they were made under a license before the secrecy order, but the secrecy order immediately revokes her foreign filing license, so she cannot file in Canada" },
      { text: "She may file in Canada because the secrecy order only applies to future applications, not to licenses already granted" },
      { text: "She may file in Canada only if the secrecy order is Type I and Canada is on the approved list" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 5.2, a secrecy order immediately revokes any foreign filing license previously granted. However, filings already made under a valid license before the secrecy order was imposed are not retroactively invalidated. The German and Japanese filings (April 10) were properly authorized. But after May 15, the license is revoked and no new foreign filings may be made regardless of Type classification — the Type I exception for approved countries only applies to applications that receive a modified secrecy order permitting such filings, not to previously-revoked general licenses.",
    citationRef: "37 CFR 5.2; 35 USC 181",
  },
  // Q2: Scenario — Compensation claim procedure (difficulty 4)
  {
    id: "z5-boss-2",
    conceptId: "sec-compensation-claims",
    zoneSlug: "the-sealed-chamber",
    questionType: "scenario",
    difficulty: 4,
    stem: "Inventor Nakamura's application has been under a secrecy order for 8 years. The Department of Defense has been using his patented encryption method extensively. Nakamura wants compensation for the government's use. He applies to the head of the department for compensation but receives a denial letter on January 15, 2024. What are his options and deadlines?",
    options: [
      { text: "He may appeal to the Board of Patent Appeals and Interferences within 60 days" },
      { text: "He may sue the United States in the Court of Federal Claims, but must file within 6 years from the date of the department head's denial" },
      { text: "He has no remedy because the secrecy order means he forfeited all rights to compensation" },
      { text: "He may sue in any federal district court within 2 years of the denial" },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 183, an applicant whose invention is used by the government during a secrecy order period may apply for compensation to the head of the department that imposed the order. If the claim is denied or the applicant is dissatisfied with the award, the applicant may sue the United States in the Court of Federal Claims. The suit must be filed within 6 years after the denial. There is no appeal to the BPAI, and federal district courts lack jurisdiction for these claims.",
    citationRef: "35 USC 183",
  },
  // Q3: Scenario — Type I filing in non-approved country (difficulty 3)
  {
    id: "z5-boss-3",
    conceptId: "sec-type-i-restrictions",
    zoneSlug: "the-sealed-chamber",
    questionType: "scenario",
    difficulty: 3,
    stem: "Engineer Kowalski's application is subject to a Type I secrecy order (per DoD Directive 5230.25). His company wants to file counterpart applications in the UK, Germany, and Brazil. His patent attorney advises him on which filings are permissible. Which advice is correct?",
    options: [
      { text: "All three filings are permitted under a Type I order because it allows worldwide filing" },
      { text: "Only the UK filing is permitted; Germany and Brazil are not on the approved list" },
      { text: "The UK and Germany filings are permitted because they are on the list of approved allied countries, but Brazil is not on the approved list and filing there is prohibited" },
      { text: "No foreign filings are permitted under any secrecy order; Type I only allows continued US prosecution" },
    ],
    correctIndex: 2,
    explanation:
      "A Type I secrecy order (under DoD Directive 5230.25) permits filing in a specific list of 18 allied countries that includes Australia, Canada, France, Germany, Italy, Japan, Netherlands, Norway, Sweden, the UK, and others. Brazil is not among the approved countries. Therefore, filings in the UK and Germany are permissible, but filing in Brazil would violate the secrecy order.",
    citationRef: "35 USC 181; DoD Directive 5230.25",
  },
  // Q4: Scenario — Related application subject matter extension (difficulty 3)
  {
    id: "z5-boss-4",
    conceptId: "sec-related-applications",
    zoneSlug: "the-sealed-chamber",
    questionType: "scenario",
    difficulty: 3,
    stem: "Dr. Vasquez has Application A under a secrecy order covering a novel propulsion system. She later files Application B, a continuation-in-part that includes all of Application A's disclosure plus new improvements. She also files Application C, which covers an unrelated battery chemistry with no overlapping disclosure. Which applications are subject to the secrecy order?",
    options: [
      { text: "Only Application A, because the secrecy order was imposed specifically on that application" },
      { text: "Applications A and B, because under 37 CFR 5.3 the secrecy order extends to any application containing substantially the same subject matter; Application C is not covered" },
      { text: "All three applications, because any application by the same inventor is covered once a secrecy order is in effect" },
      { text: "Applications A and C, because the battery chemistry could be related to propulsion" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 5.3, a secrecy order extends to any application that contains subject matter substantially the same as the application under the order. Application B, as a CIP containing all of Application A's disclosure, clearly contains substantially the same subject matter and is covered. Application C, covering unrelated battery chemistry with no overlapping disclosure, would not be covered by the order.",
    citationRef: "37 CFR 5.3",
  },
  // Q5: Scenario — Violation consequences: abandonment and forfeiture (difficulty 4)
  {
    id: "z5-boss-5",
    conceptId: "sec-violation-consequences",
    zoneSlug: "the-sealed-chamber",
    questionType: "scenario",
    difficulty: 4,
    stem: "Inventor Reeves has an application under a Type II secrecy order (no foreign filing permitted). Without authorization, he discloses the invention details to a foreign colleague who files a patent application in South Korea. The USPTO discovers the violation. Reeves argues that since he did not personally file abroad, only his colleague did, he should not face consequences. What is the most accurate assessment?",
    options: [
      { text: "Reeves is correct — only the person who actually files abroad faces consequences" },
      { text: "Under 35 USC 182, the invention is deemed abandoned and Reeves forfeits any claim for compensation against the US government; additionally, criminal penalties under 35 USC 186 may apply for the unauthorized disclosure" },
      { text: "The only consequence is that the South Korean application is invalid; the US application continues normally" },
      { text: "Reeves loses his US application but can refile after the secrecy order expires" },
    ],
    correctIndex: 1,
    explanation:
      "35 USC 182 provides that anyone who violates a secrecy order (which includes unauthorized disclosure, not just filing) causes the invention to be deemed abandoned and forfeits all claims against the US government. A Type II order prohibits all foreign filing, and a Type III prohibits any disclosure at all. The unauthorized disclosure to the foreign colleague who then filed abroad is a violation by Reeves. Under 35 USC 186, criminal penalties of up to $10,000 fine and 2 years imprisonment may apply. The argument that someone else did the actual filing is unavailing — Reeves made the unauthorized disclosure.",
    citationRef: "35 USC 182; 35 USC 186",
  },
  // Q6: True/False — Examination continues under secrecy order (difficulty 3)
  {
    id: "z5-boss-6",
    conceptId: "sec-examination-procedures",
    zoneSlug: "the-sealed-chamber",
    questionType: "true_false",
    difficulty: 3,
    stem: "True or False: When a secrecy order is imposed on an application, examination of the application is suspended until the secrecy order is rescinded.",
    isTrue: false,
    explanation:
      "Under MPEP 130, examination of an application subject to a secrecy order continues in the normal course. However, certain actions are restricted: the application will not be published under 35 USC 122(b), interference proceedings will not be instituted, and appeal decisions will not be published. But the substantive examination — including office actions, responses, and allowance — proceeds as usual.",
    citationRef: "MPEP 130",
  },
  // Q7: True/False — Duration and renewal of secrecy orders (difficulty 4)
  {
    id: "z5-boss-7",
    conceptId: "sec-order-duration",
    zoneSlug: "the-sealed-chamber",
    questionType: "true_false",
    difficulty: 4,
    stem: "True or False: A secrecy order under 35 USC 181 expires after one year and may be renewed, but the total cumulative duration of all renewals cannot exceed the life of the patent application.",
    isTrue: false,
    explanation:
      "While it is true that a secrecy order lasts one year and is renewable, there is no statutory cap limiting the total cumulative duration of renewals. Under 35 USC 181, secrecy orders can be renewed indefinitely — they can persist for the entire life of the application and even beyond. Some secrecy orders have remained in effect for decades. The statement is false because there is no limitation tied to the application's life; indeed, the order can persist as long as the head of the interested Government agency determines that national security requires it.",
    citationRef: "35 USC 181",
  },
  // Q8: Scenario — Security-marked documents and Licensing & Review (difficulty 3)
  {
    id: "z5-boss-8",
    conceptId: "sec-document-handling",
    zoneSlug: "the-sealed-chamber",
    questionType: "scenario",
    difficulty: 3,
    stem: "Attorney Park receives a new client whose invention involves classified satellite communication protocols. The client wants to file a patent application and includes documents marked 'CONFIDENTIAL' and 'SECRET' as part of the technical disclosure. What is the correct USPTO procedure for handling this application?",
    options: [
      { text: "The application is processed normally through the regular mail room and assigned to an art unit examiner" },
      { text: "Security-marked documents are routed to the Licensing and Review branch of the USPTO, which handles applications containing classified material under MPEP 121" },
      { text: "The USPTO will refuse to accept any application containing classified documents and return it to the applicant" },
      { text: "The application is forwarded directly to the Department of Defense, and the USPTO plays no role in examination" },
    ],
    correctIndex: 1,
    explanation:
      "Under MPEP 121, applications containing security-marked documents (such as those marked CONFIDENTIAL, SECRET, or TOP SECRET) are directed to the Licensing and Review branch of the USPTO. This branch is responsible for handling applications involving classified or national security-sensitive subject matter, ensuring proper security protocols are followed while still allowing the application to be examined.",
    citationRef: "MPEP 121",
  },
  // Q9: Scenario — Rescission of secrecy order and restoration of rights (difficulty 4)
  {
    id: "z5-boss-9",
    conceptId: "sec-rescission-effects",
    zoneSlug: "the-sealed-chamber",
    questionType: "scenario",
    difficulty: 4,
    stem: "Dr. Tanaka filed a US application on January 5, 2018. A secrecy order was imposed on March 1, 2018. The application was examined and allowed during the secrecy period, but no patent could issue while the order was in effect. On September 15, 2025, the secrecy order is rescinded. Tanaka's patent issues on December 1, 2025. The patent term was adjusted to account for the secrecy period. A competitor began manufacturing the invention in 2022. What compensation options does Tanaka have?",
    options: [
      { text: "Tanaka can only collect damages from December 1, 2025 forward because no patent existed before that date" },
      { text: "Tanaka may apply to the head of the department that imposed the secrecy order for compensation for the government's use during the secrecy period under 35 USC 183, and may also pursue infringement damages against the private competitor from the patent issue date forward" },
      { text: "Tanaka has no compensation rights because he voluntarily continued prosecution under the secrecy order" },
      { text: "Tanaka can sue the competitor for damages going back to 2022 under provisional rights because the application was allowed" },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 183, Tanaka may apply for compensation to the head of the department that imposed the secrecy order for the government's use of the invention during the secrecy period. If denied, he may sue in the Court of Federal Claims within 6 years. For the private competitor, since the application was never published (MPEP 130 — no publication under secrecy orders), provisional rights under 35 USC 154(d) would not apply. However, once the patent issues, Tanaka can enforce it against infringers from that date forward. The two compensation paths — government use during secrecy and private infringement after patent issuance — are distinct.",
    citationRef: "35 USC 183; MPEP 130; 35 USC 154(d)",
  },
  // Q10: True/False — Criminal penalties specifics (difficulty 3)
  {
    id: "z5-boss-10",
    conceptId: "sec-criminal-penalties",
    zoneSlug: "the-sealed-chamber",
    questionType: "true_false",
    difficulty: 3,
    stem: "True or False: Under 35 USC 186, a person who willfully publishes or discloses an invention in violation of a secrecy order may be fined up to $10,000 or imprisoned for not more than 2 years, or both.",
    isTrue: true,
    explanation:
      "This is a correct statement of the criminal penalties under 35 USC 186. The statute provides that whoever, in violation of the provisions of 35 USC 181 or 182, publishes or discloses the invention or any material information with respect thereto, or whoever willfully refuses to comply with any order under these sections, shall upon conviction be fined not more than $10,000 or imprisoned for not more than 2 years, or both.",
    citationRef: "35 USC 186",
  },
];
