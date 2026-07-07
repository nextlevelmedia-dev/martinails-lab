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

          <div className="flex items-center gap-4 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Scrivi su WhatsApp"
              className="flex size-10 items-center justify-center rounded-full bg-[var(--pink)] text-white shadow-[0_10px_24px_rgba(217,140,160,0.28)] transition-all duration-300 hover:bg-[var(--pink-hover)]"
            >
              <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
                className="h-5 w-5 fill-white text-white"
              >
                <path d="M16.02 4C9.39 4 4 9.28 4 15.78c0 2.08.56 4.11 1.63 5.9L4 28l6.5-1.58A12.2 12.2 0 0 0 16.02 27C22.65 27 28 21.72 28 15.22 28 9.28 22.65 4 16.02 4Zm0 20.98c-1.78 0-3.52-.47-5.05-1.36l-.36-.21-3.86.94.97-3.68-.24-.38a9.67 9.67 0 0 1-1.48-5.11c0-5.39 4.49-9.77 10.02-9.77s10.02 4.38 10.02 9.77-4.49 9.8-10.02 9.8Zm5.5-7.32c-.3-.15-1.78-.86-2.06-.96-.28-.1-.48-.15-.68.15-.2.29-.78.95-.96 1.14-.18.2-.35.22-.65.07-.3-.15-1.27-.46-2.42-1.45-.9-.78-1.5-1.74-1.67-2.03-.18-.29-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.03-.52-.08-.15-.68-1.6-.93-2.2-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.52.07-.8.37-.28.29-1.05 1-1.05 2.45s1.08 2.85 1.23 3.05c.15.2 2.13 3.18 5.17 4.46.72.3 1.29.49 1.73.62.73.23 1.39.2 1.91.12.58-.08 1.78-.71 2.03-1.4.25-.69.25-1.28.18-1.4-.08-.13-.28-.2-.58-.35Z" />
              </svg>
            </a>

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