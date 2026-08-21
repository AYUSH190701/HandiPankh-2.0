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
    default: 'Handi Pankh | Best Biryani in Dwarka & Palam Extension, Delhi',
    template: '%s | Handi Pankh Biryani'
  },
  description: 'Order the best biryani in Dwarka & Palam Extension, Delhi. Handi Pankh serves authentic Hyderabadi dum biryani, Lucknowi biryani & Kolkata biryani. Chicken, Mutton & Veg biryani — fresh, flavourful & delivered fast. Rated 4.8★ by 50,000+ customers.',
  keywords: [
    // Core product
    'biryani', 'best biryani', 'dum biryani', 'authentic biryani', 'biryani delivery',
    // Varieties
    'hyderabadi biryani', 'lucknowi biryani', 'kolkata biryani', 'nawabi biryani', 'awadhi biryani',
    // Proteins
    'chicken biryani', 'mutton biryani', 'veg biryani', 'paneer biryani', 'egg biryani',
    'chicken 65 biryani', 'boneless chicken biryani', 'mutton dum biryani',
    // Location
    'biryani in dwarka', 'biryani in palam extension', 'biryani near me', 'best biryani in delhi',
    'biryani delivery dwarka', 'biryani delivery palam extension', 'biryani delivery new delhi',
    // Starters
    'kebab', 'chicken tikka', 'seekh kebab', 'malai tikka', 'paneer 65', 'chicken 65',
    // Brand
    'handi pankh', 'handipankh biryani', 'handi pankh delhi',
    // Ordering
    'order biryani online', 'biryani swiggy', 'biryani zomato', 'online biryani order delhi',
    // Qualifiers
    'fresh biryani', 'homestyle biryani', 'restaurant style biryani', 'traditional biryani recipe'
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
    locale: 'en_IN',
    url: config.app.url,
    title: 'Handi Pankh | Best Biryani in Dwarka & Palam Extension, Delhi',
    description: 'Order the best biryani in Dwarka & Palam Extension, Delhi. Authentic Hyderabadi, Lucknowi & Kolkata dum biryani — chicken, mutton & veg. Rated 4.8★ by 50,000+ customers.',
    siteName: 'Handi Pankh Biryani',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 630,
        height: 630,
        alt: 'Handi Pankh - Authentic Hyderabadi Dum Biryani Delhi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handi Pankh | Best Biryani in Delhi — Hyderabadi, Lucknowi & Kolkata',
    description: 'Authentic dum biryani in Dwarka & Palam Extension, Delhi. Chicken, Mutton & Veg biryani — fresh & fast delivery. 4.8★ rated.',
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
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
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
        <link rel="icon" href="/favicon.png" type="image/png" />
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
              "logo": `${config.app.url}/images/logos/main.png`,
              "image": `${config.app.url}/images/og-image.jpg`,
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
              "servesCuisine": ["Indian", "Biryani", "Hyderabadi", "Mughlai", "Awadhi"],
              "paymentAccepted": ["Cash", "Credit Card", "UPI"],
              "hasMenu": `${config.app.url}/menu`,
              "openingHours": "Mo-Su 11:00-23:00",
              "keywords": "biryani, hyderabadi biryani, dum biryani, chicken biryani, mutton biryani, best biryani dwarka, best biryani palam extension, delhi biryani",
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