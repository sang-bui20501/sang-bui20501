# Retro CSS/JS Techniques for Modern Web Applications

**Report Date:** 2026-02-28
**Researcher:** researcher-2
**Team:** retro-pokemon-portfolio
**Focus:** CSS/JS techniques for creating retro-game effects in modern web applications

---

## Executive Summary

This report documents practical CSS and JavaScript techniques for implementing authentic retro-game aesthetics in modern web applications. All techniques are production-ready, require minimal dependencies, and leverage both foundational CSS properties and modern CSS features (Container Queries, Grid, has()).

---

## 1. Pixel Art Rendering Techniques

### 1.1 Image-Rendering Property

The `image-rendering: pixelated` property creates sharp, blocky rendering for pixel-based images.

```css
.pixel-image {
  image-rendering: pixelated;
  image-rendering: crisp-edges; /* Fallback */
  width: 200px;
  height: 200px;
  background-image: url('sprite.png');
}
```

**Browser Support:** Modern browsers (Chrome 41+, Firefox 3.6+)
**Use Case:** Upscaling small pixel art images without smoothing
**Trade-off:** Works best with multiples of original size (100px → 200px, 300px)

### 1.2 CSS Grid Pixel Art

Create pixel art directly in CSS using grid-based colored blocks:

```css
.pixel-art-grid {
  display: grid;
  grid-template-columns: repeat(16, 10px);
  grid-template-rows: repeat(16, 10px);
  gap: 0;
}

.pixel-art-grid div {
  width: 10px;
  height: 10px;
  background-color: var(--pixel-color);
}
```

**HTML Example:**
```html
<div class="pixel-art-grid">
  <div style="--pixel-color: #0f0;"></div>
  <div style="--pixel-color: #000;"></div>
  <!-- Continue pattern -->
</div>
```

**Advantages:**
- Pure CSS, no image assets
- Responsive using CSS custom properties
- Animatable via CSS transitions/animations

### 1.3 Box-Shadow Pixel Art Technique

Create pixel-perfect borders and outlines using stacked box-shadows:

```css
.pixel-border {
  width: 100px;
  height: 100px;
  background-color: #fff;
  box-shadow:
    /* Top-left corner */ -1px -1px 0 #000,
    /* Top */ 0 -1px 0 #000,
    /* Top-right corner */ 1px -1px 0 #000,
    /* Right */ 1px 0 0 #000,
    /* Right-bottom corner */ 1px 1px 0 #000,
    /* Bottom */ 0 1px 0 #000,
    /* Bottom-left corner */ -1px 1px 0 #000,
    /* Left */ -1px 0 0 #000;
}
```

**For Double Borders:**
```css
.double-pixel-border {
  box-shadow:
    -2px -2px 0 #000,
    -1px -1px 0 #fff,
    0 0 0 #000,
    1px 1px 0 #fff,
    2px 2px 0 #000;
}
```

**Use Cases:**
- Game UI frames
- Sprite selection highlights
- Dialog boxes
- Menu borders

---

## 2. Retro Fonts Implementation

### 2.1 Font Options & Characteristics

| Font | Style | Best For | Weight Variety |
|------|-------|----------|-----------------|
| Press Start 2P | 8-bit blocky | Game titles, headings | Regular only |
| VT323 | Monospaced terminal | Code, stats display, text | Regular, Bold |
| Silkscreen | Thin pixel font | Body text, UI labels | Regular, Bold |
| DotGothic16 | Japanese 16px | Decorative, fantasy elements | Regular, Bold |

### 2.2 Next.js Implementation (Modern Approach)

**Using next/font with Google Fonts:**

```typescript
// app/fonts.ts
import { Press_Start_2P, VT323, DotGothic16 } from 'next/font/google';

export const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const dotGothic = DotGothic16({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
```

**Usage in Components:**

```tsx
// components/GameTitle.tsx
import { pressStart } from '@/app/fonts';

export default function GameTitle() {
  return (
    <h1 className={pressStart.className}>
      POKÉMON PORTFOLIO
    </h1>
  );
}
```

**Tailwind Integration:**

```css
/* globals.css */
@layer base {
  @font-face {
    font-family: 'Press Start 2P';
    src: url('/fonts/PressStart2P-Regular.ttf') format('truetype');
  }
}
```

```js
// tailwind.config.ts
export default {
  theme: {
    fontFamily: {
      'pixel-title': ['Press Start 2P', 'cursive'],
      'pixel-mono': ['VT323', 'monospace'],
      'pixel-gothic': ['DotGothic16', 'serif'],
    },
  },
};
```

