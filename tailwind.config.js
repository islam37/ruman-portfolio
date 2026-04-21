/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        accent: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease forwards',
        'slide-up':   'slideUp 0.7s ease forwards',
        'blink':      'blink 1s step-end infinite',
        'float':      'float 6s ease-in-out infinite',
        'gradient':   'gradientShift 8s ease infinite',
        'spin-slow':  'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn:        { from: { opacity: '0' },                 to: { opacity: '1' } },
        slideUp:       { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        blink:         { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        float:         { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        gradientShift: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
      },
      backgroundSize: {
        '300%': '300%',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-teal':   '0 0 40px rgba(20, 184, 166, 0.15)',
        'glow-amber':  '0 0 40px rgba(251, 191, 36, 0.15)',
        'card':        '0 4px 24px rgba(0,0,0,0.06)',
        'card-dark':   '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
