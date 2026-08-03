import type { SubFeatureCoverage } from "@/data/projects";

export default function PlaywrightReportMockup({ subFeatures }: { subFeatures: SubFeatureCoverage[] }) {
  const totalCases = subFeatures.reduce((sum, s) => sum + s.total, 0);
  const totalPass = subFeatures.reduce((sum, s) => sum + s.pass, 0);

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-solid)] p-4">
      <div className="mb-3 flex items-center justify-between gap-2 border-b border-dashed border-[var(--border)] pb-3">
        <span className="font-mono text-xs text-[var(--muted)]">playwright-report/index.html</span>
        <span className="rounded-full bg-accent-tint px-2.5 py-1 text-[11px] font-extrabold text-accent-deep">
          {totalPass}/{totalCases} passed
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {subFeatures.map((sf) => {
          const pct = Math.round((sf.pass / sf.total) * 100);
          const hasFail = sf.pass < sf.total;
          return (
            <div key={sf.name}>
              <div className="mb-1.5 flex items-center justify-between text-[12.5px]">
                <span className="font-bold">{sf.name}</span>
                <span className={hasFail ? "font-bold text-[#a83232]" : "font-bold text-accent-deep"}>
                  {sf.pass}/{sf.total} {hasFail ? "" : "✓"}
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-black/[.08] dark:bg-white/10">
                <div
                  className={`h-1.5 rounded-full ${hasFail ? "bg-[#c8862c]" : "bg-accent"}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-3.5 border-t border-dashed border-[var(--border)] pt-3 text-[12px] leading-snug text-[var(--muted)]">
        Summary of the generated Playwright HTML report. Full report available on request.
      </p>
    </div>
  );
}
