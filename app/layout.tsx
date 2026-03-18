import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import { organizationSchema, localBusinessSchema, faqSchema } from '@/lib/structured-data'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Atelier Cucine Moderne - Cucine di Qualità Made in Italy | Showroom in tutta Italia',
  description:
    'Scopri le migliori cucine Made in Italy a prezzi scontati. Showroom in tutta Italia, progettazione 3D gratuita, extra sconto fino a 1.000€, trasporto e montaggio inclusi.',
  keywords: ['cucine', 'cucine moderne', 'cucine classiche', 'cucine su misura', 'cucine componibili', 'arredamento cucina', 'cucine made in italy', 'showroom cucine', 'atelier cucine moderne'],
  authors: [{ name: 'Atelier Cucine Moderne' }],
  creator: 'Atelier Cucine Moderne',
  publisher: 'Atelier Cucine Moderne',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.ateliercucinemoderne.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Atelier Cucine Moderne - Cucine di Qualità Made in Italy',
    description:
      'Showroom in tutta Italia. Cucine prestigiose Made in Italy con extra sconto fino a 1.000€. Progettazione 3D gratuita, trasporto e montaggio inclusi.',
    url: 'https://www.ateliercucinemoderne.it',
    siteName: 'Atelier Cucine Moderne',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atelier Cucine Moderne - Cucine Made in Italy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atelier Cucine Moderne - Cucine di Qualità Made in Italy',
    description: 'Showroom in tutta Italia. Cucine Made in Italy con extra sconto fino a 1.000€.',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-sans">
        <Analytics />
        <main>{children}</main>
      </body>
    </html>
  )
}
