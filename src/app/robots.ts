import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/",
          "/api/",
        ],
      },
      // Explicit protection for common aggressive AI scrapers / training bots
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "cohere-ai",
        ],
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: `${SITE.publicUrl}/sitemap.xml`,
  };
}
