"use client";

import Image from "next/image";
import { useState } from "react";
import type { Shot } from "@/content/site";
import { Chevron } from "./Icons";

/** Centre-focused carousel: one view of the sculpture in front, neighbours fanned out behind. */
export function Angles({ shots, title, meta }: { shots: Shot[]; title: string; meta: string }) {
  const [i, setI] = useState(0);
  const n = shots.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <>
      <div className="angles" aria-roledescription="carousel" aria-label={`${title}, views`}>
        {shots.map((s, j) => {
          let d = j - i;
          if (d > n / 2) d -= n;
          if (d < -n / 2) d += n;
          const a = Math.abs(d);
          const hidden = a > 2;
          const style = {
            transform: `translate(-50%, -50%) translateX(${d * 62}%) scale(${1 - a * 0.2})`,
            zIndex: 10 - a,
            opacity: hidden ? 0 : 1,
            filter: a ? `saturate(${1 - a * 0.25})` : undefined,
            pointerEvents: hidden ? ("none" as const) : undefined,
          };
          return (
            <button
              className="angles__card"
              key={j}
              style={style}
              onClick={() => setI(j)}
              tabIndex={a === 1 ? 0 : -1}
              aria-hidden={a !== 0 && a !== 1}
              aria-label={a === 0 ? s.alt : `Show ${s.label} view`}
            >
              <Image src={s.src} alt={s.alt} placeholder="blur" sizes="(max-width: 600px) 240px, 380px" />
            </button>
          );
        })}
      </div>
      <div className="angles__controls">
        <button className="icon-btn" onClick={() => go(-1)} aria-label="Previous view">
          <Chevron dir="left" />
        </button>
        <div className="angles__label" aria-live="polite">
          <div className="meta">
            <span className="meta__dot">{shots[i].label} view</span>
            <span>{meta}</span>
          </div>
          <span className="work__title">{title}</span>
        </div>
        <button className="icon-btn" onClick={() => go(1)} aria-label="Next view">
          <Chevron />
        </button>
      </div>
    </>
  );
}
