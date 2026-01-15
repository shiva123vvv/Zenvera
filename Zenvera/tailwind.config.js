/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zen-primary': '#5D5FEF',
        'zen-secondary': '#A5A6F6',
        'zen-accent': '#00D2D3',
        'zen-navy': '#151B26',
        'zen-dark': '#1A1B23',
        'zen-gray': '#6E6E80',
        'zen-light': '#F8F9FD',
        'zen-bg-gradient-start': '#F4F7FF',
        'zen-bg-gradient-end': '#FDF0FF',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #F4F7FF 0%, #FDF0FF 100%)',
        'primary-gradient': 'linear-gradient(90deg, #5D5FEF 0%, #7879F1 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}

