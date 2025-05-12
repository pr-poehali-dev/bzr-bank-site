import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bzr-deep-blue": "#0E3B7E",
        "bzr-blue": "#34B7EB",
        "bzr-light-blue": "#D1F1FF",
        "bzr-navy": "#0A2A5E",
        "bzr-gray": "#F7F9FC",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        ibmplex: ["IBM Plex Sans", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
