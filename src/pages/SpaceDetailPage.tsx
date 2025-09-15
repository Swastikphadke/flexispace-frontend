import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Rating,
  Chip,
  Divider,
  Paper,
  Stack,
  IconButton,
  ImageList,
  ImageListItem,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogContent,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Star as StarIcon,
  People as PeopleIcon,
  Square as SquareIcon,
  Schedule as ScheduleIcon,
  Security as SecurityIcon,
  Wifi as WifiIcon,
  LocalParking as ParkingIcon,
  Restaurant as RestaurantIcon,
  AccessibleForward as AccessibleIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ThreeSixty as VirtualTourIcon,
  Close as CloseIcon,
  ArrowBack as ArrowBackIcon,
  CalendarToday as CalendarIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const SpaceDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [virtualTourOpen, setVirtualTourOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock space data
  const space = {
    id: 1,
    title: 'Lincoln Elementary School Playground',
    description: 'A beautiful, modern playground facility perfect for community events, sports activities, and family gatherings. The space features state-of-the-art playground equipment, ample open areas for various activities, and convenient amenities. Located in the heart of downtown San Francisco with easy access to public transportation.',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560523159-4a9692d222ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    virtualTour: 'https://example-360-tour.com',
    location: {
      address: '123 Lincoln Ave, San Francisco, CA 94102',
      city: 'San Francisco',
      coordinates: { lat: 37.7749, lng: -122.4194 },
    },
    price: 45,
    capacity: 150,
    area: 5000,
    rating: 4.8,
    reviews: 24,
    amenities: [
      { icon: <ParkingIcon />, name: 'Parking Available' },
      { icon: <RestaurantIcon />, name: 'Restrooms' },
      { icon: <SecurityIcon />, name: 'Security System' },
      { icon: <AccessibleIcon />, name: 'Wheelchair Accessible' },
      { icon: <WifiIcon />, name: 'WiFi Available' },
    ],
    spaceType: 'Playground',
    owner: {
      name: 'SF School District',
      avatar: 'S',
      verified: true,
      rating: 4.9,
      joinedDate: '2020',
      totalSpaces: 15,
    },
    rules: [
      'No smoking or alcohol permitted',
      'Events must end by 9:00 PM',
      'Clean up after your event',
      'Maximum 150 people',
      'No permanent installations',
    ],
    availability: {
      weekdays: '3:00 PM - 9:00 PM',
      weekends: '8:00 AM - 9:00 PM',
      holidays: 'Contact owner',
    },
    pricing: {
      basePrice: 45,
      weekendSurcharge: 15,
      holidaySurcharge: 25,
      minimumHours: 2,
    },
  };

  const reviews = [
    {
      id: 1,
      user: 'Sarah M.',
      rating: 5,
      date: '2024-03-15',
      comment: 'Perfect space for our community yoga event! Clean, safe, and exactly as described.',
      avatar: 'S',
    },
    {
      id: 2,
      user: 'Mike R.',
      rating: 5,
      date: '2024-03-10',
      comment: 'Great for kids birthday parties. The playground equipment is top-notch and well-maintained.',
      avatar: 'M',
    },
    {
      id: 3,
      user: 'Lisa K.',
      rating: 4,
      date: '2024-03-05',
      comment: 'Hosted a food truck event here. Good location and facilities, though parking fills up quickly.',
      avatar: 'L',
    },
  ];

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box mb={3}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/search')}
          sx={{ mb: 2 }}
        >
          Back to Search
        </Button>
      </Box>

      <Grid container spacing={4}>
        {/* Image Gallery */}
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <Box sx={{ position: 'relative' }}>
              <img
                src={space.images[selectedImage]}
                alt={space.title}
                style={{
                  width: '100%',
                  height: 400,
                  objectFit: 'cover',
                }}
              />
              
              {/* Virtual Tour Button */}
              <Button
                variant="contained"
                startIcon={<VirtualTourIcon />}
                onClick={() => setVirtualTourOpen(true)}
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  bgcolor: 'rgba(0,0,0,0.7)',
                  '&:hover': {
                    bgcolor: 'rgba(0,0,0,0.8)',
                  },
                }}
              >
                360° Tour
              </Button>

              {/* Action Buttons */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  display: 'flex',
                  gap: 1,
                }}
              >
                <IconButton
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.9)',
                    '&:hover': { bgcolor: 'white' },
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.9)',
                    '&:hover': { bgcolor: 'white' },
                  }}
                >
                  <ShareIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Thumbnail Images */}
            <Box sx={{ p: 2 }}>
              <ImageList
                sx={{ width: '100%', height: 80 }}
                cols={4}
                rowHeight={80}
                gap={8}
              >
                {space.images.map((image, index) => (
                  <ImageListItem
                    key={index}
                    sx={{
                      cursor: 'pointer',
                      border: selectedImage === index ? 2 : 0,
                      borderColor: 'primary.main',
                      borderRadius: 1,
                      overflow: 'hidden',
                    }}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`View ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Card>
        </Grid>

        {/* Booking Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, position: 'sticky', top: 100 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                ${space.price}
                <Typography component="span" variant="h6" color="text.secondary">
                  /hour
                </Typography>
              </Typography>

              <Box display="flex" alignItems="center" mb={3}>
                <Rating value={space.rating} readOnly precision={0.1} />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  {space.rating} ({space.reviews} reviews)
                </Typography>
              </Box>

              <Stack spacing={2} mb={3}>
                <Box display="flex" alignItems="center">
                  <PeopleIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography>Up to {space.capacity} people</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <SquareIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography>{space.area} sq ft</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <LocationIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography>{space.location.city}</Typography>
                </Box>
              </Stack>

              <Button
                variant="contained"
                fullWidth
                size="large"
                startIcon={<CalendarIcon />}
                onClick={() => navigate(`/booking/${space.id}`)}
                sx={{
                  py: 2,
                  borderRadius: 2,
                  fontWeight: 600,
                }}
              >
                Book Now
              </Button>

              <Divider sx={{ my: 3 }} />

              {/* Owner Info */}
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Hosted by {space.owner.name}
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      mr: 2,
                      bgcolor: 'primary.main',
                    }}
                  >
                    {space.owner.avatar}
                  </Avatar>
                  <Box>
                    <Box display="flex" alignItems="center">
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {space.owner.name}
                      </Typography>
                      {space.owner.verified && (
                        <StarIcon sx={{ ml: 0.5, fontSize: 16, color: 'warning.main' }} />
                      )}
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {space.owner.totalSpaces} spaces • Joined {space.owner.joinedDate}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  ⭐ {space.owner.rating} host rating
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Details Section */}
      <Box mt={4}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          {space.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, lineHeight: 1.7, fontSize: '1.1rem' }}
        >
          {space.description}
        </Typography>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Amenities" />
            <Tab label="Availability" />
            <Tab label="Rules" />
            <Tab label={`Reviews (${space.reviews})`} />
          </Tabs>
        </Box>

        {/* Amenities Tab */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={2}>
            {space.amenities.map((amenity, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ mr: 2, color: 'primary.main' }}>
                    {amenity.icon}
                  </Box>
                  <Typography>{amenity.name}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Availability Tab */}
        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Available Hours
              </Typography>
              <Stack spacing={2}>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Weekdays:</Typography>
                  <Typography fontWeight={600}>{space.availability.weekdays}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Weekends:</Typography>
                  <Typography fontWeight={600}>{space.availability.weekends}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Holidays:</Typography>
                  <Typography fontWeight={600}>{space.availability.holidays}</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Pricing Details
              </Typography>
              <Stack spacing={2}>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Base Rate:</Typography>
                  <Typography fontWeight={600}>${space.pricing.basePrice}/hour</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Weekend Surcharge:</Typography>
                  <Typography fontWeight={600}>+${space.pricing.weekendSurcharge}/hour</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Holiday Surcharge:</Typography>
                  <Typography fontWeight={600}>+${space.pricing.holidaySurcharge}/hour</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Minimum Booking:</Typography>
                  <Typography fontWeight={600}>{space.pricing.minimumHours} hours</Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Rules Tab */}
        <TabPanel value={tabValue} index={2}>
          <List>
            {space.rules.map((rule, index) => (
              <ListItem key={index} sx={{ px: 0 }}>
                <ListItemIcon>
                  <SecurityIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={rule} />
              </ListItem>
            ))}
          </List>
        </TabPanel>

        {/* Reviews Tab */}
        <TabPanel value={tabValue} index={3}>
          <Stack spacing={3}>
            {reviews.map((review) => (
              <Paper key={review.id} elevation={1} sx={{ p: 3, borderRadius: 2 }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                    {review.avatar}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {review.user}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Rating value={review.rating} readOnly size="small" />
                      <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
                        {review.date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography variant="body1">{review.comment}</Typography>
              </Paper>
            ))}
          </Stack>
        </TabPanel>
      </Box>

      {/* Virtual Tour Modal */}
      <Dialog
        open={virtualTourOpen}
        onClose={() => setVirtualTourOpen(false)}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={() => setVirtualTourOpen(false)}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              bgcolor: 'rgba(0,0,0,0.5)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              height: 500,
              bgcolor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6" color="text.secondary">
              360° Virtual Tour would be embedded here
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export { SpaceDetailPage };
export default SpaceDetailPage;