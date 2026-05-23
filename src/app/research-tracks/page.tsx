import type { Metadata } from "next";
import { FadeIn, Lift } from "@/components/animations";
import { Card, Container, IconSurface, PageHeader, SectionHeading } from "@/components/ui";
import { researchTracks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research Tracks",
  description:
    "FCI Africa research tracks across agriculture, robotics, climate, health, African language AI, and scientific computing.",
};

export default function ResearchTracksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research Tracks"
        title="Frontier infrastructure for Africa's highest-leverage scientific domains."
        body="The tracks are intentionally broad enough for discovery and disciplined enough for technical review. Each area connects compute access to real scientific, engineering, and public-interest needs."
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {researchTracks.map((track, index) => (
              <FadeIn key={track.slug} delay={index * 0.05}>
                <Lift className="h-full">
                  <Card className="h-full">
                    <IconSurface name={track.icon} />
                    <h2 className="mt-7 text-2xl font-semibold text-foreground">{track.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-muted">{track.summary}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {track.focus.map((item) => (
                        <span key={item} className="rounded-md border border-line bg-white/[0.035] px-3 py-2 text-xs text-muted">
                          {item}
                        </span>
                      ))}
                    </div>
                  </Card>
                </Lift>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.76fr_1fr]">
            <SectionHeading
              eyebrow="Track design"
              title="Each track is reviewed for scientific merit and infrastructure fit."
              body="FCI looks for projects where frontier AI infrastructure is not decorative. The compute request should be connected to model training, evaluation, simulation, data processing, robotics, analysis, or scientific workflow acceleration."
            />
            <div className="grid gap-4">
              {[
                "Clear research question or technical objective",
                "Evidence that compute access materially changes execution",
                "Strong plan for datasets, evaluation, safety, and documentation",
                "Public output such as paper, dataset, repository, report, benchmark, or prototype",
              ].map((item, index) => (
                <div key={item} className="flex gap-5 rounded-lg border border-line bg-white/[0.03] p-5">
                  <span className="text-sm font-semibold text-accent">0{index + 1}</span>
                  <p className="text-sm leading-7 text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
