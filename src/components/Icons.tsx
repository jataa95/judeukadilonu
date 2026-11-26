type P = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const Arrow = ({ size = 16 }: P) => (
  <svg {...base(size)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowDown = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const Chevron = ({ size = 18, dir = "right" }: P & { dir?: "left" | "right" }) => (
  <svg {...base(size)} style={{ transform: dir === "left" ? "scaleX(-1)" : undefined }}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export const Close = ({ size = 18 }: P) => (
  <svg {...base(size)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const Pin = ({ size = 15 }: P) => (
  <svg {...base(size)}>
    <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const Globe = ({ size = 15 }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
  </svg>
);

export const Instagram = ({ size = 16 }: P) => (
  <svg {...base(size)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

export const Threads = ({ size = 16 }: P) => (
  <svg {...base(size)}>
    <path d="M16.5 11.2c-.4-2.3-2-3.6-4.3-3.6-2.6 0-4.2 1.8-4.2 4.4 0 3 1.9 4.6 4.4 4.6 2.1 0 3.6-1.1 3.6-2.8 0-2-2.2-2.6-4.3-2.3-1.6.2-2.4 1-2.3 2" />
    <path d="M19.5 7.5C18 4.6 15.4 3 12 3 6.8 3 4 6.6 4 12s2.8 9 8 9c4.4 0 7.5-2.4 7.5-6.2" />
  </svg>
);

export const Sound = ({ size = 15, on }: P & { on: boolean }) => (
  <svg {...base(size)}>
    <path d="M4 9v6h4l5 4V5L8 9H4z" />
    {on ? <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" /> : <path d="M17 9l5 6M22 9l-5 6" />}
  </svg>
);
