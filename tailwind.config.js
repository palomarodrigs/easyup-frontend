/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: {
          100: '#FFFFFF',
          200: '#D9D9D9',
        },

        grey: {
          100: '#747C8B',
          200: '#565E6D',
          300: '#232B3A',
          400: '#252C3A',
          500: '#1D2330',
          600: '#181D28',
        },

        mint: {
          100: '#1CE2A1',
          200: '#03C988',
        },
      },

      keyframes: {
        slideIn: {
          from: { transform: 'translateX(100px)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },
        topDown: {
          from: { transform: 'translateY(-50px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        },
        downTop: {
          from: { transform: 'translateY(50px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        },
      },

      animation: {
        slideIn: 'slideIn 500ms ease-in',
        topDown: 'topDown 300ms linear',
        downTop: 'downTop 400ms linear',
      },
    },
    plugins: [],
  },
}
