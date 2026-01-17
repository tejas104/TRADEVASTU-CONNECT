# TRADEVASTU CONNECT - Design Guidelines

## Design Aesthetic
Premium, luxury, minimal, futuristic, alive - creating an award-winning digital agency presence with rich animations and sophisticated interactions.

## Color System
- **Primary Gold**: #D4AF37
- **Deep Emerald**: #004F3A  
- **Dark Background**: #0A0C0F
- **Card Surface**: #111418
- **Accent Lime Gold**: #C0FF4A
- **Soft White**: #F4F4F2
- **Text Primary**: #ECECEC
- **Text Muted**: #A7A7A5
- **Gradient**: bg-gradient-to-br from-[#D4AF37] via-[#C0FF4A] to-[#004F3A]

## Typography
- **Headings**: Poppins 700 (bold, impactful)
- **Body**: Inter 400-500 (clean, readable)

## Component Styling
- Glass blur effects with semi-transparent backgrounds
- Golden glow borders on interactive elements
- Soft, layered shadows for depth
- Micro-motion interactions on all interactive elements
- Organic curves instead of sharp corners
- 3D hover depth transformations
- Parallax layers for dimensional feel

## Core Animations & Interactions

**Scroll-Based Reveals**:
- Smooth fade-up transitions on section entry
- Scale-in effects for cards and content blocks
- Staggered animations for child elements (150ms delays)

**Button Interactions**:
- Magnetic hover effect (button follows cursor slightly)
- Glowing golden border on hover
- Scale 1.04 on interaction
- Blurred backgrounds for buttons on hero images

**Service Cards**:
- 3D tilt effect on hover
- Golden light streak reveal animation
- Motion blur on initial entry
- Content expands vertically on hover

**Image System**:
- Lazy load all images
- Fade + vertical parallax on scroll
- Blur-to-sharp reveal transition
- Subtle shimmer overlay on load

**Page Transitions**:
- Smooth loading progress bar
- Fade between route changes
- Slide-from-bottom on page load

**Sticky Elements**:
- Floating "Get Quote" CTA pill on right side
- Golden glowing animated border
- Always visible, subtle pulse effect

## Page-Specific Guidelines

### Home Page
- **Hero**: Fullscreen with animated gold/emerald gradient background, floating golden particles, split-reveal animated headline, parallax layers
- **Trusted By**: Logo grid with shimmering hover effects, soft fade reveal
- **Services Preview**: 6 golden cards in grid, 3D hover with expansion
- **Portfolio Preview**: Grid layout with hover zoom, gold overlay, light streak animation
- **Process**: 4-step timeline with glowing golden connectors, staggered slide-up
- **Testimonials**: Auto-play slider with glass cards, dynamic shadows, swipeable

### Services Pages
- Grid of expandable service cards with shine effects
- Elegant iconography with golden accents
- Individual service pages: parallax hero banner, floating gold underlines, glowing pricing CTAs

### Portfolio Pages
- Masonry grid layout with smooth entry animations
- Hover zoom + golden overlay effects
- Category filters UI with active state glow
- Detail pages: large parallax header image, golden separators, draggable image carousel

### Contact Page
- Glass morphism form with golden glow border inputs
- Animated submit button with hover effects
- Google Map placeholder with dark theme styling

### About Page
- Story timeline with sliding milestone animations
- Team section with expandable cards on hover
- Floating golden dots background pattern

## Images

**Hero Section (Home Page)**: 
- Large, premium background image showcasing digital/tech aesthetic
- Abstract gradient overlay compatible with gold-emerald theme
- Subtle motion/parallax effect on scroll
- Buttons on hero use blurred backgrounds

**Portfolio Section**:
- High-quality project showcase images
- Professional, modern aesthetic aligned with luxury brand
- Varied aspect ratios for masonry grid interest

**About Page**:
- Team photos with professional studio quality
- Office/workspace imagery conveying premium agency environment

**Service Pages**:
- Feature images illustrating each service offering
- Abstract tech/digital imagery with gold accent overlays

## Spacing System
Use Tailwind spacing: primarily 4, 6, 8, 12, 16, 20, 24, 32 units for consistent vertical rhythm and section padding.

## Navigation
- Animated shrink on scroll (from py-6 to py-3)
- Glass blur background when scrolled
- Magnetic hover on nav items
- Golden underline active state