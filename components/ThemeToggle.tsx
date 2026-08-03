"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--border)] bg-[var(--card)] text-lg transition-transform duration-200 hover:-translate-y-0.5 hover:border-accent"
    >
      {mounted ? (isDark ? "☀️" : "🌙") : <span className="opacity-0">•</span>}
    </button>
  );
}
