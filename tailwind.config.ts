import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "main": "#101C3B",
        "text-primary": "#DEE5EF",
        "text-secondary": "#8093B9",
        "text-third": "#5EEAD4"
      },
      textColor: {
        'primary': '#DEE5EF',
        'secondary': '#8093B9',
        'third': '#5EEAD4'
      },
      borderColor: {
        'third': '#5EEAD4'
      },
    },
  },
  plugins: [],
};
export default config;
