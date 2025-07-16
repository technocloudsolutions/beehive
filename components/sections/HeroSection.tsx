import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, MapPin, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-banner.jpg"
          alt="Bee Hive Villa - Luxury Accommodation in Kandy"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-amber-900/40" />
        {/* Honeycomb Pattern Overlay */}
        <div className="absolute inset-0 honeycomb-pattern" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce delay-1000">
        <div className="glass-effect rounded-full p-3">
          <Sparkles className="h-6 w-6 text-amber-400" />
        </div>
      </div>
      <div className="absolute top-32 right-16 animate-bounce delay-2000">
        <div className="glass-effect rounded-full p-3">
          <Star className="h-6 w-6 text-amber-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="glass-effect rounded-full px-6 py-2 mb-8 animate-fade-in">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium">Kandy, Sri Lanka</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl mx-auto animate-slide-up">
          Your 
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            {" "}Eco-Friendly{" "}
          </span>
          Escape in Kandy
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-200 text-gray-100">
          Experience luxury accommodation and unique bee keeping adventures amidst the lush landscapes of Sri Lanka&apos;s cultural capital
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-scale-in delay-400">
          <Link
            href="#rooms"
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-full transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            aria-label="View our rooms"
          >
            <span className="relative z-10">Explore Rooms</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
          <Link
            href="#bee-keeping"
            className="group glass-effect hover:bg-white/20 text-white px-10 py-4 rounded-full transition-all duration-300 text-lg font-semibold border-2 border-white/30 hover:border-amber-400/50 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            aria-label="Learn about our bee keeping experience"
          >
            <span className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5" />
              <span>Bee Keeping Experience</span>
            </span>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 animate-fade-in delay-600">
          <div className="glass-effect rounded-2xl px-6 py-4 text-center">
            <div className="text-2xl font-bold text-amber-400">5★</div>
            <div className="text-sm text-gray-200">Guest Rating</div>
          </div>
          <div className="glass-effect rounded-2xl px-6 py-4 text-center">
            <div className="text-2xl font-bold text-amber-400">100%</div>
            <div className="text-sm text-gray-200">Eco-Friendly</div>
          </div>
          <div className="glass-effect rounded-2xl px-6 py-4 text-center">
            <div className="text-2xl font-bold text-amber-400">24/7</div>
            <div className="text-sm text-gray-200">Concierge</div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="glass-effect w-10 h-16 rounded-full border-2 border-white/30 flex items-start justify-center p-3">
          <div className="w-1.5 h-4 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full animate-scroll" />
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          75% { transform: translateY(1rem); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </section>
  );
} 