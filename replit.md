# Marcelo Rey Portfolio - Frontend Developer Portfolio Website

## Overview

This is a modern, professional portfolio website built for Marcelo Rey, a Frontend Developer. The application showcases skills, experience, education, projects, and provides a contact form for potential clients and employers. It features a single-page application (SPA) architecture with smooth scrolling navigation, responsive design, and modern UI components.

The portfolio includes sections for personal information, technical and professional skills with animated progress bars, work experience and education timeline, project showcase with filtering capabilities, client testimonials, and a fully functional contact form with email notifications. The application is built with a full-stack architecture using React for the frontend and Express.js for the backend, with both in-memory storage and PostgreSQL database support.

## Recent Updates (August 2025)

- Updated profile photo to professional urban background image
- Removed date periods from experience and education sections for cleaner presentation
- Implemented fully functional email system using SendGrid
- Contact form messages sent from montdevtechnology@gmail.com to marcelo.reyran@gmail.com
- Enhanced email notifications with professional HTML formatting:
  - Modern responsive design with portfolio branding
  - Timestamp and organized field layout
  - Direct reply button and clickable email links
  - Improved subject line format with emojis and contact details
  - Better text formatting preserving line breaks
- Database storage for all contact messages with API access

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built using React with TypeScript, leveraging modern hooks and functional components. The UI layer uses shadcn/ui components built on top of Radix UI primitives, providing accessibility and consistent design patterns. Styling is handled through Tailwind CSS with custom CSS variables for theming and responsive design.

The application uses Wouter for lightweight client-side routing, though currently implements a single-page design with smooth scrolling navigation. State management is handled through React Query (@tanstack/react-query) for server state and local React state for UI interactions.

Custom hooks are implemented for common functionality including intersection observer for animations, mobile detection, scroll position tracking, and toast notifications. The design system follows a cohesive visual hierarchy with gradient text effects, card hover animations, and smooth transitions.

### Backend Architecture
The server is built with Express.js using TypeScript in ESM module format. The application implements a RESTful API structure with dedicated route handlers and follows a clean separation of concerns with separate layers for routing, storage, and business logic.

The storage layer uses an abstraction interface (IStorage) allowing for both in-memory storage during development and database persistence in production. The current implementation includes a MemStorage class for development and is designed to easily swap to database storage using Drizzle ORM.

Error handling is implemented with proper status codes and user-friendly error messages. The server includes request logging middleware for API endpoints and proper CORS handling for frontend-backend communication.

### Data Storage
The application uses Drizzle ORM as the database toolkit with PostgreSQL as the target database. The schema defines two main entities: users (for potential authentication) and contact_messages (for storing contact form submissions).

Database configuration supports Neon Database through connection string, with migrations handled through Drizzle Kit. The schema includes proper constraints, default values using PostgreSQL functions, and TypeScript type generation for type safety.

For development and testing, an in-memory storage implementation provides the same interface as the database layer, allowing for seamless development without database dependencies.

### Development Environment
The project uses Vite as the build tool for fast development and hot module replacement. TypeScript configuration supports path mapping for clean imports and includes both client and server code. The development setup includes proper source mapping and error overlays.

Environment-specific configurations handle both development and production deployments, with conditional plugin loading for development tools. The build process creates optimized bundles for both client and server code.

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive primitive components for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **shadcn/ui**: Pre-built component library built on Radix UI primitives
- **Lucide React**: Icon library for consistent iconography
- **Font Awesome**: Additional icons via CDN for specific design elements
- **Google Fonts**: Inter font family for typography

### Frontend State and Routing
- **React Query**: Server state management and caching
- **Wouter**: Lightweight client-side routing
- **React Hook Form**: Form state management with validation
- **date-fns**: Date manipulation and formatting utilities

### Backend and Database
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL
- **Neon Database**: Serverless PostgreSQL database platform
- **Zod**: Schema validation for runtime type checking
- **express-session**: Session management (configured for future authentication)

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind integration

### Validation and Types
- **Zod**: Runtime schema validation and type inference
- **Drizzle-Zod**: Integration between Drizzle ORM and Zod for schema validation
- **TypeScript**: Compile-time type checking throughout the application

The application is designed to be easily deployable on platforms like Replit, with proper environment variable configuration and build scripts for both development and production environments.