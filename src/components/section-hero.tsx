'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { profileData } from '@/data/profile-data';
import { TypewriterText } from './retro-ui';
import { ShootingStars } from './shooting-stars';

const socialProof = [
  { value: `${profileData.clients}+`, label: 'clients served', icon: '🤝' },
  { value: profileData.experience, label: 'shipping software', icon: '📦' },
  { value: '3', label: 'industries', icon: '🌐' },
];

export function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, var(--darker-bg) 0%, var(--dark-bg) 50%, var(--panel-bg) 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
      }}
    >
      {/* Soft radial glow backdrop */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(2px 2px at 20% 30%, var(--spring-light) 50%, transparent 50%),
            radial-gradient(2px 2px at 40% 70%, var(--harvest-gold) 50%, transparent 50%),
            radial-gradient(2px 2px at 60% 20%, var(--autumn-orange) 50%, transparent 50%),
            radial-gradient(2px 2px at 80% 60%, var(--cream-dim) 50%, transparent 50%),
            radial-gradient(2px 2px at 10% 80%, var(--spring-green) 50%, transparent 50%),
            radial-gradient(2px 2px at 90% 40%, var(--harvest-light) 50%, transparent 50%)
          `,
          backgroundSize: '200px 200px',
          opacity: 0.25,
          animation: 'float 10s ease-in-out infinite',
        }}
      />

      {/* Shooting stars */}
      <ShootingStars />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            {/* Impact headline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-press-start), "Press Start 2P"',
                  fontSize: { xs: '0.75rem', md: '1.1rem' },
                  color: 'var(--cream)',
                  textShadow: '3px 3px 0 var(--wood-dark)',
                  mb: 3,
                  lineHeight: 2,
                }}
              >
                I BUILD SOFTWARE
                <Box component="span" sx={{ color: 'var(--harvest-gold)' }}> THAT SHIPS.</Box>
              </Typography>
            </motion.div>

            {/* Profile Card */}
            <Box className="profile-card" sx={{ mx: 'auto', mb: 4, maxWidth: 420 }}>
              <Box className="profile-card-inner">
                {/* Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography sx={{ fontFamily: 'var(--font-press-start), "Press Start 2P"', fontSize: '0.6rem', color: 'var(--harvest-gold)' }}>
                    PROFILE
                  </Typography>
                  <Typography sx={{ fontFamily: 'var(--font-press-start), "Press Start 2P"', fontSize: '0.6rem', color: 'var(--spring-green)' }}>
                    AVAILABLE
                  </Typography>
                </Box>

                {/* Avatar & Info */}
                <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      background: 'var(--panel-bg)',
                      border: '3px solid var(--harvest-gold)',
                      overflow: 'hidden',
                    }}
                  >
                    <Image src="/profile.jpg" alt="Sang Bui" width={100} height={100} style={{ objectFit: 'cover' }} />
                  </Box>
                  <Box sx={{ flex: 1, textAlign: 'left' }}>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-press-start), "Press Start 2P"',
                        fontSize: '1rem',
                        color: 'var(--cream)',
                        mb: 1,
                        textShadow: '2px 2px 0 var(--wood-dark)',
                      }}
                    >
                      {profileData.name}
                    </Typography>
                    <Typography sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.3rem', color: 'var(--harvest-gold)' }}>
                      {profileData.title}
                    </Typography>
                    <Typography sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.1rem', color: 'var(--cream-muted)' }}>
                      {profileData.experience} experience
                    </Typography>
                  </Box>
                </Box>

                {/* Social proof stats */}
                <Box sx={{ background: 'rgba(0,0,0,0.3)', p: 2, border: '2px solid var(--wood-tan)' }}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
                    {socialProof.map((stat) => (
                      <Box key={stat.label} sx={{ textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '1.2rem', mb: 0.5 }}>{stat.icon}</Typography>
                        <Typography sx={{ fontFamily: 'var(--font-press-start), "Press Start 2P"', fontSize: '0.65rem', color: 'var(--harvest-gold)' }}>
                          {stat.value}
                        </Typography>
                        <Typography sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '0.85rem', color: 'var(--cream-muted)', mt: 0.5 }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Typewriter tagline */}
            <Typography sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.8rem', color: 'var(--cream-muted)', mb: 4 }}>
              <TypewriterText text={profileData.tagline} speed={40} />
            </Typography>

            {/* CTA Buttons */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 6 }}>
              <Button
                variant="contained"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                SEE MY WORK
              </Button>
              <Button
                variant="outlined"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                HIRE ME
              </Button>
            </Box>

            {/* Scroll prompt */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-vt323), "VT323"',
                  fontSize: '1rem',
                  color: 'var(--cream-muted)',
                  opacity: 0.6,
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                ▼ scroll to explore
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
