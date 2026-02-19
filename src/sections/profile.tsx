import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TerminalCard } from "@/components/kali-desktop/terminal-card";
import { certifications, education, experience } from "@/data/profile";

export function ProfileSection() {
  return (
    <section id="profile" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Background"
            title="Experience & Qualifications"
            description="My academic journey, diverse projects, and professional growth in cybersecurity."
          />
        </Reveal>

        <div className="mt-10 space-y-6">
          {/* Experience Section */}
          <Reveal>
            <TerminalCard title="Professional Experience" date="~/experience" className="w-full">
              <div className="grid gap-8 md:grid-cols-2">
                {experience.map((exp, i) => (
                  <div key={i} className="space-y-2">
                    <div className="border-b border-white/5 pb-2 mb-3">
                      <h4 className="text-emerald-400 font-bold text-sm md:text-base">
                        {exp.role}
                      </h4>
                      <div className="flex justify-between text-xs font-mono text-slate-500 mt-1">
                        <span>{exp.company}</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((desc, j) => (
                        <li key={j} className="flex gap-2 text-sm text-slate-300">
                          <span className="text-cyan-500 mt-1">➜</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TerminalCard>
          </Reveal>

          {/* Education & Certs */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <TerminalCard title="Education" date="~/edu" className="h-full">
                <ul className="space-y-4 text-sm text-slate-300">
                  {education.map((item) => (
                    <li key={`${item.school}-${item.program}`} className="space-y-1.5">
                      <p className="text-[13px] font-semibold text-slate-50">
                        {item.program}
                      </p>
                      <p className="text-[13px] text-slate-300">{item.school}</p>
                      <p className="text-[12px] font-mono text-cyan-200/80">
                        {item.period}
                      </p>
                      {item.details ? (
                        <p className="text-[13px] text-slate-400">{item.details}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </TerminalCard>
            </Reveal>

            <Reveal>
              <TerminalCard title="Certifications" date="~/certs" className="h-full">
                <RevealStagger className="space-y-3">
                  {certifications.map((cert) => (
                    <RevealItem key={`${cert.name}-${cert.provider}`}>
                      <div className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]"
                        />
                        <div className="space-y-1">
                          <p className="text-[13px] font-semibold text-slate-50">
                            {cert.name}
                          </p>
                          <p className="text-[12px] text-slate-400">
                            {cert.provider}
                            {cert.year ? ` · ${cert.year}` : null}
                          </p>
                          {cert.focus ? (
                            <p className="text-[13px] text-slate-400">{cert.focus}</p>
                          ) : null}
                        </div>
                      </div>
                    </RevealItem>
                  ))}
                </RevealStagger>
              </TerminalCard>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

