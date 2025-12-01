import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Carousel3DProps {
  images: string[];
  height?: string;
}

export const Carousel3D: React.FC<Carousel3DProps> = ({ images, height = "400px" }) => {
  const [currIndex, setCurrIndex] = useState(0);

  const rotateLeft = () => {
    setCurrIndex((prev) => prev - 1);
  };

  const rotateRight = () => {
    setCurrIndex((prev) => prev + 1);
  };

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-center py-10" style={{ height }}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent z-0 pointer-events-none" />
      
      <div className="relative w-[300px] h-[400px] perspective-1000">
        <div 
            className="w-full h-full relative"
            style={{ 
                transformStyle: 'preserve-3d',
                transform: `rotateY(${currIndex * -45}deg)`,
                transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)' 
            }}
        >
          {images.map((src, index) => {
            const rotation = index * 45;
            // Calculated for approx 8 items circle, radius approx 400px
            const translateZ = 450; 
            
            return (
              <div
                key={index}
                className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black"
                style={{
                  transform: `rotateY(${rotation}deg) translateZ(${translateZ}px)`,
                  backfaceVisibility: 'visible', // Change to hidden if you don't want to see backs
                }}
              >
                <div className="absolute inset-0 bg-black/40 hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                    src={src} 
                    alt={`Gallery item ${index}`} 
                    className="w-full h-full object-cover"
                    draggable={false}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-4 flex space-x-8 z-20">
        <button 
            onClick={rotateLeft}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-accent hover:border-accent transition-all transform hover:scale-110 shadow-lg"
        >
            <ArrowLeft size={24} />
        </button>
        <button 
            onClick={rotateRight}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-accent hover:border-accent transition-all transform hover:scale-110 shadow-lg"
        >
            <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};