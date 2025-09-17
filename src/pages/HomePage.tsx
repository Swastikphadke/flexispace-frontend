import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Avatar, Chip, Stack, Paper, InputBase } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Search as SearchIcon,
  Schedule as ScheduleIcon,
  Security as SecurityIcon,
  AccountBalance as GovernmentIcon,
  School as SchoolIcon,
  Business as BusinessIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // UPDATED: User-focused features instead of tech features
  const features = [
    {
      icon: <SearchIcon sx={{ fontSize: 40, color: '#FF5A5F' }} />,
      title: 'Easy Discovery',
      description: 'Browse hundreds of unique spaces with detailed photos, reviews, and instant availability in Bengaluru.',
    },
    {
      icon: <CreditCard size={40} color="#FF5A5F" />,
      title: 'Simple Booking',
      description: 'Book and pay securely in under 2 minutes. UPI, cards, and net banking supported.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#FF5A5F' }} />,
      title: 'Peace of Mind',
      description: 'All spaces are verified and insured. Get full protection with our ₹1 lakh host guarantee.',
    },
    {
      icon: <ScheduleIcon sx={{ fontSize: 40, color: '#FF5A5F' }} />,
      title: 'Flexible Timing',
      description: 'Book by the hour, day, or week. Easy rescheduling up to 24 hours before your event.',
    },
  ];

  // UPDATED: Local Bengaluru space types with image backgrounds
  const spaceTypes = [
    {
      icon: <SchoolIcon sx={{ fontSize: 30 }} />,
      title: 'Koramangala Rooftops',
      description: 'Perfect for startup events and networking sessions',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: '#FF5A5F',
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 30 }} />,
      title: 'Indiranagar Galleries',
      description: 'Art spaces and creative studios for exhibitions',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: '#007BFF',
    },
    {
      icon: <GovernmentIcon sx={{ fontSize: 30 }} />,
      title: 'HSR Community Halls',
      description: 'Large venues for weddings and celebrations',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: '#28A745',
    },
  ];

  // UPDATED: Believable local stats
  const stats = [
    { value: '200+', label: 'Bengaluru Venues' },
    { value: '1500+', label: 'Happy Events' },
    { value: '4.8★', label: 'Average Rating' },
    { value: '₹2Cr+', label: 'Value Unlocked' },
  ];

  // FIXED: Trust indicators array
  const trustIndicators = [
    {
      text: '⭐ Verified Venues',
      top: '10%',
      right: '10%',
    },
    {
      text: '🚇 Metro Connected',
      bottom: '25%',
      left: '10%',
    },
    {
      text: '⚡ Instant Booking',
      top: '50%',
      right: '5%',
    },
    {
      text: '🛡️ ₹1L Insurance',
      bottom: '10%',
      right: '15%',
    },
  ];

  return (
    <Box>
      {/* UPDATED: Hero Section with user-focused messaging */}
      <Box
        sx={{
          // FIXED: Light, welcoming background instead of dark
          background: `
            linear-gradient(135deg, rgba(255, 90, 95, 0.1) 0%, rgba(0, 123, 255, 0.05) 100%),
            linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="%23f8fafc"/><circle cx="200" cy="200" r="100" fill="%23FF5A5F" opacity="0.1"/><circle cx="800" cy="150" r="80" fill="%23007BFF" opacity="0.1"/></svg>')
          `,
          backgroundSize: 'cover',
          color: '#2D2D2D',
          pt: 8,
          pb: 12,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* FIXED: Renter-focused headline */}
                <Chip
                  label="Trusted by 500+ Bengaluru businesses"
                  sx={{
                    backgroundColor: '#D1FAE5',
                    color: '#065F46',
                    fontWeight: 600,
                    mb: 3,
                  }}
                />

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 800,
                    mb: 3,
                    lineHeight: 1.2,
                    color: '#2D2D2D',
                  }}
                >
                  Your Next Opportunity is
                  <Box component="span" sx={{ color: '#FF5A5F', display: 'block' }}>
                    Just Around the Corner
                  </Box>
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: '#4B5563',
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  Find and book unique local spaces for your events, workshops, and creative projects in Bengaluru.
                </Typography>

                {/* FIXED: Prominent search bar */}
                <Box
                  sx={{
                    display: 'flex',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    border: '2px solid #E5E7EB',
                    p: 1,
                    mb: 4,
                    maxWidth: '500px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    '&:focus-within': {
                      borderColor: '#FF5A5F',
                      boxShadow: '0 0 0 3px rgba(255, 90, 95, 0.1)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, px: 2 }}>
                    <SearchIcon sx={{ color: '#9CA3AF', mr: 1 }} />
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
                    onClick={() => navigate('/search')}
                  >
                    Search
                  </Button>
                </Box>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      py: 2,
                      px: 4,
                      borderColor: '#E5E7EB',
                      color: '#4B5563',
                      '&:hover': {
                        borderColor: '#FF5A5F',
                        background: 'rgba(255, 90, 95, 0.04)',
                        color: '#FF5A5F',
                      },
                    }}
                  onClick={() => navigate('/host')}
                  >
                    List Your Space
                  </Button>
                </Stack>
              </motion.div>
            </Grid>

            <Grid xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {/* FIXED: Large, vibrant image */}
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: 500,
                      height: 400,
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                      background: `
                        linear-gradient(135deg, rgba(255, 90, 95, 0.9) 0%, rgba(0, 123, 255, 0.8) 100%),
                        url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')
                      `,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />

                  {/* FIXED: Trust indicators */}
                  {trustIndicators.map((indicator, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.2 }}
                      style={{
                        position: 'absolute',
                        top: indicator.top,
                        right: indicator.right,
                        bottom: indicator.bottom,
                        left: indicator.left,
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#2D2D2D',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      }}
                    >
                      {indicator.text}
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* UPDATED: Stats with local credibility */}
      <Container maxWidth="lg" sx={{ mt: -6, mb: 8 }}>
        <Paper
          elevation={4}
          sx={{
            borderRadius: 4,
            p: 4,
            bgcolor: 'white',
            border: '1px solid #F3F4F6',
            marginTop : '56px',
          }}
        >
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Box textAlign="center">
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        color: '#FF5A5F',
                        mb: 1,
                        fontSize: { xs: '2rem', md: '3rem' }, // Enhanced visual hierarchy
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: '#6B7280' }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

      {/* UPDATED: Features Section with user benefits */}
      <Box sx={{ py: 8, backgroundColor: '#F7F7F9' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: '#2D2D2D',
              }}
            >
              Why Choose FlexiSpace?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#6B7280',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Everything you need for seamless venue booking in Bengaluru, from discovery to event day.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #F3F4F6',
                      transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(255, 90, 95, 0.15)',
                        borderColor: '#FF5A5F',
                      },
                    }}
                  >
                    <CardContent>
                      <Box mb={2}>
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 600, mb: 2, color: '#2D2D2D' }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: '#6B7280', lineHeight: 1.6 }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* UPDATED: Local space types */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: '#2D2D2D',
            }}
          >
            Popular Venue Types
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#6B7280',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Discover the most sought-after spaces across Bengaluru neighborhoods.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {spaceTypes.map((type, index) => (
            <Grid xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  {/* Background Image */}
                  <Box
                    sx={{
                      height: 200,
                      backgroundImage: `url(${type.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: 16,
                        zIndex: 1,
                        color: 'white',
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 50,
                          height: 50,
                          mb: 1,
                          bgcolor: type.color,
                        }}
                      >
                        {type.icon}
                      </Avatar>
                    </Box>
                  </Box>
                  
                  {/* Content */}
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, mb: 2, color: '#2D2D2D' }}
                    >
                      {type.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: '#6B7280' }}
                    >
                      {type.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* UPDATED: Final CTA for renters */}
      <Box sx={{ py: 8, backgroundColor: '#F7F7F9' }}>
        <Container maxWidth="lg">
          <Card
            sx={{
              background: 'linear-gradient(135deg, #FF5A5F 0%, #E6444A 100%)',
              color: 'white',
              p: 6,
              textAlign: 'center',
              border: 'none',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              Find Your Perfect Venue Today
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.9,
              }}
            >
              Join thousands of event organizers who trust FlexiSpace for their venue needs across Bengaluru.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: '#FF5A5F',
                  py: 2,
                  px: 4,
                  '&:hover': {
                    bgcolor: '#F3F4F6',
                  },
                }}
                onClick={() => navigate('/search')}
              >
                Start Exploring
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  py: 2,
                  px: 4,
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
                onClick={() => navigate('/host')}
              >
                List Your Space
              </Button>
            </Stack>
          </Card>
        </Container>
      </Box>

      {/* Add this new section to HomePage.tsx */}
      <Box sx={{ py: 8, backgroundColor: '#2D2D2D' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: 'white',
                }}
              >
                Become a FlexiSpace Host
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  color: '#E5E7EB',
                  lineHeight: 1.6,
                }}
              >
                Turn your underutilized space into a new revenue stream. We provide the tools, the community, and the security to make it easy.
              </Typography>
              
              <Grid container spacing={3}>
                {[ 
                  { icon: '💰', title: 'Smart Pricing Tools', desc: 'AI-powered pricing optimization' },
                  { icon: '✓', title: 'Verified Renters', desc: 'Background-checked users only' },
                  { icon: '⚡', title: 'Instant Payouts', desc: 'Get paid within 24 hours' }
                ].map((benefit, index) => (
                  <Grid xs={12} key={index}>
                    <Box display="flex" alignItems="center">
                      <Typography sx={{ fontSize: '2rem', mr: 2 }}>{benefit.icon}</Typography>
                      <Box>
                        <Typography sx={{ color: 'white', fontWeight: 600 }}>{benefit.title}</Typography>
                        <Typography sx={{ color: '#9CA3AF', fontSize: '0.9rem' }}>{benefit.desc}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            
            <Grid xs={12} md={6}>
              <Box
                sx={{
                  height: 300,
                  borderRadius: 3,
                  backgroundImage: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;