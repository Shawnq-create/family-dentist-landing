import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DentaCare Family - Professional Dental Care in Bucharest",
  description: "Professional family dental care in Bucharest. Comprehensive dental services including general dentistry, cosmetic treatments, and pediatric care. Book your appointment today at Strada Maria Rosetti 26A.",
  keywords: "dentist Bucharest, family dental care, dental clinic, teeth cleaning, dental implants, cosmetic dentistry, pediatric dentistry",
  authors: [{ name: "DentaCare Family" }],
  openGraph: {
    title: "DentaCare Family - Professional Dental Care",
    description: "Professional family dental care in Bucharest with modern facilities and experienced staff.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
