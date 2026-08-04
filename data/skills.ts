export type SkillLevel = "proficient" | "strong" | "intermediate" | "learning";

export type Skill = {
  name: string;
  level: number;
  tag: SkillLevel;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Quality Assurance",
    skills: [
      { name: "Manual Testing", level: 90, tag: "proficient" },
      { name: "Test Case Design", level: 88, tag: "proficient" },
      { name: "Bug Reporting & Verification", level: 85, tag: "proficient" },
      { name: "Regression & Smoke Testing", level: 82, tag: "proficient" },
      { name: "API Testing", level: 75, tag: "strong" },
      { name: "Mobile / UI Testing", level: 70, tag: "strong" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Postman", level: 85, tag: "proficient" },
      { name: "Jira", level: 80, tag: "proficient" },
      { name: "Agile / Scrum", level: 82, tag: "proficient" },
      { name: "Git & GitHub", level: 78, tag: "strong" },
      { name: "Selenium", level: 68, tag: "intermediate" },
      { name: "Playwright", level: 80, tag: "strong" },
    ],
  },
  {
    title: "Development",
    skills: [
      { name: "JavaScript", level: 78, tag: "strong" },
      { name: "React", level: 72, tag: "strong" },
      { name: "Node.js / Express", level: 70, tag: "strong" },
      { name: "MongoDB / SQL", level: 68, tag: "strong" },
      { name: "Java", level: 70, tag: "strong" },
    ],
  },
];
