"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { works, type Work } from "@/content/site";
import { Reveal } from "./Reveal";
import { Chevron, Close } from "./Icons";
import { Button } from "./Button";

export function Works() {
  const [active, setActive] = useState<Work | null>(null);

  return (
    <section className="section works-section" id="works">
      <div className="wrap">
        <div className="works-head">
          <Reveal>
            <span className="eyebrow">Selected Works</span>
            <h2 className="display h2">
              Faces That Carry <em>Our</em> Stories
            </h2>
          </Reveal>
          <Reveal className="works-head__side" delay={120}>
            <span className="works-head__count" aria-hidden>
              ({String(works.length).padStart(2, "0")})
            </span>
            <p className="lede">Chiefs in red caps, women crowned in coral, and the tenderness between them, each modelled by hand and finished layer by layer.</p>
          </Reveal>
        </div>

        <div className="opus-list">
          {works.map((w, i) => (
            <article className={`opus ${i % 2 ? "opus--flip" : ""}`} key={w.slug}>
              <Reveal className="opus__visual">
                <button className="opus__arch" onClick={() => setActive(w)} aria-label={`View ${w.shots.length} photos of ${w.title}`}>
                  <Image src={w.cover.src} alt={w.cover.alt} placeholder="blur" sizes="(max-width: 960px) 90vw, 560px" />
                </button>
                <div className="opus__detail" aria-hidden>
                  <Image src={w.detail.src} alt="" placeholder="blur" sizes="220px" />
                </div>
                <span className="opus__num" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Reveal>
              <Reveal className="opus__text" delay={140}>
                <div className="meta">
                  <span className="meta__dot">{w.status}</span>
                  <span>{w.medium}</span>
                </div>
                <h3 className="opus__title">{w.title}</h3>
                <p className="opus__blurb">{w.blurb}</p>
                <dl className="ledger">
                  <div>
                    <dt>Medium</dt>
                    <dd>{w.medium}</dd>
                  </div>
                  <div>
                    <dt>Dimensions</dt>
                    <dd>{w.size}</dd>
                  </div>
                  <div>
                    <dt>Year</dt>
                    <dd>{w.year}</dd>
                  </div>
                </dl>
                <div className="opus__actions">
                  <Button variant="line" onClick={() => setActive(w)}>
                    See all {w.shots.length} views
                  </Button>
                  <a className="text-link" href="#commission">
                    Enquire
                  </a>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
      {active && <Lightbox work={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function Lightbox({ work, onClose }: { work: Work; onClose: () => void }) {
  const [i, setI] = useState(0);
  const n = work.shots.length;
  const go = useCallback((d: number) => setI((v) => (v + d + n) % n), [n]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    const html = document.documentElement;
    html.classList.add("lightbox-open");
    html.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      html.classList.remove("lightbox-open");
      html.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [go, onClose]);

  const shot = work.shots[i];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={work.title}>
      <div className="lightbox__top">
        <div>
          <div className="lightbox__title">{work.title}</div>
          <div className="meta" style={{ color: "rgba(245,240,231,.6)" }}>
            <span>{work.medium}</span>
            <span>{work.size}</span>
            {work.year !== "—" && <span>{work.year}</span>}
          </div>
        </div>
        <button className="icon-btn" onClick={onClose} aria-label="Close" autoFocus>
          <Close />
        </button>
      </div>
      <div className="lightbox__stage">
        <Image key={i} src={shot.src} alt={shot.alt} fill sizes="100vw" quality={85} placeholder="blur" />
      </div>
      <div className="lightbox__bottom">
        <div className="thumbs">
          {work.shots.map((s, j) => (
            <button key={j} aria-current={i === j} aria-label={s.label ?? `Photo ${j + 1}`} onClick={() => setI(j)}>
              <Image src={s.src} alt="" sizes="60px" />
            </button>
          ))}
        </div>
        <div className="lightbox__nav">
          <span>
            {shot.label} · {i + 1}/{n}
          </span>
          <button className="icon-btn" onClick={() => go(-1)} aria-label="Previous photo">
            <Chevron dir="left" />
          </button>
          <button className="icon-btn" onClick={() => go(1)} aria-label="Next photo">
            <Chevron />
          </button>
        </div>
      </div>
    </div>
  );
}
