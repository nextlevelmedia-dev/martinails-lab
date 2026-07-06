import Image from "next/image";

const menuItems = [
  { label: "Servizi", href: "#servizi" },
  { label: "Chi sono", href: "#chi-sono" },
  { label: "Gallery", href: "#gallery" },
  { label: "Listino prezzi", href: "#listino-prezzi" },
  { label: "Contatti", href: "#contatti" },
];

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="container-site flex h-24 items-center justify-between">
        <a href="#home" aria-label="Martinails Lab">
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
              className="text-[15px] font-medium transition hover:text-[var(--pink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:3333333333"
            className="flex items-center gap-3 text-[15px] font-medium"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-[var(--pink-soft)]">
              ☎
            </span>
            333 333 3333
          </a>

          <a href="#prenota" className="btn-outline">
            Prenota
          </a>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <a
            href="tel:3333333333"
            className="flex size-11 items-center justify-center rounded-full bg-[var(--pink-soft)]"
            aria-label="Chiama"
          >
            ☎
          </a>

          <button className="space-y-2" aria-label="Apri menu">
            <span className="block h-px w-8 bg-black" />
            <span className="block h-px w-8 bg-black" />
            <span className="block h-px w-8 bg-black" />
          </button>
        </div>
      </div>
    </header>
  );
}