import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Droplet, Bath, Wind, Users, MessageCircle, Star, Eye, Heart } from 'lucide-react';

interface RoomCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  capacity: number;
  size: number;
  amenities: string[];
  id: string;
}

const amenityIcons: Record<string, typeof Wifi> = {
  'Wi-Fi': Wifi,
  'Hot Water': Droplet,
  'Private Bathroom': Bath,
  'Air Conditioning': Wind,
  'Garden View': Eye,
  'Mountain View': Eye,
  'Panoramic View': Eye,
  'Balcony': Users,
  'Mini Fridge': Users,
  'Sitting Area': Users,
  'Tea/Coffee Station': Users,
};

export default function RoomCard({
  title,
  description,
  price,
  imageUrl,
  capacity,
  size,
  amenities
}: RoomCardProps) {
  const whatsappMessage = encodeURIComponent(`Hi, I&apos;m interested in booking the ${title} at Bee Hive Villa for $${price} per night.`);
  const whatsappLink = `https://wa.me/94729991144?text=${whatsappMessage}`;

  return (
    <div className="group relative card-modern card-hover overflow-hidden">
      {/* Price Badge */}
      <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
        ${price}
        <span className="text-sm font-medium opacity-90">/night</span>
      </div>

      {/* Favorite Icon */}
      <div className="absolute top-4 right-4 z-10 p-3 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:bg-white/90">
        <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
      </div>

      {/* Room Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${title} - Luxury Room at Bee Hive Villa`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        
        {/* View Details Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="glass-effect text-white px-6 py-3 rounded-full font-medium">
            View Details
          </div>
        </div>
      </div>

      {/* Room Details */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
            {title}
          </h3>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
        
        {/* Quick Info */}
        <div className="flex items-center gap-6 mb-4 text-gray-600">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-r from-amber-100 to-amber-200 rounded-lg">
              <Users className="h-4 w-4 text-amber-600" />
            </div>
            <span className="font-medium">Up to {capacity} guests</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-lg">
              <span className="text-sm font-bold text-emerald-600">{size}</span>
            </div>
            <span className="font-medium">{size} m²</span>
          </div>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        {/* Amenities */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-gray-800 mb-3">Room Amenities</h4>
          <div className="grid grid-cols-2 gap-3">
            {amenities.map((amenity) => {
              const Icon = amenityIcons[amenity] || Users;
              return (
                <div
                  key={amenity}
                  className="flex items-center gap-2 text-sm text-gray-700 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  title={amenity}
                >
                  <Icon className="h-4 w-4 text-amber-600 flex-shrink-0" aria-hidden="true" />
                  <span className="font-medium">{amenity}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-primary text-center flex items-center justify-center gap-2"
            aria-label={`Book ${title} via WhatsApp`}
          >
            <MessageCircle className="h-5 w-5" />
            Book Now
          </a>
          <Link
            href={`#gallery`}
            className="flex-1 btn-outline text-center flex items-center justify-center gap-2"
            aria-label={`View more photos of ${title}`}
          >
            <Eye className="h-5 w-5" />
            View Photos
          </Link>
        </div>
      </div>

      {/* Special Badge for Premium Rooms */}
      {price > 30 && (
        <div className="absolute top-16 left-4 z-10 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          Premium
        </div>
      )}
    </div>
  );
} 