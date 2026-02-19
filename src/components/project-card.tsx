"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { TerminalCard } from "@/components/kali-desktop/terminal-card";

export function ProjectCard({ project }: { project: Project }) {
  const hasLive = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(34, 211, 238, 0.15)" }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="h-full group"
    >
      <TerminalCard
        title={project.title}
        date="~/dev"
        className="h-full bg-slate-950/80"
      >
        <article className="flex h-full flex-col">
          {/* Title is already in Terminal Header, so we skip it here */}

          <p className="mt-1 text-sm leading-relaxed text-slate-300">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 ring-1 ring-white/10",
                "hover:bg-white/10 hover:ring-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
              )}
              aria-label={`Open GitHub for ${project.title}`}
            >
              GitHub
            </Link>

            {hasLive ? (
              <Link
                href={project.liveUrl as string}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "rounded-full bg-cyan-400/15 px-4 py-2 text-sm font-medium text-cyan-100 ring-1 ring-cyan-300/30",
                  "hover:bg-cyan-400/20 hover:ring-cyan-300/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                )}
                aria-label={`Open live demo for ${project.title}`}
              >
                Live demo
              </Link>
            ) : (
              <span className="text-sm text-slate-400" aria-label="Live demo not available">
                Live demo N/A
              </span>
            )}
          </div>
        </article>
      </TerminalCard>
    </motion.div>
  );
}

