import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container, Card, CardContent, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Search, Shield, Clock, Users, Headphones } from 'lucide-react';
import SecurityIcon from '@mui/icons-material/Security';

const features: { icon: React.ReactNode; title: string; description: string; image?: string }[] = [
  {
    icon: <Search size={40} color="#FF5A5F" />,
    title: 'AI-Powered Discovery',
    description: 'Smart recommendations based on your event type, budget, and location preferences in Bengaluru.',
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f0f9ff"/><circle cx="150" cy="100" r="40" fill="%23FF5A5F" opacity="0.2"/><path d="M120 80 L180 80 L180 120 L120 120 Z" fill="%23FFFFFF" stroke="%23FF5A5F" stroke-width="2"/><circle cx="200" cy="60" r="8" fill="%23007BFF"/><circle cx="100" cy="140" r="6" fill="%2328A745"/></svg>',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: '#FF5A5F' }} />,
    title: 'Instant & Secure Booking',
    description: 'Our platform uses smart contract technology to automate bookings. Your payment is held securely and transferred automatically, ensuring a transparent and trustworthy transaction for everyone.',
  },
  {
    icon: <Shield size={40} color="#FF5A5F" />,
    title: 'Host Guarantee',
    description: 'Every booking includes ₹1 lakh insurance coverage and 24/7 host support.',
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f0f9ff"/><path d="M150 50 L120 80 L120 140 L150 160 L180 140 L180 80 Z" fill="%23FFFFFF" stroke="%2328A745" stroke-width="3"/><circle cx="150" cy="110" r="15" fill="%2328A745"/><path d="M145 105 L150 110 L155 100" stroke="%23FFFFFF" stroke-width="2" fill="none"/></svg>',
  },
  {
    icon: <Clock size={40} color="#FF5A5F" />,
    title: 'Flexible Timing',
    description: 'Book by the hour, day, or week. Easy rescheduling up to 24 hours before your event.',
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f0f9ff"/><circle cx="150" cy="100" r="50" fill="%23FFFFFF" stroke="%23FF5A5F" stroke-width="3"/><path d="M150 70 L150 100 L170 120" stroke="%23FF5A5F" stroke-width="3" fill="none"/><circle cx="150" cy="100" r="3" fill="%23FF5A5F"/></svg>',
  },
  {
    icon: <Users size={40} color="#FF5A5F" />,
    title: 'Local Community',
    description: 'Connect with Bengaluru venues that understand your local needs and cultural requirements.',
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f0f9ff"/><circle cx="120" cy="80" r="20" fill="%23FF5A5F" opacity="0.7"/><circle cx="180" cy="80" r="20" fill="%23007BFF" opacity="0.7"/><circle cx="150" cy="120" r="20" fill="%2328A745" opacity="0.7"/><path d="M100 140 Q150 160 200 140" stroke="%236B7280" stroke-width="2" fill="none"/></svg>',
  },
  {
    icon: <Headphones size={40} color="#FF5A5F" />,
    title: 'Expert Support',
    description: 'Local Bengaluru team available in English, Hindi, and Kannada for seamless communication.',
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f0f9ff"/><circle cx="150" cy="100" r="30" fill="%23FFFFFF" stroke="%23007BFF" stroke-width="2"/><rect x="130" y="85" width="40" height="30" rx="5" fill="%23007BFF" opacity="0.2"/><circle cx="140" cy="100" r="3" fill="%23007BFF"/><circle cx="160" cy="100" r="3" fill="%23007BFF"/><path d="M140 110 Q150 115 160 110" stroke="%23007BFF" stroke-width="2" fill="none"/></svg>',
  },
];

export const FeatureCards: React.FC = () => {
  return (
    // FIXED: Alternating section background
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#F7F7F9' }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Stack spacing={3} sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: 600,
                color: '#2D2D2D',
              }}
            >
              Why Choose FlexiSpace?
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              sx={{ 
                color: '#6B7280', 
                maxWidth: '600px', 
                mx: 'auto',
                fontSize: '16px',
                lineHeight: 1.6,
              }}
            >
              Everything you need for seamless venue booking in Bengaluru, 
              from discovery to event day
            </Typography>
          </motion.div>
        </Stack>

        {/* FIXED: Dynamic two-column grid layout */}
        <Grid container spacing={6}>
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <Grid xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      backgroundColor: '#FFFFFF',
                      border: 'none',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                      },
                    }}
                  >
                    <Grid container>
                      {/* Image Side */}
                      <Grid xs={12} md={6} order={{ xs: 1, md: isEven ? 1 : 2 }}>
                        <Box
                          sx={{
                            height: { xs: '200px', md: '300px' },
                            backgroundImage: `url("${feature.image}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              inset: 0,
                              background: 'linear-gradient(135deg, rgba(255, 90, 95, 0.1) 0%, rgba(0, 123, 255, 0.05) 100%)',
                            },
                          }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                            style={{ zIndex: 1 }}
                          >
                            <Box
                              sx={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '20px',
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                              }}
                            >
                              {feature.icon}
                            </Box>
                          </motion.div>
                        </Box>
                      </Grid>
                      {/* Text Side */}
                      <Grid xs={12} md={6} order={{ xs: 2, md: isEven ? 2 : 1 }}>
                        <CardContent
                          sx={{
                            p: { xs: 3, md: 4 },
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }}
                        >
                          <Typography
                            variant="h3"
                            sx={{
                              mb: 2,
                              fontSize: '24px',
                              fontWeight: 600,
                              color: '#2D2D2D',
                              fontFamily: '"Space Grotesk", sans-serif',
                            }}
                          >
                            {feature.title}
                          </Typography>

                          <Typography
                            variant="body1"
                            sx={{
                              color: '#6B7280',
                              lineHeight: 1.7,
                              fontSize: '16px',
                            }}
                          >
                            {feature.description}
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};