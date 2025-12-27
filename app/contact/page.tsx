"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="bg-background min-h-screen">
      {/* 1. HERO SECTION - Immersive */}
      <section className="relative h-[50vh] w-full overflow-hidden flex flex-col justify-center px-4 md:px-12 bg-background">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80"
            alt="Contact Support"
            fill
            className="object-cover scale-105 animate-slow-zoom grayscale opacity-20 dark:opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90" />
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10 text-center">
          <div className="animate-fade-in-up flex flex-col items-center">
            <Badge variant="outline" className="mb-8 border-foreground/30 px-6 py-2 text-sm uppercase tracking-[0.2em] text-foreground font-semibold backdrop-blur-md bg-background/30">
              {language === 'fr' ? 'Une Question ?' : 'Een Vraag ?'}
            </Badge>

            <h1 className="font-display font-black text-[8vw] md:text-[6vw] leading-[0.9] text-foreground mb-8 tracking-tighter">
              CONTACT
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              {t.contact.title}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/30 to-transparent z-10" />
      </section>

      {/* 2. CONTACT GRID & FORM */}
      <section className="py-24 relative bg-muted/30 dark:bg-muted/10 overflow-hidden border-t border-border/50">
        <div className="container px-4 md:px-12 mx-auto max-w-7xl">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* LEFT: Contact Information */}
            <div className="space-y-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                  <MessageSquare className="w-4 h-4" />
                  <span>Get in Touch</span>
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                  {language === 'fr' ? 'Parlons de votre véhicule' : 'Laten we over uw voertuig praten'}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {language === 'fr'
                    ? "Notre équipe est à votre disposition pour répondre à toutes vos questions. N'hésitez pas à nous contacter."
                    : "Ons team staat klaar om al uw vragen te beantwoorden. Aarzel niet om contact met ons op te nemen."}
                </p>
              </div>

              <div className="grid gap-6">
                {/* Address Card */}
                <div className="glass-panel p-6 rounded-2xl flex items-start gap-6 group hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shrink-0 border border-border/50 group-hover:border-primary/50 group-hover:text-primary transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t.contact.address}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t.contact.location}</p>
                    <a
                      href="https://www.google.com/maps/dir//Edingsesteenweg+67,+1540+Herne"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-primary uppercase tracking-widest mt-3 inline-block border-b border-primary/20 pb-0.5"
                    >
                      {language === 'fr' ? 'Y aller' : 'Routebeschrijving'}
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="glass-panel p-6 rounded-2xl flex items-start gap-6 group hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shrink-0 border border-border/50 group-hover:border-primary/50 group-hover:text-primary transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t.contact.phone}</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>02 396 11 84</p>
                      <p>0486/92.04.04</p>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="glass-panel p-6 rounded-2xl flex items-start gap-6 group hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shrink-0 border border-border/50 group-hover:border-primary/50 group-hover:text-primary transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t.contact.email}</h3>
                    <p className="text-muted-foreground">bosmans.anne@outlook.com</p>
                  </div>
                </div>
              </div>

              {/* Hours - Simple List */}
              <div className="bg-background/50 border border-border/50 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6 text-foreground">
                  <Clock className="w-6 h-6" />
                  <h3 className="font-bold text-xl">{t.contact.hours}</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">{language === 'fr' ? 'Lundi - Vendredi' : 'Maandag - Vrijdag'}</span>
                    <span className="font-medium">08:00 - 12:00 / 13:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">{language === 'fr' ? 'Samedi' : 'Zaterdag'}</span>
                    <span className="font-medium">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{language === 'fr' ? 'Dimanche' : 'Zondag'}</span>
                    <span className="font-medium text-primary">{language === 'fr' ? 'Fermé' : 'Gesloten'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="relative">
              <div className="glass-panel p-8 md:p-10 rounded-3xl shadow-2xl relative z-10 bg-card/80 backdrop-blur-xl">
                <h3 className="font-display font-bold text-2xl mb-8">
                  {t.contact.form.title}
                </h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t.contact.form.name}</label>
                      <Input placeholder="John Doe" className="bg-background/50 border-border/50 focus:border-primary/50 h-12 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t.contact.form.phone}</label>
                      <Input placeholder="+32 ..." className="bg-background/50 border-border/50 focus:border-primary/50 h-12 rounded-xl" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t.contact.form.email}</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background/50 border-border/50 focus:border-primary/50 h-12 rounded-xl" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t.contact.form.message}</label>
                    <Textarea placeholder="..." className="bg-background/50 border-border/50 focus:border-primary/50 min-h-[160px] rounded-xl resize-none p-4" />
                  </div>

                  <Button className="w-full h-14 bg-foreground text-background hover:bg-foreground/90 rounded-xl text-lg font-bold tracking-wide mt-4">
                    {t.contact.form.submit} <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </div>

              {/* Decorative blob behind form */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[120px] rounded-full -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAP SECTION */}
      <section className="h-[500px] w-full relative grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.040062207356!2d4.173255215740024!3d50.69604517951674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c1f9b582433b%3A0x4e273875e76f5d74!2sEdingsesteenweg%2067%2C%201540%20Herne%2C%20Belgium!5e0!3m2!1sen!2sus!4v1696364019240!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="absolute inset-0"
        />
        {/* Map Overlay for deep integration */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-muted/30 to-transparent pointer-events-none" />
      </section>
    </main>
  );
}