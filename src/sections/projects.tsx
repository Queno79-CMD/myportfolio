import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="A few projects and labs focused on secure systems, practical tooling, and clean engineering."
          />
        </Reveal>

        <RevealStagger className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <RevealItem key={project.title}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

