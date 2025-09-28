import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  Button,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Stack,
  Divider,
  Chip,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {
  CalendarToday as CalendarIcon,
  
  CheckCircle as CheckIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Security as SecurityIcon,
  CleaningServices as CleaningIcon,
  TableRestaurant as CateringIcon,
  Build as EquipmentIcon,
  ArrowBack as ArrowBackIcon,
  
  AttachMoney as MoneyIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';

interface BookingStep {
  label: string;
  completed: boolean;
}

interface SelectedService {
  id: string;
  name: string;
  provider: string;
  price: number;
  category: string;
}

const BookingPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeStep, setActiveStep] = useState(0);
  const [bookingData, setBookingData] = useState({
    date: '',
    startTime: '',
    endTime: '',
    guestCount: 50,
    specialRequests: '',
    contactInfo: {
      name: '',
      email: '',
      phone: '',
    },
  });
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [smartContractDialog, setSmartContractDialog] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const steps: BookingStep[] = [
    { label: 'Select Date & Time', completed: activeStep > 0 },
    { label: 'Add Services', completed: activeStep > 1 },
    { label: 'Contact Info', completed: activeStep > 2 },
    { label: 'Payment & Confirm', completed: false },
  ];

  // Mock space data
  const space = {
    title: 'Ramaiah Sports Ground',
    image: 'http://d2e9h3gjmozu47.cloudfront.net/Gallery/sports/sports-full/a.jpg',
    basePrice: 1200,
    capacity: 600,
    location: 'Mathikere, Bengaluru',
  };

  // Mock services
  const availableServices = [
    {
      id: '1',
      name: 'Professional Cleaning',
      provider: 'CleanPro SF',
  price: 3500,
      category: 'cleaning',
      icon: <CleaningIcon />,
      description: 'Complete pre and post-event cleaning service',
    },
    {
      id: '2',
      name: 'Security Guard',
      provider: 'SecureSpace',
  price: 2000,
      category: 'security',
      icon: <SecurityIcon />,
      description: 'Professional security personnel for your event',
    },
    {
      id: '3',
      name: 'Sound System Rental',
      provider: 'AudioTech',
  price: 4500,
      category: 'equipment',
      icon: <EquipmentIcon />,
      description: 'Professional sound system with microphones',
    },
    {
      id: '4',
      name: 'Catering Service',
      provider: 'Local Bites',
  price: 300,
      category: 'catering',
      icon: <CateringIcon />,
      description: 'Per person catering with local specialties',
    },
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const toggleService = (service: any) => {
    const exists = selectedServices.find(s => s.id === service.id);
    if (exists) {
      setSelectedServices(selectedServices.filter(s => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const calculateHours = () => {
    if (!bookingData.startTime || !bookingData.endTime) return 0;
    const start = new Date(`2024-01-01 ${bookingData.startTime}`);
    const end = new Date(`2024-01-01 ${bookingData.endTime}`);
    return (end.getTime() - start.getTime()) / (1000 * 60 * 60);
  };

  const calculateTotal = () => {
    const hours = calculateHours();
    const spaceTotal = space.basePrice * hours;
    const servicesTotal = selectedServices.reduce((total, service) => {
      return total + (service.category === 'catering' ? service.price * bookingData.guestCount : service.price);
    }, 0);
    return spaceTotal + servicesTotal;
  };

  const handleBookingConfirm = async () => {
    setSmartContractDialog(true);
    setIsProcessing(true);

    // Simulate smart contract processing
    setTimeout(() => {
      setIsProcessing(false);
      setBookingConfirmed(true);

      // Save booking to localStorage
      const booking = {
        id: Date.now(),
        space: {
          title: space.title,
          image: space.image,
          location: space.location,
        },
        date: bookingData.date,
        time: `${bookingData.startTime} - ${bookingData.endTime}`,
        status: 'upcoming',
        amount: calculateTotal(),
      };
      const prev = JSON.parse(localStorage.getItem('bookings') || '[]');
      localStorage.setItem('bookings', JSON.stringify([booking, ...prev]));

      setTimeout(() => {
        setSmartContractDialog(false);
        navigate('/dashboard');
      }, 2000);
    }, 3000);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Select Your Date & Time
            </Typography>
            <Grid container spacing={3}>
              <Grid xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Event Date"
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Start Time"
                  type="time"
                  value={bookingData.startTime}
                  onChange={(e) => setBookingData({ ...bookingData, startTime: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid xs={12} md={4}>
                <TextField
                  fullWidth
                  label="End Time"
                  type="time"
                  value={bookingData.endTime}
                  onChange={(e) => setBookingData({ ...bookingData, endTime: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Expected Guest Count"
                  type="number"
                  value={bookingData.guestCount}
                  onChange={(e) => setBookingData({ ...bookingData, guestCount: parseInt(e.target.value) })}
                  inputProps={{ min: 1, max: space.capacity }}
                />
              </Grid>
            </Grid>

            {calculateHours() > 0 && (
              <Paper elevation={1} sx={{ p: 3, mt: 3, bgcolor: 'primary.50' }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Booking Summary
                </Typography>
                <Stack spacing={1}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography>Duration:</Typography>
                    <Typography fontWeight={600}>{calculateHours()} hours</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography>Base Price:</Typography>
                    <Typography fontWeight={600}>₹{space.basePrice}/hour</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography>Subtotal:</Typography>
                    <Typography fontWeight={600}>₹{space.basePrice * calculateHours()}</Typography>
                  </Box>
                </Stack>
              </Paper>
            )}
          </Card>
        );

      case 1:
        return (
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Add FlexiServices
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Make your event perfect with our integrated services
            </Typography>

            <Grid container spacing={3}>
              {availableServices.map((service) => {
                const isSelected = selectedServices.find(s => s.id === service.id);
                return (
                  <Grid xs={12} md={6} key={service.id}>
                    <Paper
                      elevation={isSelected ? 3 : 1}
                      sx={{
                        p: 3,
                        cursor: 'pointer',
                        border: isSelected ? 2 : 0,
                        borderColor: 'primary.main',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          elevation: 2,
                          transform: 'translateY(-2px)',
                        },
                      }}
                      onClick={() => toggleService(service)}
                    >
                      <Box display="flex" alignItems="center" mb={2}>
                        <Box sx={{ mr: 2, color: 'primary.main' }}>
                          {service.icon}
                        </Box>
                        <Box flexGrow={1}>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {service.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            by {service.provider}
                          </Typography>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          ₹{service.price}{service.category === 'catering' ? '/person' : ''}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {service.description}
                      </Typography>
                      {isSelected && (
                        <Chip
                          label="Selected"
                          color="primary"
                          size="small"
                          sx={{ mt: 2 }}
                        />
                      )}
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>

            {selectedServices.length > 0 && (
              <Paper elevation={1} sx={{ p: 3, mt: 3, bgcolor: 'success.50' }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Selected Services
                </Typography>
                <List dense>
                  {selectedServices.map((service) => (
                    <ListItem key={service.id} sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckIcon color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary={service.name}
                        secondary={`${service.provider} - ₹${service.price}${service.category === 'catering' ? '/person' : ''}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            )}
          </Card>
        );

      case 2:
        return (
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Contact Information
            </Typography>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  value={bookingData.contactInfo.name}
                  onChange={(e) => setBookingData({
                    ...bookingData,
                    contactInfo: { ...bookingData.contactInfo, name: e.target.value }
                  })}
                  InputProps={{
                    startAdornment: <PersonIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                  }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={bookingData.contactInfo.email}
                  onChange={(e) => setBookingData({
                    ...bookingData,
                    contactInfo: { ...bookingData.contactInfo, email: e.target.value }
                  })}
                  InputProps={{
                    startAdornment: <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                  }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={bookingData.contactInfo.phone}
                  onChange={(e) => setBookingData({
                    ...bookingData,
                    contactInfo: { ...bookingData.contactInfo, phone: e.target.value }
                  })}
                  InputProps={{
                    startAdornment: <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Special Requests or Notes"
                  multiline
                  rows={3}
                  value={bookingData.specialRequests}
                  onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
                  placeholder="Any special requirements, setup instructions, or additional information..."
                />
              </Grid>
            </Grid>
          </Card>
        );

      case 3:
        return (
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Review & Payment
            </Typography>

            <Grid container spacing={4}>
              <Grid xs={12} md={8}>
                <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Booking Details
                  </Typography>
                  <Stack spacing={2}>
                    <Box display="flex" alignItems="center">
                      <CalendarIcon sx={{ mr: 2, color: 'text.secondary' }} />
                      <Box>
                        <Typography>{bookingData.date}</Typography>
                        <Typography color="text.secondary">
                          {bookingData.startTime} - {bookingData.endTime} ({calculateHours()} hours)
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <PersonIcon sx={{ mr: 2, color: 'text.secondary' }} />
                      <Typography>{bookingData.guestCount} guests</Typography>
                    </Box>
                  </Stack>
                </Paper>

                <Paper elevation={1} sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Smart Contract Terms
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <SecurityIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Automated Payment"
                        secondary="Payment will be held in escrow until event completion"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Instant Access"
                        secondary="QR code will be generated for automatic venue access"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <MoneyIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Automatic Release"
                        secondary="Payment released to venue owner after successful event"
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>

              <Grid xs={12} md={4}>
                <Paper elevation={2} sx={{ p: 3, bgcolor: 'grey.50' }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Price Breakdown
                  </Typography>
                  <Stack spacing={2}>
                    <Box display="flex" justifyContent="space-between">
                      <Typography>Space rental ({calculateHours()}h)</Typography>
                      <Typography>₹{space.basePrice * calculateHours()}</Typography>
                    </Box>
                    {selectedServices.map((service) => (
                      <Box key={service.id} display="flex" justifyContent="space-between">
                        <Typography>{service.name}</Typography>
                        <Typography>
                          ₹{service.category === 'catering' ? service.price * bookingData.guestCount : service.price}
                        </Typography>
                      </Box>
                    ))}
                    <Divider />
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Total
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        ₹{calculateTotal()}
                      </Typography>
                    </Box>
                  </Stack>

                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={handleBookingConfirm}
                    sx={{ mt: 3, py: 2 }}
                  >
                    Confirm & Pay with Smart Contract
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box mb={4}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(`/space/${id}`)}
          sx={{ mb: 2 }}
        >
          Back to Space Details
        </Button>

        <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
          <Box display="flex" alignItems="center">
            <img
              src={space.image}
              alt={space.title}
              style={{
                width: 80,
                height: 80,
                borderRadius: 8,
                objectFit: 'cover',
                marginRight: 16,
              }}
            />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {space.title}
              </Typography>
              <Typography color="text.secondary">{space.location}</Typography>
              <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
                ₹{space.basePrice}/hour
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* Stepper */}
      <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step) => (
            <Step key={step.label} completed={step.completed}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>

      {/* Step Content */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderStepContent(activeStep)}
      </motion.div>

      {/* Navigation Buttons */}
      <Box display="flex" justifyContent="space-between" mt={4}>
        <Button
          onClick={handleBack}
          disabled={activeStep === 0}
          variant="outlined"
          size="large"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
          variant="contained"
          size="large"
        >
          {activeStep === steps.length - 1 ? 'Complete Booking' : 'Next'}
        </Button>
      </Box>

      {/* Smart Contract Dialog */}
      <Dialog
        open={smartContractDialog}
        maxWidth="sm"
        fullWidth
        disableEscapeKeyDown
      >
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <SecurityIcon sx={{ mr: 2, color: 'primary.main' }} />
            Smart Contract Processing
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box textAlign="center" py={2}>
            {isProcessing ? (
              <>
                <CircularProgress size={60} sx={{ mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Processing Your Booking
                </Typography>
                <Typography color="text.secondary">
                  Creating smart contract and securing your reservation...
                </Typography>
              </>
            ) : bookingConfirmed ? (
              <>
                <CheckIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Booking Confirmed!
                </Typography>
                <Alert severity="success" sx={{ mt: 2 }}>
                  Your smart contract has been deployed. Access codes will be sent to your email.
                </Alert>
              </>
            ) : null}
          </Box>
        </DialogContent>
        {!isProcessing && !bookingConfirmed && (
          <DialogActions>
            <Button onClick={() => setSmartContractDialog(false)}>
              Cancel
            </Button>
          </DialogActions>
        )}
      </Dialog>

      {/* Virtual Tour Section */}
      <Card sx={{ mb: 3, p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Virtual Tour
        </Typography>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingBottom: '56.25%', // 16:9 aspect ratio
            overflow: 'hidden',
            borderRadius: 2,
          }}
        >
            {/* Thumbnail overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundColor: '#FF5A5F', // Fallback background
                '&:hover': {
                  opacity: 0.9,
                },
              }}
              onClick={() => {
                // Show video when thumbnail is clicked
                const iframe = document.getElementById('virtual-tour-video');
                if (iframe) {
                  iframe.style.display = 'block';
                  iframe.src = 'https://drive.google.com/file/d/1GbPpbjGvJ2lJ2aAXTlAH667aTYuwKr3i/preview';
                }
              }}
            >
              <img
                src="https://i.postimg.cc/rmzV9JV1/Gemini-Generated-Image-hibygqhibygqhiby.png"
                alt="Virtual Tour Thumbnail"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={() => {
                  console.log('Image failed to load');
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem',
                }}
              >
                ▶
              </Box>
            </Box>
          
          {/* Hidden iframe */}
          <iframe
            id="virtual-tour-video"
            title="Ramaiah Sports Ground Virtual Tour"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'none',
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </Card>
    </Container>
  );
};

export default BookingPage;