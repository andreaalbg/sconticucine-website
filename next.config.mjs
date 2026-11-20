/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://www.google-analytics.com https://acconsento.click https://accesso.acconsento.click; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://acconsento.click https://accesso.acconsento.click; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.facebook.com https://connect.facebook.net https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://ad.doubleclick.net https://www.google.com https://api.web3forms.com https://acconsento.click https://accesso.acconsento.click https://region1.google-analytics.com; frame-src https://www.googletagmanager.com https://accesso.acconsento.click https://acconsento.click; form-action 'self' https://api.web3forms.com;" },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
      ],
    }]
  },
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  // SEO optimizations
  generateEtags: true,
};

export default nextConfig;

