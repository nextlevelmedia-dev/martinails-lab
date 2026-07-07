"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const galleryImages = Array.from(
  { length: 20 },
  (_, index) => `/images/tornado/gallery${index + 1}.webp`
);

export function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0 ? galleryImages.length - 1 : current - 1;
    });
  }, []);

  const showNext = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === galleryImages.length - 1 ? 0 : current + 1;
    });
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, closeLightbox, showPrevious, showNext]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const distance = touchEndX - touchStartX.current;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        showPrevious();
      } else {
        showNext();
      }
    }

    touchStartX.current = null;
  };

  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="pb-20 pt-10 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16">
          <div className="container-site">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)]">
                Gallery
              </p>

              <h1 className="text-[42px] font-normal leading-[1.02] tracking-[-0.03em] text-[var(--foreground)] sm:text-[54px] lg:text-[64px]">
                Dettagli, colori e stili che raccontano qualcosa di te
                <span className="text-[var(--pink)]">.</span>
              </h1>

              <div className="mx-auto mt-7 h-[2px] w-16 bg-[var(--pink)]" />

              <p className="mx-auto mt-7 max-w-[590px] text-[15px] leading-[1.85] text-[var(--gray-dark)] sm:text-[16px]">
                Una raccolta di nail art diverse, dalle più delicate alle più
                elaborate, per lasciarti ispirare e trovare lo stile che senti
                più tuo.
              </p>

              <div className="mt-8 flex justify-center">
                <Link href="/#gallery" className="btn-secondary">
                  Torna al sito
                  <span aria-hidden="true">←</span>
                </Link>
              </div>
            </div>

            <div className="mt-14 columns-2 gap-3 sm:mt-16 sm:columns-3 sm:gap-4 lg:columns-4 lg:gap-5">
              {galleryImages.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Apri nail art ${index + 1}`}
                  className="group relative mb-3 block w-full cursor-zoom-in overflow-hidden bg-[var(--gray)] text-left sm:mb-4 lg:mb-5"
                >
                  <div
                    className={
                      index % 5 === 0 || index % 5 === 3
                        ? "relative aspect-[4/5]"
                        : index % 5 === 1
                          ? "relative aspect-[4/6]"
                          : "relative aspect-[4/5.5]"
                    }
                  >
                    <Image
                      src={src}
                      alt={`Nail art Martinails Lab ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />

                    <span className="pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center bg-white/90 text-[18px] text-[var(--foreground)] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                      +
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-12 flex justify-center sm:mt-14">
              <Link href="/#gallery" className="btn-secondary">
                Torna alla home
                <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualizzazione immagine"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Chiudi"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center border border-white/30 text-[25px] font-light text-white transition-colors hover:border-white sm:right-6 sm:top-6"
          >
            ×
          </button>

          <p className="absolute left-4 top-5 z-20 text-[12px] font-medium tracking-[0.18em] text-white/60 sm:left-6 sm:top-7">
            {String(selectedIndex + 1).padStart(2, "0")} /{" "}
            {String(galleryImages.length).padStart(2, "0")}
          </p>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Immagine precedente"
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/25 bg-black/20 text-[24px] text-white backdrop-blur-sm transition-colors hover:border-white sm:left-6"
          >
            ←
          </button>

          <div className="relative h-[82vh] w-[82vw] sm:h-[86vh] sm:w-[76vw] lg:w-[68vw]">
            <Image
              key={galleryImages[selectedIndex]}
              src={galleryImages[selectedIndex]}
              alt={`Nail art Martinails Lab ${selectedIndex + 1}`}
              fill
              priority
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={showNext}
            aria-label="Immagine successiva"
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/25 bg-black/20 text-[24px] text-white backdrop-blur-sm transition-colors hover:border-white sm:right-6"
          >
            →
          </button>

          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Chiudi visualizzazione"
            className="absolute inset-0 z-0 cursor-zoom-out"
          />
        </div>
      )}
    </>
  );
}