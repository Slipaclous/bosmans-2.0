"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Car, Wrench, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ServicesList() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="py-32 bg-background relative overflow-hidden" id="services">
            {/* Visual Connector Line from previous section */}
            <div className="absolute top-0 left-4 md:left-12 w-px h-32 bg-gradient-to-b from-border to-transparent" />

            {/* Background Gradient for depth */}
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-muted/20 to-transparent pointer-events-none" />
            <div className="container px-4 md:px-12 mx-auto">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Header */}
                    <div className="lg:w-1/3">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 sticky top-24">
                            {t.services.title}
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 sticky top-40 max-w-sm">
                            {t.services.subtitle}
                        </p>
                    </div>

                    {/* List */}
                    <div className="lg:w-2/3">
                        <Accordion type="single" collapsible className="space-y-4">
                            <AccordionItem value="tires" className="group border-b border-border mb-4">
                                <AccordionTrigger className="hover:no-underline py-6 px-0 data-[state=open]:text-primary transition-all duration-300">
                                    <div className="flex items-center gap-6">
                                        <span className="font-display text-4xl font-bold text-muted-foreground/30 group-hover:text-primary/30 transition-colors">01</span>
                                        <span className="text-3xl font-display font-bold group-hover:translate-x-2 transition-transform">{t.services.tires.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="p-0 pb-8">
                                    <div className="flex flex-col md:flex-row gap-8 items-start mt-4 pl-14">
                                        <div className="p-4 bg-muted/50 rounded-2xl">
                                            <Car className="w-8 h-8 text-primary" />
                                        </div>
                                        <div className="flex-1 space-y-6">
                                            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                                {t.services.tires.description}
                                            </p>
                                            <Link href="/tires" className="group/link inline-flex items-center text-primary font-bold hover:opacity-80 transition-opacity">
                                                <span className="border-b-2 border-primary/20 group-hover/link:border-primary transition-colors pb-1">
                                                    {language === 'fr' ? 'Découvrir nos pneus' : 'Ontdek onze banden'}
                                                </span>
                                                <ArrowUpRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="repairs" className="group border-b border-border">
                                <AccordionTrigger className="hover:no-underline py-6 px-0 data-[state=open]:text-primary transition-all duration-300">
                                    <div className="flex items-center gap-6">
                                        <span className="font-display text-4xl font-bold text-muted-foreground/30 group-hover:text-primary/30 transition-colors">02</span>
                                        <span className="text-3xl font-display font-bold group-hover:translate-x-2 transition-transform">{t.services.repairs.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="p-0 pb-8">
                                    <div className="flex flex-col md:flex-row gap-8 items-start mt-4 pl-14">
                                        <div className="p-4 bg-muted/50 rounded-2xl">
                                            <Wrench className="w-8 h-8 text-primary" />
                                        </div>
                                        <div className="flex-1 space-y-6">
                                            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                                {t.services.repairs.description}
                                            </p>
                                            <Link href="/technical" className="group/link inline-flex items-center text-primary font-bold hover:opacity-80 transition-opacity">
                                                <span className="border-b-2 border-primary/20 group-hover/link:border-primary transition-colors pb-1">
                                                    {language === 'fr' ? 'Services techniques' : 'Technische diensten'}
                                                </span>
                                                <ArrowUpRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
