"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const aspectClasses = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[16/10]",
  "aspect-square",
];

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSIjMTExIi8+PC9zdmc+";

type GallerySection = {
  key: string;
  title: string;
  images: string[];
};

type GalleryGridProps = {
  sections: GallerySection[];
};

export default function GalleryGrid({ sections }: GalleryGridProps) {
  const t = useTranslations("common");

  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionMap = useMemo(() => {
    return new Map(sections.map((section) => [section.key, section]));
  }, [sections]);

  const openModal = (sectionKey: string, index: number) => {
    setActiveSection(sectionKey);
    setActiveIndex(index);
  };

  const closeModal = useCallback(() => {
    setActiveSection(null);
  }, []);

  const section = activeSection ? sectionMap.get(activeSection) : null;

  const showPrev = section && section.images.length > 1;
  const showNext = section && section.images.length > 1;

  const goPrev = useCallback(() => {
    if (!section) return;
    setActiveIndex((index) =>
      index === 0 ? section.images.length - 1 : index - 1,
    );
  }, [section]);

  const goNext = useCallback(() => {
    if (!section) return;
    setActiveIndex((index) =>
      index === section.images.length - 1 ? 0 : index + 1,
    );
  }, [section]);

  useEffect(() => {
    if (!section) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [closeModal, goNext, goPrev, section]);

  return (
    <>
      {sections.map((section) => (
        <section key={section.key} className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              {section.title}
            </h2>
            <span className="text-sm text-muted-foreground">
              {section.images.length} {t("photos")}
            </span>
          </div>
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:balance]">
            {section.images.map((image, index) => (
              <figure
                key={`${section.key}-${image}`}
                className="mb-6 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => openModal(section.key, index)}
                  className={cn(
                    "group relative w-full overflow-hidden rounded-2xl border border-border/60 shadow-sm transition hover:shadow-md",
                    aspectClasses[index % aspectClasses.length],
                  )}
                >
                  <Image
                    src={`/${section.key}/${image}`}
                    alt={`${section.title} ${index + 1}`}
                    fill
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105 hover:cursor-zoom-in"
                  />
                </button>
              </figure>
            ))}
          </div>
        </section>
      ))}
      {section && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${section.title} ${t("galleryViewer")}`}
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute inset-0 h-full w-full cursor-pointer"
            aria-label={t("closeGalleryViewer")}
          />
          <div className="relative z-10 flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4">
            <div className="relative w-full flex-1">
              <Image
                src={`/${section.key}/${section.images[activeIndex]}`}
                alt={`${section.title} ${activeIndex + 1}`}
                fill
                placeholder="blur"
                blurDataURL={blurDataURL}
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex w-full items-center justify-between text-sm text-white/80">
              <span>
                {activeIndex + 1} / {section.images.length}
              </span>
              <span>{section.title}</span>
            </div>
            {showPrev && (
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 px-4 py-3 text-sm text-white backdrop-blur transition hover:bg-black/60"
                aria-label={t("prevImage")}
              >
                {t("prev")}
              </button>
            )}
            {showNext && (
              <button
                type="button"
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 px-4 py-3 text-sm text-white backdrop-blur transition hover:bg-black/60"
                aria-label={t("nextImage")}
              >
                {t("next")}
              </button>
            )}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/50 px-3 py-2 text-xs uppercase tracking-widest text-white transition hover:bg-black/70"
            >
              {t("close")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
