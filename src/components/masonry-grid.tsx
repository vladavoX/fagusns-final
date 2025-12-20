import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { Button } from "./ui/button";

export default async function MasonryGrid() {
  const t = await getTranslations("what-we-do");
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 container mx-auto px-4">
      <div className="h-50 sm:h-50 lg:h-50 xl:h-75 w-full lg:row-span-1 row-span-1 flex flex-col gap-4 items-center sm:items-start">
        <h2 className="text-3xl xl:text-5xl font-semibold">{t("title")}</h2>
        <p className="text-center sm:text-left text-lg xl:text-2xl text-muted-foreground">
          {t("description")}
        </p>
        <Button asChild>
          <Link href="/gallery">
            {t("seeAll")} <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="h-100 sm:h-104 lg:h-100 xl:h-150 w-full relative lg:row-span-2 row-span-2">
        <Image
          src="/bathroom.jpeg"
          alt={t("Bathroom")}
          fill
          className="rounded-lg object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="h-100 sm:h-50 lg:h-50 xl:h-75 w-full rounded-lg relative lg:row-span-1 row-span-1">
        <Image
          src="/bedroom.jpeg"
          alt={t("Bedroom")}
          fill
          className="rounded-lg object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="h-100 sm:h-104 lg:h-100 xl:h-150 w-full rounded-lg relative lg:row-span-2 row-span-2">
        <Image
          src="/closet.jpg"
          alt={t("Closet")}
          fill
          className="rounded-lg object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="h-100 sm:h-50 lg:h-100 xl:h-150 w-full rounded-lg relative lg:row-span-2 row-span-1">
        <Image
          src="/kitchen.jpeg"
          alt={t("Kitchen")}
          fill
          className="rounded-lg object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="h-100 sm:h-50 lg:h-50 xl:h-75 w-full rounded-lg relative lg:row-span-1">
        <Image
          src="/office.jpeg"
          alt={t("Office")}
          fill
          className="rounded-lg object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
    </div>
  );
}
