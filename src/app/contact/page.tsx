import type { Metadata } from "next";
import { Mail, Newspaper, UsersRound } from "lucide-react";
import { ButtonLink, Card, Container, PageHeader, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact FCI Africa for applications, partnerships, media, research collaborations, and institutional inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to FCI Africa."
        body="Reach out about applications, partnerships, media, research collaborations, compute sponsorships, and institutional participation."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
            <div className="grid gap-4">
              {[
                {
                  icon: Mail,
                  title: "General inquiries",
                  body: "Questions about grants, eligibility, review cycles, or the initiative.",
                  email: "hello@fciafrica.org",
                },
                {
                  icon: UsersRound,
                  title: "Partnerships",
                  body: "Universities, labs, compute providers, sponsors, and research organizations.",
                  email: "partners@fciafrica.org",
                },
                {
                  icon: Newspaper,
                  title: "Media",
                  body: "Press, public announcements, speaking opportunities, and coverage.",
                  email: "media@fciafrica.org",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title}>
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" strokeWidth={1.7} />
                    <h2 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
                    <a href={`mailto:${item.email}`} className="focus-ring mt-5 inline-flex rounded-md text-sm font-semibold text-accent">
                      {item.email}
                    </a>
                  </Card>
                );
              })}
            </div>

            <Card className="bg-[#0a0d0b]">
              <SectionHeading
                eyebrow="Inquiry form"
                title="Send a concise note."
                body="Share who you are, what you are working on, and how FCI Africa can help or collaborate."
              />
              <form className="mt-8 grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-foreground">Name</span>
                    <input className="focus-ring h-12 rounded-md border border-line bg-background/80 px-4 text-sm text-foreground placeholder:text-muted/60" placeholder="Your name" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-foreground">Email</span>
                    <input type="email" className="focus-ring h-12 rounded-md border border-line bg-background/80 px-4 text-sm text-foreground placeholder:text-muted/60" placeholder="you@example.com" />
                  </label>
                </div>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-foreground">Inquiry type</span>
                  <select className="focus-ring h-12 rounded-md border border-line bg-background/80 px-4 text-sm text-foreground">
                    <option>Application</option>
                    <option>Partnership</option>
                    <option>Media</option>
                    <option>Research collaboration</option>
                    <option>Data collection program</option>
                    <option>Physical AI or robotics testbed</option>
                    <option>Compute sponsorship</option>
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-foreground">Message</span>
                  <textarea className="focus-ring min-h-40 rounded-md border border-line bg-background/80 px-4 py-3 text-sm leading-7 text-foreground placeholder:text-muted/60" placeholder="Write the context, objective, and next step." />
                </label>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-6 text-muted">For time-sensitive partnerships, email partners@fciafrica.org.</p>
                  <ButtonLink href="mailto:hello@fciafrica.org">Send Inquiry</ButtonLink>
                </div>
              </form>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
