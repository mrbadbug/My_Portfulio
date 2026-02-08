
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          dark: '#020617',
        },
        cream: {
          DEFAULT: '#faf5f0',
          dark: '#f0eadd',
        },
        coral: {
          DEFAULT: '#ff6b6b',
          light: '#ff8c8c',
          dark: '#e05a5a',
        },
        lavender: {
          DEFAULT: '#a78bfa',
          light: '#c4b5fd',
          dark: '#8b5cf6',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'blob-slow': 'blob-morph 25s infinite linear',
        'blob-medium': 'blob-morph 20s infinite linear reverse',
        'blob-fast': 'blob-morph 15s infinite linear',
        'float': 'blob-float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-glow 4s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'blob-morph': {
          '0%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'translate(0, 0) rotate(0deg)',
          },
          '33%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
            transform: 'translate(20px, -30px) rotate(120deg)',
          },
          '66%': {
            borderRadius: '70% 30% 40% 60% / 30% 40% 70% 50%',
            transform: 'translate(-20px, 20px) rotate(240deg)',
          },
          '100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'translate(0, 0) rotate(360deg)',
          },
        },
        'blob-float': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
