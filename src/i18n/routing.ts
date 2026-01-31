import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["sr", "en", "ru"],

  // Used when no locale matches
  defaultLocale: "sr",

  // Always default to Serbian instead of auto-detecting the browser locale
  localeDetection: false,
});
