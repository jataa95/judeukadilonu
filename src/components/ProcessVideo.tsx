"use client";

import { useEffect, useRef, useState } from "react";
import { Sound } from "./Icons";

/** Muted, looping studio reel that only plays while on screen. Tap to hear the narration. */
export function ProcessVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) v.play().catch(() => {});
  };

  return (
    <div className="process__video">
      <video ref={ref} src={src} poster={poster} muted loop playsInline preload="metadata" aria-label="Jude Ụkadịlọnụ sculpting Mama Agnes and Friends in clay" />
      <span className="process__tag">In progress · Mama Agnes and Friends</span>
      <button className="process__sound" onClick={toggle} aria-pressed={!muted}>
        <Sound on={!muted} /> {muted ? "Play with sound" : "Mute"}
      </button>
    </div>
  );
}
