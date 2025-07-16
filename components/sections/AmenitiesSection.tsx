import {
  Wifi,
  Car,
  Coffee,
  Utensils,
  Wind,
  Droplets,
  Flower2,
  Bath,
  Tv,
  Sun,
  Bike,
  Heart,
  Leaf,
  Baby
} from 'lucide-react';

const amenities = [
  {
    category: 'Room Amenities',
    items: [
      { icon: Wifi, name: 'Free High-Speed Wi-Fi' },
      { icon: Wind, name: 'Air Conditioning' },
      { icon: Droplets, name: 'Hot Water' },
      { icon: Bath, name: 'Private Bathroom' },
      { icon: Tv, name: 'Smart TV' },
      { icon: Coffee, name: 'Coffee/Tea Maker' }
    ]
  },
  {
    category: 'Property Amenities',
    items: [
      { icon: Car, name: 'Free Parking' },
      { icon: Utensils, name: 'Restaurant' },
      { icon: Flower2, name: 'Garden' },
      { icon: Sun, name: 'Terrace' },
      { icon: Bike, name: 'Bicycle Rental' },
      { icon: Heart, name: 'First Aid Kit' }
    ]
  },
  {
    category: 'Special Features',
    items: [
      { icon: Leaf, name: 'Bee Keeping Experience' },
      { icon: Coffee, name: 'Fresh Local Honey Tasting' },
      { icon: Baby, name: 'Family Friendly' },
      { icon: Car, name: 'Airport Transfer (Payable)' }
    ]
  }
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Villa Amenities
          </h2>
          <p className="text-lg text-gray-600">
            Enjoy our comprehensive range of amenities designed to make your stay comfortable and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((category) => (
            <div
              key={category.category}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="bg-green-100 p-2 rounded-full">
                        <Icon className="h-5 w-5 text-green-700" aria-hidden="true" />
                      </div>
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-12 bg-green-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-green-700 mb-4 text-center">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-green-700 mb-2">On Request</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Room Service</li>
                <li>• Laundry Service</li>
                <li>• Tour Guide Arrangements</li>
                <li>• Special Diet Meals</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-green-700 mb-2">Complimentary</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Welcome Drink</li>
                <li>• Daily Housekeeping</li>
                <li>• Morning Tea/Coffee</li>
                <li>• Local Travel Advice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 