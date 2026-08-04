"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Case Studies" },
  { href: "#artifacts", label: "QA Proof" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

const RESUME_HREF = "/PAKSHIKAA_ELANGO_QA_ENGINEER_RESUME.pdf";
const RESUME_FILENAME = "Pakshikaa_Elango_QA_Resume.pdf";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navHeight = scrolled ? 72 : 86;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the overlay and allow Escape to dismiss it.
  // The lock goes on <html>: that is the scrolling element, so locking <body>
  // does nothing. overflowY only, so body's overflow-x safety net survives.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const root = document.documentElement;
    const y = window.scrollY;
    root.style.overflowY = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflowY = "";
      window.scrollTo(0, y);
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Must live OUTSIDE <header>: the header's backdrop-blur makes it a
          containing block for fixed descendants, which would size this panel
          against the 86px header instead of the viewport.
          No dim backdrop — the panel is opaque and spans header-bottom to
          viewport-bottom, so a scrim behind it would never be visible.
          Dismiss is via the X, Escape, or picking a link. */}
      {menuOpen && (
        <nav
          aria-label="Mobile"
          style={{ top: navHeight }}
          className="fixed inset-x-0 bottom-0 z-[96] flex flex-col overflow-y-auto overscroll-contain border-t border-[var(--border)] bg-[var(--bg)] px-[7%] py-6 text-sm font-extrabold uppercase tracking-wider text-[var(--muted)] lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[var(--border)] py-4 hover:text-accent-deep"
            >
              {link.label}
            </a>
          ))}

          <a
            href={RESUME_HREF}
            download={RESUME_FILENAME}
            rel="noopener"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-white shadow-[0_14px_30px_rgba(15,139,125,.28)]"
          >
            <span aria-hidden="true" className="text-base leading-none">↓</span>
            Download Resume
          </a>
        </nav>
      )}

      <header
        style={{ ["--nav-h" as string]: `${navHeight}px` }}
        className={`sticky top-0 z-[100] flex items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--navbar-bg)] px-[5%] backdrop-blur-xl transition-[height,box-shadow] duration-[250ms] md:px-[7%] ${
          scrolled ? "h-[72px] shadow-[0_12px_32px_rgba(24,34,48,.08)]" : "h-[86px]"
        }`}
      >
        <a href="#home" className="flex min-w-0 items-center gap-2 font-black sm:gap-3.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent font-black text-white md:h-[46px] md:w-[46px]">
            PE
          </span>
          {/* Below 375px the header Resume button leaves too little room; the
              PE mark alone reads better than a clipped "Pakshikaa Ela…". */}
          <strong className="truncate text-[15px] max-[374px]:hidden sm:text-[17px] md:text-2xl">
            Pakshikaa Elango
          </strong>
        </a>

        <nav
          aria-label="Primary"
          className="hidden text-xs font-extrabold uppercase tracking-wider text-[var(--muted)] lg:flex lg:flex-row lg:gap-6"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="group relative hover:text-accent-deep">
              {link.label}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-accent transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          {/* Compact mirror of the desktop Resume button, so mobile users get
              the CTA without opening the menu. */}
          <a
            href={RESUME_HREF}
            download={RESUME_FILENAME}
            rel="noopener"
            className="shrink-0 rounded-full bg-accent px-2.5 py-2 text-[11px] font-extrabold text-white shadow-[0_10px_22px_rgba(15,139,125,.26)] sm:px-3 lg:hidden"
          >
            Resume
          </a>

          <ThemeToggle />

          <a
            href={RESUME_HREF}
            download={RESUME_FILENAME}
            rel="noopener"
            className="hidden rounded-full bg-accent px-6 py-3 font-extrabold text-white shadow-[0_14px_30px_rgba(15,139,125,.28)] transition-transform duration-200 hover:-translate-y-0.5 lg:inline-block"
          >
            Resume
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="shrink-0 border-0 bg-transparent text-[26px] leading-none lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>
    </>
  );
}
