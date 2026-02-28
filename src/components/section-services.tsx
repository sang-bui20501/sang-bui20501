'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Full-Stack Web Apps',
    pain: 'Need to ship a product but your team is stretched thin?',
    solution: 'I embed as a senior dev and deliver working features every week — from database schema to polished UI.',
    color: 'var(--harvest-gold)',
  },
  {
    num: '02',
    title: 'AI & Automation',
    pain: 'Spending engineer hours on work that should be automated?',
    solution: 'I design AI workflows and LLM pipelines that cut manual work down to zero. Proven in production at scale.',
    color: 'var(--spring-green)',
  },
  {
    num: '03',
    title: 'Technical Consulting',
    pain: "Making a costly architecture decision without senior input?",
    solution: 'I review your stack, flag the risks, and give you a clear path forward — before you build the wrong thing.',
    color: 'var(--autumn-orange)',
  },
];

export function ServicesSection() {
  return (
    <Box id="services" sx={{ py: 12, background: 'var(--darker-bg)' }}>
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
              SERVICES
            </Typography>
            <Typography sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.3rem', color: 'var(--cream-muted)' }}>
              ─── WHAT I DO FOR CLIENTS ───
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {services.map((service, index) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 2, md: 5 },
                    alignItems: 'flex-start',
                    p: 4,
                    background: 'linear-gradient(135deg, var(--card-bg) 0%, var(--panel-bg) 100%)',
                    border: `3px solid ${service.color}`,
                    boxShadow: `6px 6px 0 var(--wood-dark)`,
                    flexDirection: { xs: 'column', md: 'row' },
                  }}
                >
                  {/* Number */}
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-press-start), "Press Start 2P"',
                      fontSize: { xs: '2rem', md: '3rem' },
                      color: service.color,
                      opacity: 0.35,
                      lineHeight: 1,
                      flexShrink: 0,
                      minWidth: { md: '100px' },
                    }}
                  >
                    {service.num}
                  </Typography>

                  {/* Content */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-press-start), "Press Start 2P"',
                        fontSize: '0.75rem',
                        color: service.color,
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* Pain point */}
                    <Box
                      sx={{
                        mb: 2,
                        pl: 2,
                        borderLeft: `3px solid var(--wood-tan)`,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-vt323), "VT323"',
                          fontSize: '1.2rem',
                          color: 'var(--cream-muted)',
                          fontStyle: 'italic',
                        }}
                      >
                        &ldquo;{service.pain}&rdquo;
                      </Typography>
                    </Box>

                    {/* Solution */}
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-vt323), "VT323"',
                        fontSize: '1.3rem',
                        color: 'var(--cream)',
                        lineHeight: 1.7,
                      }}
                    >
                      {service.solution}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Inline CTA */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="outlined"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              LET&apos;S BUILD YOURS
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
