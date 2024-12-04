import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/context/language-context';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Garage Pneus Expert - Spécialiste Pneus et Réparations',
  description: 'Votre garage spécialisé en pneus et réparations automobiles entre Hernes et Enghien. Services professionnels et expertise garantie.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <header className="bg-background border-b sticky top-0 z-50">
              <nav className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <Image
                    src="/logos/site_logo/text-bosmans.png"
                    alt="Bosmans"
                    width={140}
                    height={35}
                    className="dark:invert filter brightness-0 hover:brightness-100 hover:saturate-200 transition-all duration-300"
                    style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(75%) saturate(3465%) hue-rotate(343deg) brightness(85%) contrast(120%)' }}
                  />
                  <div className="flex items-center space-x-6">
                    <Navigation />
                    <LanguageSwitcher />
                    <ThemeToggle />
                  </div>
                </div>
              </nav>
            </header>
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}