# TanStack Insert App

A minimal insert application built with:

- [TanStack Router](https://tanstack.com/router) for client-side routing
- [TanStack Query](https://tanstack.com/query) for data fetching and mutations
- [Vite](https://vitejs.dev/) + React + TypeScript

The app persists items to `localStorage` through a small async store that
simulates an API, so the TanStack Query `useMutation` / `useQuery` patterns
work end-to-end without a backend.

## Pages

- `/` — Home
- `/insert` — Form to insert a new item (name + description)
- `/items` — List of inserted items

## Getting started

```bash
npm install
npm run dev
```

Then open the URL printed by Vite (typically <http://localhost:5173>).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build
- `npm run typecheck` — run the TypeScript compiler without emitting
