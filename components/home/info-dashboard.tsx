"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { OpeningHours } from "@/components/opening-hours";
import { MapPin, Phone, AlertCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function InfoDashboard() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="py-24 relative bg-muted/30 dark:bg-muted/10 overflow-hidden border-t border-border/50">
            {/* Background Patterns - Subtle Theme Aware */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/50 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 md:px-12 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Main Opening Hours Card - span 8 cols */}
                    <div className="glass-panel lg:col-span-8 rounded-3xl p-8 md:p-12 relative overflow-hidden group border-border/50 bg-card/50 backdrop-blur-xl shadow-xl">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                            <Clock className="w-64 h-64 text-foreground" />
                        </div>
                        <h3 className="font-display text-3xl font-bold mb-8 text-foreground">{t.openingHours.title}</h3>
                        <OpeningHours />
                    </div>

                    {/* Side Info Column - span 4 cols */}
                    <div className="lg:col-span-4 flex flex-col gap-6">

                        {/* Unified Info Card */}
                        <div className="glass-panel border-border/50 bg-card/50 rounded-3xl p-8 flex-1 flex flex-col justify-center gap-8 group hover:border-primary/30 transition-colors duration-500 shadow-lg">

                            {/* Winter Info */}
                            <div className="flex items-start gap-5 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors">
                                <AlertCircle className="text-primary w-6 h-6 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-foreground">{t.winterInfoTitle}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {t.winterReminder}
                                    </p>
                                </div>
                            </div>

                            {/* Closure Info */}
                            <div className="flex items-start gap-5 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors">
                                <Clock className="text-primary w-6 h-6 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-foreground">{t.exceptionalClosure.title}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                                        {t.exceptionalClosure.date}
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Quick Contact - Compact */}
                        <div className="glass-panel border-border/50 bg-card/50 p-8 rounded-3xl group hover:bg-primary hover:border-primary transition-all duration-300 shadow-lg">
                            <a href="tel:023961184" className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-muted-foreground group-hover:text-white/80 font-medium uppercase tracking-widest mb-1">{t.emergencyContact}</p>
                                    <p className="text-2xl font-bold font-display text-foreground group-hover:text-white">02 396 11 84</p>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-secondary group-hover:bg-white/20 flex items-center justify-center transition-colors">
                                    <Phone className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
