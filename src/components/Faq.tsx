import Image from "next/image";
import { faqs } from "@/content/site";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import obiBack from "@/assets/works/obiagaeli-back.jpg";

export function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap faq">
        <Reveal className="faq__aside">
          <span className="eyebrow">Questions</span>
          <h2 className="display h2">
            Before You <em>Begin</em>
          </h2>
          <p className="lede">What collectors usually ask about commissions, materials and shipping.</p>
          <div className="faq__arch">
            <Image src={obiBack} alt="Ọbịagaeli seen from behind, showing the braided hair and coral beads" placeholder="blur" sizes="320px" />
          </div>
        </Reveal>
        <Reveal className="faq__list" delay={120}>
          {faqs.map((f, i) => (
            <details className="faq__item" key={f.q} name="faq" open={i === 0}>
              <summary>
                <span className="faq__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="faq__q">{f.q}</span>
                <span className="faq__icon" aria-hidden />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
          <div className="faq__more">
            <span>Still have a question?</span>
            <Button href="#commission" variant="line">
              Ask the Studio
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
