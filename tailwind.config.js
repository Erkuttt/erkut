/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: { brand: { red: '#B2242A', glow: '#e11d48', dark: '#050505', surface: '#0a0a0a' } },
      animation: { 'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' },
    },
  },
  plugins: [],
};
