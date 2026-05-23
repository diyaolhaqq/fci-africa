import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold text-accent">404</p>
          <h1 className="text-4xl font-semibold text-foreground md:text-6xl">This page is outside the current research map.</h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Return to the main initiative site to explore programs, tracks, fellows, and the application flow.
          </p>
          <div className="mt-8">
            <ButtonLink href="/">Go Home</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
