# Customization Guide

## 🎨 Branding & Colors

### Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#d4282a',  // Main brand color (red)
    dark: '#b01f21',     // Darker shade
    light: '#e03032',    // Lighter shade
  },
  secondary: {
    DEFAULT: '#2c3e50',  // Secondary color (dark blue)
    dark: '#1a252f',
    light: '#34495e',
  },
  accent: {
    DEFAULT: '#f39c12',  // Accent color (orange)
    dark: '#d68910',
    light: '#f5b041',
  },
}
```

## 📝 Content Updates

### Hero Carousel

Edit `components/home/HeroCarousel.tsx`:

```typescript
const slides = [
  {
    id: 1,
    title: 'YOUR TITLE',
    description: 'Your description',
    cta: 'YOUR CTA',
    bgGradient: 'from-primary/90 to-primary-dark/90',
  },
  // Add more slides...
]
```

### Company Information

Edit `components/home/WhoWeAre.tsx` to update the company description.

### Products

Edit `components/home/ProductShowcase.tsx` to add/remove products:

```typescript
const products = [
  {
    id: 1,
    title: 'Product Name',
    discount: '-30%',
    image: '/images/product.jpg',
    alt: 'Product description',
  },
]
```

### Services

Edit `components/home/ServicesGrid.tsx` to update services.

### Testimonials

Edit `components/home/Testimonials.tsx` to add customer reviews.

## 🖼️ Images

### Required Images

Place these in the `/public` directory:

1. **Logo** (`/public/logo.png`)
   - Recommended size: 200x60px
   - Format: PNG with transparency

2. **Product Images** (`/public/images/`)
   - Shabby Chic: `shabby-chic.jpg`
   - Rustico: `rustico.jpg`
   - Moderno: `moderno.jpg`
   - Recommended size: 800x600px
   - Format: JPG (optimized)

3. **Open Graph Image** (`/public/og-image.jpg`)
   - Size: 1200x630px
   - Format: JPG

4. **Favicons**
   - `favicon.ico` (16x16, 32x32)
   - `icon-192.png` (192x192)
   - `icon-512.png` (512x512)

### Optimize Images

Use tools like:
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- ImageOptim (Mac)

## 📧 Contact Form

### Setup Email Service

1. **Using SendGrid:**

```bash
npm install @sendgrid/mail
```

Create `app/api/contact/route.ts`:

```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: Request) {
  const data = await request.json()
  
  const msg = {
    to: process.env.CONTACT_EMAIL,
    from: 'noreply@ateliercucinemoderne.it',
    subject: 'Nuova richiesta catalogo',
    text: `Nome: ${data.name}\nEmail: ${data.email}\nTelefono: ${data.phone}\nCittà: ${data.city}`,
  }
  
  await sgMail.send(msg)
  return Response.json({ success: true })
}
```

2. **Using Resend (Recommended):**

```bash
npm install resend
```

Similar setup with Resend API.

### Update Form Handler

Edit `components/home/CatalogForm.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  
  if (response.ok) {
    alert('Grazie! Riceverai il catalogo all\'indirizzo email fornito.')
  }
}
```

## 🔍 SEO Customization

### Update Meta Tags

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
  // ... more meta tags
}
```

### Structured Data

Edit `lib/structured-data.ts` to update:
- Business name
- Address
- Phone number
- Opening hours
- Coordinates

### Google Search Console

1. Get verification code from Google Search Console
2. Update in `app/layout.tsx`:

```typescript
verification: {
  google: 'your-actual-verification-code',
}
```

## 📱 Social Media Links

Edit `components/layout/Footer.tsx` to add social media icons:

```typescript
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

// Add social links section
<div className="flex space-x-4">
  <a href="https://facebook.com/yourpage">
    <FaFacebook />
  </a>
  // ... more icons
</div>
```

## 🌍 Multi-language Support

To add English or other languages:

1. Install next-intl:
```bash
npm install next-intl
```

2. Create translation files in `/messages/`
3. Update `next.config.mjs` with i18n config
4. Create language switcher component

## 📞 Contact Information

Update contact details in:
- `components/layout/Footer.tsx`
- `lib/structured-data.ts`
- `.env` file

## 🎯 Google Analytics

1. Get GA4 tracking ID from Google Analytics
2. Add to `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

3. Add script to `app/layout.tsx` (already configured)

## 🗺️ Store Locator

To add interactive map:

1. Install Leaflet or Google Maps:
```bash
npm install leaflet react-leaflet
```

2. Create map component
3. Add store locations with coordinates
4. Update `components/home/StoreLocator.tsx`

## ⚙️ Advanced Customization

### Add Blog

1. Create `/app/blog` directory
2. Add `page.tsx` for blog listing
3. Create `[slug]/page.tsx` for individual posts
4. Use MDX or connect to CMS (Contentful, Sanity)

### Add E-commerce

1. Install Stripe or PayPal SDK
2. Create product pages
3. Add cart functionality
4. Implement checkout flow

### Add Authentication

1. Install NextAuth.js:
```bash
npm install next-auth
```

2. Setup authentication providers
3. Create protected routes
4. Add user dashboard

## 🎨 Design System

All reusable styles are in `app/globals.css`:

- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.section-title` - Section headings
- `.card` - Card component
- `.input-field` - Form inputs

Create new utility classes as needed.

## 📦 Additional Components

Need more components? Check:
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful components
- [Headless UI](https://headlessui.com/) - Unstyled components
- [Radix UI](https://www.radix-ui.com/) - Primitives

## 🔄 Updates & Maintenance

Keep dependencies updated:

```bash
npm update
npm audit fix
```

Check for major version updates quarterly.

