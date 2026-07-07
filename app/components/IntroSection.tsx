import type { CSSProperties } from "react";

const whatsappUrl = "https://wa.me/393926788551";

export function IntroSection() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden bg-[var(--pink-soft)] py-20 sm:py-24 lg:py-28"
    >
      {/* Brillantini, perle e punti luce */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none"
      >
        <span className="sparkle sparkle-slow absolute left-[6%] top-[17%] text-[28px] sm:left-[9%] sm:text-[38px] lg:left-[10%]">
          ✦
        </span>

        <span className="absolute left-[22%] top-[12%] h-[3px] w-[3px] rounded-full bg-white opacity-70 shadow-[0_0_8px_rgba(255,255,255,0.95)]" />

        <span className="pearl pearl-delay-1 absolute left-[14%] top-[48%] h-[8px] w-[8px] sm:h-[11px] sm:w-[11px]" />

        <span className="sparkle sparkle-delay-2 absolute left-[25%] top-[30%] text-[12px] sm:text-[16px]">
          ✧
        </span>

        <span className="absolute left-[3%] top-[62%] h-[4px] w-[4px] rounded-full bg-white opacity-60 shadow-[0_0_10px_rgba(255,255,255,0.9)]" />

        <span className="sparkle sparkle-delay-3 absolute bottom-[13%] left-[7%] text-[17px] sm:left-[11%] sm:text-[23px]">
          ✧
        </span>

        <span className="absolute bottom-[25%] left-[27%] text-[10px] text-white opacity-70 drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
          ✦
        </span>

        <span className="pearl pearl-delay-2 absolute left-[38%] top-[9%] h-[5px] w-[5px] sm:h-[7px] sm:w-[7px]" />

        <span className="absolute left-[52%] top-[16%] h-[3px] w-[3px] rounded-full bg-white opacity-60 shadow-[0_0_8px_rgba(255,255,255,0.9)]" />

        <span className="sparkle sparkle-delay-1 absolute right-[9%] top-[15%] text-[18px] sm:right-[13%] sm:text-[26px]">
          ✦
        </span>

        <span className="absolute right-[27%] top-[10%] h-[4px] w-[4px] rounded-full bg-white opacity-65 shadow-[0_0_10px_rgba(255,255,255,0.9)]" />

        <span className="sparkle sparkle-slow absolute right-[4%] top-[48%] text-[30px] sm:right-[8%] sm:text-[44px] lg:right-[10%]">
          ✧
        </span>

        <span className="absolute right-[2%] top-[35%] h-[5px] w-[5px] rounded-full bg-white opacity-65 shadow-[0_0_12px_rgba(255,255,255,0.95)]" />

        <span className="pearl pearl-delay-3 absolute bottom-[17%] right-[18%] h-[7px] w-[7px] sm:h-[10px] sm:w-[10px]" />

        <span className="sparkle sparkle-delay-3 absolute bottom-[7%] right-[6%] text-[12px] sm:text-[17px]">
          ✦
        </span>

        <span className="absolute bottom-[8%] right-[34%] text-[9px] text-white opacity-60 drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
          ✧
        </span>
      </div>

      <div className="container-site relative z-10">
        <div className="mx-auto max-w-[760px] text-center">
          <p
            className="js-reveal mb-5 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)]"
            style={{ "--reveal-delay": "100ms" } as CSSProperties}
          >
            Cura e attenzione
          </p>

          <h2 className="js-split-title text-[40px] font-normal leading-[1.02] tracking-[-0.03em] text-[var(--foreground)] sm:text-[50px] lg:text-[58px]">
            La tua bellezza, espressa con naturalezza
            <span className="text-[var(--pink)]">.</span>
          </h2>

          <div
            className="js-reveal mx-auto mt-7 h-[2px] w-16 bg-[var(--pink)]"
            style={{ "--reveal-delay": "300ms" } as CSSProperties}
          />

          <p
            className="js-reveal mx-auto mt-7 max-w-[660px] text-[15px] leading-[1.9] text-[var(--gray-dark)] sm:text-[16px] lg:text-[17px]"
            style={{ "--reveal-delay": "420ms" } as CSSProperties}
          >
            Ogni trattamento nasce dall’ascolto delle tue esigenze, dalla cura
            delle tue mani e dalla scelta di uno stile che sappia valorizzarti,
            rappresentarti davvero e farti sentire sempre a tuo agio.
          </p>

          <div
            className="js-reveal js-reveal-cta mt-9 flex justify-center"
            style={{ "--reveal-delay": "560ms" } as CSSProperties}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Scrivimi su WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}