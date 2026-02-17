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
          DEFAULT: '#c9b8a0',
          dark: '#b5a08a',
          light: '#ddc9b4',
        },
        secondary: {
          DEFAULT: '#8b7355',
          dark: '#6d5a44',
          light: '#a89179',
        },
        accent: {
          DEFAULT: '#e8dfd5',
          dark: '#d4c7b8',
          light: '#f5f0ea',
        },
      },
      fontFamily: {
        sans: ['var(--font-cormorant)', 'Georgia', 'serif'],
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

