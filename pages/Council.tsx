import React, { useState } from 'react';
import { MOCK_COUNCIL } from '../constants';
import { CouncilMember } from '../types';
import { Linkedin, Mail, X } from 'lucide-react';

export const Council: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<CouncilMember | null>(null);

  return (
    <div className="pt-24 pb-16 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-white">Student Council 2023-24</h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Meet the leaders working tirelessly to make Gir House the best place to live.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_COUNCIL.map((member) => (
            <div 
              key={member.id} 
              className="group relative cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 border border-white/10">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-accent text-sm font-semibold">Click to view profile</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center">{member.name}</h3>
              <p className="text-primary font-medium text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedMember(null)}></div>
          <div className="relative bg-dark border border-white/10 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl transform transition-all animate-float">
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 z-10"
            >
              <X size={20} />
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover opacity-90" />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center bg-dark">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedMember.name}</h2>
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full font-semibold text-sm mb-6 border border-primary/20">
                  {selectedMember.role}
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  "{selectedMember.bio}"
                </p>
                <div className="flex space-x-4">
                  {selectedMember.linkedin && (
                    <a href={selectedMember.linkedin} className="p-3 bg-blue-900/30 text-blue-400 rounded-full hover:bg-blue-900/50 transition">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {selectedMember.email && (
                    <a href={`mailto:${selectedMember.email}`} className="p-3 bg-white/5 text-gray-300 rounded-full hover:bg-white/10 transition">
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};