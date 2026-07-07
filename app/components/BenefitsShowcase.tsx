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

const imageSparkles = [
  [
    {
      className:
        "sparkle sparkle-slow absolute bottom-[36%] left-[58%] text-[16px] sm:text-[20px]",
    },
    {
      className:
        "sparkle sparkle-delay-1 absolute bottom-[54%] left-[72%] text-[12px] sm:text-[16px]",
    },
    {
      className:
        "sparkle sparkle-delay-2 absolute bottom-[24%] left-[82%] text-[10px] sm:text-[14px]",
    },
    {
      className:
        "pearl pearl-delay-3 absolute bottom-[46%] left-[42%] h-[5px] w-[5px] sm:h-[7px] sm:w-[7px]",
    },
  ],
  [
    {
      className:
        "sparkle sparkle-delay-1 absolute bottom-[42%] left-[48%] text-[15px] sm:text-[19px]",
    },
    {
      className:
        "sparkle sparkle-slow absolute bottom-[58%] left-[66%] text-[12px] sm:text-[16px]",
    },
    {
      className:
        "sparkle sparkle-delay-2 absolute bottom-[28%] left-[76%] text-[10px] sm:text-[14px]",
    },
    {
      className:
        "pearl pearl-delay-3 absolute bottom-[31%] left-[68%] h-[5px] w-[5px] sm:h-[7px] sm:w-[7px]",
    },
  ],
  [
    {
      className:
        "sparkle sparkle-slow absolute bottom-[45%] left-[62%] text-[15px] sm:text-[19px]",
    },
    {
      className:
        "sparkle sparkle-delay-2 absolute bottom-[27%] left-[74%] text-[12px] sm:text-[16px]",
    },
    {
      className:
        "sparkle sparkle-delay-1 absolute bottom-[60%] left-[46%] text-[10px] sm:text-[14px]",
    },
    {
      className:
        "pearl pearl-delay-3 absolute bottom-[38%] left-[84%] h-[5px] w-[5px] sm:h-[7px] sm:w-[7px]",
    },
  ],
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
            Il trattamento giusto per prenderti cura delle tue unghie
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
                <div
                  className={`relative ${
                    isReverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <RevealImage
                    src={benefit.image}
                    alt={benefit.alt}
                    direction={isReverse ? "right" : "left"}
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
                  >
                    {imageSparkles[index].map((sparkle, sparkleIndex) => (
                      <span key={sparkleIndex} className={sparkle.className}>
                        {sparkle.className.includes("pearl") ? "" : "✦"}
                      </span>
                    ))}
                  </div>
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