import React, { useState } from 'react';
import { MOCK_EVENTS } from '../constants';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { SmoothTabs } from '../components/SmoothTabs';

export const Events: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const tabs = ['All', 'Tech', 'Culture', 'Sports'];

  const filteredEvents = filter === 'All' 
    ? MOCK_EVENTS 
    : MOCK_EVENTS.filter(e => e.category === filter);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-display font-bold text-white">Events Calendar</h1>
            <p className="text-gray-400 mt-2">Discover, Participate, Celebrate.</p>
          </div>
          
          {/* Tabs */}
          <div className="mt-6 md:mt-0">
             <SmoothTabs 
                tabs={tabs} 
                activeTab={filter} 
                onChange={setFilter} 
             />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="glass-panel rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col sm:flex-row h-full sm:h-64 overflow-hidden group card-3d border-white/5">
              <div className="sm:w-2/5 relative h-48 sm:h-full">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-accent border border-white/10">
                  {event.category}
                </div>
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm mb-4 space-x-4">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(event.date).toLocaleDateString()}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {event.location}</span>
                  </div>
                  <p className="text-gray-300 line-clamp-2 mb-4 text-sm">
                    {event.description}
                  </p>
                </div>
                <div className="mt-auto">
                   <button className="w-full py-2.5 bg-primary/20 hover:bg-primary hover:text-white text-primary-300 font-semibold rounded-lg border border-primary/30 hover:border-transparent transition-all">
                     View Details & Register
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-20 glass-panel rounded-2xl">
            <p className="text-xl text-gray-500">No events found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
};