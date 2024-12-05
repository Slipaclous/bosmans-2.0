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
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1611921059253-1938aa3c4e54?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')"
            }}
          />
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6">{t.rims.title}</h1>
            <p className="text-xl mb-8 text-center max-w-2xl">
              {language === 'fr' 
                ? 'Découvrez notre sélection exclusive de jantes avec nos partenaires de confiance'
                : 'Ontdek onze exclusieve selectie velgen met onze vertrouwde partners'}
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              {t.common.contactUs}
            </Button>
          </div>
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