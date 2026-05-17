/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#060f1e',
          mid: '#0b1a30',
          light: '#0d1f3c',
          dark: '#030810',
        },
        teal: {
          DEFAULT: '#1d9e75',
          light: '#7dd3b8',
          dim: 'rgba(29,158,117,0.15)',
        },
        muted: '#8aa3bc',
        dim: '#4a6a84',
        offwhite: '#f4f7f9',
        gold: '#f59e0b',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '10': '10px',
        '14': '14px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.5', transform: 'scale(1.4)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease both',
        'pulse-dot': 'pulseDot 2s infinite',
        ticker: 'ticker 30s linear infinite',
      },
    },
  },
  plugins: [],
};