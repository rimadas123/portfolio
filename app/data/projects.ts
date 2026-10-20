export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  duration: string;
  overview: string;
  problem: string;
  approach: string;
  solution: string;
  learnings: string;
};

export const projects: CaseStudy[] = [
  {
    slug: "01",
    number: "01",
    title: "Smarter Patient Search",
    subtitle:
      "Reducing friction in appointment booking with a single, context-aware patient search.",
    category: "Healthcare · Product Design",
    year: "2025",
    role: "Product Designer",
    duration: "1 week",
    overview:
      "I redesigned patient search within an appointment-booking workflow, helping receptionists find existing patients and continue booking without unnecessary interruptions.",
    problem:
      "The previous workflow relied on separate search fields, repeated verification, and movement between patient lookup and booking. Staff sometimes had to re-enter details that had already been provided.",
    approach:
      "I mapped the existing booking journey, identified friction during patient lookup, and explored a unified search experience. A later iteration introduced contextual tags so receptionists could understand patient activity without repeatedly opening profiles.",
    solution:
      "One search bar supports patient-name and phone-number searches, displays relevant suggestions, and offers a registration path when no match is found. Contextual tags communicate patient activity, while keyboard shortcuts support faster interaction.",
    learnings:
      "This project reinforced the value of simplifying repeated workflows. Rather than adding more filters or steps, I focused on reducing unnecessary decisions and bringing relevant patient context into the search experience.",
  },
  {
    slug: "02",
    number: "02",
    title: "TIQS 2.0 — Broking Platform",
    subtitle: "Designing a seamless trading experience for a growing community of investors.",
    category: "Fintech · Product Design",
    year: "2024",
    role: "Associate Product Designer",
    duration: "10 months",
    overview: "I contributed to a 0-to-1 trading platform at TIQS, designing product features for an Accel-backed fintech startup serving over 1 million investors.",
    problem: "Traders needed a clear way to explore ready-made strategies, set conditional price alerts, and understand the product when they were new or had no activity yet.",
    approach: "I focused on reducing cognitive load across trading tasks, making key actions easier to understand, and keeping the experience visually consistent through the design system.",
    solution: "The platform work included ready-made strategy execution, conditional price alerts, and intuitive empty states. I also maintained the design system to support consistency and faster engineering sprints.",
    learnings: "Designing for a large investor base made clarity and consistency especially important. A maintained design system helped keep product experiences cohesive as features grew.",
  },
  {
    slug: "03",
    number: "03",
    title: "Blitz Design System",
    subtitle: "A visual system for consistent fintech product experiences.",
    category: "Fintech · Design System",
    year: "2024",
    role: "Product Designer",
    duration: "—",
    overview: "A design system concept for fintech interfaces, shown through reusable components, color primitives, and trading product screens.",
    problem: "Product interfaces need a shared visual language so common controls and data-heavy screens feel consistent.",
    approach: "The work organizes color foundations, interface components, and trading UI into a cohesive visual system.",
    solution: "The system presents color primitives alongside reusable interface elements and examples of trading screens.",
    learnings: "Clear foundations and reusable patterns help teams create more consistent product experiences.",
  },
];
