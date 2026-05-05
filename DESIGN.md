# DESIGN.md - Design Specifications

## Overview

This document outlines the design specifications for the Pensión UPC landing page. All design decisions should follow these guidelines to maintain consistency across the application.

## Color Palette

### Primary Colors (Brand Identity - Green)

| Name | Hex Code | Usage |
|------|----------|-------|
| `primary` | `#4CAF50` | Main brand color, CTAs, active states |
| `primaryDark` | `#388E3C` | Hover states, emphasis |
| `primaryLight` | `#81C784` | Backgrounds, subtle highlights |

### Accent Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| `accent` | `#FFC107` | Important CTAs, highlights, warnings |
| `accentDark` | `#FFA000` | Hover states for accent elements |

### Neutral Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| `gray-50` | `#FAFAFA` | Page backgrounds |
| `gray-100` | `#F5F5F5` | Card backgrounds, sections |
| `gray-200` | `#EEEEEE` | Borders, dividers |
| `gray-600` | `#757575` | Secondary text |
| `gray-900` | `#212121` | Primary text |

### Status Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| `success` | `#4CAF50` | Success messages, available status |
| `warning` | `#FF9800` | Warnings, pending states |
| `error` | `#F44336` | Errors, full capacity |

## Typography

### Font Families

- **Headings:** Poppins (600, 700 weights)
- **Body:** Lato (400, 500 weights)

### Usage

```css
/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600-700;
}

/* Body text */
p, span, li {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
}
```

## Responsive Breakpoints

| Breakpoint | Width | Target Devices |
|------------|-------|----------------|
| `xs` | 375px | Standard phones (iPhone SE) |
| `sm` | 430px | Large phones (iPhone 14 Pro Max, Poco M3) |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

## Component Design Patterns

### Buttons

Use the `Button` component from `src/components/ui/Button/Button.jsx`:

```jsx
import { Button } from "../ui/Button/Button";

// Solid variant - Primary actions
<Button variant="solid">Primary Action</Button>

// Outline variant - Secondary actions
<Button variant="outline">Secondary Action</Button>
```

**Styles:**
- Solid: `bg-blue-500 text-black hover:bg-accentGreen hover:text-white font-bold`
- Outline: `border border-gray-300 text-gray-700 hover:bg-gray-100`

### Cards

- Rounded corners (8px - 16px)
- Subtle shadows on hover
- White background with subtle borders

### Forms

- Input fields with clear labels
- Proper focus states (ring-2 ring-primary)
- Error states in red (#F44336)

### Modals

- Centered with backdrop overlay
- Close button in top-right
- Focus trap for accessibility

## Animations

### Framer Motion Patterns

```jsx
import { motion } from "framer-motion";

// Fade in animation
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Hover animation
const buttonHover = {
  hover: { scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" },
};
```

### Common Animation Durations

- **Fast:** 0.2s - Hover effects, small transitions
- **Normal:** 0.3s - Standard transitions
- **Slow:** 0.5s - Page section reveals

## Iconography

All icons use **Lucide React** library. Common icons in use:

- Navigation: Menu, X
- Contact: Mail, Phone, MessageCircleMore
- Social: Facebook, Instagram
- Location: MapPin
- Time: Clock

## Layout Guidelines

### Spacing Scale

- `gap-2` (8px) - Tight spacing
- `gap-4` (16px) - Default spacing
- `gap-6` (24px) - Section spacing
- `gap-8` (32px) - Large gaps
- `py-12` (48px) - Section padding

### Container

- Max width: `container mx-auto`
- Padding: `px-4` (mobile), higher on desktop

## Dark Mode

The application supports dark mode using Tailwind's `dark:` modifier:

- Background: `dark:bg-gray-900`
- Text: `dark:text-white`
- Cards: `dark:bg-gray-800`

## Accessibility Guidelines

### Color Contrast

- Primary text on light backgrounds: Minimum 4.5:1 ratio
- Large text (18px+): Minimum 3:1 ratio

### Focus States

All interactive elements must have visible focus states:

```jsx
className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
```

### Semantic HTML

- Use `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<address>`
- Proper heading hierarchy (h1 → h2 → h3)
- Button elements for actions, anchor elements for links

### ARIA

- `aria-label` on icon-only buttons
- `aria-hidden="true"` on decorative icons
- `role` attributes where semantic HTML is insufficient

## Image Guidelines

- All images must have descriptive alt text
- Use lazy loading for performance
- Optimize images before adding to project

## Best Practices

1. **Consistency:** Always use defined colors from the palette
2. **Reusability:** Use existing components before creating new ones
3. **Responsiveness:** Test on multiple breakpoints
4. **Accessibility:** Verify all changes with keyboard navigation
5. **Performance:** Minimize animations on mobile if needed