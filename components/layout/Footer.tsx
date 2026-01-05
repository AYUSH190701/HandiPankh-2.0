import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🍛</span>
              <span className="text-xl font-bold text-orange-400">Handi Pankh</span>
            </div>
            <p className="text-gray-400">
              Authentic Hyderabadi Biryani delivered hot to your doorstep. Taste the tradition!
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="h-5 w-5" />
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
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-400" />
                <span>+91 8882025186</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-400" />
                <span>order@handipankh.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-orange-400 mt-1" />
                <span>G-74, Gali No 10, Som Bazar Road Rajapuri, New Delhi</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-400" />
                <span>Mon - Fri: 11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-400" />
                <span>Sat - Sun: 10:00 AM - 12:00 AM</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-gray-400">Minimum Order: ₹200</p>
              <p className="text-sm text-gray-400">Free Delivery: Above ₹500</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Handi Pankh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}