import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Bee Hive Villa - Luxury Accommodation & Bee Keeping Experience',
    template: '%s | Bee Hive Villa'
  },
  description: 'Experience luxury eco-friendly accommodation and unique bee keeping activities in Kandy, Sri Lanka. Perfect for sustainable tourism and nature lovers.',
  keywords: 'Kandy hotels, Kandy rooms, Kandy accommodation, Kandy villa, Sri Lanka accommodation, Kandy homestay, boutique hotel Kandy, private villa Kandy, bee keeping Kandy, eco-tourism Kandy, sustainable travel Sri Lanka, responsible travel Sri Lanka, Kandy apiary stay',
  openGraph: {
    title: 'Bee Hive Villa - Accommodation & Bee Keeping',
    description: 'Discover luxurious rooms and unique bee keeping experiences in Kandy, Sri Lanka. Book your eco-friendly stay at our serene villa.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.beehivevilla.com/', // Replace with actual domain
    siteName: 'Bee Hive Villa',
    images: [
      {
        url: '/images/hero-banner.jpg', // Replace with actual image path
        width: 1200,
        height: 630,
        alt: 'Bee Hive Villa - Luxury Accommodation in Kandy'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bee Hive Villa - Accommodation & Bee Keeping',
    description: 'Discover luxurious rooms and unique bee keeping experiences in Kandy, Sri Lanka. Book your eco-friendly stay at our serene villa.',
    images: ['/images/hero-banner.jpg'] // Replace with actual image path
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'sU-WI1AY-uBoL7cbilz5dPvVXJzLvkP1aCRpFHFtqzE',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Analytics />
      </head>
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
