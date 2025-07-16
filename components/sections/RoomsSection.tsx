import RoomCard from '@/components/ui/RoomCard';
import { Bed, Clock, Coffee, Star, Shield } from 'lucide-react';

const rooms = [
  {
    id: 'standard-twin-1',
    title: 'Standard Twin Room',
    description: 'Comfortable room with twin beds, perfect for friends or travelers exploring Kandy&apos;s attractions.',
    price: 18,
    imageUrl: '/images/standard-twin.jpg',
    capacity: 2,
    size: 30,
    amenities: ['Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'Hot Water']
  },
  {
    id: 'standard-twin-2',
    title: 'Deluxe Twin Room',
    description: 'Spacious room with twin beds and enhanced amenities, featuring garden views and eco-friendly design.',
    price: 18,
    imageUrl: '/images/standard-twin1.jpg',
    capacity: 2,
    size: 35,
    amenities: ['Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'Hot Water', 'Garden View', 'Mini Fridge']
  },
  {
    id: 'standard-twin-3',
    title: 'Premium Twin Room',
    description: 'Premium room with twin beds, private balcony and stunning mountain views of the Kandy hills.',
    price: 18,
    imageUrl: '/images/standard-twin2.jpg',
    capacity: 2,
    size: 40,
    amenities: ['Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'Hot Water', 'Mountain View', 'Balcony', 'Mini Fridge']
  },
  {
    id: 'standard-twin-4',
    title: 'Luxury Twin Suite',
    description: 'Our most luxurious room with twin beds, separate sitting area and panoramic views of the surrounding nature.',
    price: 18,
    imageUrl: '/images/standard-twin3.jpg',
    capacity: 3,
    size: 50,
    amenities: ['Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'Hot Water', 'Panoramic View', 'Sitting Area', 'Mini Fridge', 'Tea/Coffee Station']
  }
];

const bookingInfo = [
  {
    icon: Clock,
    title: 'Check-in/out',
    details: ['Check-in: 2:00 PM', 'Check-out: 11:00 AM']
  },
  {
    icon: Coffee,
    title: 'Complimentary',
    details: ['Daily breakfast included', 'Welcome refreshments']
  },
  {
    icon: Shield,
    title: 'Flexible Booking',
    details: ['Free cancellation 48hrs', 'Extended stay discounts']
  },
  {
    icon: Star,
    title: 'Premium Service',
    details: ['24/7 concierge', 'Extra bed available']
  }
];

export default function RoomsSection() {
  return (
    <section id="rooms" className="relative section-padding bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-100/50 to-transparent rounded-full translate-y-48 -translate-x-48" />
      
      <div className="relative container mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-full px-6 py-2 mb-6">
            <Bed className="h-5 w-5 text-emerald-600 mr-2" />
            <span className="text-emerald-700 font-medium">Comfortable Accommodations</span>
          </div>
          <h2 className="section-title">
            Our Premium Rooms
          </h2>
          <p className="section-subtitle">
            Choose from our selection of thoughtfully designed rooms, each offering a perfect blend of modern comfort and eco-friendly practices in the heart of Kandy.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 animate-slide-up">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <RoomCard {...room} />
            </div>
          ))}
        </div>

        {/* Booking Information */}
        <div className="card-modern p-10 animate-scale-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-amber-200 rounded-full px-6 py-2 mb-6">
              <Star className="h-5 w-5 text-amber-600 mr-2" />
              <span className="text-amber-700 font-medium">Booking Information</span>
            </div>
            <h3 className="text-3xl font-bold text-gradient-gold mb-4">
              Everything You Need to Know
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;ve made booking simple and flexible to ensure your stay is as comfortable as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookingInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                    {info.title}
                  </h4>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 pt-12 border-t border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Book Your Stay?
            </h4>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the perfect blend of comfort, sustainability, and Sri Lankan hospitality at Bee Hive Villa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Book Now
              </a>
              <a
                href="tel:+94123456789"
                className="btn-outline inline-flex items-center justify-center"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 