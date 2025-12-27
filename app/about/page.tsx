"use client";

import { useLanguage } from "@/lib/context/language-context";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, History, Calendar, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Notre Histoire",
      subtitle: "Une expertise familiale transmise depuis 1935",
      intro: "Arthur Bosmans se lance dans le commerce du pneu après avoir suivi une formation de vulcanisateur chez Doyen à Bruxelles.",
      paragraphs: [
        "Après s'être caché pendant 5 ans lors de la seconde guerre, il commence son commerce de pneus. Depuis lors nous sommes la troisième génération qui exploitons ce commerce de pneus.",
        "Le métier a depuis bien changé car la technologie du pneu a fort heureusement évolué avec l'évolution des nouveaux véhicules.",
        "Nous mettons un point d'honneur à répondre présent aux demandes de nos clients. Cela commence par l'accueil, l'écoute, le conseil et notre professionnalisme envers le client.",
        "Depuis quelques années, nous proposons à notre clientèle l'entretien et la préparation de son véhicule pour le contrôle technique."
      ],
      values: [
        { title: "Expertise", desc: "Savoir-faire transmis sur 3 générations" },
        { title: "Proximité", desc: "Une entreprise familiale à votre écoute" },
        { title: "Qualité", desc: "Service premium et équipement de pointe" }
      ],
      timeline: [
        { year: "1935", title: "La Fondation", desc: "Arthur Bosmans se lance dans le métier après sa formation de vulcanisateur." },
        { year: "1945", title: "L'Après-Guerre", desc: "Reprise et développement officiel du commerce de pneus." },
        { year: "2025", title: "3ème Génération", desc: "Une structure moderne alliant tradition familiale et technologies actuelles." }
      ]
    },
    nl: {
      title: "Onze Geschiedenis",
      subtitle: "Familiale expertise doorgegeven sinds 1935",
      intro: "Arthur Bosmans start met de bandenhandel na een opleiding als vulkanisateur bij Doyen in Brussel.",
      paragraphs: [
        "Na zich 5 jaar schuil te hebben gehouden tijdens de Tweede Wereldoorlog, begint hij zijn bandenhandel. Sindsdien zijn wij de derde generatie die deze bandenhandel runt.",
        "Het vak is sindsdien sterk veranderd omdat de bandentechnologie gelukkig is geëvolueerd met de ontwikkeling van nieuwe voertuigen.",
        "We maken er een erezaak van om aan de wensen van onze klanten te voldoen. Dit begint bij het onthaal, het luisteren, het advies en ons professionalisme.",
        "Sinds enkele jaren bieden we onze klanten ook onderhoud en voorbereiding van hun voertuig voor de technische keuring aan."
      ],
      values: [
        { title: "Expertise", desc: "Kennis doorgegeven over 3 generaties" },
        { title: "Nabijheid", desc: "Een familiebedrijf dat naar u luistert" },
        { title: "Kwaliteit", desc: "Premium service en moderne apparatuur" }
      ],
      timeline: [
        { year: "1935", title: "Oprichting", desc: "Arthur Bosmans start in het vak na zijn opleiding tot vulkanisator." },
        { year: "1945", title: "Naoorlogs", desc: "Herstart en officiële ontwikkeling van de bandenhandel." },
        { year: "2025", title: "3de Generatie", desc: "Een moderne structuur die familietraditie combineert met huidige technologieën." }
      ]
    }
  };

  const t = content[language];

  return (
    <main className="bg-background min-h-screen">
      {/* 1. HERO SECTION - Clean White/Black Theme Aware */}
      <section className="relative h-[50vh] w-full overflow-hidden flex flex-col justify-center px-4 md:px-12 bg-background">
        {/* Background with overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Garage History"
            fill
            className="object-cover scale-105 animate-slow-zoom grayscale opacity-20 dark:opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90" />
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10 text-center">
          <div className="animate-fade-in-up flex flex-col items-center">
            <Badge variant="outline" className="mb-8 border-foreground/30 px-6 py-2 text-sm uppercase tracking-[0.2em] text-foreground font-semibold backdrop-blur-md bg-background/30">
              Bosmans
            </Badge>

            <h1 className="font-display font-black text-[8vw] md:text-[6vw] leading-[0.9] text-foreground mb-8 tracking-tighter">
              {language === 'fr' ? 'À PROPOS' : 'OVER ONS'}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/30 to-transparent z-10" />
      </section>

      {/* 2. STORY SECTION - Stepped Surface (Muted) */}
      <section className="py-24 relative bg-muted/30 dark:bg-muted/10 overflow-hidden border-t border-border/50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-50" />

        <div className="container px-4 md:px-12 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

            {/* Left: Highlight & Values */}
            <div className="lg:col-span-4 space-y-8 sticky top-24">
              <div className="glass-panel border-border/50 bg-card/50 p-8 rounded-3xl shadow-lg">
                <History className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-display text-2xl font-bold mb-4">{t.intro}</h3>
                <div className="w-12 h-1 bg-primary rounded-full" />
              </div>

              {/* Values List */}
              <div className="space-y-4">
                {t.values.map((value, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-background/50 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">{value.title}</h4>
                      <p className="text-muted-foreground text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Main Story & Timeline */}
            <div className="lg:col-span-8 space-y-16">
              {/* Story Paragraphs */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {t.paragraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-lg">
                    {p}
                  </p>
                ))}
              </div>

              {/* Timeline */}
              <div className="relative border-l border-primary/20 ml-4 md:ml-0 md:pl-12 space-y-12">
                {t.timeline.map((item, i) => (
                  <div key={i} className="relative pl-8 md:pl-0">
                    <span className="absolute -left-[5px] md:-left-[53px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                    <div className="md:grid md:grid-cols-4 gap-8">
                      <span className="font-display text-4xl font-bold text-primary/40 md:text-right">{item.year}</span>
                      <div className="md:col-span-3">
                        <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}