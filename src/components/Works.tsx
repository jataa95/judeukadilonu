"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { works, type Work } from "@/content/site";
import { Reveal } from "./Reveal";
import { Arrow, Chevron, Close } from "./Icons";

export function Works() {
  const [active, setActive] = useState<Work | null>(null);
  const [featured, ...rest] = works;

  return (
    <section className="section" id="works">
      <div className="wrap">
        <div className="head">
          <Reveal>
            <span className="eyebrow">Selected Works</span>
            <h2 className="display h2">
              Faces That Carry <em>Our</em> Stories
            </h2>
          </Reveal>
          <Reveal className="head__side" delay={120}>
            <p className="lede">
              Figures modelled by hand and finished in layered, worked surfaces: chiefs in red caps, women crowned in coral, and the tenderness between them.
            </p>
            <a className="btn" href="#commission">
              Enquire About a Work <Arrow />
            </a>
          </Reveal>
        </div>

        <div className="works">
          <Reveal className="work work--wide" as="article">
            <WorkCard work={featured} wide onOpen={() => setActive(featured)} />
          </Reveal>
          {rest.map((w, i) => (
            <Reveal className="work" as="article" key={w.slug} delay={i * 120}>
              <WorkCard work={w} onOpen={() => setActive(w)} />
            </Reveal>
          ))}
        </div>
      </div>
      {active && <Lightbox work={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function WorkCard({ work, wide, onOpen }: { work: Work; wide?: boolean; onOpen: () => void }) {
  return (
    <>
      <button className="work__media" onClick={onOpen} aria-label={`View ${work.shots.length} photos of ${work.title}`}>
        <Image src={work.cover.src} alt={work.cover.alt} placeholder="blur" sizes={wide ? "(max-width: 960px) 100vw, 640px" : "(max-width: 960px) 100vw, 620px"} />
        <span className="work__count">{work.shots.length} views</span>
      </button>
      <div className="work__body">
        <div className="meta">
          <span className="meta__dot">{work.status}</span>
          <span>{work.medium}</span>
        </div>
        <h3 className="work__title">{work.title}</h3>
        {wide && (
          <>
            <p className="work__blurb">{work.blurb}</p>
            <dl className="specs">
              <div>
                <dt>Medium</dt>
                <dd>{work.medium}</dd>
              </div>
              <div>
                <dt>Size</dt>
                <dd>{work.size}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{work.year}</dd>
              </div>
            </dl>
            <button className="link-arrow" onClick={onOpen}>
              See every angle <Arrow />
            </button>
          </>
        )}
        {!wide && <p className="work__blurb">{work.blurb}</p>}
      </div>
    </>
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
