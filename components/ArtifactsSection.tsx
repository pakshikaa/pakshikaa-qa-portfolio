import Reveal from "./Reveal";

const TEST_CASES = [
  { id: "TC-01", scenario: "Valid login", expected: "Redirect to dashboard", status: "pass" as const },
  { id: "TC-02", scenario: "Empty password", expected: "Show validation error", status: "pass" as const },
  { id: "TC-03", scenario: "SQL in email field", expected: "Input sanitised", status: "fail" as const },
  { id: "TC-04", scenario: "Wrong password ×5", expected: "Account lockout", status: "block" as const },
  { id: "TC-05", scenario: "Remember me", expected: "Session persists", status: "pass" as const },
];

const STATUS_LABEL = { pass: "Pass", fail: "Fail", block: "Blocked" };
const STATUS_STYLE = {
  pass: "bg-accent-tint text-accent-deep",
  fail: "bg-[rgba(190,60,60,.14)] text-[#a83232]",
  block: "bg-[rgba(120,120,130,.16)] text-[#5a6270] dark:text-[#aab0bb]",
};

const API_ROWS = [
  { method: "GET", url: "/api/users/me", status: "200 OK", ok: true },
  { method: "POST", url: "/api/auth/login", status: "200 OK", ok: true },
  { method: "POST", url: "/api/auth/login", status: "401", ok: false },
  { method: "PUT", url: "/api/users/42", status: "200 OK", ok: true },
  { method: "DEL", url: "/api/sessions/8f2", status: "204", ok: true },
];

const METHOD_STYLE: Record<string, string> = {
  GET: "bg-accent",
  POST: "bg-[#c8862c]",
  PUT: "bg-[#4a7bb0]",
  DEL: "bg-[#b04a4a]",
};

