'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import RoomsSection from '@/components/sections/RoomsSection';
import AmenitiesSection from '@/components/sections/AmenitiesSection';
import BeeKeepingSection from '@/components/sections/BeeKeepingSection';
import GallerySection from '@/components/sections/GallerySection';
import LocationSection from '@/components/sections/LocationSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Rooms Section */}
        <RoomsSection />

        {/* Amenities Section */}
        <AmenitiesSection />

        {/* Bee Keeping Section */}
        <BeeKeepingSection />

        {/* Gallery Section */}
        <GallerySection />

        {/* Location Section */}
        <LocationSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
