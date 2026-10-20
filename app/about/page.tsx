import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Start with people",
    detail:
      "Understand the person, the context, and the task before deciding what the interface should do.",
  },
  {
    number: "02",
    title: "Make the complex clear",
    detail:
      "Bring the right information forward and remove friction from the moments that matter.",
  },
  {
    number: "03",
    title: "Design for real life",
    detail:
      "Create thoughtful, usable experiences that feel natural in everyday workflows.",
  },
];

const experience = [
  {
    period: "Feb 2025 — Present",
    role: "Product Designer",
    company: "Vyastra",
    location: "Raipur · Remote",
    highlights: [
      "Designed and launched a healthcare platform from scratch.",
      "Reduced diagnosis time by 40% and improved staff efficiency by 70% with OCR-based digital records.",
    ],
  },
  {
    period: "Nov 2024 — Jan 2025",
    role: "Freelance Product Designer ",
    company: "Freelance",
    location: "Pune · Remote",
    highlights: [
      "Redesigned an e-commerce experience after identifying 8+ usability issues.",
      "Delivered production-ready designs, prototypes, and developer handoff in Figma.",
    ],
  },
  {
    period: "Jan 2024 — Oct 2024",
    role: "Associate Product Designer",
    company: "TIQS · Trinkerr",
    location: "Bengaluru · Remote",
    highlights: [
      "Designed a 0-to-1 trading platform for an Accel-backed fintech startup serving 1M+ investors.",
      "Created features around strategy execution and conditional price alerts while maintaining the design system.",
    ],
  },
  {
    period: "Nov 2021 — Dec 2022",
    role: "Graphic Designer",
    company: "Trinkerr Learning Technologies",
    location: "Bengaluru · Remote",
    highlights: [
      "Created investor education and marketing assets for a fintech platform.",
      "Contributed to 10,000+ follower growth and improved engagement by 40%.",
    ],
  },
  {
    period: "May 2021 — Oct 2021",
    role: "Associate Graphic Designer",
    company: "Affinity Express",
    location: "Pune · Remote",
    highlights: [
      "Created print and digital campaigns for UK and US clients across retail, real estate, and automotive.",
      "Delivered brand-compliant marketing materials while meeting weekly production targets.",
    ],
  },
];

const earlierExperience = [
  {
    role: "Web Developer",
    company: "Vereigen Media",
    period: "Aug 2022 — Nov 2022",
  },
  {
    role: "Web Developer",
    company: "Demand Matix",
    period: "Jul 2018 — Sep 2019",
  },
  {
    role: "WordPress Designer",
    company: "Kaizen Infosys",
    period: "Aug 2016 — Sep 2017",
  },
];

