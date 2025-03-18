"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FloatingIconsProps {
  icons: ReactNode[];
  className?: string;
}

// Define static positions to prevent hydration errors
const iconPositions = [
  { top: '10%', left: '15%', delay: 0.2, duration: 5 },
  { top: '20%', left: '85%', delay: 0.5, duration: 7 },
  { top: '35%', left: '25%', delay: 0.8, duration: 6 },
  { top: '45%', left: '75%', delay: 1.2, duration: 8 },
  { top: '60%', left: '35%', delay: 0.3, duration: 5.5 },
  { top: '75%', left: '65%', delay: 1.5, duration: 7.5 },
  { top: '85%', left: '45%', delay: 0.7, duration: 6.5 },
  { top: '15%', left: '55%', delay: 1.0, duration: 8.5 },
  { top: '30%', left: '5%', delay: 0.4, duration: 5.2 },
  { top: '50%', left: '95%', delay: 0.9, duration: 7.2 },
  { top: '70%', left: '15%', delay: 1.3, duration: 6.2 },
  { top: '90%', left: '85%', delay: 0.6, duration: 8.2 },
  { top: '25%', left: '45%', delay: 1.1, duration: 5.7 },
  { top: '40%', left: '65%', delay: 0.1, duration: 7.7 },
  { top: '55%', left: '5%', delay: 1.4, duration: 6.7 },
  { top: '65%', left: '95%', delay: 0.2, duration: 8.7 },
  { top: '80%', left: '25%', delay: 1.6, duration: 5.3 },
  { top: '5%', left: '75%', delay: 0.3, duration: 7.3 },
  { top: '95%', left: '35%', delay: 1.7, duration: 6.3 },
  { top: '45%', left: '55%', delay: 0.8, duration: 8.3 },
];

export function FloatingIcons({ icons, className = "" }: FloatingIconsProps) {
  return (
    <div className={`relative ${className}`}>
      {icons.map((icon, index) => {
        // Use static positions from the array, or fallback if we have more icons than positions
        const position = iconPositions[index % iconPositions.length];
        
        // Create a unique path for each icon to follow
        const pathVariants = {
          initial: { x: 0, y: 0, opacity: 0.3 },
          animate: {
            x: [0, 10, -10, 0],
            y: [0, -15, -5, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.1, 1],
            transition: {
              duration: position.duration,
              delay: position.delay,
              repeat: Infinity,
              repeatType: "reverse" as const,
            }
          }
        };
        
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: position.top,
              left: position.left,
            }}
            variants={pathVariants}
            initial="initial"
            animate="animate"
          >
            {icon}
          </motion.div>
        );
      })}
    </div>
  );
}
