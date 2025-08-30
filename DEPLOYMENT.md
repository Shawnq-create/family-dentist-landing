# Deployment Guide - DentaCare Family Landing Page

## 🚀 Quick Deploy to Vercel

### Step 1: Prepare Repository
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: Family dentist landing page"

# Push to GitHub
git remote add origin https://github.com/yourusername/family-dentist-landing.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your `family-dentist-landing` repository
4. Configure project settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

### Step 3: Environment Variables
Add these environment variables in Vercel dashboard:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
GOOGLE_MAPS_API_KEY=AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Step 4: Custom Domain (Optional)
1. In Vercel project settings, go to "Domains"
2. Add your custom domain (e.g., `dentacarefamily.ro`)
3. Configure DNS records as instructed

## 🔧 Required API Keys

### Resend Setup
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use their test domain
3. Generate API key from dashboard
4. Update email addresses in `/src/app/api/appointment/route.ts`

### Google Maps Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project or select existing
3. Enable "Maps JavaScript API"
4. Create credentials (API Key)
5. Restrict API key to your domain for security

## 📝 Pre-Deployment Checklist

- [ ] Update contact information throughout the site
- [ ] Replace placeholder images with actual clinic photos
- [ ] Test appointment form functionality
- [ ] Verify Google Maps location accuracy
- [ ] Update social media links in TopBar component
- [ ] Test responsive design on mobile devices
- [ ] Add actual testimonials and customer photos
- [ ] Update services and pricing information
- [ ] Set up proper email forwarding for appointments

## 🔒 Security Considerations

1. **API Key Security**: Never commit API keys to repository
2. **Domain Restrictions**: Restrict Google Maps API to your domain
3. **Rate Limiting**: Consider implementing rate limiting for form submissions
4. **HTTPS**: Ensure SSL certificate is properly configured

## 📊 Performance Optimization

1. **Image Optimization**: Next.js automatically optimizes images
2. **Lazy Loading**: Components load as needed
3. **Code Splitting**: Automatic with Next.js App Router
4. **Caching**: Vercel provides edge caching automatically

## 🐛 Troubleshooting

### Common Issues:
- **Form not working**: Check Resend API key and email configuration
- **Map not loading**: Verify Google Maps API key and domain restrictions
- **Build failures**: Check for TypeScript errors and missing dependencies
- **Images not displaying**: Ensure images are in `/public/images/` directory

### Debug Commands:
```bash
# Check build locally
npm run build

# Test production build
npm start

# Check for linting issues
npm run lint
```

## 📈 Post-Deployment

1. **Analytics**: Add Google Analytics or Vercel Analytics
2. **SEO**: Update meta tags and add sitemap
3. **Monitoring**: Set up error tracking (Sentry)
4. **Backup**: Regular database backups if using one
5. **Updates**: Keep dependencies updated regularly

## 🎯 Success Metrics

- Page load speed < 3 seconds
- Mobile responsiveness score > 95
- Form submission success rate > 99%
- SEO score > 90
- Accessibility score > 95

Your professional family dentist landing page is now ready for production deployment!
