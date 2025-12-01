
import React from 'react';
import { BRAND_ASSETS } from '../constants';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className} relative flex items-center justify-center`}>
      {/* Fallback SVG if image fails or placeholder */}
      <img 
        src={BRAND_ASSETS.logo} 
        alt="Gir House Logo" 
        className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <svg 
        className="hidden w-full h-full" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M50 5L90 25V55C90 75 75 90 50 95C25 90 10 75 10 55V25L50 5Z" 
          className="fill-primary" 
          stroke="white" 
          strokeWidth="4"
        />
        <path 
          d="M35 55C35 55 35 40 50 40C65 40 65 55 65 55" 
          stroke="white" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
        <circle cx="50" cy="55" r="10" fill="#FFB03B" />
      </svg>
    </div>
  );
};
