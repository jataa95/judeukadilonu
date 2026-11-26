import Image from "next/image";
import { site, works, heroShots, details, studio } from "@/content/site";
import { Nav, TopBar, Logo } from "@/components/Nav";
import { HeroRing } from "@/components/HeroRing";
import { Works } from "@/components/Works";
import { Angles } from "@/components/Angles";
import { ProcessVideo } from "@/components/ProcessVideo";
import { Parallax } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import { Arrow, Instagram, Pin, Threads } from "@/components/Icons";

import obiFront from "@/assets/works/obiagaeli-front.jpg";
import obiDetail from "@/assets/works/obiagaeli-detail.jpg";
import odoStudio from "@/assets/works/odogwu-artist-studio.jpg";
import headLeft from "@/assets/works/head-left.jpg";
import obiArtistSide from "@/assets/works/obiagaeli-artist-side.jpg";
import odoSide from "@/assets/works/odogwu-side.jpg";
import headPainting from "@/assets/works/head-artist-painting.jpg";
import obiProfile from "@/assets/works/obiagaeli-profile.jpg";
import odoFace from "@/assets/works/odogwu-detail-face.jpg";

const odogwu = works[0];

const floats = [
  { src: headLeft, x: "-2%", y: "6%", w: "150px", delay: "0s" },
  { src: obiProfile, x: "9%", y: "62%", w: "130px", delay: "-3s" },
  { src: odoSide, x: "80%", y: "4%", w: "120px", delay: "-1.5s" },
  { src: obiArtistSide, x: "66%", y: "14%", w: "170px", ar: "4 / 3", delay: "-5s" },
  { src: headPainting, x: "86%", y: "58%", w: "140px", delay: "-2s" },
  { src: odoFace, x: "20%", y: "-4%", w: "110px", ar: "1 / 1", delay: "-4s" },
  { src: obiFront, x: "62%", y: "74%", w: "120px", ar: "1 / 1", delay: "-6s" },
];

export default function Home() {
  return (
    <>
      <TopBar />
      <Nav />
      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow eyebrow--plain">Sculptor · {site.location}</span>
            </Reveal>
            <Reveal as="h1" className="display h1 hero__title" delay={100}>
              Where Clay <br />
              <em>Remembers</em> Who We Are
            </Reveal>
            <Reveal delay={200}>
              <a className="btn" href="#works">
                Explore the Works <Arrow />
              </a>
            </Reveal>
          </div>
          <HeroRing shots={heroShots} />
        </section>

        <Works />

        {/* Every angle */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <Reveal className="head head--center">
              <span className="eyebrow">In the Round</span>
              <h2 className="display h2">One Embrace, Seen From Every Side</h2>
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
              <p className="lede">Each piece starts with a person and a story, and is made to be lived with. Collectors around the world receive finished works shipped from the studio.</p>
              <a className="btn btn--light" href={site.instagram} target="_blank" rel="noreferrer">
                Follow the Studio <Arrow />
              </a>
              <div className="stats">
                <div>
                  <div className="stat__num">37k+</div>
                  <div className="stat__label">Followers on Instagram</div>
                </div>
                <div>
                  <div className="stat__num">286</div>
                  <div className="stat__label">Works &amp; stories shared</div>
                </div>
              </div>
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
              <blockquote className="story__quote" style={{ margin: 0 }}>
                <p style={{ margin: "0 0 32px" }}>
                  “Life is a gift, and we are all visitors here, passing through, learning, growing, and leaving our mark. Ọbịagaeli reminds us of this truth.”
                </p>
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

        <hr className="rule wrap" style={{ maxWidth: "calc(var(--wrap))" }} />

        {/* Details */}
        <section className="section" id="details">
          <div className="wrap">
            <Reveal className="head head--center">
              <span className="eyebrow">Surface &amp; Detail</span>
              <h2 className="display h2">Up Close, Every Mark Is Intentional</h2>
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

        {/* Commission */}
        <section className="band visit" id="commission">
          {floats.map((f, i) => (
            <div
              className="float"
              key={i}
              aria-hidden
              style={{ "--x": f.x, "--y": f.y, "--w": f.w, "--ar": f.ar, "--delay": f.delay } as React.CSSProperties}
            >
              <Image src={f.src} alt="" sizes="170px" />
            </div>
          ))}
          <Reveal className="visit__inner">
            <span className="eyebrow eyebrow--plain">Commissions &amp; Acquisitions</span>
            <h2 className="display h2">
              Bring a Story Into <em>Your</em> Space
            </h2>
            <a className="btn btn--light" href={site.dm} target="_blank" rel="noreferrer">
              Enquire on Instagram <Arrow />
            </a>
            <span className="visit__note">Portraits, busts &amp; figurative works · Ships worldwide</span>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer__top">
            <div className="footer__about">
              <Logo />
              <p style={{ margin: 0 }}>Sculpture rooted in Igbo heritage, modelled by hand in {site.location} and shipped to collectors worldwide.</p>
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
                  <a href="#details">Details</a>
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
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href={site.dm} target="_blank" rel="noreferrer">
                    Message on Instagram
                  </a>
                </li>
                <li>{site.handle}</li>
                <li>{site.location}</li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} {site.name}. All works and images © the artist.</span>
            <div className="socials">
              <a className="icon-btn" href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram />
              </a>
              <a className="icon-btn" href={site.threads} target="_blank" rel="noreferrer" aria-label="Threads">
                <Threads />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
