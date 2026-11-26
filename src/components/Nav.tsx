"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { Button } from "./Button";

import odoFront from "@/assets/works/odogwu-front.jpg";
import obiWithArtist from "@/assets/works/obiagaeli-with-artist.jpg";
import headPainting from "@/assets/works/head-artist-painting.jpg";
import odoFace from "@/assets/works/odogwu-detail-face.jpg";
import obiBack from "@/assets/works/obiagaeli-back.jpg";
import headPainting2 from "@/assets/works/head-artist-painting-2.jpg";

const links = [
  { label: "Works", href: "#works", img: odoFront, note: "Three sculptures, every angle" },
  { label: "The Artist", href: "#artist", img: obiWithArtist, note: "Osogbo, Nigeria" },
  { label: "Process", href: "#process", img: headPainting, note: "From raw clay to living form" },
  { label: "Details", href: "#details", img: odoFace, note: "Surface, patina, signature" },
  { label: "FAQ", href: "#faq", img: obiBack, note: "Commissions, shipping, care" },
  { label: "Commission", href: "#commission", img: headPainting2, note: "Let’s shape your story" },
];

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a href="#top" className="logo" aria-label={`${site.name}, home`} onClick={onClick}>
      <span className="logo__mark" aria-hidden>
        Ụ
      </span>
      <span className="logo__word">{site.name}</span>
    </a>
  );
}

/** Each letter carries a copy of itself just below (via text-shadow) and rolls up on hover, one after another. */
function Rolling({ word }: { word: string }) {
  return (
    <span className="roll">
      {word.split("").map((ch, i) => (
        <span key={i} style={{ "--l": i } as React.CSSProperties}>
          {ch}
        </span>
      ))}
    </span>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(0);
  const burger = useRef<HTMLButtonElement>(null);

  // Tuck the bar away while scrolling down, bring it back on the way up.
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 160 && y > lastY);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burger.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  // The orb leans gently toward the cursor (fine pointers only), then settles back.
  const magnet = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.pointerType !== "mouse") return;
    const orb = e.currentTarget.querySelector<HTMLElement>(".burger__orb");
    if (!orb) return;
    const r = orb.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    orb.style.setProperty("--mx", `${Math.max(-1, Math.min(1, dx)) * 7}px`);
    orb.style.setProperty("--my", `${Math.max(-1, Math.min(1, dy)) * 7}px`);
  };
  const release = (e: React.PointerEvent<HTMLButtonElement>) => {
    const orb = e.currentTarget.querySelector<HTMLElement>(".burger__orb");
    orb?.style.setProperty("--mx", "0px");
    orb?.style.setProperty("--my", "0px");
  };

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : ""} ${hidden && !open ? "is-hidden" : ""}`}>
        <div className="wrap">
          <Logo onClick={close} />
          <button
            ref={burger}
            className="burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
            onPointerMove={magnet}
            onPointerLeave={release}
          >
            <span className="burger__label" aria-hidden>
              <Rolling word="Menu" />
              <Rolling word="Close" />
            </span>
            <span className="burger__orb" aria-hidden>
              <svg className="burger__ring" viewBox="0 0 52 52">
                <circle cx="26" cy="26" r="25" pathLength="100" />
              </svg>
              <span className="burger__lines">
                <i />
                <i />
              </span>
            </span>
          </button>
        </div>
      </header>

      <div id="site-menu" className="overlay" aria-hidden={!open} inert={!open}>
        <div className="wrap overlay__grid">
          <nav className="overlay__links" aria-label="Main">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={active === i ? "is-active" : ""}
                style={{ "--i": i } as React.CSSProperties}
              >
                <span className="overlay__mask">
                  <span className="overlay__word">
                    <sup>0{i + 1}</sup>
                    {l.label}
                  </span>
                </span>
              </a>
            ))}
          </nav>

          <div className="overlay__preview" aria-hidden>
            <div className="overlay__arch">
              {links.map((l, i) => (
                <Image key={l.href} src={l.img} alt="" sizes="380px" className={active === i ? "is-active" : ""} />
              ))}
            </div>
            <p className="overlay__note">{links[active].note}</p>
          </div>
        </div>

        <div className="wrap overlay__foot">
          <div>
            <span>Studio</span>
            {site.location}
          </div>
          <div>
            <span>Enquiries</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div>
            <span>Availability</span>
            Commissions open · Ships worldwide
          </div>
          <Button href="#commission" variant="light" onClick={close}>
            Start a Commission
          </Button>
        </div>
      </div>
    </>
  );
}
