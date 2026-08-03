import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-soft": "var(--bg-soft)",
        text: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "accent-deep": "var(--accent-deep)",
        "accent-tint": "var(--accent-tint)",
        gold: "var(--gold)",
        border: "var(--border)",
        card: "var(--card)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
      boxShadow: {
        soft: "var(--shadow)",
      },
      keyframes: {
        blobFloat: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.08)" },
          "66%": { transform: "translate(-30px,25px) scale(.96)" },
        },
        mernMove: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%, 100%": { boxShadow: "0 0 0 6px var(--accent-tint)" },
          "50%": { boxShadow: "0 0 0 12px rgba(15,139,125,.05)" },
        },
      },
      animation: {
        blob1: "blobFloat 18s ease-in-out infinite",
        blob2: "blobFloat 22s ease-in-out infinite reverse",
        blob3: "blobFloat 26s ease-in-out infinite",
        marquee: "mernMove 24s linear infinite",
        pulseRing: "pulseRing 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
