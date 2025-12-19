import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const navigation = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "WhatWeDo", path: "#what-we-do" },
  { name: "Services", path: "#services" },
  { name: "Contact", path: "#contact" },
];

export default async function Navbar() {
  const t = await getTranslations("navbar");
  const locale = await getLocale();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-border py-4 flex items-center justify-between bg-background backdrop-blur-sm">
      <div className="container items-center justify-between mx-auto hidden lg:flex px-4">
        <Image
          src="/logo.svg"
          alt="Logo FagusNS"
          width={100}
          height={40}
          className="hidden dark:block"
        />
        <Image
          src="/logo-dark.svg"
          alt="Logo FagusNS"
          width={100}
          height={40}
          className="dark:hidden block"
        />
        <div className="flex items-center gap-8 lg:gap-6 xl:gap-8">
          <ul className="flex items-center justify-end">
            {navigation.map((item) => (
              <li key={item.name}>
                <Button asChild variant="link" size="sm">
                  <Link href={item.path}>{t(item.name)}</Link>
                </Button>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-2">
            {locale !== "en" && (
              <li>
                <Link href="/en">
                  <Image
                    src="/flags/en.svg"
                    alt="English"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            )}
            {locale !== "sr" && (
              <li>
                <Link href="/sr">
                  <Image
                    src="/flags/sr.svg"
                    alt="Srpski"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            )}
            {locale !== "ru" && (
              <li>
                <Link href="/ru">
                  <Image
                    src="/flags/ru.svg"
                    alt="Русский"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            )}
          </ul>
          <ModeToggle />
        </div>
      </div>

      <div className="lg:hidden px-4 w-full flex items-center justify-between">
        <Image src="/logo.svg" alt="Logo FagusNS" width={100} height={26} />
        <div className="flex items-center gap-2">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navigation.map((item) => (
                <DropdownMenuItem key={item.name}>
                  <Button asChild variant="link" size="sm" key={item.name}>
                    <Link href={item.path}>{t(item.name)}</Link>
                  </Button>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              {locale !== "en" && (
                <DropdownMenuItem>
                  <Button asChild variant="link" size="sm">
                    <Link href="/en" className="flex items-center gap-2">
                      <Image
                        src="/flags/en.svg"
                        alt="English"
                        width={24}
                        height={24}
                      />
                      English
                    </Link>
                  </Button>
                </DropdownMenuItem>
              )}
              {locale !== "sr" && (
                <DropdownMenuItem>
                  <Button asChild variant="link" size="sm">
                    <Link href="/sr" className="flex items-center gap-2">
                      <Image
                        src="/flags/sr.svg"
                        alt="Srpski"
                        width={24}
                        height={24}
                      />
                      Srpski
                    </Link>
                  </Button>
                </DropdownMenuItem>
              )}
              {locale !== "ru" && (
                <DropdownMenuItem>
                  <Button asChild variant="link" size="sm">
                    <Link href="/ru" className="flex items-center gap-2">
                      <Image
                        src="/flags/ru.svg"
                        alt="Русский"
                        width={24}
                        height={24}
                      />
                      Русский
                    </Link>
                  </Button>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
