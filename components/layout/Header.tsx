import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Bee Keeping', href: '#bee-keeping' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleMenuToggle();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg border-b border-amber-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link 
              href="/"
              className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
              aria-label="Bee Hive Villa Home"
            >
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:rotate-12">
                <Image
                  src="/Bee Hive Lgo.svg"
                  alt="Bee Hive Villa Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                  Bee Hive
                </span>
                <span className="text-sm font-medium text-emerald-700 -mt-1">
                  VILLA
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-gray-700 hover:text-amber-600 transition-all duration-300 group px-3 py-2"
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button for Desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              href="#contact"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Book your stay"
            >
              Book Your Stay
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 hover:bg-amber-50 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={handleMenuToggle}
              onKeyDown={handleKeyDown}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            mobileMenuOpen ? 'block' : 'hidden'
          } lg:hidden transition-all duration-300 ease-in-out`}
          id="mobile-menu"
        >
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl mx-4 mb-4 shadow-xl border border-amber-100 overflow-hidden">
            <div className="space-y-1 px-4 py-6">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-300 transform hover:translate-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label={`Navigate to ${item.name}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-amber-100">
                <Link
                  href="#contact"
                  className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Book your stay"
                >
                  Book Your Stay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 