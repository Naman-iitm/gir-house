import React from 'react';
import { motion } from 'framer-motion';

interface UnfocusedProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Unfocused: React.FC<UnfocusedProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0, y: 10 }}
      whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 1.2, 
        ease: [0.25, 0.4, 0.25, 1], // Custom easing
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};