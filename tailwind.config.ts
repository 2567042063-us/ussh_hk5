import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // or 'media' or 'class'
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "0",
        lg: "0",
        xl: "0",
      },
    },
    extend: {
      colors: {
        /**
         * need to define a color palette,
         *  - need a variety (5-10) of lighter and darker shades to choose from.
         */
        primary: {
          light: "#f57264",
          DEFAULT: "#f57264", // orange vitaminC
          dark: "#ff9966",
        },
        secondary: "#042045",
        tertiary: "#27b5cf", // blue
        // mint: "#95bfac",
        // hophach: "#d3ad57", //"#fca311",
        // highlight: '#ddd0fe',
      },
      animation: {
        background: "background 2s ease-in-out infinite",
        linear: "backgroundLinear 3s linear infinite",
        slide:
          "backgroundSlide 120s linear infinite alternate-reverse forwards;",
      },
      keyframes: {
        background: {
          "0%, 100%": { backgroundPosition: "left 0% bottom 0%" },
          "50%": { backgroundPosition: "left 200% bottom 0%" },
        },
        backgroundLinear: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        backgroundSlide: {
          "0%": { backgroundPosition: "0 0%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        waviy: {
          "0%, 40%, 100%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
