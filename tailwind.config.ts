import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        dark: {
          primary: "#dc2626",
          "primary-focus": "#8F1818",
          "primary-content": "#ffffff",

          secondary: "#facc15",
          "secondary-focus": "#DBB725",
          "secondary-content": "#0B0F1A",

          accent: "#1e40af",
          "accent-focus": "#18348F",
          "accent-content": "#ffffff",

          neutral: "#2a2e37",
          "neutral-focus": "#16181d",
          "neutral-content": "#ffffff",

          "base-100": "#0B0F1A",
          "base-200": "#070b16",
          "base-300": "#000000",
          "base-content": "#ebecf0",

          info: "#22d3ee",
          success: "#4ade80",
          warning: "#e1d460",
          error: "#ff6b6b",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
};
export default config;
