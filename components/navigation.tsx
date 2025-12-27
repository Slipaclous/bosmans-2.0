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
    <nav className="hidden md:flex space-x-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "font-display text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200 tracking-wide",
            pathname === link.href && "text-primary font-bold"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}