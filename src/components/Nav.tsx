"use client";

import { useEffect, useState } from "react";
import { site, nav } from "@/content/site";
import { Button } from "./Button";
import { Globe, Pin } from "./Icons";

export function Logo() {
  return (
    <a href="#top" className="logo" aria-label={`${site.name}, home`}>
      <span className="logo__mark" aria-hidden>
        Ụ
      </span>
      <span className="logo__word">{site.name}</span>
    </a>
  );
}

export function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <span className="topbar__item">
          <Pin /> Studio in {site.location}
        </span>
        <span className="topbar__item topbar__item--right">
          <Globe /> Commissions open · Ships worldwide
        </span>
      </div>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="wrap">
          <Logo />
          <nav className="nav__links" aria-label="Main">
            {nav.map((l, i) => (
              <a key={l.href} href={l.href}>
                <sup>0{i + 1}</sup>
                {l.label}
              </a>
            ))}
          </nav>
          <Button href="#commission" className="nav__cta">
            Commission
          </Button>
          <button className="nav__burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span />
            <span />
          </button>
        </div>
      </header>
      <div className="mobile-menu" aria-hidden={!open} inert={!open}>
        {nav.map((l, i) => (
          <a key={l.href} href={l.href} onClick={close}>
            <sup>0{i + 1}</sup>
            {l.label}
          </a>
        ))}
        <Button href="#commission" onClick={close}>
          Commission a Piece
        </Button>
      </div>
    </>
  );
}
