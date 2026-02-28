'use client';

import React, { useState, useEffect } from 'react';
import {
  Box, Button, IconButton, AppBar, Toolbar, Typography,
  useScrollTrigger, Fade,
} from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

const navItems = [
  { id: 'about', label: 'ABOUT' },
  { id: 'services', label: 'SERVICES' },
  { id: 'projects', label: 'PORTFOLIO' },
  { id: 'contact', label: 'HIRE ME' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((i) => i.id);
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled ? 'rgba(10,15,26,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(4px)' : 'none',
        transition: 'background 0.3s ease',
        borderBottom: scrolled ? '2px solid var(--harvest-gold)' : 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          sx={{
            fontFamily: 'var(--font-press-start), "Press Start 2P"',
            fontSize: { xs: '0.6rem', md: '0.8rem' },
            color: 'var(--harvest-gold)',
            textShadow: '2px 2px 0 var(--wood-dark)',
          }}
        >
          🚀 SANG.DEV
        </Typography>

        <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 } }}>
          {navItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              sx={{
                fontFamily: 'var(--font-press-start), "Press Start 2P"',
                fontSize: { xs: '0.4rem', md: '0.55rem' },
                color: activeSection === item.id ? 'var(--harvest-gold)' : 'var(--cream)',
                minWidth: 'auto',
                px: { xs: 1, md: 2 },
                py: 1,
                border: 'none',
                boxShadow: 'none',
                '&::before': {
                  content: activeSection === item.id ? '"▶ "' : '""',
                },
                '&:hover': {
                  background: 'rgba(59,130,246,0.15)',
                  transform: 'none',
                  boxShadow: 'none',
                  color: 'var(--harvest-light)',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export function ScrollTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Fade in={trigger}>
      <Box
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        role="presentation"
        sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}
      >
        <IconButton
          sx={{
            background: 'var(--autumn-orange)',
            border: '3px solid var(--harvest-gold)',
            boxShadow: '4px 4px 0 var(--wood-dark)',
            borderRadius: 0,
            '&:hover': {
              background: 'var(--harvest-light)',
              transform: 'translateY(-2px)',
              boxShadow: '4px 6px 0 var(--wood-dark)',
            },
          }}
        >
          <KeyboardArrowUp sx={{ color: 'var(--wood-dark)' }} />
        </IconButton>
      </Box>
    </Fade>
  );
}

export function Footer() {
  return (
    <Box
      sx={{
        py: 4,
        background: 'var(--darker-bg)',
        borderTop: '3px solid var(--harvest-gold)',
        textAlign: 'center',
      }}
    >
      <Typography sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.2rem', color: 'var(--cream-muted)', mb: 1 }}>
        Crafted with Next.js, React &amp; Framer Motion
      </Typography>
      <Typography sx={{ fontFamily: 'var(--font-press-start), "Press Start 2P"', fontSize: '0.5rem', color: 'var(--wood-tan)' }}>
        © 2025 SANG BUI • BUILDING SOFTWARE THAT SHIPS
      </Typography>
    </Box>
  );
}
