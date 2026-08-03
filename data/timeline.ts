export type TimelineEntry = {
  date: string;
  title: string;
  description: string;
  current?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    date: "2022 – 2026",
    title: "BSc (Hons) Information Technology — SLIIT",
    description:
      "Final-year undergraduate specialising in software quality, full-stack development and Agile practices.",
  },
  {
    date: "Aug 2024 – Feb 2025",
    title: "Intern QA Engineer — Codelantic (Pvt) Ltd",
    description:
      "100+ test cases executed, 100+ defects tracked; manual, API, UI and regression testing in a real Agile team.",
  },
  {
    date: "2023 – 2025",
    title: "Key QA & Full-Stack Projects",
    description:
      "Six projects across web, mobile and microservices — tested for functionality, APIs and reliability (see case studies above).",
  },
  {
    date: "Ongoing",
    title: "Certifications & Continuous Learning",
    description:
      "Building toward formal QA certification (ISTQB Foundation track) and strengthening automation fundamentals.",
  },
  {
    date: "Now",
    title: "Current Focus — Test Automation",
    description:
      "Deepening Selenium & Playwright to move from manual coverage into maintainable automated regression suites.",
    current: true,
  },
];
