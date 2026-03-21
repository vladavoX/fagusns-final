import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import {
  getGalleryPath,
  getServicePath,
  servicePages,
} from "@/lib/service-pages";

const baseUrl = "https://www.fagusns.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const changeFrequency = "monthly" as const;
  return routing.locales.flatMap((locale) => {
    const localizedServiceRoutes = servicePages
      .map((service) => getServicePath(locale, service.key))
      .filter((path): path is string => Boolean(path));

    return [
      {
        url: `${baseUrl}/${locale}`,
        lastModified: now,
        changeFrequency,
        priority: 1,
      },
      {
        url: `${baseUrl}${getGalleryPath(locale)}`,
        lastModified: now,
        changeFrequency,
        priority: 0.8,
      },
      ...localizedServiceRoutes.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: now,
        changeFrequency,
        priority: 0.85,
      })),
    ];
  });
}
