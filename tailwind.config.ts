import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      kanit: ["Kanit", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: "#D2C3AF",
        purple: "#6B6AFF",
        red: "#F4656A",
        "red-100": "#FC545A",
      },
    },
  },
  plugins: [],
} satisfies Config;
