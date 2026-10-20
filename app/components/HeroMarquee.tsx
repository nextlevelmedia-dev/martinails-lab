import Image from "next/image";
import { galleryImages } from "../lib/site";

// Prima colonna: immagini dispari, seconda colonna: immagini pari
const columns = [
  galleryImages.filter((_, index) => index % 2 === 0),
  galleryImages.filter((_, index) => index % 2 === 1),
];

export function HeroMarquee() {
  return (
    <div className="hero-marquee relative grid h-[400px] grid-cols-2 gap-3 overflow-hidden sm:h-[560px] lg:h-[640px] lg:gap-4">
      {columns.map((images, columnIndex) => (
        <div key={columnIndex} className="overflow-hidden">
          <div
            className={`hero-marquee-track flex flex-col ${
              columnIndex === 0
                ? "hero-marquee-up"
                : "hero-marquee-down"
            }`}
          >
            {/* Lista duplicata per un loop continuo */}
            {[...images, ...images].map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="relative mb-3 aspect-[3/4] w-full shrink-0 overflow-hidden lg:mb-4"
                aria-hidden={index >= images.length ? "true" : undefined}
              >
                <Image
                  src={image.src}
                  alt={index < images.length ? image.alt : ""}
                  fill
                  loading={index < 2 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  sizes="(max-width: 1024px) 50vw, 27vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
