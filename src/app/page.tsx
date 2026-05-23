import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedCounter, FadeIn, Lift, ParticleField } from "@/components/animations";
import { Icon } from "@/components/icon";
import { ButtonLink, Card, Container, Eyebrow, IconSurface, SectionHeading, TextLink } from "@/components/ui";
import { featuredResearch, metrics, processSteps, researchTracks } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line pt-28">
        <div className="absolute inset-0 -z-10 surface-grid opacity-45" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent,rgba(5,6,6,0.88)_84%)]" aria-hidden="true" />
        <ParticleField />
        <Container className="relative flex min-h-[82svh] flex-col justify-center pb-16 pt-8 md:pb-20">
          <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.62fr]">
            <FadeIn className="max-w-5xl">
              <Eyebrow>Frontier Compute Initiative · FCI Africa</Eyebrow>
              <h1 className="text-balance text-5xl font-semibold text-foreground md:text-7xl lg:text-8xl">
                Building Africa&apos;s Scientific Future.
              </h1>
              <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-muted md:text-xl">
                Frontier Compute Initiative provides frontier AI and compute infrastructure grants
                to Africa&apos;s next generation of researchers, scientists, and engineers.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/apply">Apply for Funding</ButtonLink>
                <ButtonLink href="/research-tracks" variant="secondary">
                  Explore Research Tracks
                </ButtonLink>
              </div>
            </FadeIn>
            <FadeIn delay={0.18}>
              <div className="topographic rounded-lg border border-line bg-background/66 p-5 backdrop-blur-sm">
                <div className="mb-10 flex items-center justify-between text-xs text-muted">
                  <span>ACC · KMS · TML</span>
                  <span>05.6037°N</span>
                </div>
                <div className="grid gap-4">
                  {["AI research", "Scientific computing", "Autonomous systems"].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-md border border-accent/30 bg-accent/10 text-xs font-semibold text-accent">
                        0{index + 1}
                      </span>
                      <span className="text-sm text-foreground">{item}</span>
                      <span className="h-px flex-1 bg-line" aria-hidden="true" />
                      <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" strokeWidth={1.7} />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Mission"
            title="Africa should not only consume AI. Africa should help shape it."
            body="Compute access is becoming a condition for serious scientific participation. FCI Africa exists to close the infrastructure gap for brilliant students, researchers, and builders whose work needs models, GPUs, data systems, and technical review."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Infrastructure gap", "Many African research teams have the talent and questions, but not the compute budget to test frontier ideas."],
              ["Distributed brilliance", "Scientific capability is not concentrated in one geography. Access should not be either."],
              ["AI as a multiplier", "LLMs, simulation, and agentic tools can compress the path from hypothesis to prototype."],
              ["Public advancement", "FCI prioritizes outputs that strengthen scientific capacity beyond a single awardee."],
            ].map(([title, body], index) => (
              <FadeIn key={title} delay={index * 0.06}>
                <Card className="h-full">
                  <p className="mb-4 text-sm font-semibold text-foreground">{title}</p>
                  <p className="text-sm leading-7 text-muted">{body}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-5">
            {metrics.map((metric, index) => (
              <FadeIn key={metric.label} delay={index * 0.04}>
                <Card className="h-full p-5">
                  <p className="mb-6 text-xs text-accent">{metric.note}</p>
                  <p className="text-3xl font-semibold text-foreground">
                    <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                  </p>
                  <p className="mt-4 text-sm leading-6 text-muted">{metric.label}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Research Tracks"
              title="Built around the scientific systems Africa needs next."
              body="FCI grants support applied and foundational work where frontier AI infrastructure can unlock serious technical progress."
            />
            <TextLink href="/research-tracks">Explore all tracks</TextLink>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {researchTracks.map((track) => (
              <Lift key={track.slug}>
                <Card className="group h-full transition hover:border-accent/45 hover:bg-white/[0.055]">
                  <IconSurface name={track.icon} />
                  <h3 className="mt-7 text-xl font-semibold text-foreground">{track.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{track.summary}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent">
                    <span>Explore Track</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </Card>
              </Lift>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Program Flow"
            title="A rigorous path from application to public research output."
            body="The program is intentionally structured like a frontier research fellowship: technical review, infrastructure allocation, development support, and public demonstration."
          />
          <div className="mt-14 grid gap-4 lg:grid-cols-6">
            {processSteps.map((step, index) => (
              <FadeIn key={step} delay={index * 0.05}>
                <div className="relative h-full rounded-lg border border-line bg-white/[0.03] p-5">
                  <p className="text-sm font-semibold text-accent">0{index + 1}</p>
                  <p className="mt-6 min-h-12 text-base font-semibold text-foreground">{step}</p>
                  {index < processSteps.length - 1 ? (
                    <span className="absolute right-5 top-6 hidden h-px w-10 bg-accent/40 lg:block" aria-hidden="true" />
                  ) : null}
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Featured Research"
              title="Representative research directions with real technical seriousness."
              body="Representative projects show the kind of public-interest scientific work compute grants are designed to accelerate."
            />
            <TextLink href="/research-outputs">View outputs</TextLink>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {featuredResearch.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.04} className={index < 2 ? "lg:col-span-2" : ""}>
                <Card className="relative h-full overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-accent/70" aria-hidden="true" />
                  <p className="mb-5 text-xs text-accent">{project.signal}</p>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted">{project.track}</p>
                  <p className="mt-5 text-sm leading-7 text-muted">{project.summary}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="overflow-hidden rounded-lg border border-line bg-[#0a0d0b]">
            <div className="grid gap-10 p-8 md:grid-cols-[1fr_0.54fr] md:p-12">
              <div>
                <Icon name="orbit" className="mb-8 h-10 w-10 text-accent" />
                <h2 className="text-balance text-3xl font-semibold text-foreground md:text-5xl">
                  The next scientific breakthrough from Africa may already exist. It simply needs infrastructure.
                </h2>
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-base leading-8 text-muted">
                  Help build the grant, compute, and research visibility layer for a new generation of African
                  scientists and engineers.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                  <ButtonLink href="/apply">Apply Now</ButtonLink>
                  <ButtonLink href="/partners" variant="secondary">
                    Become a Partner
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
