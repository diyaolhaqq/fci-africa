import type { Metadata } from "next";
import { FadeIn } from "@/components/animations";
import { Icon } from "@/components/icon";
import { ButtonLink, Card, Container, PageHeader, SectionHeading } from "@/components/ui";
import { partnerGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with FCI Africa as a university, lab, compute provider, research organization, or sponsor.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="A research infrastructure network for African scientific capability."
        body="FCI Africa works with universities, labs, compute providers, research organizations, and sponsors who want to help African builders participate seriously in frontier science."
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
              title="Provide compute, credibility, mentorship, or pathways to deployment."
              body="The strongest partners help convert infrastructure into research output: credits, GPUs, cloud support, faculty review, lab access, datasets, safety expertise, fellow visibility, and long-term institutional pathways."
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
