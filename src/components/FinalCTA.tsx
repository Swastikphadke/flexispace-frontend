import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Button, Container, Stack, InputBase } from '@mui/material';
import { Search, ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: `
            radial-gradient(circle at 20% 20%, rgba(255, 90, 95, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 123, 255, 0.03) 0%, transparent 50%)
          `,
          zIndex: 0,
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stack spacing={4} sx={{ textAlign: 'center' }}>
            {/* Headline */}
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: 'clamp(28px, 5vw, 42px)',
                fontWeight: 700,
                color: '#2D2D2D',
                lineHeight: 1.2,
              }}
            >
              Find Your Perfect Venue
              <br />
              <span style={{ color: '#FF5A5F' }}>Today</span>
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                color: '#6B7280',
                maxWidth: '500px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Join thousands of event organizers who trust FlexiSpace 
              for their venue needs across Bengaluru
            </Typography>

            {/* Search CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '2px solid #E5E7EB',
                  p: 1.5,
                  maxWidth: '600px',
                  mx: 'auto',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                  '&:focus-within': {
                    borderColor: '#FF5A5F',
                    boxShadow: '0 0 0 3px rgba(255, 90, 95, 0.1)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, px: 2 }}>
                  <Search size={20} style={{ color: '#9CA3AF', marginRight: '12px' }} />
                  <InputBase
                    placeholder="What kind of space do you need?"
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
                  endIcon={<ArrowRight size={18} />}
                  sx={{
                    borderRadius: '16px',
                    px: 4,
                    py: 1.5,
                    fontSize: '16px',
                    fontWeight: 600,
                    backgroundColor: '#FF5A5F',
                    minWidth: '160px',
                    '&:hover': { backgroundColor: '#E6444A' },
                  }}
                >
                  Start Exploring
                </Button>
              </Box>
            </motion.div>

            {/* Trust indicators */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              sx={{ justifyContent: 'center', alignItems: 'center', mt: 4 }}
            >
              {[
                '✓ Instant confirmation',
                '✓ Secure payments',
                '✓ 24/7 support',
              ].map((item, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    color: '#6B7280',
                    fontSize: '14px',
                    fontWeight: 500,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};