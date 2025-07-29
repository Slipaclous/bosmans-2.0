"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { TIRE_PARTNERS } from "./data/partners";

export default function Tires() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">{t.tires.title}</h1>
        
        {/* Services Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.tires.services.map((service, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
            </Card>
          ))}
        </div>

        {/* Ayvens Message */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
          <p className="text-lg font-bold text-green-700 dark:text-green-400 text-center">{t.ayvensMessage}</p>
        </div>

        {/* Partners Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t.partners.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TIRE_PARTNERS.map((partner) => (
              <Card key={partner.name} className="p-6 hover:shadow-lg transition-shadow bg-card dark:bg-gray-800/30">
                <div className="h-24 flex items-center justify-center mb-4 bg-white dark:bg-slate-500 rounded-lg p-4">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">{partner.name}</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">{partner.description[language]}</p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                >
                  <span className="mr-2">{language === 'fr' ? 'Visiter le site' : 'Bezoek website'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'fr' 
              ? 'Besoin de conseils pour vos pneus ?'
              : 'Advies nodig voor uw banden?'}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Notre équipe d\'experts est là pour vous guider dans le choix de vos pneus. Profitez de notre expertise pour trouver les pneus parfaits pour votre véhicule.'
              : 'Ons team van experts staat klaar om u te begeleiden bij het kiezen van uw banden. Profiteer van onze expertise om de perfecte banden voor uw voertuig te vinden.'}
          </p>
        </section>
      </div>
    </main>
  );
}