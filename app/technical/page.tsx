"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Clipboard, Car, AlertCircle } from "lucide-react";

export default function Technical() {
  const { language } = useLanguage();
  const t = translations[language];

  const stepIcons = [Clipboard, Car, AlertCircle];

  return (
    <main className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-red-600" />
            <span className="text-sm uppercase tracking-widest text-muted-foreground font-bold">
              {t.technical.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t.technical.title}
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 items-center">
          <div className="border border-border rounded-sm overflow-hidden bg-zinc-900 relative h-72 sm:h-80 md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Contrôle technique atelier Bosmans"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover filter grayscale contrast-125"
            />
          </div>
          <div className="border border-border bg-card p-6 md:p-8 rounded-sm">
            <h2 className="text-2xl font-bold tracking-tight mb-4 text-foreground">{t.technical.description.title}</h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">{t.technical.description.content}</p>
            <div className="pt-4 border-t border-border flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
              <span className="w-2 h-2 bg-red-600" />
              <span>{t.technical.badge}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.technical.steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <div key={index} className="border border-border bg-card p-6 md:p-7 rounded-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 border border-border bg-muted/40 rounded-sm flex items-center justify-center text-red-600 dark:text-red-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-muted-foreground font-bold uppercase">
                    {t.technical.stepLabel} 0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2.5 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}