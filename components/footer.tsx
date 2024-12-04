"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { MapPin, Phone, Clock } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Image
              src="/logos/site_logo/text-bosmans.png"
              alt="Bosmans"
              width={140}
              height={35}
              className="invert mb-4"
            />
            <p className="text-gray-400 text-sm">
              {language === 'fr' 
                ? 'Votre spécialiste en pneus et réparations automobiles depuis 1935'
                : 'Uw specialist in banden en autoreparaties sinds 1935'}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-semibold">{t.contact.address}</h3>
            </div>
            <p className="text-gray-400 ml-7">
              Edingsesteenweg 67<br />
              1540 Herne<br />
              {language === 'fr' ? 'Belgique' : 'België'}
            </p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-semibold">{t.contact.phone}</h3>
            </div>
            <p className="text-gray-400 ml-7">02 396 11 84</p>
          </div>

          {/* Opening Hours */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-semibold">{t.contact.hours}</h3>
            </div>
            <div className="text-gray-400 ml-7 space-y-1">
              <p>
                {language === 'fr' ? 'Lundi - Vendredi' : 'Maandag - Vrijdag'}<br />
                08:00 - 12:00, 13:00 - 17:00
              </p>
              <p>
                {language === 'fr' ? 'Samedi' : 'Zaterdag'}<br />
                08:00 - 12:00
              </p>
              <p>
                {language === 'fr' ? 'Dimanche' : 'Zondag'}<br />
                {language === 'fr' ? 'Fermé' : 'Gesloten'}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} {language === 'fr' ? 'Garage Pneus Expert. Tous droits réservés.' : 'Garage Banden Expert. Alle rechten voorbehouden.'}
        </div>
      </div>
    </footer>
  );
}