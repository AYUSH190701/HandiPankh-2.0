import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartProvider } from '@/contexts/CartContext';
import { Toaster } from 'react-hot-toast';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { config } from '@/lib/config';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Handi Pankh - Authentic Hyderabadi Biryani Delivery',
    template: '%s | Handi Pankh'
  },
  description: 'Order authentic Hyderabadi biryani online. Fresh ingredients, traditional recipes, and fast delivery. Best biryani in town with 4.8★ rating.',
  keywords: [
    'biryani', 'hyderabadi biryani', 'food delivery', 'indian food', 'online food order',
    'chicken biryani', 'mutton biryani', 'veg biryani', 'authentic biryani', 'delhi food delivery',
    'handi pankh', 'biryani palam extension', 'dwarka biryani', 'traditional recipes', 'dum biryani',
    'lucknowi biryani', 'kolkata biryani', 'swiggy', 'zomato'
  ],
  authors: [{ name: 'Handi Pankh' }],
  creator: 'Handi Pankh',
  publisher: 'Handi Pankh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(config.app.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: config.app.url,
    title: 'Handi Pankh - Authentic Hyderabadi Biryani Delivery',
    description: 'Order authentic Hyderabadi biryani online. Fresh ingredients, traditional recipes, and fast delivery.',
    siteName: 'Handi Pankh',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Handi Pankh - Authentic Biryani',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handi Pankh - Authentic Hyderabadi Biryani',
    description: 'Order authentic Hyderabadi biryani online. Fresh ingredients, traditional recipes.',
    images: ['/images/og-image.jpg'],
    creator: '@handipankh',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ea580c" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Handi Pankh",
              "description": "Authentic Hyderabadi, Lucknowi & Kolkata Biryani — From our Handi to your Heart",
              "url": config.app.url,
              "telephone": config.contact.phone,
              "email": config.contact.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop NO-1, A-80, Palam Extension, Ramlphal Chowk",
                "addressLocality": "Dwarka, New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110075",
                "addressCountry": "IN"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "5000"
              },
              "priceRange": "₹₹",
              "servesCuisine": "Indian",
              "paymentAccepted": ["Cash", "Credit Card", "UPI"],
              "hasMenu": `${config.app.url}/menu`,
              "openingHours": "Mo-Su 11:00-23:00",
              "sameAs": [
                config.social.instagram,
                config.social.swiggy,
                config.social.zomato
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        <ErrorBoundary>
          <CartProvider>
            <Header />
            <main className="flex-grow" role="main">
              {children}
            </main>
            <Footer />
            <Toaster
              position="bottom-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#333',
                  color: '#fff',
                },
                success: {
                  iconTheme: {
                    primary: '#10B981',
                    secondary: '#fff',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#EF4444',
                    secondary: '#fff',
                  },
                },
              }}
            />
          </CartProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}