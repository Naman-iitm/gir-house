import React from 'react';
import { MOCK_ALUMNI } from '../constants';
import { Linkedin, Quote } from 'lucide-react';

export const Alumni: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-dark relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Alumni Network</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The strength of Gir House lies in its people, past and present. Meet the trailblazers who once called this house home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {MOCK_ALUMNI.map((alumni) => (
            <div key={alumni.id} className="glass-panel rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 border-white/5">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                  <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img 
                    src={alumni.image} 
                    alt={alumni.name} 
                    className="w-full h-full object-cover rounded-full border-4 border-white/10 shadow-md relative z-10" 
                  />
                  <div className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md z-20">
                     <Linkedin size={16} className="text-blue-600" />
                  </div>
                </div>
                
                <div className="text-center sm:text-left flex-grow">
                  <h3 className="text-2xl font-bold text-white">{alumni.name}</h3>
                  <p className="text-gray-400 font-medium mb-1">{alumni.role} • Batch of {alumni.batch}</p>
                  <p className="text-accent font-semibold text-sm mb-4">{alumni.company}</p>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 text-primary/30 w-8 h-8 transform -scale-x-100" />
                    <p className="text-gray-300 italic relative z-10 pl-4 text-sm leading-relaxed">
                      "{alumni.testimonial}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="glass-panel inline-block p-8 rounded-2xl max-w-2xl mx-auto border-white/5">
             <h3 className="text-2xl font-bold text-white mb-4">Are you a Gir House Alumnus?</h3>
             <p className="text-gray-400 mb-6">Reconnect with your batchmates, mentor current students, or just say hello.</p>
             <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-colors shadow-lg">
               Join Alumni Database
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};