# 🚀 Deployment Instructions

## Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `atelier-cucine-moderne-website` (or your choice)
3. Description: "Atelier Cucine Moderne website - Next.js 14 with SEO optimization"
4. Visibility: Public or Private
5. **DO NOT** check "Initialize with README" (we already have one)
6. Click "Create repository"

## Step 2: Push Code to GitHub

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
# Navigate to project directory
cd /Users/andreaalbagli/Documents/BEhome-1

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/atelier-cucine-moderne-website.git

# Push code to GitHub
git push -u origin main
```

If git asks for credentials, you may need to use a Personal Access Token instead of password:
- Go to: https://github.com/settings/tokens
- Generate new token (classic)
- Select "repo" scope
- Use token as password when prompted

## Step 3: Deploy to Vercel

### Method A: Via Web (Easiest)

1. Go to: https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Wait 2-3 minutes
7. Your site is live! 🎉

### Method B: Via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? atelier-cucine-moderne-website
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

## Step 4: Configure Vercel (Optional)

### Add Environment Variables (if needed):

1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add these if you need them:
   - `NEXT_PUBLIC_GA_ID` - Google Analytics ID
   - `CONTACT_EMAIL` - Your contact email
   - `NEXT_PUBLIC_SITE_URL` - Your production URL

### Custom Domain:

1. In Vercel dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Update DNS records as instructed by Vercel
4. Wait for DNS propagation (24-48 hours max)

## Step 5: Post-Deployment

### ✅ Verify Your Site:
- [ ] Site loads correctly
- [ ] All sections visible
- [ ] Forms work
- [ ] Mobile responsive
- [ ] No console errors

### ✅ SEO Setup:
- [ ] Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
- [ ] Verify site ownership in Google Search Console
- [ ] Add Google Analytics tracking code
- [ ] Test structured data: https://search.google.com/test/rich-results

### ✅ Performance Check:
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Test on PageSpeed Insights

## Troubleshooting

### Build Fails on Vercel:
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Node version should be 18.x or higher

### Images Not Loading:
- Ensure images are in `/public` directory
- Check image paths are correct
- Verify Next.js Image configuration

### Environment Variables:
- Remember to redeploy after adding env vars
- Use `NEXT_PUBLIC_` prefix for client-side variables

## Quick Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repository**: https://github.com/YOUR_USERNAME/atelier-cucine-moderne-website
- **Google Search Console**: https://search.google.com/search-console
- **PageSpeed Insights**: https://pagespeed.web.dev/

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review the documentation in this project
3. Check Next.js documentation: https://nextjs.org/docs
4. Vercel support: https://vercel.com/support

---

🎉 **Congratulations!** Your website is now live!

Your site URL will be: `https://your-project-name.vercel.app`

For custom domain: `https://yourdomain.com`

