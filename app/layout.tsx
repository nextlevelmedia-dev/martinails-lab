import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://martinails-lab.com"),

  title: {
    default: "Nail Art a Cremona | Martinails Lab",
    template: "%s | Martinails Lab",
  },

  description:
    "Nail art e decorazioni unghie a Cremona, curate nei dettagli. Scopri i servizi, guarda la gallery e contatta Martinails Lab per il tuo prossimo appuntamento.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://martinails-lab.com",
    siteName: "Martinails Lab",
    title: "Nail Art a Cremona | Martinails Lab",
    description:
      "Nail art e decorazioni unghie a Cremona, curate nei dettagli. Scopri i servizi e la gallery di Martinails Lab.",
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
    title: "Nail Art a Cremona | Martinails Lab",
    description:
      "Nail art e decorazioni unghie a Cremona, curate nei dettagli. Scopri i servizi e la gallery di Martinails Lab.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
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