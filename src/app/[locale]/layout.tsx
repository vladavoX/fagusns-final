import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";

const baseUrl = new URL("https://www.fagusns.com");

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tSeo = await getTranslations({ locale, namespace: "seo" });
  const keywords = tSeo("keywords")
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);
  const alternateLocale = routing.locales.filter(
    (routingLocale) => routingLocale !== locale,
  );
  const imageAlt = tSeo("ogImageAlt");

  return {
    title: {
      default: tSeo("title"),
      template: "%s | Fagus NS-021",
    },
    description: tSeo("description"),
    metadataBase: baseUrl,
    applicationName: "Fagus NS-021",
    keywords,
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: [
        { url: "/apple-touch-icon.png" },
        { url: "/apple-touch-icon-180x180.png", sizes: "180x180" },
      ],
      other: [
        {
          rel: "icon",
          url: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          rel: "icon",
          url: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    openGraph: {
      title: {
        default: tSeo("title"),
        template: "%s | Fagus NS-021",
      },
      description: tSeo("description"),
      siteName: "Fagus NS-021",
      locale,
      alternateLocale,
      type: "website",
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
      card: "summary_large_image",
      title: tSeo("title"),
      description: tSeo("description"),
      images: [
        {
          url: `/${locale}/twitter-image`,
          alt: imageAlt,
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics mode="production" />
      </body>
    </html>
  );
}
