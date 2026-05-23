import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/animations";
import { Card, Container, PageHeader, SectionHeading } from "@/components/ui";
import { fellows } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fellows and Awardees",
  description:
    "Prestigious FCI Africa awardee profiles across medical AI, robotics, climate systems, and African language AI.",
};

export default function FellowsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fellows / Awardees"
        title="A visible cohort of African scientific builders."
        body="Awardees represent the kind of rigorous, public-interest technical work FCI Africa is designed to accelerate: credible research, useful prototypes, and reusable outputs."
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {fellows.map((fellow, index) => (
              <FadeIn key={fellow.name} delay={index * 0.05}>
                <Card className="h-full overflow-hidden p-0">
                  <div className="relative h-48 border-b border-line bg-[#101411]">
                    <div className="absolute inset-0 topographic opacity-80" aria-hidden="true" />
                    <div className="absolute bottom-5 left-5 flex h-16 w-16 items-center justify-center rounded-lg border border-accent/40 bg-background/80 text-lg font-semibold text-accent backdrop-blur">
                      {fellow.initials}
                    </div>
                    <div className="absolute right-5 top-5 rounded-md border border-line bg-background/70 px-3 py-2 text-xs text-muted backdrop-blur">
                      profile
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-foreground">{fellow.name}</h2>
                    <p className="mt-2 text-sm text-muted">{fellow.university}</p>
                    <p className="mt-5 text-sm font-semibold text-accent">{fellow.area}</p>
                    <p className="mt-4 text-sm leading-7 text-muted">{fellow.project}</p>
                    <div className="mt-6 rounded-md border border-line bg-white/[0.03] p-3">
                      <p className="text-xs text-muted">Outputs</p>
                      <p className="mt-2 text-sm text-foreground">{fellow.outputs}</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Link href="/research-outputs" className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-accent">
                        Research profile
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Cohort standard"
            title="Prestige comes from output discipline."
            body="FCI fellows are expected to document their work, publish artifacts where possible, share limitations, and leave a technical trail that other African researchers can learn from."
          />
        </Container>
      </section>
    </>
  );
}
