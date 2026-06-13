# CHRONO — Luxury Timepieces

A luxury watch storefront built with Next.js 14, TypeScript, and Tailwind CSS. CHRONO showcases a curated collection of Swiss-inspired timepieces with a dark, editorial aesthetic, smooth Framer Motion animations, and detailed product pages.

## Features

- **Landing page** with hero, featured collection, brand promises, and new arrivals
- **Collections** browsing with category filtering (heritage, sport, dress, limited)
- **Product detail pages** with image galleries and full specifications
- **About page** telling the brand story
- Fully responsive, server-rendered pages with a custom CHRONO theme
- Watch catalog driven by a single JSON data file — no database required

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) with a custom `chrono-*` color palette
- [Framer Motion](https://www.framer.com/motion/) for animations
- [lucide-react](https://lucide.dev/) icons
- `clsx`, `tailwind-merge`, and `class-variance-authority` for styling utilities
- Fonts: Inter (sans) and Playfair Display (serif) via `next/font`

## Getting Started

### Prerequisites

- Node.js 18.17+ (required by Next.js 14)

### Install & Run

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npm run lint` | Lint with ESLint |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, navbar, footer, metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles & theme utilities
│   ├── about/page.tsx          # Brand story
│   └── collections/
│       ├── page.tsx            # Collection listing
│       └── [slug]/page.tsx     # Individual watch detail page
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ProductCard.tsx
│   └── ProductDetail.tsx
├── data/
│   └── watches.json            # Watch catalog (10 timepieces)
└── lib/
    ├── types.ts                # Watch & WatchSpec types
    └── utils.ts                # Helper utilities
```

## Managing the Catalog

All products live in `src/data/watches.json`. Each entry follows the `Watch` type defined in `src/lib/types.ts`:

```ts
interface Watch {
  id: string;
  slug: string;          // used in /collections/[slug] routes
  name: string;
  brand: string;
  collection: string;    // heritage | sport | dress | limited
  price: number;
  currency: string;
  images: string[];
  description: string;
  shortDescription: string;
  specs: WatchSpec;
  tags: string[];
  featured: boolean;     // shown in the Featured Collection
  new: boolean;          // shown in New Arrivals
}
```

To add a watch, append a new object to the JSON file with a unique `id` and `slug`. Set `featured` or `new` to surface it on the home page. Product images currently reference Unsplash URLs.

## Notes

- Image domains are configured in `next.config.mjs`.
- The custom theme palette (`chrono-black`, `chrono-gold`, `chrono-cream`, etc.) is defined in `tailwind.config.ts`.
