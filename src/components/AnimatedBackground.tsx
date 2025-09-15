import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

export const AnimatedBackground: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {/* Base gradient background */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 25% 25%, rgba(139, 95, 191, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #0A0A0F 0%, #141420 50%, #0A0A0F 100%)
          `,
        }}
      />
      
      {/* Animated gradient overlay - slower and more subtle */}
      <motion.div
        style={{
          position: 'absolute',
          width: '150%',
          height: '150%',
          left: '-25%',
          top: '-25%',
          background: `
            radial-gradient(circle at 30% 40%, rgba(139, 95, 191, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 70% 60%, rgba(20, 184, 166, 0.1) 0%, transparent 40%)
          `,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Subtle floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            background: `rgba(${i % 2 === 0 ? '139, 95, 191' : '20, 184, 166'}, ${Math.random() * 0.4 + 0.2})`,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </Box>
  );
};