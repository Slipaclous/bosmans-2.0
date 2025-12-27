"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { ArrowDown, Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function Hero() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-4 md:px-12 bg-background">
            {/* Background with overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/logos/homepage/garage-back.png"
                    alt="Garage Bosmans Interior"
                    fill
                    className="object-cover scale-105 animate-slow-zoom grayscale opacity-30 dark:opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
            </div>

            {/* Content */}
            <div className="max-w-7xl w-full mx-auto relative z-10 text-center md:text-left mt-12 md:mt-0">
                <div className="animate-fade-in-up flex flex-col items-center md:items-start">
                    <Badge variant="outline" className="mb-8 border-foreground/30 px-6 py-2 text-sm uppercase tracking-[0.2em] text-foreground font-semibold backdrop-blur-md bg-background/30">
                        {language === 'fr' ? 'Depuis 1935' : 'Sinds 1935'}
                    </Badge>

                    <h1 className="font-display font-black text-[12vw] leading-[0.85] text-foreground mb-8 tracking-tighter mix-blend-difference md:mix-blend-normal">
                        BOSMANS
                    </h1>

                    <div className="w-full border-t border-foreground/10 my-8"></div>

                    <div className="flex flex-col md:flex-row items-center md:items-end justify-between w-full gap-8">
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-xl font-light leading-relaxed text-center md:text-left">
                            {t.hero.subtitle}
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/technical"
                                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-4 text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                            >
                                <span className="font-bold">{language === 'fr' ? 'Nos services' : 'Onze diensten'}</span>
                                <ArrowDown className="w-4 h-4 -rotate-90 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href="/contact"
                                className="group inline-flex items-center gap-3 rounded-full border border-foreground/10 bg-background/50 backdrop-blur-md px-8 py-4 text-foreground hover:bg-foreground/5 transition-all duration-300"
                            >
                                <span className="font-bold">{language === 'fr' ? 'Contactez-nous' : 'Neem contact'}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-20">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {language === 'fr' ? 'Découvrir' : 'Ontdekken'}
                </span>
                <ArrowDown className="w-5 h-5 text-primary" />
            </div>

            {/* Bottom Gradient Fade for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
}
