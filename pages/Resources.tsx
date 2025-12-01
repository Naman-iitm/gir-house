import React, { useState } from 'react';
import { MOCK_NOTICES } from '../constants';
import { FileText, Link as LinkIcon, Download, Search, FileInput, ArrowRight } from 'lucide-react';
import { SmoothTabs } from '../components/SmoothTabs';

export const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const tabs = ['All', 'Admin', 'Academic', 'Events', 'Sports'];

  const filteredNotices = MOCK_NOTICES.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || notice.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-4xl font-display font-bold text-white mb-4">Resource Hub</h1>
          <p className="text-gray-400 text-lg">Central repository for all notices, forms, and important documents.</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Search notices..." 
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex-shrink-0">
             <SmoothTabs 
                tabs={tabs} 
                activeTab={category} 
                onChange={setCategory} 
             />
          </div>
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <div key={notice.id} className="group glass-panel rounded-xl p-5 hover:shadow-lg transition-all flex items-center justify-between border-white/5">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    notice.type === 'PDF' ? 'bg-red-900/30 text-red-400' :
                    notice.type === 'Form' ? 'bg-green-900/30 text-green-400' : 'bg-blue-900/30 text-blue-400'
                  }`}>
                    {notice.type === 'PDF' ? <FileText size={24} /> : 
                     notice.type === 'Form' ? <FileInput size={24} /> : <LinkIcon size={24} />}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-100 group-hover:text-primary transition-colors">{notice.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                      <span>{new Date(notice.date).toLocaleDateString()}</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                      <span className="bg-white/10 px-2 py-0.5 rounded text-xs uppercase tracking-wide font-semibold text-gray-300">{notice.category}</span>
                    </div>
                  </div>
                </div>
                <a 
                  href={notice.link}
                  className="hidden sm:flex items-center gap-2 px-4 py-2 text-primary font-medium hover:bg-primary/10 rounded-lg transition-colors"
                >
                  {notice.type === 'PDF' ? 'Download' : 'Open'} <ArrowRight size={16} />
                </a>
              </div>
            ))
          ) : (
            <div className="text-center py-12 glass-panel rounded-xl border-dashed border-white/10">
              <p className="text-gray-500">No notices found matching your search.</p>
            </div>
          )}
        </div>

        {/* Quick Links Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-primary/30 to-blue-900/30 border border-white/10 p-6 rounded-2xl text-white shadow-lg backdrop-blur-md">
             <h3 className="font-bold text-xl mb-2">Constitution</h3>
             <p className="text-blue-200 text-sm mb-4">Read the official guidelines and constitution of Gir House Society.</p>
             <button className="text-white font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">Download PDF</button>
          </div>
          <div className="bg-gradient-to-br from-accent/20 to-yellow-600/30 border border-white/10 p-6 rounded-2xl text-white shadow-lg backdrop-blur-md">
             <h3 className="font-bold text-xl mb-2">Complaint Portal</h3>
             <p className="text-yellow-100 text-sm mb-4">Facing maintenance issues? Log a complaint directly to the maintenance team.</p>
             <button className="text-white font-semibold underline decoration-white decoration-2 underline-offset-4 hover:opacity-90">Open Portal</button>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-black border border-white/10 p-6 rounded-2xl text-white shadow-lg">
             <h3 className="font-bold text-xl mb-2">Emergency Contacts</h3>
             <p className="text-gray-400 text-sm mb-4">Access important numbers for ambulance, security, and warden.</p>
             <button className="text-white font-semibold underline decoration-primary decoration-2 underline-offset-4 hover:text-primary">View List</button>
          </div>
        </div>

      </div>
    </div>
  );
};