import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle, Star, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 honeycomb-pattern opacity-5" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/Bee Hive Lgo.svg"
                  alt="Bee Hive Villa Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Bee Hive
                </span>
                <span className="text-sm font-medium text-emerald-400 -mt-1">
                  VILLA
                </span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Your eco-friendly escape in Kandy, Sri Lanka. Experience luxury accommodation and unique bee keeping adventures amidst the lush landscapes of the cultural capital.
            </p>
            <div className="flex items-center space-x-2 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="text-sm text-gray-300 ml-2">5.0 Guest Rating</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <a 
                  href="tel:+94729991144" 
                  className="text-gray-300 hover:text-amber-400 transition-colors font-medium"
                  aria-label="Call us"
                >
                  +94 72 999 1144
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <a 
                  href="https://wa.me/94729991144" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
                  aria-label="WhatsApp us"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <a 
                  href="mailto:info@beehivevilla.com" 
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                  aria-label="Email us"
                >
                  info@beehivevilla.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg group-hover:scale-110 transition-transform duration-300 mt-1">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <address className="not-italic text-gray-300 leading-relaxed">
                  71/1, Ogastawatta,<br />
                  Kandy, Central Province,<br />
                  Sri Lanka
                </address>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'About', href: '#about' },
                { name: 'Rooms', href: '#rooms' },
                { name: 'Amenities', href: '#amenities' },
                { name: 'Bee Keeping', href: '#bee-keeping' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Location', href: '#location' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors font-medium hover:translate-x-1 transform duration-300 inline-block"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Stay Connected
            </h3>
            
            {/* Social Media */}
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://facebook.com/beehivevilla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://instagram.com/beehivevilla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <Heart className="h-5 w-5 text-amber-400 mr-2" />
                Newsletter
              </h4>
              <p className="mb-4 text-sm text-gray-300">Get updates on special offers and bee keeping experiences.</p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl text-gray-900 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="w-full btn-primary text-center"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-center lg:text-left">
              <p className="text-gray-300">
                &copy; {new Date().getFullYear()} Bee Hive Villa. All rights reserved.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Crafted with <Heart className="h-4 w-4 text-red-500 inline mx-1" /> for sustainable tourism
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sustainability" className="hover:text-emerald-400 transition-colors">
                Sustainability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 