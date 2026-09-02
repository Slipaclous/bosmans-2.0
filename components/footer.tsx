"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          {/* Logo and Description */}
          <div>
            <Image
              src="/logos/site_logo/text-bosmans.png"
              alt="Bosmans"
              width={130}
              height={32}
              className="dark:invert filter brightness-0 hover:brightness-100 hover:saturate-200 transition-all duration-300"
              style={{
                filter: 'brightness(0) saturate(100%) invert(23%) sepia(75%) saturate(1965%) hue-rotate(343deg) brightness(85%) contrast(120%)',
              }}
            />
            <p className="text-zinc-300 text-sm mt-3 font-medium">
              {language === 'fr'
                ? 'Votre spécialiste en pneus depuis 1935'
                : 'Uw specialist in banden sinds 1935'}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-red-500" />
              <h3 className="text-base font-bold uppercase tracking-wider text-zinc-100">{t.contact.address}</h3>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              PATRIOTSESTEENWEG 67<br />
              1540 PAJOTTEGEM<br />
              {language === 'fr' ? 'Belgique' : 'België'}
            </p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Phone className="w-5 h-5 text-red-500" />
              <h3 className="text-base font-bold uppercase tracking-wider text-zinc-100">{t.contact.phone}</h3>
            </div>
            <div className="text-zinc-300 text-sm space-y-1.5 font-medium">
              <p><a href="tel:023961184" className="hover:text-white transition-colors">02 396 11 84</a></p>
              <p><a href="tel:0486920404" className="hover:text-white transition-colors">0486/92.04.04</a></p>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-red-500" />
              <h3 className="text-base font-bold uppercase tracking-wider text-zinc-100">{t.contact.hours}</h3>
            </div>
            <div className="text-zinc-300 text-sm space-y-1.5 leading-relaxed">
              <p>
                <span className="text-white font-semibold">{language === 'fr' ? 'Lun - Ven :' : 'Ma - Vr :'}</span> 08:00 - 12:00, 13:00 - 17:00
              </p>
              <p>
                <span className="text-white font-semibold">{language === 'fr' ? 'Samedi :' : 'Zaterdag :'}</span> 08:00 - 12:00
              </p>
              <p>
                <span className="text-white font-semibold">{language === 'fr' ? 'Dimanche :' : 'Zondag :'}</span> {language === 'fr' ? 'Fermé' : 'Gesloten'}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800/80 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-zinc-400 gap-2">
          <p>
            © {new Date().getFullYear()}{' '}
            {language === 'fr'
              ? 'Bosmans Passion Pneu Herne. Tous droits réservés.'
              : 'Bosmans Banden. Alle rechten voorbehouden.'}
          </p>
          <a className="hover:text-zinc-200 transition-colors font-medium" href="https://www.gminor.dev" target="_blank" rel="noopener noreferrer">
            Made by G-Minor
          </a>
        </div>
      </div>
    </footer>
  );
}
