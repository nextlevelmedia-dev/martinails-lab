"use client";

import { useEffect, useRef, useState } from "react";

const differentiators = [
  {
    number: "01",
    title: "Stile su misura",
    text: "Ogni decorazione viene pensata in base alla tua mano, ai tuoi gusti e all’occasione.",
  },
  {
    number: "02",
    title: "Dettagli raffinati",
    text: "Linee pulite, colori armoniosi e piccoli dettagli che rendono ogni lavoro riconoscibile.",
  },
  {
    number: "03",
    title: "Cura professionale",
    text: "Ogni trattamento viene eseguito con attenzione, precisione e rispetto della salute dell’unghia.",
  },
  {
    number: "04",
    title: "Igiene garantita",
    text: "Ambiente curato, strumenti sanificati e massima attenzione a ogni fase del servizio.",
  },
  {
    number: "05",
    title: "Risultato armonioso",
    text: "Forma, colore e decorazione vengono bilanciati per valorizzare la mano con eleganza.",
  },
  {
    number: "06",
    title: "Esperienza rilassante",
    text: "Un momento dedicato a te, in un’atmosfera intima, ordinata e accogliente.",
  },
];

export function DifferentiatorsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(grid);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="perche-scegliermi"
      className="relative overflow-hidden bg-[var(--pink-light)] py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-[760px] text-center lg:mb-16">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)]">
            Perché scegliere Martinails Lab
          </p>

          <h2 className="js-split-title text-[40px] font-normal leading-[1.02] tracking-[-0.03em] sm:text-[50px] lg:text-[58px]">
            Unghie curate, eleganti e pensate per te
            <span className="text-[var(--pink)]">.</span>
          </h2>

          <div className="mx-auto mt-7 h-[2px] w-16 bg-[var(--pink)]" />

          <p className="mx-auto mt-6 max-w-[590px] text-[15px] leading-[1.8] text-[var(--gray-dark)] sm:text-[16px]">
            Un servizio attento ai dettagli, dove estetica, igiene e stile si
            incontrano per creare un risultato raffinato e personale.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {differentiators.map((item, index) => (
            <article
              key={item.title}
              className={`group relative min-h-[250px] overflow-hidden border border-[var(--border)] bg-white p-8 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[var(--pink)] hover:shadow-[0_24px_60px_rgba(217,140,160,0.16)] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
              }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-40 w-40 bg-[var(--pink-soft)] blur-3xl" />
                <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 bg-[var(--pink-light)] blur-3xl" />
              </div>

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--pink)]">
                    {item.number}
                  </span>

                  <span className="text-[28px] leading-none text-[var(--pink)] opacity-70 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    ✧
                  </span>
                </div>

                <h3 className="text-[27px] font-normal leading-[1.08] tracking-[-0.025em] sm:text-[30px]">
                  {item.title}
                  <span className="text-[var(--pink)]">.</span>
                </h3>

                <div className="mt-5 h-[2px] w-10 bg-[var(--pink)] transition-all duration-500 group-hover:w-16" />

                <p className="mt-5 text-[15px] leading-[1.75] text-[var(--gray-dark)]">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#prenota" className="btn-primary">
            Prenota il tuo appuntamento
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}