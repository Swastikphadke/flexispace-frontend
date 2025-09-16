import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { PropsWithChildren } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Button,
  Chip,
  Stack,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
// import { motion } from 'framer-motion';
import {
  Add as AddIcon,
  Image as ImageIcon,
  CheckCircle as CheckIcon,
  AccessTime as TimeIcon,
  LocationOn as LocationIcon,
  AttachMoney as MoneyIcon,
} from '@mui/icons-material';

type AmenityKey = 'wifi' | 'parking' | 'restrooms' | 'security' | 'ac' | 'kitchen' | 'projector' | 'sound';

const allAmenities: { key: AmenityKey; label: string }[] = [
  { key: 'wifi', label: 'High-speed WiFi' },
  { key: 'parking', label: 'Parking' },
  { key: 'restrooms', label: 'Restrooms' },
  { key: 'security', label: 'Security' },
  { key: 'ac', label: 'Air Conditioning' },
  { key: 'kitchen', label: 'Kitchen' },
  { key: 'projector', label: 'Projector/Screen' },
  { key: 'sound', label: 'Sound System' },
];

const HostSpacePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({
    title: '',
    description: '',
    type: 'Hall',
    address: '',
    city: '',
    capacity: 20,
    basePrice: 2000, // ₹/hour
    weekendSurcharge: 0,
    images: [''],
    amenities: {} as Record<AmenityKey, boolean>,
    availability: {
      weekdaysStart: '09:00',
      weekdaysEnd: '18:00',
      weekendsStart: '10:00',
      weekendsEnd: '20:00',
    },
    tieredPricing: 'flat',
  });

  const steps = ['Basics', 'Pricing', 'Amenities', 'Media', 'Availability', 'Review'];

  const updateAmenity = (key: AmenityKey, value: boolean) => {
    setForm((f) => ({ ...f, amenities: { ...f.amenities, [key]: value } }));
  };

  const updateImage = (index: number, value: string) => {
    setForm((f) => {
      const images = [...f.images];
      images[index] = value;
      return { ...f, images };
    });
  };

  const addImageField = () => setForm((f) => ({ ...f, images: [...f.images, ''] }));

  const isStepValid = (step: number) => {
    switch (step) {
      case 0:
        return form.title.trim().length > 2 && form.city.trim().length > 1;
      case 1:
        return form.basePrice > 0;
      case 3:
        return form.images.some((u) => u.trim().length > 5);
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((s) => Math.min(s + 1, steps.length - 1));
    }
  };
  const handleBack = () => setActiveStep((s) => Math.max(s - 1, 0));

  const handleSubmit = () => {
    alert('Your space has been submitted for review!');
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  interface SectionProps {
    title: string;
    subtitle?: string;
  }
  const Section: React.FC<PropsWithChildren<SectionProps>> = ({ title, subtitle, children }) => (
    <Card sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: subtitle ? 0.5 : 2 }}>{title}</Typography>
      {subtitle && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {subtitle}
        </Typography>
      )}
      {children}
    </Card>
  );

  return (
    <Box sx={{ py: 4, backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box mb={3}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            List Your Space
          </Typography>
          <Typography color="text.secondary">
            Share your underutilized space and earn with FlexiSpace
          </Typography>
        </Box>

        <Card sx={{ p: 2, mb: 4, borderRadius: 3 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Card>

        {/* Step content */}
        {activeStep === 0 && (
          <Section title="Basic Details" subtitle="Give guests a quick overview of your space">
            <Grid container spacing={3}>
              <Grid xs={12} md={8}>
                <TextField
                  fullWidth
                  label="Space Title"
                  placeholder="e.g., Koramangala Community Hall"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  error={form.title.trim().length > 0 && form.title.trim().length <= 2}
                  helperText={form.title.trim().length > 0 && form.title.trim().length <= 2 ? 'Title must be at least 3 characters' : ' '}
                />
              </Grid>
              <Grid xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel>Space Type</InputLabel>
                  <Select
                    label="Space Type"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value as string })}
                  >
                    {['Hall', 'Rooftop', 'Playground', 'Kitchen', 'Studio', 'Conference Room'].map((t) => (
                      <MenuItem key={t} value={t}>{t}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  multiline
                  rows={4}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </Grid>
              <Grid xs={12} md={8}>
                <TextField
                  fullWidth
                  label="Address"
                  placeholder="Street, area, landmark"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  InputProps={{ startAdornment: <LocationIcon sx={{ mr: 1, color: 'text.secondary' }} /> }}
                />
              </Grid>
              <Grid xs={12} md={4}>
                <TextField
                  fullWidth
                  label="City"
                  placeholder="e.g., Bengaluru"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  error={form.city.trim().length > 0 && form.city.trim().length <= 1}
                  helperText={form.city.trim().length > 0 && form.city.trim().length <= 1 ? 'City must be at least 2 characters' : ' '}
                />
              </Grid>
              <Grid xs={12} md={4}>
                <TextField
                  fullWidth
                  type="number"
                  label="Capacity (people)"
                  value={form.capacity}
                  onChange={(e) => setForm({ ...form, capacity: Number(e.target.value) })}
                />
              </Grid>
            </Grid>
          </Section>
        )}

        {activeStep === 1 && (
          <Section title="Pricing" subtitle="Set your base price and surcharges">
            <Grid container spacing={3}>
              <Grid xs={12} md={4}>
                <TextField
                  fullWidth
                  type="number"
                  label="Base Price (₹/hour)"
                  value={form.basePrice}
                  onChange={(e) => setForm({ ...form, basePrice: Number(e.target.value) })}
                  InputProps={{ startAdornment: <MoneyIcon sx={{ mr: 1, color: 'text.secondary' }} /> }}
                  error={form.basePrice <= 0}
                  helperText={form.basePrice <= 0 ? 'Base price must be greater than 0' : ' '}
                />
              </Grid>
              <Grid xs={12} md={4}>
                <TextField
                  fullWidth
                  type="number"
                  label="Weekend Surcharge (₹/hour)"
                  value={form.weekendSurcharge}
                  onChange={(e) => setForm({ ...form, weekendSurcharge: Number(e.target.value) })}
                />
              </Grid>
              <Grid xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel>Pricing Model</InputLabel>
                  <Select
                    label="Pricing Model"
                    value={form.tieredPricing}
                    onChange={(e) => setForm({ ...form, tieredPricing: e.target.value as string })}
                  >
                    <MenuItem value="flat">Flat</MenuItem>
                    <MenuItem value="peak-offpeak">Dynamic (Peak/Off-peak)</MenuItem>
                    <MenuItem value="tiered">Tiered by duration</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Section>
        )}

        {activeStep === 2 && (
          <Section title="Amenities" subtitle="Select the amenities available in your space">
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {allAmenities.map((a) => (
                <Chip
                  key={a.key}
                  label={a.label}
                  onClick={() => updateAmenity(a.key, !form.amenities[a.key])}
                  color={form.amenities[a.key] ? 'primary' : 'default'}
                  icon={form.amenities[a.key] ? <CheckIcon /> : undefined}
                  sx={{ mr: 1, mb: 1 }}
                  variant={form.amenities[a.key] ? 'filled' : 'outlined'}
                />
              ))}
            </Stack>
          </Section>
        )}

        {activeStep === 3 && (
          <Section title="Media" subtitle="Add image URLs for your listing (first image is used as cover)">
            <Stack spacing={2}>
              {form.images.map((url, idx) => (
                <TextField
                  key={idx}
                  fullWidth
                  label={`Image URL ${idx + 1}`}
                  placeholder="https://..."
                  value={url}
                  onChange={(e) => updateImage(idx, e.target.value)}
                  InputProps={{ startAdornment: <ImageIcon sx={{ mr: 1, color: 'text.secondary' }} /> }}
                  error={idx === 0 && activeStep === 3 && !form.images.some((u) => u.trim().length > 5)}
                  helperText={idx === 0 && activeStep === 3 && !form.images.some((u) => u.trim().length > 5) ? 'At least one image URL is required' : ' '}
                />
              ))}
              <Button startIcon={<AddIcon />} onClick={addImageField}>
                Add another image
              </Button>
            </Stack>
          </Section>
        )}

        {activeStep === 4 && (
          <Section title="Availability" subtitle="Set the hours guests can book your space">
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <Paper sx={{ p: 2 }} variant="outlined">
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>Weekdays</Typography>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      label="Start"
                      type="time"
                      value={form.availability.weekdaysStart}
                      onChange={(e) => setForm({ ...form, availability: { ...form.availability, weekdaysStart: e.target.value } })}
                      InputLabelProps={{ shrink: true }}
                      InputProps={{ startAdornment: <TimeIcon sx={{ mr: 1, color: 'text.secondary' }} /> }}
                    />
                    <TextField
                      label="End"
                      type="time"
                      value={form.availability.weekdaysEnd}
                      onChange={(e) => setForm({ ...form, availability: { ...form.availability, weekdaysEnd: e.target.value } })}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Stack>
                </Paper>
              </Grid>
              <Grid xs={12} md={6}>
                <Paper sx={{ p: 2 }} variant="outlined">
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>Weekends</Typography>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      label="Start"
                      type="time"
                      value={form.availability.weekendsStart}
                      onChange={(e) => setForm({ ...form, availability: { ...form.availability, weekendsStart: e.target.value } })}
                      InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                      label="End"
                      type="time"
                      value={form.availability.weekendsEnd}
                      onChange={(e) => setForm({ ...form, availability: { ...form.availability, weekendsEnd: e.target.value } })}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Section>
        )}

        {activeStep === 5 && (
          <Section title="Review & Publish" subtitle="Review your details before submitting for approval">
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Grid container spacing={2}>
                <Grid xs={12} md={8}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{form.title || 'Untitled Space'}</Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>{form.type} • {form.capacity} people</Typography>
                  <Typography sx={{ mb: 2 }}>{form.description || 'No description provided'}</Typography>
                  <Typography color="text.secondary">{form.address}, {form.city}</Typography>
                </Grid>
                <Grid xs={12} md={4}>
                  <Paper variant="outlined" sx={{ p: 2, bgcolor: 'grey.50' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Pricing</Typography>
                    <Stack spacing={0.5}>
                      <Box display="flex" justifyContent="space-between"><span>Base</span><b>₹{form.basePrice}/hr</b></Box>
                      {form.weekendSurcharge > 0 && (
                        <Box display="flex" justifyContent="space-between"><span>Weekend</span><b>+₹{form.weekendSurcharge}/hr</b></Box>
                      )}
                      <Box display="flex" justifyContent="space-between"><span>Model</span><b>{form.tieredPricing}</b></Box>
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Section>
        )}

        {/* Navigation */}
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack}>Back</Button>
          {activeStep < steps.length - 1 ? (
            <Button variant="contained" onClick={handleNext} disabled={!isStepValid(activeStep)}>Next</Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleSubmit} startIcon={<CheckIcon />}>Submit Listing</Button>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default HostSpacePage;
