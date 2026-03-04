"use client";

import dynamic from "next/dynamic";

const Analytics = dynamic(
  () => import("@vercel/analytics/react").then((module) => module.Analytics),
  { ssr: false },
);

const SpeedInsights = dynamic(
  () =>
    import("@vercel/speed-insights/react").then(
      (module) => module.SpeedInsights,
    ),
  { ssr: false },
);

export function Telemetry() {
  return (
    <>
      <SpeedInsights />
      <Analytics mode="production" />
    </>
  );
}
