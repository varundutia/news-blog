Single-page online news blog built with [Next.js](https://nextjs.org) and Mantine.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The site is a single article page at `src/app/page.tsx`.

## Scripts

- `npm run dev` starts the local dev server with webpack.
- `npm run build` creates the production export.
- `npm run lint` runs ESLint.

## Notes

- The app is configured as a static export.
- The homepage is served from `/`.
- Turbopack has been avoided here in favor of webpack for stability.
