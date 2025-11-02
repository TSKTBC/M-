import type {Config} from "tailwindcss"
import typography from "@tailwindcss/typography"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f8ff",
          100: "#e8f0ff",
          200: "#c7d6ff",
          300: "#a5bdff",
          400: "#7393ff",
          500: "#456dff",
          600: "#2f55e6",
          700: "#2644b4",
          800: "#1d3382",
          900: "#142352",
        },
      },
      boxShadow: {
        card: "0 12px 30px -15px rgba(15, 23, 42, 0.25)",
      },
    },
  },
  plugins: [typography],
}

export default config
