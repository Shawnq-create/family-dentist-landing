# DentaCare Family - Dental Clinic Landing Page

A professional, elegant landing page for a family dentist practice built with Next.js and Tailwind CSS.

## Features

- **Professional Design**: Blue and white color scheme with modern, clean aesthetics
- **Responsive Layout**: Mobile-first design that works on all devices
- **Appointment Form**: Integrated contact form with Resend email service
- **Service Showcase**: Comprehensive services section with pricing
- **Patient Testimonials**: Social proof with customer reviews
- **Google Maps Integration**: Interactive map showing clinic location
- **Sticky Call Bar**: Always-visible contact information
- **Smooth Navigation**: Scroll-to-section navigation menu

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Service**: Resend
- **Maps**: Google Maps API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Resend API key
- Google Maps API key (optional)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd family-dentist-landing
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
# Create .env.local file with:
RESEND_API_KEY=your_resend_api_key_here
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Configuration

### Email Setup (Resend)

1. Sign up at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your `.env.local` file
4. Update the email addresses in `src/app/api/appointment/route.ts`

### Google Maps Setup

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com)
2. Enable the Maps JavaScript API
3. Add the key to your `.env.local` file
4. Update the map component in `src/components/Contact.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Manual Deployment

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/appointment/     # Form submission API
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── Contact.tsx          # Contact section with map
│   ├── Hero.tsx             # Hero section with form
│   ├── Navigation.tsx       # Main navigation
│   ├── Services.tsx         # Services showcase
│   ├── StickyCallBar.tsx    # Bottom call bar
│   ├── Testimonials.tsx     # Customer testimonials
│   └── TopBar.tsx           # Top contact bar
└── public/
    └── images/              # Static images
```

## Customization

### Colors
Update the color scheme in `tailwind.config.js` and component files.

### Content
- Update clinic information in all components
- Replace placeholder images in `public/images/`
- Modify services and pricing in `Services.tsx`
- Update testimonials in `Testimonials.tsx`

### Contact Information
- Phone: Update `0720.123.123` throughout the codebase
- Address: Update `Strada Maria Rosetti 26A, București 020487`
- Email: Update email addresses in API route and components

## License

This project is licensed under the MIT License.
# Force deployment trigger - Sat Aug 30 18:45:08 CST 2025
