"use client";

import { useEffect, useRef } from "react";

export default function BackgroundFX() {
  const glowRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    const onScroll = () => {
      const y = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (y / height) * 100 : 0;
      if (progressRef.current) progressRef.current.style.width = `${progress}%`;
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={progressRef}
        aria-hidden="true"
        className="fixed left-0 top-0 z-[9999] h-[3px] w-0 bg-gradient-to-r from-accent to-[var(--accent-soft)]"
      />
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed z-[1] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(20,184,166,.16), transparent 68%)",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <span
          className="absolute -left-[100px] -top-[120px] h-[520px] w-[520px] animate-blob1 rounded-full opacity-50 blur-[70px]"
          style={{ background: "radial-gradient(circle, rgba(20,184,166,.42), transparent 68%)" }}
        />
        <span
          className="absolute -right-[140px] top-[32%] h-[460px] w-[460px] animate-blob2 rounded-full opacity-50 blur-[70px]"
          style={{ background: "radial-gradient(circle, rgba(15,139,125,.30), transparent 68%)" }}
        />
        <span
          className="absolute -bottom-[120px] left-[28%] h-[400px] w-[400px] animate-blob3 rounded-full opacity-50 blur-[70px]"
          style={{ background: "radial-gradient(circle, rgba(182,123,53,.20), transparent 68%)" }}
        />
      </div>
    </>
  );
}
