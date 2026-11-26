"use client";

import { useState, type FormEvent } from "react";
import { site, works } from "@/content/site";
import { Button } from "./Button";

const kinds = ["A commissioned portrait or bust", "A figurative group", ...works.map((w) => `The work “${w.title}”`), "Something else"];

/** Composes a ready-to-send email in the visitor's mail app. No data is stored by the site. */
export function Enquiry() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "");
    const subject = `Enquiry: ${f.get("kind")}`;
    const body = `Hello Jude,\n\n${f.get("message")}\n\nName: ${name}\nEmail: ${f.get("email")}\nShipping to: ${f.get("country") || "—"}\n`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="enquiry" onSubmit={onSubmit}>
      <div className="enquiry__row">
        <label className="field">
          <span>Your name</span>
          <input name="name" required autoComplete="name" placeholder="Adaeze Okafor" />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
        </label>
      </div>
      <div className="enquiry__row">
        <label className="field">
          <span>I’m interested in</span>
          <select name="kind" defaultValue={kinds[0]}>
            {kinds.map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Shipping to</span>
          <input name="country" autoComplete="country-name" placeholder="City, country" />
        </label>
      </div>
      <label className="field">
        <span>Tell the story</span>
        <textarea name="message" required rows={4} placeholder="Who is the piece about, what size are you imagining, and where will it live?" />
      </label>
      <div className="enquiry__foot">
        <Button type="submit" variant="light">
          Send Enquiry
        </Button>
        <span className="enquiry__note" aria-live="polite">
          {sent ? "Your email app should open with the message ready to send." : `Or write directly to ${site.email}`}
        </span>
      </div>
    </form>
  );
}
