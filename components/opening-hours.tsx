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
    <Card className="p-6 bg-card">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
          <Clock className="w-6 h-6 text-red-600 dark:text-red-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{t.openingHours.currentStatus}</h3>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className={isOpen ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>
              {isOpen ? t.openingHours.open : t.openingHours.closed}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {days.map((day, index) => {
          const hours = OPENING_HOURS[index as keyof typeof OPENING_HOURS];
          const isToday = currentTime.getDay() === index;

          return (
            <div 
              key={day}
              className={`flex justify-between py-1 ${
                isToday 
                  ? 'font-semibold bg-gray-50 dark:bg-gray-800/50 -mx-2 px-2 rounded' 
                  : ''
              }`}
            >
              <span className="text-foreground">{day}</span>
              <span className="text-muted-foreground">
                {hours ? (
                  hours.pause ? 
                    `${hours.open} - ${hours.pause.start}, ${hours.pause.end} - ${hours.close}` :
                    `${hours.open} - ${hours.close}`
                ) : t.openingHours.closed}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}