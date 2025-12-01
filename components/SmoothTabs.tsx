import React from 'react';
import { motion } from 'framer-motion';

interface SmoothTabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
  className?: string;
}

export const SmoothTabs: React.FC<SmoothTabsProps> = ({ tabs, activeTab, onChange, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-2 p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors z-10 ${
            activeTab === tab ? 'text-dark' : 'text-gray-300 hover:text-white'
          }`}
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-accent rounded-full"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              style={{ zIndex: -1 }}
            />
          )}
          {tab}
        </button>
      ))}
    </div>
  );
};