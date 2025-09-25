"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Check } from "lucide-react";
import { Language } from "@/lib/translations";

interface PremiumPartnerCardProps {
  name: string;
  logo: string;
  website: string;
  description: {
    fr: string;
    nl: string;
  };
  language: Language;
}

export function PremiumPartnerCard({
  name,
  logo,
  website,
  description,
  language
}: PremiumPartnerCardProps) {
  return (
    <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full -translate-y-32 translate-x-32" />
      <div className="relative z-10">
        <div className="bg-white p-4 rounded-lg inline-block mb-6">
          <img
            src={logo}
            alt={`${name} logo`}
            className="h-12 object-contain"
          />
        </div>
        
        <h3 className="text-3xl font-bold mb-4">{name}</h3>
        <p className="text-gray-300 mb-8 text-lg">{description[language]}</p>

        <div className="space-y-4 mb-8">
          {[
            language === 'fr' ? 'Solutions sur mesure' : 'Op maat gemaakte oplossingen',
            language === 'fr' ? 'Service premium' : 'Premium service',
            language === 'fr' ? 'Expertise internationale' : 'Internationale expertise',
            language === 'fr' ? 'Innovation continue' : 'Continue innovatie'
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-red-500" />
              </div>
              <span className="text-gray-200">{feature}</span>
            </div>
          ))}
        </div>

        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button variant="secondary" size="lg">
            <span className="mr-2">
              {language === 'fr' ? 'Découvrir Ayvens' : 'Ontdek Ayvens'}
            </span>
            <ExternalLink className="w-4 h-4" />
          </Button>
        </a>
      </div>
    </Card>
  );
}