### 2.3 CSS Text Effects with Retro Fonts

**Pixel Glow Effect:**
```css
.glowing-text {
  font-family: 'Press Start 2P';
  color: #0f0;
  text-shadow:
    0 0 4px #0f0,
    0 0 8px #0f0,
    0 0 12px #0f0;
  animation: glow-pulse 1.5s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% { text-shadow: 0 0 4px #0f0; }
  50% { text-shadow: 0 0 12px #0f0, 0 0 16px #0f0; }
}
```

**Text Outline (Retro Style):**
```css
.outlined-text {
  font-family: 'Press Start 2P';
  color: #fff;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
```

---

## 3. Retro Color Palettes

### 3.1 Game Boy Classic Palette
```css
:root {
  --gb-light: #9bbc0f;
  --gb-dark: #8bac0f;
  --gb-screen: #0f380f;
  --gb-shadow: #306230;
}
```

### 3.2 SNES Palette
```css
:root {
  --snes-red: #ff0000;
  --snes-blue: #0000ff;
  --snes-green: #00ff00;
  --snes-yellow: #ffff00;
  --snes-purple: #ff00ff;
  --snes-cyan: #00ffff;
}
```

### 3.3 NES Palette (64-color subset)
```css
:root {
  --nes-black: #000000;
  --nes-white: #ffffff;
  --nes-red: #ff0000;
  --nes-cyan: #00ffff;
  --nes-purple: #cc44cc;
  --nes-green: #00cc55;
}
```

### 3.4 Pokémon-Specific Palette
```css
:root {
  --pokemon-pikachu: #ffeb3b;
  --pokemon-charizard: #ff6f00;
  --pokemon-blastoise: #2196f3;
  --pokemon-venusaur: #4caf50;
  --pokemon-lapras: #81d4fa;
  --pokemon-psychic: #ce93d8;
  --pokemon-dark: #424242;
}
```

### 3.5 Dynamic Palette System
```css
.game-boy-theme {
  --bg-primary: #9bbc0f;
  --bg-secondary: #8bac0f;
  --text-primary: #0f380f;
  --accent: #306230;
}

.snes-theme {
  --bg-primary: #3333cc;
  --bg-secondary: #0000cc;
  --text-primary: #ffffff;
  --accent: #ffff00;
}

.element {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
```

---

## 4. Scanline and CRT Effects

### 4.1 CSS Scanline Effect (Horizontal)

```css
.scanline-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000;
}

.scanline-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px
  );
  background-size: 100% 2px;
  pointer-events: none;
  z-index: 10;
}
```

### 4.2 Animated CRT Effect (Scan Movement)

```css
.crt-monitor {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.crt-monitor::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 0, 0, 0.1) 0%,
    transparent 50%,
    rgba(0, 0, 255, 0.1) 100%
  );
  animation: crt-flicker 0.15s infinite;
  pointer-events: none;
  z-index: 20;
}

@keyframes crt-flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.97; }
}
```

### 4.3 Vignette Effect (Screen Darkening)

```css
.vignette {
  position: relative;
}

.vignette::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  pointer-events: none;
}
```

### 4.4 Combined CRT Filter Effect

```css
.full-crt-effect {
  filter:
    brightness(0.95)
    contrast(1.05)
    saturate(0.9);
}

.full-crt-effect::before {
  /* Scanlines - see 4.1 */
}

.full-crt-effect::after {
  /* CRT flicker - see 4.2 */
}
```

---

## 5. Sprite Animation Techniques

### 5.1 CSS Steps() Animation

**Basic Sprite Walk Cycle:**

```css
.sprite {
  width: 32px;
  height: 32px;
  background-image: url('character-walk.png');
  /* Sprite sheet: 4 frames × 32px = 128px width */
  background-size: 128px 32px;
  background-position: 0 0;
  animation: walk 0.8s steps(4, jump-none) infinite;
}

@keyframes walk {
  0% { background-position: 0 0; }
  100% { background-position: -128px 0; }
}
```

### 5.2 Multi-State Sprite Animation

