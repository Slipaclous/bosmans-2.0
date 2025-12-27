"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { LEASING_PARTNERS } from "./data/partners";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Check, Briefcase } from "lucide-react";
import Image from "next/image";

export default function Leasing() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="bg-background min-h-screen">
      {/* 1. HERO SECTION - Immersive */}
      <section className="relative h-[50vh] w-full overflow-hidden flex flex-col justify-center px-4 md:px-12 bg-background">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Leasing Fleet"
            fill
            className="object-cover scale-105 animate-slow-zoom grayscale opacity-20 dark:opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90" />
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10 text-center">
          <div className="animate-fade-in-up flex flex-col items-center">
            <Badge variant="outline" className="mb-8 border-foreground/30 px-6 py-2 text-sm uppercase tracking-[0.2em] text-foreground font-semibold backdrop-blur-md bg-background/30">
              {language === 'fr' ? 'Professionnels' : 'Professioneel'}
            </Badge>

            <h1 className="font-display font-black text-[8vw] md:text-[6vw] leading-[0.9] text-foreground mb-8 tracking-tighter">
              LEASING
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              {t.leasing.title}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/30 to-transparent z-10" />
      </section>

      {/* 2. INTRODUCTION - Stepped Surface */}
      <section className="py-24 relative bg-muted/30 dark:bg-muted/10 overflow-hidden border-t border-border/50">
        <div className="container px-4 md:px-12 mx-auto max-w-6xl text-center">

          {/* 2. INTRODUCTION - Stepped Surface */}
          <section className="py-24 relative bg-muted/30 dark:bg-muted/10 overflow-hidden border-t border-border/50">
            <div className="container px-4 md:px-12 mx-auto max-w-6xl text-center">
              {/* Ayvens Highlight Box */}
              <div className="glass-panel border-l-4 border-l-green-500 bg-green-500/5 p-8 rounded-r-3xl text-left transform hover:translate-x-2 transition-transform duration-500 max-w-4xl mx-auto">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-green-500/10 rounded-full shrink-0 hidden md:block">
                    <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-green-700 dark:text-green-400 mb-2">Ayvens Partner</h4>
                    <p className="text-muted-foreground">{t.ayvensMessage}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* 3. PARTNERS - Clean Grid with Soft Glow */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container px-4 md:px-12 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">{t.partners.title}</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {LEASING_PARTNERS.standard.map((partner, index) => (
              <a
                key={index}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center h-48 rounded-3xl border border-border/50 bg-card hover:bg-muted/5 transition-all duration-300 overflow-hidden"
              >
                {/* Soft Glow */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 w-full h-20 px-8 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500 dark:invert">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="absolute bottom-6 flex items-center text-xs font-bold text-muted-foreground/0 group-hover:text-primary transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="mr-2">Visit</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}