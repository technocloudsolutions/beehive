import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface GalleryImageProps {
  src: string;
  alt: string;
  category: string;
}

export default function GalleryImage({ src, alt, category }: GalleryImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  return (
    <>
      {/* Thumbnail */}
      <div
        className="relative h-64 cursor-pointer group overflow-hidden rounded-lg"
        onClick={handleImageClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`View larger image of ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white text-sm font-medium">{category}</span>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={handleCloseModal}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label={`Large view of ${alt}`}
        >
          <div className="relative max-w-6xl w-full h-[80vh] bg-white rounded-lg overflow-hidden">
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              onClick={handleCloseModal}
              aria-label="Close image view"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={90}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <p className="text-center">{alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 