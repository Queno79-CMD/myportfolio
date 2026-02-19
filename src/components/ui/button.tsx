"use client";

import Link from "next/link";
import type React from "react";

import { cn } from "@/lib/utils";
import { useGlitch } from "@/components/layout/glitch-transition";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-cyan-400/15 text-cyan-100 ring-1 ring-cyan-300/30 hover:bg-cyan-400/20 hover:ring-cyan-300/45",
  secondary:
    "bg-emerald-400/10 text-emerald-100 ring-1 ring-emerald-300/25 hover:bg-emerald-400/15 hover:ring-emerald-300/40",
  ghost:
    "bg-transparent text-slate-100 ring-1 ring-white/10 hover:bg-white/5 hover:ring-white/15",
};

export function Button({
  className,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

export function ButtonLink({
  className,
  variant = "primary",
  href,
  onClick,
  ...props
}: React.ComponentProps<typeof Link> & { variant?: Variant }) {
  const { triggerGlitch } = useGlitch();

  return (
    <Link
      className={cn(base, variants[variant], className)}
      href={href}
      onClick={(e) => {
        triggerGlitch();
        onClick?.(e);
      }}
      {...props}
    />
  );
}

