import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/context/language-context';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle';
import { Navigation } from '@/components/navigation';
import { MobileNav } from '@/components/mobile-nav/mobile-nav';
import { Footer } from '@/components/footer';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bosmans-pneus.be'), // TODO: Update with actual domain
  title: {
    default: 'Bosmans Pneus | Garage Enghien-Hernes',
    template: '%s | Bosmans Pneus'
  },
  description: 'Votre garage spécialisé en pneus et réparations automobiles entre Hernes et Enghien. Services professionnels et expertise garantie depuis 1935.',
  keywords: ['pneus', 'garage', 'réparation automobile', 'Enghien', 'Hernes', 'mécanique', 'entretien', 'Bosmans', 'montage pneus', 'équilibrage'],
  authors: [{ name: 'Bosmans Pneus' }],
  creator: 'Bosmans Pneus',
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    url: 'https://bosmans-pneus.be',
    title: 'Bosmans Pneus | Garage Enghien-Hernes',
    description: 'Expert en pneus et mécanique automobile depuis 1935. Service de qualité à Enghien-Hernes.',
    siteName: 'Bosmans Pneus',
    images: [
      {
        url: '/logos/homepage/garage-back.png', // Using existing hero image as OG image
        width: 1200,
        height: 630,
        alt: 'Garage Bosmans Pneus'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bosmans Pneus | Garage Enghien-Hernes',
    description: 'Votre garage de confiance pour pneus et réparations depuis 1935.',
    images: ['/logos/homepage/garage-back.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.png', // Assuming this exists based on local head tags, otherwise fallback to icon
  },
  alternates: {
    canonical: './',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
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
                    className="dark:invert bg black dark:filter filter brightness-0 hover:brightness-100 hover:saturate-200 transition-all duration-300"
                    style={{
                      filter:
                        'brightness(0) saturate(80%) invert(23%) sepia(75%) saturate(1965%) hue-rotate(343deg) brightness(85%) contrast(120%)',
                    }}
                  />
                  <div className="flex items-center space-x-6">
                    <Navigation />
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <MobileNav />
                  </div>
                </div>
              </nav>
            </header>
            <main className="flex-grow">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
