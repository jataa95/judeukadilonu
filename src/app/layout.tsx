import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { site } from "@/content/site";
import { SmoothScroll } from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";
import OjdznCredit from "../components/OjdznCredit";

const sans = Inter({ variable: "--font-sans", subsets: ["latin", "latin-ext", "vietnamese"], display: "swap" });
const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext", "vietnamese"],
  style: ["normal", "italic"],
  display: "swap",
});

const title = `${site.name} | Sculptor & Multidisciplinary Artist`;
const description =
  "Jude Ụkadịlọnụ is a multidisciplinary artist and sculptor in Osogbo, Nigeria, making textured fiberglass figures rooted in Igbo heritage. Commissions welcome; ships worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description,
  keywords: ["Jude Ukadilonu", "Nigerian sculptor", "Osogbo artist", "fiberglass sculpture", "Igbo art", "African contemporary sculpture", "art commission"],
  authors: [{ name: site.name }],
  openGraph: { title, description, url: site.url, siteName: site.name, type: "website", locale: "en_NG" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#e8e0d3" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: "Jude Ukadilonu",
  jobTitle: "Sculptor & Multidisciplinary Artist",
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: "Osogbo", addressCountry: "NG" },
  email: site.email,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <SmoothScroll />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <OjdznCredit from="judeukadilonu" />
      </body>
    </html>
  );
}
