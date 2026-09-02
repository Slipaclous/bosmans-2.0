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
      <div className="border border-border bg-card p-6 md:p-8 rounded-sm">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
          <div className="w-9 h-9 border border-border bg-muted/40 rounded-sm flex items-center justify-center text-red-600 dark:text-red-400">
            <History className="w-4 h-4" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">{content.title}</h2>
        </div>
        <div className="space-y-4 text-sm md:text-base leading-relaxed text-muted-foreground">
          {content.paragraphs.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}