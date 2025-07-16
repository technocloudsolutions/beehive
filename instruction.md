# Comprehensive Guide: Building an SEO-Friendly, Mobile-Responsive React Landing Page for Bee Hive Villa & Bee Keeping

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack & Initial Setup](#tech-stack)
3. [Project Structure](#project-structure)
4. [Core Components Implementation](#core-components)
5. [SEO Optimization](#seo-optimization)
6. [Performance & Best Practices](#performance)
7. [Deployment Guidelines](#deployment)

## Project Overview
The goal is to create a compelling online presence for a 4-room eco-friendly property in Kandy, Sri Lanka, targeting international tourists. The website showcases luxurious accommodation and unique bee-keeping experiences while emphasizing sustainability and eco-tourism.

## Tech Stack
- **Frontend Framework**: Next.js 14 (for better SEO and performance)
- **Language**: TypeScript (for type safety and better developer experience)
- **Styling**: TailwindCSS with Shadcn/ui components
- **State Management**: TanStack Query v5 (for API data fetching)
- **Form Handling**: React Hook Form with Zod validation
- **Animation**: Framer Motion
- **Image Optimization**: Next/Image
- **Icons**: Lucide Icons
- **Analytics**: Vercel Analytics
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint + Prettier

### Initial Setup
```bash
# Create new Next.js project with all modern tooling
npx create-next-app@latest bee-hive-villa --typescript --tailwind --eslint --app --src-dir

# Install additional dependencies
npm install @tanstack/react-query @hookform/resolvers zod framer-motion lucide-react @vercel/analytics
npm install -D @testing-library/react @testing-library/jest-dom vitest

# Install Shadcn/ui
npx shadcn-ui@latest init
```

## Project Structure
```
src/
├── app/                   # Next.js App Router pages
├── components/           
│   ├── ui/               # Reusable UI components (Shadcn)
│   ├── sections/         # Page sections (Hero, Rooms, etc.)
│   └── layout/           # Layout components (Header, Footer)
├── lib/                  # Utility functions and configurations
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
├── styles/               # Global styles and Tailwind config
└── tests/                # Test files
```

## Core Components Implementation

### App.js (Next.js App Router)
```typescript
// src/app/page.tsx
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Helmet } from 'react-helmet'; // Keep this import for now, though it's not directly used in Next.js
import GlobalStyles from './styles/GlobalStyles'; // Keep this import for now, though it's not directly used in Next.js
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutProperty from './components/AboutProperty';
import RoomSection from './components/RoomSection';
import AmenitiesSection from './components/AmenitiesSection';
import BeeKeepingSection from './components/BeeKeepingSection';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import ContactForm from './components/ContactForm';

export const metadata: Metadata = {
  title: {
    default: 'Bee Hive Villa - Luxury Accommodation & Bee Keeping Experience',
    template: '%s | Bee Hive Villa'
  },
  description: 'Experience luxury eco-friendly accommodation and unique bee keeping activities in Kandy, Sri Lanka. Perfect for sustainable tourism and nature lovers.',
  openGraph: {
    // ... OpenGraph metadata
  },
  // ... other metadata
};

export default function Home() {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Helmet>
          {/* SEO: Main Page Title & Meta Description */}
          <title>Bee Hive Villa - Accommodation & Bee Keeping in Kandy, Sri Lanka</title>
          <meta name="description" content="Discover luxurious rooms and unique bee keeping experiences in Kandy, Sri Lanka. Book your eco-friendly stay at our serene villa, ideal for nature lovers and tourists. Best Kandy hotels with sustainable tourism." />
          <meta name="keywords" content="Kandy hotels, Kandy rooms, Kandy accommodation, Kandy villa, Sri Lanka accommodation, Kandy homestay, boutique hotel Kandy, private villa Kandy, bee keeping Kandy, eco-tourism Kandy, sustainable travel Sri Lanka, responsible travel Sri Lanka, Kandy apiary stay" />
          <link rel="canonical" href="https://www.yourdomain.com/" /> {/* IMPORTANT: Replace with your actual domain URL */}

          {/* Open Graph / Facebook Meta Tags */}
          <meta property="og:title" content="Bee Hive Villa - Accommodation & Bee Keeping" />
          <meta property="og:description" content="Discover luxurious rooms and unique bee keeping experiences in Kandy, Sri Lanka. Book your eco-friendly stay at our serene villa." />
          <meta property="og:image" content="https://www.yourdomain.com/images/hero-banner.jpg" /> {/* IMPORTANT: Replace with an actual URL to a high-quality image of your villa/bee-keeping */}
          <meta property="og:url" content="https://www.yourdomain.com/" />
          <meta property="og:type" content="website" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Bee Hive Villa - Accommodation & Bee Keeping" />
          <meta name="twitter:description" content="Discover luxurious rooms and unique bee keeping experiences in Kandy, Sri Lanka. Book your eco-friendly stay at our serene villa." />
          <meta name="twitter:image" content="https://www.yourdomain.com/images/hero-banner.jpg" />

          {/* Schema Markup (Structured Data) for Hotel */}
          <script type="application/ld+json">
            {`
              {
                "@context": "http://schema.org",
                "@type": "Hotel",
                "name": "Bee Hive Villa & Bee Keeping",
                "description": "Luxurious rooms and unique bee keeping experiences in Kandy, Sri Lanka, perfect for eco-friendly tourists and nature lovers.",
                "url": "https://www.yourdomain.com/",
                "image": "https://www.yourdomain.com/images/bee-hive-villa-hero.jpg",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Your Street Address Here", // REPLACE with your actual street address
                  "addressLocality": "Kandy",
                  "addressRegion": "Central Province",
                  "postalCode": "Your Postal Code Here", // REPLACE with your actual postal code
                  "addressCountry": "LK"
                },
                "telephone": "+94XXXXXXXXX", // REPLACE with your actual phone number
                "priceRange": "$$", // Example: "$" for budget, "$$" for moderate, "$$$" for luxury
                "starRating": {
                  "@type": "Rating",
                  "ratingValue": "4.5", // Rate your property out of 5
                  "bestRating": "5"
                },
                "hasMap": "https://maps.app.goo.gl/YourGoogleMapsLink", // REPLACE with your actual Google Maps URL
                "sameAs": [ // Optional: Social Media links
                  "https://www.facebook.com/yourbeehivevilla", // REPLACE
                  "https://www.instagram.com/yourbeehivevilla" // REPLACE
                ],
                "amenityFeature": [
                  {
                    "@type": "LocationFeatureSpecification",
                    "value": "Free Wi-Fi"
                  },
                  {
                    "@type": "LocationFeatureSpecification",
                    "value": "Free Parking"
                  },
                  {
                    "@type": "LocationFeatureSpecification",
                    "value": "Air Conditioning"
                  },
                  {
                    "@type": "LocationFeatureSpecification",
                    "value": "Hot Water"
                  },
                  {
                    "@type": "LocationFeatureSpecification",
                    "value": "Garden View"
                  },
                  {
                    "@type": "LocationFeatureSpecification",
                    "value": "Bee Keeping Experience"
                  },
                  {
                    "@type": "LocationFeatureSpecification",
                    "value": "Sustainable Tourism Practices"
                  }
                ],
                "additionalProperty": {
                  "@type": "PropertyValue",
                  "name": "Eco-friendly Initiatives",
                  "value": "On-site bee keeping, organic garden, waste recycling program, local community support."
                }
              }
            `}
          </script>
        </Helmet>

        <Header />
        <main>
          <HeroSection />
          <AboutProperty />
          <RoomSection />
          <AmenitiesSection />
          <BeeKeepingSection />
          <GallerySection />
          <LocationSection />
          <ContactForm />
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
```

### Global Styles (src/styles/GlobalStyles.js)
```typescript
// src/styles/GlobalStyles.tsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #4CAF50;
    --secondary-color: #FFC107;
    --text-color: #333;
    --light-text-color: #666;
    --background-light: #f4f4f4;
    --white: #fff;
    --dark-green: #388E3C;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background: var(--background-light);
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  p {
    margin-bottom: 1rem;
  }

  section {
    padding: 4rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    section {
      padding: 2rem 0.5rem;
    }
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
    h3 { font-size: 1.5rem; }
  }

  @media (max-width: 480px) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.8rem; }
    p { font-size: 0.9rem; }
  }
`;

export default GlobalStyles;
```

### Hero Section (src/components/HeroSection.js)
```typescript
// src/components/HeroSection.tsx
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'; // Changed from 'react-icons' to 'next/image'

const HeroContainer = styled.section`
  background: url('/images/bee-hive-villa-hero.jpg') no-repeat center center/cover;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
  text-align: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  z-index: 2;
  padding: 1rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: var(--white);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    max-width: 800px;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
  }

  a {
    background: var(--primary-color);
    color: var(--white);
    padding: 0.8rem 2rem;
    border-radius: 5px;
    font-size: 1.2rem;
    transition: background 0.3s ease;

    &:hover {
      background: var(--dark-green);
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.8rem;
    }
    p {
      font-size: 1.2rem;
    }
    a {
      font-size: 1rem;
      padding: 0.7rem 1.5rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
    height: 70vh;
  }
`;

function HeroSection() {
  return (
    <HeroContainer id="hero">
      <HeroContent>
        <h1>Your Eco-Friendly Escape in Kandy, Sri Lanka</h1>
        <p>Experience serene accommodation and unique bee keeping opportunities amidst the lush landscapes of Kandy. Perfect for nature lovers and cultural explorers.</p>
        <a href="#contact">Book Your Sustainable Stay</a>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
```

### Bee Keeping Section (src/components/BeeKeepingSection.js)
```typescript
// src/components/BeeKeepingSection.tsx
import React from 'react';
import styled from 'styled-components';
import { FaHive, FaLeaf, FaSeedling, FaGrinStars } from 'react-icons/fa';
import Image from 'next/image'; // Changed from 'react-icons' to 'next/image'

const BeeKeepingContainer = styled.section`
  background: var(--white);
  padding: 4rem 1rem;
  text-align: center;
`;

const BeeKeepingContent = styled.div`
  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: var(--primary-color);
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto 2rem auto;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  background: var(--background-light);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 3rem;
    color: var(--secondary-color);
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
    color: var(--dark-green);
  }

  p {
    font-size: 1rem;
    color: var(--light-text-color);
  }
`;

const LearnMoreButton = styled.a`
  display: inline-block;
  background: var(--secondary-color);
  color: var(--white);
  padding: 0.8rem 2rem;
  border-radius: 5px;
  font-size: 1.2rem;
  margin-top: 3rem;
  transition: background 0.3s ease;

  &:hover {
    background: #FFD740;
  }
`;

function BeeKeepingSection() {
  return (
    <BeeKeepingContainer id="bee-keeping">
      <BeeKeepingContent>
        <h2>Experience Sustainable Bee Keeping at Our Bee Hive Villa</h2>
        <p>Beyond comfortable accommodation, our Kandy villa offers a unique opportunity to connect with nature through hands-on bee keeping experiences. Learn about local apiary practices and the vital role of bees in Sri Lanka's ecosystem, contributing to sustainable tourism.</p>

        <FeaturesGrid>
          <FeatureItem>
            <FaHive className="icon" />
            <h3>Interactive Learning Sessions</h3>
            <p>Join our guided tours to the beehives, learn about honey production, and observe the fascinating world of bees up close and safely.</p>
          </FeatureItem>
          <FeatureItem>
            <FaLeaf className="icon" />
            <h3>Eco-Friendly Practices</h3>
            <p>Discover our commitment to sustainable living and how our bee keeping efforts contribute to local biodiversity and environmental conservation.</p>
          </FeatureItem>
          <FeatureItem>
            <FaGrinStars className="icon" />
            <h3>Taste Fresh Local Honey</h3>
            <p>Indulge in pure, freshly harvested Kandy honey directly from our villa, a sweet and authentic souvenir of your eco-friendly stay.</p>
          </FeatureItem>
        </FeaturesGrid>

        <LearnMoreButton href="#contact">Inquire About Bee Keeping Tours</LearnMoreButton>
      </BeeKeepingContent>
    </BeeKeepingContainer>
  );
}

export default BeeKeepingSection;
```

### General Component-Specific Instructions
For other sections:

RoomSection.js: Create separate cards for each of your 4 rooms, including room name, description, high-quality images, and a "View Details" or "Book Room" button. For SEO, embed keywords like "Kandy rooms," "private room Kandy," and "family accommodation Kandy" naturally in descriptions and ensure descriptive alt tags for all images.

AboutProperty.js: Detail the unique aspects of your property, Kandy's significance, and other relevant information for foreign guests (e.g., peaceful environment, cultural immersion, eco-friendly focus).

AmenitiesSection.js: Clearly list all facilities such as Wi-Fi, parking, hot water, AC, garden, kitchen access, common areas, and specifically, "Fresh Local Honey Tasting." Consider using react-icons for visual enhancement.

GallerySection.js: Display a responsive grid of high-quality, web-optimized photos. Include images of the property, rooms, garden, the Kandy area, and critically, several images depicting the bee-keeping activities and the surrounding natural beauty. Each image must have descriptive alt text incorporating relevant keywords (e.g., alt="Sustainable Beehives in Bee Hive Villa Garden, Sri Lanka").

LocationSection.js: Embed a Google Map of your property's location and provide distances/travel times to major Kandy attractions (e.g., Temple of the Tooth, Kandy Lake). For SEO, incorporate phrases like "accommodation near Kandy Lake" and "hotels near Temple of the Tooth Kandy" in text descriptions.

ContactForm.js: Design a user-friendly booking inquiry form. Include fields for Name, Email, Phone, Check-in/Check-out Dates, Number of Guests, Special Requests, and a crucial checkbox/field for "Interested in Bee Keeping Experience?". For form submissions, consider integrating with a service like Formspree for simplicity or mention the need for a basic Node.js backend for more complex handling.

## SEO Optimization

### Keyword Research & Placement
Primary Keywords: Focus on "Kandy hotels," "Kandy rooms," "Kandy accommodation," "Kandy villa," "Sri Lanka accommodation Kandy," "boutique hotel Kandy," "bee keeping Kandy," "eco-tourism Kandy," and "sustainable travel Sri Lanka."

Secondary Keywords: Include "Homestay Kandy," "private villa Kandy," "rooms for rent Kandy," "Kandy guest house," "best places to stay Kandy," "learn bee keeping Sri Lanka," "nature retreats Kandy," "responsible travel Sri Lanka," and "honey harvesting Kandy."

Placement Strategy: Integrate keywords strategically in your Page Title (<title>), Meta Description (<meta name="description">) (ensure it's compelling and includes the bee-keeping aspect), Headings (H1, H2, H3), and throughout the Content Body. Always prioritize natural language over "keyword stuffing." Every image must have descriptive Alt Text (alt attribute) that includes relevant keywords to aid accessibility and SEO.

### Mobile Responsiveness
Google strongly prioritizes mobile-friendly websites. Implement a responsive design using CSS media queries to ensure all components dynamically adjust and display optimally across various screen sizes. Use max-width: 100%; height: auto; for fluid images to prevent overflow and maintain aspect ratios. Design buttons and interactive elements to be large and well-spaced for easy tapping on touch devices. Ensure the navigation menu is easily accessible and usable on mobile (e.g., a hamburger menu).

### Performance Optimization
Website loading speed significantly impacts user experience and SEO rankings. Optimize images by compressing large files without quality loss and using modern, web-optimized formats like WebP or efficiently compressed JPEGs before placing them in the public/images folder. Implement lazy loading for images that are not immediately visible on initial page load (e.g., by adding loading="lazy" to <img> tags). Create React App automatically minifies CSS and JavaScript files during the build process, reducing file size. Finally, ensure your hosting environment leverages browser caching for static assets to improve load times for returning visitors.

## Performance & Best Practices

### Image Optimization
```typescript
// components/sections/RoomCard.tsx
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface RoomCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  amenities: string[];
}

export const RoomCard = ({
  title,
  description,
  imageUrl,
  price,
  amenities
}: RoomCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={`${title} - Luxury Room at Bee Hive Villa`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          loading="lazy"
        />
      </div>
      {/* Rest of the component */}
    </div>
  );
};
```

### SEO Optimization
```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Bee Hive Villa - Luxury Accommodation & Bee Keeping Experience',
    template: '%s | Bee Hive Villa'
  },
  description: 'Experience luxury eco-friendly accommodation and unique bee keeping activities in Kandy, Sri Lanka. Perfect for sustainable tourism and nature lovers.',
  openGraph: {
    // ... OpenGraph metadata
  },
  // ... other metadata
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Performance Monitoring
```typescript
// lib/monitoring.ts
export const vitalsCallback = (metric: any) => {
  // Log Core Web Vitals & custom metrics
  console.log(metric);
  
  // Send to analytics
  if (metric.name === 'FCP') {
    // Track First Contentful Paint
  }
  if (metric.name === 'LCP') {
    // Track Largest Contentful Paint
  }
  // ... other metrics
};
```

## Deployment Guidelines

### Pre-deployment Checklist
1. Run all tests: `npm run test`
2. Check build output: `npm run build`
3. Verify TypeScript: `npm run type-check`
4. Run lighthouse audit
5. Test all forms and interactions
6. Verify meta tags and SEO elements
7. Check responsive design
8. Validate accessibility (WCAG compliance)

### Recommended Hosting
- Vercel (preferred for Next.js)
- Netlify (alternative)
- AWS Amplify (for enterprise setup)

### Environment Variables
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=https://beehivevilla.com
EMAIL_SERVICE_API_KEY=your_email_service_key
```

### Post-deployment
1. Submit sitemap to Google Search Console
2. Set up monitoring and alerts
3. Configure backup strategy
4. Set up CI/CD pipeline
5. Monitor Core Web Vitals
6. Set up error tracking (e.g., Sentry)

Remember to replace all placeholder values (API keys, URLs, etc.) with actual production values before deployment.