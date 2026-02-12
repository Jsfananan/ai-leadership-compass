/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          terracotta: '#C4563A',
          'terracotta-dark': '#A34830',
          'terracotta-light': '#f0d9d0',
          blue: '#4A90A4',
          warm: '#FAFAFA',
          dark: '#1A1A2E',
          text: '#333333',
          border: '#e5e0db',
        },
        archetype: {
          observer: '#8b95a5',
          explorer: '#d4883e',
          integrator: '#C4563A',
          architect: '#3b6fa0',
          amplifier: '#7b5ea7',
        }
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-scale': 'fadeInScale 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'draw-circle': 'drawCircle 1.5s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawCircle: {
          '0%': { strokeDashoffset: '283' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
