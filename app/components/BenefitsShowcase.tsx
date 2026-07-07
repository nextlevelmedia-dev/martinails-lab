import type { CSSProperties } from "react";
import { RevealImage } from "./RevealImage";

const benefits = [
  {
    eyebrow: "Struttura e armonia",
    title: "Ricostruzione unghie",
    text: "Se desideri unghie più resistenti, curate e armoniose, con una forma studiata per valorizzare le tue mani.",
    image: "/images/showcase1.webp",
    alt: "Ricostruzione unghie",
  },
  {
    eyebrow: "Naturalezza e flessibilità",
    title: "Gel B-Flex",
    text: "Se desideri un risultato naturale, sottile e confortevole, che rinforzi le tue unghie mantenendo un aspetto leggero e armonioso.",
    image: "/images/showcase2.webp",
    alt: "Gel B-Flex",
  },
  {
    eyebrow: "Resistenza e brillantezza",
    title: "Gel Original",
    text: "Se desideri unghie definite, eleganti e resistenti, con un risultato curato che mantiene bellezza e brillantezza nel tempo.",
    image: "/images/showcase3.webp",
    alt: "Gel Original",
  },
];

export function BenefitsShowcase() {
  return (
    <section
      id="servizi"
      className="bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site">
        <div className="mx-auto mb-16 max-w-[720px] text-center lg:mb-20">
          <p
            className="js-reveal mb-4 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)]"
            style={{ "--reveal-delay": "100ms" } as CSSProperties}
          >
            I miei servizi
          </p>

          <h2 className="js-split-title text-[40px] font-normal leading-[1.02] tracking-[-0.03em] sm:text-[50px] lg:text-[58px]">
            Il trattamento giusto per valorizzare le tue unghie
            <span className="text-[var(--pink)]">.</span>
          </h2>

          <div
            className="js-reveal mx-auto mt-7 h-[2px] w-16 bg-[var(--pink)]"
            style={{ "--reveal-delay": "300ms" } as CSSProperties}
          />
        </div>

        <div className="space-y-20 lg:space-y-28">
          {benefits.map((benefit, index) => {
            const isReverse = index % 2 === 1;

            return (
              <article
                key={benefit.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20"
              >
                <div className={isReverse ? "lg:order-2" : "lg:order-1"}>
                  <RevealImage
                    src={benefit.image}
                    alt={benefit.alt}
                    direction={isReverse ? "right" : "left"}
                  />
                </div>

                <div className={isReverse ? "lg:order-1" : "lg:order-2"}>
                  <p
                    className="js-reveal mb-4 text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--pink)]"
                    style={{ "--reveal-delay": "100ms" } as CSSProperties}
                  >
                    {benefit.eyebrow}
                  </p>

                  <h3 className="js-split-title max-w-[480px] text-[36px] font-normal leading-[1.05] tracking-[-0.025em] sm:text-[44px] lg:text-[48px]">
                    {benefit.title}
                    <span className="text-[var(--pink)]">.</span>
                  </h3>

                  <div
                    className="js-reveal mt-6 h-[2px] w-14 bg-[var(--pink)]"
                    style={{ "--reveal-delay": "300ms" } as CSSProperties}
                  />

                  <p
                    className="js-reveal mt-6 max-w-[500px] text-[15px] leading-[1.8] text-[var(--gray-dark)] sm:text-[16px]"
                    style={{ "--reveal-delay": "420ms" } as CSSProperties}
                  >
                    {benefit.text}
                  </p>

                  <div
                    className="js-reveal js-reveal-cta mt-8"
                    style={{ "--reveal-delay": "560ms" } as CSSProperties}
                  >
                    <a href="#listino-prezzi" className="btn-primary">
                      Scrivimi su WhatsApp
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}