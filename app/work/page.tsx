import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";
import { ArrowUpRight } from "lucide-react";

const projectImages: Record<string, string> = {
  "01": "/Cover-1.png",
  "02": "/Cover-2.png",
  "03": "/Cover-3.png",
};

export const metadata = {
  title: "Selected Work — Rima Das",
  description:
    "Selected product design, healthcare, fintech, and digital experience projects by Rima Das.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main className="mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-24">
        <section className="relative overflow-hidden pb-12 pt-14 md:pb-16 md:pt-20">
          <div className="pointer-events-none absolute -right-40 -top-48 h-[440px] w-[440px] rounded-full bg-brand/15 blur-[120px]" />
          <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-text-brand" />
                Selected work · 2021—2025
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[88px]">
                Thoughtful design,
                <br />
                <span className="text-text-brand">made useful.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-text-muted md:text-lg md:leading-8">
                A selection of product and visual design work across healthcare,
                fintech, and digital experiences. Each project starts with a
                real problem and a focus on making the experience clearer.
              </p>
            </div>
          </div>
          <div className="relative mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border-subtle pt-5 text-xs uppercase tracking-[0.16em] text-text-subtle md:mt-14">
            <span>Product design</span>
            <span>UX / UI</span>
            <span>Visual systems</span>
            <span className="ml-auto">{projects.length.toString().padStart(2, "0")} projects</span>
          </div>
        </section>

        <section className="space-y-10 md:space-y-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              image={projectImages[project.number]}
              featured={index === 0}
            />
          ))}
        </section>

        <section
          id="contact"
          className="mt-20 overflow-hidden rounded-[2rem] border border-border-subtle bg-surface px-6 py-10 md:mt-28 md:px-12 md:py-14"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-text-muted">
                Have a project in mind?
              </p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
                Let’s make something <span className="text-text-brand">meaningful.</span>
              </h2>
            </div>
            <Link
              href="mailto:rdas5969@gmail.com"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-brand px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Get in touch <ArrowUpRight size={17} strokeWidth={1.8} />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border-muted pt-5 text-sm text-text-muted">
            <span>Rima Das · Product Designer</span>
            <Link href="/about" className="transition-colors hover:text-foreground">
              More about me <ArrowUpRight className="ml-1 inline" size={14} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

function ProjectCard({
  project,
  image,
  featured = false,
}: {
  project: (typeof projects)[number];
  image: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group grid overflow-hidden rounded-[1.75rem] border border-border-subtle bg-surface transition-colors hover:border-border-muted md:grid-cols-[0.78fr_1.22fr]"
    >
      <div className={`order-2 relative overflow-hidden bg-[#e8e8e5] md:order-2 ${featured ? "aspect-[1.2/1] md:aspect-auto md:min-h-[520px]" : "aspect-[1.2/1] md:aspect-auto md:min-h-[440px]"}`}>
        <Image
          src={image}
          alt={`${project.title} project cover`}
          fill
          sizes="(max-width: 768px) 100vw, 65vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          priority={featured}
        />
        <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45 md:bottom-7 md:right-7 md:h-14 md:w-14">
          <ArrowUpRight size={20} strokeWidth={1.7} />
        </span>
      </div>
      <div className={`order-1 flex flex-col justify-between gap-8 px-5 py-6 md:order-1 md:px-8 ${featured ? "md:py-9" : "md:py-7"}`}>
        <div>
          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.12em] text-text-subtle">
            <span>{project.number}</span>
            <span className="h-1 w-1 rounded-full bg-border-muted" />
            <span>{project.year}</span>
            <span className="ml-1 rounded-full border border-border-muted px-3 py-1.5 tracking-normal text-text-muted">
              {project.category}
            </span>
          </div>
          <h2 className={`${featured ? "text-2xl md:text-4xl" : "text-xl md:text-3xl"} font-medium tracking-tight`}>
            {project.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-text-muted">
            {project.subtitle}
          </p>
        </div>
        <span className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-text-subtle transition-colors group-hover:text-text-brand">
          View case study <ArrowUpRight size={15} />
        </span>
      </div>
    </Link>
  );
}