```css
.sprite {
  width: 32px;
  height: 32px;
  background-image: url('sprite-sheet.png');
  background-size: 256px 128px; /* 8 columns × 4 rows */
}

/* Idle state */
.sprite.idle {
  background-position: 0 0;
  animation: idle 0.6s steps(4) infinite;
}

@keyframes idle {
  0% { background-position: 0 0; }
  100% { background-position: -128px 0; }
}

/* Walk state */
.sprite.walk {
  animation: walk 0.6s steps(4) infinite;
}

@keyframes walk {
  0% { background-position: 0 -32px; }
  100% { background-position: -128px -32px; }
}

/* Jump state */
.sprite.jump {
  animation: jump 0.4s steps(4);
}

@keyframes jump {
  0% {
    background-position: 0 -64px;
    transform: translateY(0);
  }
  50% { transform: translateY(-40px); }
  100% {
    background-position: -128px -64px;
    transform: translateY(0);
  }
}
```

### 5.3 Sprite with Direction Control

```css
.sprite {
  width: 32px;
  height: 32px;
  background-image: url('sprite-directions.png');
  background-size: 512px 128px; /* 16 frames × 32px = 512px */
}

/* Facing right */
.sprite.right {
  animation: walk-right 0.6s steps(4) infinite;
}

@keyframes walk-right {
  0% { background-position: 0 0; }
  100% { background-position: -128px 0; }
}

/* Facing left (flip with transform) */
.sprite.left {
  transform: scaleX(-1);
  animation: walk-right 0.6s steps(4) infinite;
}

/* Facing down */
.sprite.down {
  animation: walk-down 0.6s steps(4) infinite;
}

@keyframes walk-down {
  0% { background-position: 0 -32px; }
  100% { background-position: -128px -32px; }
}

/* Facing up */
.sprite.up {
  animation: walk-up 0.6s steps(4) infinite;
}

@keyframes walk-up {
  0% { background-position: 0 -64px; }
  100% { background-position: -128px -64px; }
}
```

---

## 6. Typewriter Text Effects

### 6.1 Classic Typewriter Animation

```css
.typewriter {
  font-family: 'VT323', monospace;
  font-size: 24px;
  color: #0f0;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #0f0;
  animation:
    typewriter 4s steps(40, jump-none) 1s 1 normal both,
    cursor-blink 1s step-end infinite;
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes cursor-blink {
  0%, 50% { border-color: #0f0; }
  51%, 100% { border-color: transparent; }
}
```

### 6.2 Staggered Character Reveal

```css
.typewriter-stagger {
  display: inline;
}

.typewriter-stagger span {
  display: inline-block;
  animation: char-appear 0.1s ease-in-out backwards;
}

/* Stagger each character */
.typewriter-stagger span:nth-child(1) { animation-delay: 0s; }
.typewriter-stagger span:nth-child(2) { animation-delay: 0.1s; }
.typewriter-stagger span:nth-child(3) { animation-delay: 0.2s; }
/* ... continue pattern ... */

@keyframes char-appear {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### 6.3 Typewriter with Sound Effect (CSS Only)

```css
.typewriter-beep {
  font-family: 'VT323', monospace;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #0f0;
  animation:
    typewriter 4s steps(40) 1s 1 normal both,
    beep 0.1s linear;
}

@keyframes beep {
  0%, 100% { text-shadow: 0 0 2px #0f0; }
  50% { text-shadow: 0 0 6px #0f0; }
}
```

---

## 7. Parallax Scrolling (Game-Style)

### 7.1 CSS-Only Parallax with Transform

```css
.parallax-scene {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.parallax-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

.parallax-layer-1 {
  background-image: url('sky.png');
  z-index: 1;
  background-attachment: scroll;
  transform: translateZ(-1px) scale(2);
}

.parallax-layer-2 {
  background-image: url('clouds.png');
  z-index: 2;
  transform: translateZ(-0.5px) scale(1.5);
}

.parallax-layer-3 {
  background-image: url('ground.png');
  z-index: 3;
  transform: translateZ(0) scale(1);
}
```

### 7.2 JavaScript-Enhanced Parallax (Scroll-Based)

```javascript
const parallaxElements = document.querySelectorAll('[data-parallax]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  parallaxElements.forEach(element => {
    const speed = element.dataset.parallax;
    element.style.transform = `translateY(${scrollY * speed}px)`;
  });
});
```

**HTML Usage:**
```html
<div class="parallax-scene">
  <div class="parallax-layer-1" data-parallax="0.05"></div>
  <div class="parallax-layer-2" data-parallax="0.1"></div>
  <div class="parallax-layer-3" data-parallax="0.2"></div>
