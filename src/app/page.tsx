'use client';

import { Box } from '@mui/material';
import {
  Navigation,
  ScrollTop,
  Footer,
  HeroSection,
  AboutSection,
  ServicesSection,
  SkillsSection,
  ProcessSection,
  ProjectsSection,
  ContactSection,
} from '@/components';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', background: 'var(--dark-bg)' }}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ProcessSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollTop />
    </Box>
  );
}
