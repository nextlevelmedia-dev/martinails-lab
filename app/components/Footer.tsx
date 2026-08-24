"use client";

import Image from "next/image";
import Script from "next/script";

const whatsappUrl = "https://wa.me/393926788551";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <Script
        src="https://cdn.iubenda.com/iubenda.js"
        strategy="afterInteractive"
      />

      <footer className="bg-[var(--foreground)] text-white">
        <div className="container-site py-14 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:gap-16">
            {/* Brand */}
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

            {/* Navigazione */}
            <div>
              <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--pink)]">
                Navigazione
              </p>

              <nav className="flex flex-col gap-3 text-[15px] text-white/75">
                <a
                  href="/#chi-sono"
                  className="transition-colors hover:text-white"
                >
                  Chi sono
                </a>

                <a
                  href="/#servizi"
                  className="transition-colors hover:text-white"
                >
                  Servizi
                </a>

                <a
                  href="/#listino-prezzi"
                  className="transition-colors hover:text-white"
                >
                  Listino prezzi
                </a>

                <a
                  href="/gallery"
                  className="transition-colors hover:text-white"
                >
                  Gallery
                </a>

                <a
                  href="/#contatti"
                  className="transition-colors hover:text-white"
                >
                  Contatti
                </a>
              </nav>
            </div>

            {/* Contatti */}
            <div>
              <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--pink)]">
                Contatti
              </p>

              <div className="space-y-4 text-[15px] leading-[1.7] text-white/75">
                <p>
                  Via Giordano 78E, Cremona
                  <br />
                  Presso Simona Acconciature
                </p>

                <a
                  href="tel:+393926788551"
                  className="block transition-colors hover:text-white"
                >
                  392 678 8551
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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

          {/* Footer bottom */}
          <div className="mt-14 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-4 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
              <p>© {year} Martinails Lab. Tutti i diritti riservati.</p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {/* Privacy Policy */}
                <a
                  href="https://www.iubenda.com/privacy-policy/38599386"
                  className="iubenda-noiframe iubenda-embed transition-colors hover:text-white"
                  title="Privacy Policy"
                >
                  Privacy Policy
                </a>

                {/* Cookie Policy */}
                <a
                  href="https://www.iubenda.com/privacy-policy/38599386/cookie-policy"
                  className="iubenda-noiframe iubenda-embed transition-colors hover:text-white"
                  title="Cookie Policy"
                >
                  Cookie Policy
                </a>

                {/* Preferenze Cookie */}
                <button
                  type="button"
                  className="iubenda-cs-preferences-link transition-colors hover:text-white"
                >
                  Preferenze cookie
                </button>

                <span
                  className="hidden text-white/20 sm:inline"
                  aria-hidden="true"
                >
                  •
                </span>

                {/* Credits */}
                <a
                  href="https://convernext.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Credits: Convernext
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}