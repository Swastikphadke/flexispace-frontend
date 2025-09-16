import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface AnimatedFadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export const AnimatedFadeIn: React.FC<AnimatedFadeInProps> = ({ 
  children, 
  delay = 0,
  duration = 0.6 
}) => {
  const prefersReduced = useReducedMotion();
  
  const initial = prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };
  const animate = { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.2, 0.8, 0.2, 1], // Premium spring ease
      }}
    >
      {children}
    </motion.div>
  );
};