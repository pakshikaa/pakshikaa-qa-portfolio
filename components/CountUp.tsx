"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  // Fallback/SSR value is always the real target — crawlers and pre-hydration
  // paint see the correct number, never a "0+" flash. The count-up below is a
  // progressive enhancement layered on top, and only plays for a genuine
  // scroll-into-view (not for content already visible at first paint).
  const [value, setValue] = useState(target);
  const wasVisibleOnMount = useRef(true);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    wasVisibleOnMount.current = rect.top < window.innerHeight && rect.bottom > 0;
  }, []);

  useEffect(() => {
    if (!inView || wasVisibleOnMount.current) return;

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
