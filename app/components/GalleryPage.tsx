"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { SplitTextEffect } from "./SplitTextEffect";
import { RevealOnScroll } from "./RevealOnScroll";

const galleryImages = Array.from(
  { length: 36 },
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
      <Header />

      {/* Stesse animazioni utilizzate nella homepage */}
      <SplitTextEffect />
      <RevealOnScroll />

      <main className="min-h-screen bg-white">
        <section className="pb-20 pt-36 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44">
          <div className="container-site">
            {/* INTRO */}
            <div className="mx-auto max-w-[760px] text-center">
              <p
                className="js-reveal mb-4 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)]"
                style={{ "--reveal-delay": "100ms" } as CSSProperties}
              >
                Gallery
              </p>

              <h1 className="js-split-title text-[42px] font-normal leading-[1.02] tracking-[-0.03em] text-[var(--foreground)] sm:text-[54px] lg:text-[64px]">
                Dettagli, colori e stili che raccontano qualcosa di te
                <span className="text-[var(--pink)]">.</span>
              </h1>

              <div
                className="js-reveal mx-auto mt-7 h-[2px] w-16 bg-[var(--pink)]"
                style={{ "--reveal-delay": "300ms" } as CSSProperties}
              />

              <p
                className="js-reveal mx-auto mt-7 max-w-[590px] text-[15px] leading-[1.85] text-[var(--gray-dark)] sm:text-[16px]"
                style={{ "--reveal-delay": "420ms" } as CSSProperties}
              >
                Una raccolta di nail art diverse, dalle più delicate alle più
                elaborate, per lasciarti ispirare e trovare lo stile che senti
                più tuo.
              </p>
            </div>

            {/* GALLERY */}
            <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
              {galleryImages.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Apri nail art ${index + 1}`}
                  className="js-reveal group relative block w-full cursor-zoom-in overflow-hidden bg-[var(--gray)] text-left"
                  style={
                    {
                      "--reveal-delay": `${(index % 4) * 90}ms`,
                    } as CSSProperties
                  }
                >
                  <div className="relative aspect-[4/5]">
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

            {/* BACK HOME */}
            <div
              className="js-reveal js-reveal-cta mt-12 flex justify-center sm:mt-14"
              style={{ "--reveal-delay": "150ms" } as CSSProperties}
            >
              <Link href="/" className="btn-secondary">
                Torna alla home
                <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualizzazione immagine"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/[0.98]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Chiudi"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center border border-white/30 text-[25px] font-light text-white transition-colors hover:border-white sm:right-6 sm:top-6"
          >
            ×
          </button>

          {/* COUNTER */}
          <p className="absolute left-4 top-5 z-20 text-[12px] font-medium tracking-[0.18em] text-white/60 sm:left-6 sm:top-7">
            {String(selectedIndex + 1).padStart(2, "0")} /{" "}
            {String(galleryImages.length).padStart(2, "0")}
          </p>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Immagine precedente"
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/25 bg-black/20 text-[24px] text-white backdrop-blur-sm transition-colors hover:border-white sm:left-6"
          >
            ←
          </button>

          {/* IMAGE */}
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

          {/* NEXT */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Immagine successiva"
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/25 bg-black/20 text-[24px] text-white backdrop-blur-sm transition-colors hover:border-white sm:right-6"
          >
            →
          </button>

          {/* CLICK BACKDROP TO CLOSE */}
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