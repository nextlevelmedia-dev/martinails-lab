import type { CSSProperties } from "react";

const whatsappUrl = "https://wa.me/393926788551";

const differentiators = [
  {
    number: "01",
    title: "Nail art personalizzata",
    text: "Ogni proposta viene adattata ai tuoi gusti, alla forma delle tue mani e allo stile che ami.",
  },
  {
    number: "02",
    title: "Precisione nelle lavorazioni",
    text: "Forme, lunghezze e decorazioni vengono realizzate con attenzione per un risultato pulito e armonioso.",
  },
  {
    number: "03",
    title: "Prodotti selezionati",
    text: "Prodotti scelti con attenzione per offrire qualità, affidabilità e rispetto dell’unghia naturale.",
  },
  {
    number: "04",
    title: "Igiene e sicurezza",
    text: "Strumenti sanificati e postazione ordinata per svolgere ogni trattamento in un ambiente sicuro e accogliente.",
  },
  {
    number: "05",
    title: "Formazione continua",
    text: "Tecniche e competenze sempre aggiornate per proporti trattamenti moderni e lavorazioni sempre più precise.",
  },
  {
    number: "06",
    title: "Nail art & gossip",
    text: "Il tuo appuntamento diventa anche un momento leggero, tra relax, chiacchiere e un po’ di sano gossip.",
  },
];

export function DifferentiatorsSection() {
  return (
    <section
      id="perche-scegliermi"
      className="relative overflow-hidden bg-[var(--pink-light)] py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-[760px] text-center lg:mb-16">
          <p
            className="js-reveal mb-4 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)]"
            style={{ "--reveal-delay": "100ms" } as CSSProperties}
          >
            Perché scegliere Martinails Lab
          </p>

          <h2 className="js-split-title text-[40px] font-normal leading-[1.02] tracking-[-0.03em] sm:text-[50px] lg:text-[58px]">
            Un’esperienza pensata per farti sentire davvero a tuo agio
            <span className="text-[var(--pink)]">.</span>
          </h2>

          <div
            className="js-reveal mx-auto mt-7 h-[2px] w-16 bg-[var(--pink)]"
            style={{ "--reveal-delay": "300ms" } as CSSProperties}
          />

          <p
            className="js-reveal mx-auto mt-6 max-w-[590px] text-[15px] leading-[1.8] text-[var(--gray-dark)] sm:text-[16px]"
            style={{ "--reveal-delay": "420ms" } as CSSProperties}
          >
            Dalla personalizzazione alla qualità dei prodotti, ogni scelta è
            pensata per offrirti un risultato armonioso e un’esperienza
            piacevole, sicura e sempre professionale.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {differentiators.map((item, index) => (
            <article
              key={item.title}
              className="js-reveal group relative min-h-[250px] overflow-hidden border border-[var(--border)] bg-white p-8 hover:-translate-y-2 hover:border-[var(--pink)] hover:shadow-[0_24px_60px_rgba(217,140,160,0.16)]"
              style={
                {
                  "--reveal-delay": `${150 + index * 140}ms`,
                } as CSSProperties
              }
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

        <div
          className="js-reveal js-reveal-cta mt-12 flex justify-center"
          style={{ "--reveal-delay": "1050ms" } as CSSProperties}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Scrivimi su WhatsApp
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}