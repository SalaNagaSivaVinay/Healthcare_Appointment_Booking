/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        doctorBlue: '#1e3a8a',    // Deep blue for healthcare trust
        doctorGreen: '#0f766e',   // Calming teal green
        lightBackground: '#f0f9ff', // Light bluish background
        accentYellow: '#fde68a',   // Optional for call-to-action or highlights
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
