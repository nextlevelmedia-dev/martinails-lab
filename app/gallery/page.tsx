import type { Metadata } from "next";
import { GalleryPage } from "../components/GalleryPage";
import { absoluteUrl, galleryImages, jsonLdString, site } from "../lib/site";

const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Gallery nail art a Cremona - Martinails Lab",
};

export const metadata: Metadata = {
  title: "Gallery Nail Art a Cremona",

  description:
    "Scopri la gallery di Martinails Lab: nail art, decorazioni unghie e idee realizzate a Cremona. Lasciati ispirare e trova lo stile perfetto per le tue unghie.",

  alternates: {
    canonical: "/gallery",
  },

  openGraph: {
    title: "Gallery Nail Art a Cremona | Martinails Lab",
    description:
      "Scopri nail art e decorazioni unghie realizzate da Martinails Lab a Cremona.",
    url: "https://martinails-lab.com/gallery",
    type: "website",
    locale: "it_IT",
    siteName: "Martinails Lab",
    images: [ogImage],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gallery Nail Art a Cremona | Martinails Lab",
    description:
      "Scopri nail art e decorazioni unghie realizzate da Martinails Lab a Cremona.",
    images: [ogImage.url],
  },
};

const galleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Gallery nail art a Cremona",
  url: `${site.url}/gallery`,
  inLanguage: "it-IT",
  about: { "@id": `${site.url}/#business` },
  image: galleryImages.map((image) => ({
    "@type": "ImageObject",
    contentUrl: absoluteUrl(image.src),
    caption: image.alt,
    creator: { "@id": `${site.url}/#business` },
    copyrightNotice: site.name,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Gallery",
      item: `${site.url}/gallery`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(galleryJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbJsonLd) }}
      />
      <GalleryPage />
    </>
  );
}