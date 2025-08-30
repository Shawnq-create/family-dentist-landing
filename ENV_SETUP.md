# Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Resend API Key (Required for form submissions)
RESEND_API_KEY=re_your_api_key_here

# Google Maps API Key (Optional - for map functionality)
GOOGLE_MAPS_API_KEY=AIzaSy_your_google_maps_api_key_here
```

## Getting API Keys

### Resend (Email Service)
1. Sign up at https://resend.com
2. Verify your domain or use their test domain
3. Generate API key from dashboard
4. Add to `.env.local` file

### Google Maps (Optional)
1. Go to Google Cloud Console: https://console.cloud.google.com
2. Create new project or select existing
3. Enable "Maps JavaScript API"
4. Create credentials (API Key)
5. Add to `.env.local` file

## Important Notes

- The application will build and run without these keys
- Form submissions will show an error message if RESEND_API_KEY is missing
- Maps will show a fallback interface if GOOGLE_MAPS_API_KEY is missing
- Never commit `.env.local` to version control (it's already in .gitignore)

## For Production Deployment

Add these environment variables in your deployment platform (Vercel, Netlify, etc.):
- RESEND_API_KEY
- GOOGLE_MAPS_API_KEY (optional)
