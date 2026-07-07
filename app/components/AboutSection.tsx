import type { CSSProperties } from "react";
import { RevealImage } from "./RevealImage";

export function AboutSection() {
  return (
    <section
      id="chi-sono"
      className="relative overflow-hidden bg-[var(--pink-soft)] py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none"
      >
        <span className="sparkle sparkle-delay-1 absolute left-[5%] top-[12%] text-[18px] sm:left-[8%] sm:text-[26px]">
          ✦
        </span>

        <span className="absolute left-[20%] top-[8%] h-[3px] w-[3px] rounded-full bg-white opacity-70 shadow-[0_0_8px_rgba(255,255,255,0.95)]" />

        <span className="pearl pearl-delay-2 absolute left-[7%] top-[52%] h-[7px] w-[7px] sm:h-[10px] sm:w-[10px]" />

        <span className="sparkle sparkle-slow absolute bottom-[14%] left-[12%] text-[22px] sm:text-[32px]">
          ✧
        </span>

        <span className="absolute bottom-[28%] left-[28%] text-[9px] text-white opacity-65 drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
          ✦
        </span>

        <span className="pearl pearl-delay-1 absolute right-[10%] top-[15%] h-[6px] w-[6px] sm:h-[9px] sm:w-[9px]" />

        <span className="sparkle sparkle-delay-2 absolute right-[5%] top-[38%] text-[24px] sm:right-[8%] sm:text-[34px]">
          ✧
        </span>

        <span className="absolute right-[22%] top-[9%] h-[4px] w-[4px] rounded-full bg-white opacity-65 shadow-[0_0_10px_rgba(255,255,255,0.9)]" />

        <span className="sparkle sparkle-delay-3 absolute bottom-[10%] right-[8%] text-[14px] sm:text-[20px]">
          ✦
        </span>

        <span className="pearl pearl-delay-3 absolute bottom-[20%] right-[25%] h-[7px] w-[7px] sm:h-[10px] sm:w-[10px]" />
      </div>

      <div className="container-site relative z-10">
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

          <div className="order-1 lg:order-2">
            <p
              className="js-reveal mb-4 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)]"
              style={{ "--reveal-delay": "100ms" } as CSSProperties}
            >
              Chi sono
            </p>

            <h2 className="js-split-title max-w-[560px] text-[40px] font-normal leading-[1.02] tracking-[-0.03em] sm:text-[50px] lg:text-[58px]">
              La cura dei dettagli nasce dalla passione
              <span className="text-[var(--pink)]">.</span>
            </h2>

            <div
              className="js-reveal mt-7 h-[2px] w-16 bg-[var(--pink)]"
              style={{ "--reveal-delay": "300ms" } as CSSProperties}
            />

            <p
              className="js-reveal mt-7 max-w-[540px] text-[15px] leading-[1.85] text-[var(--gray-dark)] sm:text-[16px]"
              style={{ "--reveal-delay": "420ms" } as CSSProperties}
            >
              Sono Martina e la nail art è il mio modo di unire precisione,
              creatività e attenzione per i dettagli. Ogni trattamento nasce
              dall’ascolto, dalla cura e dalla voglia di creare qualcosa di
              unico, capace di rappresentare davvero la persona che ho davanti e
              valorizzarne lo stile con eleganza e personalità.
            </p>

            <blockquote
              className="js-reveal mt-8 max-w-[520px] border-l border-[var(--pink)] pl-6 text-[24px] font-normal leading-[1.22] tracking-[-0.025em] text-[var(--foreground)] sm:text-[28px]"
              style={{ "--reveal-delay": "520ms" } as CSSProperties}
            >
              “Ogni mano è diversa. Il mio lavoro è trovare lo stile capace di
              valorizzarla.”
            </blockquote>

            <div
              className="js-reveal js-reveal-cta mt-9"
              style={{ "--reveal-delay": "660ms" } as CSSProperties}
            >
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