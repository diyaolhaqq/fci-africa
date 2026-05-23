import type { Metadata } from "next";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { ButtonLink, Card, Container, PageHeader, SectionHeading } from "@/components/ui";
import { grantTiers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Grant Programs",
  description:
    "Explorer, Builder, Research, and Frontier grants for AI credits, compute access, GPU resources, mentorship, and research visibility.",
};

export default function GrantProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Grant Programs"
        title="Infrastructure grants for serious scientific builders."
        body="FCI Africa grant tiers are designed for students, researchers, engineers, scientists, and innovators who need AI credits, GPUs, model access, technical review, and visibility to move from idea to output."
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <div className="grid gap-4 lg:grid-cols-4">
            {grantTiers.map((grant, index) => (
              <FadeIn key={grant.name} delay={index * 0.05}>
                <Card className="flex h-full flex-col">
                  <p className="text-sm text-accent">{grant.name}</p>
                  <p className="mt-5 text-4xl font-semibold text-foreground">{grant.amount}</p>
                  <p className="mt-5 flex-1 text-sm leading-7 text-muted">{grant.audience}</p>
                  <div className="mt-8 grid gap-3">
                    {grant.includes.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                        <Check className="h-4 w-4 text-accent" aria-hidden="true" strokeWidth={1.8} />
                        <span>{item}</span>
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
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
            <SectionHeading
              eyebrow="What grants include"
              title="More than funding. A research operating layer."
              body="Every grant is structured around execution: compute credits, technical feedback, safety expectations, public output planning, and pathways to partners who can help the work mature."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "AI and LLM credits",
                "GPU and cloud compute resources",
                "technical mentorship and review",
                "research output and demo visibility",
                "model evaluation guidance",
                "partner and lab introductions",
              ].map((item) => (
                <div key={item} className="rounded-lg border border-line bg-white/[0.03] p-5 text-sm font-medium text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <Card>
              <h2 className="text-2xl font-semibold text-foreground">Eligibility</h2>
              <div className="mt-8 grid gap-5 text-sm leading-7 text-muted">
                <p>Applicants may be university students, graduate researchers, faculty-adjacent builders, independent engineers, or technical teams working on African scientific problems.</p>
                <p>Projects should have a clear research question, technical plan, compute requirement, expected public output, and a thoughtful approach to safety and responsible deployment.</p>
              </div>
            </Card>
            <Card>
              <h2 className="text-2xl font-semibold text-foreground">Review timeline</h2>
              <div className="mt-8 grid gap-5 text-sm leading-7 text-muted">
                <p>Applications are reviewed in program cycles. Shortlisted teams may receive technical questions before final selection.</p>
                <p>Selected projects receive access instructions, output milestones, and a lightweight research development plan.</p>
              </div>
              <div className="mt-8">
                <ButtonLink href="/apply">Start Application</ButtonLink>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
