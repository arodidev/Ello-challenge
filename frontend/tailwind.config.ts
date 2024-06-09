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
        // Custom colors
        primary: "#5ACCCC",
        secondary: "#335C6E",
        accent: "#FABD33",
        customColor: "#ff5722",
      },
    },
  },
  plugins: [],
};
export default config;
