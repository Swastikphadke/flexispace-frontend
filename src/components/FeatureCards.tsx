import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container, Grid, Card, CardContent, Stack } from '@mui/material';
import { Brain, DollarSign, Shield, Zap, Globe, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Demand Prediction',
    description: 'Smart algorithms predict space demand patterns, optimizing availability and pricing for maximum efficiency.',
    color: '#8B5FBF',
    lightColor: '#A78BFA',
  },
  {
    icon: DollarSign,
    title: 'Dynamic Pricing',
    description: 'Real-time pricing adjustments based on demand, location, and time ensure fair value for all parties.',
    color: '#14B8A6',
    lightColor: '#5EEAD4',
  },
  {
    icon: Shield,
    title: 'Smart Contracts',
    description: 'Blockchain-powered automation handles bookings, payments, and access control with zero intermediaries.',
    color: '#3B82F6',
    lightColor: '#60A5FA',
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'QR code access, automated payments, and real-time confirmation make booking seamless and fast.',
    color: '#F59E0B',
    lightColor: '#FBBF24',
  },
  {
    icon: Globe,
    title: '360° Virtual Tours',
    description: 'Immersive space previews help users make informed decisions without physical visits.',
    color: '#EF4444',
    lightColor: '#F87171',
  },
  {
    icon: Users,
    title: 'FlexiServices Hub',
    description: 'One-stop marketplace for catering, cleaning, security, and equipment rental services.',
    color: '#22C55E',
    lightColor: '#4ADE80',
  },
];

export const FeatureCards: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Stack spacing={3} sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Revolutionary Features
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              sx={{ 
                color: 'text.secondary', 
                maxWidth: '600px', 
                mx: 'auto',
                fontSize: '1.2rem',
              }}
            >
              Cutting-edge technology meets urban innovation to create the world's most advanced 
              space-sharing platform
            </Typography>
          </motion.div>
        </Stack>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: 'easeOut' }
                  }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(20, 20, 30, 0.6)',
                      backdropFilter: 'blur(20px)',
                      border: `1px solid rgba(${feature.color === '#8B5FBF' ? '139, 95, 191' : feature.color === '#14B8A6' ? '20, 184, 166' : '59, 130, 246'}, 0.15)`,
                      borderRadius: '24px',
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      '&:hover': {
                        borderColor: feature.color,
                        boxShadow: `0 20px 40px -10px ${feature.color}25`,
                      },
                    }}
                  >
                    {/* Subtle gradient overlay on hover */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: `linear-gradient(90deg, ${feature.color}, ${feature.lightColor})`,
                        opacity: 0.8,
                      }}
                    />

                    <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      {/* Icon */}
                      <Box
                        sx={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '20px',
                          background: `linear-gradient(135deg, ${feature.color}20, ${feature.lightColor}20)`,
                          border: `1px solid ${feature.color}30`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <feature.icon size={28} color={feature.color} />
                      </Box>

                      {/* Content */}
                      <Typography 
                        variant="h3" 
                        sx={{ 
                          mb: 2, 
                          fontSize: '1.5rem',
                          color: 'text.primary',
                          fontWeight: 600,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'text.secondary',
                          flexGrow: 1,
                          lineHeight: 1.6,
                          fontSize: '1rem',
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};