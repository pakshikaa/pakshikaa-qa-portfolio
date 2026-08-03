import Reveal from "./Reveal";

const BULLETS = [
  "Executed 100+ manual test cases across web and mobile workflows — functional, regression, UI and usability testing.",
  "Reported and tracked 100+ defects using Agile QA workflows, collaborating with developers to verify fixes and improve release quality.",
  "Performed API validation using Postman — request/response checks, status-code verification and data validation.",
  "Prepared clear test scenarios, test-case documentation, defect notes and retesting updates for sprint-based delivery.",
  "Used Jira for issue tracking, with hands-on automation exposure in Selenium and Playwright.",
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative z-[2] px-[7%] py-[78px] md:py-[105px]">
      <p className="section-kicker mb-6">02 / Experience</p>
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[70px]">
        <Reveal as="div">
          <h2 className="section-heading">Industry exposure that shaped my QA practice.</h2>
        </Reveal>

        <Reveal as="article" delay={0.1} className="card hover-card p-8">
          <div className="mb-5 flex flex-wrap items-start justify-between gap-5">
            <div>
              <h3 className="text-2xl">Intern QA Engineer</h3>
              <p className="mt-1.5 font-extrabold text-accent">Codelantic (Pvt) Ltd</p>
            </div>
            <span className="font-extrabold text-[var(--muted)]">Aug 2024 – Feb 2025</span>
          </div>

          <ul className="list-disc space-y-2 pl-5">
            {BULLETS.map((bullet) => (
              <li key={bullet} className="leading-[1.75] text-[var(--muted)]">
                {bullet}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
