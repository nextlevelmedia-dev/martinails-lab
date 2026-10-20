import type { CSSProperties } from "react";
import { HeroMarquee } from "./HeroMarquee";

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

              <a href="/gallery" className="btn-secondary">
                Vedi la gallery
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
            <HeroMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}