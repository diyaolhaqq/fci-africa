import type { Metadata } from "next";
import { FadeIn } from "@/components/animations";
import { Card, Container, PageHeader, SectionHeading } from "@/components/ui";
import { principles } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Frontier Compute Initiative exists and how FCI Africa approaches AI infrastructure, open science, and African scientific sovereignty.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About FCI Africa"
        title="A scientific infrastructure initiative for Africa's AI era."
        body="Frontier Compute Initiative exists because the next generation of African researchers should be able to ask frontier questions with frontier tools."
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr]">
            <SectionHeading
              eyebrow="Why this exists"
              title="Compute access is now a scientific capability."
              body="AI models, GPUs, high-quality datasets, simulation environments, and modern engineering tools have become part of the laboratory. Without them, promising ideas stay trapped in proposals, notebooks, and underpowered laptops."
            />
            <div className="grid gap-4">
              {[
                "Africa has world-class ambition, urgent scientific problems, and a young technical population.",
                "The limiting factor is often not talent, but the infrastructure required to experiment at modern speed.",
                "FCI Africa turns compute into a shared scientific resource for researchers building work that can become public knowledge.",
              ].map((statement, index) => (
                <FadeIn key={statement} delay={index * 0.06}>
                  <div className="rounded-lg border border-line bg-white/[0.035] p-6 text-lg leading-8 text-foreground">
                    {statement}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Long-term vision"
            title="Africa should own more of the scientific stack."
            body="The initiative is designed to help build durable capability: trained researchers, reusable datasets, open tools, stronger university networks, frontier model literacy, and technical confidence in fields that matter to the continent and the world."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {principles.map((principle, index) => (
              <FadeIn key={principle.title} delay={index * 0.05}>
                <Card className="h-full">
                  <h3 className="text-xl font-semibold text-foreground">{principle.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-muted">{principle.body}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Transparency",
                body: "Clear criteria, documented decisions, visible outputs, and accountable program design.",
              },
              {
                title: "Frontier research",
                body: "Support for ambitious work in AI, robotics, climate, health, scientific computing, and engineering tools.",
              },
              {
                title: "Public benefit",
                body: "Projects are selected for credible scientific merit and the potential to create knowledge others can build on.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <p className="text-lg font-semibold text-foreground">{item.title}</p>
                <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
