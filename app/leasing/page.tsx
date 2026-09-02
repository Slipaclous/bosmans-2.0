"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { LEASING_PARTNERS } from "./data/partners";

export default function Leasing() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-red-600" />
            <span className="text-sm uppercase tracking-widest text-muted-foreground font-bold">
              {language === 'fr' ? 'SOCIÉTÉS & FLOTTES' : 'LEASINGMAATSCHAPPIJEN'}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {language === 'fr' ? 'Partenaires Leasing' : 'Leasing Partners'}
          </h1>
        </div>

        {/* Ayvens Message */}
        <div className="border border-emerald-300 dark:border-emerald-800/60 bg-emerald-50/80 dark:bg-emerald-950/30 p-6 md:p-7 mb-14 rounded-sm max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
            <p className="text-base md:text-lg font-bold text-emerald-900 dark:text-emerald-300 leading-relaxed">
              {t.ayvensMessage}
            </p>
          </div>
        </div>

        {/* Other Partners Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              {t.partners.title}
            </h2>
            <p className="text-muted-foreground text-base mt-1.5">{t.partners.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {LEASING_PARTNERS.standard.map((partner) => (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border bg-card p-6 rounded-sm flex flex-col justify-between hover:border-red-600/40 transition-colors"
              >
                <div className="h-24 flex items-center justify-center bg-white dark:bg-zinc-800 border border-border/50 rounded-sm p-4 mb-4 relative">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={160}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="pt-3.5 border-t border-border/60 flex items-center justify-center text-sm font-bold text-red-600 group-hover:text-red-700 dark:text-red-400 transition-colors">
                  <span className="mr-1.5">{language === 'fr' ? 'Visiter le site' : 'Bezoek de website'}</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}