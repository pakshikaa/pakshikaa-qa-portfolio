import Image from "next/image";
import Reveal from "./Reveal";
import MernMarquee from "./MernMarquee";
import CountUp from "./CountUp";

const STATS = [
  { target: 120, suffix: "+", label: "Test Cases Executed" },
  { target: 50, suffix: "+", label: "REST API Endpoints Assessed" },
  { target: 100, suffix: "+", label: "Defects Logged & Tracked" },
  { target: 20, suffix: "+", label: "Automated Test Scenarios" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-[2] grid min-h-[calc(100vh-86px)] items-center gap-12 px-[7%] py-[74px] lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,520px)] lg:gap-[78px] lg:py-[74px]"
    >
      <Reveal>
        <p className="section-kicker mb-5">Associate Quality Assurance Engineer</p>

        <h1 className="mb-7 font-serif text-[clamp(48px,7vw,100px)] leading-[1.02] tracking-[-1.5px]">
          I break software
          <br />
          <span className="mt-2.5 block text-accent">so users never have to.</span>
        </h1>

        <p className="max-w-[670px] text-lg leading-[1.8] text-[var(--muted)] md:text-[19px]">
          QA engineer who turns messy requirements into <strong className="font-bold text-[var(--text)]">traceable test coverage</strong>,{" "}
          <strong className="font-bold text-[var(--text)]">reproducible bug reports</strong> and{" "}
          <strong className="font-bold text-[var(--text)]">release confidence</strong> — 120+ test cases
          executed, 50+ REST API endpoints assessed and 100+ defects tracked across web, mobile and API
          workflows.
        </p>

        <div className="my-9 flex flex-wrap gap-4">
          <a href="#projects" className="btn-primary">
            View Case Studies
          </a>
          <a href="#artifacts" className="btn-secondary">
            See QA Proof of Work
          </a>
        </div>

        <MernMarquee />

        <div className="mt-1.5 grid max-w-[760px] grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((stat) => (
            <article key={stat.label} className="card hover-card px-[22px] py-6">
              <strong className="block text-3xl leading-none text-accent-deep">
                <CountUp target={stat.target} suffix={stat.suffix} />
              </strong>
              <small className="mt-2.5 block text-[12.5px] font-bold text-[var(--muted)]">{stat.label}</small>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15} className="relative z-[2]">
        <div className="rounded-[42px] border border-white/60 bg-[var(--card)] p-4 shadow-soft transition-transform duration-300 ease-out hover:-translate-y-2 hover:rotate-[0.5deg]">
          <Image
            src="/hero-photo.png"
            alt="Pakshikaa Elango, Associate QA Engineer"
            width={520}
            height={590}
            priority
            className="h-[380px] w-full rounded-[30px] object-cover object-top md:h-[520px] lg:h-[590px]"
          />
        </div>
      </Reveal>
    </section>
  );
}
