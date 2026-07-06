export function IntroSection() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden bg-[var(--pink-soft)] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorazione sinistra */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[5%] top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <span className="font-[var(--font-heading)] text-[110px] font-light leading-none text-[var(--pink)] opacity-20">
          ✧
        </span>
      </div>

      {/* Decorazione destra */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <span className="font-[var(--font-heading)] text-[100px] font-light leading-none text-[var(--pink)] opacity-20">
          ♡
        </span>
      </div>

      {/* Contenuto */}
      <div className="container-site relative z-10">
        <div className="mx-auto max-w-[760px] text-center">
          {/* Eyebrow */}
          <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)]">
            Cura e attenzione
          </p>

          {/* Titolo */}
          <h2 className="text-[40px] font-normal leading-[1.02] tracking-[-0.03em] text-[var(--foreground)] sm:text-[50px] lg:text-[58px]">
            Ogni dettaglio fa la differenza
            <span className="text-[var(--pink)]">.</span>
          </h2>

          {/* Linea decorativa */}
          <div className="mx-auto mt-7 h-[2px] w-16 bg-[var(--pink)]" />

          {/* Testo */}
          <p className="mx-auto mt-7 max-w-[660px] text-[15px] leading-[1.9] text-[var(--gray-dark)] sm:text-[16px] lg:text-[17px]">
            Non si tratta solo di avere unghie belle. Ogni trattamento nasce
            dall&apos;ascolto delle tue esigenze, dalla cura dei dettagli e
            dalla scelta di uno stile che ti rappresenti davvero.
          </p>

          {/* CTA */}
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