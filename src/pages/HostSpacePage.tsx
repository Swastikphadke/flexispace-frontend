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
  InputAdornment,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  Add as AddIcon,
  Image as ImageIcon,
  CheckCircle as CheckIcon,
  AccessTime as TimeIcon,
  LocationOn as LocationIcon,
  AttachMoney as MoneyIcon,
} from '@mui/icons-material';

type AmenityKey =
  | 'wifi'
  | 'parking'
  | 'restrooms'
  | 'security'
  | 'ac'
  | 'kitchen'
  | 'projector'
  | 'sound';

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

interface SectionProps {
  title: string;
  subtitle?: string;
}
const Section: React.FC<PropsWithChildren<SectionProps>> = ({ title, subtitle, children }) => (
  <Card sx={{ p: 3, mb: 3 }}>
    <Typography variant="h6" sx={{ fontWeight: 600, mb: subtitle ? 0.5 : 2 }}>
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {subtitle}
      </Typography>
    )}
    {children}
  </Card>
);

type FormState = {
  title: string;
  description: string;
  type: string;
  address: string;
  city: string;
  capacity: number;
  basePrice: number;
  weekendSurcharge: number;
  images: string[];
  amenities: Record<AmenityKey, boolean>;
  availability: {
    weekdaysStart: string;
    weekdaysEnd: string;
    weekendsStart: string;
    weekendsEnd: string;
  };
  tieredPricing: string;
};

const initialForm: FormState = {
  title: '',
  description: '',
  type: 'Hall',
  address: '',
  city: '',
  capacity: 20,
  basePrice: 2000,
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
};

const HostSpacePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [form, setForm] = useState<FormState>(initialForm);

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

  const handleNext = () => setActiveStep((s) => Math.min(s + 1, steps.length - 1));
  const handleBack = () => setActiveStep((s) => Math.max(s - 1, 0));

  const handleSubmit = () => {
    alert('Your space has been submitted for review!');
    setTimeout(() => navigate('/'), 500);
  };

  return (
    <Box sx={{ py: 4, backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box mb={3}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            List Your Space
          </Typography>
          <Typography color="text.secondary">Share your underutilized space and earn with FlexiSpace</Typography>
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

        {/* ===== Step 0 - Basics (keeps mounted) ===== */}
        <Box sx={{ display: activeStep === 0 ? 'block' : 'none' }}>
          <Section title="Basic Details" subtitle="Give guests a quick overview of your space">
            <Grid container spacing={3}>
              <Grid xs={12} md={8}>
                <TextField
                  fullWidth
                  label="Space Title"
                  placeholder="e.g., Koramangala Community Hall"
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  error={form.title.trim().length > 0 && form.title.trim().length <= 2}
                  helperText={form.title.trim().length > 0 && form.title.trim().length <= 2 ? 'Title must be at least 3 characters' : ' '}
                />
              </Grid>

              <Grid xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel id="space-type-label">Space Type</InputLabel>
                  <Select
                    labelId="space-type-label"
                    label="Space Type"
                    value={form.type}
                    onChange={(e) => setForm((f) => ({ ...f, type: e.target.value as string }))}
                  >
                    {['Hall', 'Rooftop', 'Playground', 'Kitchen', 'Studio', 'Conference Room'].map((t) => (
                      <MenuItem key={t} value={t}>
                        {t}
                      </MenuItem>
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
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                />
              </Grid>

              <Grid xs={12} md={8}>
                <TextField
                  fullWidth
                  label="Address"
                  placeholder="Street, area, landmark"
                  value={form.address}
                  onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationIcon sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid xs={12} md={4}>
                <TextField
                  fullWidth
                  label="City"
                  placeholder="e.g., Bengaluru"
                  value={form.city}
                  onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
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
                  onChange={(e) => setForm((f) => ({ ...f, capacity: Number(e.target.value) }))}
                />
              </Grid>
            </Grid>
          </Section>
        </Box>

        {/* ===== Step 1 - Pricing ===== */}
        <Box sx={{ display: activeStep === 1 ? 'block' : 'none' }}>
          <Section title="Pricing" subtitle="Set your base price and surcharges">
            <Grid container spacing={3}>
              <Grid xs={12} md={4}>
                <TextField
                  fullWidth
                  type="number"
                  label="Base Price (₹/hour)"
                  value={form.basePrice}
                  onChange={(e) => setForm((f) => ({ ...f, basePrice: Number(e.target.value) }))}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MoneyIcon sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                  }}
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
                  onChange={(e) => setForm((f) => ({ ...f, weekendSurcharge: Number(e.target.value) }))}
                />
              </Grid>

              <Grid xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel id="pricing-model-label">Pricing Model</InputLabel>
                  <Select
                    labelId="pricing-model-label"
                    label="Pricing Model"
                    value={form.tieredPricing}
                    onChange={(e) => setForm((f) => ({ ...f, tieredPricing: e.target.value as string }))}
                  >
                    <MenuItem value="flat">Flat</MenuItem>
                    <MenuItem value="peak-offpeak">Dynamic (Peak/Off-peak)</MenuItem>
                    <MenuItem value="tiered">Tiered by duration</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Section>
        </Box>

        {/* ===== Step 2 - Amenities ===== */}
        <Box sx={{ display: activeStep === 2 ? 'block' : 'none' }}>
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
        </Box>

        {/* ===== Step 3 - Media ===== */}
        <Box sx={{ display: activeStep === 3 ? 'block' : 'none' }}>
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ImageIcon sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                  }}
                  error={idx === 0 && !form.images.some((u) => u.trim().length > 5)}
                  helperText={idx === 0 && !form.images.some((u) => u.trim().length > 5) ? 'At least one image URL is required' : ' '}
                />
              ))}

              <Button startIcon={<AddIcon />} onClick={addImageField}>
                Add another image
              </Button>
            </Stack>
          </Section>
        </Box>

        {/* ===== Step 4 - Availability ===== */}
        <Box sx={{ display: activeStep === 4 ? 'block' : 'none' }}>
          <Section title="Availability" subtitle="Set the hours guests can book your space">
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <Paper sx={{ p: 2 }} variant="outlined">
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                    Weekdays
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      label="Start"
                      type="time"
                      value={form.availability.weekdaysStart}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, availability: { ...f.availability, weekdaysStart: e.target.value } }))
                      }
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <TimeIcon sx={{ color: 'text.secondary' }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      label="End"
                      type="time"
                      value={form.availability.weekdaysEnd}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, availability: { ...f.availability, weekdaysEnd: e.target.value } }))
                      }
                      InputLabelProps={{ shrink: true }}
                    />
                  </Stack>
                </Paper>
              </Grid>

              <Grid xs={12} md={6}>
                <Paper sx={{ p: 2 }} variant="outlined">
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                    Weekends
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      label="Start"
                      type="time"
                      value={form.availability.weekendsStart}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, availability: { ...f.availability, weekendsStart: e.target.value } }))
                      }
                      InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                      label="End"
                      type="time"
                      value={form.availability.weekendsEnd}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, availability: { ...f.availability, weekendsEnd: e.target.value } }))
                      }
                      InputLabelProps={{ shrink: true }}
                    />
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Section>
        </Box>

        {/* ===== Step 5 - Review & Publish ===== */}
        <Box sx={{ display: activeStep === 5 ? 'block' : 'none' }}>
          <Section title="Review & Publish" subtitle="Review your details before submitting for approval">
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Grid container spacing={2}>
                <Grid xs={12} md={8}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {form.title || 'Untitled Space'}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    {form.type} • {form.capacity} people
                  </Typography>
                  <Typography sx={{ mb: 2 }}>{form.description || 'No description provided'}</Typography>
                  <Typography color="text.secondary">
                    {form.address}, {form.city}
                  </Typography>
                </Grid>

                <Grid xs={12} md={4}>
                  <Paper variant="outlined" sx={{ p: 2, bgcolor: 'grey.50' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Pricing
                    </Typography>
                    <Stack spacing={0.5}>
                      <Box display="flex" justifyContent="space-between">
                        <span>Base</span>
                        <b>₹{form.basePrice}/hr</b>
                      </Box>
                      {form.weekendSurcharge > 0 && (
                        <Box display="flex" justifyContent="space-between">
                          <span>Weekend</span>
                          <b>+₹{form.weekendSurcharge}/hr</b>
                        </Box>
                      )}
                      <Box display="flex" justifyContent="space-between">
                        <span>Model</span>
                        <b>{form.tieredPricing}</b>
                      </Box>
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Section>
        </Box>

        {/* Navigation */}
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>

          {activeStep < steps.length - 1 ? (
            <Button variant="contained" onClick={handleNext} disabled={!isStepValid(activeStep)}>
              Next
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleSubmit} startIcon={<CheckIcon />}>
              Submit Listing
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default HostSpacePage;
