"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const galleryImages = [
  "/images/tornado/gallery1.JPG",
  "/images/tornado/gallery2.JPG",
  "/images/tornado/gallery3.JPG",
  "/images/tornado/gallery4.JPG",
  "/images/tornado/gallery5.JPG",
  "/images/tornado/gallery6.JPG",
  "/images/tornado/gallery7.JPG",
  "/images/tornado/gallery8.JPG",
];

const CARD_COPIES = 4;

const tornadoImages = Array.from(
  { length: galleryImages.length * CARD_COPIES },
  (_, index) => galleryImages[index % galleryImages.length]
);

export function GalleryTornado() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(Observer, ScrollTrigger);

    const section = sectionRef.current;
    const list = listRef.current;

    if (!section || !list) return;

    const cards = gsap.utils.toArray<HTMLElement>("[data-tornado-item]", list);

    if (!cards.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const state = {
      progress: 0,
      velocity: 0.004,
      direction: 1,
      active: false,
    };

    const isMobile = window.innerWidth < 640;

    const rotationAngle = isMobile ? 27 : 30;
    const cardYSpacing = isMobile ? 0.26 : 0.3;
    const orbitDepth = isMobile ? 26 : 35;

    const autoSpeed = 0.00325;
    const scrollSpeed = 0.015;
    const dragMultiplier = 5;
    const scrollEase = 0.1;
    const maxSpeed = 0.2;

    const backDarkness = 0.65;
    const backBlur = 0.35;

    let cardHeight = 260;
    let cardGap = cardHeight * cardYSpacing;
    let em = 16;

    const measureCards = () => {
      const firstCard = cards[0];

      if (!firstCard) return;

      cardHeight = firstCard.offsetHeight;
      cardGap = cardHeight * cardYSpacing;
      em = parseFloat(window.getComputedStyle(list).fontSize) || 16;
    };

    const render = () => {
      const amount = cards.length;
      const radius = orbitDepth * em;

      cards.forEach((card, cardIndex) => {
        const loopIndex =
          ((cardIndex + state.progress) % amount + amount) % amount;

        const index =
          loopIndex > amount * 0.5 ? loopIndex - amount : loopIndex;

        const angleDeg = index * rotationAngle;
        const angleRad = (angleDeg * Math.PI) / 180;

        const x = Math.sin(angleRad) * radius;
        const y = index * cardGap;
        const z = (Math.cos(angleRad) - 1) * radius;

        const backAmount = gsap.utils.clamp(
          0,
          1,
          (1 - Math.cos(angleRad)) * 0.5
        );

        const brightness = 1 - backAmount * backDarkness;
        const blur = backAmount * backBlur;

        const centerAmount =
          1 - Math.min(Math.abs(index) / (amount * 0.5), 1);

        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,
          x,
          y,
          z,
          rotateY: angleDeg,
          scale: 0.82 + centerAmount * 0.18,
          filter: `brightness(${brightness}) blur(${blur}em)`,
          autoAlpha: 1,
          zIndex: Math.round(centerAmount * 1000),
        });
      });
    };

    const tick = () => {
      if (!state.active || prefersReducedMotion) return;

      const targetVelocity = autoSpeed * state.direction;

      state.velocity = gsap.utils.interpolate(
        state.velocity,
        targetVelocity,
        scrollEase
      );

      state.progress += state.velocity;

      const amount = cards.length;

      if (state.progress >= amount) {
        state.progress -= amount;
      }

      if (state.progress <= -amount) {
        state.progress += amount;
      }

      render();
    };

    const observer = Observer.create({
      target: section,
      type: "wheel,touch,pointer",
      preventDefault: false,
      lockAxis: true,

      onChange: (self) => {
        if (!state.active) return;

        const delta =
          self.event?.type === "wheel"
            ? self.deltaY
            : Math.abs(self.deltaX) > Math.abs(self.deltaY)
              ? self.deltaX * dragMultiplier
              : self.deltaY * dragMultiplier;

        if (!delta) return;

        state.direction = delta > 0 ? 1 : -1;
        state.velocity += (delta * scrollSpeed) / 100;

        state.velocity = gsap.utils.clamp(
          -maxSpeed,
          maxSpeed,
          state.velocity
        );
      },

      onPress: () => {
        section.style.cursor = "grabbing";
      },

      onRelease: () => {
        section.style.cursor = "grab";
      },
    });

    const setActive = (active: boolean) => {
      state.active = active;

      if (active) {
        observer.enable();
      } else {
        observer.disable();
      }
    };

    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => setActive(true),
      onEnterBack: () => setActive(true),
      onLeave: () => setActive(false),
      onLeaveBack: () => setActive(false),
    });

    const handleResize = () => {
      measureCards();
      render();
    };

    measureCards();
    render();

    setActive(ScrollTrigger.isInViewport(section));

    gsap.ticker.add(tick);

    window.addEventListener("resize", handleResize, {
      passive: true,
    });

    return () => {
      gsap.ticker.remove(tick);
      observer.kill();
      scrollTrigger.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="cursor-grab overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-[720px] text-center lg:mb-16">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.24em] text-[var(--pink)]">
            Gallery
          </p>

          <h2 className="text-[40px] font-normal leading-[1.02] tracking-[-0.03em] sm:text-[50px] lg:text-[58px]">
            Dettagli, colori e ispirazioni
            <span className="text-[var(--pink)]">.</span>
          </h2>

          <div className="mx-auto mt-7 h-[2px] w-16 bg-[var(--pink)]" />

          <p className="mx-auto mt-6 max-w-[560px] text-[15px] leading-[1.8] text-[var(--gray-dark)] sm:text-[16px]">
            Una selezione di lavori, dettagli e decorazioni realizzate con cura.
          </p>
        </div>
      </div>

      <div className="relative h-[560px] w-full overflow-hidden sm:h-[640px] lg:h-[720px]">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-32 bg-gradient-to-b from-white to-transparent sm:h-40" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-32 bg-gradient-to-t from-white to-transparent sm:h-40" />

        <div
          ref={listRef}
          className="relative h-full w-full [perspective:75em] [transform-style:preserve-3d]"
        >
          {tornadoImages.map((src, index) => {
            const originalIndex = index % galleryImages.length;

            return (
              <div
                key={`${src}-${index}`}
                data-tornado-item
                className="invisible absolute left-1/2 top-1/2 h-[220px] w-[176px] overflow-hidden bg-[var(--gray)] [backface-visibility:visible] [transform-style:preserve-3d] will-change-transform sm:h-[260px] sm:w-[208px] lg:h-[300px] lg:w-[240px]"
              >
                <Image
                  src={src}
                  alt={`Nail art Martinails Lab ${originalIndex + 1}`}
                  fill
                  sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 240px"
                  className="pointer-events-none select-none object-cover brightness-[1.08] contrast-[0.92] saturate-[0.9]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}