import type { MetadataRoute } from "next";
import { absoluteUrl, galleryImages, site } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        absoluteUrl("/og-image.png"),
        absoluteUrl("/images/showcase1.webp"),
        absoluteUrl("/images/showcase2.webp"),
        absoluteUrl("/images/showcase3.webp"),
        absoluteUrl("/images/about/about_me.webp"),
        absoluteUrl("/images/Dietro-le-quinte.webp"),
      ],
    },
    {
      url: `${site.url}/gallery`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      images: galleryImages.map((image) => absoluteUrl(image.src)),
    },
  ];
}
