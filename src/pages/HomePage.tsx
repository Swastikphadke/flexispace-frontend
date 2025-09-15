import React from 'react';
import { Box } from '@mui/material';
import { HeroSection } from '../components/HeroSection';
import { FeatureCards } from '../components/FeatureCards';

const HomePage: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <FeatureCards />
    </Box>
  );
};

export { HomePage };
export default HomePage;