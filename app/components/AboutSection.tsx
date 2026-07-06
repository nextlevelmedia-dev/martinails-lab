"use client";

import { useEffect, useRef, useState } from "react";
import { RevealImage } from "./RevealImage";

export function AboutSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = textRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="chi-sono"
      className="overflow-hidden bg-[var(--pink-soft)] py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="relative order-2 flex justify-center lg:order-1 lg:justify-start">
            <div className="relative w-full max-w-[420px] bg-white p-4 shadow-[0_20px_60px_rgba(17,17,17,0.07)] sm:p-6 lg:max-w-[560px] lg:p-8 lg:shadow-[0_24px_70px_rgba(17,17,17,0.08)]">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-5 z-20 text-[58px] leading-none text-[var(--pink)] opacity-25 sm:-right-5 sm:-top-7 sm:text-[76px] lg:-right-7 lg:-top-8 lg:text-[92px]"
              >
                ✧
              </span>

              <div className="relative z-10 w-full">
                <RevealImage
                  src="/images/about/about1.JPG"
                  alt="Martina di Martinails Lab"
                  direction="left"
                  aspectClassName="aspect-[4/4.6]"
                  sizes="(max-width: 640px) calc(100vw - 64px), (max-width: 1024px) 380px, 500px"
                />
              </div>
            </div>
          </div>

          <div
            ref={textRef}
            className={`order-1 transition-all duration-[1100ms] ease-out lg:order-2 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)]">
              Chi sono
            </p>

            <h2 className="max-w-[560px] text-[40px] font-normal leading-[1.02] tracking-[-0.03em] sm:text-[50px] lg:text-[58px]">
              La cura dei dettagli nasce dalla passione
              <span className="text-[var(--pink)]">.</span>
            </h2>

            <div className="mt-7 h-[2px] w-16 bg-[var(--pink)]" />

            <p className="mt-7 max-w-[540px] text-[15px] leading-[1.85] text-[var(--gray-dark)] sm:text-[16px]">
              Sono Martina e la nail art è il mio modo di unire precisione, creatività e attenzione per i dettagli. Ogni trattamento nasce dall’ascolto, dalla cura e dalla voglia di creare qualcosa di unico, capace di rappresentare davvero la persona che ho davanti e valorizzarne lo stile con eleganza e personalità.
            </p>

            <blockquote className="mt-8 max-w-[520px] border-l border-[var(--pink)] pl-6 text-[24px] font-normal leading-[1.22] tracking-[-0.025em] text-[var(--foreground)] sm:text-[28px]">
              “Ogni mano è diversa. Il mio lavoro è trovare lo stile capace di
              valorizzarla.”
            </blockquote>

            <div className="mt-9">
              <a href="#servizi" className="btn-secondary">
                Scopri i servizi
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}