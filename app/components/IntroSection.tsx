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
        {/* Stella grande sinistra */}
        <span className="sparkle sparkle-slow absolute left-[6%] top-[17%] text-[28px] sm:left-[9%] sm:text-[38px] lg:left-[10%]">
          ✦
        </span>

        {/* Micro punto alto sinistra */}
        <span className="absolute left-[22%] top-[12%] h-[3px] w-[3px] rounded-full bg-white opacity-70 shadow-[0_0_8px_rgba(255,255,255,0.95)]" />

        {/* Perla sinistra */}
        <span className="pearl pearl-delay-1 absolute left-[14%] top-[48%] h-[8px] w-[8px] sm:h-[11px] sm:w-[11px]" />

        {/* Stella piccola centro-sinistra */}
        <span className="sparkle sparkle-delay-2 absolute left-[25%] top-[30%] text-[12px] sm:text-[16px]">
          ✧
        </span>

        {/* Punto luce bordo sinistro */}
        <span className="absolute left-[3%] top-[62%] h-[4px] w-[4px] rounded-full bg-white opacity-60 shadow-[0_0_10px_rgba(255,255,255,0.9)]" />

        {/* Diamante basso sinistra */}
        <span className="sparkle sparkle-delay-3 absolute bottom-[13%] left-[7%] text-[17px] sm:left-[11%] sm:text-[23px]">
          ✧
        </span>

        {/* Micro stella bassa sinistra */}
        <span className="absolute bottom-[25%] left-[27%] text-[10px] text-white opacity-70 drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
          ✦
        </span>

        {/* Perla alta centrale */}
        <span className="pearl pearl-delay-2 absolute left-[38%] top-[9%] h-[5px] w-[5px] sm:h-[7px] sm:w-[7px]" />

        {/* Micro punto centrale alto */}
        <span className="absolute left-[52%] top-[16%] h-[3px] w-[3px] rounded-full bg-white opacity-60 shadow-[0_0_8px_rgba(255,255,255,0.9)]" />

        {/* Stella alta destra */}
        <span className="sparkle sparkle-delay-1 absolute right-[9%] top-[15%] text-[18px] sm:right-[13%] sm:text-[26px]">
          ✦
        </span>

        {/* Micro punto alto destra */}
        <span className="absolute right-[27%] top-[10%] h-[4px] w-[4px] rounded-full bg-white opacity-65 shadow-[0_0_10px_rgba(255,255,255,0.9)]" />

        {/* Diamante grande destra */}
        <span className="sparkle sparkle-slow absolute right-[4%] top-[48%] text-[30px] sm:right-[8%] sm:text-[44px] lg:right-[10%]">
          ✧
        </span>

        {/* Punto luce destra */}
        <span className="absolute right-[2%] top-[35%] h-[5px] w-[5px] rounded-full bg-white opacity-65 shadow-[0_0_12px_rgba(255,255,255,0.95)]" />

        {/* Perla bassa destra */}
        <span className="pearl pearl-delay-3 absolute bottom-[17%] right-[18%] h-[7px] w-[7px] sm:h-[10px] sm:w-[10px]" />

        {/* Stella bassa destra */}
        <span className="sparkle sparkle-delay-3 absolute bottom-[7%] right-[6%] text-[12px] sm:text-[17px]">
          ✦
        </span>

        {/* Micro diamante basso centrale */}
        <span className="absolute bottom-[8%] right-[34%] text-[9px] text-white opacity-60 drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
          ✧
        </span>
      </div>

      {/* Contenuto */}
      <div className="container-site relative z-10">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)]">
            Cura e attenzione
          </p>

          <h2 className="text-[40px] font-normal leading-[1.02] tracking-[-0.03em] text-[var(--foreground)] sm:text-[50px] lg:text-[58px]">
            Ogni dettaglio fa la differenza
            <span className="text-[var(--pink)]">.</span>
          </h2>

          <div className="mx-auto mt-7 h-[2px] w-16 bg-[var(--pink)]" />

          <p className="mx-auto mt-7 max-w-[660px] text-[15px] leading-[1.9] text-[var(--gray-dark)] sm:text-[16px] lg:text-[17px]">
            Non si tratta solo di avere unghie belle. Ogni trattamento nasce
            dall&apos;ascolto delle tue esigenze, dalla cura dei dettagli e
            dalla scelta di uno stile che ti rappresenti davvero.
          </p>

          <div className="mt-9 flex justify-center">
            <a href="#chi-sono" className="btn-secondary">
              Scopri chi sono
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}