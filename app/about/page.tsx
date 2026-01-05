import type { Metadata } from 'next';
import Image from 'next/image';
import { getPlaceholderImage } from '@/lib/constants/images';

export const metadata: Metadata = {
  title: 'About Us - Our Story & Values',
  description: 'Learn about Biryani Pankh - our passion for authentic Hyderabadi biryani, traditional recipes, and commitment to quality ingredients.',
  openGraph: {
    title: 'About Biryani Pankh - Our Story & Values',
    description: 'Discover our journey of bringing authentic Hyderabadi biryani to your doorstep with traditional recipes and premium ingredients.',
  },
};

export default function AboutPage() {
  const stats = [
    { label: 'Years of Experience', value: '25+' },
    { label: 'Happy Customers', value: '50,000+' },
    { label: 'Orders Delivered', value: '2,00,000+' },
    { label: 'Cities Served', value: '15+' },
  ];

  const values = [
    {
      title: 'Authentic Recipes',
      description: 'Traditional Hyderabadi recipes passed down through generations, ensuring every grain of rice is perfectly spiced.',
      icon: '🍛'
    },
    {
      title: 'Premium Ingredients',
      description: 'Only the finest basmati rice, fresh spices, and quality meat sourced from trusted suppliers.',
      icon: '🌾'
    },
    {
      title: 'Hygiene Standards',
      description: 'FSSAI certified kitchen with strict hygiene protocols and regular quality audits.',
      icon: '🏆'
    },
    {
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We ensure every order meets our high standards.',
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
              From a small kitchen in Hyderabad to your doorstep - 
              25 years of authentic biryani tradition
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
                The Journey Began in 1998
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  It all started in the bustling lanes of Hyderabad&apos;s Old City, where our founder 
                  Ustad Mohammed Ali learned the art of biryani making from his grandmother. 
                  Her secret blend of spices and traditional dum cooking method became the 
                  foundation of what is now Biryani Pankh.
                </p>
                <p>
                  What began as a small family business has grown into one of India&apos;s most 
                  trusted biryani brands. Yet, we&apos;ve never compromised on the traditional 
                  methods that make our biryani truly special - slow-cooked in copper pots, 
                  layered with love, and served with pride.
                </p>
                <p>
                  Today, we serve over 1,000 customers daily across 15 cities, but every 
                  plate still carries the same authentic taste and warmth that started 
                  our journey 25 years ago.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={getPlaceholderImage('restaurant', 'kitchen')}
                  alt="Traditional biryani kitchen"
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

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Master Chefs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The skilled hands behind every perfect biryani
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ustad Mohammed Ali',
                role: 'Head Chef & Founder',
                experience: '25+ Years Experience'
              },
              {
                name: 'Chef Ravi Kumar',
                role: 'Senior Biryani Specialist',
                experience: '15+ Years Experience'
              },
              {
                name: 'Chef Fatima Begum',
                role: 'Quality Control Head',
                experience: '12+ Years Experience'
              }
            ].map((chef, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={getPlaceholderImage('person', 'chef')}
                    alt={chef.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {chef.name}
                </h3>
                <p className="text-orange-600 font-medium mb-2">
                  {chef.role}
                </p>
                <p className="text-gray-600">
                  {chef.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Authentic Biryani?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and taste the difference that 25 years of tradition makes
          </p>
          <a
            href="/menu"
            className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Order Now
          </a>
        </div>
      </section>
    </div>
  );
}