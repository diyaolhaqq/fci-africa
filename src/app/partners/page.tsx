import type { Metadata } from "next";
import { FadeIn } from "@/components/animations";
import { Icon } from "@/components/icon";
import { ButtonLink, Card, Container, PageHeader, SectionHeading } from "@/components/ui";
import {
  dataCollectionPrograms,
  datasetTrustPrinciples,
  partnerGroups,
  partnerMissionVision,
  partnerPrograms,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with FCI Africa on compute access, trusted datasets, physical AI, robotics, university research nodes, and African scientific infrastructure.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="A research infrastructure network for African scientific capability."
        body="FCI Africa works with universities, labs, compute providers, research organizations, field partners, and sponsors who want to help African builders participate seriously in frontier science, trusted data, AI, and physical AI."
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            {partnerMissionVision.map((item, index) => (
              <FadeIn key={item.label} delay={index * 0.05}>
                <div className="h-full border-l border-accent/50 pl-6 md:pl-8">
                  <p className="text-sm font-semibold text-accent">{item.label}</p>
                  <h2 className="mt-5 max-w-xl text-balance text-3xl font-semibold text-foreground md:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-muted">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Partner Programs"
            title="Programs for institutions that want to build the research stack."
            body="FCI partnership is not a logo placement. It is a practical operating model for compute, data, review, field testing, safety, and onward pathways for serious African research teams."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {partnerPrograms.map((program, index) => (
              <FadeIn key={program.title} delay={index * 0.04}>
                <Card className="h-full">
                  <Icon name={program.icon} className="h-8 w-8 text-accent" />
                  <h2 className="mt-7 text-2xl font-semibold text-foreground">{program.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-muted">{program.body}</p>
                  <div className="mt-7 grid gap-2">
                    {program.outputs.map((output) => (
                      <div key={output} className="rounded-md border border-line bg-white/[0.025] px-3 py-2 text-xs text-muted">
                        {output}
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr]">
            <SectionHeading
              eyebrow="Trusted Data"
              title="Data collection programs for AI, physical AI, and robotics."
              body="Frontier systems need more than compute. They need trusted, well-documented African datasets that can support model training, evaluation, simulation, embodied intelligence, and real-world scientific deployment."
            />
            <Card className="topographic">
              <Icon name="database" className="h-9 w-9 text-accent" />
              <h3 className="mt-7 text-2xl font-semibold text-foreground">What makes the data trusted</h3>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {datasetTrustPrinciples.map((principle) => (
                  <div key={principle} className="rounded-md border border-line bg-background/55 px-4 py-3 text-sm text-muted">
                    {principle}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dataCollectionPrograms.map((program, index) => (
              <FadeIn key={program.title} delay={index * 0.04}>
                <Card className="h-full">
                  <Icon name={program.icon} className="h-8 w-8 text-accent" />
                  <h2 className="mt-7 text-xl font-semibold text-foreground">{program.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-muted">{program.body}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {program.outputs.map((output) => (
                      <span key={output} className="rounded-md border border-line bg-white/[0.025] px-3 py-2 text-xs text-muted">
                        {output}
                      </span>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Partner Network"
            title="Who FCI Africa works with."
            body="The network brings together institutions that can contribute infrastructure, technical depth, field context, governance, and public credibility."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {partnerGroups.map((group, index) => (
              <FadeIn key={group.title} delay={index * 0.04}>
                <Card className="h-full">
                  <Icon name={group.icon} className="h-8 w-8 text-accent" />
                  <h2 className="mt-7 text-2xl font-semibold text-foreground">{group.title}</h2>
                  <div className="mt-7 grid gap-3">
                    {group.names.map((name) => (
                      <div key={name} className="rounded-md border border-line bg-white/[0.025] px-4 py-3 text-sm text-muted">
                        {name}
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 rounded-lg border border-line bg-[#0a0d0b] p-8 md:grid-cols-[1fr_0.5fr] md:p-12">
            <SectionHeading
              eyebrow="Partnership model"
              title="Provide compute, data infrastructure, field access, or pathways to deployment."
              body="The strongest partners help convert infrastructure into research output: credits, GPUs, cloud support, faculty review, lab access, trusted datasets, physical AI testbeds, safety expertise, fellow visibility, and long-term institutional pathways."
            />
            <div className="flex items-end">
              <ButtonLink href="/contact">Start Partnership Conversation</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
