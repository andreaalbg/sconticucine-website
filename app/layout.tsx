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
  title: 'AreaLivingDesign - Soggiorni Moderni Made in Italy | Design Elegante e Raffinato',
  description: 'Scopri i migliori soggiorni moderni Made in Italy. Oltre 40 showroom in tutta Italia, designer dedicato, buono sconto da 1000€, trasporto e montaggio inclusi. Design contemporaneo per il tuo living.',
  keywords: ['soggiorni', 'living room', 'soggiorni moderni', 'arredamento soggiorno', 'design italiano', 'showroom soggiorni', 'mobili soggiorno', 'living design', 'arredamento moderno'],
  authors: [{ name: 'AreaLivingDesign' }],
  creator: 'AreaLivingDesign',
  publisher: 'AreaLivingDesign',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.arealivingdesign.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AreaLivingDesign - Soggiorni Moderni Made in Italy',
    description: 'Oltre 40 showroom in Italia. Soggiorni eleganti Made in Italy con design contemporaneo. Designer dedicato, buono sconto 1000€, trasporto incluso.',
    url: 'https://www.arealivingdesign.it',
    siteName: 'AreaLivingDesign',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AreaLivingDesign - Soggiorni Made in Italy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AreaLivingDesign - Soggiorni Moderni Made in Italy',
    description: 'Oltre 40 showroom in Italia. Soggiorni eleganti Made in Italy con design raffinato.',
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
        {/* Structured Data for SEO */}
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
