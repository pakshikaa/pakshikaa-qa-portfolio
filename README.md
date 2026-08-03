# Pakshikaa Elango — QA Portfolio

Associate Quality Assurance Engineer portfolio, built with Next.js (App Router),
Tailwind CSS and Framer Motion.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS, with a light/dark theme via `next-themes`
- Framer Motion for scroll-reveal and count-up animations

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Structure

- `app/` — root layout and the single page route
- `components/` — one component per section (Navbar, Hero, ProjectCard, etc.)
- `data/` — content arrays (`projects.ts`, `skills.ts`, `timeline.ts`) that drive the
  data-driven sections, so copy edits don't require touching component code
- `public/` — resume PDF and hero photo
- `legacy-static/` — the previous plain HTML/CSS/JS version of this site, kept for
  reference; not part of the deployed app

## Content notes

- The Testimonials section was removed — it only had placeholder quotes.
- Project cards link to source code only ("View Code"); no dead "Live Demo" links.
- The featured case study (PixelsSuite automation testing) has a "View Test Report"
  placeholder button — wire up the real Playwright HTML report URL in
  `components/ReportButton.tsx` and `data/projects.ts` when it's ready.
