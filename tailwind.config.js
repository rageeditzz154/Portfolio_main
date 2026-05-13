/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─────────────────────────────────────────────
      // COLORS — edit here to change the brand palette
      // ─────────────────────────────────────────────
      colors: {
        bg: {
          primary:   '#070708',
          secondary: '#0E0E10',
          card:      '#111114',
        },
        accent: {
          blue:   '#5B8EF0',
          violet: '#9B7AF5',
          glow:   '#3D6FE0',
        },
        brand: {
          DEFAULT: '#5B8EF0',
        },
        ink: {
          primary: '#F2F1EE',
          muted:   '#7A7A8A',
          subtle:  '#3E3E4A',
        },
      },
      // ─────────────────────────────────────────────
      // FONTS — Geist as primary, system fonts as fallback
      // ─────────────────────────────────────────────
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['var(--font-geist-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['var(--font-geist-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      // ─────────────────────────────────────────────
      // SPACING & SIZING
      // ─────────────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      fontSize: {
        '10xl': ['10rem',  { lineHeight: '1' }],
        '9xl':  ['8rem',   { lineHeight: '1' }],
        '8xl':  ['6.5rem', { lineHeight: '1' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'typing': 'typing 2s steps(20) infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        typing: {
          '0%': { width: '0' },
          '50%': { width: '100%' },
          '100%': { width: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
