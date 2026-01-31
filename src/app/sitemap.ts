import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const baseUrl = "https://www.fagusns.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "", priority: 1 },
    { path: "gallery", priority: 0.8 },
  ];

  return routing.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route.path ? `/${route.path}` : ""}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: route.priority,
    })),
  );
}
