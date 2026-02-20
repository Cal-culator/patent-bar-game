import { BossQuestion } from "@study-game/engine";

// ============================================================
// Zone 4: The Classified Wing — Boss Battle Questions
// MPEP 115 — National Security Review of Patent Applications
// 10 mixed questions (7 scenario, 3 true/false) at difficulty 3-4
// ============================================================

export const ZONE4_BOSS: BossQuestion[] = [
  // Q1: Scenario — Multi-agency screening for nuclear satellite technology (difficulty 4)
  {
    id: "z4-boss-1",
    conceptId: "nsr-multi-agency-screening",
    zoneSlug: "the-classified-wing",
    questionType: "scenario",
    difficulty: 4,
    stem: "Dr. Okonkwo files a patent application for a nuclear-powered satellite communication relay with advanced cryptographic signal processing. The application touches on atomic energy, space technology, and military cryptography. During the national security screening process, DOE clears the application with no secrecy order recommendation, NASA likewise finds no space technology concern, but the NSA (a DoD component) determines that the cryptographic aspects would be detrimental to national security if disclosed. Which outcome is most likely?",
    options: [
      { text: "No secrecy order is imposed because two out of three agencies cleared the application, and majority rules" },
      { text: "The Commissioner imposes a secrecy order under 35 USC 181 based on NSA's determination alone, because any single agency's finding that disclosure would be detrimental to national security is sufficient" },
      { text: "The application is split into classified and unclassified portions, with only the cryptographic claims subject to a secrecy order" },
      { text: "The Commissioner returns the application to the applicant and asks for a voluntary withdrawal of the cryptographic claims" },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 181, a secrecy order is triggered when the head of any interested government agency determines that disclosure would be detrimental to national security. There is no majority-vote requirement among screening agencies. NSA's determination alone is sufficient for the Commissioner to impose a secrecy order on the entire application. The order applies to the whole application, not just specific claims.",
    citationRef: "35 USC 181; MPEP 115",
  },
  // Q2: Scenario — Uncleared practitioner handling classified application (difficulty 4)
  {
    id: "z4-boss-2",
    conceptId: "nsr-clearance-violation",
    zoneSlug: "the-classified-wing",
    questionType: "scenario",
    difficulty: 4,
    stem: "Attorney Blackwell is a registered patent practitioner who does not hold any security clearance. A new client brings her classified documents marked 'Secret' relating to an advanced weapons targeting system and asks her to file a patent application. Blackwell reviews the documents, prepares the application, and attempts to file it electronically through EFS-Web. What errors has Blackwell committed?",
    options: [
      { text: "Blackwell's only error was attempting electronic filing; as a registered practitioner, she was authorized to review the classified documents" },
      { text: "Blackwell committed multiple errors: she accessed classified material without holding the required security clearance, and she attempted to file a classified application electronically when such applications must be hand-carried to L&R" },
      { text: "Blackwell committed no errors because the client authorized her access to the classified documents" },
      { text: "Blackwell's only error was not obtaining the client's signature on a secrecy agreement before reviewing the documents" },
    ],
    correctIndex: 1,
    explanation:
      "Blackwell made two critical errors. First, she accessed classified material without holding the required security clearance — practitioners must hold clearance at or above the classification level of the material (here, 'Secret'). Client authorization does not substitute for a government security clearance. Second, classified patent applications must be hand-carried to the Licensing and Review (L&R) division; electronic filing through EFS-Web is not permitted for classified applications.",
    citationRef: "MPEP 115",
  },
  // Q3: Scenario — L&R code indicating screening still pending (difficulty 3)
  {
    id: "z4-boss-3",
    conceptId: "nsr-lr-screening-status",
    zoneSlug: "the-classified-wing",
    questionType: "scenario",
    difficulty: 3,
    stem: "Attorney Nakamura checks the status of her client's patent application filed 4 months ago and discovers that an L&R code has been assigned indicating that national security screening is still in progress. Her client wants to know why no examiner has been assigned yet and whether she can petition to expedite examination. What should Attorney Nakamura advise?",
    options: [
      { text: "She should file a petition to make special under 37 CFR 1.102 to bypass the screening delay" },
      { text: "The L&R code indicates screening is still in progress; the application cannot proceed to substantive examination until screening is complete, and there is no mechanism to bypass the national security screening process" },
      { text: "The L&R code is merely informational; she should contact the examining art unit directly to request examiner assignment" },
      { text: "The 4-month delay means the application has been rejected during screening; she should refile" },
    ],
    correctIndex: 1,
    explanation:
      "L&R codes track the national security screening status of applications. When the code indicates screening is still in progress, the application cannot be assigned for substantive examination. National security screening must be completed before examination begins, and there is no petition or procedural mechanism to bypass this process. The screening timeline varies depending on the subject matter and the number of agencies involved.",
    citationRef: "MPEP 115",
  },
  // Q4: Scenario — DOE screening for atomic energy application (difficulty 3)
  {
    id: "z4-boss-4",
    conceptId: "nsr-doe-atomic-screening",
    zoneSlug: "the-classified-wing",
    questionType: "scenario",
    difficulty: 3,
    stem: "Inventor Park files a patent application for a novel method of processing spent nuclear fuel rods to extract reusable fissile material. During national security screening, which agency is most likely to have primary screening responsibility, and under what authority?",
    options: [
      { text: "The Department of Defense under 35 USC 181, because nuclear materials have military applications" },
      { text: "The Nuclear Regulatory Commission under 10 CFR Part 50, because it regulates nuclear facilities" },
      { text: "The Department of Energy under 42 USC 2182, because it has screening authority over atomic energy applications" },
      { text: "The Environmental Protection Agency under the Atomic Energy Act, because spent fuel processing involves environmental concerns" },
    ],
    correctIndex: 2,
    explanation:
      "The Department of Energy (DOE) has specific statutory authority under 42 USC 2182 to screen patent applications related to atomic energy, which includes nuclear fuel processing. While DoD may also have an interest in nuclear technology from a military perspective, DOE is the primary agency responsible for atomic energy screening. The NRC regulates nuclear facilities but does not have a specific role in patent application screening under MPEP 115.",
    citationRef: "42 USC 2182; MPEP 115",
  },
  // Q5: Scenario — NASA screening for space propulsion (difficulty 3)
  {
    id: "z4-boss-5",
    conceptId: "nsr-nasa-space-screening",
    zoneSlug: "the-classified-wing",
    questionType: "scenario",
    difficulty: 3,
    stem: "An inventor files a patent application for a novel ion thruster propulsion system designed for interplanetary spacecraft. During national security screening, NASA reviews the application. Under what statutory authority does NASA screen patent applications, and what is NASA evaluating?",
    options: [
      { text: "NASA screens under 35 USC 181 to determine whether the inventor is a NASA employee" },
      { text: "NASA screens under 51 USC 20135 to evaluate whether the space technology has national significance and whether the government may have a property interest" },
      { text: "NASA screens under 42 USC 2182 because propulsion systems involve energy technology" },
      { text: "NASA has no independent screening authority and only participates when invited by the Department of Defense" },
    ],
    correctIndex: 1,
    explanation:
      "NASA screens patent applications under 51 USC 20135, which gives NASA authority over inventions relating to space technology. NASA evaluates whether the technology has national significance for aeronautics and space programs and whether the government may have a property interest in the invention. This is distinct from DOE's authority over atomic energy under 42 USC 2182 and from DoD's general military significance screening.",
    citationRef: "51 USC 20135; MPEP 115",
  },
  // Q6: True/False — Hand-carry requirement (difficulty 3)
  {
    id: "z4-boss-6",
    conceptId: "nsr-filing-method",
    zoneSlug: "the-classified-wing",
    questionType: "true_false",
    difficulty: 3,
    stem: "True or False: Classified patent applications may be filed electronically through EFS-Web as long as the applicant uses the USPTO's secure filing option and marks the submission as 'CLASSIFIED.'",
    isTrue: false,
    explanation:
      "Classified patent applications may not be filed electronically through any system, including EFS-Web. They must be hand-carried to the Licensing and Review (L&R) division of the USPTO. Electronic filing systems are not approved for the transmission of classified material, regardless of any 'secure' or 'classified' designation the applicant might attempt to apply.",
    citationRef: "MPEP 115",
  },
  // Q7: Scenario — Screening before examination (difficulty 4)
  {
    id: "z4-boss-7",
    conceptId: "nsr-screening-before-exam",
    zoneSlug: "the-classified-wing",
    questionType: "scenario",
    difficulty: 4,
    stem: "Attorney Chen files a patent application for an advanced radar system on January 15. On August 1 — over 6 months later — the application still has not been assigned to an examiner. Chen contacts the USPTO and learns that the application is still undergoing national security screening by multiple defense agencies. Chen's client insists on filing a mandamus action in federal court to compel the USPTO to begin examination immediately. What should Chen advise?",
    options: [
      { text: "A mandamus action is appropriate because the USPTO has a legal duty to begin examination within 6 months of filing" },
      { text: "National security screening must be completed before examination can begin; there is no statutory deadline for completing screening, and the application cannot proceed until all relevant agencies have completed their review — a mandamus action is unlikely to succeed" },
      { text: "Chen should withdraw the application and refile without the radar system details to avoid the screening delay" },
      { text: "Chen should petition the Commissioner under 37 CFR 1.181 to overrule the defense agencies and begin examination" },
    ],
    correctIndex: 1,
    explanation:
      "National security screening under 35 USC 181 and MPEP 115 must be completed before an application can proceed to substantive examination. There is no statutory deadline for the completion of screening, and the timeline depends on the subject matter complexity and number of agencies involved. The Commissioner cannot overrule defense agency screening, and a mandamus action is unlikely to succeed because there is no clear legal duty being violated by the screening delay.",
    citationRef: "35 USC 181; MPEP 115",
  },
  // Q8: True/False — Security clearance and registration (difficulty 3)
  {
    id: "z4-boss-8",
    conceptId: "nsr-clearance-registration",
    zoneSlug: "the-classified-wing",
    questionType: "true_false",
    difficulty: 3,
    stem: "True or False: Registration as a patent agent or patent attorney before the USPTO automatically grants the practitioner a security clearance sufficient to handle classified patent applications.",
    isTrue: false,
    explanation:
      "USPTO registration as a patent agent or attorney does not confer any security clearance. Security clearance is an entirely separate process administered by the federal government. Practitioners who wish to handle classified patent applications must independently obtain the appropriate level of security clearance through the standard government clearance process. The two qualifications — USPTO registration and security clearance — are independent requirements.",
    citationRef: "MPEP 115",
  },
  // Q9: Scenario — Government property interest screening (difficulty 4)
  {
    id: "z4-boss-9",
    conceptId: "nsr-govt-property-interest",
    zoneSlug: "the-classified-wing",
    questionType: "scenario",
    difficulty: 4,
    stem: "Inventor Martinez, a civilian researcher, develops a novel thermal imaging system while working under a government contract with the Department of Defense. She files a patent application without notifying her contracting officer. During national security screening, one of the three screening functions identifies that the government may have a property interest in the invention due to the contract terms. What is the significance of this finding?",
    options: [
      { text: "The finding has no effect on the patent application because government property interests are only relevant to procurement law, not patent law" },
      { text: "The government property interest assessment is one of the three screening functions under MPEP 115; the finding means the government may have rights to the invention under the contract, which could affect ownership and licensing of any patent that issues" },
      { text: "The finding automatically disqualifies Martinez from obtaining a patent, and the application is immediately abandoned" },
      { text: "The finding means the invention must be assigned to the government before the patent can issue, with no compensation to Martinez" },
    ],
    correctIndex: 1,
    explanation:
      "Government property interest assessment is one of the three national security screening functions under MPEP 115, alongside secrecy order determination and export control review. When screening identifies a potential government property interest — often arising from government contracts or funding agreements — it does not automatically disqualify the inventor from obtaining a patent. However, it may affect ownership rights, licensing obligations, and the government's right to practice the invention. The specific consequences depend on the terms of the underlying contract.",
    citationRef: "MPEP 115",
  },
  // Q10: True/False — L&R codes track screening status (difficulty 4)
  {
    id: "z4-boss-10",
    conceptId: "nsr-lr-code-function",
    zoneSlug: "the-classified-wing",
    questionType: "true_false",
    difficulty: 4,
    stem: "True or False: L&R codes assigned by the Licensing and Review division serve solely to identify the security classification level (Confidential, Secret, Top Secret) of a patent application and have no role in tracking the progress of national security screening.",
    isTrue: false,
    explanation:
      "L&R codes are not limited to identifying classification levels. Their primary function is to track the national security screening status of patent applications — indicating whether screening is pending, in progress, or complete. The codes serve as procedural tracking markers that determine when an application has cleared the screening process and may proceed to substantive examination. While classified applications do have classification levels, L&R codes encompass the broader screening status, not just the classification designation.",
    citationRef: "MPEP 115",
  },
];
