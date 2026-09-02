import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { LanguageProvider } from '@/lib/context/language-context';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle';
import { Navigation } from '@/components/navigation';
import { MobileNav } from '@/components/mobile-nav/mobile-nav';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bosmans banden pneus - Enghien-Hernes',
  description:
    'Votre garage spécialisé en pneus et réparations automobiles entre Hernes et Enghien. Services professionnels et expertise garantie.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={roboto.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen bg-background text-foreground selection:bg-red-600 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {/* Topbar d'information */}
            <div className="border-b border-border/80 bg-zinc-950 text-zinc-200 text-sm py-2.5 px-4">
              <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>Patriotsesteenweg 67, 1540 Pajottegem</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <Phone className="w-4 h-4 text-red-500" />
                    <a href="tel:023961184" className="hover:text-white font-medium transition-colors">02 396 11 84</a>
                    <span className="text-zinc-500">/</span>
                    <a href="tel:0486920404" className="hover:text-white font-medium transition-colors">0486/92.04.04</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-zinc-300 font-medium">
                  <span className="hidden md:inline">Garage Bosmans • Herne / Enghien</span>
                </div>
              </div>
            </div>

            <header className="bg-background/95 backdrop-blur-none border-b border-border sticky top-0 z-50">
              <div className="max-w-6xl mx-auto px-4 py-3.5">
                <div className="flex items-center justify-between">
                  <Link href="/" className="inline-block transition-opacity hover:opacity-90">
                    <Image
                      src="/logos/site_logo/text-bosmans.png"
                      alt="Bosmans"
                      width={130}
                      height={32}
                      priority
                      className="dark:invert filter brightness-0 hover:brightness-100 hover:saturate-200 transition-all duration-200"
                      style={{
                        filter:
                          'brightness(0) saturate(80%) invert(23%) sepia(75%) saturate(1965%) hue-rotate(343deg) brightness(85%) contrast(120%)',
                      }}
                    />
                  </Link>
                  <div className="flex items-center space-x-6">
                    <Navigation />
                    <div className="flex items-center space-x-2 pl-2 border-l border-border">
                      <LanguageSwitcher />
                      <ThemeToggle />
                      <MobileNav />
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <main className="flex-grow">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
