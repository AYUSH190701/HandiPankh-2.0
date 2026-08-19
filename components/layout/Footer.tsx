import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { config } from '@/lib/config';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logos/main.png"
                alt="Handi Pankh"
                width={160}
                height={160}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-2 italic text-sm">
              &ldquo;From our Handi to your Heart&rdquo;
            </p>
            <p className="text-gray-400 text-sm">
              Authentic Hyderabadi, Lucknowi & Kolkata Biryani — delivered hot to your doorstep.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://instagram.com/handipankh_biriyani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-3">Order Online</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={config.social.swiggy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <Image src="/images/logos/swiggy.jpeg" alt="Swiggy" width={24} height={24} className="rounded-md" />
                  <span className="text-gray-400">Swiggy</span>
                </a>
              </li>
              <li>
                <a
                  href={config.social.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <Image src="/images/logos/zomato.svg" alt="Zomato" width={24} height={24} />
                  <span className="text-gray-400">Zomato</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href={`tel:${config.contact.phone.replace(/\s/g, '')}`} className="hover:text-orange-400 transition-colors">
                  {config.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href={`tel:${config.contact.phone2.replace(/\s/g, '')}`} className="hover:text-orange-400 transition-colors">
                  {config.contact.phone2}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href={`mailto:${config.contact.email}`} className="hover:text-orange-400 transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-orange-400 mt-1 flex-shrink-0" />
                <span>{config.contact.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-400" />
                <span>Mon – Sun: 11:00 AM – 11:00 PM</span>
              </li>
            </ul>
            <div className="mt-4 space-y-1">
              <p className="text-sm text-gray-400">Free Delivery: Upto 2km</p>
              <p className="text-sm text-gray-400">Take Away: Upto 35% OFF</p>
              <p className="text-sm text-gray-400">Home Delivery Available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Handi Pankh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}