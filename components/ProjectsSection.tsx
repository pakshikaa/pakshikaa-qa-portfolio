import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { featuredProject, projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-[2] px-[7%] py-[78px] md:py-[105px]">
      <p className="section-kicker mb-6">04 / Case Studies</p>
      <Reveal className="mb-12 max-w-[820px]">
        <h2 className="section-heading mb-4">QA case studies</h2>
        <p className="text-lg leading-[1.8] text-[var(--muted)]">
          Each project framed the way I approach quality: the problem, my testing role and approach, and
          the measurable outcome.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-[repeat(2,minmax(0,1fr))]">
        <ProjectCard project={featuredProject} />
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={(i + 1) * 0.05} />
        ))}
      </div>
    </section>
  );
}
