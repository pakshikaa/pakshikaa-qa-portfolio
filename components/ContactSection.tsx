import Reveal from "./Reveal";

const CONTACT_LINKS = [
  { href: "mailto:pakshikaa@gmail.com", label: "pakshikaa@gmail.com", external: false },
  { href: "tel:+94750510990", label: "+94 75 051 0990", external: false },
  { href: "https://github.com/pakshikaa", label: "github.com/pakshikaa", external: true },
  {
    href: "https://www.linkedin.com/in/pakshikaa-elango",
    label: "linkedin.com/in/pakshikaa-elango",
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-[2] px-[7%] py-[78px] md:py-[105px]">
      <p className="section-kicker mb-6">07 / Contact</p>

      <Reveal
        as="div"
        className="card hover-card grid items-center gap-10 bg-[linear-gradient(135deg,rgba(255,255,255,.10),rgba(255,255,255,.02)),radial-gradient(circle_at_10%_10%,var(--accent-tint),transparent_34%)] p-6 sm:p-8 md:grid-cols-[repeat(2,minmax(0,1fr))] md:p-10"
      >
        <div className="min-w-0">
          <h2 className="section-heading">Let&apos;s connect.</h2>
          <p className="mt-3.5 leading-[1.7] text-[var(--muted)]">
            Open to Associate QA Engineer and Software Tester opportunities.
          </p>
        </div>

        {/* overflow-wrap:anywhere (not break-words) — only "anywhere" also shrinks
            the min-content width, so a long URL cannot widen the grid track. */}
        <div className="grid w-full min-w-0 grid-cols-[minmax(0,1fr)] gap-3">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener" : undefined}
              className="flex min-h-[60px] min-w-0 items-center rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-4 font-bold transition-colors duration-200 [overflow-wrap:anywhere] hover:border-accent hover:bg-accent hover:text-white sm:px-5"
            >
              {link.label}
            </a>
          ))}
          <span className="flex min-h-[60px] min-w-0 items-center rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-4 font-bold [overflow-wrap:anywhere] sm:px-5">
            Jaffna, Sri Lanka
          </span>
        </div>
      </Reveal>
    </section>
  );
}
