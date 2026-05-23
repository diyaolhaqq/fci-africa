import type { Metadata } from "next";
import { ApplicationFlow } from "@/components/application-flow";
import { Container, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply for FCI Africa AI, LLM, and compute grants through a multi-step frontier research fellowship application flow.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Apply"
        title="Apply for frontier AI and compute infrastructure."
        body="The application is designed to evaluate scientific merit, technical plan, compute need, expected impact, ethics, safety, and supporting evidence."
      />
      <section className="py-16 md:py-24">
        <Container>
          <ApplicationFlow />
        </Container>
      </section>
    </>
  );
}
