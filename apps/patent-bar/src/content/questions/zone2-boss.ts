import { BossQuestion } from "@study-game/engine";

// ============================================================
// Zone 2: The Reading Room — Boss Battle Questions
// 10 mixed questions (7 scenario, 3 true/false) at difficulty 3-4
// ============================================================

export const ZONE2_BOSS: BossQuestion[] = [
  // Q1: Scenario — Access to published vs. unpublished (difficulty 3)
  {
    id: "z2-boss-1",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    questionType: "scenario",
    difficulty: 3,
    stem: "Company Alpha filed a patent application on January 10. The application was published on July 15 (18 months from priority date). On August 1, a competitor searches Patent Center and finds the published application. The competitor wants to review the examiner's first office action, which was mailed on June 1 (before publication). Is the office action accessible?",
    options: [
      { text: "No, because the office action was mailed before the publication date and remains confidential" },
      { text: "Yes, because once the application is published under 37 CFR 1.11(a), the entire file wrapper becomes open to public inspection, including documents predating publication" },
      { text: "Only if the competitor files a petition under 37 CFR 1.14(i)" },
      { text: "Only if the competitor can demonstrate a commercial interest in the technology" },
    ],
    correctIndex: 1,
    explanation:
      "Once an application is published under 37 CFR 1.11(a), the entire file wrapper becomes open to public inspection, including all documents that predate the publication, such as earlier-mailed office actions.",
    citationRef: "37 CFR 1.11(a)",
  },
  // Q2: Scenario — Attorney access and authorization (difficulty 3)
  {
    id: "z2-boss-2",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    questionType: "scenario",
    difficulty: 3,
    stem: "Attorney Rodriguez is a registered patent attorney but is NOT the attorney of record for Application X, which is unpublished. She has been retained by the applicant's company to provide a second opinion on the prosecution strategy. How can she access the file?",
    options: [
      { text: "She can access it freely because she is a registered patent attorney" },
      { text: "She must obtain written authorization from the applicant or the attorney of record under 37 CFR 1.14(c)" },
      { text: "She must file a petition under 37 CFR 1.14(i) and wait for approval" },
      { text: "She cannot access the file under any circumstances until she becomes the attorney of record" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 1.14(c), a registered attorney who is not the attorney of record must obtain written authorization from the applicant or the attorney of record to access an unpublished pending application. Simply being registered is not sufficient.",
    citationRef: "37 CFR 1.14(c)",
  },
  // Q3: Scenario — Provisional access scenario (difficulty 3)
  {
    id: "z2-boss-3",
    conceptId: "insp-provisional",
    zoneSlug: "the-reading-room",
    questionType: "scenario",
    difficulty: 3,
    stem: "Inventor Park filed a provisional application on March 1, 2024. She filed a non-provisional application on February 15, 2025, claiming priority to the provisional. The non-provisional was published on September 1, 2025. A competitor discovers the publication mentions the provisional. Can the competitor access the provisional?",
    options: [
      { text: "No, because provisional applications are never accessible to the public" },
      { text: "Yes, because the provisional is relied upon for priority in a published application and may be accessed under 37 CFR 1.14(a)" },
      { text: "Only if the competitor files a FOIA request" },
      { text: "Only after the non-provisional application issues as a patent" },
    ],
    correctIndex: 1,
    explanation:
      "When a provisional application is relied upon as a priority basis in a subsequently published non-provisional application, the provisional may become accessible to the public under 37 CFR 1.14(a). The publication of the non-provisional is what triggers the availability of the provisional.",
    citationRef: "37 CFR 1.14(a)",
  },
  // Q4: True/False — Status information scope (difficulty 3)
  {
    id: "z2-boss-4",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    questionType: "true_false",
    difficulty: 3,
    stem: "True or False: Under 37 CFR 1.14(e), the public can obtain status information about a patent application, including whether it is pending, abandoned, or patented, as well as the names of the inventors and the filing date.",
    isTrue: false,
    explanation:
      "Under 37 CFR 1.14(e), the public can obtain basic status information — whether the application is pending, abandoned, or patented. However, for unpublished applications, additional details such as inventor names and filing dates are not provided to the general public under this provision.",
    citationRef: "37 CFR 1.14(e)",
  },
  // Q5: True/False — FOIA and patent files (difficulty 3)
  {
    id: "z2-boss-5",
    conceptId: "insp-foia",
    zoneSlug: "the-reading-room",
    questionType: "true_false",
    difficulty: 3,
    stem: "True or False: The Freedom of Information Act (5 USC 552) overrides 35 USC 122 and can be used to compel the USPTO to disclose unpublished patent application files.",
    isTrue: false,
    explanation:
      "FOIA does not override 35 USC 122. The confidentiality requirement of 35 USC 122 provides a specific statutory exemption for unpublished patent application files. FOIA cannot be used to compel disclosure of files that are protected by 35 USC 122.",
    citationRef: "35 USC 122 / 5 USC 552",
  },
  // Q6: Scenario — Incorporation by reference and public access (difficulty 4)
  {
    id: "z2-boss-6",
    conceptId: "insp-incorporation",
    zoneSlug: "the-reading-room",
    questionType: "scenario",
    difficulty: 4,
    stem: "Patent Y incorporates by reference a technical standard published by the IEEE. A third party reviewing Patent Y on Patent Center cannot find the IEEE standard in the file wrapper. The third party argues the patent is invalid because the public cannot access the incorporated material. Is this argument likely to succeed?",
    options: [
      { text: "Yes, because the public must be able to access all material that forms part of the patent disclosure" },
      { text: "No, because incorporation by reference of publicly available documents (like published standards) is proper under 37 CFR 1.57, and the document is accessible through the IEEE, not the USPTO" },
      { text: "Yes, because all incorporated-by-reference material must be maintained in the USPTO's IFW system" },
      { text: "No, because incorporation by reference has no legal effect and the standard is irrelevant to the patent scope" },
    ],
    correctIndex: 1,
    explanation:
      "Incorporation by reference of publicly available documents is proper under 37 CFR 1.57. The USPTO is not required to maintain copies of all incorporated-by-reference documents in the IFW. As long as the referenced document is publicly accessible (e.g., through the IEEE), the incorporation is valid. The third party can obtain the IEEE standard from the IEEE itself.",
    citationRef: "37 CFR 1.57 / MPEP 103",
  },
  // Q7: Scenario — Multi-concept integration (difficulty 4)
  {
    id: "z2-boss-7",
    conceptId: "insp-petition-access",
    zoneSlug: "the-reading-room",
    questionType: "scenario",
    difficulty: 4,
    stem: "During an inter partes review (IPR) proceeding before the PTAB, the petitioner discovers that an unpublished, abandoned application filed by a third party may contain essential prior art. The petitioner wants to use this abandoned application as prior art in the IPR. What steps must the petitioner take?",
    options: [
      { text: "The petitioner can cite the abandoned application without accessing it, relying on its serial number alone" },
      { text: "The petitioner must file a petition under 37 CFR 1.14(i) to access the unpublished abandoned application, demonstrating it is relied upon as a reference, and then submit the relevant portions as evidence in the IPR" },
      { text: "The PTAB will automatically obtain and provide the unpublished abandoned application to all parties" },
      { text: "The petitioner must subpoena the third-party applicant to produce the application in federal court" },
    ],
    correctIndex: 1,
    explanation:
      "To use an unpublished abandoned application as prior art, the petitioner must first obtain access through a petition under 37 CFR 1.14(i), demonstrating the application is relied upon as a reference. Once access is granted, the relevant portions can be submitted as evidence in the IPR. The PTAB does not automatically provide unpublished files.",
    citationRef: "37 CFR 1.14(i) / MPEP 104",
  },
  // Q8: Scenario — IFW and complex access scenario (difficulty 4)
  {
    id: "z2-boss-8",
    conceptId: "insp-ifw",
    zoneSlug: "the-reading-room",
    questionType: "scenario",
    difficulty: 4,
    stem: "Attorney Kim represents an applicant whose published application references a co-pending unpublished application by the same applicant. A third party reviewing the published application on Patent Center discovers the cross-reference and wants to access the co-pending unpublished application. What is the third party's access?",
    options: [
      { text: "Full access, because the cross-reference in a published application makes the referenced application public" },
      { text: "No access — the co-pending application remains confidential under 35 USC 122 despite being referenced in a published application" },
      { text: "Access only to status information (pending/abandoned/patented) under 37 CFR 1.14(e), unless the co-pending application has itself been published or a petition is granted" },
      { text: "Full access, but only through a FOIA request citing the cross-reference" },
    ],
    correctIndex: 2,
    explanation:
      "A mere cross-reference in a published application does not make the referenced co-pending application public. The co-pending application remains confidential under 35 USC 122 if it has not been published. The third party can obtain status information under 37 CFR 1.14(e) and may petition under 37 CFR 1.14(i) if the co-pending application becomes abandoned, but full access requires independent publication or a granted petition.",
    citationRef: "35 USC 122 / 37 CFR 1.14(e)",
  },
  // Q9: True/False — IFW completeness (difficulty 4)
  {
    id: "z2-boss-9",
    conceptId: "insp-ifw",
    zoneSlug: "the-reading-room",
    questionType: "true_false",
    difficulty: 4,
    stem: "True or False: The Image File Wrapper (IFW) system contains every document that was ever part of the patent application file, including documents that may have been expunged or removed by order of the Director.",
    isTrue: false,
    explanation:
      "While the IFW system stores all standard file wrapper documents, documents that have been expunged or removed by order of the Director (such as certain proprietary materials or documents removed through petition) may not remain in the accessible IFW. The IFW reflects the current state of the file as maintained by the Office.",
    citationRef: "MPEP 103",
  },
  // Q10: Scenario — Ultimate integrative question (difficulty 4)
  {
    id: "z2-boss-10",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    questionType: "scenario",
    difficulty: 4,
    stem: "BioPharm Inc. filed Application A on January 1, 2024, with a non-publication request under 35 USC 122(b)(2)(B)(i). On March 1, 2025, BioPharm filed a continuation Application B claiming priority to Application A but did NOT include a non-publication request for Application B. On September 1, 2025, Application B was published. What is the public access status of Application A?",
    options: [
      { text: "Application A remains confidential because the non-publication request protects it indefinitely" },
      { text: "Application A becomes publicly accessible because the filing of Application B in a foreign country or without a non-publication request may rescind the non-publication request for Application A under 35 USC 122(b)(2)(B)(ii)" },
      { text: "Application A is accessible only through a petition under 37 CFR 1.14(i)" },
      { text: "Application A is automatically published 18 months after Application B is published" },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 122(b)(2)(B)(ii), an applicant who has made a non-publication request must notify the USPTO if the invention is later the subject of an application filed without such a request, which effectively rescinds the non-publication request. Since Application B (claiming priority to A) was filed without a non-publication request, the non-publication request for Application A may need to be rescinded, potentially making Application A subject to publication.",
    citationRef: "35 USC 122(b)(2)(B) / MPEP 103",
  },
];
