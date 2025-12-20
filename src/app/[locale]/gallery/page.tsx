import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import GalleryGrid from "../../../components/gallery-grid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "what-we-do" });
  const title = t("title");
  const description = t("description");
  const canonicalPath = `/${locale}/gallery`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        sr: "/sr/gallery",
        en: "/en/gallery",
        ru: "/ru/gallery",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalPath,
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
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
