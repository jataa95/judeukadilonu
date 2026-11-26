import type { StaticImageData } from "next/image";

import obiFront from "@/assets/works/obiagaeli-front.jpg";
import obiProfile from "@/assets/works/obiagaeli-profile.jpg";
import obiBack from "@/assets/works/obiagaeli-back.jpg";
import obiDetail from "@/assets/works/obiagaeli-detail.jpg";
import obiWithArtist from "@/assets/works/obiagaeli-with-artist.jpg";
import obiArtistSide from "@/assets/works/obiagaeli-artist-side.jpg";

import odoFront from "@/assets/works/odogwu-front.jpg";
import odoThreeQuarter from "@/assets/works/odogwu-three-quarter.jpg";
import odoSide from "@/assets/works/odogwu-side.jpg";
import odoBack from "@/assets/works/odogwu-back.jpg";
import odoBack2 from "@/assets/works/odogwu-back-2.jpg";
import odoFace from "@/assets/works/odogwu-detail-face.jpg";
import odoTexture from "@/assets/works/odogwu-detail-texture.jpg";
import odoSignature from "@/assets/works/odogwu-signature.jpg";
import odoStudio from "@/assets/works/odogwu-artist-studio.jpg";

import headFront from "@/assets/works/head-front.jpg";
import headRight from "@/assets/works/head-right.jpg";
import headLeft from "@/assets/works/head-left.jpg";
import headPainting from "@/assets/works/head-artist-painting.jpg";
import headPainting2 from "@/assets/works/head-artist-painting-2.jpg";

export type Shot = { src: StaticImageData; alt: string; label?: string; from?: string };

export const site = {
  name: "Jude Ụkadịlọnụ",
  short: "Ụkadịlọnụ",
  role: "Multidisciplinary Artist",
  location: "Osogbo, Nigeria",
  url: "https://judeukadilonu.vercel.app",
  // TODO: replace with the studio's real enquiry address before launch.
  email: "hello@judeukadilonu.com",
};

export type Work = {
  slug: string;
  title: string;
  year: string;
  medium: string;
  size: string;
  status: string;
  blurb: string;
  cover: Shot;
  detail: Shot;
  shots: Shot[];
};

export const works: Work[] = [
  {
    slug: "odogwu-and-achalugo-ii",
    title: "Odogwu and Achalugo II",
    year: "2026",
    medium: "Fiberglass",
    size: "90 × 42 × 55 cm",
    status: "New",
    blurb:
      "A titled man in his red cap and coral beads holds his beloved close. Tenderness rendered in heavy, worked texture, and an embrace that keeps its warmth from every side.",
    detail: { src: odoFace, alt: "Close-up of Achalugo's face resting against Odogwu" },
    cover: { src: odoFront, alt: "Odogwu and Achalugo II, a fiberglass sculpture of an elder in a red cap embracing a woman crowned in coral beads" },
    shots: [
      { src: odoFront, alt: "Odogwu and Achalugo II, front view", label: "Front" },
      { src: odoThreeQuarter, alt: "Odogwu and Achalugo II, three-quarter view", label: "Three-quarter" },
      { src: odoSide, alt: "Odogwu and Achalugo II, side view", label: "Side" },
      { src: odoBack, alt: "Odogwu and Achalugo II, back view showing her hand on his back", label: "Back" },
      { src: odoBack2, alt: "Odogwu and Achalugo II, rear view", label: "Rear" },
      { src: odoFace, alt: "Detail of Achalugo's face and coral bead headband", label: "Detail" },
    ],
  },
  {
    slug: "obiagaeli",
    title: "Ọbịagaeli",
    year: "2025",
    medium: "Fibre glass",
    size: "53 × 35 × 30 cm",
    status: "2025",
    blurb:
      "“One who has come to live a good life.” A young woman crowned and draped in coral, her skin a living patina of green, violet and ochre.",
    detail: { src: obiProfile, alt: "Ọbịagaeli in profile" },
    cover: { src: obiFront, alt: "Ọbịagaeli, a fibreglass bust of a young woman in coral beads with a green and blue textured patina" },
    shots: [
      { src: obiFront, alt: "Ọbịagaeli, front view", label: "Front" },
      { src: obiProfile, alt: "Ọbịagaeli, profile view", label: "Profile" },
      { src: obiBack, alt: "Ọbịagaeli, back view showing braided hair", label: "Back" },
      { src: obiDetail, alt: "Ọbịagaeli, close-up of the face", label: "Detail" },
    ],
  },
  {
    slug: "portrait-head-red-cap",
    title: "Head in a Red Cap",
    year: "—",
    medium: "Mixed media",
    size: "Details on request",
    status: "Portrait",
    blurb:
      "A portrait head in the traditional red cap of Igbo titled men. Every plane of the face is pressed, pinched and painted by hand, from the furrowed brow down to the violet base.",
    detail: { src: headRight, alt: "Portrait head in a red cap, side view" },
    cover: { src: headFront, alt: "Sculpted portrait head of a man wearing a red cap" },
    shots: [
      { src: headFront, alt: "Portrait head in a red cap, front view", label: "Front" },
      { src: headLeft, alt: "Portrait head in a red cap, left three-quarter view", label: "Left" },
      { src: headRight, alt: "Portrait head in a red cap, right three-quarter view", label: "Right" },
    ],
  },
];

