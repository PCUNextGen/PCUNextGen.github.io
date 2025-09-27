/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
  extend: {
    colors: {
  // Light Theme Colors
  'light-primary': '#ffffff',      // White background
  'light-secondary': '#f0f2f5',  // Light gray for cards
  'text-light-primary': '#111827', // Dark text
  'text-light-secondary': '#6b7280', // Lighter gray text
  
  // Dark Theme Colors
  'dark-primary': '#000000',      // Changed to pure black
  'dark-secondary': '#1a2a45',   // Lighter blue for cards
  'text-dark-primary': '#ccd6f6',   // Your original light text
  'text-dark-secondary': '#8892b0',// Your original gray text

  // Accent Color (remains the same)
  'accent': '#64ffda',
},
    fontFamily: {
      'sans': ['"Inter"', 'sans-serif'],
      'mono': ['"Fira Code"', 'monospace'],
    },
  },
},
  plugins: [],
}