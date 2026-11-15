# Pathly Learn — Next.js Boilerplate

NERDC-aligned, offline-first learning landing page for Nigerian JSS1–SS3 students.
Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Motion · lucide-react.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build && npm start
```

## Structure

```
src/
├── app/                    # Routes, root layout (next/font), global CSS
├── components/
│   ├── ui/                 # Button, Badge, Card, Dialog, Tabs primitives
│   ├── layout/             # Header, Footer
│   ├── sections/           # One component per landing-page section
│   ├── modals/             # SyllabusDialog, AuthDialog
│   └── icons.tsx           # Icon-name → lucide component mapping
├── data/                   # Typed curriculum, Pally scenarios, offline steps, mastery, quiz
├── providers/              # ModalsProvider (shared auth + syllabus dialog state)
├── lib/                    # cn() helper, motion variants
└── types/                  # All shared interfaces and unions
```

## Notes

- Page (`app/page.tsx`) is a Server Component; interactive sections are Client Components.
- Fonts (Inter, Poppins) are self-hosted via @fontsource packages: no Google Fonts request at runtime or build time.
- Sign-in / sign-up dialogs are UI-only. Wire `AuthDialog`'s submit handler to your auth backend.
- All numbers and student data in the dashboards are demo content in `src/data`.
