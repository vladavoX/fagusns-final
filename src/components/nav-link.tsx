"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "./ui/button";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isGallery = pathname.includes("/gallery");
  const finalHref = isGallery ? `/${href}` : href;

  return (
    <Button asChild variant="link" size="sm">
      <Link href={finalHref}>{children}</Link>
    </Button>
  );
}
