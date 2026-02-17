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
          DEFAULT: '#9caf88',
          dark: '#8a9d77',
          light: '#b8c9a8',
        },
        secondary: {
          DEFAULT: '#6b7c5d',
          dark: '#5a6b4d',
          light: '#8a9d7e',
        },
        accent: {
          DEFAULT: '#d4dac9',
          dark: '#c5cdb9',
          light: '#e5e9dd',
        },
      },
      fontFamily: {
        sans: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
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

