"use client";

import { motion } from "framer-motion";
import { AlertCircle, MapPin, Phone } from "lucide-react";
import { OpeningHours } from "@/components/opening-hours";
import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

export function InfoSection() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-gray-50 to-background dark:from-background dark:via-gray-900/50 dark:to-background -z-10" />

            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* Opening Hours Column - Takes up more space now for better readability */}
                        <div className="lg:col-span-7">
                            <StaggerContainer>
                                <StaggerItem>
                                    <div className="bg-card/60 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-border/50 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-primary/10" />

                                        <h2 className="text-3xl font-bold mb-8 tracking-tight flex items-center gap-3">
                                            <span className="w-1.5 h-8 bg-primary rounded-full" />
                                            {t.openingHours.title}
                                        </h2>
                                        <OpeningHours />
                                    </div>
                                </StaggerItem>
                            </StaggerContainer>
                        </div>

                        {/* Contact & Alerts Column */}
                        <div className="lg:col-span-5 space-y-6">
                            <StaggerContainer delay={0.2} className="space-y-6">

                                {/* Alert / Reminder Card - Enhanced Style */}
                                <StaggerItem>
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800 rounded-3xl p-6 shadow-sm relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-2xl" />
                                        <div className="flex items-start gap-4 relative z-10">
                                            <div className="bg-white dark:bg-blue-900/50 p-3 rounded-2xl shadow-sm shrink-0">
                                                <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
                                                    {language === 'fr' ? 'Information' : 'Informatie'}
                                                </h3>
                                                <p className="text-blue-800/80 dark:text-blue-200/80 leading-relaxed text-sm">
                                                    {t.winterReminder}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>

                                {/* Contact Info Box - Unified */}
                                <StaggerItem>
                                    <div className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl border border-border/50 shadow-lg flex flex-col gap-6">
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                <MapPin className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-lg text-foreground">{t.contact.address}</h4>
                                                <p className="text-muted-foreground">Patriotsesteenweg 67, 1540 Pajottegem</p>
                                            </div>
                                        </div>

                                        <div className="h-px bg-border/50 w-full" />

                                        <a href="tel:+3223961184" className="flex items-center gap-4 group cursor-pointer">
                                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                <Phone className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{t.contact.phone}</h4>
                                                <div className="flex flex-col">
                                                    <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">02 396 11 84</span>
                                                    <span className="text-sm text-muted-foreground/80 group-hover:text-primary/70 transition-colors">0486/92.04.04</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </StaggerItem>

                            </StaggerContainer>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
