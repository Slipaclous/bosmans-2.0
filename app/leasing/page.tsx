{/* Previous imports remain the same */}
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
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            {language === 'fr' ? 'Notre Partenaire Premium' : 'Onze Premium Partner'}
          </h2>
          <PremiumPartnerCard {...LEASING_PARTNERS.premium} language={language} />
        </section>

        {/* Other Partners Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">
            {language === 'fr' ? 'Nos Autres Partenaires' : 'Onze Andere Partners'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {LEASING_PARTNERS.standard.map((partner) => (
              <Card key={partner.name} className="p-6 hover:shadow-lg transition-shadow bg-card dark:bg-gray-800/30">
                <div className="h-16 flex items-center justify-center mb-4 bg-white dark:bg-gray-700/50 rounded-lg p-3">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors text-sm"
                >
                  <span className="mr-1">{language === 'fr' ? 'En savoir plus' : 'Meer info'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}