import type { Metadata } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import {
  getServiceConfig,
  getServiceKeyBySlug,
  getServicePage,
  getServicePath,
  getSharedServiceCopy,
  servicePages,
} from "@/lib/service-pages";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    servicePages.map((service) => ({
      locale,
      service: service.slugs[locale],
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}): Promise<Metadata> {
  const { locale, service } = await params;
  const serviceKey = getServiceKeyBySlug(locale, service);
  if (!serviceKey) {
    notFound();
  }

  const page = getServicePage(locale, serviceKey);
  const alternateLocale = routing.locales.filter(
    (routingLocale) => routingLocale !== locale,
  );
  const canonicalPath = getServicePath(locale, serviceKey);
  if (!canonicalPath) {
    notFound();
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: canonicalPath,
      languages: {
        sr: getServicePath("sr", serviceKey) ?? "/sr",
        en: getServicePath("en", serviceKey) ?? "/en",
        ru: getServicePath("ru", serviceKey) ?? "/ru",
        "x-default": getServicePath("sr", serviceKey) ?? "/sr",
      },
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
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
          alt: page.title,
        },
      ],
    },
    twitter: {
      title: page.metaTitle,
      description: page.metaDescription,
      card: "summary_large_image",
      images: [
        {
          url: `/${locale}/twitter-image`,
          alt: page.title,
        },
      ],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service } = await params;
  const serviceKey = getServiceKeyBySlug(locale, service);
  if (!serviceKey) {
    notFound();
  }

  const serviceConfig = getServiceConfig(serviceKey);
  if (!serviceConfig) {
    notFound();
  }

  const page = getServicePage(locale, serviceKey);
  const shared = getSharedServiceCopy(locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: page.label,
    name: page.title,
    description: page.metaDescription,
    areaServed: [
      {
        "@type": "City",
        name: "Novi Sad",
      },
      {
        "@type": "Country",
        name: "Serbia",
      },
    ],
    provider: {
      "@type": "LocalBusiness",
      name: "Fagus NS-021",
      url: "https://www.fagusns.com",
      telephone: "+381659207542",
      email: "fagusns021@gmail.com",
    },
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <main className="min-h-screen w-full bg-linear-to-b from-background via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4 pt-16">
          <header className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
              {page.label}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
              {page.lead}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
              {page.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <NextLink href="/#contact">{shared.contactCta}</NextLink>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/gallery">{shared.galleryCta}</Link>
              </Button>
            </div>
          </header>

          <section className="mt-16">
            <h2 className="text-3xl font-semibold">{shared.bulletsTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {page.bulletItems.map((item) => (
                <Card key={item} className="p-6">
                  <p className="text-sm leading-7 text-muted-foreground md:text-base">
                    {item}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-semibold">{shared.galleryTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {serviceConfig.previewImages.map((imagePath, index) => (
                <div
                  key={imagePath}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60"
                >
                  <Image
                    src={imagePath}
                    alt={`${page.label} ${index + 1}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-semibold">{shared.faqTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {page.faqItems.map((faq) => (
                <Card key={faq.question} className="p-6">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-3xl border border-border/60 bg-secondary/30 p-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold">{shared.contactTitle}</h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                {shared.contactDescription}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <NextLink href="/#contact">{shared.contactCta}</NextLink>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/gallery">{shared.galleryCta}</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
