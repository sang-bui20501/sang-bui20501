'use client';

import { createTheme } from '@mui/material/styles';

// Stardew Valley cozy farm color palette
const cozyColors = {
  // Warm text
  cream: '#f5e6d0',
  creamDim: '#eee8dc',
  creamMuted: '#d4c4a8',
  wheat: '#c9a87c',

  // Accent / primary
  harvestGold: '#d4a017',
  harvestLight: '#e8c44a',
  autumnOrange: '#e8913a',
  springGreen: '#7bc96a',
  springLight: '#a0d890',

  // Backgrounds
  darkBg: '#1a2e1a',
  darkerBg: '#0f1f0f',
  panelBg: '#243624',
  cardBg: '#2e4020',

  // Wood tones
  woodDark: '#2a1f14',
  woodBrown: '#3d2b1a',
  woodTan: '#5c4033',
  woodLight: '#6b4c30',

  // XP bar
  xpGreen: '#7bc96a',
  xpYellow: '#d4a017',
  xpRed: '#c04a2a',
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: cozyColors.harvestGold,
      light: cozyColors.harvestLight,
      dark: cozyColors.autumnOrange,
      contrastText: cozyColors.woodDark,
    },
    secondary: {
      main: cozyColors.springGreen,
      light: cozyColors.springLight,
      dark: cozyColors.springGreen,
      contrastText: cozyColors.woodDark,
    },
    error: {
      main: cozyColors.xpRed,
    },
    warning: {
      main: cozyColors.autumnOrange,
    },
    success: {
      main: cozyColors.springGreen,
    },
    background: {
      default: cozyColors.darkBg,
      paper: cozyColors.panelBg,
    },
    text: {
      primary: cozyColors.cream,
      secondary: cozyColors.creamMuted,
    },
    divider: cozyColors.woodTan,
  },
  typography: {
    fontFamily: 'var(--font-press-start), "Press Start 2P", monospace',
    h1: {
      fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.02em',
    },
    h2: {
      fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.02em',
    },
    h3: {
      fontSize: 'clamp(0.9rem, 2vw, 1.3rem)',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h4: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.5 },
    h5: { fontSize: '0.85rem', fontWeight: 400, lineHeight: 1.5 },
    h6: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.5 },
    body1: {
      fontFamily: 'var(--font-vt323), "VT323", monospace',
      fontSize: '1.3rem',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: 'var(--font-vt323), "VT323", monospace',
      fontSize: '1.1rem',
      lineHeight: 1.5,
    },
    button: {
      fontFamily: 'var(--font-press-start), "Press Start 2P", monospace',
      fontSize: '0.7rem',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    caption: {
      fontFamily: 'var(--font-vt323), "VT323", monospace',
      fontSize: '1rem',
    },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { imageRendering: 'pixelated' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '10px 22px',
          border: `3px solid ${cozyColors.harvestGold}`,
          boxShadow: `4px 4px 0px ${cozyColors.woodDark}`,
          transition: 'all 0.15s ease',
          position: 'relative' as const,
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: `4px 6px 0px ${cozyColors.woodDark}`,
          },
          '&:active': {
            transform: 'translate(2px, 2px)',
            boxShadow: `2px 2px 0px ${cozyColors.woodDark}`,
          },
        },
        contained: {
          background: cozyColors.autumnOrange,
          color: cozyColors.woodDark,
          '&:hover': { background: cozyColors.harvestLight },
        },
        outlined: {
          borderColor: cozyColors.harvestGold,
          color: cozyColors.harvestGold,
          '&:hover': {
            borderColor: cozyColors.harvestLight,
            background: 'rgba(212,160,23,0.12)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: `3px solid ${cozyColors.harvestGold}`,
          boxShadow: `6px 6px 0px ${cozyColors.woodDark}`,
          background: cozyColors.panelBg,
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: `6px 8px 0px ${cozyColors.woodDark}`,
            borderColor: cozyColors.harvestLight,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontFamily: '"VT323", monospace',
          fontSize: '1rem',
          height: 28,
          border: `2px solid ${cozyColors.woodTan}`,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 16,
          borderRadius: 0,
          border: `2px solid ${cozyColors.woodTan}`,
          backgroundColor: cozyColors.woodDark,
        },
        bar: { borderRadius: 0 },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: cozyColors.darkerBg,
          boxShadow: `0 3px 0 ${cozyColors.woodTan}`,
          borderBottom: `3px solid ${cozyColors.harvestGold}`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            fontFamily: '"VT323", monospace',
            fontSize: '1.2rem',
            borderRadius: 0,
            '& fieldset': {
              borderWidth: 3,
              borderColor: cozyColors.woodTan,
            },
            '&:hover fieldset': { borderColor: cozyColors.harvestGold },
            '&.Mui-focused fieldset': {
              borderColor: cozyColors.harvestLight,
              borderWidth: 3,
            },
          },
          '& .MuiInputLabel-root': {
            fontFamily: '"VT323", monospace',
            fontSize: '1.2rem',
          },
        },
      },
    },
  },
});

export default theme;
