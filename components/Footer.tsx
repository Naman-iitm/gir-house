import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Instagram, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 border-t border-white/10 text-white pt-16 pb-8 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo className="h-10 w-10" />
              <span className="font-display font-bold text-2xl">Gir House</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fostering a spirit of unity, excellence, and shared growth. A home away from home for every resident.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Upcoming Events</Link></li>
              <li><Link to="/teams" className="text-gray-400 hover:text-white transition-colors">Clubs & Communities</Link></li>
              <li><Link to="/council" className="text-gray-400 hover:text-white transition-colors">Student Council</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Notices</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Constitution</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Photo Gallery</Link></li>
              <li><Link to="/legacy" className="text-gray-400 hover:text-white transition-colors">Hall of Fame</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Gir House, IIT Campus<br/>Sector 1, Main Avenue</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <a href="mailto:contact@girhouse.org" className="hover:text-white">contact@girhouse.org</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Gir House Society. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};