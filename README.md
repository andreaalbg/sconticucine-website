# Atelier Cucine Moderne - Website

A modern, high-performance website for Atelier Cucine Moderne, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 14 App Router** - Latest Next.js features for optimal performance
- **Server-Side Rendering (SSR)** - Excellent SEO performance
- **TypeScript** - Type-safe code for better development experience
- **Tailwind CSS** - Modern, responsive design system
- **Framer Motion** - Smooth animations and transitions
- **Optimized Images** - Automatic image optimization with Next.js Image
- **SEO Optimized** - Meta tags, sitemap, robots.txt, and structured data
- **Mobile-First** - Fully responsive design
- **Accessibility** - WCAG compliant components

## 📦 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter, Poppins)

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file based on `.env.example`:
```bash
cp .env.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── robots.ts          # Robots.txt configuration
│   ├── sitemap.ts         # Sitemap configuration
│   └── manifest.ts        # PWA manifest
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── home/              # Home page sections
│       ├── HeroCarousel.tsx
│       ├── WhoWeAre.tsx
│       ├── ProductShowcase.tsx
│       ├── CatalogForm.tsx
│       ├── ServicesGrid.tsx
│       ├── Testimonials.tsx
│       └── StoreLocator.tsx
├── public/                # Static assets
└── tailwind.config.ts     # Tailwind configuration
```

## 🎨 Design System

### Colors
- **Primary**: #d4282a (Red)
- **Secondary**: #2c3e50 (Dark Blue)
- **Accent**: #f39c12 (Orange)

### Typography
- **Headings**: Poppins
- **Body**: Inter

## 🔍 SEO Features

- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (JSON-LD)
- Automatic sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Optimized page load speed

## 📱 Sections

1. **Hero Carousel** - 4 rotating slides with main value propositions
2. **Who We Are** - Company introduction with key features
3. **Product Showcase** - Kitchen styles with discount badges
4. **Catalog Form** - Lead generation form
5. **Services Grid** - 6 main services
6. **Testimonials** - Customer reviews
7. **Store Locator** - Find nearest showroom

## 🚀 Performance Optimizations

- Image optimization with Next.js Image
- Code splitting and lazy loading
- Font optimization with `next/font`
- Compression enabled
- CSS optimization with Tailwind
- Reduced JavaScript bundle size

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📄 License

© 2024 Atelier Cucine Moderne. All rights reserved.

## 🤝 Support

For support, email info@ateliercucinemoderne.it or contact through the website form.

