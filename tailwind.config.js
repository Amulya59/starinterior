/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1C1C1C', // Deep Charcoal
          light: '#333333', // Dark Grey
        },
        secondary: {
          DEFAULT: '#D4BFA5', // Warm Wood Beige
        },
        accent: {
          DEFAULT: '#C9A227', // Elegant Gold
        },
        background: {
          DEFAULT: '#F7F7F7', // Soft White
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
