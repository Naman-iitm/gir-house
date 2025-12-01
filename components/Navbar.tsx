
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-auto max-w-7xl px-4`}
    >
      <div className={`
        rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-xl transition-all duration-300
        ${scrolled || isOpen ? 'bg-dark/60 py-2' : 'bg-white/5 py-4'}
      `}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-accent/50 shadow-lg group-hover:scale-105 transition-transform">
                 <Logo className="w-full h-full" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-accent transition-colors drop-shadow-md">
                GIR HOUSE
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all text-gray-200 hover:text-white hover:bg-white/10 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] relative"
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://whatsapp.com" 
                target="_blank" 
                rel="noreferrer"
                className="ml-4 bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-400 hover:to-accent text-black px-5 py-2 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-accent/50 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                Join WhatsApp
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-white hover:text-accent hover:bg-white/10 transition"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[90vh] mt-4 border-t border-white/10' : 'max-h-0'
          }`}
        >
          <div className="px-4 py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 backdrop-blur-md"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://whatsapp.com"
              className="block w-full text-center mt-4 bg-primary text-white px-4 py-3 rounded-xl font-bold shadow-lg"
            >
              Join WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
