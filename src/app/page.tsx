import Image from "next/image";
import { site, works, heroShots, details, studio } from "@/content/site";
import { Nav, TopBar, Logo } from "@/components/Nav";
import { HeroRing } from "@/components/HeroRing";
import { Works } from "@/components/Works";
import { Angles } from "@/components/Angles";
import { ProcessVideo } from "@/components/ProcessVideo";
import { Parallax } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Marquee } from "@/components/Marquee";
import { Faq } from "@/components/Faq";
import { Enquiry } from "@/components/Enquiry";
import { Pin } from "@/components/Icons";

import obiDetail from "@/assets/works/obiagaeli-detail.jpg";
import odoStudio from "@/assets/works/odogwu-artist-studio.jpg";
import headPainting from "@/assets/works/head-artist-painting-2.jpg";

const odogwu = works[0];

export default function Home() {
  return (
    <>
      <TopBar />
      <Nav />
      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="wrap hero__inner">
            <Reveal className="hero__corner hero__corner--l">
              <span>N° 01–03</span>
              <span>Selected sculpture</span>
            </Reveal>
            <Reveal className="hero__corner hero__corner--r">
              <span>Clay · Fibreglass</span>
              <span>Patina by hand</span>
            </Reveal>

            <Reveal>
              <span className="eyebrow eyebrow--plain">Figurative Sculpture · {site.location}</span>
            </Reveal>
            <Reveal as="h1" className="display h1 hero__title" delay={100}>
              <span className="hero__line">Memory,</span>
              <span className="hero__line hero__line--indent">
                <em>
                  moulded
                  <svg className="brush" viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden>
                    <path d="M3 15c40-7 92-10 146-8 52 2 98 5 148 1-36 6-90 9-140 8-52-1-104 2-154-1z" />
                  </svg>
                </em>{" "}
                by hand
              </span>
            </Reveal>
            <Reveal className="hero__sub" delay={200}>
              <p className="lede">
                Sculpture by {site.name}, rooted in Igbo heritage and finished to look like bronze worn soft by time.
              </p>
              <div className="hero__actions">
                <Button href="#works">View the Works</Button>
                <a className="text-link" href="#commission">
                  Commission a piece
                </a>
              </div>
            </Reveal>
          </div>
          <HeroRing shots={heroShots} />
        </section>

        <Marquee />

        <Works />

        {/* Every angle */}
        <section className="section round" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <Reveal className="head head--center">
              <span className="eyebrow">In the Round</span>
              <h2 className="display h2">
                One Embrace, Seen From <em>Every</em> Side
              </h2>
            </Reveal>
            <Angles shots={odogwu.shots.slice(0, 5)} title={odogwu.title} meta={`${odogwu.medium} · ${odogwu.year}`} />
          </div>
        </section>

        {/* The artist */}
        <section className="section band" id="artist">
          <div className="wrap artist">
            <Reveal>
              <span className="eyebrow">The Artist</span>
              <div className="artist__photo">
                <div className="frame">
                  <Image src={studio.artist.src} alt={studio.artist.alt} placeholder="blur" sizes="360px" />
                </div>
                <div className="artist__caption">
                  <Pin /> Working from {site.location}
                </div>
              </div>
            </Reveal>
            <Reveal className="artist__copy" delay={120}>
              <h2 className="display h2">
                More Than Sculpture, <em>A Language</em> of Memory
              </h2>
              <p className="lede">
                {site.name} is a multidisciplinary artist working from {site.location}. The figures are built by hand, layer on layer, until the surface
                looks like weathered bronze. They take their cues from Igbo life: red caps of titled men, coral beads at the throat, names that carry a whole
                philosophy.
              </p>
              <p className="lede">Each piece starts with a person and a story, and is made to be lived with. Finished works are crated in the studio and shipped to collectors worldwide.</p>
              <dl className="practice">
                <div>
                  <dt>Practice</dt>
                  <dd>Figurative sculpture &amp; portraiture</dd>
                </div>
                <div>
                  <dt>Materials</dt>
                  <dd>Clay, fibreglass, hand-laid patina</dd>
                </div>
                <div>
                  <dt>Studio</dt>
                  <dd>{site.location}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        {/* Story */}
        <section className="section story-section">
          <div className="wrap story">
            <Reveal>
              <span className="eyebrow">Behind the Name</span>
            </Reveal>
            <Reveal delay={100}>
              <blockquote className="story__quote">
                <span className="story__mark" aria-hidden>
                  “
                </span>
                Life is a gift, and we are all visitors here, passing through, learning, growing, and leaving our mark. Ọbịagaeli reminds us of this truth.
              </blockquote>
              <div className="story__meaning">
                <span className="story__avatar">
                  <Image src={obiDetail} alt="" sizes="44px" />
                </span>
                <span>
                  <strong>Ọbịagaeli</strong>
                  <br />
                  “One who has come to live a good life” · 2025
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <Parallax src={odoStudio} alt="Jude Ụkadịlọnụ refining Odogwu and Achalugo II in the open air" />

        {/* Process */}
        <section className="section" id="process">
          <div className="wrap">
            <div className="process">
              <Reveal>
                <ProcessVideo src="/process-mama-agnes.mp4" poster="/process-poster.jpg" />
              </Reveal>
              <Reveal className="head__side" delay={120}>
                <span className="eyebrow">In the Studio</span>
                <h2 className="display h2">
                  From Raw Clay to <em>Living</em> Form
                </h2>
                <p className="lede">Every figure is modelled by hand before it becomes permanent. These are the slow, patient stages behind each finished work.</p>
                <ol className="steps">
                  <li>
                    <strong>The story</strong>
                    <span>A name, a memory, a moment in history. Every work begins with who it is about.</span>
                  </li>
                  <li>
                    <strong>Modelling in clay</strong>
                    <span>The form is built up and carved back by hand, then the gesture and the face are refined.</span>
                  </li>
                  <li>
                    <strong>Surface &amp; patina</strong>
                    <span>Texture is worked in, then colour is layered on until it reads like aged bronze, coral and skin.</span>
                  </li>
                </ol>
              </Reveal>
            </div>

            <div className="stills">
              {studio.stills.map((s, i) => (
                <Reveal as="figure" className="still" key={i} delay={i * 100}>
                  <div className="frame">
                    <Image src={s.src} alt={s.alt} placeholder="blur" sizes="(max-width: 600px) 50vw, 400px" />
                  </div>
                  <figcaption>{s.label}</figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="section details-section" id="details">
          <div className="wrap">
            <Reveal className="head head--center">
              <span className="eyebrow">Surface &amp; Detail</span>
              <h2 className="display h2">
                Up Close, Every Mark Is <em>Intentional</em>
              </h2>
            </Reveal>
            <div className="details">
              {details.map((d, i) => (
                <Reveal as="figure" className="detail" key={i} delay={(i % 3) * 100}>
                  <div className="frame">
                    <Image src={d.src} alt={d.alt} placeholder="blur" sizes={i < 2 ? "(max-width: 960px) 100vw, 620px" : "(max-width: 960px) 50vw, 410px"} />
                  </div>
                  <figcaption>
                    {d.label}
                    <span>{d.from}</span>
                  </figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Faq />

        {/* Commission */}
        <section className="commission" id="commission">
          <div className="wrap commission__grid">
            <Reveal className="commission__visual">
              <div className="commission__arch">
                <Image src={headPainting} alt="Jude Ụkadịlọnụ working on a portrait head in the studio" placeholder="blur" sizes="(max-width: 960px) 80vw, 460px" />
              </div>
              <svg className="seal" viewBox="0 0 200 200" aria-hidden>
                <defs>
                  <path id="seal-circle" d="M100 100m-74 0a74 74 0 1 1 148 0a74 74 0 1 1-148 0" />
                </defs>
                <circle cx="100" cy="100" r="98" />
                <text>
                  <textPath href="#seal-circle">Commissions open · Ships worldwide · Made by hand ·</textPath>
                </text>
                <path className="seal__star" d="M100 76c3 11 9 18 22 24-13 6-19 13-22 24-3-11-9-18-22-24 13-6 19-13 22-24z" />
              </svg>
            </Reveal>
            <Reveal className="commission__copy" delay={120}>
              <span className="eyebrow">Commissions &amp; Acquisitions</span>
              <h2 className="display h2">
                Let’s Shape <em>Your</em> Story in Clay
              </h2>
              <p className="lede">
                A grandmother’s face, a family’s title, a love that deserves to outlast us. Tell the studio about the piece you have in mind, or ask after one of the works above.
              </p>
              <Enquiry />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer__top">
            <div className="footer__about">
              <Logo />
              <p>Sculpture rooted in Igbo heritage, modelled by hand in {site.location} and shipped to collectors worldwide.</p>
            </div>
            <div>
              <h4>Explore</h4>
              <ul>
                <li>
                  <a href="#works">Works</a>
                </li>
                <li>
                  <a href="#artist">The Artist</a>
                </li>
                <li>
                  <a href="#process">Process</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Works</h4>
              <ul>
                {works.map((w) => (
                  <li key={w.slug}>
                    <a href="#works">{w.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Studio</h4>
              <ul>
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>{site.location}</li>
                <li>
                  <a href="#commission">Start a commission</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__word" aria-hidden>
            Ụkadịlọnụ
          </div>
          <div className="footer__bottom">
            <span>
              © {new Date().getFullYear()} {site.name}. All works and images © the artist.
            </span>
            <a href="#top" className="text-link">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
