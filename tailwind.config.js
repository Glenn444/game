/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-surface': '#1a1a1a',
        'dark-elevated': '#2a2a2a',
      },
    },
  },
  plugins: [],
};