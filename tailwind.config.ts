import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color scheme - different from original
        background: {
          DEFAULT: '#0f172a', // slate-900
          light: '#1e293b',   // slate-800
        },
        foreground: {
          DEFAULT: '#e2e8f0', // slate-200
          muted: '#94a3b8',   // slate-400
          accent: '#64748b',  // slate-500
        },
        primary: {
          DEFAULT: '#38bdf8',  // sky-400
          light: '#7dd3fc',    // sky-300
          dark: '#0ea5e9',     // sky-500
        },
        accent: {
          DEFAULT: '#a78bfa',  // violet-400
          light: '#c4b5fd',    // violet-300
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};

export default config;
