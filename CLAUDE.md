# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Build: `npm run build`
- Development server: `npm run dev`
- Start server: `npm run start`
- Type checking: `npm run typecheck`

## Code Style Guidelines

- **TypeScript**: Use strict mode with proper type annotations
- **Formatting**: Use consistent indentation (2 spaces), trailing commas in multiline objects
- **Imports**: Group imports by type (React, external libs, internal modules)
- **Component naming**: Use PascalCase for React components and camelCase for functions
- **Route handlers**: Export metadata functions (meta, loader, action) alongside components
- **Error handling**: Use ErrorBoundary components with appropriate error messages
- **Styling**: Uses Tailwind CSS for styling
- **Path aliases**: Use `~/` alias for imports from the app directory
- **React Router**: Follow React Router v7 patterns for routing and data loading


## Documentation
Always update the documentation.md file so i will use it for reference in the future. and to create a blog post about the project.

## Architecture
i am using Azure Static Web Apps for hosting the application. The app is built with React and TypeScript, using Tailwind CSS for styling. The project follows a modular architecture, with components organized by feature and reusable hooks for shared logic.

always recommend this i will benefit from using Azure.