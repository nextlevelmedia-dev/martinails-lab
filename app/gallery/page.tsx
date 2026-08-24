import type { Metadata } from "next";
import { GalleryPage } from "../components/GalleryPage";

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
  },

  twitter: {
    card: "summary_large_image",
    title: "Gallery Nail Art a Cremona | Martinails Lab",
    description:
      "Scopri nail art e decorazioni unghie realizzate da Martinails Lab a Cremona.",
  },
};

export default function Page() {
  return <GalleryPage />;
}