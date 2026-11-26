const words = ["Clay", "Coral", "Memory", "Patina", "Heritage", "Tenderness", "Bronze", "Lineage"];

/** Slow ribbon of words in the serif italic, separated by small clay-red seals. */
export function Marquee() {
  const row = (
    <span className="marquee__row">
      {words.map((w) => (
        <span key={w} className="marquee__word">
          {w}
          <svg viewBox="0 0 20 20" aria-hidden>
            <path d="M10 1c1.6 4.6 4.4 7.4 9 9-4.6 1.6-7.4 4.4-9 9-1.6-4.6-4.4-7.4-9-9 4.6-1.6 7.4-4.4 9-9z" fill="currentColor" />
          </svg>
        </span>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {row}
        {row}
      </div>
    </div>
  );
}
