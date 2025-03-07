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
    <div className="relative z-20 text-center text-white px-4">
      <Image src="/logos/homepage/logo-pneus.png" alt="Bosmans Enghien" width={340} height={35}
        className="dark:invert filter brightness-0 hover:brightness-100 hover:saturate-200 transition-all duration-300 mx-auto "
        style={{
              filter: 'brightness(0) saturate(100%) invert(23%) sepia(75%) saturate(1965%) hue-rotate(343deg) brightness(85%) contrast(120%)',
            }} />
      <p className="text-xl">{t.hero.subtitle}</p>
    </div>
  </section>

  {/* Opening Hours Section */}
  <section className="py-12 bg-background">
    <div className="special-div text-red-600 flex justify-center py-6 ">

      <TriangleAlert className="w-6 h-6 mx-2" />
      <h2 className="text-2l font-bold text-center text-red-600 block"> {t.special.title}</h2>
    </div>
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t.openingHours.title}</h2>
      <div className="max-w-md mx-auto">
        <OpeningHours />
      </div>
      {/* <div className="max-w-md mx-auto m-5 bg-card p-6 rounded-lg border text-card-foreground ">
        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
          <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
        </div>
        <p>{t.openingHours.special}</p>
      </div> */}
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
  {/* Contact Info Section */}
  <section className="bg-background py-16">
    <div className="max-w-6xl mx-auto px-4">
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