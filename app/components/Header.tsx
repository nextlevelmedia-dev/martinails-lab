"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const phoneNumber = "+393926788551";
const phoneLabel = "+39 392 678 8551";
const whatsappUrl = "https://wa.me/393926788551";

const menuItems = [
  { label: "Servizi", href: "#servizi" },
  { label: "Chi sono", href: "#chi-sono" },
  { label: "Gallery", href: "#gallery" },
  { label: "Listino prezzi", href: "#listino-prezzi" },
  { label: "Contatti", href: "#contatti" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-[70] w-full border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
        <div className="container-site flex h-24 items-center justify-between">
          <a href="#home" aria-label="Martinails Lab" onClick={closeMenu}>
            <Image
              src="/logo/logo.png"
              alt="Martinails Lab"
              width={82}
              height={82}
              priority
              className="h-20 w-auto"
            />
          </a>

          <nav className="hidden items-center gap-12 lg:flex">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium transition-colors duration-300 hover:text-[var(--pink)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 text-[15px] font-medium transition-colors duration-300 hover:text-[var(--pink)]"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-[var(--pink-soft)]">
                ☎
              </span>
              {phoneLabel}
            </a>

            <a href="#prenota" className="btn-outline">
              Prenota
            </a>
          </div>

          <div className="flex items-center lg:hidden">
  <button
    type="button"
    onClick={() => setIsOpen((current) => !current)}
    className="relative flex h-11 w-9 flex-col items-center justify-center gap-[7px]"
    aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
    aria-expanded={isOpen}
  >
    <span
      className={`block h-px w-8 bg-black transition-all duration-300 ${
        isOpen ? "translate-y-[8px] rotate-45" : ""
      }`}
    />

    <span
      className={`block h-px w-8 bg-black transition-all duration-300 ${
        isOpen ? "opacity-0" : ""
      }`}
    />

    <span
      className={`block h-px w-8 bg-black transition-all duration-300 ${
        isOpen ? "-translate-y-[8px] -rotate-45" : ""
      }`}
    />
  </button>
</div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-[var(--background)] transition-[opacity,filter,transform] duration-500 ease-out lg:hidden ${
          isOpen
            ? "pointer-events-auto scale-100 opacity-100 blur-0"
            : "pointer-events-none scale-[0.985] opacity-0 blur-[6px]"
        }`}
      >
        <div className="container-site flex min-h-dvh flex-col pb-8 pt-32">
          <nav className="flex flex-col">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                style={{
                  transitionDelay: isOpen ? `${120 + index * 55}ms` : "0ms",
                }}
                className={`border-b border-[var(--border)] py-5 font-[family-name:var(--font-heading)] text-[38px] font-normal leading-[0.95] tracking-[-0.04em] text-[var(--foreground)] transition-[opacity,transform,color] duration-500 ease-out hover:text-[var(--pink)] ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div
            className={`mt-auto pt-10 transition-[opacity,transform] duration-500 ease-out ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{
              transitionDelay: isOpen ? "430ms" : "0ms",
            }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="btn-primary justify-center"
            >
              Scrivimi su WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}