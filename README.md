# RewardVault

Production-ready Next.js 16 application with user and admin dashboards.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Radix UI components

## Local Development

1. Install dependencies

npm install

2. Start development server

npm run dev

3. Open the app

http://localhost:3000

## Quality Checks

Run lint:

npm run lint

Run production build:

npm run build

Both commands pass in the current project state.

## Deploy to Vercel

This project already includes [vercel.json](vercel.json) with install and build commands.

### Option A: Vercel Dashboard

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep defaults:
   - Install Command: npm install
   - Build Command: next build
4. Deploy.

### Option B: Vercel CLI

1. Install CLI

npm i -g vercel

2. Login

vercel login

3. Deploy preview

vercel

4. Deploy production

vercel --prod

## Notes

- Type checking is enabled during build.
- Lint is configured with ESLint 9 and Next flat config in [eslint.config.mjs](eslint.config.mjs).
- Main app config is in [next.config.mjs](next.config.mjs).
