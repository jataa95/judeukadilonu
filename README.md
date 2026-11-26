# Jude Ụkadịlọnụ: Portfolio

Portfolio site for Jude Ụkadịlọnụ, a sculptor and multidisciplinary artist in Osogbo, Nigeria.

Built with Next.js 16 (App Router), React 19 and plain CSS. Brand palette: off-white `#f5f0e7`, clay black `#1d1916`, clay red `#a3271c` / `#7c1a12`. Type: Playfair Display + Inter.

## Develop

```bash
npm install
npm run dev
```

## Content

- All copy, works and image choices live in `src/content/site.ts`.
- Artwork photos are in `src/assets/works/` (imported statically so Next.js optimises them and generates blur placeholders).
- The studio reel is `public/process-mama-agnes.mp4` (compressed to ~8 MB) with `public/process-poster.jpg`.
- `assets/screenshots/` holds the Instagram screenshots used as source material for titles, sizes and bio. They are not shipped with the site.
