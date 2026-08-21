import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { REAL_IMAGES } from '@/lib/constants/images';
import { config } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About Handi Pankh | Our Biryani Story, Recipes & Values',
  description: 'Handi Pankh was born from a love for authentic dum biryani. Discover how we craft Hyderabadi, Lucknowi & Kolkata biryani using age-old recipes, saffron-infused rice & hand-picked spices — served fresh in Dwarka, Delhi.',
  keywords: [
    'about handi pankh', 'biryani story', 'authentic dum biryani', 'hyderabadi biryani recipe',
    'traditional biryani', 'best biryani brand delhi', 'biryani restaurant dwarka'
  ],
  openGraph: {
    title: 'About Handi Pankh | The Story Behind Delhi\'s Best Biryani',
    description: 'From slow-cooked dum biryani to hand-ground spices — learn how Handi Pankh brings authentic Hyderabadi, Lucknowi & Kolkata biryani to your table.',
  },
};

export default function AboutPage() {
  const stats = [
    { label: 'Happy Customers', value: '50,000+' },
    { label: 'Orders Delivered', value: '1,00,000+' },
    { label: 'Biryani Styles', value: '3' },
    { label: 'Menu Items', value: '25+' },
  ];

  const values = [
    {
      title: 'Fresh & Authentic',
      description: 'Prepared daily with time-honoured recipes and hand-ground spices — never pre-cooked, never frozen.',
      icon: '🍛'
    },
    {
      title: 'Slow-Cooked in Handi',
      description: 'Traditional dum-style cooking sealed in a handi for deep, layered flavour that you can taste in every bite.',
      icon: '🌾'
    },
    {
      title: 'Hygienic Kitchen',
      description: 'Prepared fresh per order in a clean, quality-checked kitchen — your health is our priority.',
      icon: '🏆'
    },
    {
      title: 'Customer First',
      description: 'Your satisfaction is our priority. Every order is made with care and delivered with warmth.',
      icon: '❤️'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              &ldquo;From our Handi to your Heart&rdquo; — authentic biryani crafted with love in Dwarka, Delhi
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Handi Pankh Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Handi Pankh was born from a deep love for authentic biryani. Located in Palam Extension, 
                  Dwarka, New Delhi, we set out to bring the true taste of three legendary biryani 
                  traditions — Shahi Hyderabadi, Nawabi Lucknowi, and Kolkata Dawat — to every table.
                </p>
                <p>
                  Every biryani is slow-cooked dum style in a traditional handi, sealed to lock in 
                  flavour. We use hand-ground spices, premium basmati rice, and fresh ingredients — 
                  prepared to order, never pre-cooked.
                </p>
                <p>
                  Now available on Swiggy and Zomato, we bring the same handi-fresh taste straight 
                  to your doorstep. We also offer takeaway with upto 35% off, and free home 
                  delivery within 2km.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={REAL_IMAGES.restaurant.kitchen}
                  alt="Handi Pankh kitchen"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every number tells a story of trust, quality, and the love of our customers
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our values guide everything we do, from sourcing ingredients to serving customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Online Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Order Online or Visit Us
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            We deliver on Swiggy &amp; Zomato. Or call us for takeaway with upto 35% OFF.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href={config.social.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <Image src="/images/logos/swiggy.jpeg" alt="Swiggy" width={28} height={28} className="rounded-md" />
              Order on Swiggy
            </a>
            <a
              href={config.social.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <Image src="/images/logos/zomato.svg" alt="Zomato" width={28} height={28} />
              Order on Zomato
            </a>
            <Link
              href="/menu"
              className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              📋 View Full Menu
            </Link>
          </div>
          <p className="text-gray-500 text-sm">
            Shop NO-1, A-80, Palam Extension, Ramlphal Chowk Dwarka New Delhi-110075
          </p>
        </div>
      </section>
    </div>
  );
}
