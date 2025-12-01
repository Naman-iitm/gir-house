import React from 'react';
import { motion, Variants } from 'framer-motion';

export const AppleHello: React.FC<{ className?: string }> = ({ className }) => {
  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`${className} relative z-10`}
    >
       <svg width="200" height="100" viewBox="0 0 200 100" className="w-full h-auto">
         <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            stroke="#FFD700"
            strokeWidth="2"
            fill="transparent"
            fontSize="64"
            fontFamily="'Sacramento', cursive"
            variants={draw}
            custom={0}
         >
            Pride
         </motion.text>
       </svg>
    </motion.div>
  );
};