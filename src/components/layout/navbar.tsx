"use client";

import Link from "next/link";

import { useGlitch } from "@/components/layout/glitch-transition";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar({ className }: { className?: string }) {
  const { triggerGlitch } = useGlitch();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur",
        className,
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="#top"
          onClick={() => triggerGlitch()}
          className="font-semibold tracking-tight text-slate-50 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
          aria-label={`Go to top — ${siteConfig.name}`}
        >
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => triggerGlitch()}
              className="text-sm text-slate-300 hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          onClick={() => triggerGlitch()}
          className="rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          aria-label="Jump to contact section"
        >
          Contact
        </Link>
      </Container>
    </header>
  );
}

