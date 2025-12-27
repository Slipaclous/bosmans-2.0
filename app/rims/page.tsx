"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { WHEEL_PARTNERS } from "./data/partners";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Rims() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="bg-background min-h-screen">
      {/* 1. HERO SECTION - Immersive */}
      <section className="relative h-[50vh] w-full overflow-hidden flex flex-col justify-center px-4 md:px-12 bg-background">
        {/* Background with overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1626847037657-fd3622613ce9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Rims"
            fill
            className="object-cover scale-105 animate-slow-zoom grayscale opacity-20 dark:opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90" />
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10 text-center">
          <div className="animate-fade-in-up flex flex-col items-center">
            <Badge variant="outline" className="mb-8 border-foreground/30 px-6 py-2 text-sm uppercase tracking-[0.2em] text-foreground font-semibold backdrop-blur-md bg-background/30">
              {language === 'fr' ? 'Nos Solutions' : 'Onze Oplossingen'}
            </Badge>

            <h1 className="font-display font-black text-[8vw] md:text-[6vw] leading-[0.9] text-foreground mb-8 tracking-tighter">
              {language === 'fr' ? 'JANTES' : 'VELGEN'}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              {t.rims.title}
            </p>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/30 to-transparent z-10" />
      </section>

      {/* 2. PARTNERS - Editorial Showcase */}
      <section className="py-24 relative bg-background border-t border-border/50">
        <div className="container px-4 md:px-12 mx-auto max-w-7xl mb-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">{t.partners.title}</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 space-y-24">
          {WHEEL_PARTNERS.map((partner, index) => (
            <div
              key={partner.name}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center group`}
            >
              {/* Image Side - Fully Visible */}
              <div className="w-full lg:w-3/5 relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-muted/10" />
                <img
                  src={partner.image.startsWith('/') ? partner.image : `/${partner.image}`}
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Brand Overlay Tag */}
                <div className="absolute top-6 left-6 glass-panel px-6 py-3 rounded-full border-white/20">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-6 w-auto dark:invert"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div className="space-y-4">
                  <span className="text-primary font-mono text-sm tracking-widest uppercase">0{index + 1} — Partner</span>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl">{partner.name}</h3>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {partner.description[language]}
                </p>

                <div className="flex flex-wrap gap-3">
                  {partner.features[language].map((feature, i) => (
                    <Badge key={i} variant="outline" className="px-3 py-1 text-xs border-border/50 bg-background/50">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 h-12">
                      {language === 'fr' ? 'Visiter le site' : 'Bezoek website'} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPERTISE CTA */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container px-4 md:px-12 mx-auto max-w-4xl text-center">
          <div className="glass-panel p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

            <h2 className="font-display font-bold text-3xl mb-6 relative z-10">
              {language === 'fr' ? 'Besoin de conseils ?' : 'Advies nodig?'}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 relative z-10 leading-relaxed">
              {language === 'fr'
                ? "Notre équipe d'experts est là pour vous guider dans le choix de vos jantes. Profitez de notre expertise pour trouver les jantes parfaites pour votre véhicule."
                : "Ons team van experts staat klaar om u te begeleiden bij het kiezen van uw velgen. Profiteer van onze expertise om de perfecte velgen voor uw voertuig te vinden."}
            </p>
            <div className="relative z-10">
              <Button variant="default" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                {language === 'fr' ? 'Contactez-nous' : 'Contacteer ons'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}