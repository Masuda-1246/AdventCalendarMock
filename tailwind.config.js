/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'nebula': 'nebula 30s ease-in-out infinite',
        'nebula-reverse': 'nebula 20s ease-in-out infinite reverse',
        'space-dust': 'space-dust 15s linear infinite',
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 10s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      backgroundColor: {
        'gray-750': '#2d3748',
      },
    },
  },
  plugins: [],
};