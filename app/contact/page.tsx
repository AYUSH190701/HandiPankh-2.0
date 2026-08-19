import type { Metadata } from 'next';
import Image from 'next/image';
import { config } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact Handi Pankh for orders, feedback, or support. Find our location, hours, phone number, and email. We\'re here to help!',
  openGraph: {
    title: 'Contact Handi Pankh - Get in Touch',
    description: 'Reach out to us for orders, feedback, or support. Find our contact details and location information.',
  },
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: [config.contact.phone, config.contact.phone2, 'Call for orders & home delivery'],
      action: `tel:${config.contact.phone.replace(/\s/g, '')}`
    },
    {
      icon: '✉️',
      title: 'Email',
      details: [config.contact.email, 'We reply within 24 hours'],
      action: `mailto:${config.contact.email}`
    },
    {
      icon: '📍',
      title: 'Address',
      details: [config.contact.address, 'Visit our main kitchen'],
      action: `https://maps.google.com?q=${encodeURIComponent(config.contact.address)}`
    },
    {
      icon: '🕒',
      title: 'Hours',
      details: ['11:00 AM - 11:00 PM', 'Open all days of the week'],
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Have questions? Want to place a bulk order? We&apos;re here to help!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <div className="space-y-1">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className={idx === 0 ? "text-gray-900 font-medium" : "text-gray-600"}>
                          {item.action && idx === 0 ? (
                            <a 
                              href={item.action}
                              className="text-orange-600 hover:text-orange-700 transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-6">
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                  <span className="text-xl">📷</span><span>Instagram</span>
                </a>
                <a href={config.social.swiggy} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <Image src="/images/logos/swiggy.jpeg" alt="Swiggy" width={28} height={28} className="rounded-md" />
                  <span className="text-gray-700">Order on Swiggy</span>
                </a>
                <a href={config.social.zomato} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <Image src="/images/logos/zomato.svg" alt="Zomato" width={28} height={28} />
                  <span className="text-gray-700">Order on Zomato</span>
                </a>
                {[].map((social, index) => (
                  <a
                    key={index}
                    href=""
                    className="hidden"
                  >
                    <span></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Order */}
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quick Order via Phone
              </h3>
              <p className="text-gray-700 mb-4">
                Call us directly to place your order. Our team will help you choose 
                the perfect biryani and ensure fast delivery.
              </p>
              <a
                href={`tel:${config.contact.phone.replace(/\s/g, '')}`}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block"
              >
                Call Now: {config.contact.phone}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send us a Message
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="+91 95602 45235"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="order-inquiry">Order Inquiry</option>
                  <option value="bulk-order">Bulk Order</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-vertical"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 mt-1"
                />
                <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">
                  I would like to receive updates about new menu items and special offers
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-200 transition-all"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> For urgent matters or immediate order assistance, 
                please call us at <a href={`tel:${config.contact.phone.replace(/\s/g, '')}`} className="text-orange-600 hover:text-orange-700">{config.contact.phone}</a>. 
                We respond to messages within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What are your delivery hours?",
                answer: "We deliver from 11:00 AM to 10:00 PM, 7 days a week. Last orders are accepted by 9:30 PM."
              },
              {
                question: "What is the minimum order amount?",
                answer: "The minimum order amount is ₹100. We offer free delivery for orders above ₹500."
              },
              {
                question: "Do you cater for events?",
                answer: "Yes! We provide catering services for events, parties, and corporate functions. Contact us for bulk pricing."
              },
              {
                question: "How can I track my order?",
                answer: "You'll receive order updates via SMS and can track your delivery in real-time through our website."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept cash on delivery, all major credit/debit cards, UPI, and digital wallets."
              },
              {
                question: "Do you have vegetarian options?",
                answer: "Absolutely! We have a variety of delicious vegetarian biryanis including Veg Dum Biryani and Paneer Biryani."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}