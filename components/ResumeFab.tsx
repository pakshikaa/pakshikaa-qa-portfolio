"use client";

import { useEffect, useState } from "react";

export default function ResumeFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="/PAKSHIKAA_ELANGO_QA_ENGINEER_RESUME.pdf"
      download="Pakshikaa_Elango_QA_Resume.pdf"
      rel="noopener"
      aria-label="Download resume"
      className={`fixed bottom-6 right-6 z-[200] flex items-center gap-2 rounded-full bg-accent px-[22px] py-3.5 font-extrabold text-white shadow-[0_16px_38px_rgba(15,139,125,.36)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(15,139,125,.46)] ${
        show ? "translate-y-0 opacity-100" : "translate-y-[120px] opacity-0"
      }`}
    >
      <span className="text-lg font-black">↓</span>
      <span className="hidden sm:inline">Resume</span>
    </a>
  );
}
