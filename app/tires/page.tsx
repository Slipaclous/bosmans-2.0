"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { TIRE_PARTNERS } from "./data/partners";

export default function Tires() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-red-600" />
            <span className="text-sm uppercase tracking-widest text-muted-foreground font-bold">
              {language === 'fr' ? 'CATALOGUE & ATELIER' : 'CATALOGUS & WERKPLAATS'}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t.tires.title}
          </h1>
        </div>
        
        {/* Services Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {t.tires.services.map((service, index) => (
            <div key={index} className="border border-border bg-card p-6 md:p-7 rounded-sm">
              <div className="text-sm text-muted-foreground font-bold mb-3">
                0{index + 1} //
              </div>
              <h3 className="text-xl font-bold mb-2.5 text-foreground">{service.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <section className="mb-16">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-red-600" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground font-bold">
                {language === 'fr' ? 'MARQUES & FABRICANTS' : 'MERKEN & FABRIKANTEN'}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              {t.partners.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIRE_PARTNERS.map((partner) => (
              <div 
                key={partner.name} 
                className="border border-border bg-card p-6 rounded-sm flex flex-col justify-between hover:border-red-600/40 transition-colors"
              >
                <div>
                  <div className="h-24 flex items-center justify-center mb-4 bg-white dark:bg-zinc-800 border border-border/50 rounded-sm p-4 relative">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={160}
                      height={64}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-center mb-2 text-foreground">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground text-center mb-5 leading-relaxed">{partner.description[language]}</p>
                </div>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-3 border-t border-border/60 flex items-center justify-center text-sm font-semibold text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                >
                  <span className="mr-1.5">{language === 'fr' ? 'Visiter le site' : 'Bezoek website'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action - Bloc Atelier Technique */}
        <section className="border border-zinc-800 bg-zinc-950 rounded-sm p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            {language === 'fr' 
              ? 'Besoin de conseils pour vos pneus ?'
              : 'Advies nodig voor uw banden?'}
          </h2>
          <p className="text-zinc-300 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Notre équipe d\'experts est là pour vous guider dans le choix de vos pneus. Profitez de notre expertise pour trouver les pneus parfaits pour votre véhicule.'
              : 'Ons team van experts staat klaar om u te begeleiden bij het kiezen van uw banden. Profiteer van onze expertise om de perfecte banden voor uw voertuig te vinden.'}
          </p>
          <a
            href="tel:023961184"
            className="inline-flex items-center justify-center px-7 py-3 text-sm md:text-base font-bold rounded-sm bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            {language === 'fr' ? 'Contactez le garage : 02 396 11 84' : 'Neem contact op: 02 396 11 84'}
          </a>
        </section>
      </div>
    </main>
  );
}