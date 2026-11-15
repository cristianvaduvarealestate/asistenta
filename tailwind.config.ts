import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#08090B",
        surface: {
          DEFAULT: "#101216",
          raised: "#171A20",
          border: "#22262D",
        },
        ink: {
          DEFAULT: "#F5F6F7",
          secondary: "#C7CBD1",
          muted: "#9299A3",
        },
        muted: "#9299A3",
        line: "#22262D",
        wash: "#101216",
        brand: {
          DEFAULT: "#C92B35",
          blue: "#4779B8",
          dark: "#8C1820",
          soft: "rgba(201, 43, 53, 0.12)",
        },
        luxury: {
          crimson: "#C92B35",
          blue: "#4779B8",
          silver: "#C7CBD1",
          gold: "#D4AF37",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.8)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.6)",
        "glow-blue": "0 0 40px -10px rgba(71, 121, 184, 0.25)",
        "glow-crimson": "0 0 40px -10px rgba(201, 43, 53, 0.2)",
        focus: "0 0 0 2px #4779B8, 0 0 0 4px rgba(71, 121, 184, 0.2)",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at 50% 0%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
