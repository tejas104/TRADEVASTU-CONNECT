# TRADEVASTU CONNECT

## Overview

TRADEVASTU CONNECT is a premium digital agency website built for TRADEVASTU ENTERPRISES LLP. The application showcases the agency's services, portfolio, and brand identity through a luxury, futuristic design aesthetic featuring rich gold and deep emerald theming with advanced animations and interactions.

The project is a full-stack web application built with modern technologies, featuring a React-based frontend with sophisticated animations and a Node.js/Express backend with PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **Vite** as the build tool and development server for fast HMR and optimized production builds
- **React 18** with TypeScript for type-safe component development
- **Wouter** for lightweight client-side routing (replacing React Router)
- **React Query (TanStack Query)** for server state management and data fetching

**UI Component System**
- **shadcn/ui** component library with Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom design system configuration
- **Framer Motion** for declarative animations and transitions throughout the interface
- All components follow a "New York" style variant from shadcn/ui

**Design System**
- Premium luxury aesthetic with gold (#D4AF37) and emerald (#004F3A) color palette
- Glass morphism effects with backdrop blur and semi-transparent backgrounds
- Custom typography: Poppins for headings, Inter for body text
- Micro-interactions on all interactive elements including hover effects, magnetic buttons, and 3D tilt cards
- Scroll-based reveal animations with staggered transitions
- Parallax effects for dimensional depth

**Custom Animation Components**
- `FloatingParticles`: Ambient background particle animations
- `GlowButton`: Interactive buttons with magnetic hover and glow effects
- `AnimatedText`: Text reveal animations with word/character splitting
- `SectionReveal`: Scroll-triggered section reveals with stagger support
- `GlassCard`: Cards with glass morphism and glow effects
- `TiltCard`: 3D tilt effect on hover using motion values
- `TestimonialSlider`: Auto-playing testimonial carousel
- `ParallaxContainer`: Parallax scrolling wrapper components

**Page Structure**
- Home: Hero section with services overview, portfolio highlights, and testimonials
- Services: Service listing with detail pages for each service type
- Portfolio: Filterable project gallery with individual case study pages
- About: Company information, team, values, and statistics
- Contact: Contact form with service/budget selection

### Backend Architecture

**Server Framework**
- **Express.js** as the HTTP server framework
- **TypeScript** for type-safe server-side code
- Custom middleware for request logging and JSON body parsing
- HTTP server creation for potential WebSocket support

**API Design**
- RESTful API endpoints under `/api` prefix
- Contact form submission endpoint (`POST /api/contact`)
- Contact messages retrieval endpoint (`GET /api/contact`)
- JSON request/response format with proper error handling
- Zod schema validation for incoming requests

**Data Storage Strategy**
- In-memory storage implementation (`MemStorage`) for development/testing
- Interface-based storage layer (`IStorage`) for easy swapping to database implementations
- Designed to work with Drizzle ORM and PostgreSQL for production
- UUID-based primary keys for all entities

**Static File Serving**
- Production build serves static files from `dist/public`
- SPA fallback routing (all routes serve `index.html` for client-side routing)
- Build process combines Vite frontend build with esbuild server bundling

**Development Features**
- Vite middleware integration for HMR in development
- Custom error overlay plugin
- Replit-specific development plugins (cartographer, dev banner)
- Request/response logging with timestamps and duration tracking

### Database Schema

**Tables Defined** (via Drizzle ORM)
- `users`: User authentication (id, username, password)
- `contact_messages`: Contact form submissions (id, name, email, phone, service, budget, message, createdAt)

**ORM Configuration**
- Drizzle ORM with PostgreSQL dialect
- Drizzle Kit for schema migrations
- Zod schema generation from Drizzle tables for validation
- Schema defined in shared directory for both client and server access

**Database Provider**
- Configured for Neon Database serverless PostgreSQL
- Connection via `@neondatabase/serverless` package
- Environment variable-based connection string (`DATABASE_URL`)

### Build & Deployment

**Build Process**
- Custom build script (`script/build.ts`) that:
  - Cleans previous builds
  - Builds frontend with Vite
  - Bundles server with esbuild
  - Selective dependency bundling (allowlist for performance)
  - Outputs to `dist` directory

**Development Workflow**
- `npm run dev`: Starts development server with Vite middleware
- `npm run build`: Production build
- `npm start`: Runs production build
- `npm run db:push`: Pushes schema changes to database

**Module System**
- ESM modules throughout (type: "module" in package.json)
- Path aliases configured: `@/` for client, `@shared/` for shared code
- TypeScript path resolution via baseUrl and paths config

### Form Handling & Validation

**Form Management**
- React Hook Form for form state management
- Zod resolvers for schema-based validation
- Custom Form components from shadcn/ui wrapping Radix UI primitives
- Server-side validation using shared Zod schemas

**Contact Form Flow**
1. Client-side validation with Zod schema
2. Form submission via React Query mutation
3. Server-side validation and storage
4. Toast notification feedback to user

## External Dependencies

### Core UI Libraries
- **@radix-ui**: Comprehensive set of unstyled, accessible UI primitives (accordion, dialog, dropdown, etc.)
- **shadcn/ui**: Pre-built component system built on Radix UI
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: For building variant-based component APIs
- **clsx & tailwind-merge**: For conditional className composition

### Animation & Interaction
- **Framer Motion**: Declarative animation library for React
- **embla-carousel-react**: Carousel/slider functionality for testimonials

### Data Management
- **@tanstack/react-query**: Server state management, caching, and synchronization
- **react-hook-form**: Form state management with minimal re-renders
- **@hookform/resolvers**: Integration between React Hook Form and Zod validation

### Routing & Navigation
- **wouter**: Lightweight routing library (alternative to React Router)

### Database & ORM
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon Database
- **drizzle-zod**: Automatic Zod schema generation from Drizzle tables

### Validation
- **Zod**: TypeScript-first schema validation library
- **zod-validation-error**: Better error messages for Zod validation failures

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type-safe development
- **esbuild**: Fast JavaScript bundler for server code
- **tsx**: TypeScript execution for development and build scripts
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation for cache busting

### Fonts
- **Google Fonts**: Poppins (headings) and Inter (body text) loaded via CDN

### Icons
- **Lucide React**: Icon library
- **react-icons/si**: Simple Icons for social media logos

### Potential Future Integrations
The backend is structured to support:
- Session management (connect-pg-simple for PostgreSQL sessions)
- Authentication (passport, passport-local, jsonwebtoken)
- File uploads (multer)
- Email (nodemailer)
- Payment processing (stripe)
- Rate limiting (express-rate-limit)
- WebSocket support (ws)
- AI features (@google/generative-ai, openai)
- Excel export (xlsx)