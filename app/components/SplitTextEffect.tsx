"use client";

import { useEffect } from "react";

const SELECTOR = ".js-split-title";

export function SplitTextEffect() {
  useEffect(() => {
    let ctx: gsap.Context | null = null;

    const run = async () => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(SELECTOR)
      );

      if (!elements.length) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      const gsap = gsapModule.default;
      const { ScrollTrigger } = scrollTriggerModule;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        elements.forEach((element) => {
          if (element.dataset.splitReady === "true") return;

          const originalText = element.textContent || "";
          element.dataset.splitReady = "true";
          element.setAttribute("aria-label", originalText);

          const childNodes = Array.from(element.childNodes);

          element.innerHTML = "";

          childNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
              const text = node.textContent || "";
              const words = text.split(/(\s+)/);

              words.forEach((word) => {
                if (!word.trim()) {
                  element.appendChild(document.createTextNode(word));
                  return;
                }

                const wordWrapper = document.createElement("span");
                wordWrapper.className =
                  "split-word inline-block overflow-hidden align-bottom pb-[0.18em] -mb-[0.18em]";

                const wordInner = document.createElement("span");
                wordInner.className = "split-word-inner inline-block";
                wordInner.textContent = word;

                wordWrapper.appendChild(wordInner);
                element.appendChild(wordWrapper);
              });
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              const clone = node.cloneNode(true) as HTMLElement;

              clone.classList.add(
                "split-word",
                "inline-block",
                "overflow-hidden",
                "align-bottom",
                "pb-[0.18em]",
                "-mb-[0.18em]"
              );

              const inner = document.createElement("span");
              inner.className = "split-word-inner inline-block";
              inner.innerHTML = clone.innerHTML;

              clone.innerHTML = "";
              clone.appendChild(inner);
              element.appendChild(clone);
            }
          });

          const words = element.querySelectorAll<HTMLElement>(
            ".split-word-inner"
          );

          gsap.set(words, {
            yPercent: 105,
            rotate: 0.6,
            opacity: 0,
            filter: "blur(3px)",
          });

          gsap.to(words, {
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.45,
            ease: "expo.out",
            stagger: 0.075,
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          });
        });
      });
    };

    run();

    return () => {
      ctx?.revert();
    };
  }, []);

  return null;
}