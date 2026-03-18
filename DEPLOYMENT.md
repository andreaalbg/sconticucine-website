# Deployment Guide

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application and is optimized for Next.js projects.

### Step 1: Push to Git Repository

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with your GitHub account
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect Next.js settings
6. Add environment variables if needed
7. Click "Deploy"

Your site will be live in minutes at `https://your-project.vercel.app`

### Environment Variables (Vercel)

Add these in your Vercel project settings:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
CONTACT_EMAIL=info@ateliercucinemoderne.it
```

## 📦 Other Deployment Options

### Deploy to Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Install Netlify adapter: `npm install -D @netlify/plugin-nextjs`

### Deploy to AWS (Amplify)

1. Connect your Git repository
2. Build settings:
   - Build command: `npm run build`
   - Base directory: `/`
   - Publish directory: `.next`

### Deploy to Digital Ocean App Platform

1. Create new app
2. Select your repository
3. Detect framework automatically
4. Deploy

### Self-Hosting with PM2

```bash
# Build the application
npm run build

# Install PM2
npm install -g pm2

# Start with PM2
pm2 start npm --name "ateliercucinemoderne" -- start

# Save PM2 config
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

## 🔧 Pre-Deployment Checklist

- [ ] Update `.env` with production values
- [ ] Replace placeholder images in `/public`
- [ ] Add Google Analytics ID
- [ ] Test contact form submission
- [ ] Update contact email addresses
- [ ] Add actual business phone numbers
- [ ] Update Google verification code in `app/layout.tsx`
- [ ] Add real showroom addresses and coordinates
- [ ] Test all links
- [ ] Verify SEO meta tags
- [ ] Check mobile responsiveness
- [ ] Run performance audit (Lighthouse)
- [ ] Test on multiple browsers
- [ ] Setup SSL certificate (automatic on Vercel)
- [ ] Configure custom domain

## 🌐 Custom Domain Setup (Vercel)

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS records as instructed
5. Wait for DNS propagation (usually 24-48 hours)

### DNS Records for Custom Domain

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 📊 Performance Optimization

The site is already optimized with:
- ✅ Next.js Image Optimization
- ✅ Code Splitting
- ✅ Font Optimization
- ✅ CSS Optimization
- ✅ Compression
- ✅ Server-side Rendering
- ✅ Static Generation where possible

## 🔍 SEO Configuration

After deployment:
1. Submit sitemap to Google Search Console: `https://your-domain.com/sitemap.xml`
2. Verify ownership in Google Search Console
3. Submit to Bing Webmaster Tools
4. Setup Google Analytics
5. Monitor Core Web Vitals

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (v18+ recommended)
- Clear `.next` folder and rebuild
- Check for TypeScript errors: `npm run lint`

### Images Not Loading
- Ensure images are in `/public` directory
- Check image paths are correct
- Verify `next.config.mjs` image domains

### Forms Not Working
- Setup email service (SendGrid, AWS SES, etc.)
- Add API route for form submission
- Test with environment variables

## 📈 Monitoring

Setup monitoring services:
- **Vercel Analytics** (built-in for Vercel deployments)
- **Google Analytics** (already configured)
- **Sentry** for error tracking (optional)
- **Uptime monitoring** (UptimeRobot, Pingdom)

## 🔐 Security

The site includes:
- Security headers (CSP, X-Frame-Options, etc.)
- HTTPS enforcement (automatic on Vercel)
- Form validation
- XSS protection

## 📝 Post-Deployment

1. Test all functionality in production
2. Monitor performance with Lighthouse
3. Check Search Console for indexing
4. Setup Google Business Profile
5. Create social media profiles
6. Setup email marketing integration

