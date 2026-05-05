# AGENTS.md - Development Guidelines for AI Agents

## Project Overview

**Project Name:** Pensión UPC Landing Page  
**Type:** Marketing website for student boarding house  
**Location:** Valledupar, Colombia  
**Repository:** https://github.com/juniormojica/landing-pensionado.git

## Tech Stack

- **Framework:** React 18.3.1
- **Build Tool:** Vite 6.0.5
- **Styling:** Tailwind CSS 3.4.17
- **Animations:** Framer Motion 12.0.6
- **Icons:** Lucide React 0.473.0
- **Maps:** @react-google-maps/api 2.20.5
- **Utilities:** classnames 2.5.1

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Component Structure

```
src/components/
├── Header/           # Navigation with mobile menu
├── Hero/             # Landing hero section
├── Features/         # Feature highlights
├── FeatureCard/      # Individual feature card
├── Carousel/         # Image gallery with availability
├── CardPricing/      # Pricing plans display
├── CardP/            # Individual pricing card
├── PriceSimulator/   # Price calculator
├── PromoVideo/       # Promotional video section
├── AboutUs/          # About the boarding house
├── Contact/          # Contact form section
├── Map/              # Google Maps integration
├── Availability/     # Availability status
├── FullCapacityModal/# Full capacity modal
├── DarkModeToggle/   # Dark mode switch
├── LunchMenu/        # Lunch menu display
├── ui/Button/        # Reusable button component
└── Footer/           # Site footer
```

## Development Guidelines

### Hash-Based Routing

The project uses hash-based routing for single-page navigation. Routes follow the pattern `#/section`:

- `#/` or `#/inicio` - Home
- `#/caracteristicas` - Features
- `#/galeria` - Gallery
- `#/planes` - Pricing plans
- `#/simulador` - Price simulator
- `#/almuerzos` - Lunch menu
- `#/nosotros` - About us
- `#/contacto` - Contact

### Using Existing Components

Always use the existing `Button` component from `src/components/ui/Button/Button.jsx`:

```jsx
import { Button } from "../ui/Button/Button";

// Available variants: 'outline', 'solid'
<Button variant="solid">Click me</Button>
<Button variant="outline">Secondary</Button>
```

### Color System

Use Tailwind colors defined in `tailwind.config.js`:

- **Primary:** `primary`, `primaryDark`, `primaryLight`
- **Accent:** `accent`, `accentDark`
- **Grays:** `gray-50` through `gray-900`

### Animations

Use Framer Motion for animations following existing patterns:

```jsx
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Use with motion components
<motion.div variants={fadeIn} initial="hidden" animate="visible">
```

### Accessibility Requirements

All new components must include:

1. **Semantic HTML:** Use proper tags (`<nav>`, `<main>`, `<section>`, `<address>`)
2. **ARIA labels:** On all interactive elements
3. **Focus states:** Visible focus rings for keyboard navigation
4. **Color contrast:** Minimum 4.5:1 ratio for text
5. **Alt text:** On all images

### Git Workflow

Follow conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `enhance:` - Enhancement
- `refactor:` - Code refactoring
- `docs:` - Documentation
- `style:` - Styling changes

Example: `git commit -m "feat: add new pricing card component"`

### Code Style

- Use functional components with arrow functions
- PropTypes for component props
- CSS classes in Tailwind (no custom CSS unless necessary)
- No comments unless requested
- Use `classnames` utility for conditional classes

## Common Tasks

### Adding a New Section

1. Create component in `src/components/`
2. Import in `App.jsx`
3. Add to main content area
4. Add hash route in `routeMap` if needed

### Modifying Colors

Edit `tailwind.config.js` - do not use arbitrary values like `#fff`

### Testing Changes

```bash
npm run dev    # Development
npm run build  # Production build
npm run lint   # Check for errors
```

## Contact Information

- **Phone:** 321 871 0632
- **Email:** juniormojica26@gmail.com
- **Location:** Universidad Popular del César, Valledupar, Cesar, Colombia