</div>
```

### 7.3 Horizontal Parallax (Side-Scrolling Game)

```css
.horizontal-parallax {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

.parallax-bg {
  position: absolute;
  height: 100%;
  background-size: cover;
  background-repeat: repeat-x;
}

.bg-far { width: 200%; z-index: 1; }
.bg-mid { width: 150%; z-index: 2; }
.bg-near { width: 100%; z-index: 3; }
```

---

## 8. CSS-Only Retro UI Elements

### 8.1 Retro Dialog Box

```css
.dialog-box {
  background-color: #c0c0c0;
  border: 2px solid;
  border-color: #ffffff #808080 #808080 #ffffff;
  padding: 4px;
  box-shadow:
    inset 1px 1px 0 #ffffff,
    inset -1px -1px 0 #808080;
  font-family: 'MS Sans Serif', Arial;
  font-size: 11px;
}

.dialog-box-title {
  background: linear-gradient(90deg, #000080 0%, #1084d7 100%);
  color: white;
  padding: 2px 4px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dialog-box-close {
  width: 16px;
  height: 14px;
  background-color: #c0c0c0;
  border: 1px solid;
  border-color: #ffffff #000000 #000000 #ffffff;
  font-size: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 8.2 Menu Selector (RPG Style)

```css
.menu-selector {
  list-style: none;
  padding: 0;
}

.menu-item {
  padding: 8px 16px;
  cursor: pointer;
  position: relative;
  font-family: 'Press Start 2P';
  font-size: 12px;
}

.menu-item::before {
  content: '▶';
  position: absolute;
  left: 4px;
  opacity: 0;
  transition: opacity 0.1s;
}

.menu-item.selected::before {
  opacity: 1;
}

.menu-item:hover {
  background-color: #0f0;
  color: #000;
}
```

### 8.3 HP Bar (Pixel-Perfect)

```css
.hp-container {
  width: 128px;
  height: 16px;
  background-color: #000;
  border: 2px solid #fff;
  overflow: hidden;
}

.hp-bar {
  height: 100%;
  background: linear-gradient(90deg, #00ff00 0%, #ffff00 50%, #ff0000 100%);
  transition: width 0.2s steps(8, jump-none);
  width: 100%;
}

.hp-label {
  position: absolute;
  top: 2px;
  left: 4px;
  font-family: 'VT323', monospace;
  color: #fff;
  font-size: 8px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2px 4px;
}
```

### 8.4 Retro Button

```css
.pixel-button {
  background: linear-gradient(135deg, #dfdfdf 0%, #808080 100%);
  border: 2px solid;
  border-color: #ffffff #000000 #000000 #ffffff;
  padding: 4px 12px;
  cursor: pointer;
  font-family: 'MS Sans Serif', Arial;
  font-size: 11px;
  user-select: none;
}

.pixel-button:active {
  border-color: #000000 #ffffff #ffffff #000000;
  background: linear-gradient(135deg, #808080 0%, #dfdfdf 100%);
}

.pixel-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

---

## 9. Modern CSS Features for Retro Layouts

### 9.1 CSS Grid for Pixel Layouts

```css
.pixel-grid-layout {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(9, 1fr);
  gap: 4px;
  height: 100vh;
  aspect-ratio: 16 / 9;
}

.grid-item {
  background-color: #c0c0c0;
  border: 2px solid;
  border-color: #ffffff #000000 #000000 #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-item.span-4x2 {
  grid-column: span 4;
  grid-row: span 2;
}
```

### 9.2 Container Queries for Responsive Retro UI

```css
@container (min-width: 400px) {
  .responsive-dialog {
    font-size: 14px;
    padding: 8px;
  }
}

@container (min-width: 800px) {
  .responsive-dialog {
    font-size: 16px;
    padding: 12px;
  }
}
```

### 9.3 :has() Selector for Conditional Styling

```css
/* Style parent if it contains a selected child */
.menu:has(.item.selected) {
  background-color: #0f0;
}

/* Style siblings based on interaction */
.option:has(input:checked) {
  background-color: #fff;
  color: #000;
}

/* Conditional borders */
.dialog:has(> .error) {
  border-color: #ff0000;
}
```

### 9.4 CSS Custom Properties for Theming

```css
:root {
  --theme: 'gameboy';
  --primary-color: #9bbc0f;
  --secondary-color: #8bac0f;
  --text-color: #0f380f;
  --accent-color: #306230;
}

/* Theme switching */
html[data-theme='snes'] {
  --primary-color: #3333cc;
  --secondary-color: #0000cc;
  --text-color: #ffffff;
  --accent-color: #ffff00;
}

html[data-theme='nes'] {
  --primary-color: #c0c0c0;
  --secondary-color: #808080;
  --text-color: #000000;
  --accent-color: #ff0000;
}

.themed-element {
  background-color: var(--primary-color);
  color: var(--text-color);
}
```

---

## 10. Integration Guide for Next.js/React

### 10.1 Retro Theme Provider

```typescript
// lib/theme-context.tsx
'use client';

import { createContext, useContext, useState } from 'react';

type Theme = 'gameboy' | 'snes' | 'nes' | 'pokemon';

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('gameboy');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used in ThemeProvider');
  return context;
}
```

### 10.2 Reusable Retro Components

```typescript
// components/RetroDialog.tsx
interface RetroDialogProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export function RetroDialog({ title, children, onClose }: RetroDialogProps) {
  return (
    <div className="dialog-box">
      <div className="dialog-box-title">
        <span>{title}</span>
        <button
          className="dialog-box-close"
          onClick={onClose}
        >
          ×
        </button>
      </div>
      <div className="dialog-box-content">
        {children}
      </div>
    </div>
  );
}
```

```typescript
// components/HPBar.tsx
interface HPBarProps {
  current: number;
  max: number;
  label?: string;
}

export function HPBar({ current, max, label = 'HP' }: HPBarProps) {
  const percentage = (current / max) * 100;

  return (
    <div className="hp-container">
      <div
        className="hp-bar"
        style={{ width: `${percentage}%` }}
      />
      <span className="hp-label">
        {label} {current}/{max}
      </span>
    </div>
  );
}
```

### 10.3 Global CSS for Retro Theme

```css
/* styles/retro.css */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

:root {
  --gameboy-light: #9bbc0f;
  --gameboy-dark: #8bac0f;
  --gameboy-screen: #0f380f;
  --gameboy-shadow: #306230;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Global scanline effect */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px
  );
  background-size: 100% 2px;
  pointer-events: none;
  z-index: 9999;
}
```

---

## Technical Comparison Matrix

| Technique | Performance | Browser Support | Use Case | Learning Curve |
|-----------|-------------|-----------------|----------|-----------------|
| image-rendering | Excellent | 95%+ | Image upscaling | Very Low |
| Box-shadow borders | Good | 100% | UI frames, borders | Low |
| CSS Grid sprites | Good | 90%+ | Pixel art generation | Medium |
| Scanlines (CSS) | Good | 95%+ | CRT aesthetic | Low |
| Sprite animation | Good | 100% | Character movement | Low |
| Typewriter effect | Good | 100% | Text reveal | Low |
| Parallax (JS) | Fair | 100% | Depth layering | Medium |
| Container Queries | Good | 85%+ | Responsive sizing | Medium |

---

## Best Practices & Recommendations

### Performance Optimization
1. **Minimize repaints:** Use `will-change: transform` for animated elements
2. **GPU acceleration:** Use `transform: translate3d()` instead of position changes
3. **Reduce layer count:** Limit scanline/vignette overlays on heavy content
4. **Sprite consolidation:** Combine multiple sprites into single atlas images

### Accessibility
1. **Avoid pure color coding:** Ensure contrast meets WCAG AA (4.5:1 minimum)
2. **Respect prefers-reduced-motion:** Disable animations for motion-sensitive users
3. **Semantic HTML:** Use proper button/label elements behind retro styling
4. **Font fallbacks:** Always provide system fonts for Google Fonts fallback

### Cross-Browser Compatibility
1. **Vendor prefixes:** Use autoprefixer for CSS transforms
2. **Testing coverage:** Test on Chrome, Firefox, Safari, Edge
3. **Feature detection:** Use CSS @supports for advanced features
4. **Graceful degradation:** Ensure functionality without CSS filters

---

## Unresolved Questions

1. **Chiptune audio integration:** How to synchronize CSS animation timing with audio playback without external libraries?
2. **Pixel-perfect scaling on mobile:** Best practices for maintaining pixel-perfect aesthetics across variable DPI screens?
3. **Performance limits:** At what sprite count/complexity do CSS animations degrade vs WebGL?
4. **Color accessibility:** How to convert retro palettes while maintaining WCAG compliance?
5. **Dynamic theme switching:** Best pattern for theme switching without layout flashing (Server vs Client)?

---

## References & Resources

- MDN: [image-rendering](https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering)
- Google Fonts: Press Start 2P, VT323, DotGothic16
- Web.dev: [Container Queries](https://web.dev/articles/cq-stable)
- CSS-Tricks: [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- GitHub: Retro UI component collections (search "retro-ui" or "pixel-art-css")
