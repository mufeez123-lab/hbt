/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'burgundy': {
          DEFAULT: '#8B0000',
          'dark': '#640000',
          'light': '#B22222',
        },
        'gold': {
          DEFAULT: '#D4AF37',
          'dark': '#AA8C2C',
          'light': '#F5D76E',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg')",
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  plugins: [],
};