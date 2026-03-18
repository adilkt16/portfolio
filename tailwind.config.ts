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
        // Dark black-and-blue palette with white reserved for highlights.
        background: {
          DEFAULT: '#05080d',
          light: '#0b1422',
        },
        foreground: {
          DEFAULT: '#e7f3ff',
          muted: '#9ab4cf',
          accent: '#5f7a96',
        },
        primary: {
          DEFAULT: '#149bdd',
          light: '#72c3eb',
          dark: '#0f74aa',
        },
        accent: {
          DEFAULT: '#1a3f63',
          light: '#2b5d8a',
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
