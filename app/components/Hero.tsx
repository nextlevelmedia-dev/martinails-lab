import type { CSSProperties } from "react";
import { RevealImage } from "./RevealImage";

const trustItems = [
  {
    icon: "✧",
    title: "Prodotti scelti con cura",
    text: "Qualità e sicurezza per le tue unghie",
  },
  {
    icon: "◷",
    title: "Precisione in ogni dettaglio",
    text: "Cura e attenzione in ogni creazione",
  },
  {
    icon: "♡",
    title: "Passione in ogni creazione",
    text: "Ogni nail art è creata con dedizione",
  },
];

const whatsappUrl = "https://wa.me/393926788551";

export function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 lg:pt-40 lg:pb-24">
      <div className="container-site">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <p
              className="js-reveal mb-5 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)] lg:mb-6"
              style={{ "--reveal-delay": "100ms" } as CSSProperties}
            >
              Nail art e decorazione
            </p>

            <h1 className="js-split-title max-w-[540px] text-[43px] font-normal leading-[0.98] tracking-[-0.035em] text-black sm:text-[52px] lg:text-[64px]">
              Esprimi chi sei con unghie raffinate che valorizzano il tuo stile
              e la tua personalità
              <span className="text-[var(--pink)]">.</span>
            </h1>

            <div
              className="js-reveal mt-6 h-[2px] w-20 bg-[var(--pink)]"
              style={{ "--reveal-delay": "300ms" } as CSSProperties}
            />

            <p
              className="js-reveal mt-6 max-w-[520px] text-[16px] leading-[1.8] text-[var(--gray-dark)] lg:text-[17px]"
              style={{ "--reveal-delay": "420ms" } as CSSProperties}
            >
              Dalle decorazioni più delicate alle creazioni più elaborate, ogni
              nail art è pensata per valorizzare le tue mani, completare il tuo
              look e raccontare qualcosa di te in ogni dettaglio.
            </p>

            <div
              className="js-reveal js-reveal-cta mt-8 flex flex-col gap-3 sm:flex-row lg:mt-9"
              style={{ "--reveal-delay": "560ms" } as CSSProperties}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Scrivimi su WhatsApp
                <span aria-hidden="true">→</span>
              </a>

              <a href="#gallery" className="btn-secondary">
                Scopri la galleria
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-3 lg:mt-14 lg:gap-7">
              {trustItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`js-reveal flex flex-col items-start gap-2 ${
                    index !== 0
                      ? "border-l border-[var(--border)] pl-3 lg:pl-6"
                      : ""
                  }`}
                  style={
                    {
                      "--reveal-delay": `${index * 120}ms`,
                    } as CSSProperties
                  }
                >
                  <span className="shrink-0 text-[26px] leading-none text-[var(--pink)] lg:text-[30px]">
                    {item.icon}
                  </span>

                  <div>
                    <p className="text-[12px] font-semibold leading-4 lg:text-[14px] lg:leading-5">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[11px] leading-4 text-[var(--gray-dark)] lg:text-[13px] lg:leading-5">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <RevealImage
              src="/images/hero.webp"
              alt="Nail art rosa realizzata da Martinails Lab"
              direction="right"
              aspectClassName="aspect-[4/3] lg:aspect-square"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
            >
              <span className="sparkle sparkle-slow absolute bottom-[43%] left-[62%] text-[18px] sm:text-[22px] lg:text-[26px]">
                ✦
              </span>

              <span className="sparkle sparkle-delay-1 absolute bottom-[34%] left-[74%] text-[16px] sm:text-[20px] lg:text-[24px]">
                ✧
              </span>

              <span className="sparkle sparkle-delay-2 absolute bottom-[21%] left-[71%] text-[14px] sm:text-[18px] lg:text-[22px]">
                ✦
              </span>

              <span className="sparkle sparkle-delay-1 absolute bottom-[58%] left-[49%] text-[12px] sm:text-[16px] lg:text-[20px]">
                ✧
              </span>

              <span className="pearl pearl-delay-1 absolute bottom-[39%] left-[66%] h-[6px] w-[6px] sm:h-[8px] sm:w-[8px]" />

              <span className="pearl pearl-delay-3 absolute bottom-[27%] left-[82%] h-[5px] w-[5px] sm:h-[7px] sm:w-[7px]" />

              <span className="absolute bottom-[51%] left-[55%] h-[3px] w-[3px] rounded-full bg-white opacity-80 shadow-[0_0_9px_rgba(255,255,255,0.95)]" />

              <span className="absolute bottom-[30%] left-[59%] h-[4px] w-[4px] rounded-full bg-white opacity-70 shadow-[0_0_10px_rgba(255,255,255,0.95)]" />

              <span className="sparkle sparkle-delay-2 absolute bottom-[12%] left-[20%] text-[13px] sm:text-[16px]">
                ✦
              </span>

              <span className="pearl pearl-delay-1 absolute bottom-[17%] left-[10%] h-[6px] w-[6px] sm:h-[8px] sm:w-[8px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}