import type { Project } from "@/data/projects";
import Reveal from "./Reveal";
import PlaywrightReportMockup from "./PlaywrightReportMockup";

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const { title, category, problem, approach, outcome, outcomeDefects, chips, codeUrl, featured, subFeatures } =
    project;

  return (
    <Reveal
      as="article"
      delay={delay}
      className={`hover-card flex min-w-0 flex-col rounded-[28px] border p-6 shadow-[0_18px_55px_rgba(24,34,48,.06)] sm:p-8 ${
        featured
          ? "border-accent bg-[var(--card)] ring-1 ring-accent/40 md:col-span-2"
          : "border-[var(--border)] bg-[var(--card)]"
      }`}
    >
      {featured && (
        <span className="mb-4 inline-block w-fit rounded-full bg-accent px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider text-white">
          Featured Case Study
        </span>
      )}
      <small className="mb-3.5 block text-xs font-extrabold uppercase tracking-[2px] text-accent">
        {category}
      </small>
      <h3 className="mb-3.5 text-2xl">{title}</h3>

      <div className={featured ? "grid gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]" : ""}>
        <div className="min-w-0">
          <div className="mb-3.5">
            <p className="mb-1 text-[11px] font-black uppercase tracking-wide text-[#a04545]">Problem</p>
            <p className="text-[14.5px] leading-[1.65] text-[var(--muted)]">{problem}</p>
          </div>

          <div className="mb-3.5">
            <p className="mb-1 text-[11px] font-black uppercase tracking-wide text-accent-deep">
              My {featured ? "Role & Approach" : "QA Role & Approach"}
            </p>
            {approach.length > 1 ? (
              <ul className="list-disc space-y-1.5 pl-4">
                {approach.map((line) => (
                  <li key={line} className="text-[14.5px] leading-[1.65] text-[var(--muted)]">
                    {line}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[14.5px] leading-[1.65] text-[var(--muted)]">{approach[0]}</p>
            )}
          </div>

          <div className="mb-3.5">
            <p className="mb-1 text-[11px] font-black uppercase tracking-wide text-gold">Outcome</p>
            {outcome.map((line) => (
              <p key={line} className="text-[14.5px] leading-[1.65] text-[var(--muted)]">
                {line}
              </p>
            ))}
            {outcomeDefects && outcomeDefects.length > 0 && (
              <>
                <p className="mb-1 mt-2.5 text-[11px] font-black uppercase tracking-wide text-[#a83232]">
                  High-severity defects found
                </p>
                <ul className="list-disc space-y-1 pl-4">
                  {outcomeDefects.map((defect) => (
                    <li key={defect} className="text-[14.5px] leading-[1.65] text-[var(--muted)]">
                      {defect}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {featured && subFeatures && (
          <div className="flex min-w-0 items-start">
            <PlaywrightReportMockup subFeatures={subFeatures} />
          </div>
        )}
      </div>

      <div className="my-1.5 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span key={chip} className="pill-chip">
            {chip}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-2">
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener"
            className="block w-full rounded-full bg-accent px-5 py-3 text-center text-sm font-extrabold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,139,125,.3)]"
          >
            View Code ↗
          </a>
        )}
      </div>
    </Reveal>
  );
}
