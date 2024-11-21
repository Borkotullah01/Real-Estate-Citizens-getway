/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        poppins: ['Montserrat', 'sans-serif']

      },
      colors: {
        active: "#4e04ae",
        inactive: "#6b7280",
        primary : '#7f22f9e4',
        primaryLight: '#7f22f9e4',
        accent: {
          light: '#994cfe5e',
          DEFAULT: '#7f22f9e4',
          dark: '#4e04ae',
        },
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

