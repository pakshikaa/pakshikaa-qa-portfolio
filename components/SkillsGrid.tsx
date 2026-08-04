"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skillGroups, type SkillLevel } from "@/data/skills";

const TAG_STYLES: Record<SkillLevel, string> = {
  proficient: "bg-accent-tint text-accent-deep",
  strong: "bg-[rgba(20,184,166,.14)] text-accent-deep",
  intermediate: "bg-[rgba(74,123,176,.14)] text-[#3a5f87] dark:text-[#8fb4dd]",
  learning: "bg-[rgba(182,123,53,.14)] text-[#8a5a20] dark:text-[var(--gold)]",
};

const TAG_LABEL: Record<SkillLevel, string> = {
  proficient: "Proficient",
  strong: "Strong",
  intermediate: "Working Knowledge",
  learning: "Learning",
};

export default function SkillsGrid() {
  return (
    <section id="skills" className="relative z-[2] px-[7%] py-[78px] md:py-[105px]">
      <p className="section-kicker mb-6">03 / Skills</p>
      <Reveal className="mb-12 max-w-[820px]">
        <h2 className="section-heading mb-4">Technical toolkit</h2>
        <p className="text-lg leading-[1.8] text-[var(--muted)]">
          Core QA, automation and development skills — shown with honest proficiency levels rather than a
          flat tag cloud.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-[repeat(3,minmax(0,1fr))]">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} as="article" delay={gi * 0.08} className="card hover-card flex min-w-0 flex-col p-6 sm:p-8">
            <h3 className="mb-2 text-2xl">{group.title}</h3>
            <ul className="mt-2 flex flex-col gap-4">
              {group.skills.map((skill) => (
                <li key={skill.name} className="relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2.5 pb-3.5">
                  <span className="text-[15px] font-bold">{skill.name}</span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide ${TAG_STYLES[skill.tag]}`}
                  >
                    {TAG_LABEL[skill.tag]}
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 h-1.5 rounded-full bg-black/[.08] dark:bg-white/10" />
                  <motion.span
                    className="absolute bottom-0 left-0 h-1.5 rounded-full bg-gradient-to-r from-accent to-[var(--accent-soft)]"
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
