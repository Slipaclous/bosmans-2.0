"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    imageSrc?: string;
    align?: "center" | "left";
}

export function PageHeader({
    title,
    subtitle,
    imageSrc = "/logos/homepage/garage-back.png",
    align = "center"
}: PageHeaderProps) {
    return (
        <div className="relative h-[40vh] min-h-[400px] w-full overflow-hidden flex items-end pb-20">
            {/* Background Image with Parallax-like feel */}
            <div className="absolute inset-0 z-0 select-none">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className={`container relative z-10 px-6 mx-auto ${align === 'center' ? 'text-center' : 'text-left'}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
                        {title}
                        <span className="text-primary">.</span>
                    </h1>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow-md leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
