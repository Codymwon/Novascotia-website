# Nova Scotia Trading & Contracting - Replit Configuration

## Overview

This is a full-stack web application for Nova Scotia Trading & Contracting, a construction and industrial supply company based in Qatar. The application serves as a business website with contact form functionality, showcasing the company's services including construction materials, industrial services, and skilled workforce solutions.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL storage
- **API Design**: RESTful endpoints with JSON responses

### Development Setup
- **Monorepo Structure**: Client and server code in separate directories with shared schema
- **Hot Reload**: Vite development server with HMR
- **Type Safety**: Shared TypeScript types between client and server
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)

## Key Components

### Database Schema
Located in `shared/schema.ts`, defines two main entities:
- **Users Table**: Basic user authentication (id, username, password)
- **Contacts Table**: Contact form submissions with fields for name, email, phone, service type, and message
- **Validation**: Zod schemas generated from Drizzle table definitions

### API Endpoints
- `POST /api/contact` - Submit contact form with validation
- `GET /api/contacts` - Retrieve all contact submissions (admin functionality)

### UI Components
- **Landing Page**: Single-page application with sections for hero, services, about, and contact
- **Navigation**: Fixed header with smooth scrolling between sections
- **Contact Form**: Validated form with service selection and toast notifications
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Storage Layer
- **Abstract Interface**: IStorage interface for data operations
- **Development**: In-memory storage implementation for development
- **Production**: Database storage with Drizzle ORM and Neon Database

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form validation using React Hook Form + Zod
   - POST request to `/api/contact` endpoint
   - Server validates data using shared Zod schema
   - Data stored in PostgreSQL database via Drizzle ORM
   - Success/error response sent back to client
   - Toast notification displayed to user

2. **Page Navigation**:
   - Single-page application with smooth scrolling navigation
   - Wouter handles client-side routing for 404 pages
   - All main content served from root route

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Library**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Server**: Express.js, session management
- **Validation**: Zod for schema validation
- **State Management**: TanStack Query for server state

### Development Dependencies
- **Build Tools**: Vite, ESBuild for production builds
- **TypeScript**: Full TypeScript support with strict mode
- **Development**: TSX for TypeScript execution, Replit-specific plugins

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` runs server with hot reload
- **Database**: Uses DATABASE_URL environment variable for connection
- **Vite Integration**: Development server with middleware mode for API routes

### Production Build
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Static Assets**: Served by Express in production mode
- **Environment**: NODE_ENV-based configuration switching

### Database Management
- **Migrations**: Drizzle Kit handles database schema migrations
- **Connection**: Serverless PostgreSQL via Neon Database
- **Schema Evolution**: `npm run db:push` applies schema changes

## Changelog

Changelog:
- July 01, 2025. Initial setup
- July 01, 2025. Added separate pages for Materials, Services, and Skilled Workers with detailed product listings and navigation routing
- July 01, 2025. Updated hero section with "Build the Future" theme and "Work With Us" call-to-action
- July 01, 2025. Updated contact information to real company details: sales@ns-me.com, +974 77743831, Tower 2 Office 57 Barwa Towers Al Sadd

## User Preferences

Preferred communication style: Simple, everyday language.