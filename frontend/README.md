# AstraML Frontend v2

AstraML v2 is a complete rewrite of the frontend architecture using React 19, Vite, and TypeScript. It features a modern design system built with Tailwind CSS and focuses on robust state management, routing, and testing.

## Tech Stack

- **Framework:** React 19 + Vite 6
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v3) + Lucide React (icons)
- **Routing:** React Router (v7)
- **State Management:** Zustand (global), TanStack Query (server state)
- **Testing:** Vitest + React Testing Library
- **Linting & Formatting:** ESLint + Prettier

## Prerequisites

- Node.js >= 20
- npm >= 10

## Getting Started

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`
   The application will be available at \`http://localhost:5173\`.

3. **Build for production:**
   \`\`\`bash
   npm run build
   \`\`\`

4. **Run tests:**
   \`\`\`bash
   npm run test
   \`\`\`

## Project Structure

- \`src/components/ui\`: Core design system components (Button, Card, Input, etc.).
- \`src/components/layout\`: App shell, Sidebar, Header.
- \`src/pages\`: Route components (Dashboard, Upload, Explain, etc.).
- \`src/routes\`: React Router configuration.
- \`src/store\`: Zustand state management.
- \`src/lib\`: Utility functions (e.g., \`cn\` for Tailwind classes).

## Docker

You can build and run the frontend using Docker:

\`\`\`bash
docker build -t astraml-frontend .
docker run -p 8080:80 astraml-frontend
\`\`\`
