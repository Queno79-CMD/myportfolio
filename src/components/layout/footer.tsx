import Link from "next/link";

import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-400">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <Link
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-300 hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
            aria-label="Open GitHub profile"
          >
            GitHub
          </Link>
          <Link
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-300 hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
            aria-label="Open LinkedIn profile"
          >
            LinkedIn
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-slate-300 hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
            aria-label="Send an email"
          >
            Email
          </Link>
        </div>
      </Container>
    </footer>
  );
}

