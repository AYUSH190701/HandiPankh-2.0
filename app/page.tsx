'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { MenuCard } from '@/components/menu/MenuCard';
import { menuItems } from '@/lib/data/menu';
import { REAL_IMAGES } from '@/lib/constants/images';
import { config } from '@/lib/config';
import { 
  ChevronRight, Truck, Clock, Award, Star, ArrowRight, Shield, 
  MapPin, CheckCircle, Users, Flame, Heart, Phone
} from 'lucide-react';

const stats = [
  { label: 'Happy Customers', value: '50,000+', icon: Users },
  { label: 'Orders Delivered', value: '1,00,000+', icon: Truck },
  { label: 'Years of Service', value: '10+', icon: Award },
  { label: 'Menu Items', value: '25+', icon: Flame }
];

const features = [
  {
    icon: Award,
    title: 'Fresh & Authentic',
    description: 'Prepared daily with time-honoured recipes and hand-ground spices',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Truck,
    title: 'Slow-Cooked in Handi',
    description: 'Traditional dum-style cooking for deep, layered flavour every time',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: Shield,
    title: 'Hygienic Kitchen',
    description: 'Prepared fresh per order in a clean, quality-checked kitchen',
    color: 'bg-green-100 text-green-600'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Food Blogger',
    rating: 5,
    text: 'The authentic flavours and perfect blend of spices make this the best biryani I have had in Delhi. Highly recommended!',
    image: REAL_IMAGES.avatars[0]
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Regular Customer',
    rating: 5,
    text: 'Consistently excellent quality and timely delivery. The Hyderabadi chicken biryani is my absolute favourite!',
    image: REAL_IMAGES.avatars[1]
  },
  {
    id: 3,
    name: 'Anjali Patel',
    role: 'Corporate Client',
    rating: 5,
    text: 'Perfect for office parties and events. Great variety, authentic taste, and professional service every time.',
    image: REAL_IMAGES.avatars[2]
  }
];

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
    </div>
  );
}

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mounted, setMounted] = useState(false);
  // Show first 4 biryanis as featured
  const featuredItems = menuItems.slice(0, 4);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-gradient-to-br from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Scrolling Biryani Images Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="flex animate-scroll-infinite">
            {[...Array(12)].map((_, index) => {
              const imgs = [
                REAL_IMAGES.biryani.chickenHyd, REAL_IMAGES.biryani.muttonHyd,
                REAL_IMAGES.biryani.vegHyd, REAL_IMAGES.biryani.paneerHyd,
                REAL_IMAGES.biryani.eggHyd
              ];
              return (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-48 h-48 m-4 rounded-2xl overflow-hidden transform rotate-12"
                >
                  <Image
                    src={imgs[index % imgs.length]}
                    alt={`Biryani ${index + 1}`}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    priority={index < 4}
                  />
                </div>
              );
            })}
            {[...Array(12)].map((_, index) => {
              const imgs = [
                REAL_IMAGES.biryani.chickenHyd, REAL_IMAGES.biryani.muttonHyd,
                REAL_IMAGES.biryani.vegHyd, REAL_IMAGES.biryani.paneerHyd,
                REAL_IMAGES.biryani.eggHyd
              ];
              return (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-48 h-48 m-4 rounded-2xl overflow-hidden transform rotate-12"
                >
                  <Image
                    src={imgs[index % imgs.length]}
                    alt={`Biryani ${index + 13}`}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Flame className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium">From our Handi to your Heart</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Authentic Hyderabadi Biryani,
              <span className="text-yellow-400 block mt-2">Delivered Hot & Fresh</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
              Three legendary styles — Shahi Hyderabadi, Nawabi Lucknowi, and Kolkata Dawat — 
              slow-cooked dum style with hand-ground spices and premium basmati rice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/menu">
                <Button size="lg" className="group bg-white text-orange-600 hover:bg-gray-100">
                  View Full Menu
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href={`tel:${config.contact.phone.replace(/\s/g, '')}`}>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600">
                  <Phone className="mr-2 h-4 w-4" />
                  Call to Order
                </Button>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 p-1.5 rounded-full">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span>Fresh Every Order</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-yellow-500 p-1.5 rounded-full">
                  <Star className="h-4 w-4 text-white" />
                </div>
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-500 p-1.5 rounded-full">
                  <Truck className="h-4 w-4 text-white" />
                </div>
                <span>Free Delivery upto 2km</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Online Banner */}
      <section className="py-6 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <p className="text-lg font-semibold tracking-wide uppercase text-gray-300">Order on</p>
            <div className="flex items-center gap-6">
              <a
                href={config.social.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-base transition-colors shadow-lg"
              >
                <Image src="/images/logos/swiggy.jpeg" alt="Swiggy" width={24} height={24} className="rounded-md" />
                Order on Swiggy
              </a>
              <a
                href={config.social.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-bold text-base transition-colors shadow-lg"
              >
                <Image src="/images/logos/zomato.svg" alt="Zomato" width={24} height={24} />
                Order on Zomato
              </a>
            </div>
            <p className="text-sm text-gray-400">Upto 35% OFF on Takeaway Orders</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Handi Pankh?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine traditional dum cooking methods with fresh ingredients to bring you the best biryani experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-orange-600 mb-4">
              <Heart className="h-5 w-5" />
              <span className="font-medium">Customer Favorites</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Featured Biryanis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked selections loved by our customers every day
            </p>
          </div>
          
          <Suspense fallback={<LoadingSpinner />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </Suspense>
          
          <div className="text-center mt-12">
            <Link href="/menu">
              <Button variant="outline" size="lg">
                View Complete Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Customers Say</h2>
            <p className="text-gray-600">Join thousands of satisfied biryani lovers</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="hidden md:block">
                  <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                    &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                  </blockquote>
                  
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-orange-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Authentic Biryani?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Order online via Swiggy or Zomato, or call us directly for takeaway & home delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a href={config.social.swiggy} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 flex items-center gap-2">
                <Image src="/images/logos/swiggy.jpeg" alt="Swiggy" width={22} height={22} className="rounded-md" />
                Order on Swiggy
              </Button>
            </a>
            <a href={config.social.zomato} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 border-0 flex items-center gap-2">
                <Image src="/images/logos/zomato.svg" alt="Zomato" width={22} height={22} />
                Order on Zomato
              </Button>
            </a>
            <a href={`tel:${config.contact.phone.replace(/\s/g, '')}`}>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600">
                <Phone className="mr-2 h-5 w-5" />
                {config.contact.phone}
              </Button>
            </a>
          </div>
          <p className="text-white/80 mt-6 text-sm flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4" />
            {config.contact.address}
          </p>
        </div>
      </section>
    </div>
  );
}
