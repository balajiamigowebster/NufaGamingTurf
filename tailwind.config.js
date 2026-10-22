/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turf: {
          dark: '#080d0a',
          card: '#0f1712',
          cardBorder: '#1c2820',
          accent: '#47e246',
          accentHover: '#38c538',
          accentLight: '#65f163',
          muted: '#8b9b90',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Impact', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
