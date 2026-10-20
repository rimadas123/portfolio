import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "The Boarding Point Disappeared | Rima Das",
  description:
    "An independent UX observation about boarding-point clarity and time-sensitive information in the redBus app.",
};

const imageBase = "/writing/redbus";
const imageDimensions = {
  "pickup-time-before-after.png": { width: 4800, height: 1746 },
  "passed-stops-before-after.png": { width: 1600, height: 1050 },
  "expanded-boarding-list.png": { width: 1600, height: 1050 },
} as const;

function ArticleImage({
  src,
  alt,
  caption,
}: {
  src: keyof typeof imageDimensions;
  alt: string;
  caption: string;
}) {
  const dimensions = imageDimensions[src];

  return (
    <figure className="my-12">
      <Image
        src={`${imageBase}/${src}`}
        alt={alt}
        width={dimensions.width}
        height={dimensions.height}
        sizes="(max-width: 768px) 100vw, 768px"
        className="h-auto w-full rounded-xl border border-border-muted"
      />
      <figcaption className="mt-3 text-center text-xs leading-5 text-text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-base leading-8 text-foreground/85">{children}</p>;
}

export default function RedbusArticlePage() {
  return (
    <main className="min-h-screen bg-brand-bg text-foreground">
      {/* Navigation */}
      <header className="px-5 py-6 md:px-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tighter"
            aria-label="Rima Das home"
          >
            RD<span className="text-text-brand">.</span>
          </Link>

          <Link
            href="/writing"
            className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            All observations
          </Link>
        </nav>
      </header>

      <article>
        {/* Article hero */}
        <header className="mx-auto max-w-3xl px-5 pb-12 pt-16 md:px-8 md:pt-24">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-text-muted">
            <span>UX Observation</span>
            <span>·</span>
            <span>Travel</span>
            <span>·</span>
            <span>Independent Analysis</span>
          </div>

          <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            The Boarding Point Disappeared. The Confusion Didn&apos;t.
          </h1>

          <p className="mt-6 text-lg leading-8 text-text-muted md:text-xl">
            A small UX observation on boarding-point clarity, time-sensitive
            information, and the value of a little context.
          </p>

          <div className="mt-8 border-y border-border-muted py-4 text-sm text-text-muted">
            An independent UX observation by Rima Das
          </div>
        </header>

        {/* Article content */}
        <div className="mx-auto max-w-3xl space-y-6 px-5 pb-24 md:px-8">
          <Paragraph>
            I was trying to book a bus from Pune to Raipur through the redBus
            app. What followed was a small but frustrating experience that made
            me look at the interface differently.
          </Paragraph>

          <Paragraph>
            Earlier, I had seen a boarding point close to my location. The bus
            card showed a time of 16:00, and I assumed I could board at the
            nearby point around that time.
          </Paragraph>

          <Paragraph>I went there and waited.</Paragraph>

          <Paragraph>
            When I checked the app again closer to departure, the boarding point
            I remembered was no longer visible. The next available point shown
            was Sangamwadi, much farther away.
          </Paragraph>

          <Paragraph>
            By the time I understood what had changed, reaching the new point
            was no longer practical. I missed my bus.
          </Paragraph>

          <Paragraph>
            It was an ordinary travel problem, but it raised an interesting
            design question:
          </Paragraph>

          <blockquote className="border-l-2 border-brand py-2 pl-5 text-xl font-medium leading-8 tracking-tight md:text-2xl">
            What happens when information is technically correct but
            doesn&apos;t give users enough context to make the right decision?
          </blockquote>

          <section className="grid items-center gap-8 py-6 md:grid-cols-[minmax(0,1fr)_240px] md:gap-10">
            {/* Problem explanation */}
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.16em] text-text-muted">
                01 / The problem
              </p>

              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                The problem wasn&apos;t necessarily the data
              </h2>

              <Paragraph>
                Looking back, the issue wasn&apos;t simply that the app
                displayed the wrong information. The boarding options appeared
                to change as departure approached, with earlier pickup points no
                longer available.
              </Paragraph>

              <Paragraph>
                The problem was how little the interface communicated about that
                change.
              </Paragraph>

              <Paragraph>
                I couldn&apos;t easily tell whether the nearby boarding point
                was still valid, whether the bus had already passed it, or
                whether I needed to choose another location.
              </Paragraph>

              <Paragraph>
                When information changes over time, users need more than the
                latest state. They need to understand what changed and what it
                means for them.
              </Paragraph>
            </div>

            {/* Phone mockup */}
            <figure className="mx-auto w-full max-w-[240px]">
              <Image
                src={`${imageBase}/problem-phone-mockup.png?v=20261016`}
                alt="redBus mobile interface showing boarding-point information"
                width={2098}
                height={4544}
                sizes="(max-width: 768px) 70vw, 240px"
                className="h-auto w-full rounded-[2rem] border border-border-muted shadow-lg"
              />

              <figcaption className="mt-3 text-center text-xs leading-5 text-text-muted">
                The boarding-point information that prompted this UX
                observation.
              </figcaption>
            </figure>
          </section>

          <h2 className="pt-10 text-2xl font-semibold tracking-tight md:text-3xl">
            Two small changes that could make the experience clearer
          </h2>

          <Paragraph>
            I didn&apos;t think the entire booking experience needed to be
            redesigned. The opportunity was to introduce a little more context
            at the moments when it mattered most.
          </Paragraph>

          <h3 className="pt-5 text-xl font-semibold tracking-tight">
            01. Make the pickup location and time explicit
          </h3>

          <Paragraph>
            A short line above the bus details could communicate where pickup
            begins and when it starts.
          </Paragraph>

          <blockquote className="rounded-lg bg-surface px-5 py-4 text-base font-medium leading-7">
            Pickup starts from Rudra Parking, Nigdi at 15:00.
          </blockquote>

          <Paragraph>
            This gives users an immediate reference point instead of asking them
            to infer the pickup timing from the bus&apos;s departure time.
          </Paragraph>

          <Paragraph>
            The goal isn&apos;t to add more information everywhere. It&apos;s to
            make the information that matters easier to find before the user
            commits to a journey.
          </Paragraph>

          <ArticleImage
            src="pickup-time-before-after.png"
            alt="Before-and-after comparison showing the proposed pickup location and time message"
            caption="Proposed improvement 01 — make the pickup location and time explicit."
          />

          <h3 className="pt-5 text-xl font-semibold tracking-tight">
            02. Clearly indicate when boarding points have passed
          </h3>

          <Paragraph>
            The second improvement focuses on a different question:
            <em> Have I already missed this boarding point?</em>
          </Paragraph>

          <Paragraph>
            A contextual message could make that state explicit:
          </Paragraph>

          <blockquote className="rounded-lg bg-surface px-5 py-4 text-base font-medium leading-7">
            Rudra Parking, Nigdi (15:00) has passed.
          </blockquote>

          <Paragraph>
            A smaller indicator such as &quot;3 stops passed&quot; could provide
            the same context at a glance.
          </Paragraph>

          <Paragraph>
            On the main screen, I wouldn&apos;t display every past and upcoming
            stop if doing so made the layout harder to scan. Instead, the full
            boarding-point list could show the complete sequence, with passed
            stops visually de-emphasised and identified as unavailable.
          </Paragraph>

          <Paragraph>
            That keeps the primary interface focused while making the complete
            journey available when users need more detail.
          </Paragraph>

          <ArticleImage
            src="passed-stops-before-after.png"
            alt="Before-and-after comparison showing how passed boarding points could be identified"
            caption="Proposed improvement 02 — make passed boarding points clear."
          />

          <ArticleImage
            src="expanded-boarding-list.png"
            alt="Expanded boarding-point list with passed stops visually de-emphasised"
            caption="The expanded list preserves the full sequence without crowding the main screen."
          />

          <Paragraph>
            Together, these changes aim to answer three practical questions:
          </Paragraph>

          <ul className="list-disc space-y-2 pl-6 text-base leading-8 text-foreground/85">
            <li>Where does the pickup begin?</li>
            <li>Has this boarding point already passed?</li>
            <li>Which available point should I consider next?</li>
          </ul>

          <Paragraph>
            They are small changes, but they make the state of the journey
            easier to understand.
          </Paragraph>

          <h2 className="pt-10 text-2xl font-semibold tracking-tight md:text-3xl">
            Why this matters
          </h2>

          <Paragraph>
            We often think about usability in terms of navigation, layouts, and
            the number of steps in a flow. Those things matter, but clarity
            matters just as much.
          </Paragraph>

          <Paragraph>
            An interface can display valid information and still leave users
            uncertain about what to do next. The problem is especially
            noticeable when information is time-sensitive and the available
            options change while a user is making a decision.
          </Paragraph>

          <Paragraph>
            In this case, I wasn&apos;t looking to introduce a new feature or
            rethink the booking flow. I wanted to make an existing interaction
            more understandable through a few carefully placed messages.
          </Paragraph>

          <Paragraph>
            The broader lesson for me was simple: sometimes the most useful
            improvement isn&apos;t another feature. It&apos;s explaining the
            state the user is already in.
          </Paragraph>

          <h2 className="pt-10 text-2xl font-semibold tracking-tight md:text-3xl">
            An unexpected follow-up
          </h2>

          <Paragraph>
            I shared my observations and sent the feedback directly to redBus,
            which acknowledged it.
          </Paragraph>

          <Paragraph>
            A few months later, when I checked the app again, I noticed changes
            to the boarding-point experience that seemed to address a similar
            clarity issue. The implementation wasn&apos;t exactly what I had
            proposed.
          </Paragraph>

          <Paragraph>
            I can&apos;t say whether my feedback contributed to those changes,
            and I wouldn&apos;t want to claim that it did without confirmation.
            But seeing the experience evolve in a similar direction was
            meaningful to me.
          </Paragraph>

          <Paragraph>
            It reminded me why I enjoy looking closely at everyday interactions.
            You don&apos;t always need a large redesign to identify an
            opportunity to make a product easier to understand. Sometimes, you
            just need to notice where the experience leaves a question
            unanswered.
          </Paragraph>

          <Paragraph>
            For me, this was a valuable reminder that UX is not only about how
            an interface looks or how efficiently a flow works on paper.
            It&apos;s also about helping people understand what&apos;s happening
            at the moment they need that understanding.
          </Paragraph>

          <blockquote className="border-l-2 border-brand py-2 pl-5 text-xl font-medium leading-8 tracking-tight md:text-2xl">
            Good UX doesn&apos;t always need to say more. It needs to make the
            right thing clear at the right time.
          </blockquote>

          <p className="pt-6 text-sm leading-7 text-text-muted">
            This is an independent UX observation based on my personal
            experience. It is not an official redBus case study.
          </p>

          <div className="border-t border-border-muted pt-8">
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7441775172782563328/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-text-brand"
            >
              View original LinkedIn post
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </article>

      <footer className="border-t border-border-muted px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link
            href="/writing"
            className="text-sm text-text-muted transition-colors hover:text-foreground"
          >
            ← All UX Observations
          </Link>

          <Link
            href="/"
            className="text-sm text-text-muted transition-colors hover:text-foreground"
          >
            Back to portfolio
          </Link>
        </div>
      </footer>
    </main>
  );
}