export const metadata = {
  title: "About — Rima Das, Product Designer",
  description:
    "Get to know Rima Das, a product designer focused on usability, clarity, and real-world digital experiences.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main className="mx-auto w-full max-w-360 px-5 pb-16 md:px-10 md:pb-24">
        <section className="grid gap-12 pb-20 pt-14 md:gap-16 md:pb-28 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-7 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-text-brand" />A
              little about me
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[88px]">
              Good design makes life feel{" "}
              <span className="text-text-brand">simpler.</span>
            </h1>
            <div className="mt-9 flex items-center gap-3 text-sm text-text-muted">
              <span className="h-px w-10 bg-border-muted" />
              Product designer
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto">
            <div className="absolute -inset-3 rounded-4xl border border-border-subtle" />
            <div className="relative aspect-4/5 overflow-hidden rounded-[1.6rem] bg-surface">
              <Image
                src="/profile.jpeg"
                alt="Rima Das"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-border-subtle bg-surface px-4 py-3 shadow-xl sm:-left-8">
              <p className="text-xs text-text-muted">Currently</p>
              <p className="mt-1 flex items-center gap-2 text-sm font-medium">
                <span className="h-2 w-2 animate-pulse rounded-full bg-text-brand" />
                Open to opportunities
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border-subtle py-14 md:grid-cols-[0.7fr_1.3fr] md:gap-8 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
            The short version
          </p>
          <div className="max-w-3xl space-y-6 text-lg leading-8 text-text-muted md:text-xl md:leading-9">
            <p>
              I’m Rima, a product designer who cares about making digital
              experiences feel clear, useful, and easy to move through.
            </p>
            <p>
              I enjoy taking a closer look at everyday problems, finding the
              moments where people get stuck, and shaping those moments into
              simple, considered interfaces. My work brings usability and visual
              craft together, with the real world always in view.
            </p>
            <p>
              From early flows to polished screens, I like asking what can be
              made clearer, what can be removed, and how the details can help
              someone feel confident in what they’re doing.
            </p>
          </div>
        </section>

        <section className="border-t border-border-subtle py-14 md:py-20">
          <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-text-muted">
                How I think
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                A few things I believe.
              </h2>
            </div>
            <ArrowDown
              className="mb-1 hidden text-text-brand md:block"
              size={22}
              strokeWidth={1.5}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="rounded-3xl border border-border-subtle bg-surface p-6 md:min-h-64 md:p-7"
              >
                <p className="text-xs tracking-[0.16em] text-text-brand">
                  {principle.number}
                </p>
                <h3 className="mt-12 text-xl font-medium tracking-tight md:mt-16">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-text-muted">
                  {principle.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="border-t border-border-subtle py-14 md:py-20"
        >
          <div className="mb-10 grid gap-4 md:mb-14 md:grid-cols-[0.7fr_1.3fr] md:gap-4">
            <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
              Career experience
            </p>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                Growing through every kind of design.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-text-muted md:text-base">
                From web and visual design to product design, I’ve worked across
                technology, fintech, healthcare, and e-commerce.
              </p>
            </div>
          </div>

          <div className="md:ml-[calc(35%+1rem)]">
            {experience.map((job, index) => (
              <article
                key={`${job.company}-${job.period}`}
                className={`grid gap-4 py-7 md:grid-cols-[1fr_2fr] md:gap-10 ${index === 0 ? "border-y border-border-muted" : "border-b border-border-muted"}`}
              >
                <div>
                  <p className="text-sm text-text-brand">{job.period}</p>
                  <p className="mt-2 text-xs text-text-subtle">
                    {job.location}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-tight">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{job.company}</p>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-brand" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 md:ml-[calc(35%+1rem)]">
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-text-muted">
              Earlier experience
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {earlierExperience.map((job) => (
                <div
                  key={job.company}
                  className="rounded-2xl border border-border-subtle bg-surface px-5 py-4"
                >
                  <p className="text-xs text-text-brand">{job.period}</p>
                  <p className="mt-2 text-sm font-medium">{job.role}</p>
                  <p className="mt-1 text-sm text-text-muted">{job.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border-subtle py-14 md:grid-cols-[0.7fr_1.3fr] md:gap-8 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
            Outside the pixels
          </p>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Curious by nature. Always learning.
            </h2>
            <p className="mt-6 text-base leading-7 text-text-muted md:text-lg md:leading-8">
              I find inspiration in the small details of how people use the
              things around them. That curiosity keeps me exploring new ideas,
              learning from each project, and bringing a fresh perspective to
              the next challenge.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Curiosity",
                "Thoughtful details",
                "Clear communication",
                "Continuous learning",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border-muted px-4 py-2 text-sm text-text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mt-5 overflow-hidden rounded-[2rem] border border-border-subtle bg-surface px-6 py-10 md:px-12 md:py-14"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-text-muted">
                Have a good one in mind?
              </p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
                Let’s make something{" "}
                <span className="text-text-brand">meaningful.</span>
              </h2>
            </div>
            <Link
              href="mailto:rdas5969@gmail.com"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-brand px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Say hello <ArrowUpRight size={17} strokeWidth={1.8} />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border-muted pt-5 text-sm text-text-muted">
            <span>Rima Das · Product Designer</span>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              Back to home <MoveUpRight size={14} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
