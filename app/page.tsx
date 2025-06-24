"use client";

import { MapPin, Phone, Clock, Wrench, Car, AlertCircle, TriangleAlert } from "lucide-react";
import { OpeningHours } from "@/components/opening-hours";
import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import Image from "next/image";

export default function Home() {
const { language } = useLanguage();
const t = translations[language];

return (
<main>
  {/* Hero Section */}
  <section className="relative h-[600px] flex items-center justify-center">
    <div className="absolute inset-0 bg-black/60 z-10" />
    <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: "url('logos/homepage/garage-back.png')",
            filter: "brightness(50%)"
          }} />
    <div className="relative z-20 text-center text-white px-4 animate-fade-in">
      <div className="animate-scale-in">
        <Image src="/logos/homepage/logo-pneus.png" alt="Bosmans Enghien" width={340} height={35}
          className="dark:invert filter brightness-0 hover:brightness-100 hover:saturate-200 transition-all duration-300 mx-auto mb-6"
          style={{
                filter: 'brightness(0) saturate(100%) invert(23%) sepia(75%) saturate(1965%) hue-rotate(343deg) brightness(85%) contrast(120%)',
              }} />
      </div>
      <p className="text-xl animate-fade-in-delayed">
        {t.hero.subtitle}
      </p>
    </div>
  </section>

  {/* Opening Hours Section */}
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 tracking-tight">
        <span className="block mb-2 text-red-600">Horaires d'Ouverture</span>
    
      </h2>
      
      {/* Station Service Alert */}
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-center space-x-3">
         
          <p className="text-lg font-bold text-red-600 dark:text-red-400 text-center">{t.special.title}</p>
        </div>
      </div>

      {/* Garage Closure Alert */}
      <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6 mb-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-center space-x-3">
          <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0" />
          <div className="text-center">
            <h3 className="text-lg font-bold text-orange-600 dark:text-orange-400 mb-1">{t.closure.title}</h3>
            <p className="text-orange-600 dark:text-orange-400">{t.closure.dates}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-md mx-auto bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <OpeningHours />
        </div>
      </div>
    </div>
  </section>

  {/* Services Section */}
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 tracking-tight">
        <span className="block mb-2 text-red-600">Nos Services</span>
        <span className="text-3xl font-medium text-gray-600">Ce que nous vous offrons</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
            <Car className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-foreground">{t.services.tires.title}</h3>
          <p className="text-muted-foreground">{t.services.tires.description}</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
            <Wrench className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-foreground">{t.services.repairs.title}</h3>
          <p className="text-muted-foreground">{t.services.repairs.description}</p>
        </div>
      </div>
    </div>
  </section>

  {/* Contact Info Section */}
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 tracking-tight">
        <span className="block mb-2 text-red-600">Contactez-nous</span>
        <span className="text-3xl font-medium text-gray-600">Nous sommes à votre écoute</span>
      </h2>
      <div className="grid gap-8 text-center md:text-left md:grid-cols-3">
        <div className="flex flex-col items-center md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <MapPin className="w-8 h-8 text-red-600 dark:text-red-400" />
          <div>
            <h3 className="font-semibold text-foreground">{t.contact.address}</h3>
            <p className="text-muted-foreground">Edingsesteenweg 67, 1540 Herne</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <Phone className="w-8 h-8 text-red-600 dark:text-red-400" />
          <div>
            <h3 className="font-semibold text-foreground">{t.contact.phone}</h3>
            <p className="text-muted-foreground">02 396 11 84</p>
            <p className="text-muted-foreground">0486/92.04.04</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <Clock className="w-8 h-8 text-red-600 dark:text-red-400" />
          <div>
            <h3 className="font-semibold text-foreground">{t.contact.hours}</h3>
            <p className="text-muted-foreground">
              {t.contact.weekdays}<br />
              {t.contact.saturday}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

</main>
);
}