import type React from "react";

import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(15,23,42,0.9)] hover:border-cyan-300/45",
        className,
      )}
      {...props}
    />
  );
}

export function CardGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(52,211,153,0.12),transparent_50%)]" />
    </div>
  );
}

