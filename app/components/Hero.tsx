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
              src="/images/hero.webp"
              alt="Nail art rosa realizzata da Martinails Lab"
              direction="right"
              aspectClassName="aspect-[4/3] lg:aspect-square"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
            >
              <span className="sparkle sparkle-slow absolute bottom-[16%] left-[11%] text-[22px] sm:text-[26px] lg:text-[30px]">
                ✦
              </span>

              <span className="sparkle sparkle-delay-1 absolute bottom-[34%] left-[24%] text-[18px] sm:text-[22px]">
                ✧
              </span>

              <span className="sparkle sparkle-delay-2 absolute bottom-[9%] left-[32%] text-[13px] sm:text-[16px]">
                ✦
              </span>

              <span className="pearl pearl-delay-1 absolute bottom-[27%] left-[7%] h-[9px] w-[9px] sm:h-[12px] sm:w-[12px]" />

              <span className="pearl pearl-delay-3 absolute bottom-[8%] left-[20%] h-[5px] w-[5px] sm:h-[7px] sm:w-[7px]" />

              <span className="absolute bottom-[42%] left-[8%] h-[3px] w-[3px] rounded-full bg-white opacity-80 shadow-[0_0_9px_rgba(255,255,255,0.95)]" />

              <span className="absolute bottom-[19%] left-[38%] h-[4px] w-[4px] rounded-full bg-white opacity-70 shadow-[0_0_10px_rgba(255,255,255,0.95)]" />

              <span className="absolute bottom-[5%] left-[7%] text-[9px] text-white opacity-70 drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                ✧
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}