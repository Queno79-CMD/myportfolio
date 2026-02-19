import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { SkillCard } from "@/components/skill-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools and fundamentals I use daily"
            description="Organized by category so you can quickly see what I’m strongest in and what I’m actively developing."
          />
        </Reveal>

        <RevealStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat) => (
            <RevealItem key={cat.title}>
              <SkillCard title={cat.title} items={cat.items} />
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

