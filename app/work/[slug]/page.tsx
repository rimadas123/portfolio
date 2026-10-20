import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, type CaseStudy } from "@/app/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

const base = "/projects/patient-search";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found | Rima Das" };
  }

  return {
    title: `${project.title} — Case Study | Rima Das`,
    description: project.subtitle,
  };
}

function ProjectImage({
  src,
  alt,
  className = "",
  loading,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 85vw"
        className="object-contain"
        loading={loading}
        priority={priority}
      />
    </div>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-[160px_1fr] md:gap-12">
      <p className="text-xs uppercase tracking-[0.18em] text-text-muted">
        {number} / {eyebrow}
      </p>

      <div>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-text-muted md:text-base md:leading-8">
          {description}
        </p>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-2 text-xs text-text-muted">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid grid-cols-[40px_1fr] gap-4 border-b border-border-muted pb-5 md:grid-cols-[56px_1fr]">
      <span className="pt-1 text-xs text-text-muted">{number}</span>
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-text-muted">{description}</p>
      </div>
    </div>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  if (slug !== "01") return <CaseStudyOverview project={project} />;

  const nextProject = projects.find((item) => item.slug === "02");

  return (
    <main className="min-h-screen overflow-x-hidden bg-brand-bg px-5 py-6 text-foreground md:px-10 md:py-8">
      <div className="mx-auto max-w-7xl">
        {/* Navigation */}
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tighter">
            RD<span className="text-text-brand">.</span>
          </Link>

          <Link
            href="/work"
            className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            All projects
          </Link>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full border border-border-muted px-4 py-2 text-sm md:flex"
          >
            Let's talk <ArrowUpRight size={15} />
          </Link>
        </nav>

        {/* Hero */}
        <header className="pb-12 pt-12 md:pb-20 md:pt-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <ProjectImage
              src={`${base}/cover.png`}
              alt="Smarter Patient Search project cover showing the patient lookup interface"
              className="aspect-[1.2/1] w-full rounded-3xl border border-border-muted bg-[#f5f2ec] p-2 sm:p-4 lg:aspect-[0.98/1]"
              priority
            />

            <div className="py-2 lg:py-8">
              <p className="mb-5 text-xs uppercase tracking-[0.18em] text-text-brand">
                {project.number} / Healthcare / Product Design
              </p>

              <h1 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl md:text-6xl">
                Smarter Patient Search<span className="text-text-brand">.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-text-muted md:text-lg md:leading-8">
                A small workflow change that made appointment booking more
                continuous for receptionists by simplifying patient lookup.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-border-muted py-6">
                <Meta label="Role" value="Product Designer" />
                <Meta label="Tools" value="Figma" />
                <Meta label="Platform" value="Web application" />
                <Meta label="Timeline" value="1 week" />
              </div>
            </div>
          </div>
        </header>

        {/* 01 — Overview */}
        <section className="py-16 md:py-24">
          <SectionHeading
            number="01"
            eyebrow="Overview"
            title="A small change to a repeated workflow"
            description="I worked on improving patient search inside appointment booking, making it easier for receptionists to find existing patients and continue booking without breaking the flow."
          />
        </section>

        {/* 02 — Problem */}
        <section className="border-t border-border-muted py-16 md:py-24">
          <SectionHeading
            number="02"
            eyebrow="The challenge"
            title="Where the friction started"
            description="The previous search experience relied on separate fields and repeated verification. Staff had to switch between patient lookup and booking, sometimes re-entering details that had already been provided."
          />

          <div className="mt-10 grid gap-4 md:ml-52 md:grid-cols-2">
            {[
              {
                title: "Search separately",
                body: "Receptionists had to work through separate fields to find a patient.",
              },
              {
                title: "Verify again",
                body: "They checked patient details to confirm the right record.",
              },
              {
                title: "Switch between steps",
                body: "Patient lookup interrupted the booking journey.",
              },
              {
                title: "Repeat information",
                body: "Missing matches could lead to details being entered again.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border-muted p-6"
              >
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 03 — Workflow */}
        <section className="border-t border-border-muted py-16 md:py-24">
          <SectionHeading
            number="03"
            eyebrow="Workflow"
            title="Finding the bottleneck"
            description="Mapping the existing appointment journey helped identify patient lookup as the point where searching, verification, and navigation interrupted booking."
          />

          <div className="mt-10 space-y-4 md:ml-52">
            <ProcessStep
              number="01"
              title="Search for a patient"
              description="Find the patient through the existing lookup flow."
            />
            <ProcessStep
              number="02"
              title="Verify the record"
              description="Check details to confirm the correct patient."
            />
            <ProcessStep
              number="03"
              title="Return to booking"
              description="Continue through appointment selection and enter details where needed."
            />
          </div>

          <ProjectImage
            src={`${base}/workflow.png`}
            alt="Receptionist dashboard showing the existing appointment workflow"
            className="mt-10 aspect-4/3 w-full md:ml-52 md:w-[calc(100%-208px)] md:aspect-video"
          />
        </section>

        {/* 04 — Design decision */}
        <section className="border-t border-border-muted py-16 md:py-24">
          <SectionHeading
            number="04"
            eyebrow="Design decision"
            title="One search bar instead of multiple fields"
            description="Separate search fields still required receptionists to decide how they wanted to search. I moved toward one search experience that supports patient names and phone numbers, with a clear registration path when no match appears."
          />

          <ProjectImage
            src={`${base}/search-with-tags.png`}
            alt="Unified patient search showing matching patient records and contextual tags"
            className="mt-10 aspect-video w-full md:ml-52 md:w-[calc(100%-208px)] md:aspect-video"
          />

          <div className="mt-8 grid gap-4 md:ml-52 md:grid-cols-2">
            <div className="rounded-2xl bg-surface p-6">
              <h3 className="font-medium">Returning patients</h3>
              <p className="mt-2 text-sm leading-7 text-text-muted">
                Search by name or phone number, identify the correct record, and
                continue toward appointment selection.
              </p>
            </div>

            <div className="rounded-2xl bg-surface p-6">
              <h3 className="font-medium">New patients</h3>
              <p className="mt-2 text-sm leading-7 text-text-muted">
                When no match appears, staff can start registration from the
                same search experience.
              </p>
            </div>
          </div>
        </section>

        {/* 05 — Iteration */}
        <section className="bg-surface py-16 md:py-24">
          <SectionHeading
            number="05"
            eyebrow="Iteration"
            title="Giving search results useful context"
            description="During usability testing, receptionists were opening profiles just to confirm a patient's current stage. I introduced contextual tags so more of that information could be understood directly in the search results."
          />

          <div className="mt-10 grid gap-6 md:ml-52 md:grid-cols-2">
            <div>
              <ProjectImage
                src={`${base}/search-without-tags.png`}
                alt="Earlier patient search results without contextual status tags"
                className="aspect-4/3 w-full"
              />
              <p className="mt-4 text-xs uppercase tracking-widest text-text-muted">
                Before
              </p>
              <h3 className="mt-2 font-medium">Names without enough context</h3>
              <p className="mt-2 text-sm leading-7 text-text-muted">
                Receptionists had fewer clues about patient activity in the
                search results.
              </p>
            </div>

            <div>
              <ProjectImage
                src={`${base}/search-with-tags.png`}
                alt="Refined search results with patient activity tags"
                className="aspect-4/3 w-full"
              />
              <p className="mt-4 text-xs uppercase tracking-widest text-text-muted">
                After
              </p>
              <h3 className="mt-2 font-medium">Patient activity at a glance</h3>
              <p className="mt-2 text-sm leading-7 text-text-muted">
                Tags communicate recently searched, checked in today,
                appointment today, and no upcoming visit.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-3 md:ml-52 md:grid-cols-3">
            <Shortcut keys="Ctrl / Cmd + K" label="Open search" />
            <Shortcut keys="Enter" label="Confirm or register" />
            <Shortcut keys="Esc" label="Close modal" />
          </div>
        </section>

        {/* 06 — Patient journeys */}
        <section className="border-t border-border-muted py-16 md:py-24">
          <SectionHeading
            number="06"
            eyebrow="User journeys"
            title="Two paths, one continuous flow"
            description="The experience supports both returning patients and first-time visitors without forcing receptionists to start from a different workflow."
          />

          <div className="mt-10 grid gap-x-6 md:ml-52 md:grid-cols-2">
            <div>
              <h3 className="mt-2 font-medium">Existing patient</h3>
              <p className="mt-2 text-sm leading-7 text-text-muted">
                Select the matching patient, review details, and proceed to
                appointment booking.
              </p>
              <ProjectImage
                src={`${base}/existing-patient.png`}
                alt="Existing patient appointment details and booking options"
                className="aspect-4/5 w-full"
                loading="eager"
              />
            </div>

            <div>
              <h3 className="mt-2 font-medium">New patient</h3>
              <p className="mt-2 text-sm leading-7 text-text-muted">
                If no record matches, the interface offers a direct route to
                new-patient registration.
              </p>
              <ProjectImage
                src={`${base}/no-results.png`}
                alt="No matching patients found in the unified search"
                className="aspect-4/5 w-full"
              />
            </div>
          </div>

          <ProjectImage
            src={`${base}/registration.png`}
            alt="New patient registration form"
            className="mt-10 aspect-4/3 w-full md:ml-52 md:w-[calc(100%-208px)] md:aspect-video"
          />
          <p className="mt-3 text-sm text-center text-text-muted md:ml-52">
            New-patient registration
          </p>

          <ProjectImage
            src={`${base}/appointment-confirmation.png`}
            alt="Appointment booking confirmation"
            className="mt-10 aspect-4/3 w-full md:ml-52 md:w-[calc(100%-208px)] md:aspect-video"
          />
          <p className="mt-3 text-sm text-center text-text-muted md:ml-52">
            Appointment confirmation
          </p>
        </section>

        {/* 07 — Outcome */}
        <section className="border-t border-border-muted py-16 md:py-24">
          <SectionHeading
            number="07"
            eyebrow="Outcome"
            title="Less friction in a repeated task"
            description="The redesign reduced unnecessary steps in the booking flow, made existing patients easier to find, reduced navigation, and helped prevent duplicate patient entries, as documented in the project case study."
          />

          <div className="mt-10 grid gap-4 md:ml-52 md:grid-cols-2">
            {[
              "Fewer repeated steps during booking",
              "Faster access to existing patient records",
              "Less navigation during the workflow",
              "Fewer duplicate patient entries",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border-muted p-5"
              >
                <span className="text-text-brand">↗</span>
                <p className="mt-3 text-sm font-medium leading-6">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-surface p-6 md:ml-52 md:p-10">
            <p className="text-xs uppercase tracking-widest text-text-muted">
              Reflection
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              Sometimes better UX means removing a step, not adding a feature.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-text-muted">
              Designing search around the details receptionists already
              remember, while making patient context visible, reinforced the
              value of simplifying repeated workflows.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border-muted py-10">
          <p className="text-sm text-text-muted">Continue exploring</p>

          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group mt-3 flex items-center justify-between gap-4"
            >
              <span className="text-2xl font-semibold tracking-tight md:text-4xl">
                {nextProject.title}
              </span>
              <ArrowRight
                size={24}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          ) : (
            <Link href="/#work" className="mt-4 inline-flex items-center gap-2">
              Explore all projects <ArrowRight size={18} />
            </Link>
          )}

          <Link
            href="/contact"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm"
          >
            Let's talk <ArrowUpRight size={16} />
          </Link>
        </footer>
      </div>
    </main>
  );
}

function CaseStudyOverview({ project }: { project: CaseStudy }) {
  const cover =
    project.slug === "02"
      ? "/Cover-2.png"
      : project.slug === "03"
        ? "/Cover-3.png"
        : "/Cover-1.png";

  return (
    <main className="min-h-screen overflow-x-hidden bg-background px-5 py-6 text-foreground md:px-10 md:py-8">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tighter">
            RD<span className="text-text-brand">.</span>
          </Link>
          <Link href="/work" className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-foreground">
            <ArrowLeft size={16} /> All projects
          </Link>
          <Link href="mailto:rdas5969@gmail.com" className="hidden items-center gap-2 rounded-full border border-border-muted px-4 py-2 text-sm md:flex">
            Let&apos;s talk <ArrowUpRight size={15} />
          </Link>
        </nav>

        <header className="grid items-center gap-8 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <ProjectImage
            src={cover}
            alt={`${project.title} project cover`}
            className="aspect-[1.2/1] w-full rounded-3xl border border-border-muted bg-white p-2 sm:p-4 lg:aspect-[0.98/1]"
            priority
          />
          <div className="py-2 lg:py-8">
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-text-brand">
              {project.number} / {project.category}
            </p>
            <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl md:text-6xl">
              {project.title}<span className="text-text-brand">.</span>
            </h1>
            <p className="mt-6 text-base leading-7 text-text-muted md:text-lg md:leading-8">
              {project.subtitle}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-border-muted py-6">
              <Meta label="Role" value={project.role} />
              <Meta label="Year" value={project.year} />
              <Meta label="Duration" value={project.duration} />
              <Meta label="Discipline" value={project.category} />
            </div>
          </div>
        </header>

        <section className="space-y-10 border-t border-border-muted py-12 md:space-y-14 md:py-20">
          {[
            { title: "Overview", content: project.overview },
            { title: "The challenge", content: project.problem },
            { title: "Approach", content: project.approach },
            { title: "The solution", content: project.solution },
            { title: "What I learned", content: project.learnings },
          ].map((section, index) => (
            <section key={section.title} className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-12">
              <p className="text-xs uppercase tracking-[0.18em] text-text-muted">
                {String(index + 1).padStart(2, "0")} / {section.title}
              </p>
              <p className="max-w-3xl text-base leading-7 text-text-muted md:text-lg md:leading-8">
                {section.content}
              </p>
            </section>
          ))}
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border-muted py-8">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-foreground">
            <ArrowLeft size={16} /> Back to all projects
          </Link>
          <Link href="mailto:rdas5969@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm">
            Let&apos;s talk <ArrowUpRight size={16} />
          </Link>
        </footer>
      </div>
    </main>
  );
}

function Shortcut({ keys, label }: { keys: string; label: string }) {
  return (
    <div className="rounded-xl border border-border-muted p-4">
      <p className="text-sm font-medium">{keys}</p>
      <p className="mt-1 text-xs text-text-muted">{label}</p>
    </div>
  );
}
