import { RevealImage } from "./RevealImage";

const trustItems = [
  {
    icon: "✧",
    title: "Prodotti di qualità",
    text: "Selezionati e sicuri",
  },
  {
    icon: "◷",
    title: "Precisione e cura",
    text: "Per ogni dettaglio",
  },
  {
    icon: "♡",
    title: "Igiene garantita",
    text: "Ambiente sanificato",
  },
];

export function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 lg:pt-40 lg:pb-24">
      <div className="container-site">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)] lg:mb-6">
              Nail art e decorazione
            </p>

            <h1 className="js-split-title max-w-[540px] text-[43px] font-normal leading-[0.98] tracking-[-0.035em] text-black sm:text-[52px] lg:text-[64px]">
              Nail art e decorazioni per unghie uniche e raffinate
              <span className="text-[var(--pink)]">.</span>
            </h1>

            <div className="mt-6 h-[2px] w-20 bg-[var(--pink)]" />

            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.8] text-[var(--gray-dark)] lg:text-[17px]">
              Dalle decorazioni semplici alle creazioni più elaborate, per mani
              sempre perfette e alla moda.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-9">
              <a href="#prenota" className="btn-primary">
                Prenota ora
                <span aria-hidden="true">→</span>
              </a>

              <a href="#gallery" className="btn-secondary">
                Scopri la galleria
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-3 lg:mt-14 lg:gap-7">
              {trustItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex flex-col items-start gap-2 ${
                    index !== 0
                      ? "border-l border-[var(--border)] pl-3 lg:pl-6"
                      : ""
                  }`}
                >
                  <span className="shrink-0 text-[26px] leading-none text-[var(--pink)] lg:text-[30px]">
                    {item.icon}
                  </span>

                  <div>
                    <p className="text-[12px] font-semibold leading-4 lg:text-[14px] lg:leading-5">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[11px] leading-4 text-[var(--gray-dark)] lg:text-[13px] lg:leading-5">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <RevealImage
              src="/images/hero.png"
              alt="Nail art elegante con decorazioni rosa e nere"
              direction="right"
              aspectClassName="aspect-[4/3] lg:aspect-square"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}