import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mariven Hotel & Suites',
  description:
    'Discover refined coastal luxury at Mariven Hotel & Suites. Oceanfront rooms, curated dining, and unforgettable seaside experiences.',
  keywords: ['luxury hotel', 'oceanfront resort', 'boutique suites', 'coastal retreat', 'mariven'],
  authors: [{ name: 'Mariven Hotel & Suites' }],
  creator: 'Mariven Hotel & Suites',
  publisher: 'Mariven Hotel & Suites',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.marivenhotel.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mariven Hotel & Suites',
    description:
      'Escape to an editorially styled oceanfront resort with elegant suites, tailored experiences, and Mediterranean-inspired hospitality.',
    url: 'https://www.marivenhotel.com',
    siteName: 'Mariven Hotel & Suites',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mariven Hotel & Suites',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mariven Hotel & Suites',
    description: 'A refined oceanfront retreat with elegant rooms, curated amenities, and timeless coastal style.',
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
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans">
        <Analytics />
        <main>{children}</main>
      </body>
    </html>
  )
}

