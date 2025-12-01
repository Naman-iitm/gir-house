import React from 'react';
import { Target, Lightbulb, History } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">About Gir House</h1>
          <p className="text-xl text-gray-400">
            A sanctuary for students, a hub for innovation, and a family for life.
          </p>
        </div>

        {/* Mission/Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="glass-panel p-8 rounded-2xl shadow-lg text-center hover:bg-white/5 transition-colors">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-gray-400">
              To provide a supportive environment that nurtures holistic growth, fosters leadership, and builds lifelong friendships among residents.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-2xl shadow-lg text-center hover:bg-white/5 transition-colors">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
              <Lightbulb size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-gray-400">
              To be the most vibrant, inclusive, and innovative student community on campus, setting benchmarks in cultural and technical excellence.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-2xl shadow-lg text-center hover:bg-white/5 transition-colors">
            <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
              <History size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Our History</h3>
            <p className="text-gray-400">
              Established in 2008, Gir House has grown from a small dormitory to a thriving society with over 1200 active members and alumni.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="glass-panel rounded-3xl overflow-hidden shadow-xl border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-96 lg:h-auto relative">
              <img 
                src="https://picsum.photos/seed/building/800/800" 
                alt="Gir House Building" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/50 to-transparent"></div>
            </div>
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">The Gir Spirit</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Life at Gir House is defined by the "Gir Spirit" - an unwritten code of looking out for one another. From late-night study sessions in the common room to cheering our lungs out during the Inter-House sports meet, every moment is a celebration of togetherness.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We take pride in our diverse community. Engineers, designers, artists, and athletes all live under one roof, creating a melting pot of ideas and cultures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};