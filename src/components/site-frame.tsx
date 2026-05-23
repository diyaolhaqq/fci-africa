"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CursorGlow } from "@/components/animations";
import { Container } from "@/components/ui";
import { navItems } from "@/lib/content";

export function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <CursorGlow />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(180deg,rgba(244,246,242,0.035),transparent_18%,transparent_74%,rgba(114,242,165,0.035))]" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/82 backdrop-blur-xl">
        <Container className="flex h-[72px] items-center justify-between">
          <Link href="/" className="focus-ring flex items-center gap-3 rounded-md" aria-label="FCI Africa home">
            <span className="grid h-9 w-9 place-items-center rounded-md border border-accent/40 bg-accent/10 text-sm font-semibold text-accent">
              FCI
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-semibold text-foreground">Frontier Compute Initiative</span>
              <span className="block text-xs text-muted">FCI Africa</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-ring rounded-md px-3 py-2 text-sm transition ${
                    active ? "bg-white/[0.06] text-foreground" : "text-muted hover:bg-white/[0.045] hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/apply"
              className="focus-ring rounded-md border border-accent/50 bg-accent px-4 py-2 text-sm font-semibold text-[#07100b] transition hover:bg-[#9af8bd]"
            >
              Apply
            </Link>
          </div>

          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white/[0.035] text-foreground lg:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </Container>

      </header>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24 }}
            style={{ top: 72 }}
            className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto border-t border-line bg-background lg:hidden"
            aria-label="Mobile navigation"
          >
            <Container className="grid gap-1 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-md px-3 py-3 text-sm text-muted transition hover:bg-white/[0.05] hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/apply"
                onClick={() => setOpen(false)}
                className="focus-ring mt-2 rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-[#07100b]"
              >
                Apply for Funding
              </Link>
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="relative z-10 border-t border-line bg-[#060707]">
        <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-accent/40 bg-accent/10 text-sm font-semibold text-accent">
                FCI
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Frontier Compute Initiative</p>
                <p className="text-xs text-muted">Accelerating African scientific breakthroughs.</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted">
              An independent African scientific and AI infrastructure initiative supporting students,
              researchers, engineers, scientists, and innovators with frontier compute access.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-foreground">Institution</p>
            <div className="grid gap-2">
              {navItems.slice(0, 5).map((item) => (
                <Link key={item.href} href={item.href} className="focus-ring rounded-md text-sm text-muted hover:text-foreground">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-foreground">Engage</p>
            <div className="grid gap-2">
              {navItems.slice(5).map((item) => (
                <Link key={item.href} href={item.href} className="focus-ring rounded-md text-sm text-muted hover:text-foreground">
                  {item.label}
                </Link>
              ))}
              <Link href="/apply" className="focus-ring rounded-md text-sm text-accent hover:text-[#a6ffc5]">
                Apply for funding
              </Link>
            </div>
          </div>
        </Container>
        <Container className="flex flex-col gap-3 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Frontier Compute Initiative. FCI Africa.</p>
          <p>Built for frontier research, open science, and African scientific capability.</p>
        </Container>
      </footer>
    </div>
  );
}
