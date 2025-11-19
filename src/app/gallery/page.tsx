'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollToTop from '@/components/ScrollToTop';

interface GalleryImage {
  src: string;
  title: string;
  description: string;
}

const images: GalleryImage[] = [
  { src: '/images/b4.jpg', title: '1', description: 'This is image 1 description.' },
  { src: '/images/b3.jpg', title: '2', description: 'This is image 2 description.' },
  { src: '/images/a.jpg', title: '3', description: 'This is image 3 description.' },
  { src: '/images/b2.jpg', title: '4', description: 'This is image 4 description.' },
  { src: '/images/b1.jpg', title: '5', description: 'This is image 5 description.' },
  { src: '/images/b5.jpg', title: '6', description: 'This is image 6 description.' },
  { src: '/images/b7.jpg', title: '7', description: 'This is image 7 description.' },
  { src: '/images/b6.jpg', title: '8', description: 'This is image 8 description.' },
  { src: '/images/n.jpg', title: '9', description: 'This is image 9 description.' },
  { src: '/images/b10.jpg', title: '10', description: 'Food-related image.' },
  { src: '/images/m.jpg', title: '11', description: 'This is image 11 description.' },
  { src: '/images/i.jpg', title: 'Our foodie', description: 'This is image 12 description.' },
  { src: '/images/o.jpg', title: '13', description: 'This is image 13 description.' },
  { src: '/images/b11.jpg', title: '14', description: 'This is image 14 description.' },
  { src: '/images/r.jpg', title: '15', description: 'This is image 15 description.' },
  { src: '/images/b9.jpg', title: '16', description: 'This is image 16 description.' },
  { src: '/images/b2.jpg', title: '17', description: 'This is image 17 description.' },
  { src: '/images/c.jpg', title: '18', description: 'This is image 18 description.' },
  { src: '/images/b.jpg', title: '19', description: 'This is image 19 description.' },
  { src: '/images/b8.jpg', title: '20', description: 'This is image 20 description.' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <main className="min-h-screen pt-24 pb-12 bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-[#1f6e3e] text-white py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Moments from our journey and activities
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Pinterest-style Masonry Layout */}
        <div className="masonry-gallery">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openModal(image)}
            >
              <div className="relative w-full">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                  style={{ display: 'block' }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center rounded-lg">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-lg px-4 text-center">
                    {image.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="relative w-full h-[70vh] mb-4">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="text-white text-center bg-black bg-opacity-50 rounded-lg p-4">
              <h3 className="text-3xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-lg">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <ScrollToTop />
    </main>
  );
}
