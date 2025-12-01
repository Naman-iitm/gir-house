import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Info Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-400">
                Have questions about hostel life, events, or admissions? We're here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:bg-white/5 transition-colors">
                <div className="p-3 bg-primary/20 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Visit Us</h3>
                  <p className="text-gray-400">Gir House, IIT Campus<br/>Sector 1, Main Avenue, 400076</p>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:bg-white/5 transition-colors">
                <div className="p-3 bg-accent/20 rounded-full text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Email Us</h3>
                  <p className="text-gray-400">contact@girhouse.org<br/>council@girhouse.org</p>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:bg-white/5 transition-colors">
                <div className="p-3 bg-blue-900/40 rounded-full text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Call Us</h3>
                  <p className="text-gray-400">+91 98765 43210 (Security)<br/>+91 98765 43211 (Office)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl shadow-xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white placeholder-gray-500" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white placeholder-gray-500" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white placeholder-gray-500" placeholder="Inquiry about..." />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white placeholder-gray-500" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-green-700 transition-all shadow-lg flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};