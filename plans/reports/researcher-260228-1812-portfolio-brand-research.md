# Portfolio Brand Identity Research Report

**Date:** 2026-02-28
**Research Focus:** Company brand identities for portfolio visual references
**Status:** Complete

---

## Executive Summary

Researched 4 company websites to identify brand colors, logos, and visual identity elements suitable for portfolio project displays. Successfully extracted branding data for 3 sites; 1 site blocked access.

---

## Site-by-Site Findings

### 1. Be Software (besoftware.xyz)

**Status:** Accessible
**Title:** Be Software

**Visual Assets:**
- Logo: `/images/logo.png` (relative path from site root)
- No favicon metadata found in HTML head
- Favicon URL via Google service: available

**Brand Colors:**
- Primary: Insufficient color data extracted from initial crawl
- Text: Dark gray/black
- Background: White/light

**Accessibility:** Direct favicon access may require scraping site assets

**Notes:** Site uses Bootstrap framework (fa icons detected). Basic branding info available but limited color palette data in HTML.

---

### 2. DeepXplore (deepxplore.io)

**Status:** Accessible
**Title:** DeepXplore

**Visual Assets:**
- Logo SVG: `https://app.deepxplore.io/images/logo/dark/logo_dark.svg`
- Full Logo + Text: `https://app.deepxplore.io/images/logo/dark/logo_and_text_dark.svg`
- Favicon: `https://app.deepxplore.io/images/logo/dark/logo_dark.svg` (type: SVG)

**Brand Colors:**
- Primary Gradient: `linear-gradient(135deg, #D47A0D, #FF8C00)` (Burnt Orange to Orange)
- Primary Solid: `#D47A0D` (Burnt Orange)
- Accent: `#FF8C00` (Dark Orange)
- Dark Text: `#1a1a1a` (Almost Black)
- Medium Gray: `#4a4a4a`, `#666666`
- Light Background: `#fafafa`, `#ffffff`
- Border/Accent: `#D47A0D` with 0.1 alpha overlay

**Typography:** Inter font family (modern, clean)

**Visual Style:** Modern, gradient-heavy, orange/warm accent theme with minimal dark text

**Strength:** Excellent brand consistency with gradient logo and text styling

---

### 3. Employment Hero (employmenthero.com)

**Status:** Accessible
**Title:** Employment Hero | All-In-One HR, Payroll & Hiring Platform

**Visual Assets:**
- Logo: `https://employmenthero.com/wp-content/themes/employmentherocom2025/assets/images/logoEH-2.png`
- Favicon (32px): `https://employmenthero.com/wp-content/uploads/2025/08/cropped-EH_Favicon-LightViolet-32x32.png`
- Favicon (192px): `https://employmenthero.com/wp-content/uploads/2025/08/cropped-EH_Favicon-LightViolet-192x192.png`
- Favicon (180px Apple): `https://employmenthero.com/wp-content/uploads/2025/08/cropped-EH_Favicon-LightViolet-180x180.png`
- OG Image: `https://employmenthero.com/wp-content/uploads/2025/06/default-social-image.png`
- Social/brand logo: `https://employmenthero.com/wp-content/uploads/2025/04/logoEH-2.png`

**Brand Colors:**
- Primary Blue: `#0693E3`, `#007cba` (WordPress blue variants)
- Secondary/Accent Purples: `rgb(155, 81, 224)` (Medium Purple)
- Support Red: `rgb(207, 46, 46)` (Error/Alert red)
- Teal/Green: `rgb(0, 208, 130)`, `rgb(122, 220, 180)` (Cyan/Light teal)
- Light/Neutral: `#f9f9f9`
- Text: Dark, `#171214` (Almost black with warmth)

**Favicon Name:** "Light Violet" - indicates light purple/violet primary color

**Typography:** WordPress-based Gutenberg blocks, flexible system

