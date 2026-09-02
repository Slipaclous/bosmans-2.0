"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
    <div className="border border-border bg-card rounded-sm overflow-hidden flex flex-col justify-between">
      <div>
        <div className="relative h-60 bg-zinc-950">
          <Image
            src={image}
            alt={`${name} wheels`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-90"
          />
          <div className="absolute bottom-4 left-4 z-10">
            <div className="bg-zinc-950/90 border border-zinc-700/80 p-2.5 rounded-sm inline-block relative">
              <Image
                src={logo}
                alt={`${name} logo`}
                width={120}
                height={28}
                className="h-7 w-auto object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="p-6 md:p-7">
          <h3 className="text-2xl font-bold mb-2.5 text-foreground">{name}</h3>
          <p className="text-muted-foreground text-base mb-6 leading-relaxed">{description[language]}</p>
          
          <div className="space-y-3 mb-6">
            {features[language].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-sm md:text-base text-zinc-800 dark:text-zinc-200">
                <span className="w-2 h-2 bg-red-600 rounded-none flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 md:p-7 pt-0">
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-bold rounded-sm bg-red-600 text-white hover:bg-red-700 transition-colors"
        >
          <span className="mr-2">{language === 'fr' ? 'Visiter le site' : 'Bezoek website'}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}