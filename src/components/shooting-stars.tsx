'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';

interface Star {
  id: number;
  x: number;
  duration: number;
  delay: number;
}

export function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createStar = () => {
      const star: Star = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        duration: 2 + Math.random() * 2,
        delay: 0,
      };
      setStars((prev) => [...prev, star]);

      // Remove star after animation
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== star.id));
      }, star.duration * 1000 + 500);
    };

    // Initial stars
    createStar();
    setTimeout(createStar, 500);

    // Spawn new stars randomly
    const interval = setInterval(() => {
      if (Math.random() > 0.3) createStar();
    }, 800 + Math.random() * 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <AnimatePresence>
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ x: `${star.x}vw`, y: '-5%', opacity: 0 }}
            animate={{ x: `${star.x + 15}vw`, y: '110%', opacity: [0, 0.5, 0.5, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: star.duration, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: 3,
              height: 3,
              background: 'rgba(255,255,255,0.7)',
              borderRadius: '50%',
              boxShadow: '0 0 4px 2px rgba(255,255,255,0.4), 0 0 8px 4px rgba(59,130,246,0.25)',
            }}
          >
            {/* Trail — rotated to match diagonal trajectory (down-right movement, trail points up-left) */}
            <div
              style={{
                position: 'absolute',
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%) rotate(15deg)',
                transformOrigin: 'bottom center',
                width: 2,
                height: 50,
                background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.2), rgba(255,255,255,0.35))',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </Box>
  );
}
