import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        surface: '#111111',
        text: '#e8e8e8',
        muted: 'rgba(232,232,232,0.5)',
        gold: '#c9a84c',
        'gold-muted': 'rgba(201,168,76,0.15)',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '20px',
        pill: '999px',
      },
      maxWidth: {
        section: '1440px',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 24px rgba(201,168,76,0.15)' },
          '50%': { boxShadow: '0 0 48px rgba(201,168,76,0.3)' },
        },
      },
      animation: {
        ticker: 'ticker 25s linear infinite',
        'ticker-slow': 'ticker 40s linear infinite',
        fadeIn: 'fadeIn 1.5s cubic-bezier(0.22,1,0.36,1) forwards',
        slideUp: 'slideUp 2s cubic-bezier(0.22,1,0.36,1) forwards',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
