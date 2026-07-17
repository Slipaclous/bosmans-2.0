"use client";

import { motion } from "framer-motion";
import { ArrowRight, Car, Wrench, Clock, ShieldCheck, Cog } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export function ServicesBento() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        {language === 'fr' ? 'Nos Expertises' : 'Onze Expertise'}
                        <span className="text-primary">.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {t.services.subtitle}
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" as any }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
                >
                    {/* Main Card: Tires - Spans 2 cols */}
                    <motion.div variants={itemVariants} className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-gray-100 dark:bg-card border border-border">
                        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent z-10" />
                        <img
                            src="/logos/homepage/garage-back.png"
                            alt="Tires"
                            className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Car className="text-white w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t.services.tires.title}</h3>
                            <p className="text-gray-200 mb-6 max-w-md">{t.services.tires.description}</p>

                            <Link href="/tires" className="inline-flex items-center text-white hover:text-primary transition-colors font-medium">
                                {language === 'fr' ? 'Voir les pneus' : 'Bekijk banden'}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Secondary Card: Repairs */}
                    <motion.div variants={itemVariants} className="relative group overflow-hidden rounded-3xl bg-card border border-border p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6 text-primary">
                                <Wrench className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{t.services.repairs.title}</h3>
                            <p className="text-muted-foreground">{t.services.repairs.description}</p>
                        </div>

                        <div className="mt-4">
                            <Link href="/services/repairs" className="inline-flex items-center justify-center w-full py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-primary hover:text-white transition-colors">
                                {language === 'fr' ? 'En savoir plus' : 'Meer info'}
                            </Link>
                        </div>
                    </motion.div>

                    {/* Third Card: Technical/Diagnostics or similar */}
                    <motion.div variants={itemVariants} className="relative group overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 flex flex-col justify-between">
                        <div>
                            <ShieldCheck className="w-10 h-10 mb-6 opacity-80" />
                            <h3 className="text-xl font-bold mb-2">{language === 'fr' ? 'Contrôle Technique' : 'Technische Controle'}</h3>
                            <p className="opacity-90">{language === 'fr' ? 'Préparation et vérification complète.' : 'Voorbereiding en volledige controle.'}</p>
                        </div>
                        <ArrowRight className="w-6 h-6 self-end opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </motion.div>

                    {/* Fourth Card: Equipment/Rims */}
                    <motion.div variants={itemVariants} className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-secondary/30 border border-border p-8 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <div className="w-12 h-12 bg-white dark:bg-card rounded-full shadow-sm flex items-center justify-center mb-4">
                                <Cog className="w-6 h-6 text-foreground" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{language === 'fr' ? 'Jantes & Accessoires' : 'Velgen & Accessoires'}</h3>
                            <p className="text-muted-foreground mb-6">
                                {language === 'fr' ? 'Découvrez notre large gamme de jantes en alliage pour tous types de véhicules.' : 'Ontdek ons breed assortiment lichtmetalen velgen voor alle voertuigtypes.'}
                            </p>
                            <Link href="/rims" className="text-primary font-semibold hover:underline">
                                {language === 'fr' ? 'Voir le catalogue' : 'Catalogus bekijken'}
                            </Link>
                        </div>
                        <div className="flex-1 h-full w-full bg-muted rounded-2xl relative overflow-hidden min-h-[150px]">
                            {/* Placeholder for Rims Image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-muted-foreground text-sm font-medium">
                                IMAGE JANTES
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
