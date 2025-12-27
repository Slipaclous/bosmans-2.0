"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { TIRE_PARTNERS } from "./data/partners";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Check, Info } from "lucide-react";
import Image from "next/image";

export default function Tires() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="bg-background min-h-screen">
      {/* 1. HERO SECTION - Immersive */}
      <section className="relative h-[50vh] w-full overflow-hidden flex flex-col justify-center px-4 md:px-12 bg-background">
        {/* Background with overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80"
            alt="Tires Workshop"
            fill
            className="object-cover scale-105 animate-slow-zoom grayscale opacity-20 dark:opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90" />
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10 text-center">
          <div className="animate-fade-in-up flex flex-col items-center">
            <Badge variant="outline" className="mb-8 border-foreground/30 px-6 py-2 text-sm uppercase tracking-[0.2em] text-foreground font-semibold backdrop-blur-md bg-background/30">
              {language === 'fr' ? 'Nos Services' : 'Onze Diensten'}
            </Badge>

            <h1 className="font-display font-black text-[8vw] md:text-[6vw] leading-[0.9] text-foreground mb-8 tracking-tighter mix-blend-difference md:mix-blend-normal">
              {language === 'fr' ? 'PNEUS' : 'BANDEN'}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              {t.tires.title}
            </p>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/30 to-transparent z-10" />
      </section>

      {/* 2. SERVICES LIST - Stepped Surface */}
      {/* 2. SERVICES LIST - Stepped Surface */}
      <section className="py-16 relative bg-muted/30 dark:bg-muted/10 overflow-hidden border-t border-border/50">
        <div className="container px-4 md:px-12 mx-auto relative z-10 max-w-6xl">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.tires.services.map((service, index) => (
              <div key={index} className="group glass-panel border-border/50 bg-card/50 p-6 rounded-2xl hover:border-primary/50 transition-all duration-500">
                <div className="font-display text-5xl font-bold text-muted-foreground/10 group-hover:text-primary/20 mb-4 transition-colors">
                  0{index + 1}
                </div>
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PARTNERS - The Mosaic */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container px-4 md:px-12 mx-auto max-w-7xl mb-12 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">{t.partners.title}</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="container max-w-6xl mx-auto px-4">
          {/* Mosaic Board */}
          <div className="flex flex-wrap justify-center border-t border-l border-border/50">
            {TIRE_PARTNERS.map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-1/2 md:w-1/3 lg:w-1/4 h-48 border-r border-b border-border/50 flex flex-col items-center justify-center p-8 overflow-hidden hover:bg-muted/5 transition-colors duration-300"
              >
                {/* Background Hover Effect */}
                {/* Soft Glow Effect */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-700" />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Logo */}
                <div className="relative w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-[80%] max-h-[60%] object-contain dark:invert"
                  />
                </div>

                {/* Corner Marker */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-muted-foreground/30 group-hover:text-primary transition-colors">
                  0{index + 1}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}