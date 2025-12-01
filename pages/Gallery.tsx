import React, { useState } from 'react';
import { MOCK_GALLERY } from '../constants';
import { X, ZoomIn } from 'lucide-react';
import { Carousel3D } from '../components/Carousel3D';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Use all mock images for the carousel
  const carouselImages = MOCK_GALLERY.map(item => item.src);

  return (
    <div className="pt-24 pb-16 bg-dark min-h-screen">
      
      {/* 3D Carousel Section */}
      <div className="mb-16 py-12 relative overflow-hidden bg-black/20">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
         <div className="text-center mb-8 relative z-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Featured Moments</h2>
            <p className="text-gray-400 mt-2">Swipe through our best memories</p>
         </div>
         <Carousel3D images={carouselImages} height="400px" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-white">Life at Gir</h1>
          <p className="text-gray-400 mt-2">Captured moments from our journey together.</p>
        </div>

        {/* Masonry Grid Simulation using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {MOCK_GALLERY.map((item) => (
            <div 
              key={item.id} 
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer border border-white/5"
              onClick={() => setSelectedImage(item.src)}
            >
              <img 
                src={item.src} 
                alt={item.caption} 
                className="w-full h-auto transform transition duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                <p className="text-white font-bold text-lg">{item.caption}</p>
                <div className="absolute top-4 right-4 text-white">
                  <ZoomIn size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-accent transition">
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery Fullscreen" 
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl animate-float border border-white/10"
          />
        </div>
      )}
    </div>
  );
};