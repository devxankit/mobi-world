/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: {
          DEFAULT: '#2563eb', // blue-600
          dark: '#1e40af',    // blue-800
        },
        accent: {
          DEFAULT: '#a21caf', // purple-700
        },
      },
    },
  },
  plugins: [],
}

