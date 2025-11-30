# Academic Avengers

A modern, professional Next.js website for Academic Avengers - Memos brings back.

## Features

- **Modern Next.js 14** with App Router
- **Tailwind CSS** for beautiful, responsive styling
- **TypeScript** for type safety
- **Fully Responsive Design** - works on all devices
- **Professional UI/UX** with smooth animations
- **Mobile Menu** for better navigation
- **Image Gallery** with modal view
- **Video Integration** for E-Lab challenges
- **SEO Optimized** with proper metadata

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in browser.

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page (/)
│   │   ├── about/             # About Us page (/about)
│   │   │   └── page.tsx
│   │   ├── e-lab/             # E-Lab challenges page (/e-lab)
│   │   │   └── page.tsx
│   │   ├── gallery/           # Gallery page (/gallery)
│   │   │   └── page.tsx
│   │   ├── prototype/         # Prototype page (/prototype)
│   │   │   └── page.tsx
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   └── components/            # React components
│       ├── Navigation.tsx     # Main navigation (responsive)
│       ├── Footer.tsx         # Footer component
│       ├── ScrollToTop.tsx    # Scroll to top button
│       ├── TeamSection.tsx    # Team member showcase
│       ├── MissionSection.tsx # Mission, values, problem, solution
│       └── CTASection.tsx     # Call-to-action section
├── public/                    # Static assets
│   ├── img/                  # Images
│   └── webfonts/             # Font files
└── package.json
```

## Routes

All routes are properly configured and linked in the navigation:

- **/** - Home page with hero section
- **/about** - Detailed about page with full team and mission
- **/e-lab** - E-Lab challenges with embedded videos
- **/gallery** - Image gallery with modal view
- **/prototype** - Iteme prototype showcase

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icons (via CDN)

## License

All rights reserved

## Team

*Logger*

