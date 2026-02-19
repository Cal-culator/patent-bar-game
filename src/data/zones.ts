import { Zone } from "@/types";

export const ZONES: Zone[] = [
  {
    id: 1,
    name: "The Vault",
    slug: "the-vault",
    subtitle: "Confidentiality",
    description:
      "Application confidentiality under 35 USC 122, the 18-month publication rule, exceptions, and status information disclosure.",
    mpepSections: ["101", "102"],
    order: 1,
    accentColor: "#3B82F6", // blue
    icon: "🔒",
    examWeight: "High",
    locked: false,
  },
  {
    id: 2,
    name: "The Reading Room",
    slug: "the-reading-room",
    subtitle: "Public Inspection",
    description:
      "Public rights to inspect patent files under 37 CFR 1.11 and 1.14, published vs. unpublished access, IFW system, and FOIA.",
    mpepSections: ["103", "104"],
    order: 2,
    accentColor: "#8B5CF6", // purple
    icon: "📖",
    examWeight: "High",
    locked: false,
  },
  {
    id: 3,
    name: "The Gatekeepers",
    slug: "the-gatekeepers",
    subtitle: "Inspection Powers",
    description:
      "Suspended practitioners barred from inspection, assignee control of access, and part-interest rights.",
    mpepSections: ["105", "106"],
    order: 3,
    accentColor: "#F59E0B", // amber
    icon: "🛡️",
    examWeight: "Medium",
    locked: false,
  },
  {
    id: 4,
    name: "The Classified Wing",
    slug: "the-classified-wing",
    subtitle: "National Security Review",
    description:
      "Application screening under 35 USC 181, three screening functions, L&R codes, and classified application handling.",
    mpepSections: ["115"],
    order: 4,
    accentColor: "#EF4444", // red
    icon: "🔴",
    examWeight: "High",
    locked: false,
  },
  {
    id: 5,
    name: "The Sealed Chamber",
    slug: "the-sealed-chamber",
    subtitle: "Secrecy Orders",
    description:
      "Type I/II/III secrecy orders, 1-year renewal, related subject matter scope, examination under secrecy, and appeal limitations.",
    mpepSections: ["120", "121", "130"],
    order: 5,
    accentColor: "#DC2626", // deep red
    icon: "🔏",
    examWeight: "Very High",
    locked: false,
  },
  {
    id: 6,
    name: "The Border",
    slug: "the-border",
    subtitle: "Foreign Filing Licenses",
    description:
      "35 USC 184-187, the 6-month rule, automatic petition via filing, broad vs. narrow scope, retroactive licenses, penalties, and exemptions.",
    mpepSections: ["140"],
    order: 6,
    accentColor: "#10B981", // emerald
    icon: "🛂",
    examWeight: "Very High",
    locked: false,
  },
  {
    id: 7,
    name: "The Agencies",
    slug: "the-agencies",
    subtitle: "DOE & NASA Statements",
    description:
      "Statements to DOE (42 USC 2182) and NASA (51 USC 20135), the 45-day letter, 30-day statutory demand, and abandonment consequences.",
    mpepSections: ["150", "151"],
    order: 7,
    accentColor: "#0EA5E9", // sky blue
    icon: "🚀",
    examWeight: "Medium",
    locked: false,
  },
];

export function getZoneBySlug(slug: string): Zone | undefined {
  return ZONES.find((z) => z.slug === slug);
}
