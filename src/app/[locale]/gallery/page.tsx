import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
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
  const canonicalPath = `/${locale}/gallery`;
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
        sr: "/sr/gallery",
        en: "/en/gallery",
        ru: "/ru/gallery",
        "x-default": "/sr/gallery",
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
        "1.jpeg",
        "2.jpeg",
        "3.jpeg",
        "4.jpeg",
        "5.jpeg",
        "6.jpeg",
        "7.jpeg",
        "8.jpeg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
      ],
    },
    {
      key: "bedrooms",
      title: t("Bedroom"),
      images: [
        "1.jpeg",
        "2.jpeg",
        "3.jpeg",
        "4.jpeg",
        "5.jpeg",
        "7.jpeg",
        "8.jpeg",
        "9.jpeg",
        "10.jpeg",
        "11.jpeg",
        "12.jpeg",
        "13.jpeg",
        "14.jpeg",
        "15.jpeg",
        "16.jpeg",
        "17.jpeg",
        "18.jpeg",
        "19.jpeg",
        "20.jpg",
      ],
    },
    {
      key: "closets",
      title: t("Closet"),
      images: [
        "1.jpeg",
        "2.jpeg",
        "3.jpeg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
      ],
    },
    {
      key: "kitchens",
      title: t("Kitchen"),
      images: [
        "1.jpeg",
        "2.jpeg",
        "3.jpeg",
        "4.jpeg",
        "5.jpeg",
        "6.jpeg",
        "7.jpeg",
        "8.jpeg",
        "9.jpeg",
        "10.jpeg",
        "11.jpeg",
        "12.jpeg",
        "13.jpeg",
        "14.jpeg",
        "15.jpeg",
        "16.jpeg",
        "17.jpeg",
        "18.jpeg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "24.jpg",
      ],
    },
    {
      key: "living-rooms",
      title: t("LivingRoom"),
      images: ["1.jpeg", "2.jpeg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"],
    },
    {
      key: "offices",
      title: t("Office"),
      images: [
        "1.jpeg",
        "2.jpeg",
        "3.jpeg",
        "4.jpeg",
        "5.jpeg",
        "6.jpeg",
        "7.jpeg",
        "8.jpeg",
        "9.jpeg",
        "10.jpeg",
        "11.jpeg",
        "12.jpeg",
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
