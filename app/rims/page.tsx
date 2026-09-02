"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { PartnerCard } from "./components/partner-card";
import { WHEEL_PARTNERS } from "./data/partners";

export default function Rims() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-red-600" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              {language === 'fr' ? 'ÉQUIPEMENT & STYLE' : 'UITRUSTING & STIJL'}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t.partners.title}
          </h1>
        </div>

        {/* Partners Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {WHEEL_PARTNERS.map((partner) => (
              <PartnerCard 
                key={partner.name} 
                {...partner} 
                language={language}
              />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="border border-zinc-800 bg-zinc-950 rounded-sm p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            {language === 'fr' 
              ? 'Besoin de conseils pour vos jantes ?'
              : 'Advies nodig voor uw velgen?'}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base mb-6 max-w-2xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Notre équipe d\'experts est là pour vous guider dans le choix de vos jantes. Profitez de notre expertise pour trouver les jantes parfaites pour votre véhicule.'
              : 'Ons team van experts staat klaar om u te begeleiden bij het kiezen van uw velgen. Profiteer van onze expertise om de perfecte velgen voor uw voertuig te vinden.'}
          </p>
          <a
            href="tel:023961184"
            className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium rounded-sm bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            {language === 'fr' ? 'Contactez le garage : 02 396 11 84' : 'Neem contact op: 02 396 11 84'}
          </a>
        </section>
      </div>
    </main>
  );
}