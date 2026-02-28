'use client';

import React from 'react';
import { Box, Container, Typography, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <Box id="about" sx={{ py: 12, background: 'var(--dark-bg)' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Title */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{ color: 'var(--harvest-gold)', textShadow: '3px 3px 0 var(--wood-dark)', mb: 1 }}
            >
              ABOUT
            </Typography>
            <Typography sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.3rem', color: 'var(--cream-muted)' }}>
              ─── WHO I WORK WITH ───
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {/* Service pitch */}
            <Box className="cozy-dialog">
              <Typography
                sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.5rem', color: 'var(--wood-dark)', lineHeight: 1.8 }}
              >
                I build production-grade web applications and AI pipelines for startups and enterprises.
                Whether you need an embedded team member or a standalone contractor — I ship working software, weekly.
              </Typography>

              <Box sx={{ mt: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label="Async-first" sx={{ background: 'var(--leaf-green)', color: 'var(--cream)' }} />
                <Chip label="Weekly releases" sx={{ background: 'var(--wood-tan)', color: 'var(--cream)' }} />
                <Chip label="Clean handoffs" sx={{ background: 'var(--spring-green)', color: 'var(--wood-dark)' }} />
                <Chip label="Timezone flexible" sx={{ background: 'var(--wood-brown)', color: 'var(--cream)' }} />
                <Chip label="Startup to enterprise" sx={{ background: 'var(--autumn-orange)', color: 'var(--wood-dark)' }} />
              </Box>
            </Box>

            {/* Inline CTA */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="outlined"
                size="small"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                SEE HOW I CAN HELP ▶
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
