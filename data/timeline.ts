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
      "120+ test cases executed across 5+ modules with 95% test execution coverage; 50+ REST API endpoints assessed and 100+ defects logged and tracked, across 15+ Agile Scrum ceremonies.",
  },
  {
    date: "2023 – 2025",
    title: "Key QA & Full-Stack Projects",
    description:
      "Seven projects across web, mobile and microservices — tested for functionality, APIs and reliability (see case studies above).",
  },
  {
    date: "2025 – 2026",
    title: "Certifications & Continuous Learning",
    description:
      "Completed Introduction to Responsible AI (Google Cloud & Simplilearn SkillUp, 2026), Selenium WebDriver Fundamentals, Software Testing Concepts and Methodologies, Introduction to Software Testing / Software QA, React JS Tutorial (Great Learning Academy) and React Basics (Coursera). Next: pursuing ISTQB Foundation certification.",
  },
  {
    date: "Now",
    title: "Current Focus — Test Automation",
    description:
      "Deepening Selenium & Playwright to move from manual coverage into maintainable automated regression suites.",
    current: true,
  },
];
