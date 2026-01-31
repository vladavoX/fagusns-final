import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function TwitterImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tSeo = await getTranslations({ locale, namespace: "seo" });
  const title = tSeo("title");
  const description = tSeo("description");

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#000",
        color: "#fff",
        padding: "80px",
        gap: "28px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 64,
          lineHeight: 1.1,
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 28,
          lineHeight: 1.4,
          color: "rgba(255, 255, 255, 0.88)",
          maxWidth: "1000px",
        }}
      >
        {description}
      </div>
    </div>,
    size,
  );
}
