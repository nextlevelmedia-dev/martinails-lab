import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--foreground)] text-white">
      <div className="container-site py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:gap-16">
          <div>
            <Image
              src="/logo/logo.png"
              alt="Martinails Lab"
              width={82}
              height={82}
              className="invert"
            />

            <p className="mt-6 max-w-[360px] text-[14px] leading-[1.8] text-white/65">
              Nail art e decorazioni per unghie raffinate, curate nei dettagli
              e pensate per valorizzare ogni mano con eleganza.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--pink)]">
              Navigazione
            </p>

            <nav className="flex flex-col gap-3 text-[15px] text-white/75">
              <a href="#chi-sono" className="transition-colors hover:text-white">
                Chi sono
              </a>
              <a href="#servizi" className="transition-colors hover:text-white">
                Servizi
              </a>
              <a
                href="#listino-prezzi"
                className="transition-colors hover:text-white"
              >
                Listino prezzi
              </a>
              <a href="#gallery" className="transition-colors hover:text-white">
                Gallery
              </a>
              <a href="#contatti" className="transition-colors hover:text-white">
                Contatti
              </a>
            </nav>
          </div>

          <div>
            <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--pink)]">
              Contatti
            </p>

            <div className="space-y-4 text-[15px] leading-[1.7] text-white/75">
              <p>
                Via Giordano 78E
                <br />
                Presso Simona Acconciature
              </p>

              <a
                href="tel:+393333333333"
                className="block transition-colors hover:text-white"
              >
                333 333 3333
              </a>

              <a
                href="#prenota"
                className="inline-flex border border-[var(--pink)] px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[var(--pink)]"
              >
                Prenota ora
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Martinails Lab. Tutti i diritti riservati.</p>

          <p>Realizzato con cura.</p>
        </div>
      </div>
    </footer>
  );
}