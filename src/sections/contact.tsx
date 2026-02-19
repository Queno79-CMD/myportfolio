import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";
import { TerminalCard } from "@/components/kali-desktop/terminal-card";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk"
            description="Send a message using the form, or reach me via email/social links."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <TerminalCard title="Contact Info" date="~/contact" className="h-full">
              <div className="space-y-4">
                <p className="text-sm text-slate-300">
                  I’m happy to chat about internships, labs, or collaborations.
                </p>

                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-slate-400">Email</p>
                    <Link
                      href={`mailto:${siteConfig.email}`}
                      className="text-slate-100 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
                      aria-label="Send an email"
                    >
                      {siteConfig.email}
                    </Link>
                  </div>
                  <div>
                    <p className="text-slate-400">GitHub</p>
                    <Link
                      href={siteConfig.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-100 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
                      aria-label="Open GitHub profile"
                    >
                      {siteConfig.socials.github.replace("https://", "")}
                    </Link>
                  </div>
                  <div>
                    <p className="text-slate-400">LinkedIn</p>
                    <Link
                      href={siteConfig.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-100 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
                      aria-label="Open LinkedIn profile"
                    >
                      {siteConfig.socials.linkedin.replace("https://", "")}
                    </Link>
                  </div>
                </div>
              </div>
            </TerminalCard>
          </Reveal>

          <Reveal className="lg:col-span-3">
            <TerminalCard title="Send Message" date="~/msg" className="h-full">
              <ContactForm />
            </TerminalCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

