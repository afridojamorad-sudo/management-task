/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        canvas: {
          light: '#fafaf9',
          dark: '#1c1917',
        },
        surface: {
          light: '#f5f5f4',
          dark: '#292524',
          raisedLight: '#e7e5e4',
          raisedDark: '#44403c',
        },
        border: {
          light: '#d6d3d1',
          dark: '#44403c',
        },
        primary: {
          DEFAULT: '#ea580c',
          hover: '#f97316',
          active: '#c2410c',
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
    },
  },
  plugins: [],
}
