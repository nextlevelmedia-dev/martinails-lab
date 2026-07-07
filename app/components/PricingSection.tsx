"use client";

import type { CSSProperties } from "react";

const prices = [
  {
    name: "Manicure normale",
    detail: "Pulizia, forma e cura dell’unghia naturale.",
    price: "20 €",
  },
  {
    name: "Gel flessibile",
    detail: "Copertura leggera e confortevole per unghie curate e resistenti.",
    price: "50 €",
  },
  {
    name: "Gel rigido",
    detail: "Copertura più strutturata per un risultato resistente, definito e duraturo.",
    price: "55 €",
  },
  {
    name: "Allungamento",
    detail: "Ricostruzione con lunghezza e forma studiate in base alla mano.",
    price: "85 €",
  },
  {
    name: "Allungamento con muretto",
    detail: "Ricostruzione elaborata con tecnica muretto.",
    price: "Da 145 €",
  },
  {
    name: "Unghia con muretto",
    detail: "Durante semplice copertura gel.",
    price: "+5 € l’una",
  },
  {
    name: "Disegni e applicazioni",
    detail: "Decorazioni incluse nel trattamento.",
    price: "Gratis",
  },
];

export function PricingSection() {
  return (
    <section
      id="listino-prezzi"
      className="relative overflow-hidden bg-[var(--pink-light)] py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-[760px] text-center lg:mb-16">
          <p
            className="js-reveal mb-4 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)]"
            style={{ "--reveal-delay": "100ms" } as CSSProperties}
          >
            Listino prezzi
          </p>

          <h2 className="js-split-title text-[40px] font-normal leading-[1.02] tracking-[-0.03em] sm:text-[50px] lg:text-[58px]">
            Scegli il trattamento più adatto a te
            <span className="text-[var(--pink)]">.</span>
          </h2>

          <div
            className="js-reveal mx-auto mt-7 h-[2px] w-16 bg-[var(--pink)]"
            style={{ "--reveal-delay": "300ms" } as CSSProperties}
          />

          <p
            className="js-reveal mx-auto mt-6 max-w-[580px] text-[15px] leading-[1.8] text-[var(--gray-dark)] sm:text-[16px]"
            style={{ "--reveal-delay": "420ms" } as CSSProperties}
          >
            Consulta i trattamenti disponibili e trova la soluzione più adatta
            alle tue unghie, alle tue esigenze e al risultato che desideri.
          </p>
        </div>

        <div className="mx-auto max-w-[900px] border border-[var(--border)] bg-white">
          {prices.map((item, index) => (
            <div
              key={item.name}
              className="js-reveal group grid gap-4 border-b border-[var(--border)] px-6 py-7 transition-all duration-500 last:border-b-0 hover:bg-[var(--pink-light)] active:bg-[var(--pink-light)] sm:grid-cols-[1fr_auto] sm:items-center sm:px-8 lg:px-10"
              style={
                {
                  "--reveal-delay": `${150 + index * 110}ms`,
                } as CSSProperties
              }
            >
              <div>
                <h3 className="text-[28px] font-normal leading-[1.08] tracking-[-0.025em] sm:text-[32px]">
                  {item.name}
                  <span className="text-[var(--pink)]">.</span>
                </h3>

                <p className="mt-2 max-w-[520px] text-[14px] leading-[1.7] text-[var(--gray-dark)] sm:text-[15px]">
                  {item.detail}
                </p>
              </div>

              <p className="text-[30px] font-normal leading-none tracking-[-0.03em] text-[var(--foreground)] sm:text-[36px]">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        <div
          className="js-reveal js-reveal-cta mt-10 flex justify-center"
          style={{ "--reveal-delay": "950ms" } as CSSProperties}
        >
          <a href="#prenota" className="btn-primary">
            Scrivimi su WhatsApp
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}