
import React from 'react';
import { motion } from 'framer-motion';

export const HeatmapBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-dark/90 z-10" />
      
      {/* Heatmap Blobs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-primary rounded-full blur-[100px] opacity-40 mix-blend-screen"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 50, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-secondary rounded-full blur-[120px] opacity-30 mix-blend-screen"
      />

      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -100, 20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-accent rounded-full blur-[150px] opacity-20 mix-blend-screen"
      />
      
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-20 z-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};