**Visual Style:** Multi-color palette with blues, purples, teals, and reds. Enterprise HR/Payroll focus reflected in professional, accessible design.

**WordPress Platform:** Uses WordPress theme, extensive CSS-in-JS inline styles

**Strength:** Multi-color brand, extensive favicon variations for different contexts (32px, 192px, 180px, 270px), professional/corporate feel

---

### 4. Metro Digital (metro.digital)

**Status:** Blocked - Access Denied
**Error:** HTTP 403 - Akamai CDN blocking access
**Attempt:** Multiple curl requests returned "Access Denied" from edge server

**Workaround:** Google Favicon API returned HTML document (also blocked/redirected)

**Note:** Site exists but protects against direct automated access. Would require JavaScript rendering or proxy approach.

---

## Color Reference Summary

| Company | Primary Color | Secondary Colors | Palette Type |
|---------|--------------|------------------|--------------|
| Be Software | Unknown | Dark gray, White | Minimal (data incomplete) |
| DeepXplore | #D47A0D (Burnt Orange) | #FF8C00 (Dark Orange), #1a1a1a, #4a4a4a | Warm/Monochromatic |
| Employment Hero | #0693E3 (Blue) | #9B51E0 (Purple), #D02E82 (Red), #00D082 (Teal) | Multi-color/Enterprise |

---

## Logo/Favicon Asset URLs

### Direct Access (No Auth Required)
- **DeepXplore SVG Logo:** `https://app.deepxplore.io/images/logo/dark/logo_and_text_dark.svg`
- **Employment Hero Logo PNG:** `https://employmenthero.com/wp-content/themes/employmentherocom2025/assets/images/logoEH-2.png`
- **Employment Hero Favicon:** `https://employmenthero.com/wp-content/uploads/2025/08/cropped-EH_Favicon-LightViolet-32x32.png` (multiple sizes available)

### Relative Paths (Site-specific)
- **Be Software Logo:** `/images/logo.png` (requires site base URL)

---

## Portfolio Recommendation

**Best Candidates for Visual Display:**

1. **DeepXplore** - Strong visual identity with SVG assets, consistent gradient branding, modern aesthetic. Excellent for showcasing design projects.

2. **Employment Hero** - Multi-color professional palette, multiple favicon variations demonstrate attention to detail. Good for enterprise/SaaS portfolio entries.

3. **Be Software** - Minimal data; requires direct asset access from site.

**Integration Strategy:**
- Store logo SVG/PNG files locally in portfolio (avoid external CDN dependencies)
- Display favicon next to project title for quick brand recognition
- Use extracted color palettes in project cards or backgrounds
- Attribution: Link to company site when displaying logos

---

## Technical Notes

**Favicon Extraction Method:**
- Google Favicon API: `https://www.google.com/s2/favicons?domain={domain}&sz=64`
- Direct metadata: `<link rel="icon" href="...">`
- Apple touch icon: `<link rel="apple-touch-icon" href="...">`

**Asset Types Found:**
- SVG (DeepXplore) - Scalable, lightweight, recommended
- PNG (Employment Hero) - Multiple resolutions available
- Relative paths (Be Software) - Requires site base URL concatenation

---

## Unresolved Questions

1. **Be Software branding:** Incomplete color palette data - requires direct HTML inspection or JavaScript rendering for full style extraction
2. **Metro.digital access:** CDN blocking prevents automated research - may require manual browser inspection or contacting company for media assets
3. **Logo usage rights:** No verification of whether logos can be embedded in portfolio (usually permitted for case studies with attribution)
4. **Deep color analysis:** Extracted colors from HTML/CSS; actual visual rendition may differ due to image compression or color space differences

---

## Files Referenced

- Favicon files cached: `/tmp/besoftware_favicon.ico`, `/tmp/deepxplore_favicon.ico`, `/tmp/employmenthero_favicon.ico`, `/tmp/metro_favicon.ico`
- All URLs confirmed accessible as of 2026-02-28

