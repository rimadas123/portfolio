import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const observations = [
  {
    number: "01",
    category: "UX Observation · Travel",
    title: "The Boarding Point Disappeared. The Confusion Didn't.",
    description:
      "A real booking experience with redBus raised a simple question: what happens when information changes, but the interface doesn't explain what it means for the user?",
    href: "/writing/redbus-boarding-point",
    takeaway: "Making time-sensitive information easier to understand.",
    status: "Published as an independent observation",
  },
];

export default function Writing() {
  return (
    <main className="min-h-screen bg-brand-bg px-5 py-6 text-foreground md:px-10 md:py-8">
      <div className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tighter"
            aria-label="Rima Das home"
          >
            RD<span className="text-text-brand">.</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>
        </nav>

        <header className="max-w-4xl pb-16 pt-20 md:pb-24 md:pt-32">
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-text-muted">
            Notes on digital experiences
          </p>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-8xl">
            UX Observations
            <span className="text-text-brand">.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-text-muted md:text-xl md:leading-8">
            Small moments of friction can reveal important design opportunities.
            Here, I write about everyday experiences, interface decisions, and
            ways to make products clearer and more useful.
          </p>

          <div className="mt-8 h-px w-full bg-border-muted" />
        </header>

        <section aria-labelledby="observations-heading" className="pb-20">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 id="observations-heading" className="text-sm font-medium">
              Selected observations
            </h2>

            <span className="text-xs text-text-muted">
              {String(observations.length).padStart(2, "0")} article
            </span>
          </div>

          <div className="divide-y divide-border-muted border-y border-border-muted">
            {observations.map((item) => (
              <article key={item.number} className="py-8 md:py-12">
                <Link
                  href={item.href}
                  className="group grid gap-6 md:grid-cols-[100px_1fr_40px] md:gap-10"
                >
                  <div>
                    <span className="text-sm text-text-muted">
                      {item.number}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-text-muted">
                      {item.category}
                    </p>

                    <h3 className="mt-4 max-w-3xl text-2xl font-medium leading-tight tracking-tight transition-colors group-hover:text-text-brand md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-text-muted md:text-base md:leading-8">
                      {item.description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-muted">
                      <span>{item.takeaway}</span>
                      <span className="hidden sm:inline">·</span>
                      <span>{item.status}</span>
                    </div>

                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium">
                      Read observation
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>

                  <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-border-muted transition-colors group-hover:bg-surface md:flex">
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-border-muted py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-text-muted">
            Thoughtful design starts with noticing.
          </p>

          <Link
            href="/#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm"
          >
            Get in touch
            <ArrowUpRight size={16} />
          </Link>
        </footer>
      </div>
    </main>
  );
}
