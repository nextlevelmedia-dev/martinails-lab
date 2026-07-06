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

export default function Home() {
  return (
    <>
      <Header />
      <SplitTextEffect />

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