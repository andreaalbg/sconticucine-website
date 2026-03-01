import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sconti Cucine - Cucine di Qualità Made in Italy',
    short_name: 'ScontiCucine',
    description: 'Cucine di qualità Made in Italy. Oltre 40 showroom in Italia con extra sconto fino a 5.000€.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f0ea',
    theme_color: '#1a1a1a',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
