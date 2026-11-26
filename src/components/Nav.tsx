"use client";

import { useEffect, useState } from "react";
import { site, nav } from "@/content/site";
import { Arrow, Globe, Instagram, Pin } from "./Icons";

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
        <div className="topbar__group">
          <span className="topbar__item">
            <Pin /> Studio in {site.location}
          </span>
        </div>
        <div className="topbar__group topbar__group--right">
          <span className="topbar__item">
            <Globe /> Ships worldwide
          </span>
          <a className="topbar__item" href={site.instagram} target="_blank" rel="noreferrer">
            <Instagram size={15} /> {site.handle}
          </a>
        </div>
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
            {nav.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a className="btn" href="#commission">
            Commission a Piece <Arrow />
          </a>
          <button className="nav__burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span />
            <span />
          </button>
        </div>
      </header>
      <div className="mobile-menu" aria-hidden={!open} inert={!open}>
        {nav.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a className="btn" href="#commission" onClick={close}>
          Commission a Piece <Arrow />
        </a>
      </div>
    </>
  );
}
