# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**루틴에듀학원** (Routine EDU Academy) - Korean educational academy landing page for Eunpyeong-gu, Seoul. Single-page React application showcasing academic programs, faculty, and location.

**Tech Stack**: React 19 + TypeScript + Vite + Tailwind CSS (CDN)

## Development Commands

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Architecture

### Application Structure

**Entry Point**: `index.tsx` → `App.tsx` → Component sections

**Component Flow** (in render order):
1. `JsonLd` - SEO schema markup
2. `Header` - Fixed navigation with scroll behavior
3. `Hero` - Main landing section
4. `PainPoints` - Problem statement section
5. `RoutineMethod` - Academy methodology
6. `Subjects` - Course offerings (국영수과)
7. `TeacherProfiles` - Faculty information
8. `FAQ` - Frequently asked questions
9. `Location` - Address and map
10. `Footer` - Contact and site info
11. `CTAButton` - Floating call-to-action

### Key Technical Patterns

**Styling**:
- Tailwind CSS loaded via CDN (`index.html`)
- Custom CSS variables in `index.html`: `--brand-navy: #002b5c`, `--brand-gold: #c5a059`
- Korean fonts: Noto Sans KR (sans), Nanum Myeongjo (serif via `.serif-font`)

**Build Configuration**:
- Path alias: `@/*` resolves to project root
- Environment variables: `GEMINI_API_KEY` exposed as `process.env.API_KEY` and `process.env.GEMINI_API_KEY`
- Dev server: `localhost:3000` with host `0.0.0.0`

**Component Pattern**:
- All components are functional components with TypeScript
- Self-contained with inline Tailwind classes
- No external CSS modules or styled-components

**Smooth Scroll**: Implemented in `App.tsx` via `useEffect` for `href="#..."` anchor links with 80px offset

### Important Notes

**No Testing Framework**: No test scripts or testing libraries configured

**Styling Approach**: Pure Tailwind utility classes - avoid creating separate CSS files

**Brand Colors**: Always use `#002b5c` (navy) and `#c5a059` (gold) for consistency

**Korean Content**: All user-facing text is in Korean - maintain language consistency when editing content

## Recent Changes

**Last Updated**: 2026-01-08

### Completed Work
- Tailwind CSS migrated from CDN to production setup (v3.4.1)
- Project restructured with `src/` directory
- Git repository created: https://github.com/axconkr/rutinEDU
- Vercel auto-deployment configured
- See `DEVELOPMENT_LOG.md` for detailed work history

### Key Files Added
- `DEVELOPMENT_LOG.md` - Complete development history and troubleshooting guide
- `tailwind.config.js` - Tailwind configuration with brand colors
- `postcss.config.js` - PostCSS plugin configuration
- `src/index.css` - Tailwind imports and custom styles
- `.gitignore` - Git exclusion rules
