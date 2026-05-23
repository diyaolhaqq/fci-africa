import type { Metadata } from "next";
import { FAQAccordion } from "@/components/faq-accordion";
import { Container, PageHeader, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about FCI Africa eligibility, research scope, grants, supported technologies, evaluation, and open-source expectations.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Clear answers for applicants and partners."
        body="The initiative is designed for scientific and engineering work. The questions below clarify eligibility, supported technologies, evaluation, and output expectations."
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.38fr_1fr]">
            <SectionHeading
              eyebrow="Questions"
              title="What to know before applying."
              body="If your project needs serious AI infrastructure to advance a scientific or engineering problem, the application is worth preparing."
            />
            <FAQAccordion />
          </div>
        </Container>
      </section>
    </>
  );
}
