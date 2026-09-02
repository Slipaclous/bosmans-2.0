"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = translations[language];

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/tires", label: t.nav.tires },
    { href: "/rims", label: t.nav.rims },
    { href: "/technical", label: t.nav.technical },
    { href: "/leasing", label: t.nav.leasing },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "px-3 py-1.5 text-sm font-medium transition-colors rounded-sm",
              isActive
                ? "bg-zinc-100 text-red-600 dark:bg-zinc-800/80 dark:text-red-400 font-semibold"
                : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/40"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}