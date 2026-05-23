import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Icon } from "@/components/icon";
import type { IconName } from "@/lib/content";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
      <span className="h-1.5 w-1.5 rounded-sm bg-accent" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-balance text-3xl font-semibold text-foreground md:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-pretty text-base leading-8 text-muted md:text-lg">{body}</p> : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition";
  const style =
    variant === "primary"
      ? "bg-accent text-[#07100b] hover:bg-[#9af8bd]"
      : "border border-line bg-white/[0.03] text-foreground hover:border-accent/50 hover:bg-white/[0.06]";

  return (
    <Link href={href} className={`${base} ${style}`}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
    </Link>
  );
}

export function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-[#a6ffc5]"
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
      {external ? (
        <ExternalLink aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
      ) : (
        <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
      )}
    </Link>
  );
}

export function IconSurface({ name }: { name: IconName }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white/[0.04] text-accent">
      <Icon name={name} className="h-5 w-5" />
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-lg border border-line bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] ${className}`}>
      {children}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="relative border-b border-line pt-28 md:pt-36">
      <div className="absolute inset-0 -z-10 surface-grid opacity-50" aria-hidden="true" />
      <Container className="pb-16 md:pb-24">
        <div className="max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-balance text-4xl font-semibold text-foreground md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-muted md:text-xl">{body}</p>
        </div>
      </Container>
    </section>
  );
}
