
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bzr-deep-blue': '#0E3B7E',
        'bzr-blue': '#34B7EB',
        'bzr-light-blue': '#D1F1FF',
        'bzr-gray': '#F3F3F3',
        'bzr-navy': '#001F4D'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'ibmplex': ['"IBM Plex Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right, #0E3B7E, #34B7EB)",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
