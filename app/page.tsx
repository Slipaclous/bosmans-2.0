"use client";

import { MapPin, Phone, Clock, Wrench, Car } from "lucide-react";
import { OpeningHours } from "@/components/opening-hours";
import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">{t.hero.title}</h1>
          <p className="text-xl">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="py-12 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t.openingHours.title}</h2>
          <div className="max-w-md mx-auto">
            <OpeningHours />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t.services.title}</h2>
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
      <section className="bg-background py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <MapPin className="w-8 h-8 text-red-600 dark:text-red-400" />
              <div>
                <h3 className="font-semibold text-foreground">{t.contact.address}</h3>
                <p className="text-muted-foreground">Edingsesteenweg 67, 1540 Herne</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8 text-red-600 dark:text-red-400" />
              <div>
                <h3 className="font-semibold text-foreground">{t.contact.phone}</h3>
                <p className="text-muted-foreground">02 396 11 84</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
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