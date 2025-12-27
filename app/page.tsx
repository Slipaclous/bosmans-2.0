"use client";

import { Hero } from "@/components/home/hero";
import { InfoDashboard } from "@/components/home/info-dashboard";
import { ServicesList } from "@/components/home/services-list";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />

      <div className="relative z-10 bg-background">
        <Reveal>
          {/* Force dark mode for this premium section to ensure contrast */}
          <InfoDashboard />
        </Reveal>

        <Reveal>
          <ServicesList />
        </Reveal>
      </div>
    </main>
  );
}