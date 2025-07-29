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
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        

        {/* Ayvens Message */}
        {/* Partners Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t.partners.title}</h2>
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
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'fr' 
              ? 'Besoin de conseils pour vos jantes ?'
              : 'Advies nodig voor uw velgen?'}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Notre équipe d\'experts est là pour vous guider dans le choix de vos jantes. Profitez de notre expertise pour trouver les jantes parfaites pour votre véhicule.'
              : 'Ons team van experts staat klaar om u te begeleiden bij het kiezen van uw velgen. Profiteer van onze expertise om de perfecte velgen voor uw voertuig te vinden.'}
          </p>
        </section>
      </div>
    </main>
  );
}