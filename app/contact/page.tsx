"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-red-600" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              {language === 'fr' ? 'ACCÈS & CONTACT' : 'TOEGANG & CONTACT'}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t.contact.title}
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 items-start">
          {/* Formulaire Contact */}
          <div className="border border-border bg-card p-6 md:p-8 rounded-sm">
            <h2 className="text-2xl font-bold mb-6 text-foreground">{t.contact.form.title}</h2>
            <form className="space-y-4">
              <div>
                <Input placeholder={t.contact.form.name} className="rounded-sm border-border bg-background text-base py-5" />
              </div>
              <div>
                <Input type="email" placeholder={t.contact.form.email} className="rounded-sm border-border bg-background text-base py-5" />
              </div>
              <div>
                <Input placeholder={t.contact.form.phone} className="rounded-sm border-border bg-background text-base py-5" />
              </div>
              <div>
                <Textarea placeholder={t.contact.form.message} className="h-36 rounded-sm border-border bg-background text-base resize-none" />
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-sm text-sm uppercase tracking-wider py-3 font-bold">
                {t.contact.form.submit}
              </Button>
            </form>
          </div>

          {/* Coordonnées */}
          <div className="space-y-4">
            <div className="border border-border bg-card p-6 rounded-sm flex items-start gap-4">
              <div className="w-10 h-10 border border-border bg-muted/40 rounded-sm flex items-center justify-center text-red-600 dark:text-red-400 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">{t.contact.address}</h3>
                <p className="text-base font-bold text-foreground">{t.contact.location}</p>
              </div>
            </div>

            <div className="border border-border bg-card p-6 rounded-sm flex items-start gap-4">
              <div className="w-10 h-10 border border-border bg-muted/40 rounded-sm flex items-center justify-center text-red-600 dark:text-red-400 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">{t.contact.phone}</h3>
                <div className="text-base font-bold text-foreground space-y-1">
                  <p><a href="tel:023961184" className="hover:text-red-600 transition-colors">02 396 11 84</a></p>
                  <p><a href="tel:0486920404" className="hover:text-red-600 transition-colors">0486/92.04.04</a></p>
                </div>
              </div>
            </div>

            <div className="border border-border bg-card p-6 rounded-sm flex items-start gap-4">
              <div className="w-10 h-10 border border-border bg-muted/40 rounded-sm flex items-center justify-center text-red-600 dark:text-red-400 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">{t.contact.email}</h3>
                <p className="text-base font-semibold text-foreground">
                  <a href="mailto:bosmans.anne@outlook.com" className="hover:text-red-600 transition-colors">
                    bosmans.anne@outlook.com
                  </a>
                </p>
              </div>
            </div>

            <div className="border border-border bg-card p-6 rounded-sm flex items-start gap-4">
              <div className="w-10 h-10 border border-border bg-muted/40 rounded-sm flex items-center justify-center text-red-600 dark:text-red-400 flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">{t.contact.hours}</h3>
                <div className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1 font-medium">
                  <p>{t.contact.weekdays}</p>
                  <p>{t.contact.saturday}</p>
                  <p>{t.contact.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Frame */}
        <div className="border border-border rounded-sm overflow-hidden h-96 bg-zinc-950">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.040062207356!2d4.173255215740024!3d50.69604517951674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c1f9b582433b%3A0x4e273875e76f5d74!2sEdingsesteenweg%2067%2C%201540%20Herne%2C%20Belgium!5e0!3m2!1sen!2sus!4v1696364019240!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}