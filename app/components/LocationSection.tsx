import Image from "next/image";

export function LocationSection() {
  return (
    <section
      id="contatti"
      className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)]">
              Dove mi trovi
            </p>

            <h2 className="max-w-[520px] text-[40px] font-normal leading-[1.02] tracking-[-0.03em] sm:text-[50px] lg:text-[58px]">
              Il tuo momento di bellezza in uno spazio dedicato
              <span className="text-[var(--pink)]">.</span>
            </h2>

            <div className="mt-7 h-[2px] w-16 bg-[var(--pink)]" />

            <p className="mt-7 max-w-[500px] text-[15px] leading-[1.85] text-[var(--gray-dark)] sm:text-[16px]">
              Ricevo presso lo studio di Simona Acconciature, in un ambiente
              curato e accogliente dove ogni appuntamento diventa un momento
              dedicato interamente a te.
            </p>

            <div className="mt-8 border-l-2 border-[var(--pink)] pl-5">
              <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[var(--pink)]">
                Indirizzo
              </p>

              <p className="mt-2 text-[22px] font-normal leading-[1.3] tracking-[-0.02em] text-[var(--foreground)] sm:text-[24px]">
                Via Giordano 78E
              </p>

              <p className="mt-1 text-[14px] leading-[1.7] text-[var(--gray-dark)] sm:text-[15px]">
                Presso Simona Acconciature
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#prenota" className="btn-primary">
                Prenota ora
                <span aria-hidden="true">→</span>
              </a>

              <a href="#" className="btn-secondary">
                Apri la mappa
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden bg-[var(--gray)]">
              <div className="relative aspect-[4/3] w-full lg:aspect-[1.35/1]">
                <Image
                  src="/images/Dietro-le-quinte.webp"
                  alt="Studio Martinails Lab"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
            </div>

            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-7 z-10 text-[70px] leading-none text-[var(--pink)] opacity-30 sm:-right-6 sm:-top-9 sm:text-[90px]"
            >
              ✧
            </span>

            <div className="absolute bottom-4 left-4 bg-white px-5 py-4 shadow-[0_14px_40px_rgba(17,17,17,0.10)] sm:bottom-6 sm:left-6 sm:px-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--pink)]">
                Martinails Lab
              </p>

              <p className="mt-1 text-[15px] text-[var(--foreground)]">
                Ti aspetto in studio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}