"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type RevealImageProps = {
  src: string;
  alt: string;
  direction?: "left" | "right";
  aspectClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function RevealImage({
  src,
  alt,
  direction = "left",
  aspectClassName = "aspect-[16/10]",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 600px",
}: RevealImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = wrapperRef.current;

    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const initialX = direction === "left" ? "-12px" : "12px";

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full ${aspectClassName}`}
    >
      {/* Glow esterna */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(217, 140, 160, 0.20) 0%, rgba(247, 231, 236, 0.12) 40%, transparent 72%)",
          filter: "blur(22px)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.94)",
          transition:
            "opacity 1.4s ease 250ms, transform 1.6s cubic-bezier(0.22, 1, 0.36, 1) 250ms",
        }}
      />

      {/* Immagine */}
      <div
        className="relative h-full w-full overflow-hidden bg-[var(--gray)]"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translate3d(0, 0, 0) scale(1)"
            : `translate3d(${initialX}, 20px, 0) scale(0.985)`,
          filter: isVisible ? "brightness(1)" : "brightness(1.22)",
          transition:
            "opacity 1.1s ease, transform 1.4s cubic-bezier(0.22, 1, 0.36, 1), filter 1.5s ease",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover brightness-[1.04] contrast-[0.98] saturate-[0.97] sepia-[0.025]"
        />

        {/* Riflesso luminoso */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-[-30%] left-0 w-[38%] rotate-[14deg]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.72) 50%, rgba(247,231,236,0.28) 72%, transparent 100%)",
            filter: "blur(10px)",
            mixBlendMode: "screen",
            opacity: isVisible ? 0 : 0.8,
            transform: isVisible
              ? "translate3d(360%, 0, 0)"
              : "translate3d(-160%, 0, 0)",
            transition:
              "transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) 200ms, opacity 1.8s ease 200ms",
          }}
        />

        {/* Flash diffuso */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5) 0%, rgba(247,231,236,0.18) 45%, transparent 75%)",
            mixBlendMode: "screen",
            opacity: isVisible ? 0 : 0.7,
            transition: "opacity 1.5s ease 150ms",
          }}
        />
      </div>

      {/* Bordo luminoso */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: isVisible
            ? "inset 0 0 0 1px rgba(255,255,255,0.20), 0 0 28px rgba(217,140,160,0.08)"
            : "inset 0 0 0 1px rgba(255,255,255,0)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1.4s ease 500ms",
        }}
      />
    </div>
  );
}