"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Quanto tempo richiede ogni trattamento?",
    answer:
      "La durata varia in base al trattamento scelto e al tipo di lavorazione. Un servizio più semplice richiede meno tempo, mentre ricostruzioni, allungamenti e nail art elaborate possono richiedere una seduta più lunga. Al momento della prenotazione potremo valutare insieme il servizio più adatto.",
  },
  {
    question: "Le unghie respirano?",
    answer:
      "No, le unghie non respirano perché sono composte principalmente da cheratina. Ciò che conta è lavorare nel rispetto dell’unghia naturale, utilizzare prodotti di qualità e seguire correttamente i tempi di mantenimento e rimozione.",
  },
  {
    question: "Ogni quanto tempo è consigliato fare il refill?",
    answer:
      "In genere il refill è consigliato ogni 3–4 settimane. La frequenza può variare in base alla velocità di crescita dell’unghia naturale, alla lunghezza e al tipo di trattamento realizzato.",
  },
  {
    question: "Il gel può dare una sensazione di calore?",
    answer:
      "Durante la polimerizzazione può capitare di percepire una breve sensazione di calore. L’intensità può variare da persona a persona ed è generalmente temporanea. Ogni trattamento viene eseguito prestando attenzione al comfort durante tutte le fasi.",
  },
  {
    question: "Posso scegliere una nail art personalizzata?",
    answer:
      "Certo. Colori, forme e decorazioni possono essere studiate insieme per creare un risultato personale e armonioso. Puoi partire da un’ispirazione oppure affidarti a una proposta pensata per valorizzare le tue mani e il tuo stile.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="overflow-hidden bg-[var(--pink-light)] py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          {/* Colonna sinistra */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)]">
              Le risposte che cercavi
            </p>

            <h2 className="max-w-[440px] text-[40px] font-normal leading-[1.02] tracking-[-0.03em] sm:text-[50px] lg:text-[58px]">
              Domande frequenti
              <span className="text-[var(--pink)]">.</span>
            </h2>

            <div className="mt-7 h-[2px] w-16 bg-[var(--pink)]" />

            <p className="mt-7 max-w-[420px] text-[15px] leading-[1.85] text-[var(--gray-dark)] sm:text-[16px]">
              Tutto quello che può esserti utile sapere prima di scegliere il
              tuo prossimo trattamento.
            </p>

            <div
              aria-hidden="true"
              className="mt-12 hidden select-none text-[110px] font-light leading-none text-[var(--pink)] opacity-20 lg:block"
            >
              ✧
            </div>
          </div>

          {/* Accordion */}
          <div className="border-t border-[var(--border)]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[var(--border)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-8 py-7 text-left sm:py-8"
                  >
                    <h3 className="max-w-[650px] text-[24px] font-normal leading-[1.1] tracking-[-0.025em] text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--pink)] sm:text-[28px] lg:text-[31px]">
                      {faq.question}
                    </h3>

                    <span
                      aria-hidden="true"
                      className="relative mt-1 block h-7 w-7 shrink-0"
                    >
                      <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 bg-[var(--foreground)] transition-colors duration-300 group-hover:bg-[var(--pink)]" />

                      <span
                        className={`absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 bg-[var(--foreground)] transition-all duration-500 group-hover:bg-[var(--pink)] ${
                          isOpen
                            ? "rotate-90 opacity-0"
                            : "rotate-0 opacity-100"
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[620px] pb-8 pr-8 text-[15px] leading-[1.85] text-[var(--gray-dark)] sm:pb-9 sm:text-[16px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}