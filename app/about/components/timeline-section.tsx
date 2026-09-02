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
      year: language === "fr" ? "Aujourd'hui" : "Vandaag",
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
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="border border-border bg-card p-6 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-zinc-950 text-red-500 text-sm font-bold rounded-sm border border-zinc-800">
                  {event.year}
                </span>
                <h4 className="text-base md:text-lg font-bold text-foreground">{event.title[language]}</h4>
              </div>
              <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">{event.description[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}