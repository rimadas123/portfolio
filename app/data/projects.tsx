import Image from "next/image";
import projectOne from "../../public/project-1.svg";
import projectTwo from "../../public/project-2.svg";
import projectThree from "../../public/project-3.svg";

export const projects = [
  {
    number: "01",
    year: "2026",
    slug: "finpay",
    title: "FinPay",
    category: "Product Design",
    description:
      "Making personal finance feel simpler, calmer and easier to understand.",
    tags: ["UX Research", "UI Design", "Mobile"],
    result: "A clearer way to understand your money.",
    role: "Product Designer",
    timeline: "8 weeks",
    team: "2 Designers · 3 Developers",
    problemTitle: "Making financial information feel less intimidating.",
    problem:
      "Users had access to plenty of data, but the existing experience made it difficult to know what mattered right now. The challenge was to create a calmer hierarchy without hiding useful detail.",
    approachTitle: "Reduce noise, increase confidence.",
    approach:
      "I mapped the core user journeys, simplified the information architecture, explored several dashboard directions and tested the most promising concepts before refining the visual system.",
    outcomeTitle: "A clearer starting point.",
    outcome:
      "The final direction prioritizes current balance, upcoming activity and meaningful trends. Replace this text with your real project outcomes and evidence.",
    image: projectOne,
    visual: (
      <Image
        src={projectOne}
        alt="FinPay project visual"
        className="w-full"
        priority
      />
    ),
  },
  {
    number: "02",
    year: "2025",
    slug: "travelly",
    title: "Travelly",
    category: "UX / UI",
    description: "Helping people plan trips together without the usual chaos.",
    tags: ["Product Design", "Interaction", "Prototyping"],
    result: "One shared space for the entire trip.",
    role: "UX/UI Designer",
    timeline: "6 weeks",
    team: "1 Designer · 4 Developers",
    problemTitle: "Planning together was scattered across too many tools.",
    problem:
      "Travelers were switching between chats, maps, notes and booking sites just to coordinate one trip. The opportunity was to bring the essential planning moments into one simple flow.",
    approachTitle: "Design around the trip, not the tool.",
    approach:
      "I organized the experience around destinations, decisions and shared moments rather than around individual features.",
    outcomeTitle: "One shared place to move the trip forward.",
    outcome:
      "The concept combines itinerary, places and shared decisions into a single flexible workspace.",
    image: projectTwo,
    visual: (
      <Image
        src={projectTwo}
        alt="Travelly project visual"
        className="w-full"
      />
    ),
  },
  {
    number: "03",
    year: "2025",
    slug: "atlas",
    title: "Atlas",
    category: "Design Systems",
    description:
      "A flexible design system created to help product teams move faster.",
    tags: ["Systems", "UI", "Components"],
    result: "A shared visual language across products.",
    role: "Product Designer",
    timeline: "12 weeks",
    team: "Design + Engineering",
    problemTitle: "Consistency was slowing the team down.",
    problem:
      "Different product surfaces had evolved independently, creating duplicated decisions and inconsistent patterns.",
    approachTitle: "Build the system around real product needs.",
    approach:
      "I audited existing patterns, grouped them by behavior, created component foundations and documented usage principles alongside the visual specifications.",
    outcomeTitle: "A shared language for product teams.",
    outcome:
      "Atlas establishes reusable foundations for type, color, spacing, components and interaction patterns.",
    image: projectThree,
    visual: (
      <Image src={projectThree} alt="Atlas project visual" className="w-full" />
    ),
  },
];
