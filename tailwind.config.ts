import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#258649",
        secondary: "#f3b544",
        background: "rgb(245, 243, 243)",
        text: {
          light: "#e8e4e4",
          dark: "#2c2c2c",
          gray: "#747272",
        },
      },
      fontFamily: {
        sans: ["Manrope", "Space Grotesk", "sans-serif"],
      },
      keyframes: {
        arrowMove: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        arrowMoveDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        arrowMoveLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        arrowMoveUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'arrowMove': 'arrowMove 3s linear infinite',
        'arrowMoveDown': 'arrowMoveDown 3s linear infinite',
        'arrowMoveLeft': 'arrowMoveLeft 3s linear infinite',
        'arrowMoveUp': 'arrowMoveUp 3s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
