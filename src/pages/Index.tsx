
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '../theme/theme';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import JoinWaitlistModal from '../components/JoinWaitlistModal';

const Index: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <HeroSection />
      <JoinWaitlistModal />
    </ThemeProvider>
  );
};

export default Index;
