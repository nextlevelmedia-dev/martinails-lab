"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const prices = [
  {
    name: "Manicure semplice",
    detail: "Pulizia, forma e cura dell’unghia naturale",
    price: "20 €",
  },
  {
    name: "Copertura BI-FLEX",
    detail: "Rinforzo leggero per unghie curate e resistenti",
    price: "45 €",
  },
  {
    name: "Copertura gel original",
    detail: "Decorazioni comprese nel prezzo",
    price: "50 €",
  },
  {
    name: "Allungamento",
    detail: "Ricostruzione con forma studiata sulla mano",
    price: "80 €",
  },
  {
    name: "Stickers 3D",
    detail: "Dettagli decorativi extra",
    price: "1 €",
  },
];

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
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
            Trattamenti chiari, cura su misura
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
            Prezzi semplici e trasparenti per scegliere il trattamento più
            adatto alle tue esigenze.
          </p>
        </div>

        <div className="mx-auto max-w-[900px] border border-[var(--border)] bg-white">
          {prices.map((item, index) => (
            <div
              key={item.name}
              className={`group grid gap-4 border-b border-[var(--border)] px-6 py-7 transition-all duration-500 last:border-b-0 hover:bg-[var(--pink-light)] active:bg-[var(--pink-light)] sm:grid-cols-[1fr_auto] sm:items-center sm:px-8 lg:px-10 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 110}ms` : "0ms",
              }}
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
          style={{ "--reveal-delay": "180ms" } as CSSProperties}
        >
          <a href="#prenota" className="btn-primary">
            Prenota ora
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}