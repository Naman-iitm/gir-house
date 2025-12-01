import React from 'react';
import { MOCK_LEGACY } from '../constants';
import { Trophy, Star, Award } from 'lucide-react';

export const Legacy: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Hall of Fame</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A tribute to the moments and milestones that have shaped the history of Gir House Society.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 hidden md:block rounded-full"></div>
          
          <div className="space-y-12">
            {MOCK_LEGACY.map((item, index) => (
              <div key={item.id} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="flex-1 w-full p-4 md:p-8">
                  <div className={`glass-panel p-6 rounded-2xl shadow-lg border-white/5 hover:bg-white/5 transition-all relative ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 text-accent rounded-full mb-4">
                      <Trophy size={24} />
                    </div>
                    <span className="block text-primary font-bold text-lg mb-2">{item.year}</span>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center Marker (Desktop) */}
                <div className="hidden md:flex items-center justify-center w-12 relative z-10">
                  <div className="w-6 h-6 bg-primary border-4 border-dark rounded-full shadow-md shadow-primary/50"></div>
                </div>

                {/* Image Side (or Empty) */}
                <div className="flex-1 w-full p-4 md:p-8">
                   {item.image && (
                     <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 transform hover:scale-105 transition duration-500 border border-white/10">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                     </div>
                   )}
                   {!item.image && <div className="hidden md:block"></div>}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};