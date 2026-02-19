"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("relative max-w-2xl", className)}>
      {/* Scan Line Animation */}
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute -top-6 left-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
      />

      {eyebrow && (
        <p className="text-xs font-medium tracking-[0.24em] text-cyan-200/80">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-pretty leading-relaxed text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}

