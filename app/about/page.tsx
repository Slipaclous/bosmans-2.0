"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/context/language-context";
import { HistorySection } from "./components/history-section";
import { TimelineSection } from "./components/timeline-section";

export default function About() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "À propos de nous",
      subtitle: "Une histoire de passion et d'expertise depuis 1935",
      history: {
        title: "Notre Histoire",
        paragraphs: [
          "L'histoire de notre garage commence en 1935 lorsque Arthur Bosmans se lance dans le commerce du pneu après avoir suivi une formation de vulcanisateur chez Doyen à Bruxelles.",
          "Après s'être caché pendant 5 ans lors de la seconde guerre, il commence son commerce de pneus. Depuis lors nous sommes la troisième génération qui exploitons ce commerce de pneus. Le métier a depuis bien changé car la technologie du pneu a fort heureusement évolué avec l'évolution des nouveaux véhicules.",
          "Nous mettons un point d'honneur à répondre présent aux demandes de nos clients. Cela commence par l'accueil, l'écoute, le conseil et notre professionnalisme envers le client.",
          "Depuis quelques années, nous proposons à notre clientèle l'entretien et la préparation de son véhicule pour le contrôle technique."
        ]
      }
    },
    nl: {
      title: "Over ons",
      subtitle: "Een verhaal van passie en expertise sinds 1935",
      history: {
        title: "Onze Geschiedenis",
        paragraphs: [
          "Het verhaal van onze garage begint in 1935 wanneer Arthur Bosmans start met de bandenhandel na een opleiding als vulkanisateur bij Doyen in Brussel.",
          "Na zich 5 jaar schuil te hebben gehouden tijdens de Tweede Wereldoorlog, begint hij zijn bandenhandel. Sindsdien zijn wij de derde generatie die deze bandenhandel runt. Het vak is sindsdien sterk veranderd omdat de bandentechnologie gelukkig is geëvolueerd met de ontwikkeling van nieuwe voertuigen.",
          "We maken er een erezaak van om aan de wensen van onze klanten te voldoen. Dit begint bij het onthaal, het luisteren, het advies en ons professionalisme naar de klant toe.",
          "Sinds enkele jaren bieden we onze klanten ook onderhoud en voorbereiding van hun voertuig voor de technische keuring aan."
        ]
      }
    }
  };

  const t = content[language];

  return (
    <main className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="border border-border bg-zinc-950 rounded-sm overflow-hidden mb-16 relative h-[300px] md:h-[400px]">
          <Image 
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="Garage Bosmans histoire"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="relative z-10 py-16 md:py-24 px-6 text-center text-white max-w-3xl mx-auto h-full flex flex-col justify-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-2 h-2 bg-red-600" />
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                {language === 'fr' ? 'HISTOIRE & VALEURS' : 'GESCHIEDENIS & WAARDEN'}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.title}</h1>
            <p className="text-lg md:text-xl text-zinc-300 text-sm sm:text-base">{t.subtitle}</p>
          </div>
        </div>

        {/* History Section */}
        <HistorySection content={t.history} />

        {/* Timeline Section */}
        <TimelineSection language={language} />
      </div>
    </main>
  );
}