'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'AI-Powered Development',
    detail: 'Claude Code, Cursor, and custom AI workflows — I ship faster because AI handles the boilerplate while I focus on architecture and business logic.',
    icon: '🤖',
  },
  {
    num: '02',
    title: 'Test-Driven Development',
    detail: 'Tests first, code second. Every feature ships with automated tests. No "works on my machine" — CI catches bugs before they reach production.',
    icon: '🧪',
  },
  {
    num: '03',
    title: 'Code Review & Standards',
    detail: 'Clean code isn\'t optional. SOLID principles, meaningful names, small functions. Your team can read and extend the codebase from day one.',
    icon: '✅',
  },
  {
    num: '04',
    title: 'Continuous Delivery',
    detail: 'GitHub Actions, ArgoCD, automated deployments. Working software ships weekly, not quarterly. Fast feedback loops catch issues early.',
    icon: '🚀',
  },
];

export function ProcessSection() {
  return (
    <Box id="process" sx={{ py: 12, background: 'var(--panel-bg)' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{ color: 'var(--harvest-gold)', textShadow: '3px 3px 0 var(--wood-dark)', mb: 1 }}
            >
              QUALITY + SPEED
            </Typography>
            <Typography sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.3rem', color: 'var(--cream-muted)' }}>
              ─── HOW I SHIP FAST WITHOUT CUTTING CORNERS ───
            </Typography>
          </Box>

          {/* Timeline */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
              gap: 0,
              position: 'relative',
            }}
          >
            {/* Connecting line (desktop only) */}
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                top: '52px',
                left: '12.5%',
                right: '12.5%',
                height: '3px',
                background: 'linear-gradient(90deg, var(--harvest-gold), var(--spring-green), var(--autumn-orange), var(--harvest-light))',
                zIndex: 0,
              }}
            />

            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    px: 2,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {/* Circle node */}
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      background: 'var(--dark-bg)',
                      border: '3px solid var(--harvest-gold)',
                      boxShadow: '4px 4px 0 var(--wood-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem',
                      mb: 2,
                      flexShrink: 0,
                    }}
                  >
                    {step.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: 'var(--font-press-start), "Press Start 2P"',
                      fontSize: '0.45rem',
                      color: 'var(--harvest-gold)',
                      mb: 1,
                    }}
                  >
                    STEP {step.num}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-press-start), "Press Start 2P"',
                      fontSize: '0.55rem',
                      color: 'var(--cream)',
                      mb: 2,
                      lineHeight: 2,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-vt323), "VT323"',
                      fontSize: '1.1rem',
                      color: 'var(--cream-muted)',
                      lineHeight: 1.6,
                    }}
                  >
                    {step.detail}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Inline CTA */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography
              sx={{
                fontFamily: 'var(--font-vt323), "VT323"',
                fontSize: '1.4rem',
                color: 'var(--cream-muted)',
                mb: 2,
              }}
            >
              Quality code, shipped on time. I care about your product — that&apos;s the promise.
            </Typography>
            <Button
              variant="contained"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              START A PROJECT
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
