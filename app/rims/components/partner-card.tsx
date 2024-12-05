"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Check } from "lucide-react";
import { Language } from "@/lib/translations";

interface PartnerCardProps {
  name: string;
  logo: string;
  website: string;
  description: {
    fr: string;
    nl: string;
  };
  features: {
    fr: string[];
    nl: string[];
  };
  image: string;
  language: Language;
}

export function PartnerCard({
  name,
  logo,
  website,
  description,
  features,
  image,
  language
}: PartnerCardProps) {
  return (
    <Card className="overflow-hidden bg-white">
      <div className="relative h-64">
        <img
          src={image}
          alt={`${name} wheels`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className=" p-3 rounded-lg inline-block">
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-8 object-contain"
            />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3">{name}</h3>
        <p className="text-gray-600 mb-6">{description[language]}</p>
        
        <div className="space-y-3 mb-6">
          {features[language].map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-red-600" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full"
        >
          <Button className="w-full bg-red-600 hover:bg-red-700">
            <span className="mr-2">{language === 'fr' ? 'Visiter le site' : 'Bezoek website'}</span>
            <ExternalLink className="w-4 h-4" />
          </Button>
        </a>
      </div>
    </Card>
  );
}