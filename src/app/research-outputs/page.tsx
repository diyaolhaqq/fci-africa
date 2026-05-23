import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { Card, Container, PageHeader, SectionHeading } from "@/components/ui";
import { outputs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research Outputs",
  description:
    "Papers, open-source projects, datasets, prototypes, robotics demos, and technical reports from FCI Africa.",
};

export default function ResearchOutputsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research Outputs"
        title="Public artifacts from frontier infrastructure grants."
        body="FCI Africa treats research outputs as institutional memory: papers, open-source projects, datasets, prototypes, robotics demos, and technical reports that make future work stronger."
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <div className="grid gap-4">
            {outputs.map((output, index) => (
              <FadeIn key={output.title} delay={index * 0.04}>
                <Card className="grid gap-6 md:grid-cols-[0.18fr_1fr_0.24fr] md:items-center">
                  <div>
                    <p className="inline-flex rounded-md border border-accent/30 bg-accent/10 px-3 py-2 text-xs font-semibold text-accent">
                      {output.type}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">{output.title}</h2>
                    <p className="mt-3 text-sm text-muted">{output.authors}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4 md:justify-end">
                    <div className="text-right">
                      <p className="text-sm text-foreground">{output.status}</p>
                      <p className="mt-1 text-xs text-muted">{output.year}</p>
                    </div>
                    <button
                      type="button"
                      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition hover:border-accent/50 hover:text-accent"
                      aria-label={`Download ${output.title}`}
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr]">
            <SectionHeading
              eyebrow="Output policy"
              title="Make progress legible."
              body="Not every project becomes a paper immediately, but every serious grant should leave behind a useful technical artifact: a model card, repo, benchmark, dataset note, evaluation report, prototype demo, or reproducible notebook."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {["Papers", "Open-source projects", "Datasets", "Prototypes", "Robotics demos", "Technical reports"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-line bg-white/[0.03] p-5">
                  <FileText className="h-5 w-5 text-accent" aria-hidden="true" strokeWidth={1.7} />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
