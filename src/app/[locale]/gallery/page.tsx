import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getGalleryPath } from "@/lib/service-pages";
import GalleryGrid from "../../../components/gallery-grid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tSeo = await getTranslations({ locale, namespace: "seo" });
  const title = tSeo("galleryTitle");
  const description = tSeo("galleryDescription");
  const canonicalPath = getGalleryPath(locale);
  const alternateLocale = routing.locales.filter(
    (routingLocale) => routingLocale !== locale,
  );
  const imageAlt = tSeo("ogImageAlt");

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        sr: getGalleryPath("sr"),
        en: getGalleryPath("en"),
        ru: getGalleryPath("ru"),
        "x-default": getGalleryPath("sr"),
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalPath,
      siteName: "Fagus NS-021",
      locale,
      alternateLocale,
      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: [
        {
          url: `/${locale}/twitter-image`,
          alt: imageAlt,
        },
      ],
    },
  };
}

export default async function GalleryPage() {
  const t = await getTranslations("what-we-do");
  const sections = [
    {
      key: "bathrooms",
      title: t("Bathroom"),
      images: [
        "1.webp",
        "2.webp",
        "3.webp",
        "4.webp",
        "5.webp",
        "6.webp",
        "7.webp",
        "8.webp",
        "9.webp",
        "10.webp",
        "11.webp",
      ],
    },
    {
      key: "bedrooms",
      title: t("Bedroom"),
      images: [
        "1.webp",
        "2.webp",
        "3.webp",
        "4.webp",
        "5.webp",
        "7.webp",
        "8.webp",
        "9.webp",
        "10.webp",
        "11.webp",
        "12.webp",
        "13.webp",
        "14.webp",
        "15.webp",
        "16.webp",
        "17.webp",
        "18.webp",
        "19.webp",
        "20.webp",
      ],
    },
    {
      key: "closets",
      title: t("Closet"),
      images: [
        "1.webp",
        "2.webp",
        "3.webp",
        "4.webp",
        "5.webp",
        "6.webp",
        "7.webp",
      ],
    },
    {
      key: "kitchens",
      title: t("Kitchen"),
      images: [
        "1.webp",
        "2.webp",
        "3.webp",
        "4.webp",
        "5.webp",
        "6.webp",
        "7.webp",
        "8.webp",
        "9.webp",
        "10.webp",
        "11.webp",
        "12.webp",
        "13.webp",
        "14.webp",
        "15.webp",
        "16.webp",
        "17.webp",
        "18.webp",
        "19.webp",
        "20.webp",
        "21.webp",
        "22.webp",
        "23.webp",
        "24.webp",
      ],
    },
    {
      key: "living-rooms",
      title: t("LivingRoom"),
      images: [
        "1.webp",
        "2.webp",
        "3.webp",
        "4.webp",
        "5.webp",
        "6.webp",
        "7.webp",
      ],
    },
    {
      key: "offices",
      title: t("Office"),
      images: [
        "1.webp",
        "2.webp",
        "3.webp",
        "4.webp",
        "5.webp",
        "6.webp",
        "7.webp",
        "8.webp",
        "9.webp",
        "10.webp",
        "11.webp",
        "12.webp",
      ],
    },
  ];

  return (
    <main className="min-h-screen w-full bg-linear-to-b from-background via-background to-secondary/30 py-20">
      <header className="container mx-auto px-4 pt-16 pb-10">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {t("title")}
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
          {t("description")}
        </p>
      </header>
      <div className="container mx-auto px-4 pb-16 space-y-16">
        <GalleryGrid sections={sections} />
      </div>
    </main>
  );
}
