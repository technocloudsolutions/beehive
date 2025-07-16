import Image from 'next/image';
import { Leaf, Home, Mountain, Sun } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Eco-Friendly Living',
    description: 'Our villa embraces sustainable practices, from solar power to organic gardening, minimizing our environmental impact.'
  },
  {
    icon: Home,
    title: 'Traditional Charm',
    description: 'Experience authentic Sri Lankan architecture blended with modern comforts in our thoughtfully designed spaces.'
  },
  {
    icon: Mountain,
    title: 'Scenic Location',
    description: 'Nestled in the hills of Kandy, enjoy breathtaking views and easy access to cultural attractions.'
  },
  {
    icon: Sun,
    title: 'Natural Harmony',
    description: 'Our bee-keeping initiative supports local biodiversity while offering unique learning experiences.'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Welcome to Bee Hive Villa
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover a unique blend of luxury accommodation and sustainable living in the heart of Kandy, Sri Lanka. Our eco-friendly villa offers a peaceful retreat where nature meets comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/villa-exterior.jpg" // This will need to be replaced with an actual image
              alt="Bee Hive Villa exterior view with lush gardens"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              A Sanctuary of Serenity
            </h3>
            <p className="text-gray-600 mb-6">
              Bee Hive Villa is more than just accommodation; it&apos;s a gateway to experiencing the rich cultural heritage of Kandy while embracing sustainable living. Our property spans over an acre of carefully maintained gardens, creating a peaceful environment for our guests.
            </p>
            <p className="text-gray-600">
              We take pride in our unique bee-keeping program, which not only produces pure, local honey but also contributes to the local ecosystem. Guests can learn about these fascinating creatures and their crucial role in our environment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-green-50 rounded-lg p-6 text-center hover:bg-green-100 transition-colors"
              >
                <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                  <Icon className="h-6 w-6 text-green-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 