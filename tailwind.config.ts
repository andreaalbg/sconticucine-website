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
          DEFAULT: '#a8b89d',
          dark: '#8fa584',
          light: '#c3ceb8',
        },
        secondary: {
          DEFAULT: '#7a8a6f',
          dark: '#5f6e55',
          light: '#98a88d',
        },
        accent: {
          DEFAULT: '#e8ebe5',
          dark: '#d4d9cf',
          light: '#f5f7f3',
        },
        sage: {
          DEFAULT: '#b4c4a8',
          dark: '#9db091',
          light: '#d0dbc6',
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

