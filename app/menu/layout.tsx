import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biryani Menu | Hyderabadi, Lucknowi & Kolkata Biryani — Handi Pankh',
  description: 'Explore Handi Pankh\'s full biryani menu. Order authentic Hyderabadi dum biryani, Lucknowi biryani & Kolkata biryani online. Chicken, mutton, veg, paneer & egg biryani — fresh & fast delivery in Dwarka, Palam Extension, Delhi.',
  keywords: [
    'biryani menu', 'hyderabadi biryani menu', 'chicken biryani order online', 'mutton biryani delivery',
    'veg biryani delhi', 'lucknowi biryani', 'kolkata biryani', 'dum biryani menu',
    'paneer biryani', 'egg biryani', 'chicken 65 biryani', 'boneless chicken biryani',
    'biryani prices', 'best biryani menu delhi', 'online biryani menu dwarka'
  ],
  openGraph: {
    title: 'Full Biryani Menu | Handi Pankh — Dwarka & Palam Extension, Delhi',
    description: 'Hyderabadi, Lucknowi & Kolkata dum biryani — chicken, mutton, veg, paneer, egg & more. Order online for fast delivery in Delhi.',
    images: [{ url: '/images/og-image.jpg', width: 630, height: 630, alt: 'Handi Pankh Biryani Menu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biryani Menu | Handi Pankh Delhi',
    description: 'Full menu: Hyderabadi, Lucknowi & Kolkata biryani. Chicken, Mutton, Veg & more. Order now.',
  },
  alternates: {
    canonical: '/menu',
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
