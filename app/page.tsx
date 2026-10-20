import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { IntroSection } from "./components/IntroSection";
import { BenefitsShowcase } from "./components/BenefitsShowcase";
import { DifferentiatorsSection } from "./components/DifferentiatorsSection";
import { AboutSection } from "./components/AboutSection";
import { GalleryTornado } from "./components/GalleryTornado";
import { PricingSection } from "./components/PricingSection";
import { FaqSection } from "./components/FaqSection";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { SplitTextEffect } from "./components/SplitTextEffect";
import { RevealOnScroll } from "./components/RevealOnScroll";
import { faqs, jsonLdString, site } from "./lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  inLanguage: "it-IT",
  publisher: { "@id": `${site.url}/#business` },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd) }}
      />

      <Header />

      <SplitTextEffect />
      <RevealOnScroll />

      <main>
        <Hero />
        <IntroSection />
        <BenefitsShowcase />
        <DifferentiatorsSection />
        <AboutSection />
        <GalleryTornado />
        <PricingSection />
        <FaqSection />
        <LocationSection />
      </main>

      <Footer />
    </>
  );
}