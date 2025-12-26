"use client";

import { MapPin, Phone, Clock, Wrench, Car, AlertCircle, TriangleAlert } from "lucide-react";

import { OpeningHours } from "@/components/opening-hours";
import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import Image from "next/image";
import { Reveal } from "@/components/reveal";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('/logos/homepage/garage-back.png')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="pointer-events-none absolute -z-10 inset-0 opacity-60">
          <div className="absolute -top-20 -left-10 w-[60vw] h-[60vw] blob-gradient" />
          <div className="absolute -bottom-24 -right-10 w-[55vw] h-[55vw] blob-gradient" />
          <div className="absolute inset-0 diagonal-lines" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in max-w-3xl mx-auto">
          <div className="animate-scale-in mb-4">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs tracking-wider uppercase">{language === 'fr' ? 'Depuis 1935' : 'Sinds 1935'}</span>
          </div>
          <img src="/logos/homepage/logo-pneus.png" alt="Bosmans Enghien" className="w-1/2 mx-auto mb-6" />
          <p className="text-lg md:text-2xl text-white/90 mb-8 animate-fade-in-delayed">
            {t.hero.subtitle}
          </p>
          <div className="flex items-center justify-center gap-3 animate-fade-in-delayed">
            <a href="/technical" className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {language === 'fr' ? 'Nos services' : 'Onze diensten'}
            </a>
            <a href="/contact" className="inline-flex items-center rounded-md bg-white/10 backdrop-blur px-5 py-3 text-sm font-semibold text-white shadow hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
              {language === 'fr' ? 'Nous contacter' : 'Contact'}
            </a>
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      {/* Bandeau d’appel */}

      {/* Section combinée Horaires + Infos Contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
            {/* Colonne Horaires */}
            <Reveal>
              <div className="bg-card/80 backdrop-blur p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border/50">
                <h2 className="font-display text-3xl mb-4 tracking-wide">{t.openingHours.title}</h2>
                <OpeningHours />
              </div>
            </Reveal>

            {/* Colonne Rappels + Annonces + Coordonnées rapides */}
            <div className="space-y-6">
              <Reveal>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <p className="text-base md:text-lg font-semibold text-blue-700 dark:text-blue-300">{t.winterReminder}</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delayMs={100}>
                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-orange-700 dark:text-orange-300 mb-1">{t.exceptionalClosure.title}</h3>
                      <p className="text-orange-700 dark:text-orange-300 whitespace-pre-wrap">{t.exceptionalClosure.date}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delayMs={200}>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-card/60 backdrop-blur p-5 rounded-xl border border-border/50 text-center sm:text-left">
                    <MapPin className="w-6 h-6 text-red-600 dark:text-red-400 mx-auto sm:mx-0 mb-2" />
                    <h4 className="font-semibold">{t.contact.address}</h4>
                    <p className="text-muted-foreground">PATRIOTSESTEENWEG 67 1540 PAJOTTEGEM</p>
                  </div>
                  <div className="bg-card/60 backdrop-blur p-5 rounded-xl border border-border/50 text-center sm:text-left">
                    <Phone className="w-6 h-6 text-red-600 dark:text-red-400 mx-auto sm:mx-0 mb-2" />
                    <h4 className="font-semibold">{t.contact.phone}</h4>
                    <p className="text-muted-foreground">02 396 11 84</p>
                    <p className="text-muted-foreground">0486/92.04.04</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section immersive */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <div className="absolute -top-20 -left-24 w-[70vw] h-[70vw] blob-gradient" />
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold text-center mb-14 text-gray-900 tracking-tight leading-tight">
            <span className="block mb-3 text-red-600 text-2xl md:text-3xl font-semibold">{t.services.title}</span>
            <span className="text-3xl md:text-4xl font-medium text-gray-600">{t.services.subtitle}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Reveal>
              <div className="relative bg-card p-8 rounded-2xl shadow-sm hover:shadow-2xl transition duration-300 border border-border/50 transform-gpu hover:-translate-y-1 hover:scale-[1.01] overflow-hidden">
                <div className="pointer-events-none absolute -z-10 inset-0 opacity-20 diagonal-lines" />
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{t.services.tires.title}</h3>
                <p className="text-muted-foreground">{t.services.tires.description}</p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="relative bg-card p-8 rounded-2xl shadow-sm hover:shadow-2xl transition duration-300 border border-border/50 transform-gpu hover:-translate-y-1 hover:scale-[1.01] overflow-hidden">
                <div className="pointer-events-none absolute -z-10 inset-0 opacity-20 diagonal-lines" />
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{t.services.repairs.title}</h3>
                <p className="text-muted-foreground">{t.services.repairs.description}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}