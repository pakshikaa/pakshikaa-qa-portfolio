import Reveal from "./Reveal";
import { timeline } from "@/data/timeline";

export default function JourneySection() {
  return (
    <section id="journey" className="relative z-[2] px-[7%] py-[78px] md:py-[105px]">
      <p className="section-kicker mb-6">06 / Journey</p>
      <Reveal className="mb-12 max-w-[820px]">
        <h2 className="section-heading mb-4">The path so far</h2>
        <p className="text-lg leading-[1.8] text-[var(--muted)]">
          From foundations to focus — education, industry experience and where I&apos;m sharpening next.
        </p>
      </Reveal>

      <ol className="relative mx-auto max-w-[820px] pl-2">
        <li className="pointer-events-none absolute bottom-1.5 left-[11px] top-1.5 w-0.5 bg-gradient-to-b from-accent to-accent-tint" />
        {timeline.map((entry, i) => (
          <Reveal key={entry.title} as="li" delay={i * 0.06} className="relative py-0 pb-8 pl-11 last:pb-0">
            <span
              className={`absolute left-[3px] top-1 z-[1] h-[18px] w-[18px] rounded-full border-4 border-accent bg-[var(--bg)] ${
                entry.current ? "animate-pulseRing bg-accent" : ""
              }`}
            />
            <div className="card hover-card px-6 py-5">
              <span className="text-xs font-extrabold uppercase tracking-wide text-accent">{entry.date}</span>
              <h3 className="my-2 text-[19px]">{entry.title}</h3>
              <p className="text-[14.5px] leading-[1.65] text-[var(--muted)]">{entry.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
