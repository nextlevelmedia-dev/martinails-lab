import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Pagina non trovata",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="flex min-h-[70vh] items-center pb-20 pt-36">
        <div className="container-site text-center">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)]">
            Errore 404
          </p>

          <h1 className="text-[42px] font-normal leading-[1.02] tracking-[-0.03em] sm:text-[54px]">
            Questa pagina non esiste
            <span className="text-[var(--pink)]">.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[480px] text-[16px] leading-[1.8] text-[var(--gray-dark)]">
            Il link potrebbe essere errato o la pagina potrebbe essere stata
            spostata. Torna alla home per scoprire servizi, prezzi e gallery.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">
              Torna alla home
              <span aria-hidden="true">→</span>
            </Link>

            <Link href="/gallery" className="btn-secondary">
              Vedi la gallery
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
