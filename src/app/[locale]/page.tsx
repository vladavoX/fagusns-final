import {
  AtSign,
  BedDouble,
  BrickWall,
  Drill,
  type LucideIcon,
  Mail,
  PencilRuler,
  Phone,
  RulerDimensionLine,
  User,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import MasonryGrid from "@/components/masonry-grid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        sr: "/sr",
        en: "/en",
        ru: "/ru",
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

export default async function Home() {
  const tLanding = await getTranslations("landing");
  const tAbout = await getTranslations("about");
  const tServices = await getTranslations("services");
  const tContact = await getTranslations("contact");
  const tNav = await getTranslations("navbar");
  const tFooter = await getTranslations("footer");

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
      <section id="home" className="relative min-h-screen w-full">
        <Image
          src="/hero.jpeg"
          alt={tLanding("title")}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 md:w-2/3 bg-black/50 text-white flex flex-col items-center justify-center p-4 gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase w-3/4 text-center md:text-left">
            {tLanding("title")}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200 w-3/4 text-center md:text-left">
            {tLanding("subtitle")}
          </p>
        </div>
      </section>
      <section
        id="about"
        className="flex min-h-screen w-full text-center text-lg md:text-xl lg:text-2xl font-semibold"
      >
        <div className="container mx-auto flex flex-col items-center justify-center p-4 gap-4 text-accent-foreground">
          <h2 className="text-3xl xl:text-5xl font-semibold">
            {tNav("About")}
          </h2>
          <p>{tAbout("descOne")}</p>
          <p>{tAbout("descTwo")}</p>
        </div>
      </section>
      <section
        id="what-we-do"
        className="flex w-full bg-primary-foreground py-20"
      >
        <MasonryGrid />
      </section>
      <section id="services" className="flex w-full">
        <div className="container mx-auto flex flex-col px-4 gap-20 text-accent-foreground py-20">
          <h2 className="text-3xl xl:text-5xl font-semibold text-center">
            {tServices("title")}
          </h2>
          <ul className="flex flex-wrap justify-center gap-4">
            {servicesList.map((service) => (
              <li key={service.key} className="w-full sm:max-w-48 lg:max-w-64">
                <Card className="flex flex-col items-center p-4 gap-2 w-full h-full justify-center">
                  <service.icon className="size-6 xl:size-10" />
                  <span className="text-base lg:text-lg font-medium text-center">
                    {tServices(service.key)}
                  </span>
                  <span className="text-xs lg:text-sm text-muted-foreground text-center">
                    {tServices(`${service.key}Desc`)}
                  </span>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section
        id="contact"
        className="flex w-full items-center justify-center bg-primary-foreground py-6 md:py-20"
      >
        <div className="container mx-auto w-full px-4">
          <div className="max-w-md md:max-w-2xl">
            <h2 className="text-3xl xl:text-5xl font-semibold">
              {tContact("title")}
            </h2>
            <p className="mt-4 text-xs sm:text-base text-muted-foreground">
              {tContact("description")}
            </p>
          </div>
          <address className="flex gap-4 flex-wrap mt-4 items-stretch not-italic">
            <Button size="lg" className="flex-1" asChild>
              <a
                href="tel:+381659207542"
                className="flex flex-col lg:flex-row items-start min-h-fit py-4"
              >
                <div className="flex gap-2 items-center">
                  <User />
                  <span>Momcilo Popadic</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Phone />
                  <span>+381 65 9207542</span>
                </div>
              </a>
            </Button>
            <Button size="lg" className="flex-1" asChild>
              <a
                href="tel:+381642216425"
                className="flex flex-col lg:flex-row items-start min-h-fit py-4"
              >
                <div className="flex gap-2 items-center">
                  <User />
                  <span>Darko Popadic</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Phone />
                  <span>+381 64 221 64 25</span>
                </div>
              </a>
            </Button>
            <Button size="lg" className="flex-1" asChild>
              <a
                href="mailto:fagusns021@gmail.com"
                className="flex flex-col lg:flex-row items-start min-h-fit py-4"
              >
                <div className="flex gap-2 items-center">
                  <Mail />
                  <span>{tContact("contactViaEmail")}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <AtSign />
                  <span>fagusns021@gmail.com</span>
                </div>
              </a>
            </Button>
          </address>
        </div>
      </section>
      <footer className="w-full py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Fagus NS-021 -{" "}
        {tFooter("rights")}. {tFooter("madeBy")}
      </footer>
    </main>
  );
}
