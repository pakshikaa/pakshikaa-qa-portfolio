import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectsSection from "@/components/ProjectsSection";
import ArtifactsSection from "@/components/ArtifactsSection";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <SkillsGrid />
      <ProjectsSection />
      <ArtifactsSection />
      <JourneySection />
      <ContactSection />
    </>
  );
}
