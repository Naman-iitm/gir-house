import React, { useState } from 'react';
import { MOCK_COMMUNITIES } from '../constants';
import { Community } from '../types';
import { ArrowRight, Users, X, Calendar, User } from 'lucide-react';

export const Teams: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<Community | null>(null);

  return (
    <div className="pt-24 pb-16 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-white">Communities & Clubs</h1>
          <p className="text-gray-400 mt-4">Find your tribe within the house.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_COMMUNITIES.map((team) => (
            <div key={team.id} className="group glass-panel rounded-2xl p-2 hover:shadow-xl hover:bg-white/5 transition-all duration-300 flex flex-col h-full border-white/5">
              <div className="relative h-56 overflow-hidden rounded-xl mb-4 shrink-0">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={team.image} 
                  alt={team.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur text-accent text-xs px-2 py-1 rounded-md flex items-center gap-1 z-20 border border-white/10">
                  <Users size={12} /> {team.memberCount} Members
                </div>
              </div>
              <div className="px-4 pb-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{team.name}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{team.description}</p>
                <div className="flex gap-2 mt-auto">
                  <button className="flex-1 py-2 bg-primary hover:bg-green-700 text-white rounded-lg font-medium text-sm transition">
                    Join Team
                  </button>
                  <button 
                    onClick={() => setSelectedTeam(team)}
                    className="flex-1 py-2 bg-white/10 text-gray-300 hover:text-white rounded-lg font-medium text-sm hover:bg-white/20 transition"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTeam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedTeam(null)}></div>
          <div className="relative bg-dark border border-white/10 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-float">
            <button 
              onClick={() => setSelectedTeam(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur rounded-full hover:bg-white/20 z-10 text-white"
            >
              <X size={20} />
            </button>
            
            <div className="relative h-48 sm:h-64">
              <img src={selectedTeam.image} alt={selectedTeam.name} className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent flex items-end p-6">
                <h2 className="text-3xl font-bold text-white">{selectedTeam.name}</h2>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {selectedTeam.longDescription || selectedTeam.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h4 className="flex items-center gap-2 font-bold text-primary mb-2">
                    <Calendar size={18} /> Schedule
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    {selectedTeam.schedule?.map((s, i) => (
                      <li key={i}>{s}</li>
                    )) || <li>Flexible schedule</li>}
                  </ul>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h4 className="flex items-center gap-2 font-bold text-primary mb-2">
                    <User size={18} /> Club Leads
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    {selectedTeam.leads?.map((l, i) => (
                      <li key={i}>{l}</li>
                    )) || <li>TBA</li>}
                  </ul>
                </div>
              </div>

              <button className="w-full mt-8 py-3 bg-accent hover:bg-yellow-500 text-black font-bold rounded-xl transition shadow-lg flex items-center justify-center gap-2">
                Register for this Club <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};