"use client";

import { Language } from "@/lib/translations";
import { Card } from "@/components/ui/card";
import { History } from "lucide-react";

interface HistorySectionProps {
  content: {
    title: string;
    paragraphs: string[];
  };
}

export function HistorySection({ content }: HistorySectionProps) {
  return (
    <section className="mb-16">
      <Card className="p-8 relative overflow-hidden">
        <div className="absolute top-0 dark:text-white  right-0 w-64 h-64 bg-red-500/5 rounded-full -translate-y-32 translate-x-32" />
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <History className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold">{content.title}</h2>
          </div>
          <div className="space-y-4 dark:text-white ">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 dark:text-white  leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}