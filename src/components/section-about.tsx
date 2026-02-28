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
            {/* Pain-point hook */}
            <Box
              sx={{
                mb: 4,
                p: 3,
                border: '3px solid var(--wood-tan)',
                background: 'rgba(0,0,0,0.25)',
                boxShadow: '6px 6px 0 var(--wood-dark)',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-press-start), "Press Start 2P"',
                  fontSize: '0.55rem',
                  color: 'var(--cream-muted)',
                  mb: 2,
                }}
              >
                THE COMMON STRUGGLE
              </Typography>
              <Typography
                sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.35rem', color: 'var(--cream-muted)', lineHeight: 1.8, fontStyle: 'italic' }}
              >
                &ldquo;We need to ship fast, but finding a senior dev who can work independently,
                communicate clearly, and not disappear mid-project — is harder than building the product.&rdquo;
              </Typography>
            </Box>

            {/* Service pitch */}
            <Box className="cozy-dialog">
              <Typography
                sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.5rem', color: 'var(--wood-dark)', lineHeight: 1.8 }}
              >
                I build production-grade web applications and AI pipelines for startups and enterprises.
                Whether you need an embedded team member or a standalone contractor — I ship working software, weekly.
              </Typography>

              <Box sx={{ mt: 2, mb: 1 }}>
                <Typography
                  sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.3rem', color: 'var(--wood-dark)', lineHeight: 1.8 }}
                >
                  Past clients include a €29B wholesale giant, an Australian HR platform used by thousands of businesses,
                  and an AI performance testing startup. I work async-first and handle everything from architecture to deployment.
                </Typography>
              </Box>

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
