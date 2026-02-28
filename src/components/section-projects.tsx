'use client';

import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip, Button } from '@mui/material';
import { Gavel } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/data/profile-data';

// Company branding: logo path or fallback initials + color
const companyBranding: Record<string, { logo?: string; initials: string; color: string; bg: string }> = {
  'Deepxplore':           { initials: 'DX', color: '#fff',    bg: '#D47A0D' },
  'Be Software':          { logo: 'https://avatars.githubusercontent.com/u/16866525?v=4', initials: 'BE', color: '#fff', bg: '#0693E3' },
  'Handlpay':             { logo: '/logos/handlpay.png', initials: 'HP', color: '#fff', bg: '#1a3a6e' },
  'Metro Digital':        { logo: '/logos/metro-digital.png', initials: 'MT', color: '#fff', bg: '#cc0000' },
  'DuelAllDay':           { initials: 'DA', color: '#fff',    bg: '#6b21a8' },
  'SAMCO - AIOT Lab':     { initials: 'SC', color: '#fff',    bg: '#0e7490' },
};

function CompanyLogo({ client }: { client: string }) {
  const brand = companyBranding[client];
  if (!brand) {
    return (
      <Box sx={{ width: 28, height: 28, borderRadius: '4px', background: 'var(--wood-tan)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ fontSize: '0.55rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-press-start), "Press Start 2P"' }}>
          {client.slice(0, 2).toUpperCase()}
        </Typography>
      </Box>
    );
  }

  if (brand.logo) {
    return (
      <Box
        sx={{
          width: 28, height: 28, borderRadius: '4px',
          background: brand.bg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <Image src={brand.logo} alt={client} width={22} height={22} style={{ objectFit: 'contain' }} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: 28, height: 28, borderRadius: '4px',
        background: brand.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <Typography sx={{ fontSize: '0.5rem', fontWeight: 700, color: brand.color, fontFamily: 'var(--font-press-start), "Press Start 2P"' }}>
        {brand.initials}
      </Typography>
    </Box>
  );
}

export function ProjectsSection() {
  const flagship = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Box id="projects" sx={{ py: 12, background: 'var(--panel-bg)' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 1 }}>
              <Gavel sx={{ color: 'var(--harvest-gold)', fontSize: 32 }} />
              <Typography
                variant="h2"
                sx={{ color: 'var(--harvest-gold)', textShadow: '3px 3px 0 var(--wood-dark)' }}
              >
                PORTFOLIO
              </Typography>
            </Box>
            <Typography sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.3rem', color: 'var(--cream-muted)' }}>
              ─── PRODUCTS SHIPPED ───
            </Typography>
          </Box>

          {/* Flagship project — full width spotlight */}
          {flagship && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                className="project-card"
                sx={{
                  mb: 4,
                  borderColor: 'var(--harvest-gold)',
                  boxShadow: '0 0 20px rgba(59,130,246,0.2), 8px 8px 0 var(--wood-dark)',
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(15,23,42,0.9) 100%)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography sx={{ fontSize: '1.8rem' }}>✦</Typography>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-press-start), "Press Start 2P"',
                          fontSize: '0.5rem',
                          color: 'var(--harvest-light)',
                          mb: 0.5,
                        }}
                      >
                        CASE STUDY
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-press-start), "Press Start 2P"',
                          fontSize: '0.8rem',
                          color: 'var(--cream)',
                        }}
                      >
                        {flagship.name}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CompanyLogo client={flagship.client} />
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-press-start), "Press Start 2P"',
                        fontSize: '0.5rem',
                        color: 'var(--harvest-gold)',
                      }}
                    >
                      {flagship.client}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-vt323), "VT323"',
                      fontSize: '1.2rem',
                      color: 'var(--cream)',
                      mb: 2,
                      lineHeight: 1.7,
                    }}
                  >
                    {flagship.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 3 }}>
                    {flagship.stack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          fontFamily: 'var(--font-vt323), "VT323"',
                          fontSize: '0.9rem',
                          background: 'rgba(59,130,246,0.15)',
                          color: 'var(--autumn-light)',
                          border: '1px solid var(--harvest-gold)',
                          height: 24,
                        }}
                      />
                    ))}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-vt323), "VT323"',
                      fontSize: '1.1rem',
                      color: 'var(--harvest-light)',
                      cursor: 'pointer',
                    }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Want something like this? Let&apos;s talk. ▶
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Remaining project grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 3,
              mb: 6,
            }}
          >
            {rest.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="project-card" sx={{ height: '100%' }}>
                  <Box
                    sx={{
                      p: 2,
                      background: 'linear-gradient(180deg, rgba(59,130,246,0.12) 0%, var(--panel-bg) 100%)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <CompanyLogo client={project.client} />
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-press-start), "Press Start 2P"',
                        fontSize: '0.45rem',
                        color: 'var(--harvest-gold)',
                        textAlign: 'right',
                        ml: 1,
                      }}
                    >
                      {project.client}
                    </Typography>
                  </Box>

                  <CardContent sx={{ p: 2 }}>
                    <Typography sx={{ fontFamily: 'var(--font-press-start), "Press Start 2P"', fontSize: '0.5rem', color: 'var(--cream)', mb: 1 }}>
                      {project.name}
                    </Typography>
                    <Typography sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1rem', color: 'var(--cream-muted)', mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {project.stack.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            fontFamily: 'var(--font-vt323), "VT323"',
                            fontSize: '0.85rem',
                            background: 'rgba(59,130,246,0.12)',
                            color: 'var(--autumn-light)',
                            height: 22,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>

          {/* Bottom CTA */}
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="outlined"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              START YOUR PROJECT
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
