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
        background: '#F9F9F9',
      }}
    >
      {/* Subtle light gradients */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 20%, rgba(255, 90, 95, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 123, 255, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(40, 167, 69, 0.02) 0%, transparent 50%)
          `,
        }}
      />
      
      {/* Gentle animated overlay */}
      <motion.div
        style={{
          position: 'absolute',
          width: '120%',
          height: '120%',
          left: '-10%',
          top: '-10%',
          background: `
            radial-gradient(circle at 30% 40%, rgba(255, 90, 95, 0.02) 0%, transparent 40%),
            radial-gradient(circle at 70% 60%, rgba(0, 123, 255, 0.015) 0%, transparent 40%)
          `,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 200,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Subtle floating elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            background: i % 3 === 0 ? '#FF5A5F' : i % 3 === 1 ? '#007BFF' : '#28A745',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.1,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: Math.random() * 6 + 8,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </Box>
  );
};