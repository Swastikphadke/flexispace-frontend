import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet'; // ✅ fixed: import at top-level
import { Box, Container, Typography, Card, CardMedia, CardContent, Chip, IconButton, Button, TextField, MenuItem, Select, FormControl, InputLabel, Stack, Rating } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Wifi as WifiIcon,
  LocalParking as LocalParkingIcon,
  Restaurant as RestaurantIcon,
  AcUnit as AcUnitIcon,
  MusicNote as MusicNoteIcon,
  Videocam as VideocamIcon,
  Kitchen as KitchenIcon,
  Tv as TvIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, MapPin, Users } from 'lucide-react';

// Example map position (Bengaluru)
const position: LatLngExpression = [12.9716, 77.5946]; // [lat, lng]

// UPDATED: 10 Comprehensive Bengaluru Venues with FIXED icons
const venues = [
  {
    id: 1,
    name: 'The Canvas - Indiranagar Art Studio',
    location: 'Indiranagar, Bengaluru',
    price: '₹3,200/hour',
    rating: 4.9,
    reviews: 87,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    capacity: 'Up to 25 people',
    amenities: [
      { icon: <WifiIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'High-Speed WiFi' },
      { icon: <VideocamIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'Photo Setup' },
    ],
    tags: ['Instant Book', 'Great for Exhibitions'],
    description: 'A bright, airy art studio perfect for exhibitions, workshops, and creative events.',
  },
  {
    id: 2,
    name: 'EGL Tech Park - Boardroom Alpha',
    location: 'Electronic City, Bengaluru',
    price: '₹4,500/hour',
    rating: 4.8,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    capacity: 'Up to 12 people',
    amenities: [
      { icon: <TvIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: '4K Display' },
      { icon: <WifiIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'Enterprise WiFi' },
    ],
    tags: ['Corporate Ready', 'Prime Location'],
    description: 'Professional boardroom with state-of-the-art AV equipment for corporate meetings.',
  },
  {
    id: 3,
    name: 'Jayanagar Public Hall & Grounds',
    location: 'Jayanagar, Bengaluru',
    price: '₹18,000/day',
    rating: 4.7,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    capacity: 'Up to 200 people',
    amenities: [
      { icon: <LocalParkingIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'Free Parking' },
      { icon: <RestaurantIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'Catering Allowed' },
    ],
    tags: ['Large Events', 'Traditional'],
    description: 'Spacious community hall perfect for weddings, cultural events, and large gatherings.',
  },
  {
    id: 4,
    name: 'Sky Garden - Koramangala Rooftop',
    location: 'Koramangala, Bengaluru',
    price: '₹8,500/4 hours',
    rating: 5.0,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    capacity: 'Up to 50 people',
    amenities: [
      { icon: <RestaurantIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'Bar Service' },
      { icon: <MusicNoteIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'Sound System' },
    ],
    tags: ['Rooftop Views', 'Instagram-worthy'],
    description: 'Stunning rooftop venue with panoramic city views, perfect for startup events and networking.',
  },
  {
    id: 5,
    name: 'VoiceBox - JP Nagar Podcast Studio',
    location: 'JP Nagar, Bengaluru',
    price: '₹1,800/hour',
    rating: 5.0,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1544571171-b6ad9c5f2d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    capacity: 'Up to 4 people',
    amenities: [
      { icon: <MusicNoteIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'Pro Audio' },
      { icon: <AcUnitIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'Soundproof' },
    ],
    tags: ['Fully Equipped', 'Professional'],
    description: 'Fully soundproofed podcast studio with professional mics and on-site audio technician.',
  },
  {
    id: 6,
    name: 'The Cook\'s Table - Malleswaram',
    location: 'Malleswaram, Bengaluru',
    price: '₹5,000/half-day',
    rating: 4.8,
    reviews: 60,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    capacity: 'Up to 15 people',
    amenities: [
      { icon: <KitchenIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'Commercial Kitchen' },
      { icon: <LocalParkingIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'Parking Available' },
    ],
    tags: ['FSSAI Certified', 'Culinary Workshops'],
    description: 'Certified commercial kitchen perfect for culinary workshops and F&B startups.',
  },
  {
    id: 7,
    name: 'The Floor - Basavanagudi Dance Studio',
    location: 'Basavanagudi, Bengaluru',
    price: '₹2,000/hour',
    rating: 4.9,
    reviews: 105,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    capacity: 'Up to 30 people',
    amenities: [
      { icon: <MusicNoteIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'Sound System' },
      { icon: <AcUnitIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'AC Available' },
    ],
    tags: ['Great for Workshops', 'Mirrored Walls'],
    description: 'Beautiful studio with mirrored walls, ideal for dance classes, yoga, and fitness bootcamps.',
  },
  {
    id: 8,
    name: 'The Screening Room - Lavelle Road',
    location: 'Lavelle Road, Bengaluru',
    price: '₹7,500/3-hour slot',
    rating: 5.0,
    reviews: 30,
    image: 'https://images.unsplash.com/photo-1489599112536-2c5c93742038?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    capacity: 'Up to 20 people',
    amenities: [
      { icon: <TvIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: '4K Projection' },
      { icon: <AcUnitIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'Climate Control' },
    ],
    tags: ['Luxury Experience', 'Private Cinema'],
    description: 'Exclusive mini-theatre with 4K projection and Dolby Atmos sound for private screenings.',
  },
  {
    id: 9,
    name: 'WeWork Residency Road - Training Hall',
    location: 'Residency Road, Bengaluru',
    price: '₹6,000/hour',
    rating: 4.7,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    capacity: 'Up to 50 people',
    amenities: [
      { icon: <WifiIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'Enterprise WiFi' },
      { icon: <RestaurantIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'Refreshments' },
    ],
    tags: ['Prime Location', 'Corporate Training'],
    description: 'Versatile training space in the heart of the city, perfect for corporate seminars and workshops.',
  },
  {
    id: 10,
    name: 'The Secret Garden - Whitefield',
    location: 'Whitefield, Bengaluru',
    price: '₹15,000/day',
    rating: 4.8,
    reviews: 55,
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    capacity: 'Up to 80 people',
    amenities: [
      { icon: <LocalParkingIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'Ample Parking' },
      { icon: <KitchenIcon sx={{ fontSize: 16, color: '#6B7280' }} />, label: 'Catering Kitchen' },
    ],
    tags: ['Outdoor Space', 'Garden Venue'],
    description: 'Serene private garden venue ideal for intimate gatherings and outdoor events.',
  },
];

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [savedVenues, setSavedVenues] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [capacity, setCapacity] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const toggleSave = (venueId: number) => {
    setSavedVenues(prev => 
      prev.includes(venueId) 
        ? prev.filter(id => id !== venueId)
        : [...prev, venueId]
    );
  };

  // Filter venues based on search criteria
  // Helper to extract numeric price
  const getVenuePrice = (venue: any) => {
    const match = venue.price.match(/\d+[\d,]*/);
    return match ? parseInt(match[0].replace(/,/g, '')) : 0;
  };
  // Helper to extract numeric capacity
  const getVenueCapacity = (venue: any) => {
    const match = venue.capacity.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };
  const filteredVenues = venues.filter(venue => {
    const matchesSearch = searchQuery === '' || 
      venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = location === '' || 
      venue.location.toLowerCase().includes(location.toLowerCase());
    const price = getVenuePrice(venue);
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
    const cap = getVenueCapacity(venue);
    const matchesCapacity = capacity === 0 || cap >= capacity;
    const matchesAmenities = selectedAmenities.length === 0 || selectedAmenities.every(a => venue.amenities.some((am: any) => am.label === a));
    return matchesSearch && matchesLocation && matchesPrice && matchesCapacity && matchesAmenities;
  });

  const sortedVenues = [...filteredVenues].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(/[₹,]/g, '')) - parseInt(b.price.replace(/[₹,]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[₹,]/g, '')) - parseInt(a.price.replace(/[₹,]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <Box sx={{ py: 4, backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <Container maxWidth="xl">
        {/* Map View */}
        <Box sx={{ mb: 3 }}>
          <Card sx={{ height: 360, borderRadius: 3, overflow: 'hidden' }}>
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: 400, width: "100%" }}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {/* Example markers for venues with fake coordinates */}
              {venues.slice(0, 5).map((venue, i) => (
                <Marker key={venue.id} position={[12.97 + i * 0.01, 77.59 + i * 0.01] as LatLngExpression}>
                  <Popup>
                    <b>{venue.name}</b><br />
                    {venue.location}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Card>
        </Box>

        {/* Header */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#2D2D2D', mb: 2 }}>
            {searchQuery || location ? `Showing ${filteredVenues.length} results${searchQuery ? ` for '${searchQuery}'` : ''}${location ? ` in '${location}'` : ''}` : 'Explore Amazing Spaces in Bengaluru'}
          </Typography>
        </Box>

        {/* Filters */}
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4 }}>
          <TextField
            size="small"
            placeholder="Search spaces, venues, or activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ flex: 1 }}
          />
          <TextField
            size="small"
            placeholder="Location (e.g., Indiranagar, Koramangala)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            sx={{ flex: 1 }}
          />
          <TextField
            size="small"
            type="number"
            label="Min Capacity"
            value={capacity}
            onChange={(e) => setCapacity(Number(e.target.value))}
            sx={{ width: 120 }}
            inputProps={{ min: 0 }}
          />
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2">Price:</Typography>
            <TextField
              size="small"
              type="number"
              value={priceRange[0]}
              onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
              sx={{ width: 80 }}
              inputProps={{ min: 0 }}
            />
            <Typography variant="body2">to</Typography>
            <TextField
              size="small"
              type="number"
              value={priceRange[1]}
              onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
              sx={{ width: 80 }}
              inputProps={{ min: 0 }}
            />
          </Stack>
          <FormControl size="small" sx={{ minWidth: 160 }}>
            <InputLabel>Amenities</InputLabel>
            <Select
              multiple
              value={selectedAmenities}
              onChange={e => setSelectedAmenities(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}
              label="Amenities"
              renderValue={selected => (selected as string[]).join(', ')}
            >
              {['High-Speed WiFi', 'Photo Setup', '4K Display', 'Enterprise WiFi', 'Free Parking', 'Catering Allowed', 'Bar Service', 'Sound System', 'Pro Audio', 'Soundproof', 'Commercial Kitchen', 'Parking Available', '4K Projection', 'Climate Control', 'Refreshments', 'Ample Parking', 'Catering Kitchen'].map(a => (
                <MenuItem key={a} value={a}>{a}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Sort by</InputLabel>
            <Select value={sortBy} label="Sort by" onChange={(e) => setSortBy(e.target.value)}>
              <MenuItem value="relevance">Relevance</MenuItem>
              <MenuItem value="price-low">Price (Low to High)</MenuItem>
              <MenuItem value="price-high">Price (High to Low)</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        {/* Listings */}
        <Grid container spacing={3}>
          {sortedVenues.map((venue, index) => (
            <Grid xs={12} md={6} lg={4} key={venue.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'all 200ms ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  {/* Image with Save Icon */}
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={venue.image}
                      alt={venue.name}
                    />
                    
                    {/* UPDATED: Save (Heart) Icon */}
                    <IconButton
                      onClick={() => toggleSave(venue.id)}
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' },
                      }}
                    >
                      <Heart
                        size={20}
                        fill={savedVenues.includes(venue.id) ? '#FF5A5F' : 'none'}
                        color={savedVenues.includes(venue.id) ? '#FF5A5F' : '#6B7280'}
                      />
                    </IconButton>

                    {/* Tags */}
                    <Box sx={{ position: 'absolute', bottom: 8, left: 8 }}>
                      <Stack direction="row" spacing={1}>
                        {venue.tags.slice(0, 1).map((tag, idx) => (
                          <Chip
                            key={idx}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(255, 255, 255, 0.9)',
                              color: '#2D2D2D',
                              fontSize: '0.75rem',
                              fontWeight: 600,
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    {/* Venue Name & Rating */}
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: '#2D2D2D',
                          mb: 1,
                          fontSize: '1.1rem',
                        }}
                      >
                        {venue.name}
                      </Typography>
                      
                      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                        <Rating value={venue.rating} readOnly size="small" />
                        <Typography variant="body2" sx={{ color: '#6B7280' }}>
                          {venue.rating} ({venue.reviews} reviews)
                        </Typography>
                      </Stack>

                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <MapPin size={14} color="#6B7280" />
                        <Typography variant="body2" sx={{ color: '#6B7280' }}>
                          {venue.location}
                        </Typography>
                      </Stack>
                    </Box>

                    {/* UPDATED: Capacity & Amenities */}
                    <Box sx={{ mb: 2 }}>
                      <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mb: 1 }}>
                        <Users size={14} color="#FF5A5F" />
                        <Typography variant="body2" sx={{ color: '#2D2D2D', fontWeight: 500 }}>
                          {venue.capacity}
                        </Typography>
                      </Stack>
                      
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {venue.amenities.map((amenity, idx) => (
                          <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            {amenity.icon}
                            <Typography variant="caption" sx={{ color: '#6B7280' }}>
                              {amenity.label}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>

                    {/* Price & Book Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: '#FF5A5F',
                        }}
                      >
                        {venue.price}
                      </Typography>
                      
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          backgroundColor: '#FF5A5F',
                          '&:hover': { backgroundColor: '#E6444A' },
                          borderRadius: 2,
                          px: 2,
                        }}
                        onClick={() => navigate(`/booking/${venue.id}`)}
                      >
                        Book Now
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SearchPage;
