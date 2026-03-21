import type { LucideIcon } from "lucide-react";
import {
  AtSign,
  BedDouble,
  BrickWall,
  Drill,
  Mail,
  PencilRuler,
  Phone,
  RulerDimensionLine,
  User,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import MasonryGrid from "@/components/masonry-grid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import {
  getServicePage,
  getServicePath,
  getSharedServiceCopy,
  servicePages,
} from "@/lib/service-pages";

const servicesList: {
  key: string;
  label: string;
  icon: LucideIcon;
}[] = [
  {
    key: "customFurnitureDesign",
    label: "Custom Furniture Design",
    icon: BedDouble,
  },
  {
    key: "interiorRenovations",
    label: "Interior Renovations",
    icon: Drill,
  },
  {
    key: "spacePlanningAndLayout",
    label: "Space Planning and Layout",
    icon: RulerDimensionLine,
  },
  {
    key: "materialSelectionAndSourcing",
    label: "Material Selection and Sourcing",
    icon: BrickWall,
  },
  { key: "projectManagement", label: "Project Management", icon: PencilRuler },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tSeo = await getTranslations({ locale, namespace: "seo" });
  const title = tSeo("title");
  const description = tSeo("description");
  const canonicalPath = `/${locale}`;
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
        sr: "/sr",
        en: "/en",
        ru: "/ru",
        "x-default": "/sr",
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

export default async function Home() {
  const [
    tLanding,
    tAbout,
    tServices,
    tContact,
    tNav,
    tFooter,
    tHomeSeo,
    locale,
  ] = await Promise.all([
    getTranslations("landing"),
    getTranslations("about"),
    getTranslations("services"),
    getTranslations("contact"),
    getTranslations("navbar"),
    getTranslations("footer"),
    getTranslations("home-seo"),
    getLocale(),
  ]);

  const sharedServiceCopy = getSharedServiceCopy(locale);
  const serviceLinkCards = servicePages.map((service) => ({
    ...service,
    path: getServicePath(locale, service.key),
    copy: getServicePage(locale, service.key),
  }));

  const reasons = [
    {
      title: tHomeSeo("reasonOneTitle"),
      description: tHomeSeo("reasonOneDescription"),
    },
    {
      title: tHomeSeo("reasonTwoTitle"),
      description: tHomeSeo("reasonTwoDescription"),
    },
    {
      title: tHomeSeo("reasonThreeTitle"),
      description: tHomeSeo("reasonThreeDescription"),
    },
  ];

  const faqs = [
    {
      question: tHomeSeo("faqOneQuestion"),
      answer: tHomeSeo("faqOneAnswer"),
    },
    {
      question: tHomeSeo("faqTwoQuestion"),
      answer: tHomeSeo("faqTwoAnswer"),
    },
    {
      question: tHomeSeo("faqThreeQuestion"),
      answer: tHomeSeo("faqThreeAnswer"),
    },
    {
      question: tHomeSeo("faqFourQuestion"),
      answer: tHomeSeo("faqFourAnswer"),
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fagus NS-021",
    url: "https://www.fagusns.com",
    image: "https://www.fagusns.com/hero.webp",
    email: "fagusns021@gmail.com",
    telephone: "+381659207542",
    description: tHomeSeo("schemaDescription"),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Novi Sad",
      addressCountry: "RS",
    },
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
    availableLanguage: ["sr", "en", "ru"],
    serviceType: [
      "Custom furniture",
      "Custom kitchens",
      "Built-in wardrobes",
      "Bathroom furniture",
      "Bedroom furniture",
      "Office furniture",
      "Interior woodwork",
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
        <section id="home" className="relative min-h-screen w-full">
          <Image
            src="/hero.webp"
            alt={tLanding("imageAlt")}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center gap-4 bg-black/50 p-4 text-white md:w-2/3">
            <h1 className="w-3/4 text-center text-3xl font-bold uppercase md:text-left md:text-4xl lg:text-5xl">
              {tLanding("title")}
            </h1>
            <p className="w-3/4 text-center text-xl font-semibold text-gray-200 md:text-left md:text-2xl lg:text-3xl">
              {tLanding("subtitle")}
            </p>
            <div className="flex w-3/4 flex-col gap-3 pt-2 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#contact">{tLanding("primaryCta")}</a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/gallery">{tLanding("secondaryCta")}</Link>
              </Button>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="flex min-h-screen w-full text-center text-lg font-semibold md:text-xl lg:text-2xl"
        >
          <div className="container mx-auto flex flex-col items-center justify-center gap-4 p-4 text-accent-foreground">
            <h2 className="text-3xl font-semibold xl:text-5xl">
              {tNav("About")}
            </h2>
            <p>{tAbout("descOne")}</p>
            <p>{tAbout("descTwo")}</p>
          </div>
        </section>
        <section className="flex w-full bg-secondary/20 py-20">
          <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5 text-accent-foreground">
              <h2 className="text-3xl font-semibold xl:text-5xl">
                {tHomeSeo("introTitle")}
              </h2>
              <p className="text-base leading-8 text-muted-foreground md:text-lg">
                {tHomeSeo("introOne")}
              </p>
              <p className="text-base leading-8 text-muted-foreground md:text-lg">
                {tHomeSeo("introTwo")}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-accent-foreground">
                {tHomeSeo("whyTitle")}
              </h2>
              <ul className="space-y-4">
                {reasons.map((reason) => (
                  <li key={reason.title}>
                    <Card className="h-full p-5">
                      <h3 className="text-lg font-semibold">{reason.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground md:text-base">
                        {reason.description}
                      </p>
                    </Card>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section
          id="what-we-do"
          className="flex w-full bg-primary-foreground py-20"
        >
          <MasonryGrid />
        </section>
        <section id="services" className="flex w-full">
          <div className="container mx-auto flex flex-col gap-20 px-4 py-20 text-accent-foreground">
            <h2 className="text-center text-3xl font-semibold xl:text-5xl">
              {tServices("title")}
            </h2>
            <ul className="flex flex-wrap justify-center gap-4">
              {servicesList.map((service) => (
                <li
                  key={service.key}
                  className="w-full sm:max-w-48 lg:max-w-64"
                >
                  <Card className="flex h-full w-full flex-col items-center justify-center gap-2 p-4">
                    <service.icon className="size-6 xl:size-10" />
                    <span className="text-center text-base font-medium lg:text-lg">
                      {tServices(service.key)}
                    </span>
                    <span className="text-center text-xs text-muted-foreground lg:text-sm">
                      {tServices(`${service.key}Desc`)}
                    </span>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="flex w-full py-20">
          <div className="container mx-auto px-4 text-accent-foreground">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold xl:text-5xl">
                {sharedServiceCopy.serviceLinksTitle}
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                {sharedServiceCopy.serviceLinksDescription}
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {serviceLinkCards.map((service) => (
                <Card key={service.key} className="flex h-full flex-col p-6">
                  <h3 className="text-lg font-semibold">
                    {service.copy.label}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground md:text-base">
                    {service.copy.cardDescription}
                  </p>
                  {service.path ? (
                    <Button className="mt-6" asChild>
                      <NextLink href={service.path}>
                        {service.copy.label}
                      </NextLink>
                    </Button>
                  ) : null}
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="flex w-full bg-secondary/20 py-20">
          <div className="container mx-auto px-4 text-accent-foreground">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold xl:text-5xl">
                {tHomeSeo("serviceAreaTitle")}
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                {tHomeSeo("serviceAreaDescription")}
              </p>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="flex w-full items-center justify-center bg-primary-foreground py-6 md:py-20"
        >
          <div className="container mx-auto w-full px-4">
            <div className="max-w-md md:max-w-2xl">
              <h2 className="text-3xl font-semibold xl:text-5xl">
                {tContact("title")}
              </h2>
              <p className="mt-4 text-xs text-muted-foreground sm:text-base">
                {tContact("description")}
              </p>
            </div>
            <address className="mt-4 flex flex-wrap items-stretch gap-4 not-italic">
              <Button size="lg" className="flex-1" asChild>
                <a
                  href="tel:+381659207542"
                  className="flex min-h-fit flex-col items-start py-4 lg:flex-row"
                >
                  <div className="flex items-center gap-2">
                    <User />
                    <span>Momcilo Popadic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone />
                    <span>+381 65 9207542</span>
                  </div>
                </a>
              </Button>
              <Button size="lg" className="flex-1" asChild>
                <a
                  href="tel:+381642216425"
                  className="flex min-h-fit flex-col items-start py-4 lg:flex-row"
                >
                  <div className="flex items-center gap-2">
                    <User />
                    <span>Darko Popadic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone />
                    <span>+381 64 221 64 25</span>
                  </div>
                </a>
              </Button>
              <Button size="lg" className="flex-1" asChild>
                <a
                  href="mailto:fagusns021@gmail.com"
                  className="flex min-h-fit flex-col items-start py-4 lg:flex-row"
                >
                  <div className="flex items-center gap-2">
                    <Mail />
                    <span>{tContact("contactViaEmail")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AtSign />
                    <span>fagusns021@gmail.com</span>
                  </div>
                </a>
              </Button>
            </address>
          </div>
        </section>
        <section className="flex w-full py-20">
          <div className="container mx-auto px-4 text-accent-foreground">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold xl:text-5xl">
                {tHomeSeo("faqTitle")}
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <Card key={faq.question} className="p-6">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <footer className="w-full py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Fagus NS-021 - {tFooter("rights")}.{" "}
          {tFooter("madeBy")}
        </footer>
      </main>
    </>
  );
}
