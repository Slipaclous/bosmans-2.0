"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, ShieldCheck, Wrench, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Technical() {
  const { language } = useLanguage();
  const t = translations[language];

  const steps = [
    {
      icon: ClipboardCheck,
      title: t.technical.steps[0].title,
      desc: t.technical.steps[0].description
    },
    {
      icon: Wrench,
      title: t.technical.steps[1].title,
      desc: t.technical.steps[1].description
    },
    {
      icon: ShieldCheck,
      title: t.technical.steps[2].title, // added index 2 for Warranty/Assurance in translations
      desc: t.technical.steps[2].description
    }
  ];

  return (
    <main className="bg-background min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] w-full overflow-hidden flex flex-col justify-center px-4 md:px-12 bg-background">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Technical Inspection"
            fill
            className="object-cover scale-105 animate-slow-zoom grayscale opacity-20 dark:opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90" />
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10 text-center">
          <div className="animate-fade-in-up flex flex-col items-center">
            <Badge variant="outline" className="mb-8 border-foreground/30 px-6 py-2 text-sm uppercase tracking-[0.2em] text-foreground font-semibold backdrop-blur-md bg-background/30">
              {language === 'fr' ? 'Sécurité & Contrôle' : 'Veiligheid & Controle'}
            </Badge>

            <h1 className="font-display font-black text-[8vw] md:text-[6vw] leading-[0.9] text-foreground mb-8 tracking-tighter">
              {language === 'fr' ? 'TECHNIQUE' : 'TECHNISCH'}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              {t.technical.title}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/30 to-transparent z-10" />
      </section>

      {/* 2. INTRODUCTION & CONTENT */}
      <section className="py-24 relative bg-muted/30 dark:bg-muted/10 overflow-hidden border-t border-border/50">
        <div className="container px-4 md:px-12 mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-8">
              <h2 className="font-display font-bold text-3xl md:text-4xl">
                {t.technical.description.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.technical.description.content}
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wider">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Certified</span>
                </div>
                <div className="w-px h-6 bg-border" />
                <div className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wider">
                  <Wrench className="w-5 h-5" />
                  <span>Expert Team</span>
                </div>
              </div>
            </div>

            {/* Decorative Visual */}
            <div className="lg:w-1/2 relative w-full mt-8 lg:mt-0">
              <div className="glass-panel p-2 rounded-3xl relative z-10 md:rotate-3 transition-transform hover:rotate-0 duration-500 w-full">
                <div className="relative h-[300px] w-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 bg-muted">
                  <Image
                    src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Inspection"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Background blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS STEPS */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container px-4 md:px-12 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Notre Processus' : 'Ons Proces'}
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative bg-card border border-border/50 p-8 rounded-3xl hover:border-primary/50 transition-all duration-300">
                {/* Number Watermark */}
                <div className="absolute top-4 right-4 font-display text-6xl font-bold text-muted-foreground/5 group-hover:text-primary/10 transition-colors">
                  0{index + 1}
                </div>

                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mb-6 text-foreground group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <step.icon className="w-7 h-7" />
                </div>

                <h3 className="font-bold text-xl mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="/contact">
              <Button className="rounded-full h-12 px-8 text-lg bg-foreground text-background hover:bg-foreground/90">
                {language === 'fr' ? 'Prendre Rendez-vous' : 'Afspraak Maken'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}