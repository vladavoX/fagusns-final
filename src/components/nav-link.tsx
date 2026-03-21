"use client";

import Link from "next/link";
import { usePathname } from "@/i18n/navigation";
import { Button } from "./ui/button";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const finalHref = pathname === "/" ? href : `/${href}`;

  return (
    <Button asChild variant="link" size="sm">
      <Link href={finalHref}>{children}</Link>
    </Button>
  );
}
