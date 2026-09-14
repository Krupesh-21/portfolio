function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6 sm:px-8">
          <a
            href="#top"
            className="font-mono text-xs font-semibold uppercase tracking-wider text-terracotta hover:opacity-80"
          >
            Krupesh Joshi
          </a>
          <nav className="flex items-center gap-7 font-mono text-xs text-muted">
            <a href="#work" className="hover:text-ink transition-colors">
              Work
            </a>
            <a href="#experience" className="hover:text-ink transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-ink transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:px-8">
        {/* Hero */}
        <section className="border-b border-line pb-24 pt-4">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl font-medium leading-[1.12] tracking-tight text-ink sm:text-5xl md:text-[3.25rem]">
                Krupesh Joshi
              </h1>
              <p className="mt-5 text-xl leading-relaxed tracking-tight text-ink sm:text-2xl">
                Senior Frontend Engineer building performance-critical,
                data-heavy web applications.
              </p>
              <p className="mt-6 max-w-2xl text-[1.05rem] leading-[1.75] text-muted">
                I'm a frontend engineer with five years of experience taking
                React and TypeScript applications from prototype to production,
                with a particular focus on performance and architecture. I've
                contributed to a legacy AngularJS migration, shipped a
                Progressive Web App end to end, and cut load times and bundle
                sizes through deliberate engineering decisions rather than
                guesswork. Outside my day job, I contribute to open-source Go
                projects and build complete, production-quality frontend systems
                on my own, like the two case studies below.
              </p>
              <div className="mt-8 flex items-center gap-8 text-sm font-medium">
                <a href="#work" className="accent-link">
                  View my work
                </a>
                <a href="#contact" className="accent-link">
                  Get in touch
                </a>
              </div>
            </div>

            <div className="hidden shrink-0 flex-col items-center pt-2 md:flex">
              <div className="flex h-28 w-28 items-center justify-center rounded border border-line bg-line-subtle/60">
                <span className="font-display text-3xl font-medium tracking-tight text-terracotta">
                  KJ
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section id="work" className="border-b border-line py-24">
          <span className="mb-14 block font-mono text-xs font-semibold uppercase tracking-widest text-terracotta">
            Featured Work
          </span>

          <div className="space-y-24">
            <CaseStudy
              index="01 / Client-side data tooling"
              name="Reconcile"
              description="A browser-based tool that diffs two CSV files and merges them, entirely client-side, nothing ever uploaded."
              tags={[
                "React",
                "TypeScript",
                "Web Workers",
                "TanStack Virtual",
                "Zustand",
              ]}
              detail="Comparing and merging spreadsheets with tens of thousands of rows without freezing the browser meant moving the diff computation into a Web Worker and rendering the results with virtualization instead of pagination, so only visible rows are ever in the DOM."
              demoHref="https://reconcile-gamma.vercel.app/"
              codeHref="https://github.com/Krupesh-21/reconcile"
            />
            <div className="w-24 border-t border-line-subtle" />
            <CaseStudy
              index="02 / Data visualization"
              name="Untangle"
              description="An interactive, canvas-rendered explorer for company ownership networks, laid out by a real force-directed physics simulation running in a Web Worker."
              tags={[
                "React",
                "TypeScript",
                "Canvas 2D",
                "d3-force",
                "Web Workers",
              ]}
              detail="With hundreds of connected nodes, rendering each as a DOM element breaks down fast, so the graph is drawn on canvas instead, with hand-rolled hit-testing, and paired with a fully accessible table view since canvas content is invisible to screen readers by default."
              demoHref="https://untangle-inky.vercel.app/"
              codeHref="https://github.com/Krupesh-21/untangle"
            />
          </div>
        </section>

        {/* Experience, corrected to match only verified facts */}
        <section id="experience" className="border-b border-line py-24">
          <span className="mb-14 block font-mono text-xs font-semibold uppercase tracking-widest text-terracotta">
            Experience
          </span>

          <div className="space-y-14">
            <ExperienceEntry
              title="Senior Software Engineer"
              company="Intech Creative Services"
              note="(Client: DP World)"
              dates="2026 – Present"
              description="Contributing to a React and TypeScript rebuild of a customer-facing logistics portal, replacing a legacy AngularJS application with a modern, component-based architecture."
            />
            <ExperienceEntry
              title="Software Development Engineer II"
              company="Zuru Tech"
              dates="2024 – 2026"
              description="Led adoption of RTK Query across multiple internal products, reducing redundant network calls and improving rendering performance. Owned end-to-end development of a Progressive Web App for trending-video analytics, and shipped a Gemini AI-powered Chrome extension for Microsoft Teams delivering real-time chat suggestions."
            />
            <ExperienceEntry
              title="Software Engineer"
              company="Valens Datalabs"
              dates="2023"
              description="Reduced initial bundle size by 20 percent and cut load time from 5 seconds to 3 seconds by implementing React code splitting via dynamic imports, a 15-point Lighthouse improvement."
            />
            <ExperienceEntry
              title="Software Developer"
              company="Brilworks Software"
              dates="2021 – 2023"
              description="Built a hardware-integrated badge-printing feature using Fabric.js and the Zebra printer SDK, and integrated AWS Chime SDK for real-time peer-to-peer audio and video calling."
            />
          </div>
        </section>

        {/* Open Source */}
        <section className="border-b border-line py-20">
          <span className="mb-8 block font-mono text-xs font-semibold uppercase tracking-widest text-terracotta">
            Also building in public
          </span>
          <div className="max-w-2xl space-y-4">
            <p className="text-[0.95rem] leading-[1.65] text-muted">
              <span className="mr-1.5 font-mono text-xs font-semibold text-ink">
                floatpane/matcha
              </span>
              Fixed a memory leak in a 229-star terminal email client by
              replacing an unbounded cache with a size-capped LRU cache, merged
              within 24 hours.
            </p>
            <p className="text-[0.95rem] leading-[1.65] text-muted">
              <span className="mr-1.5 font-mono text-xs font-semibold text-ink">
                agjmills/trove
              </span>
              Built a full-stack sortable file-listing feature across Go and
              JavaScript, shipped in v0.10.0.
            </p>
          </div>
        </section>

        {/* Contact, real details only */}
        <footer id="contact" className="pb-16 pt-24">
          <div className="max-w-2xl space-y-8">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
              Open to senior remote frontend roles and select freelance
              projects.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2 font-mono text-xs">
              <a href="mailto:krupeshjoshi21@gmail.com" className="accent-link">
                Email
              </a>
              <a
                href="https://linkedin.com/in/krupeshjoshi"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Krupesh-21"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                GitHub
              </a>
            </div>
            <div className="pt-16 font-mono text-[11px] text-muted/60">
              Krupesh Joshi &copy; 2026
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function CaseStudy({
  index,
  name,
  description,
  tags,
  detail,
  demoHref,
  codeHref,
}: {
  index: string;
  name: string;
  description: string;
  tags: string[];
  detail: string;
  demoHref: string;
  codeHref: string;
}) {
  return (
    <article className="space-y-5">
      <div className="font-mono text-xs tracking-wide text-muted">{index}</div>
      <h3 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
        {name}
      </h3>
      <p className="text-lg leading-relaxed text-ink">{description}</p>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-1">
        {tags.map((tag, i) => (
          <span key={tag} className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted">{tag}</span>
            {i < tags.length - 1 && (
              <span className="font-mono text-xs text-muted/40">/</span>
            )}
          </span>
        ))}
      </div>
      <p className="max-w-2xl pt-2 text-[0.98rem] leading-[1.72] text-muted">
        {detail}
      </p>
      <div className="flex items-center gap-6 pt-3 text-sm font-medium">
        <a href={demoHref} className="accent-link">
          Live demo
        </a>
        <a href={codeHref} className="accent-link">
          View code
        </a>
      </div>
    </article>
  );
}

function ExperienceEntry({
  title,
  company,
  note,
  dates,
  description,
}: {
  title: string;
  company: string;
  note?: string;
  dates: string;
  description: string;
}) {
  return (
    <article className="space-y-2.5">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <h3 className="font-display text-xl font-medium text-ink">
          {title} <span className="font-normal text-muted">at</span> {company}{" "}
          {note && (
            <span className="text-base font-normal text-muted">{note}</span>
          )}
        </h3>
        <span className="shrink-0 font-mono text-xs text-muted sm:text-right">
          {dates}
        </span>
      </div>
      <p className="max-w-2xl text-[0.95rem] leading-[1.68] text-muted">
        {description}
      </p>
    </article>
  );
}

export default App;
