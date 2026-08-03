"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(easeOut(p) * target));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
