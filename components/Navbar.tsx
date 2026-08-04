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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] flex items-center justify-between border-b border-[var(--border)] bg-[var(--navbar-bg)] px-[5%] backdrop-blur-xl transition-[height,box-shadow] duration-[250ms] md:px-[7%] ${
        scrolled ? "h-[72px] shadow-[0_12px_32px_rgba(24,34,48,.08)]" : "h-[86px]"
      }`}
    >
      <a href="#home" className="flex min-w-0 items-center gap-2.5 font-black sm:gap-3.5">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent font-black text-white md:h-[46px] md:w-[46px]">
          PE
        </span>
        <strong className="truncate text-[17px] md:text-2xl">Pakshikaa Elango</strong>
      </a>

      <nav
        aria-label="Primary"
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute left-0 right-0 top-full z-[1000] flex-col gap-0 border-b border-[var(--border)] bg-[var(--bg)] px-[22px] py-3 text-xs font-extrabold uppercase tracking-wider text-[var(--muted)] shadow-[0_24px_55px_rgba(20,32,50,.1)] lg:static lg:flex lg:flex-row lg:gap-6 lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="group relative py-3 hover:text-accent-deep lg:py-0"
          >
            {link.label}
            <span className="absolute -bottom-2 left-0 hidden h-0.5 w-0 bg-accent transition-all duration-200 group-hover:w-full lg:block" />
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <a
          href="/PAKSHIKAA_ELANGO_QA_ENGINEER_RESUME.pdf"
          download="Pakshikaa_Elango_QA_Resume.pdf"
          rel="noopener"
          className="hidden rounded-full bg-accent px-6 py-3 font-extrabold text-white shadow-[0_14px_30px_rgba(15,139,125,.28)] transition-transform duration-200 hover:-translate-y-0.5 lg:inline-block"
        >
          Resume
        </a>
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="shrink-0 border-0 bg-transparent text-[28px] leading-none lg:hidden"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
