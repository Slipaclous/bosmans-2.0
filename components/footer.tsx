"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="relative bg-[#050505] text-white pt-24 pb-12 overflow-hidden">


      <div className="container px-4 md:px-12 mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative w-48 h-12 grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="/logos/site_logo/text-bosmans.png"
                alt="Bosmans"
                fill
                className="object-contain object-left invert"
              />
            </div>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-sm">
              {language === 'fr'
                ? 'Expert en pneumatiques et services automobiles depuis 1935. Qualité, sécurité et service sur mesure.'
                : 'Expert in banden en autoservices sinds 1935. Kwaliteit, veiligheid en service op maat.'}
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders could go here */}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Quick Info Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Address */}
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary mb-2">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl">Address</h3>
              <address className="not-italic text-neutral-400 leading-relaxed">
                Edingsesteenweg 67<br />
                1540 Herne<br />
                {language === 'fr' ? 'Belgique' : 'België'}
              </address>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary mb-2">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl">Contact</h3>
              <div className="text-neutral-400 space-y-2">
                <p className="hover:text-white transition-colors">02 396 11 84</p>
                <p className="hover:text-white transition-colors">0486/92.04.04</p>
                <p className="text-sm pt-2 hover:text-white transition-colors">bosmans.anne@outlook.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl">Open</h3>
              <div className="text-neutral-400 space-y-1 text-sm">
                <p>
                  <span className="block text-white font-medium">{language === 'fr' ? 'Lun - Ven' : 'Ma - Vr'}</span>
                  08:00-12:00 / 13:00-18:00
                </p>
                <p className="pt-2">
                  <span className="block text-white font-medium">{language === 'fr' ? 'Samedi' : 'Zaterdag'}</span>
                  08:00-12:00
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Bosmans. {language === 'fr' ? 'Tous droits réservés' : 'Alle rechten voorbehouden'}.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="https://www.gminor.dev" className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary" />
              Made by G-Minor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
