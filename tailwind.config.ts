import type { Config } from "tailwindcss";

export default {
  content: ["src/**/*.{jsx,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
