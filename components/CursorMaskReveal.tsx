
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

interface CursorMaskRevealProps {
  revealContent: React.ReactNode;
  maskedContent?: React.ReactNode;
  className?: string;
  size?: number;
}

export const CursorMaskReveal: React.FC<CursorMaskRevealProps> = ({ 
  revealContent, 
  maskedContent, 
  className = "",
  size = 300 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth out mouse movement
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    }
  };

  const maskImage = useMotionTemplate`radial-gradient(circle ${size}px at ${smoothX}px ${smoothY}px, black 40%, transparent 100%)`;
  const webkitMaskImage = maskImage;

  return (
    <div 
      ref={ref}
      className={`relative overflow-hidden cursor-none group ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* The base layer (usually darker or blurred) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {maskedContent}
      </div>

      {/* The revealed layer (visible only through mask) */}
      <motion.div 
        className="absolute inset-0 z-20 pointer-events-none bg-dark" // Ensure it covers fully if needed
        style={{ 
          maskImage: maskImage,
          WebkitMaskImage: webkitMaskImage,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        {revealContent}
      </motion.div>
      
      {/* Optional: Mouse Follower Ring */}
      <motion.div 
         className="absolute w-8 h-8 rounded-full border-2 border-accent/50 z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
         style={{ x: smoothX, y: smoothY }}
      />
    </div>
  );
};
