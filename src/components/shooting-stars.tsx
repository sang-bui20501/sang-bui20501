'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';

interface Star {
  id: number;
  startX: number;
  startY: number;
  duration: number;
  angle: number;
}

export function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createStar = () => {
      const angle = 55 + Math.random() * 20; // 55-75 degrees (steep diagonal)
      const star: Star = {
        id: Date.now() + Math.random(),
        startX: 5 + Math.random() * 60,
        startY: -5 + Math.random() * 20,
        duration: 0.3 + Math.random() * 0.4, // Super fast: 0.3-0.7s
        angle,
      };
      setStars((prev) => [...prev, star]);

      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== star.id));
      }, star.duration * 1000 + 100);
    };

    // Initial burst
    createStar();
    setTimeout(createStar, 200);

    // Spawn randomly
    const interval = setInterval(() => {
      if (Math.random() > 0.5) createStar();
    }, 400 + Math.random() * 600);

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
        {stars.map((star) => {
          // Calculate end position based on angle (steep diagonal down-right)
          const distance = 120; // % of viewport
          const rad = (star.angle * Math.PI) / 180;
          const endX = star.startX + Math.cos(rad) * distance * 0.5;
          const endY = star.startY + Math.sin(rad) * distance;

          return (
            <motion.div
              key={star.id}
              initial={{ left: `${star.startX}%`, top: `${star.startY}%`, opacity: 1, scale: 1 }}
              animate={{ left: `${endX}%`, top: `${endY}%`, opacity: [1, 1, 0], scale: [1, 0.8, 0.5] }}
              transition={{ duration: star.duration, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: 3,
                height: 3,
                background: '#fff',
                borderRadius: '50%',
                boxShadow: '0 0 8px 4px rgba(255,255,255,0.9), 0 0 20px 10px rgba(100,180,255,0.5)',
              }}
            >
              {/* Long trail aligned with movement direction */}
              <div
                style={{
                  position: 'absolute',
                  width: 2,
                  height: 120,
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(100,180,255,0.2) 20%, rgba(255,255,255,0.7) 100%)',
                  bottom: '50%',
                  left: '50%',
                  transform: `translateX(-50%) rotate(${star.angle - 90}deg)`,
                  transformOrigin: 'bottom center',
                }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </Box>
  );
}
