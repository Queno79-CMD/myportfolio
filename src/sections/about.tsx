import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TerminalCard } from "@/components/kali-desktop/terminal-card";
import { services } from "@/data/profile";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Security-minded. Systems-first."
            description="I’m a Cybersecurity & IT student building practical skills through hands-on labs, defensive hardening, and responsible testing."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Changed to 2 cols for better balance if Services is long, or keep 3 and spread? 
              User has 4 service categories. A single sidebar column might be too tall.
              Let's try 50/50 split or just keep it simple.
              I will change to grid-cols-1 md:grid-cols-2.
           */}
          <Reveal>
            <TerminalCard title="About Me" date="~/bio" className="h-full">
              <div className="space-y-4 text-sm leading-relaxed text-slate-300">
                <p>
                  I enjoy working close to the operating system and the network layer—configuring
                  servers, tightening access, and learning how real-world vulnerabilities are found
                  and prevented.
                </p>
                <p>
                  My goal is to combine strong fundamentals with clean engineering practices to build secure, reliable systems.
                  Whether it's hardening a Linux server or analyzing network traffic, I take a hands-on, defensive approach.
                </p>
                <div className="pt-2">
                  <p className="text-emerald-400 font-semibold mb-1">Extensive Experience In:</p>
                  <ul className="list-disc list-inside text-slate-400 marker:text-emerald-500">
                    <li>Ubuntu Server & Kali Linux Administration</li>
                    <li>Full-Stack Web Development (PHP/PostgreSQL)</li>
                    <li>Automated Vulnerability Scanning</li>
                    <li>Secure Network Architecture</li>
                  </ul>
                </div>
              </div>
            </TerminalCard>
          </Reveal>

          <Reveal>
            <TerminalCard title="Services Offered" date="~/services" className="h-full">
              <RevealStagger className="space-y-5">
                {services.map((s) => (
                  <RevealItem key={s.title}>
                    <div className="space-y-1">
                      <p className="text-cyan-400 font-mono text-xs uppercase tracking-wider font-bold">
                        ./{s.title.replace(/\s+/g, '_').toLowerCase()}.sh
                      </p>
                      <ul className="grid grid-cols-1 gap-1 pl-3 border-l-2 border-slate-800">
                        {s.items.map((item) => (
                          <li key={item} className="text-sm text-slate-300 flex items-center gap-2">
                            <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </RevealItem>
                ))}
              </RevealStagger>
            </TerminalCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

