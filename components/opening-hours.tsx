"use client";

import { useState, useEffect } from 'react';
import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { OPENING_HOURS, isGarageOpen } from '@/lib/utils';
import { useLanguage } from '@/lib/context/language-context';
import { translations } from '@/lib/translations';

export function OpeningHours() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setIsOpen(isGarageOpen());
    }, 60000);

    setIsOpen(isGarageOpen());

    return () => clearInterval(timer);
  }, []);

  const days = [
    t.openingHours.days.sunday,
    t.openingHours.days.monday,
    t.openingHours.days.tuesday,
    t.openingHours.days.wednesday,
    t.openingHours.days.thursday,
    t.openingHours.days.friday,
    t.openingHours.days.saturday
  ];

  return (
    <div className="border border-border bg-card p-6 md:p-7 rounded-sm">
      {/* Statut en direct */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-border">
        <div className="flex items-center gap-2.5">
          <Clock className="w-5 h-5 text-red-600 dark:text-red-400" />
          <span className="text-sm uppercase tracking-wider text-foreground font-semibold">
            {t.openingHours.currentStatus}
          </span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-sm font-semibold border border-border bg-muted/40">
          <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
          <span className={isOpen ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}>
            {isOpen ? t.openingHours.open : t.openingHours.closed}
          </span>
        </div>
      </div>

      {/* Grille des jours et horaires */}
      <div className="divide-y divide-border/60 text-sm md:text-base">
        {days.map((day, index) => {
          const hours = OPENING_HOURS[index as keyof typeof OPENING_HOURS];
          const isToday = currentTime.getDay() === index;

          return (
            <div 
              key={day}
              className={`flex items-center justify-between py-3 px-2.5 transition-colors ${
                isToday 
                  ? 'bg-red-50/80 dark:bg-red-950/30 text-foreground font-bold border-l-3 border-l-red-600 -mx-2 px-3.5' 
                  : 'text-zinc-800 dark:text-zinc-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {isToday && <span className="w-1.5 h-1.5 rounded-full bg-red-600" />}
                <span className={isToday ? "text-red-700 dark:text-red-400 font-bold" : "font-medium"}>{day}</span>
              </div>
              <span className={isToday ? "text-red-700 dark:text-red-400 font-bold" : "text-muted-foreground font-medium"}>
                {hours ? (
                  hours.pause ? 
                    `${hours.open} - ${hours.pause.start} | ${hours.pause.end} - ${hours.close}` :
                    `${hours.open} - ${hours.close}`
                ) : t.openingHours.closed}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}