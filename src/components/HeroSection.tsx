import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Button, Container, Stack, Chip, InputBase } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Search as SearchIcon, MapPin, Users, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as any,
      },
    },
  } as const;

  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        // FIXED: Large, vibrant background image
        background: `
          linear-gradient(135deg, rgba(255, 90, 95, 0.1) 0%, rgba(0, 123, 255, 0.05) 100%),
          linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="%23f0f9ff"/><circle cx="200" cy="200" r="100" fill="%23FF5A5F" opacity="0.1"/><circle cx="800" cy="150" r="80" fill="%23007BFF" opacity="0.1"/><circle cx="600" cy="400" r="120" fill="%2328A745" opacity="0.1"/><rect x="100" y="500" width="200" height="150" rx="20" fill="%23FFFFFF" stroke="%23E5E7EB" stroke-width="2"/><rect x="400" y="450" width="180" height="200" rx="20" fill="%23FFFFFF" stroke="%23E5E7EB" stroke-width="2"/><rect x="700" y="480" width="220" height="180" rx="20" fill="%23FFFFFF" stroke="%23E5E7EB" stroke-width="2"/><text x="600" y="50" text-anchor="middle" font-size="24" font-weight="bold" fill="%234B5563">Bengaluru&apos;s Premier Venue Platform</text></svg>')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={6} alignItems="center">
            {/* Left Content - Renter-focused messaging */}
            <Grid xs={12} lg={6}>
              <Stack spacing={4}>
                {/* Local credibility badge */}
                <motion.div variants={itemVariants}>
                  <Chip
                    label="Trusted by 500+ Bengaluru businesses"
                    sx={{
                      backgroundColor: '#D1FAE5',
                      color: '#065F46',
                      fontWeight: 600,
                      alignSelf: 'flex-start',
                    }}
                  />
                </motion.div>

                {/* FIXED: Renter-focused headline */}
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontSize: 'clamp(32px, 5vw, 56px)',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      color: '#2D2D2D',
                      mb: 2,
                    }}
                  >
                    Your Next Opportunity is
                    <br />
                    <span style={{ color: '#FF5A5F' }}>
                      Just Around the Corner
                    </span>
                  </Typography>
                </motion.div>

                {/* FIXED: Local, specific description */}
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '18px',
                      lineHeight: 1.6,
                      color: '#4B5563',
                      maxWidth: '500px',
                    }}
                  >
                    Find and book unique local spaces for your events, workshops, 
                    and creative projects in Bengaluru. From Koramangala cafes to 
                    Indiranagar galleries.
                  </Typography>
                </motion.div>

                {/* FIXED: Prominent search bar for renters */}
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      display: 'flex',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      border: '2px solid #E5E7EB',
                      p: 1,
                      maxWidth: '500px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      '&:focus-within': {
                        borderColor: '#FF5A5F',
                        boxShadow: '0 0 0 3px rgba(255, 90, 95, 0.1)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, px: 2 }}>
                      <SearchIcon size={20} style={{ color: '#9CA3AF', marginRight: '8px' }} />
                      <InputBase
                        placeholder="Search spaces in Bengaluru..."
                        sx={{
                          flex: 1,
                          '& .MuiInputBase-input': {
                            fontSize: '16px',
                            '&::placeholder': { color: '#9CA3AF' },
                          },
                        }}
                      />
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: '12px',
                        px: 3,
                        backgroundColor: '#FF5A5F',
                        '&:hover': { backgroundColor: '#E6444A' },
                      }}
                    >
                      Search
                    </Button>
                  </Box>
                </motion.div>

                {/* FIXED: Believable local social proof */}
                <motion.div variants={itemVariants}>
                  <Grid container spacing={4} sx={{ mt: 2 }}>
                    {[
                      { number: '200+', label: 'Bengaluru Venues', icon: MapPin },
                      { number: '1500+', label: 'Happy Events', icon: Users },
                      { number: '4.8★', label: 'Average Rating', icon: Star },
          ].map((stat, index) => (
          <Grid xs={4} key={index}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                          <stat.icon 
                            size={20} 
                            style={{ 
                              color: '#FF5A5F', 
                              marginBottom: '8px' 
                            }} 
                          />
                          <Typography
                            variant="h3"
                            sx={{
                              color: '#FF5A5F',
                              fontSize: 'clamp(18px, 3vw, 24px)',
                              fontWeight: 700,
                              fontFamily: '"Space Grotesk", sans-serif',
                            }}
                          >
                            {stat.number}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: '#6B7280', 
                              fontSize: '13px',
                              fontWeight: 500,
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Stack>
            </Grid>

            {/* FIXED: Large, Interactive Visual */}
            <Grid xs={12} lg={6}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: '400px', md: '600px' },
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    background: `
                      linear-gradient(135deg, rgba(255, 90, 95, 0.9) 0%, rgba(0, 123, 255, 0.8) 100%),
                      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"><rect width="400" height="600" fill="%23f8fafc"/><rect x="20" y="50" width="360" height="200" rx="20" fill="%23FFFFFF" stroke="%23E5E7EB" stroke-width="2"/><circle cx="100" cy="150" r="30" fill="%23FF5A5F"/><text x="150" y="130" font-size="16" font-weight="bold" fill="%232D2D2D">Koramangala Rooftop</text><text x="150" y="150" font-size="14" fill="%236B7280">Perfect for startups</text><text x="150" y="170" font-size="18" font-weight="bold" fill="%23FF5A5F">₹2,500/hour</text><rect x="20" y="270" width="360" height="200" rx="20" fill="%23FFFFFF" stroke="%23E5E7EB" stroke-width="2"/><circle cx="100" cy="370" r="30" fill="%23007BFF"/><text x="150" y="350" font-size="16" font-weight="bold" fill="%232D2D2D">Indiranagar Gallery</text><text x="150" y="370" font-size="14" fill="%236B7280">Art exhibitions</text><text x="150" y="390" font-size="18" font-weight="bold" fill="%23FF5A5F">₹1,800/hour</text><rect x="20" y="490" width="360" height="100" rx="20" fill="%23FF5A5F"/><text x="200" y="540" text-anchor="middle" font-size="16" font-weight="bold" fill="%23FFFFFF">Book Instantly</text></svg>')
                    `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Floating trust indicators with local context */}
                  {[
                    { text: '⭐ Verified Venues', top: '10%', right: '10%' },
                    { text: '🚇 Metro Connected', bottom: '25%', left: '10%' },
                    { text: '⚡ Instant Booking', top: '50%', right: '5%' },
                    { text: '🛡️ ₹1L Insurance', bottom: '10%', right: '15%' },
                  ].map((indicator, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                      style={{
                        position: 'absolute',
                        ...indicator,
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#2D2D2D',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {indicator.text}
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};