"use client";

import { ReactNode, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  once = true,
  className = '',
}: ScrollRevealProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  // Determine the initial and animate values based on direction
  const getInitialAndAnimate = () => {
    const distance = 50;
    
    const variants = {
      up: {
        initial: { y: distance, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      },
      down: {
        initial: { y: -distance, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      },
      left: {
        initial: { x: distance, opacity: 0 },
        animate: { x: 0, opacity: 1 },
      },
      right: {
        initial: { x: -distance, opacity: 0 },
        animate: { x: 0, opacity: 1 },
      },
    };

    return variants[direction];
  };

  const { initial, animate } = getInitialAndAnimate();

  useEffect(() => {
    if (isInView) {
      controls.start(animate);
    }
  }, [isInView, controls, animate]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
