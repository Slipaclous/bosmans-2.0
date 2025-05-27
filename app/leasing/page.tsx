"use client";

import { translations } from "@/lib/translations";
import { useLanguage } from "@/lib/context/language-context";
import { PremiumPartnerCard } from "./components/premium-partner-card";
import { LEASING_PARTNERS } from "./data/partners";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function Leasing() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section remains the same */}

        {/* Premium Partner Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 tracking-tight">
              <span className="block mb-2 text-red-600">Nos Partenaires</span>
              <span className="text-3xl font-medium text-gray-600">Des solutions adaptées à vos besoins</span>
            </h2>
            <PremiumPartnerCard {...LEASING_PARTNERS.premium} language={language} />
          </div>
        </section>

        {/* Other Partners Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 tracking-tight">
              <span className="block mb-2 text-red-600">Autres Partenaires</span>
              <span className="text-3xl font-medium text-gray-600">Découvrez nos autres collaborations</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {LEASING_PARTNERS.standard.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card 
                    className="relative overflow-hidden p-6 hover:shadow-xl transition-all duration-300 bg-card dark:bg-gray-800/30 hover:scale-105 h-full"
                  >
                    <div className="h-24 flex items-center justify-center bg-white dark:bg-slate-500 rounded-lg p-3 transition-transform duration-300 group-hover:scale-95">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-h-full max-w-full object-contain filter dark:brightness-90 dark:contrast-125"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-sm text-red-600/70 dark:text-red-400/70 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 flex items-center justify-center">
                        {language === 'fr' ? 'Visiter le site' : 'Bezoek de website'}
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-red-50/50 to-transparent dark:from-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}