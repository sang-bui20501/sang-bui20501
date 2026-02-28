'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

// Tech icon using devicon class names or emoji fallback
export function TechIcon({ icon, size = 24 }: { icon: string; size?: number }) {
  // Emoji or symbol fallback (non-devicon icons start with non-letter or are single char)
  if (!icon.startsWith('devicon-')) {
    return (
      <span style={{ fontSize: size * 0.7, lineHeight: 1 }}>{icon}</span>
    );
  }
  return (
    <i
      className={`${icon} colored tech-icon`}
      style={{ fontSize: size, lineHeight: 1 }}
      aria-hidden="true"
    />
  );
}

// XP bar with color coding based on experience percentage
export function XPBar({ value, max = 100, showText = true }: { value: number; max?: number; showText?: boolean }) {
  const percentage = (value / max) * 100;

  return (
    <Box sx={{ width: '100%' }}>
      {showText && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
          <Typography variant="caption" sx={{ fontFamily: 'var(--font-press-start), "Press Start 2P"', fontSize: '0.5rem' }}>
            {value}%
          </Typography>
        </Box>
      )}
      <div className="skill-bar-container">
        <div className="skill-bar" style={{ width: `${percentage}%` }} />
      </div>
    </Box>
  );
}

// Typewriter effect for text
export function TypewriterText({ text, speed = 50 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      <span style={{ opacity: showCursor ? 1 : 0 }}>_</span>
    </span>
  );
}
