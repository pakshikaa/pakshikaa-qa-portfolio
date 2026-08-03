import Reveal from "./Reveal";

const INFO_CARDS = [
  {
    num: "01",
    title: "QA Discipline",
    body: "Manual testing, regression testing, API checks, UI validation, mobile testing and defect reporting.",
  },
  {
    num: "02",
    title: "Technical Range",
    body: "React, Node.js, MongoDB, Spring Boot, REST APIs and academic full-stack system development.",
  },
  {
    num: "03",
    title: "Professional Growth",
    body: "Agile teamwork, communication, documentation, problem solving and production-level QA awareness.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative z-[2] px-[7%] py-[78px] md:py-[105px]">
      <p className="section-kicker mb-6">01 / About</p>
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[70px]">
        <Reveal as="div">
          <h2 className="section-heading">Quality-first mindset with developer-level understanding.</h2>
        </Reveal>
        <Reveal as="div" delay={0.1} className="flex flex-col gap-4">
          <p className="text-lg leading-[1.8] text-[var(--muted)]">
            I am Pakshikaa Elango, a final-year BSc (Hons) Information Technology undergraduate at SLIIT. My
            career focus is Quality Assurance because it combines accuracy, analytical thinking, user
            experience and product reliability.
          </p>
          <p className="text-lg leading-[1.8] text-[var(--muted)]">
            My internship at Codelantic (Pvt) Ltd taught me production workflows, Agile collaboration, test
            documentation and what it really takes to ship reliable software — not just find bugs, but
            communicate them so they get fixed.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {INFO_CARDS.map((card, i) => (
          <Reveal key={card.num} as="article" delay={i * 0.08} className="card hover-card p-8">
            <span className="mb-3.5 block font-black text-accent">{card.num}</span>
            <h3 className="mb-3.5 text-2xl">{card.title}</h3>
            <p className="leading-[1.75] text-[var(--muted)]">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
