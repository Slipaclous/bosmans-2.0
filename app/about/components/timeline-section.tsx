"use client";

import { Language } from "@/lib/translations";
import { Card } from "@/components/ui/card";

interface TimelineSectionProps {
  language: Language;
}

export function TimelineSection({ language }: TimelineSectionProps) {
  const events = [
    {
      year: "1935",
      title: {
        fr: "Création",
        nl: "Oprichting"
      },
      description: {
        fr: "Arthur Bosmans se lance dans le commerce du pneu après sa formation chez Doyen à Bruxelles",
        nl: "Arthur Bosmans start met de bandenhandel na zijn opleiding bij Doyen in Brussel"
      }
    },
    {
      year: "1945",
      title: {
        fr: "Reprise",
        nl: "Herstart"
      },
      description: {
        fr: "Reprise du commerce après la Seconde Guerre mondiale",
        nl: "Herstart van de handel na de Tweede Wereldoorlog"
      }
    },
    {
      year: "Aujourd'hui",
      title: {
        fr: "3ème Génération",
        nl: "3de Generatie"
      },
      description: {
        fr: "Une expertise familiale transmise à travers les générations",
        nl: "Een familie-expertise doorgegeven door de generaties heen"
      }
    }
  ];

  return (
    <section className="mb-16">
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={index} className="relative">
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <Card className="inline-block p-6">
                    <h3 className="text-xl font-bold mb-2">{event.year}</h3>
                    <h4 className="text-lg font-semibold mb-2">{event.title[language]}</h4>
                    <p className="text-gray-600">{event.description[language]}</p>
                  </Card>
                </div>
                <div className="w-4 h-4 rounded-full bg-red-600 border-4 border-white shadow" />
                <div className="flex-1 pl-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}