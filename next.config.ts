import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-dropdown-menu"],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
