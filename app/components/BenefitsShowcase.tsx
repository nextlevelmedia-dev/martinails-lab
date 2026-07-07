import { RevealImage } from "./RevealImage";

const benefits = [
  {
    eyebrow: "Trattamenti su misura",
    title: "Ricostruzione unghie",
    text: "Ideale per chi desidera unghie più resistenti, curate e armoniose, con una forma studiata in base alla mano.",
    image: "/images/showcase1.webp",
    alt: "Ricostruzione unghie",
  },
  {
    eyebrow: "Creatività e stile",
    title: "Nail art personalizzata",
    text: "Colori, dettagli e decorazioni realizzate con cura per creare uno stile personale e valorizzare ogni mano.",
    image: "/images/showcase2.webp",
    alt: "Nail art personalizzata",
  },
  {
    eyebrow: "Eleganza nei dettagli",
    title: "Decorazioni raffinate",
    text: "Composizioni curate e dettagli eleganti per chi desidera unghie originali, armoniose e sempre riconoscibili.",
    image: "/images/showcase3.webp",
    alt: "Decorazioni nail art raffinate",
  },
];

export function BenefitsShowcase() {
  return (
    <section
      id="servizi"
      className="bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-[720px] text-center lg:mb-20">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)]">
            I miei servizi
          </p>

          <h2 className="js-split-title text-[40px] font-normal leading-[1.02] tracking-[-0.03em] sm:text-[50px] lg:text-[58px]">
            Trattamenti pensati per te
            <span className="text-[var(--pink)]">.</span>
          </h2>

          <div className="mx-auto mt-7 h-[2px] w-16 bg-[var(--pink)]" />
        </div>

        {/* Showcase */}
        <div className="space-y-20 lg:space-y-28">
          {benefits.map((benefit, index) => {
            const isReverse = index % 2 === 1;

            return (
              <article
                key={benefit.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20"
              >
                {/* Immagine */}
                <div
                  className={
                    isReverse ? "lg:order-2" : "lg:order-1"
                  }
                >
                  <RevealImage
                    src={benefit.image}
                    alt={benefit.alt}
                    direction={isReverse ? "right" : "left"}
                  />
                </div>

                {/* Testo */}
                <div
                  className={
                    isReverse ? "lg:order-1" : "lg:order-2"
                  }
                >
                  <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--pink)]">
                    {benefit.eyebrow}
                  </p>

                  <h3 className="js-split-title max-w-[480px] text-[36px] font-normal leading-[1.05] tracking-[-0.025em] sm:text-[44px] lg:text-[48px]">
                    {benefit.title}
                    <span className="text-[var(--pink)]">.</span>
                  </h3>

                  <div className="mt-6 h-[2px] w-14 bg-[var(--pink)]" />

                  <p className="mt-6 max-w-[500px] text-[15px] leading-[1.8] text-[var(--gray-dark)] sm:text-[16px]">
                    {benefit.text}
                  </p>

                  <div className="mt-8">
                    <a
                      href="#listino-prezzi"
                      className="btn-secondary"
                    >
                      Scopri il servizio
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}