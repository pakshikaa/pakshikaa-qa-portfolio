export type SubFeatureCoverage = {
  name: string;
  total: number;
  pass: number;
};

export type Project = {
  id: string;
  index: string;
  category: string;
  title: string;
  problem: string;
  approach: string[];
  outcome: string[];
  outcomeDefects?: string[];
  chips: string[];
  codeUrl?: string;
  reportComingSoon?: boolean;
  featured?: boolean;
  subFeatures?: SubFeatureCoverage[];
};

export const featuredProject: Project = {
  id: "pixelsuite",
  index: "00",
  category: "Automation Testing · Playwright — Team Project (SLIIT SQA Module, IT4100)",
  title: "PixelsSuite — Document Converter Automation Testing",
  problem:
    "PixelsSuite's Document Converter (Image→PDF, PDF→Word, Word→PDF) needed functional validation and regression-safe automated coverage across file formats, size boundaries, and content preservation.",
  approach: [
    "Designed and manually executed 43 test cases (black-box) across 3 sub-features: Image to PDF (18 cases), PDF to Word (13 cases), Word to PDF (12 cases).",
    "Automated all 43 scenarios using Playwright (JavaScript) with a modular, reusable test structure across the 3 sub-features.",
    "Covered file upload validation, format rejection, 20MB size boundary testing, conversion accuracy, content preservation, drag-and-drop, and negative/edge cases.",
  ],
  outcome: [
    "95% pass rate (41/43 manual, matched by automation: 16/18 + 13/13 + 12/12).",
    "Generated Playwright HTML test reports for all 3 sub-features.",
  ],
  outcomeDefects: [
    "Unsupported file types accepted without validation error",
    "Files >20MB inconsistently rejected",
  ],
  chips: ["Playwright", "JavaScript", "Black-box Testing", "Regression Testing"],
  reportComingSoon: true,
  featured: true,
  subFeatures: [
    { name: "Image to PDF", total: 18, pass: 16 },
    { name: "PDF to Word", total: 13, pass: 13 },
    { name: "Word to PDF", total: 12, pass: 12 },
  ],
};

export const projects: Project[] = [
  {
    id: "momera",
    index: "01",
    category: "Research · Mobile AI",
    title: "MomEra — AI-Driven IVF Success Prediction",
    problem:
      "An ML-driven healthcare app predicting IVF success must be trusted — wrong inputs or broken flows erode patient confidence.",
    approach: [
      "Designed functional & input-validation test cases for the prediction flow; boundary-tested hormone-value inputs and validated ML API responses against expected ranges.",
    ],
    outcome: [
      "Caught invalid-input and edge-case handling gaps before demo; verified prediction output stayed within valid bounds across test data.",
    ],
    chips: ["React Native", "Expo", "XGBoost", "API Testing"],
    codeUrl: "https://github.com/GnanasampanthanThivakar/ivffinal",
  },
  {
    id: "smart-campus",
    index: "02",
    category: "Microservices",
    title: "Smart Campus Service Request System",
    problem:
      "Students and staff needed a reliable way to raise, assign and track service requests across a multi-service backend.",
    approach: [
      "Wrote end-to-end test cases for the request lifecycle (create → assign → track → resolve); regression-tested status transitions and validated REST endpoints in Postman.",
    ],
    outcome: [
      "Surfaced state-transition and permission defects; documented reproducible steps that shortened developer fix cycles.",
    ],
    chips: ["React", "Node.js", "MongoDB", "Microservices"],
    codeUrl: "https://github.com/GnanasampanthanThivakar/mtit",
  },
  {
    id: "skillhorizon",
    index: "03",
    category: "Learning Platform",
    title: "SkillHorizon — Skill Sharing Platform",
    problem:
      "Social learning features (posts, likes, comments, notifications, progress) create many interacting states that break easily.",
    approach: [
      "Built test scenarios for CRUD and social interactions; UI-validated feed/profile flows and verified REST API responses and error handling.",
    ],
    outcome: [
      "Identified notification and comment-state bugs; improved coverage of error and empty states before delivery.",
    ],
    chips: ["React", "Spring Boot", "MongoDB", "REST API"],
    codeUrl: "https://github.com/GnanasampanthanThivakar/SkillHorizon",
  },
  {
    id: "finance-mate",
    index: "04",
    category: "Finance Web App",
    title: "My Finance Mate",
    problem:
      "Finance calculations (income, expenses, budgets, savings goals) must be accurate — a rounding or logic slip breaks user trust.",
    approach: [
      "Wrote calculation and boundary test cases for budgets and goal tracking; validated data persistence and cross-checked totals against expected values.",
    ],
    outcome: [
      "Verified calculation accuracy across edge cases; flagged data-consistency issues between views.",
    ],
    chips: ["React", "Node.js", "MongoDB", "JavaScript"],
    codeUrl: "https://github.com/GnanasampanthanThivakar/MYFINANCEMATE",
  },
  {
    id: "sai-photography",
    index: "05",
    category: "Business System",
    title: "Sai Photography Management System",
    problem:
      "A studio system handling bookings, packages, inventory and payments needs dependable end-to-end workflows.",
    approach: [
      "Tested booking and payment workflows end-to-end; validated inventory updates and REST endpoints; documented defects with clear reproduction steps.",
    ],
    outcome: [
      "Confirmed booking and revenue flows behaved correctly; caught inventory-sync issues during regression.",
    ],
    chips: ["Node.js", "Express", "MongoDB", "REST API"],
    codeUrl: "https://github.com/pakshikaa/ITP_PROJECT",
  },
  {
    id: "todo-app",
    index: "06",
    category: "Android App",
    title: "ToDo Task Management App",
    problem:
      "A native Android task app must reliably create, organise and persist tasks across app sessions.",
    approach: [
      "Performed functional and usability testing on task CRUD; verified persistence and validated UI behaviour across device states.",
    ],
    outcome: [
      "Ensured tasks persisted correctly; reported UI and state-handling defects for fixing.",
    ],
    chips: ["Kotlin", "Android Studio", "Gradle"],
    codeUrl: "https://github.com/pakshikaa/ToDo_app",
  },
];
