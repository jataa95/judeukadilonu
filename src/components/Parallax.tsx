"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

/** Full-bleed image that drifts slightly slower than the page. */
export function Parallax({ src, alt }: { src: StaticImageData; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const img = el?.querySelector("img");
    if (!el || !img || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const p = (r.top + r.height) / (window.innerHeight + r.height); // 1 → 0 while passing
      img.style.transform = `translate3d(0, ${(p - 1) * 16}%, 0)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="bleed" ref={ref}>
      <Image src={src} alt={alt} placeholder="blur" sizes="100vw" quality={85} />
    </div>
  );
}
