import { useState } from 'react';
import GalleryImage from '@/components/ui/GalleryImage';

const categories = ['All', 'Rooms', 'Property', 'Bee Keeping', 'Surroundings'];

const images = [
  // Property/Villa exterior and general views
  {
    src: '/images/gallery/DSC_8888.jpg',
    alt: 'Beautiful exterior view of Bee Hive Villa showcasing architectural design',
    category: 'Property'
  },
  {
    src: '/images/gallery/DSC_8873_hdr.jpg',
    alt: 'Panoramic view of the villa property with landscaped gardens',
    category: 'Property'
  },
  {
    src: '/images/gallery/DSC_8882_hdr.jpg',
    alt: 'Villa exterior showcasing traditional Sri Lankan architecture with modern touches',
    category: 'Property'
  },
  {
    src: '/images/gallery/DSC_8876_hdr.jpg',
    alt: 'Beautiful property grounds with lush greenery and natural surroundings',
    category: 'Property'
  },
  {
    src: '/images/gallery/DSC_8883_hdr.jpg',
    alt: 'Scenic view of the villa property highlighting its natural setting',
    category: 'Property'
  },
  {
    src: '/images/gallery/DSC_8818_hdr.jpg',
    alt: 'Wide angle view of the villa showcasing its integration with nature',
    category: 'Property'
  },
  {
    src: '/images/gallery/DSC_8812_hdr.jpg',
    alt: 'Villa property view emphasizing the peaceful mountain setting',
    category: 'Property'
  },
  {
    src: '/images/gallery/DSC_8845_hdr.jpg',
    alt: 'Stunning property landscape with natural vegetation and villa structures',
    category: 'Property'
  },
  {
    src: '/images/gallery/DSC_8828_hdr.jpg',
    alt: 'Beautiful villa grounds showing the harmony between architecture and nature',
    category: 'Property'
  },
  
  // Rooms and interior
  {
    src: '/images/gallery/standard-twin.jpg',
    alt: 'Standard Twin Room with comfortable bedding and modern amenities',
    category: 'Rooms'
  },
  {
    src: '/images/gallery/_Image.jpg',
    alt: 'Elegant room interior with traditional Sri Lankan decor and modern comfort',
    category: 'Rooms'
  },
  {
    src: '/images/gallery/_Image (1).jpg',
    alt: 'Spacious room with panoramic windows and garden views',
    category: 'Rooms'
  },
  {
    src: '/images/gallery/_Image (2).jpg',
    alt: 'Comfortable guest room featuring local craftsmanship and modern amenities',
    category: 'Rooms'
  },
  {
    src: '/images/gallery/_Image (3).jpg',
    alt: 'Well-appointed room with balcony access and mountain views',
    category: 'Rooms'
  },
  {
    src: '/images/gallery/_Image (4).jpg',
    alt: 'Cozy room interior with traditional furniture and modern conveniences',
    category: 'Rooms'
  },
  {
    src: '/images/gallery/_Image (5).jpg',
    alt: 'Bright and airy room with excellent natural lighting and garden access',
    category: 'Rooms'
  },
  {
    src: '/images/gallery/_Image (6).jpg',
    alt: 'Luxury room with premium amenities and scenic outdoor views',
    category: 'Rooms'
  },
  
  // Bee Keeping activities (using ChatGPT generated images as they seem to be bee-related)
  {
    src: '/images/gallery/ChatGPT Image Jul 15, 2025, 09_01_12 PM.jpg',
    alt: 'Guests participating in bee keeping activity with professional guidance',
    category: 'Bee Keeping'
  },
  {
    src: '/images/gallery/ChatGPT Image Jul 15, 2025, 09_01_15 PM.jpg',
    alt: 'Close-up of honey extraction process during bee keeping experience',
    category: 'Bee Keeping'
  },
  {
    src: '/images/gallery/ChatGPT Image Jul 15, 2025, 09_01_22 PM.jpg',
    alt: 'Beekeepers in protective gear working with hive boxes',
    category: 'Bee Keeping'
  },
  {
    src: '/images/gallery/ChatGPT Image Jul 15, 2025, 09_01_24 PM.jpg',
    alt: 'Educational bee keeping session showing hive inspection techniques',
    category: 'Bee Keeping'
  },
  {
    src: '/images/gallery/ChatGPT Image Jul 15, 2025, 09_01_30 PM.jpg',
    alt: 'Fresh honeycomb and bee keeping tools used in our educational programs',
    category: 'Bee Keeping'
  },
  
  // Surroundings and landscape views
  {
    src: '/images/gallery/DSC_8868_stack.jpg',
    alt: 'Breathtaking mountain views surrounding the villa property',
    category: 'Surroundings'
  },
  {
    src: '/images/gallery/DSC_8863_stack.jpg',
    alt: 'Scenic landscape view of Kandy hills and valleys from the villa',
    category: 'Surroundings'
  },
  {
    src: '/images/gallery/DSC_8860_hdr_genErase.jpg',
    alt: 'Panoramic view of the surrounding countryside and natural beauty',
    category: 'Surroundings'
  },
  {
    src: '/images/gallery/DSC_8865_stack.jpg',
    alt: 'Beautiful natural surroundings with lush vegetation and mountain backdrop',
    category: 'Surroundings'
  },
  {
    src: '/images/gallery/DSC_8857_stack.jpg',
    alt: 'Stunning landscape photography showcasing the area\'s natural beauty',
    category: 'Surroundings'
  },
  {
    src: '/images/gallery/DSC_8833.jpg',
    alt: 'Local flora and fauna in the natural environment around the villa',
    category: 'Surroundings'
  },
  {
    src: '/images/gallery/DSC_8835.jpg',
    alt: 'Peaceful natural setting with native plants and wildlife habitat',
    category: 'Surroundings'
  }
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(image => image.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our villa through these carefully curated images showcasing our rooms, property, and unique bee keeping experiences.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label={`Filter gallery by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              category={image.category}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No images found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
} 