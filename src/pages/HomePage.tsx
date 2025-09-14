import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
  Paper,
  useTheme,
} from '@mui/material';
import {
  Search as SearchIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  Security as SecurityIcon,
  EmojiEvents as TrophyIcon,
  TrendingUp as TrendingIcon,
  Handshake as HandshakeIcon,
  AutoAwesome as AIIcon,
  AccountBalance as GovernmentIcon,
  School as SchoolIcon,
  Business as BusinessIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const features = [
    {
      icon: <AIIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'AI-Powered Discovery',
      description: 'Smart search that understands your needs. Find the perfect space with natural language queries.',
    },
    {
      icon: <TrendingIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Dynamic Pricing',
      description: 'Fair market pricing that adjusts based on demand, ensuring value for both owners and renters.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Smart Contracts',
      description: 'Automated booking, payment, and access control through blockchain technology.',
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Integrated Services',
      description: 'One-stop marketplace for cleaning, security, equipment, and catering services.',
    },
  ];

  const spaceTypes = [
    {
      icon: <SchoolIcon sx={{ fontSize: 30 }} />,
      title: 'School Grounds',
      description: 'After-hours access to playgrounds and facilities',
      color: '#10b981',
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 30 }} />,
      title: 'Corporate Spaces',
      description: 'Conference rooms and parking lots during off-hours',
      color: '#3b82f6',
    },
    {
      icon: <GovernmentIcon sx={{ fontSize: 30 }} />,
      title: 'Government Halls',
      description: 'Public venues available for community events',
      color: '#f59e0b',
    },
  ];

  const stats = [
    { value: '10K+', label: 'Spaces Listed' },
    { value: '50K+', label: 'Happy Users' },
    { value: '95%', label: 'Satisfaction Rate' },
    { value: '$2M+', label: 'Space Value Unlocked' },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          pt: 8,
          pb: 12,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 800,
                    mb: 3,
                    lineHeight: 1.2,
                  }}
                >
                  Transform Every
                  <Box component="span" sx={{ color: 'secondary.main', display: 'block' }}>
                    Square Foot
                  </Box>
                  Into Opportunity
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  The first city-wide platform for dynamic space sharing. Turn underutilized spaces into thriving community assets.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: 'secondary.main',
                      color: 'white',
                      py: 2,
                      px: 4,
                      '&:hover': {
                        bgcolor: 'secondary.dark',
                      },
                    }}
                    startIcon={<SearchIcon />}
                    onClick={() => navigate('/search')}
                  >
                    Explore Spaces
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
                  >
                    List Your Space
                  </Button>
                </Stack>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
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
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Modern workspace"
                    style={{
                      width: '100%',
                      maxWidth: 400,
                      borderRadius: 20,
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* Floating Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            opacity: 0.1,
            transform: 'rotate(15deg)',
          }}
        >
          <LocationIcon sx={{ fontSize: 100 }} />
        </Box>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ mt: -6, mb: 8 }}>
        <Paper
          elevation={4}
          sx={{
            borderRadius: 4,
            p: 4,
            bgcolor: 'white',
          }}
        >
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
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
                        color: 'primary.main',
                        mb: 1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary' }}
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

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'text.primary',
            }}
          >
            Why Choose FlexiSpace?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Revolutionary features that make space sharing simple, secure, and profitable for everyone.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent>
                    <Box mb={2}>
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, mb: 2 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary', lineHeight: 1.6 }}
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

      {/* Space Types Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: 'text.primary',
              }}
            >
              Unlock Hidden Value
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Transform underutilized spaces into community assets and revenue streams.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {spaceTypes.map((type, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      textAlign: 'center',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 2,
                        bgcolor: type.color,
                      }}
                    >
                      {type.icon}
                    </Avatar>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, mb: 2 }}
                    >
                      {type.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary' }}
                    >
                      {type.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Card
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            color: 'white',
            p: 6,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            Ready to Transform Your Space?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.9,
            }}
          >
            Join thousands of space owners and renters maximizing urban potential.
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
                bgcolor: 'secondary.main',
                color: 'white',
                py: 2,
                px: 4,
                '&:hover': {
                  bgcolor: 'secondary.dark',
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
            >
              List Your Space
            </Button>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};

export default HomePage;