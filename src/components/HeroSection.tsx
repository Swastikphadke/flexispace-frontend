import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Button, Container, Grid, Stack, Chip } from '@mui/material';
import { ArrowRight, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        pt: { xs: 8, md: 0 },
        pb: { xs: 4, md: 0 },
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={6} alignItems="center">
            {/* Left Content */}
            <Grid item xs={12} lg={6}>
              <Stack spacing={4} sx={{ maxWidth: { lg: '90%' } }}>
                {/* Badge */}
                <motion.div variants={itemVariants}>
                  <Chip
                    icon={<Sparkles size={16} />}
                    label="AI-Powered Urban Innovation"
                    sx={{
                      background: 'rgba(139, 95, 191, 0.15)',
                      border: '1px solid rgba(139, 95, 191, 0.3)',
                      color: '#A78BFA',
                      fontWeight: 600,
                      alignSelf: 'flex-start',
                      '& .MuiChip-icon': {
                        color: '#A78BFA',
                      },
                    }}
                  />
                </motion.div>

                {/* Main Heading */}
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h1"
                    sx={{
                      background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      mb: 2,
                    }}
                  >
                    Transform Urban
                    <br />
                    <span
                      style={{
                        background: 'linear-gradient(135deg, #8B5FBF 0%, #14B8A6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Spaces into Assets
                    </span>
                  </Typography>
                </motion.div>

                {/* Description */}
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      maxWidth: '600px',
                      fontSize: '1.25rem',
                      lineHeight: 1.6,
                    }}
                  >
                    Unlock the hidden potential of every urban space through AI-driven demand prediction, 
                    smart contracts, and dynamic pricing. The future of city resource sharing is here.
                  </Typography>
                </motion.div>

                {/* Action Buttons */}
                <motion.div variants={itemVariants}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<ArrowRight size={20} />}
                      sx={{
                        py: 1.5,
                        px: 4,
                        fontSize: '1.1rem',
                      }}
                    >
                      Start Exploring Spaces
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<Zap size={20} />}
                      sx={{
                        py: 1.5,
                        px: 4,
                        fontSize: '1.1rem',
                        borderColor: 'rgba(139, 95, 191, 0.3)',
                        color: '#A78BFA',
                        '&:hover': {
                          borderColor: '#8B5FBF',
                          background: 'rgba(139, 95, 191, 0.1)',
                        },
                      }}
                    >
                      Watch Demo
                    </Button>
                  </Stack>
                </motion.div>

                {/* Stats */}
                <motion.div variants={itemVariants}>
                  <Grid container spacing={4} sx={{ mt: 2 }}>
                    {[
                      { number: '10K+', label: 'Spaces Listed', icon: TrendingUp },
                      { number: '50K+', label: 'Bookings Made', icon: Shield },
                      { number: '₹2Cr+', label: 'Value Unlocked', icon: Sparkles },
                    ].map((stat, index) => (
                      <Grid item xs={4} key={index}>
                        <Box sx={{ textAlign: 'center' }}>
                          <stat.icon size={24} style={{ color: '#8B5FBF', marginBottom: '8px' }} />
                          <Typography
                            variant="h3"
                            sx={{
                              background: 'linear-gradient(135deg, #8B5FBF 0%, #14B8A6 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              fontSize: '1.75rem',
                              fontWeight: 700,
                            }}
                          >
                            {stat.number}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                            {stat.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Stack>
            </Grid>

            {/* Right Visual */}
            <Grid item xs={12} lg={6}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: '400px', md: '500px' },
                    borderRadius: '24px',
                    background: 'rgba(20, 20, 30, 0.4)',
                    border: '1px solid rgba(139, 95, 191, 0.2)',
                    backdropFilter: 'blur(20px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  {/* Animated cityscape */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      width: '80%',
                      height: '60%',
                      background: `
                        linear-gradient(135deg, rgba(139, 95, 191, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%),
                        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect x="50" y="150" width="40" height="100" fill="%238B5FBF" opacity="0.4"/><rect x="100" y="120" width="30" height="130" fill="%2314B8A6" opacity="0.5"/><rect x="140" y="100" width="50" height="150" fill="%238B5FBF" opacity="0.6"/><rect x="200" y="140" width="35" height="110" fill="%2314B8A6" opacity="0.4"/><rect x="250" y="90" width="45" height="160" fill="%238B5FBF" opacity="0.5"/><rect x="310" y="160" width="30" height="90" fill="%2314B8A6" opacity="0.4"/></svg>')
                      `,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />

                  {/* Floating elements */}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={i}
                      style={{
                        position: 'absolute',
                        width: '16px',
                        height: '16px',
                        background: i % 2 === 0 ? '#8B5FBF' : '#14B8A6',
                        borderRadius: '50%',
                        left: `${20 + i * 12}%`,
                        top: `${25 + i * 8}%`,
                        opacity: 0.7,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: 'easeInOut',
                      }}
                    />
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