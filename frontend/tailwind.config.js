/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: 'rgb(var(--color-base-rgb) / <alpha-value>)',
          deep: 'rgb(var(--color-base-deep-rgb) / <alpha-value>)',
          soft: 'rgb(var(--color-base-soft-rgb) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--color-surface-rgb) / <alpha-value>)',
          strong: 'rgb(var(--color-surface-strong-rgb) / <alpha-value>)',
          card: 'rgb(var(--color-surface-card-rgb) / <alpha-value>)',
        },
        edge: {
          DEFAULT: 'rgb(var(--color-edge-rgb) / <alpha-value>)',
          strong: 'rgb(var(--color-edge-strong-rgb) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--color-ink-rgb) / <alpha-value>)',
          soft: 'rgb(var(--color-ink-soft-rgb) / <alpha-value>)',
          mute: 'rgb(var(--color-ink-mute-rgb) / <alpha-value>)',
        },
        teal: {
          DEFAULT: '#14B8A6',
          soft: '#5EEAD4',
          deep: '#0D9488',
        },
        gold: {
          DEFAULT: '#F5C542',
          soft: '#FCD34D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(94, 234, 212, 0.5)',
        'glow-sm': '0 0 20px -5px rgba(94, 234, 212, 0.4)',
        'glow-gold': '0 0 30px -5px rgba(245, 197, 66, 0.5)',
      },
      animation: {
        'orbit-slow': 'orbit 24s linear infinite',
        'orbit-reverse': 'orbit-reverse 30s linear infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'spin-slow': 'orbit 20s linear infinite',
      },
      keyframes: {
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'orbit-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
};