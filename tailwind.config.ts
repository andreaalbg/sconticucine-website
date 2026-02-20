import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8a9d77',
          dark: '#7a8d67',
          light: '#9caf88',
        },
        secondary: {
          DEFAULT: '#6B655B',
          dark: '#5a5550',
          light: '#8a8478',
        },
        accent: {
          DEFAULT: '#a8b89d',
          dark: '#98a88d',
          light: '#c3ceb8',
        },
        sage: {
          DEFAULT: '#b4c4a8',
          dark: '#9db091',
          light: '#d0dbc6',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
export default config

