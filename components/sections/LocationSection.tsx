import { MapPin, Car, Navigation, Plane, Train, Phone } from 'lucide-react';

const attractions = [
  {
    name: 'Temple of the Sacred Tooth Relic',
    distance: '4.8 km',
    time: '12 minutes',
    description: 'One of Sri Lanka\'s most sacred Buddhist sites, housing a tooth relic of Lord Buddha.'
  },
  {
    name: 'Kandy Lake (Bogambara Lake)',
    distance: '4.3 km',
    time: '11 minutes',
    description: 'A scenic artificial lake in the heart of the city, perfect for evening walks and cultural shows.'
  },
  {
    name: 'Royal Botanical Gardens Peradeniya',
    distance: '2.1 km',
    time: '6 minutes',
    description: 'Extensive gardens featuring diverse plant species, orchid house, and beautiful walking paths.'
  },
  {
    name: 'Kandy City Center',
    distance: '5.2 km',
    time: '14 minutes',
    description: 'Modern shopping complex with local and international brands, restaurants, and entertainment.'
  },
  {
    name: 'Bahirawakanda Vihara Buddha Statue',
    distance: '5.8 km',
    time: '16 minutes',
    description: 'Giant white Buddha statue offering panoramic views of Kandy city and surrounding hills.'
  },
  {
    name: 'Udawattakele Forest Reserve',
    distance: '6.1 km',
    time: '17 minutes',
    description: 'Historic forest sanctuary in the heart of Kandy, perfect for nature walks and bird watching.'
  }
];

export default function LocationSection() {
  const latitude = 7.261185;
  const longitude = 80.609176;

  return (
    <section id="location" className="relative section-padding bg-gradient-earth overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 honeycomb-pattern opacity-5" />
      
      <div className="relative container mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-full px-6 py-2 mb-6">
            <MapPin className="h-5 w-5 text-emerald-600 mr-2" />
            <span className="text-emerald-700 font-medium">Perfect Location</span>
          </div>
          <h2 className="section-title">
            Our Location
          </h2>
          <p className="section-subtitle">
            Perfectly situated in a peaceful area of Kandy, yet close to major attractions. Experience tranquility while staying connected to the city&apos;s cultural heart and natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Interactive Map */}
          <div className="card-modern overflow-hidden animate-slide-up">
            <div className="relative h-[450px]">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sBee%20Hive%20Villa!5e0!3m2!1sen!2s!4v1647850687693!5m2!1sen!2s`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location of Bee Hive Villa in Kandy"
                className="rounded-t-2xl"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gradient-nature mb-6">
                Getting Here
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Our Address</p>
                    <p className="text-gray-600">71/1, Ogastawatta, Kandy</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Coordinates: {latitude}, {longitude}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">From Colombo</p>
                    <p className="text-gray-600">3.5 hours drive via A1 highway</p>
                    <p className="text-sm text-gray-500 mt-1">Scenic mountain route</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Plane className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">From Airport</p>
                    <p className="text-gray-600">4 hours drive via Colombo-Kandy highway</p>
                    <p className="text-sm text-gray-500 mt-1">Airport transfer available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Attractions */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-gradient-gold mb-8">
              Nearby Attractions
            </h3>
            <div className="space-y-6">
              {attractions.map((attraction, index) => (
                <div
                  key={index}
                  className="card-modern card-hover p-6 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {attraction.name}
                  </h4>
                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-2">
                      <div className="p-1.5 bg-gradient-to-r from-amber-100 to-amber-200 rounded-lg">
                        <MapPin className="h-4 w-4 text-amber-600" />
                      </div>
                      <span className="font-medium">{attraction.distance}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="p-1.5 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-lg">
                        <Car className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="font-medium">{attraction.time}</span>
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transportation Options */}
        <div className="card-modern p-10 animate-scale-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 rounded-full px-6 py-2 mb-6">
              <Navigation className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium">Transportation</span>
            </div>
            <h3 className="text-3xl font-bold text-gradient-nature mb-4">
              How to Reach Us
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer various transportation options to make your journey to Bee Hive Villa as comfortable as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                Private Car Service
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We can arrange comfortable private car service from any location in Sri Lanka. Contact us for competitive rates and reliable service.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Train className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                Public Transport
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Regular bus and scenic train services available from Colombo to Kandy. We can assist with schedules and route planning.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Navigation className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                Local Tuk-Tuk
              </h4>
              <p className="text-gray-600 leading-relaxed">
                For local sightseeing, we can arrange trusted tuk-tuk drivers who know the best routes and hidden gems around Kandy.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 pt-12 border-t border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Planning Your Journey?
            </h4>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help you plan the perfect route to Bee Hive Villa. Contact us for personalized travel assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Get Directions
              </a>
              <a
                href="tel:+94729991144"
                className="btn-outline inline-flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call for Assistance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 