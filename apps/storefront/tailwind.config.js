const { tailwindConfig } = require('@storefront-ui/react/tailwind-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindConfig],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@storefront-ui/react/**/*.{js,mjs}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-jost)'],
        heading: ['var(--font-gtamerica-eb)'],
      },
      colors: {
        border: '#d8d8d8',
        'muted-foreground': 'var(--muted-foreground)',
        overlay: 'hsla(0,0%,40%,.5)',
        lightText: '#333',
        tableGray: '#f7f8f9',
        tableBorder: '#d9d9d9',
        inputError: '#e37c75',
        uired: '#dd6159',
        uigreen: '#32997d',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(1.4) rotate(0deg)' },
          '10%': { transform: 'scale(1.4) rotate(-5deg)' },
          '20%': { transform: 'scale(1.4) rotate(5deg)' },
          '30%': { transform: 'scale(1.4) rotate(-5deg)' },
          '40%': { transform: 'scale(1.4) rotate(5deg)' },
          '50%': { transform: 'scale(1.4) rotate(-5deg)' },
          '60%': { transform: 'scale(1.4) rotate(5deg)' },
          '70%': { transform: 'scale(1.4) rotate(-5deg)' },
          '80%': { transform: 'scale(1.4) rotate(5deg)' },
          '90%': { transform: 'scale(1.4) rotate(-5deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
        'loader-rotate': {
          to: { transform: 'rotate(1turn)' },
        },
        'loader-bounce': {
          to: { transform: 'scale(0)' },
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
        },
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
        'loader-rotate': 'loader-rotate 2s infinite linear',
        'loader-bounce': 'loader-bounce 2s infinite ease-in-out',
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
