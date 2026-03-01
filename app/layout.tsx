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
  title: 'Sconti Cucine - Cucine di Qualità Made in Italy | Oltre 40 Showroom',
  description: 'Scopri le migliori cucine Made in Italy a prezzi scontati. Oltre 40 showroom in tutta Italia, progettazione 3D gratuita, extra sconto fino a 5.000€, trasporto e montaggio inclusi.',
  keywords: ['cucine', 'cucine moderne', 'cucine classiche', 'cucine su misura', 'cucine componibili', 'arredamento cucina', 'cucine made in italy', 'showroom cucine', 'sconti cucine'],
  authors: [{ name: 'Sconti Cucine' }],
  creator: 'Sconti Cucine',
  publisher: 'Sconti Cucine',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.sconticucine.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sconti Cucine - Cucine di Qualità Made in Italy',
    description: 'Oltre 40 showroom in Italia. Cucine prestigiose Made in Italy con extra sconto fino a 5.000€. Progettazione 3D gratuita, trasporto e montaggio inclusi.',
    url: 'https://www.sconticucine.it',
    siteName: 'Sconti Cucine',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sconti Cucine - Cucine Made in Italy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sconti Cucine - Cucine di Qualità Made in Italy',
    description: 'Oltre 40 showroom in Italia. Cucine Made in Italy con extra sconto fino a 5.000€.',
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