export const heroShots: Shot[] = [
  { src: headLeft, alt: "Portrait head in a red cap" },
  { src: obiArtistSide, alt: "Jude Ụkadịlọnụ beside Ọbịagaeli" },
  { src: odoFront, alt: "Odogwu and Achalugo II" },
  { src: obiFront, alt: "Ọbịagaeli" },
  { src: odoStudio, alt: "Jude Ụkadịlọnụ refining Odogwu and Achalugo II outdoors" },
  { src: headFront, alt: "Portrait head in a red cap, front" },
  { src: obiProfile, alt: "Ọbịagaeli in profile" },
  { src: odoThreeQuarter, alt: "Odogwu and Achalugo II, three-quarter view" },
];

export const details: Shot[] = [
  { src: odoFace, alt: "Close-up of Achalugo's face and coral headband", label: "Coral & Bronze", from: "Odogwu and Achalugo II" },
  { src: obiDetail, alt: "Close-up of Ọbịagaeli's face", label: "Living Patina", from: "Ọbịagaeli" },
  { src: odoTexture, alt: "Close-up of the worked surface texture", label: "Worked Surface", from: "Odogwu and Achalugo II" },
  { src: odoSignature, alt: "The artist's signature, Ukadilonu 2026, pressed into the sculpture", label: "Signed by Hand", from: "Odogwu and Achalugo II" },
  { src: headRight, alt: "Portrait head in a red cap, side light", label: "Light & Plane", from: "Head in a Red Cap" },
];

export const studio = {
  artist: { src: obiWithArtist, alt: "Jude Ụkadịlọnụ standing behind the bust Ọbịagaeli" },
  stills: [
    { src: headPainting, alt: "Jude Ụkadịlọnụ painting the red cap of a portrait head", label: "Painting the cap" },
    { src: odoStudio, alt: "Jude Ụkadịlọnụ refining Odogwu and Achalugo II", label: "Final refinements" },
    { src: headPainting2, alt: "Jude Ụkadịlọnụ working on a portrait head", label: "Building the surface" },
  ] as Shot[],
};

export const nav = [
  { label: "Works", href: "#works" },
  { label: "The Artist", href: "#artist" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const faqs = [
  {
    q: "Do you take commissions?",
    a: "Yes. Portrait heads, busts and figurative groups can all be commissioned. Share who or what the piece is about, the size you have in mind and where it will live, and the studio will reply with a proposal.",
  },
  {
    q: "What are the sculptures made of?",
    a: "Each figure is first modelled by hand in clay. Finished works are produced in fibreglass and hand-finished with layered texture and colour, so they keep the look of aged bronze while staying light and durable.",
  },
  {
    q: "Can you ship to my country?",
    a: "Yes. Works are carefully crated in Osogbo, Nigeria and shipped to collectors worldwide. Shipping is quoted separately based on the size of the piece and the destination.",
  },
  {
    q: "How long does a commission take?",
    a: "It depends on the scale and detail of the piece. A timeline is agreed with you before work begins, and you receive progress photos from the studio along the way.",
  },
  {
    q: "How do I find out the price of a work?",
    a: "Prices are shared on request. Send an enquiry with the title of the work you are interested in, or a short description of your commission.",
  },
  {
    q: "How should I care for my sculpture?",
    a: "Display it indoors away from harsh direct sun, and dust it gently with a soft, dry brush or cloth. Avoid water and cleaning chemicals on the patina.",
  },
];
