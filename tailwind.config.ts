import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1C1C1C",
        gray_primary: "#8A8A8A",
        gray_secondary: "#E9E9E9",
        blue_category: "#AACAFA",
        orange_category: "#F9DBA1",
        green_category: "#BBFAB5",
        red_alert: "#FF6B6B", 
            },
      fontFamily: {
        Anaheim: ["Anaheim", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      spacing: {
        "72": "18rem", 
      },
    },
  },
  plugins: [],
} satisfies Config;
