'use client';

import React from 'react';
import { Box, Container, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { skills, extraTechs } from '@/data/profile-data';
import { TechIcon } from './retro-ui';

const serviceGroups = [
  {
    label: 'Full-Stack Web Development',
    categories: ['Frontend', 'Backend', 'Language', 'Database'],
  },
  {
    label: 'Infrastructure & DevOps',
    categories: ['DevOps'],
  },
];

export function SkillsSection() {
  const featuredSkill = skills.find((s) => s.featured);
  const regularSkills = skills.filter((s) => !s.featured);

  return (
    <Box id="skills" sx={{ py: 12, background: 'var(--panel-bg)' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{ color: 'var(--harvest-gold)', textShadow: '3px 3px 0 var(--wood-dark)', mb: 1 }}
            >
              STACK
            </Typography>
            <Typography sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.3rem', color: 'var(--cream-muted)', mb: 2 }}>
              ─── TECH I SPECIALIZE IN ───
            </Typography>
            <Typography sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.15rem', color: 'var(--cream-dim)', maxWidth: 600, mx: 'auto' }}>
              In the AI era, tech stack matters less — what matters is shipping. These are the tools I&apos;ve used to deliver production systems for years.
            </Typography>
          </Box>

          {/* AI Automation Callout */}
          {featuredSkill && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  mb: 6,
                  p: 3,
                  border: '3px solid var(--harvest-gold)',
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(15,23,42,0.8) 100%)',
                  boxShadow: '0 0 16px rgba(59,130,246,0.2), 6px 6px 0 var(--wood-dark)',
                  position: 'relative',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Typography sx={{ fontSize: '1.5rem' }}>✦</Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-press-start), "Press Start 2P"',
                      fontSize: '0.65rem',
                      color: 'var(--harvest-gold)',
                      textShadow: '0 0 8px rgba(59,130,246,0.5)',
                    }}
                  >
                    AI & AUTOMATION
                  </Typography>
                  <Typography sx={{ fontSize: '1.5rem' }}>✦</Typography>
                </Box>
                <Typography sx={{ fontFamily: 'var(--font-vt323), "VT323"', fontSize: '1.25rem', color: 'var(--cream)' }}>
                  I design and build AI-powered workflows that replace manual processes — intelligent test automation,
                  AI-assisted development pipelines, LLM integrations. Proven at Deepxplore: delivered a full AI
                  platform for E2E performance testing used in production.
                </Typography>
              </Box>
            </motion.div>
          )}

          {/* Tech by service area */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mb: 6 }}>
            {serviceGroups.map((group) => {
              const groupSkills = regularSkills.filter((s) => group.categories.includes(s.category));
              return (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Box className="panel" sx={{ p: 3 }}>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-press-start), "Press Start 2P"',
                        fontSize: '0.55rem',
                        color: 'var(--harvest-gold)',
                        mb: 2,
                      }}
                    >
                      {group.label.toUpperCase()}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                      {groupSkills.map((skill) => (
                        <Chip
                          key={skill.name}
                          icon={<TechIcon icon={skill.icon} size={16} />}
                          label={skill.name}
                          sx={{
                            fontFamily: 'var(--font-vt323), "VT323"',
                            fontSize: '1.1rem',
                            background: 'rgba(59,130,246,0.15)',
                            color: 'var(--cream)',
                            border: '2px solid rgba(59,130,246,0.3)',
                            '& .MuiChip-icon': { ml: 0.5 },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </Box>

          {/* Additional Technologies */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                fontFamily: 'var(--font-press-start), "Press Start 2P"',
                fontSize: '0.6rem',
                color: 'var(--cream-muted)',
                mb: 2,
              }}
            >
              ALSO WORKS WITH:
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
              {extraTechs.map((tech) => (
                <Chip
                  key={tech.name}
                  icon={<TechIcon icon={tech.icon} size={16} />}
                  label={tech.name}
                  size="small"
                  sx={{
                    fontFamily: 'var(--font-vt323), "VT323"',
                    fontSize: '1rem',
                    background: 'rgba(59,130,246,0.1)',
                    color: 'var(--cream-dim)',
                    border: '2px solid rgba(59,130,246,0.2)',
                    '& .MuiChip-icon': { ml: 0.5 },
                  }}
                />
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
