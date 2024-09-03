/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#D2D5DA',
          200: '#6C727F',
        },
        dark: {
          100: '#282B30',
          200: '#1B1D1F',
        },
        blue: {
          100: '#4E80EE'
        },
      }
    },
  },
  plugins: [],
}

