'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { Email, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { profileData } from '@/data/profile-data';

export function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  return (
    <Box id="contact" sx={{ py: 12, background: 'var(--dark-bg)' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{ color: 'var(--harvest-gold)', textShadow: '3px 3px 0 var(--wood-dark)', mb: 1 }}
            >
              HIRE ME
            </Typography>
            <Typography sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.3rem', color: 'var(--cream-muted)', mb: 1 }}>
              ─── START YOUR PROJECT ───
            </Typography>
            <Typography sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.2rem', color: 'var(--spring-green)' }}>
              {profileData.availability}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            {/* Contact Info */}
            <Box sx={{ flex: 1 }}>
              <Box className="panel" sx={{ p: 3 }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-press-start), "Press Start 2P"',
                    fontSize: '0.6rem',
                    color: 'var(--harvest-gold)',
                    mb: 3,
                  }}
                >
                  REACH ME DIRECTLY
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Email sx={{ color: 'var(--autumn-orange)' }} />
                    <Typography sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.2rem' }}>
                      {profileData.contact.email}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LinkedIn sx={{ color: 'var(--spring-green)' }} />
                    <Typography
                      component="a"
                      href="https://www.linkedin.com/in/sangbui20501/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.2rem', color: 'inherit', textDecoration: 'none', '&:hover': { color: 'var(--harvest-gold)' } }}
                    >
                      {profileData.contact.linkedin}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Contact Form */}
            <Box sx={{ flex: 1 }}>
              <Box
                className="cozy-dialog"
                sx={{ background: 'var(--panel-bg)', color: 'var(--cream)', '&::before': { borderColor: 'var(--wood-tan)' } }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-press-start), "Press Start 2P"',
                    fontSize: '0.6rem',
                    color: 'var(--harvest-gold)',
                    mb: 1,
                  }}
                >
                  TELL ME ABOUT YOUR PROJECT
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-vt323), "VT323"',
                    fontSize: '1rem',
                    color: 'var(--cream-muted)',
                    mb: 3,
                  }}
                >
                  What are you building? I&apos;ll get back within 24 hours.
                </Typography>

                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    fullWidth
                    label="YOUR NAME"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    InputLabelProps={{ sx: { fontFamily: 'var(--font-press-start), "Press Start 2P"', fontSize: '0.5rem' } }}
                  />
                  <TextField
                    fullWidth
                    label="YOUR EMAIL"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    InputLabelProps={{ sx: { fontFamily: 'var(--font-press-start), "Press Start 2P"', fontSize: '0.5rem' } }}
                  />
                  <TextField
                    fullWidth
                    label="DESCRIBE YOUR PROJECT"
                    multiline
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    InputLabelProps={{ sx: { fontFamily: 'var(--font-press-start), "Press Start 2P"', fontSize: '0.5rem' } }}
                  />
                  <Button variant="contained" fullWidth>
                    LET&apos;S BUILD TOGETHER
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
