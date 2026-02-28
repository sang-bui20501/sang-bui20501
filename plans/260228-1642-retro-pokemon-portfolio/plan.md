# Retro-Pokemon Portfolio Website - Sang Bui

## Overview
Transform the existing Ghibli-themed portfolio into a **"WOW" retro-Pokemon, game-y style** personal/service website showcasing Sang Bui's experience, skills, and services.

**Status:** Complete
**Owner:** Team Lead

## CV Data Summary (Sang Bui)
- **Name:** Sang Bui (Bui The Sang)
- **Role:** Full Stack Engineer (FE/BE/DevOps)
- **Contact:** +84 869 225 205 | sangbui20501@gmail.com
- **Current:** Employment Hero (06/2025-Present), Deepxplore (12/2024-Present)
- **Past:** Metro Digital, VINAMR, SAMCO, DuelAllDay, GDSC Chapter Lead
- **Awards:** IOI 2nd Prize (380/400), Gold/Silver 30/4 Olympiads, ASCIS 4th Prize
- **Skills:** Ruby, TypeScript, Java, Kotlin, Python, React, Next.js, Rails, Spring Boot, K8s

## Design Philosophy: "Retro-Pokemon Game UI"
1. **Pokedex-style trainer card** for hero/about
2. **Pokemon battle HP bars** for skills (replaces linear progress)
3. **Game menu dialogs** for navigation
4. **Pixel borders** and **8-bit typography** (Press Start 2P font)
5. **Pokemon-era color palettes** (GB green, GBA blues, Fire Red reds)
6. **Sprite-like animations** and **typewriter text effects**
7. **Game sound effects** on interactions (optional)
8. **Experience cards as "Pokemon cards"** for work history
9. **Projects as "caught Pokemon"** or game items
10. **Contact as "Save Game" dialog**

## Tech Decisions
- Keep: Next.js 15, React 19, MUI 7 (override styles), Tailwind 4
- Add: Press Start 2P font via Google Fonts
- Add: framer-motion for game animations
- Use: CSS pixel art techniques, box-shadow sprites
- Color palette: Pokemon Fire Red/Leaf Green inspired

## Phases

| Phase | Description | Status |
|-------|-------------|--------|
| 1 | Setup retro theme & fonts | Complete |
| 2 | Hero: Trainer Card component | Complete |
| 3 | About: Pokedex entry style | Complete |
| 4 | Skills: Pokemon HP bars | Complete |
| 5 | Experience: Pokemon cards timeline | Complete |
| 6 | Projects: Caught Pokemon/Items | Complete |
| 7 | Contact: Save Game dialog | Complete |
| 8 | Navigation: Game menu style | Complete |
| 9 | Animations & polish | Complete |
| 10 | Testing & review | Complete |

## File Ownership Plan
- `src/app/theme.ts` - Retro theme overrides (259 lines)
- `src/app/globals.css` - Pixel art CSS, animations (533 lines)
- `src/app/layout.tsx` - Font setup, metadata
- `src/app/page.tsx` - Main page entry (32 lines)
- `src/data/trainer-data.ts` - CV data as TypeScript (160 lines)
- `src/components/` - Modular React components:
  - `navigation.tsx` - Nav bar, scroll-to-top, footer
  - `retro-ui.tsx` - TypeBadge, HPBar, SkillBar, TypewriterText
  - `section-hero.tsx` - Trainer card hero
  - `section-about.tsx` - Pokedex entry style bio
  - `section-skills.tsx` - HP bar skills
  - `section-experience.tsx` - Pokemon card work history
  - `section-achievements.tsx` - Badge grid
  - `section-projects.tsx` - Caught projects grid
  - `section-contact.tsx` - Save game dialog

## Key Design Elements
- Pokemon-style bordered boxes (double pixel borders)
- HP/XP bars with pixelated edges
- Dialog boxes with ">" selector cursor
- Trainer sprite or avatar
- Type badges for skills (Fire=Backend, Water=Frontend, etc.)
- Encounter animation for sections
- Level numbers for experience years

## Links
- Phase details: `phase-01-*.md` through `phase-10-*.md`
- Research: `../reports/researcher-*-260228-1642-*.md`
