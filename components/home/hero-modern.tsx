"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";

export function HeroModern() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image with Parallax feel (can be enhanced later) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/logos/homepage/garage-back.png"
                    alt="Bosmans Garage Background"
                    fill
                    className="object-cover object-center"
                    quality={90}
                    priority
                />
                {/* Modern Gradient Overlay: Dark fade from left/bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            </div>

            <div className="container relative z-20 px-4 md:px-8 mx-auto">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/20 text-primary-foreground text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span>{language === 'fr' ? 'Depuis 1935' : 'Sinds 1935'}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                                {language === 'fr' ? 'Excellence & Expertise' : 'Uitmuntendheid & Expertise'}
                            </span>
                            <span className="block text-primary">
                                {language === 'fr' ? 'Automobile.' : 'Automobiel.'}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed">
                            {t.hero.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">

                            <Link
                                href="/technical"
                                className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 bg-white/10 backdrop-blur-sm px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                {language === 'fr' ? 'Nos Services' : 'Onze Diensten'}
                            </Link>
                        </div>
                    </motion.div>

                    {/* Quick Info Bar at Bottom of Hero */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-8 text-white/60"
                    >
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-primary" />
                            <div>
                                <p className="text-sm font-semibold text-white">Patriotsesteenweg 67</p>
                                <p className="text-xs">1540 Pajottegem</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary" />
                            <div>
                                <p className="text-sm font-semibold text-white">02 396 11 84</p>
                                <p className="text-xs">Mon - Sat: 8:30 - 18:00</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