export default function ArtifactsSection() {
  return (
    <section id="artifacts" className="relative z-[2] px-[7%] py-[78px] md:py-[105px]">
      <p className="section-kicker mb-6">05 / Proof of Work</p>
      <Reveal className="mb-12 max-w-[820px]">
        <h2 className="section-heading mb-4">QA artifacts, not just claims</h2>
        <p className="text-lg leading-[1.8] text-[var(--muted)]">
          Representative samples of my QA output — the kind of documentation I produce day to day. Swap
          these mock-ups for real screenshots or PDF exports anytime.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Artifact 1: Test Case Document */}
        <Reveal as="article" className="card hover-card flex flex-col gap-4 p-8">
          <div className="flex items-center justify-between gap-2.5">
            <span className="text-[13px] font-black text-accent-deep">Test Case Document</span>
            <span className="font-mono text-xs text-[var(--muted)]">login_module_TCs.xlsx</span>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--card-solid)] p-3.5">
            <table className="w-full min-w-[280px] border-collapse text-[12.5px]">
              <thead>
                <tr>
                  {["ID", "Scenario", "Expected", "Status"].map((h) => (
                    <th
                      key={h}
                      className="border-b-2 border-[var(--border)] px-2 py-2 text-left text-[10.5px] font-extrabold uppercase tracking-wide text-[var(--muted)]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TEST_CASES.map((tc) => (
                  <tr key={tc.id}>
                    <td className="border-b border-black/[.07] px-2 py-2.5 align-top font-mono font-bold text-accent-deep dark:border-white/10">
                      {tc.id}
                    </td>
                    <td className="border-b border-black/[.07] px-2 py-2.5 align-top dark:border-white/10">
                      {tc.scenario}
                    </td>
                    <td className="border-b border-black/[.07] px-2 py-2.5 align-top dark:border-white/10">
                      {tc.expected}
                    </td>
                    <td className="border-b border-black/[.07] px-2 py-2.5 align-top dark:border-white/10">
                      <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-extrabold ${STATUS_STYLE[tc.status]}`}>
                        {STATUS_LABEL[tc.status]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-auto text-[13.5px] leading-[1.6] text-[var(--muted)]">
            Traceable IDs, expected results and execution status — structured for regression reuse.
          </p>
        </Reveal>

        {/* Artifact 2: Bug Report (Jira-style) */}
        <Reveal as="article" delay={0.08} className="card hover-card flex flex-col gap-4 p-8">
          <div className="flex items-center justify-between gap-2.5">
            <span className="text-[13px] font-black text-accent-deep">Bug Report</span>
            <span className="font-mono text-xs text-[var(--muted)]">QA-247</span>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-solid)] p-3.5 text-[13px] leading-relaxed">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2.5">
              <span className="font-mono font-black">🐞 QA-247</span>
              <span className="rounded-full bg-[rgba(190,60,60,.14)] px-2.5 py-1 text-[11px] font-extrabold text-[#a83232]">
                Priority: High
              </span>
            </div>
            <h4 className="my-1 mb-2.5 text-[15px] leading-tight">
              Checkout total ignores applied discount code
            </h4>
            <div className="mb-2.5 flex flex-wrap gap-2.5 text-xs text-[var(--muted)]">
              <span>
                <b>Severity:</b> Major
              </span>
              <span>
                <b>Env:</b> Chrome 126 · Staging
              </span>
              <span className="rounded-full bg-[rgba(182,123,53,.16)] px-2.5 py-1 text-[11px] font-extrabold text-[#8a5a20] dark:text-[var(--gold)]">
                Status: Open
              </span>
            </div>
            <p className="mb-1 mt-2 text-[10.5px] font-black uppercase tracking-wide text-accent-deep">
              Steps to reproduce
            </p>
            <ol className="list-decimal space-y-0.5 pl-[18px] text-[var(--muted)]">
              <li>Add any item to cart</li>
              <li>
                Apply valid code{" "}
                <code className="rounded-md bg-accent-tint px-1.5 py-0.5 text-xs text-accent-deep">SAVE10</code>
              </li>
              <li>Proceed to checkout</li>
            </ol>
            <p className="mb-1 mt-2 text-[10.5px] font-black uppercase tracking-wide text-accent-deep">
              Expected vs Actual
            </p>
            <p className="text-[var(--muted)]">
              <b>Expected:</b> Total reduced by 10%. <b>Actual:</b> Full price charged; discount shown but
              not deducted.
            </p>
          </div>
          <p className="mt-auto text-[13.5px] leading-[1.6] text-[var(--muted)]">
            Reproducible, prioritised and developer-ready — the reports that actually get fixed.
          </p>
        </Reveal>

        {/* Artifact 3: Postman API Collection */}
        <Reveal as="article" delay={0.16} className="card hover-card flex flex-col gap-4 p-8">
          <div className="flex items-center justify-between gap-2.5">
            <span className="text-[13px] font-black text-accent-deep">API Test Collection</span>
            <span className="font-mono text-xs text-[var(--muted)]">Postman · Auth Service</span>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-solid)] p-3.5">
            <div className="flex min-w-[280px] flex-col gap-1.5 text-[12.5px]">
              {API_ROWS.map((row, i) => (
                <div key={i} className="grid grid-cols-[auto_1fr_auto] items-center gap-2.5">
                  <span
                    className={`min-w-[42px] rounded-md px-2 py-0.5 text-center text-[10.5px] font-black text-white ${METHOD_STYLE[row.method]}`}
                  >
                    {row.method}
                  </span>
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap font-mono">{row.url}</span>
                  <span className={`whitespace-nowrap text-[11px] font-extrabold ${row.ok ? "text-accent-deep" : "text-[#a83232]"}`}>
                    {row.status}
                  </span>
                </div>
              ))}
              <div className="mt-2 flex flex-col gap-1 border-t border-dashed border-[var(--border)] pt-2">
                <span className="text-xs font-bold text-accent-deep">✓ Status code is 200</span>
                <span className="text-xs font-bold text-accent-deep">✓ Response time &lt; 400ms</span>
                <span className="text-xs font-bold text-accent-deep">✓ Body has auth token</span>
              </div>
            </div>
          </div>
          <p className="mt-auto text-[13.5px] leading-[1.6] text-[var(--muted)]">
            Endpoint checks with status-code, latency and schema assertions — API coverage, verified.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
