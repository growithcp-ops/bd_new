# Precision Granite Recovery

## Overview

A modern marketing website for Precision Granite Recovery (branded as "Black Diamond"), a company transforming granite waste into high-quality construction materials. The application is built as a full-stack TypeScript project with a React frontend and Express backend, designed to showcase the company's sustainable construction material recovery process.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with CSS custom properties for theming
- **UI Components**: shadcn/ui component library (New York style variant) with Radix UI primitives
- **Animations**: Framer Motion for scroll-based animations and transitions
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript with ES modules
- **Server**: HTTP server with development HMR support via Vite middleware
- **Static Serving**: Production builds served from `dist/public`

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Current Storage**: In-memory storage implementation (`MemStorage` class) as default
- **Database Ready**: PostgreSQL configuration in place via `drizzle.config.ts`, requires `DATABASE_URL` environment variable

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # UI components and page sections
│   │   ├── pages/        # Route page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Backend Express application
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage interface
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client and server
│   └── schema.ts     # Drizzle database schema
└── migrations/       # Database migrations output
```

### Design Patterns
- **Monorepo Structure**: Single repository with client, server, and shared directories
- **Path Aliases**: `@/` for client source, `@shared/` for shared code
- **Component Organization**: Section-based components for landing page (Hero, Philosophy, Process, Impact, Products)
- **Theme System**: Dark monochrome palette defined via CSS custom properties

## External Dependencies

### UI Framework
- **Radix UI**: Complete primitive component library for accessible UI elements
- **shadcn/ui**: Pre-styled component collection built on Radix primitives
- **Lucide React**: Icon library

### Database & ORM
- **Drizzle ORM**: Type-safe SQL query builder
- **drizzle-zod**: Schema validation integration
- **PostgreSQL**: Target database (via `pg` driver)
- **connect-pg-simple**: Session storage for PostgreSQL

### Development Tools
- **Vite**: Frontend build tool with HMR
- **esbuild**: Server bundling for production
- **TypeScript**: Full-stack type safety

### Animation & Interaction
- **Framer Motion**: Animation library for React
- **Embla Carousel**: Carousel component

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation