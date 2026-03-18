# Modern Portfolio Website

A clean, accessible, and performant portfolio website built with Next.js 15 and Tailwind CSS. Features a fixed sidebar navigation and smooth scrolling sections.

## Features

- **Split-screen Layout**: Fixed sidebar with navigation on the left, scrollable content on the right
- **Smooth Scrolling**: Anchor-based navigation with smooth scroll behavior
- **Active Section Highlighting**: Navigation automatically highlights the current section in view
- **Responsive Design**: Mobile-first approach that adapts to all screen sizes
- **Accessibility**: Semantic HTML, skip-to-content link, focus states, ARIA labels
- **Interactive Effects**: Mouse-following gradient spotlight, hover transitions, card animations
- **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS

## Project Structure

```
main-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Main home page
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Sidebar.tsx         # Fixed sidebar with navigation
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx        # Projects grid
│   ├── Writing.tsx         # Writing/articles section
│   ├── Footer.tsx          # Footer with tech credits
│   └── MouseGradient.tsx   # Cursor spotlight effect
├── public/                 # Static assets (images, etc)
├── tailwind.config.ts      # Tailwind configuration with custom colors
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Color Scheme

The project uses a custom color palette (different from the original inspiration):

- **Background**: Dark slate tones (`#0f172a`, `#1e293b`)
- **Text**: Light slate (`#e2e8f0`, `#94a3b8`)
- **Primary**: Sky blue (`#38bdf8`, `#7dd3fc`, `#0ea5e9`)
- **Accent**: Violet (`#a78bfa`, `#c4b5fd`)

Colors can be easily customized in `tailwind.config.ts`.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Changing Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  background: {
    DEFAULT: '#your-bg-color',
    light: '#your-lighter-bg',
  },
  primary: {
    DEFAULT: '#your-primary-color',
    // ...
  },
}
```

### Adding Content

1. **Sidebar** (`components/Sidebar.tsx`):
   - Change name, title, and tagline
   - Update social links

2. **About** (`components/About.tsx`):
   - Replace dummy text with your bio

3. **Experience** (`components/Experience.tsx`):
   - Update the `experiences` array with your work history

4. **Projects** (`components/Projects.tsx`):
   - Update the `projects` array with your projects
   - Add project images to `/public` folder

5. **Writing** (`components/Writing.tsx`):
   - Update the `articles` array with your articles/blog posts

### Navigation Sections

To add or remove sections:

1. Update `navigationItems` in `components/Sidebar.tsx`
2. Add corresponding section component in `components/`
3. Import and add to `app/page.tsx`
4. Ensure section has `id` matching the navigation `href`

## Key Components

### Sidebar

Fixed navigation with:
- Active section indicator
- Smooth scroll navigation
- Social media links with icons
- Responsive (hidden on mobile, stacked on small screens)

### Experience Timeline

Timeline-style layout with:
- Date ranges
- Company names with external links
- Job descriptions
- Technology tags
- Hover effects with background highlighting

### Projects Grid

Card-based layout with:
- Project thumbnails
- Descriptions and stats
- Technology tags
- External link indicators
- Group hover effects

### Mouse Gradient

Animated spotlight effect that follows the cursor, creating an interactive lighting effect across the page.

## Accessibility Features

- Skip-to-content link for keyboard navigation
- Semantic HTML structure
- ARIA labels for interactive elements
- Focus-visible states for keyboard users
- External link indicators with screen reader text
- Proper heading hierarchy

## Performance

- Static site generation with Next.js
- Optimized fonts with `next/font`
- CSS-only animations (no heavy JavaScript)
- Intersection Observer for efficient scroll detection
- Minimal JavaScript bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript 5.3
- **Font**: Inter (Google Fonts)

## License

This is a template for educational and personal use. Feel free to use it for your own portfolio.

## Phase 2: Customization

Once you're ready to add your own branding:

1. Update all content in component files
2. Modify colors in `tailwind.config.ts`
3. Add your images to the `/public` folder
4. Update metadata in `app/layout.tsx`
5. Add your social media links
6. Deploy to Vercel, Netlify, or your preferred platform

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js.

---

**Note**: This is Phase 1 with dummy content and a custom color scheme. Ready for your personalization in Phase 2.
