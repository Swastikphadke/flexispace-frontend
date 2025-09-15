import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
  Avatar,
  Rating,
  Paper,
  Stack,
  Autocomplete,
  Slider,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  Fab,
} from '@mui/material';
import {
  Search as SearchIcon,
  LocationOn as LocationIcon,
  AutoAwesome as AIIcon,
  FilterList as FilterIcon,
  Star as StarIcon,
  Schedule as ScheduleIcon,
  People as PeopleIcon,
  Square as SquareIcon,
  Map as MapIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    spaceType: '',
    capacity: [1, 100],
    priceRange: [10, 500],
    amenities: [] as string[],
  });
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for demonstration
  const mockSpaces = [
    {
      id: 1,
      title: 'Lincoln Elementary School Playground',
      description: 'Large outdoor playground with modern equipment, perfect for community events and sports activities.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      location: 'Downtown, San Francisco',
      price: 45,
      capacity: 150,
      area: 5000,
      rating: 4.8,
      reviews: 24,
      amenities: ['Parking', 'Restrooms', 'Playground Equipment', 'Security'],
      spaceType: 'Playground',
      owner: {
        name: 'SF School District',
        avatar: 'S',
        verified: true,
      },
      demandLevel: 'high',
    },
    {
      id: 2,
      title: 'Tech Corp Conference Center',
      description: 'Modern conference hall with state-of-the-art AV equipment, ideal for corporate events and presentations.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      location: 'SOMA, San Francisco',
      price: 125,
      capacity: 80,
      area: 2500,
      rating: 4.9,
      reviews: 18,
      amenities: ['WiFi', 'Projector', 'Catering Kitchen', 'Parking'],
      spaceType: 'Conference Room',
      owner: {
        name: 'TechCorp Inc.',
        avatar: 'T',
        verified: true,
      },
      demandLevel: 'medium',
    },
    {
      id: 3,
      title: 'City Hall Community Room',
      description: 'Historic community space perfect for town halls, meetings, and cultural events.',
      image: 'https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      location: 'Civic Center, San Francisco',
      price: 35,
      capacity: 120,
      area: 3200,
      rating: 4.6,
      reviews: 32,
      amenities: ['Sound System', 'Stage', 'Accessibility', 'Historical Significance'],
      spaceType: 'Community Hall',
      owner: {
        name: 'SF City Government',
        avatar: 'C',
        verified: true,
      },
      demandLevel: 'low',
    },
    {
      id: 4,
      title: 'Corporate Parking Lot',
      description: 'Large parking area available during weekends and evenings for events and markets.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      location: 'Financial District, SF',
      price: 25,
      capacity: 200,
      area: 8000,
      rating: 4.4,
      reviews: 12,
      amenities: ['Security', 'Easy Access', 'Lighting', 'Level Surface'],
      spaceType: 'Parking Lot',
      owner: {
        name: 'Finance Corp',
        avatar: 'F',
        verified: false,
      },
      demandLevel: 'medium',
    },
  ];

  const spaceTypes = ['Playground', 'Conference Room', 'Community Hall', 'Parking Lot', 'Office Space', 'Outdoor Area'];
  const amenitiesOptions = ['WiFi', 'Parking', 'Restrooms', 'Projector', 'Sound System', 'Catering Kitchen', 'Security', 'Accessibility'];

  const getDemandColor = (level: string) => {
    switch (level) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  const handleSearch = () => {
    // AI search logic would go here
    console.log('Searching for:', searchQuery, filters);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Hero Search Section */}
      <Paper
        elevation={4}
        sx={{
          background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
          color: 'white',
          p: 6,
          borderRadius: 4,
          mb: 4,
        }}
      >
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Find Your Perfect Space
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
            Use AI-powered search to discover spaces that match your exact needs
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Try: 'A quiet place for 20-person yoga workshop' or 'Outdoor space for food stall'"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              bgcolor: 'white',
              borderRadius: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AIIcon sx={{ color: 'primary.main' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    onClick={handleSearch}
                    sx={{
                      borderRadius: 1.5,
                      px: 3,
                      py: 1.5,
                    }}
                  >
                    Search
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Paper>

      <Grid container spacing={4}>
        {/* Filters Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
            <Box display="flex" alignItems="center" mb={3}>
              <FilterIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Filters
              </Typography>
            </Box>

            <Stack spacing={3}>
              {/* Location */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Location
                </Typography>
                <Autocomplete
                  options={['Downtown SF', 'SOMA', 'Mission', 'Castro', 'Richmond']}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Enter location"
                      size="small"
                    />
                  )}
                />
              </Box>

              {/* Space Type */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Space Type
                </Typography>
                <Autocomplete
                  options={spaceTypes}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Select type"
                      size="small"
                    />
                  )}
                />
              </Box>

              {/* Capacity */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Capacity: {filters.capacity[0]} - {filters.capacity[1]} people
                </Typography>
                <Slider
                  value={filters.capacity}
                  onChange={(_, newValue) => setFilters({ ...filters, capacity: newValue as number[] })}
                  valueLabelDisplay="auto"
                  min={1}
                  max={300}
                  color="primary"
                />
              </Box>

              {/* Price Range */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}/hour
                </Typography>
                <Slider
                  value={filters.priceRange}
                  onChange={(_, newValue) => setFilters({ ...filters, priceRange: newValue as number[] })}
                  valueLabelDisplay="auto"
                  min={10}
                  max={1000}
                  color="primary"
                />
              </Box>

              {/* Amenities */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Amenities
                </Typography>
                {amenitiesOptions.slice(0, 6).map((amenity) => (
                  <FormControlLabel
                    key={amenity}
                    control={<Checkbox size="small" />}
                    label={amenity}
                    sx={{ display: 'block' }}
                  />
                ))}
              </Box>
            </Stack>
          </Paper>
        </Grid>

        {/* Results */}
        <Grid item xs={12} md={9}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              {mockSpaces.length} spaces found
            </Typography>
            <Button
              variant="outlined"
              startIcon={<MapIcon />}
              sx={{ borderRadius: 2 }}
            >
              Map View
            </Button>
          </Box>

          <Grid container spacing={3}>
            {mockSpaces.map((space, index) => (
              <Grid item xs={12} md={6} lg={4} key={space.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={space.image}
                      alt={space.title}
                      sx={{ position: 'relative' }}
                    />
                    
                    {/* Demand Level Badge */}
                    <Chip
                      label={`${space.demandLevel} demand`}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        bgcolor: getDemandColor(space.demandLevel),
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />

                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {space.title}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, minHeight: 40 }}
                      >
                        {space.description}
                      </Typography>

                      <Box display="flex" alignItems="center" mb={2}>
                        <LocationIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
                        <Typography variant="body2" color="text.secondary">
                          {space.location}
                        </Typography>
                      </Box>

                      <Stack direction="row" spacing={2} mb={2}>
                        <Box display="flex" alignItems="center">
                          <PeopleIcon sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary">
                            {space.capacity}
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                          <SquareIcon sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary">
                            {space.area} sq ft
                          </Typography>
                        </Box>
                      </Stack>

                      <Box display="flex" flexWrap="wrap" gap={0.5} mb={2}>
                        {space.amenities.slice(0, 3).map((amenity) => (
                          <Chip
                            key={amenity}
                            label={amenity}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                        {space.amenities.length > 3 && (
                          <Chip
                            label={`+${space.amenities.length - 3}`}
                            size="small"
                            variant="outlined"
                          />
                        )}
                      </Box>

                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            ${space.price}/hour
                          </Typography>
                          <Box display="flex" alignItems="center">
                            <Rating value={space.rating} readOnly size="small" />
                            <Typography variant="body2" sx={{ ml: 0.5 }}>
                              ({space.reviews})
                            </Typography>
                          </Box>
                        </Box>
                        
                        <Box display="flex" alignItems="center">
                          <Avatar
                            sx={{ width: 32, height: 32, mr: 1, bgcolor: 'primary.main' }}
                          >
                            {space.owner.avatar}
                          </Avatar>
                          {space.owner.verified && (
                            <StarIcon sx={{ fontSize: 16, color: 'warning.main' }} />
                          )}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Floating Action Button for AI Search */}
      <Fab
        color="secondary"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
        onClick={() => {
          // Open AI search modal
          console.log('Open AI search assistant');
        }}
      >
        <AIIcon />
      </Fab>
    </Container>
  );
};
export { SearchPage };
export default SearchPage;