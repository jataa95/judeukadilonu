"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Shot } from "@/content/site";
import { ArrowDown } from "./Icons";

/**
 * A slow, endless row of works curving around the viewer, like standing
 * inside a gallery rotunda. Each card's tilt is computed from its distance
 * to the centre of the strip. Static for reduced-motion users.
 */
export function HeroRing({ shots }: { shots: Shot[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>(".ring__card"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let offset = 0;
    let last = performance.now();
    let raf = 0;
    let visible = true;

    const layout = () => {
      const W = root.clientWidth;
      const cw = cards[0]?.offsetWidth ?? 240;
      const gap = Math.max(18, cw * 0.14);
      const step = cw + gap;
      const total = step * cards.length;
      const cx = W / 2;
      cards.forEach((card, i) => {
        let x = (((i * step - offset) % total) + total) % total;
        x -= step; // allow one card to enter from the left
        const center = x + cw / 2;
        const d = Math.max(-1.6, Math.min(1.6, (center - cx) / (W / 2)));
        const rot = -d * 26;
        const z = Math.abs(d) * 90;
        const scale = 1 + Math.abs(d) * 0.1;
        card.style.transform = `translate3d(${x}px,0,${z}px) rotateY(${rot}deg) scale(${scale})`;
      });
    };

    const tick = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;
      offset += dt * 0.035;
      layout();
      raf = requestAnimationFrame(tick);
    };

    layout();
    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !reduced) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    });
    io.observe(root);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="ring" ref={ref}>
      {shots.map((s, i) => (
        <div className="ring__card" key={i}>
          <Image src={s.src} alt={s.alt} placeholder="blur" sizes="280px" preload={i < 5} />
        </div>
      ))}
      <a href="#works" className="ring__cue" aria-label="Scroll to works">
        <ArrowDown />
      </a>
    </div>
  );
}
