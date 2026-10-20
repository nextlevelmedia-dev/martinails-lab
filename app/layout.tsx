import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import { preconnect } from "react-dom";
import { absoluteUrl, jsonLdString, services, site } from "./lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const title = "Nail Art e Ricostruzione Unghie a Cremona | Martinails Lab";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: title,
    template: "%s | Martinails Lab",
  },

  description: site.description,

  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "beauty",

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "it_IT",
    url: site.url,
    siteName: site.name,
    title,
    description:
      "Nail art, ricostruzione unghie e gel a Cremona, curati nei dettagli. Scopri servizi, prezzi e gallery di Martinails Lab.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nail art a Cremona - Martinails Lab",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Nail art, ricostruzione unghie e gel a Cremona, curati nei dettagli. Scopri servizi, prezzi e gallery di Martinails Lab.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fffaf8",
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  image: [absoluteUrl("/og-image.png"), absoluteUrl("/images/Dietro-le-quinte.webp")],
  logo: absoluteUrl("/logo/logo.png"),
  priceRange: "€€",
  currenciesAccepted: "EUR",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressRegion: site.address.province,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  hasMap: site.mapsUrl,
  areaServed: [
    { "@type": "City", name: "Cremona" },
    { "@type": "AdministrativeArea", name: "Provincia di Cremona" },
  ],
  sameAs: [site.instagramUrl],
  knowsAbout: [
    "Nail art",
    "Ricostruzione unghie",
    "Gel unghie",
    "Allungamento unghie",
    "Manicure",
  ],
  makesOffer: services
    .filter((service) => service.amount > 0)
    .map((service) => ({
      "@type": "Offer",
      price: service.amount,
      priceCurrency: "EUR",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.detail,
      },
    })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Iubenda viene caricato prima dell'idratazione: apriamo subito le connessioni
  preconnect("https://cs.iubenda.com");
  preconnect("https://cdn.iubenda.com");
  preconnect("https://idb.iubenda.com");

  return (
    <html lang="it">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(businessJsonLd) }}
        />

        <Script
          id="iubenda-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var _iub = _iub || [];
              _iub.csConfiguration = {
                "siteId": 3847640,
                "cookiePolicyId": 38599386,
                "storage": {
                  "useSiteId": true
                }
              };
              _iub.csLangConfiguration = {
                "it": {
                  "cookiePolicyId": 38599386
                }
              };
            `,
          }}
        />

        <Script
          src="https://cs.iubenda.com/autoblocking/3847640.js"
          strategy="beforeInteractive"
        />

        <Script
          src="https://cdn.iubenda.com/cs/iubenda_cs.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}