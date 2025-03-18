"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: ReactNode;
  speed?: number;
  intensity?: number;
  className?: string;
  delay?: number;
}

export function FloatingElement({
  children,
  speed = 3,
  intensity = 10,
  className = '',
  delay = 0,
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [intensity * -1, intensity, intensity * -1],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
