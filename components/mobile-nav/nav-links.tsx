"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

export function NavLinks({ onLinkClick }: { onLinkClick: () => void }) {
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
    <nav className="flex flex-col gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "block px-2 py-1 text-lg hover:text-red-600 transition-colors",
            pathname === link.href && "text-red-600 font-semibold"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}