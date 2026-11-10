# Architecture

## Overview

This is a client-side portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React. The architecture is intentionally lightweight; there is no backend or database in this repository.

## Source layout

- `src/components/` — reusable presentation components shared across features.
- `src/features/` — feature-specific pages, content, and UI. The portfolio is in `src/features/portfolio/`.
- `src/hooks/` — reusable React state and lifecycle logic.
- `src/services/` — browser or external integration helpers, isolated from presentation.
- `src/types/` — shared TypeScript contracts.
- `src/utils/` — small, framework-independent helpers.
- `src/main.tsx` — React application entry point.
- `src/App.tsx` — compatibility-level app export; feature composition belongs in its feature folder.
- `public/` — static files served as-is, including the profile portrait in `images/` and downloadable PDF resume in `resume/`.

## Dependency direction

Feature pages may compose shared components and use hooks, services, types, and utilities. Shared components and utilities should not import feature-specific page code. Keep browser integrations in services when doing so makes them easier to test or replace.

## Content and behavior

Portfolio-specific static content is defined in `src/features/portfolio/portfolioContent.ts`. Theme persistence is handled by `src/hooks/useTheme.ts`. Contact form presentation remains client-side; it must not claim message delivery unless a server-side integration is configured.

Avoid adding repositories, dependency-injection frameworks, or domain layers unless the project gains requirements that justify them.
