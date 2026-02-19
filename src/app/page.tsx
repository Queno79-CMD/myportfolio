import { AboutSection } from "@/sections/about";
import { ContactSection } from "@/sections/contact";
import { HeroSection } from "@/sections/hero";
import { ProfileSection } from "@/sections/profile";
import { ProjectsSection } from "@/sections/projects";
import { SkillsSection } from "@/sections/skills";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProfileSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
