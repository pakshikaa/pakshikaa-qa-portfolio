const MERN_ITEMS = [
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "JavaScript",
  "REST APIs",
  "Postman",
  "QA Validation",
];

const COLORS = [
  "bg-accent-deep",
  "bg-[#3a2d1d] dark:bg-[#2a2015]",
  "bg-accent",
  "bg-[#192230] dark:bg-[#1c2a3d]",
];

export default function MernMarquee() {
  const items = [...MERN_ITEMS, ...MERN_ITEMS];

  return (
    <div
      aria-label="MERN stack exposure"
      className="group mb-8 w-full max-w-[720px] overflow-hidden rounded-3xl border border-accent-tint bg-[var(--card)] p-3.5 shadow-[0_16px_42px_rgba(24,34,48,.07)]"
    >
      <span className="mb-2.5 ml-1 block text-xs font-extrabold uppercase tracking-[2px] text-accent-deep">
        MERN Stack Exposure
      </span>
      {/* contain:inline-size sizes this track from its parent alone, so the
          max-content width of the scrolling row never propagates upward. */}
      <div className="overflow-hidden [contain:inline-size] [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-extrabold text-white shadow-[0_10px_22px_rgba(24,34,48,.12)] ${
                COLORS[i % 4]
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
