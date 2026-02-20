import { ReferenceSection } from "@study-game/engine";

export const MPEP_SECTION_140: ReferenceSection[] = [
  {
    id: "mpep-140-00",
    number: "140",
    title: "Foreign Filing Licenses",
    content:
      "This section covers the requirements for obtaining a foreign filing license from the United States Patent and Trademark Office (USPTO) before filing a patent application in a foreign country. Under 35 U.S.C. 184, any person who has made or is involved in an invention made in the United States must obtain a license from the Commissioner for Patents before filing a patent application in a foreign country. The purpose of these requirements is to protect national security by preventing the disclosure of inventions that may have defense or strategic significance. Failure to comply with these requirements can result in severe consequences, including patent invalidity and criminal penalties.",
  },
  {
    id: "mpep-140-01",
    number: "140.01",
    title: "The Basic Rule: 35 USC 184 and the 6-Month Bar",
    content:
      "35 U.S.C. 184 establishes the fundamental requirement that an applicant shall not file a patent application (or cause one to be filed) in a foreign country before 6 months after filing in the United States, unless authorized by a license obtained from the Commissioner for Patents. This 6-month period is measured from the date of filing the U.S. application. During this 6-month waiting period, the USPTO screens the application for subject matter that may be relevant to national security.\n\nImportantly, 37 C.F.R. 5.12 provides that the filing receipt issued by the USPTO serves as an automatic foreign filing license, unless the receipt contains a notation that a license has not been granted. This means that in most cases, an applicant receives a foreign filing license automatically upon filing the U.S. application, without the need for a separate petition. The automatic license granted under 37 C.F.R. 5.12 permits the applicant to file abroad after the 6-month period expires.\n\nIf the filing receipt indicates that no license has been granted, the applicant must wait for the license to be explicitly granted or petition for one under 37 C.F.R. 5.12(b). The 6-month foreign filing bar under 35 U.S.C. 184 begins on the date the U.S. application is filed.",
  },
  {
    id: "mpep-140-02",
    number: "140.02",
    title: "License Scope: Broad vs. Narrow Licenses",
    content:
      "Foreign filing licenses can be either broad or narrow in scope, as defined in 37 C.F.R. 5.15.\n\nA broad license (37 C.F.R. 5.15(a)) permits the filing of patent applications in any foreign country on the subject matter of the U.S. application. This is the default type of license granted with the filing receipt under 37 C.F.R. 5.12. The broad license covers filing in any country and is not limited to specific nations.\n\nA narrow license (37 C.F.R. 5.15(b)) is limited in scope and may restrict filing to specific countries or specific subject matter. Narrow licenses may be granted when the subject matter involves sensitive technology or when a secrecy order has been modified. Applicants who receive a narrow license should carefully review its terms to ensure compliance.\n\nThe scope of the license determines what the applicant is authorized to file abroad. Filing beyond the scope of a granted license is treated the same as filing without a license and carries the same penalties under 35 U.S.C. 185.",
  },
  {
    id: "mpep-140-03",
    number: "140.03",
    title: "Secrecy Orders: 35 USC 181",
    content:
      "Under 35 U.S.C. 181, when an application is found to contain subject matter that, if disclosed, might be detrimental to national security, the Commissioner for Patents shall order that the invention be kept secret. A secrecy order overrides the standard 6-month foreign filing license timeline.\n\nWhen a secrecy order is in effect, the applicant is prohibited from filing in any foreign country, regardless of whether the 6-month period has elapsed. The secrecy order remains in effect until it is rescinded by the agency that requested it (typically a defense agency) or until it expires. Secrecy orders are renewed annually and may remain in effect for the life of the application.\n\nUnder 35 U.S.C. 181, the government may also impose secrecy orders on applications filed by government employees or contractors if the invention relates to national defense. Violation of a secrecy order can result in abandonment of the application under 35 U.S.C. 182 and criminal penalties under 35 U.S.C. 186.\n\nApplicants who receive a secrecy order should not disclose the invention in any manner, including publication, presentation, or foreign filing, until the order is lifted.",
  },
  {
    id: "mpep-140-04",
    number: "140.04",
    title: "Penalties for Unauthorized Foreign Filing",
    content:
      "The consequences for filing a patent application in a foreign country without the required license are severe and are established by multiple statutory provisions.\n\n35 U.S.C. 185 — Patent Invalidity: Any U.S. patent obtained on an invention for which an application was filed in a foreign country without the required license shall be invalid. This applies even if the foreign filing was inadvertent or due to a mistake. The invalidity extends to any U.S. patent issuing from the application, not just the claims related to the foreign-filed subject matter.\n\n35 U.S.C. 186 — Criminal Penalties: Any person who willfully files or causes to be filed a patent application in a foreign country without the required license may be fined not more than $10,000, or imprisoned for not more than 2 years, or both. The criminal penalties require willful violation, meaning the person must have known about the licensing requirement.\n\n35 U.S.C. 182 — Abandonment: If a secrecy order is in effect and the applicant files abroad in violation of the order, the application shall be considered abandoned. This abandonment is not revivable through normal petition procedures.\n\nThese penalties underscore the importance of obtaining proper foreign filing authorization before any international patent filing activity.",
  },
  {
    id: "mpep-140-05",
    number: "140.05",
    title: "Retroactive Licenses: 37 CFR 5.25",
    content:
      "When a foreign filing has been made without the required license, it may be possible to obtain a retroactive license under 37 C.F.R. 5.25. A retroactive license, if granted, can cure the defect caused by unauthorized foreign filing and prevent the patent from being rendered invalid under 35 U.S.C. 185.\n\nTo petition for a retroactive license, the applicant must file a petition under 37 C.F.R. 5.25 that includes: (1) a listing of each foreign country in which the unlicensed patent application material was filed; (2) the dates of filing in each country; (3) a verified statement containing an averment that the subject matter was not under a secrecy order at the time of foreign filing; (4) a statement that the applicant was not aware of any national security implications; and (5) the required petition fee.\n\nThe grant of a retroactive license is discretionary and is not guaranteed. The USPTO will consider the circumstances of the unauthorized filing, including whether the subject matter involves sensitive technology. A retroactive license does not excuse criminal liability under 35 U.S.C. 186 for willful violations.\n\nApplicants should file the retroactive license petition as soon as the unauthorized filing is discovered to minimize potential consequences.",
  },
  {
    id: "mpep-140-06",
    number: "140.06",
    title: "Filing Abroad Without a U.S. Application",
    content:
      "In some cases, an inventor may wish to file a patent application directly in a foreign country without first filing in the United States. Under 37 C.F.R. 5.11, a license from the Commissioner for Patents is still required before filing abroad if the invention was made in the United States, even if no U.S. application has been or will be filed.\n\nTo obtain a foreign filing license without a corresponding U.S. application, the applicant must file a petition under 37 C.F.R. 5.13. The petition must include: (1) a description of the invention in sufficient detail to allow the USPTO to determine whether the subject matter raises national security concerns; (2) the name of the foreign country or countries where the application will be filed; and (3) the required petition fee.\n\nThe USPTO will review the petition and grant the license if the subject matter does not present national security concerns. The license may be granted as either a broad or narrow license under 37 C.F.R. 5.15.\n\nInventors working in the United States, including foreign nationals, are subject to these requirements regardless of citizenship. The key factor is that the invention was made in the United States.",
  },
  {
    id: "mpep-140-07",
    number: "140.07",
    title: "Exemptions and Special Cases",
    content:
      "Several special provisions and exemptions apply to foreign filing license requirements.\n\n35 U.S.C. 187 — Government Officers: Officers and employees of the U.S. government who are required to file patent applications as part of their official duties may be exempt from certain foreign filing license requirements when acting in their official capacity. However, this exemption does not apply to inventions made outside the scope of official duties.\n\n37 C.F.R. 5.18 — ITAR Compliance: Applications involving subject matter controlled under the International Traffic in Arms Regulations (ITAR) may require additional export control approvals beyond the standard foreign filing license. The foreign filing license from the USPTO does not substitute for ITAR authorization from the Department of State.\n\n37 C.F.R. 5.20 — Department of Energy (DOE): Inventions related to atomic energy as defined by the Atomic Energy Act require special handling. The DOE has authority over the classification and foreign filing of such inventions, and the standard USPTO foreign filing license procedures may not apply.\n\nPCT Applications: Filing a Patent Cooperation Treaty (PCT) application with the USPTO as the receiving office satisfies the foreign filing license requirement, as the U.S. application effectively serves as the initial filing. However, filing a PCT application with a non-U.S. receiving office for an invention made in the U.S. requires a foreign filing license.\n\nProvisional Applications: Filing a U.S. provisional application triggers the 6-month foreign filing bar under 35 U.S.C. 184, and the filing receipt for the provisional application serves as the automatic license under 37 C.F.R. 5.12.",
  },
];
