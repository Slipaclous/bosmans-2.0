"use client";

import { MapPin, Phone, Mail, Clock, Wrench, Disc, AlertCircle, ArrowRight, Navigation2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { OpeningHours } from "@/components/opening-hours";
import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
        <Image 
          src="/logos/homepage/garage-back.png" 
          alt="Garage Bosmans atelier" 
          fill 
          priority 
          quality={75}
          sizes="100vw"
          className="object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
          {/* Logo central */}
          <div className="mb-8 flex justify-center">
            <Image 
              src="/logos/homepage/logo-pneus.png" 
              alt="Bosmans Enghien" 
              width={320} 
              height={120} 
              priority 
              className="w-48 sm:w-64 md:w-80 h-auto object-contain drop-shadow-md"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-2xl mx-auto leading-snug">
            {t.hero.subtitle}
          </h1>

          {/* Boutons d'action directs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-sm bg-red-600 text-white hover:bg-red-700 transition-colors shadow-sm"
            >
              {language === 'fr' ? 'Nos services' : 'Onze diensten'}
            </a>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-sm border border-zinc-700 bg-zinc-900/80 text-zinc-100 hover:bg-zinc-800 hover:border-zinc-500 transition-colors"
            >
              {language === 'fr' ? 'Nous contacter' : 'Contact'}
            </Link>
          </div>
        </div>
      </section>

      {/* Atelier Live Hub (Horaires + Statut + Alertes de congés + Coordonnées) */}
      <section className="py-16 md:py-20 bg-zinc-50 dark:bg-zinc-900/40 border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-red-600 rounded-none" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground font-bold">
                {language === 'fr' ? 'ATELIER & DISPONIBILITÉS' : 'WERKPLAATS & BESCHIKBAARHEID'}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              {t.openingHours.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Colonne Horaires (7 cols) */}
            <div className="lg:col-span-7">
              <OpeningHours />
            </div>

            {/* Colonne Alertes de congés & Coordonnées (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Alerte / Rappel (ex: Souhait été / Hiver) */}
              {t.winterReminder && (
                <div className="border border-border bg-card p-5 rounded-sm">
                  <div className="flex items-start gap-3.5">
                    <AlertCircle className="w-6 h-6 text-zinc-700 dark:text-zinc-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase text-muted-foreground font-bold tracking-wider mb-1">
                        {language === 'fr' ? 'INFORMATION ATELIER' : 'WERKPLAATS INFO'}
                      </p>
                      <p className="text-base font-semibold text-foreground leading-snug">
                        {t.winterReminder}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Congés / Fermeture exceptionnelle */}
              {t.exceptionalClosure && t.exceptionalClosure.date && (
                <div className="border border-amber-300 dark:border-amber-800/60 bg-amber-50/80 dark:bg-amber-950/30 p-5 rounded-sm">
                  <div className="flex items-start gap-3.5">
                    <Clock className="w-6 h-6 text-amber-700 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-amber-900 dark:text-amber-300 mb-1">
                        {t.exceptionalClosure.title}
                      </h3>
                      <p className="text-base text-amber-800 dark:text-amber-400 font-medium whitespace-pre-wrap">
                        {t.exceptionalClosure.date}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Fiche Coordonnées Express */}
              <div className="border border-border bg-card p-6 rounded-sm space-y-5 text-sm md:text-base">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">
                      {t.contact.address}
                    </span>
                    <span className="font-bold text-foreground text-sm md:text-base">
                      PATRIOTSESTEENWEG 67, 1540 PAJOTTEGEM
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">
                      {t.contact.phone}
                    </span>
                    <div className="flex flex-col sm:flex-row sm:gap-6 font-bold text-foreground text-base md:text-lg mt-1">
                      <a href="tel:023961184" className="hover:text-red-600 transition-colors">
                        02 396 11 84
                      </a>
                      <a href="tel:0486920404" className="hover:text-red-600 transition-colors">
                        0486/92.04.04
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">
                      {t.contact.email}
                    </span>
                    <div className="font-bold text-foreground text-base md:text-lg mt-1">
                      <a href="mailto:bosmans.anne@outlook.com" className="hover:text-red-600 transition-colors">
                        bosmans.anne@outlook.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-red-600" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground font-bold">
                {t.services.title}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {t.services.subtitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Service Pneus */}
            <Link 
              href="/tires" 
              className="group block border border-border bg-card p-6 md:p-8 rounded-sm hover:border-red-600/50 dark:hover:border-red-500/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 border border-border bg-muted/40 rounded-sm flex items-center justify-center text-red-600 dark:text-red-400">
                  <Disc className="w-6 h-6" />
                </div>
                <span className="text-sm text-muted-foreground font-semibold">01 //</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-red-600 transition-colors">
                {t.services.tires.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                {t.services.tires.description}
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-red-400 group-hover:translate-x-1 transition-transform">
                <span>{language === 'fr' ? 'Découvrir nos services pneus' : 'Bekijk bandendiensten'}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Service Réparations / Préparations */}
            <Link 
              href="/technical" 
              className="group block border border-border bg-card p-6 md:p-8 rounded-sm hover:border-red-600/50 dark:hover:border-red-500/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 border border-border bg-muted/40 rounded-sm flex items-center justify-center text-red-600 dark:text-red-400">
                  <Wrench className="w-6 h-6" />
                </div>
                <span className="text-sm text-muted-foreground font-semibold">02 //</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-red-600 transition-colors">
                {t.services.repairs.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                {t.services.repairs.description}
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-red-400 group-hover:translate-x-1 transition-transform">
                <span>{language === 'fr' ? 'En savoir plus' : 'Meer informatie'}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}