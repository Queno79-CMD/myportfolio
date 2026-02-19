"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { GridBackground } from "@/components/layout/grid-background";
import { ButtonLink } from "@/components/ui/button";
import { KaliLogo, ShieldCheck } from "@/components/ui/icons";
import { siteConfig } from "@/data/site";
import { Window } from "@/components/kali-desktop/window";
import { TopBar } from "@/components/kali-desktop/top-bar";
import { TerminalText } from "@/components/motion/terminal-text";
import { KaliPrompt } from "@/components/kali-desktop/prompt";

export function HeroSection() {
  const constraintsRef = useRef(null);

  const skills = [
    { name: "Ubuntu Server", usage: 90 },
    { name: "Kali Linux", usage: 95 },
    { name: "Network Security", usage: 85 },
    { name: "Python Scripting", usage: 80 },
    { name: "Penetration Testing", usage: 75 },
  ];

  return (
    <section ref={constraintsRef} className="relative h-[110vh] min-h-[800px] w-full overflow-hidden bg-[#1a1b26] text-slate-200">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2335_1px,transparent_1px),linear-gradient(to_bottom,#1f2335_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1b26] via-[#16161e] to-[#1a1b26]" />

      {/* Large Kali Logo Background */}
      <div className="absolute inset-0 z-0 opacity-90">
        <Image
          src="/kali-hero-bg.jpg"
          alt="Kali Linux Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Desktop UI */}
      <div className="relative flex h-full flex-col">
        <TopBar />

        {/* Windows Container */}
        <div className="relative flex-1 p-4 md:p-8">

          {/* Main Terminal Window */}
          <Window
            title="enock@kali: ~"
            icon={<span className="text-emerald-400 font-mono text-xs">$</span>}
            defaultPosition={{ x: 20, y: 40 }}
            className="w-[90%] md:w-[600px] max-w-full z-20"
          >
            <div className="font-mono text-sm md:text-base space-y-4 text-slate-300">
              <div className="mb-4">
                <TerminalText />
              </div>

              <div className="mb-2">
                <KaliPrompt>
                  <span className="text-emerald-400">cat about_me.txt</span>
                </KaliPrompt>
              </div>

              <p className="leading-relaxed pl-2 md:pl-0">
                Hello! I&apos;m <span className="text-cyan-300 font-bold">{siteConfig.name}</span>.
                <br />
                {siteConfig.description}
              </p>

              <p className="opacity-80 pl-2 md:pl-0">
                “{siteConfig.tagline}”
              </p>

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-3 pl-2 md:pl-0">
                <ButtonLink href="#projects" variant="primary" className="h-8 px-3 text-xs">
                  ./view_projects.sh
                </ButtonLink>
                <ButtonLink href="#contact" variant="ghost" className="h-8 px-3 text-xs hover:bg-white/5">
                  ./contact_me.sh
                </ButtonLink>
              </div>

              <div className="mt-4">
                <KaliPrompt>
                  <span className="animate-pulse text-emerald-400">_</span>
                </KaliPrompt>
              </div>
            </div>
          </Window>


          {/* System Monitor (Skills) Window */}
          <Window
            title="System Monitor - Resources"
            icon={<ShieldCheck className="w-3 h-3 text-cyan-400" />}
            defaultPosition={{ x: 650, y: 100 }}
            className="hidden lg:flex w-[350px] z-10"
          >
            <div className="space-y-4 font-mono text-xs">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Load Average</span>
                <span className="text-emerald-400">0.45 0.52 0.48</span>
              </div>

              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className={skill.usage > 85 ? "text-red-400" : "text-cyan-400"}>{skill.usage}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.usage}%` }}
                        transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                        className={`h-full ${skill.usage > 85 ? "bg-red-500" : "bg-cyan-500"}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[10px] opacity-60">
                Processes: 245 &nbsp; Threads: 1024 &nbsp; Uptime: 34d 12h
              </div>
            </div>
          </Window>

        </div>
      </div>
    </section>
  );
}
