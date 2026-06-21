# kNITTEd — Frontend (React + Vite + Tailwind v4)

A pixel-faithful React/Vite rebuild of the kNITTEd landing page and dashboard
designs (Luminal Developer System), written in plain JavaScript/JSX
(no TypeScript), using Tailwind CSS v4's modern single-import setup.

## Tech Stack

- **React 19** + **Vite** — plain JS/JSX, no TypeScript
- **Tailwind CSS v4** — config-free, CSS-first (`@theme` tokens)
- **React Router v7** — client-side routing, nested dashboard routes
- **lucide-react**, **framer-motion** — icons / animation (available, not yet used everywhere)

## Tailwind v4 setup

No `tailwind.config.js` / `postcss.config.js` needed. Everything lives in:

- `vite.config.js` — uses the official `@tailwindcss/vite` plugin
- `src/styles/globals.css` — starts with:

  ```css
  @import "tailwindcss";
  ```

  followed by an `@theme` block defining all Luminal Developer System
  tokens (colors, spacing, radii, fonts, font sizes) as CSS variables,
  which Tailwind turns directly into utility classes
  (e.g. `bg-surface-base`, `text-on-surface-variant`, `font-label-code`).

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── layout/      Sidebar, MobileHeader, TrendingAside, Navbar, Footer
│   │   ├── ui/           Button, Input, Card, Badge
│   │   └── features/     AuthCard, ListItemCard, DetailModal, ToggleSwitcher, CreatePostForm
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── Dashboard.jsx        (layout shell: sidebar + outlet + trending aside)
│   │   └── dashboard/            (routed sub-pages)
│   │       ├── Home.jsx          GET/POST feed
│   │       ├── Events.jsx
│   │       ├── Teammates.jsx
│   │       ├── Buddies.jsx
│   │       ├── Projects.jsx
│   │       ├── Discussions.jsx
│   │       └── Profile.jsx
│   ├── data/mockData.js          centralized mock content for all list pages
│   ├── hooks/useToggle.js
│   └── styles/globals.css        Tailwind v4 import + design tokens
├── index.html
├── vite.config.js
└── package.json
```

## Routes

| Path                     | Page                                   |
|---------------------------|-----------------------------------------|
| `/`                       | Landing page (auth card)               |
| `/dashboard`              | Home feed (GET/POST toggle)            |
| `/dashboard/events`       | Events list                            |
| `/dashboard/teammates`    | Teammate requests                      |
| `/dashboard/buddies`      | Coding buddy requests                  |
| `/dashboard/projects`     | Project listings                       |
| `/dashboard/discussions`  | Discussion threads                     |
| `/dashboard/profile`      | User profile                           |

Logging in from the landing page (any non-empty email + password, or the
GitHub / Google buttons on the auth card) routes to `/dashboard`.

## What's in this initial commit

- Full landing page rebuilt 1:1 from the original design (grid background,
  gradient glows, floating auth card, stat counters).
- Dashboard shell with a working **GET / POST** toggle:
  - GET — searchable feed with filter chips, event/teammate cards.
  - POST — form to create an Event, Teammate Request, or Coding Buddy post
    (fields swap based on the selected post type).
- **Sidebar navigation is fully wired** — each item (Events, Teammates,
  Coding Buddies, Projects, Discussions, Profile) routes to its own page via
  nested React Router routes (`src/App.jsx`).
- **Click-through detail view** — every list card (event, teammate, buddy,
  project, discussion) opens a `DetailModal` with extended info (venue,
  date, organizer, team size, tags, stats), using the same card design.
- **Mobile responsive nav** — a hamburger button (`MobileHeader`) below the
  `md` breakpoint opens a slide-in `Sidebar` drawer with a backdrop; desktop
  keeps the full icon + label rail.
- **Themed scrollbars** — replaced the default OS scrollbar with a thin,
  translucent scrollbar matching the dark glass UI, applied globally
  (feed, sidebar, modals, forms).
- Centralized mock data (`src/data/mockData.js`) for events, teammates,
  buddies, projects, and discussions, so list and detail views stay in sync
  without duplicated content.

## Known limitations / next steps

- Auth is purely client-side (no backend call yet) — any non-empty
  email/password logs you into `/dashboard`. This needs to be wired to the
  `backend/` API.
- All list/detail content is mock data; no API integration yet.
- No automated tests yet.