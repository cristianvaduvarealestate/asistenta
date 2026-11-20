import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
        "4/5": "4 / 5",
        "3/4": "3 / 4",
        "16/10": "16 / 10",
        "21/9": "21 / 9",
      },
      colors: {
        // --- APPLE-INSPIRED NEUTRAL PALETTE ---
        apple: {
          white: "#FFFFFF",
          bg: "#F5F5F7",
          subtle: "#E8E8ED",
          border: "#D2D2D7",
          grey: "#6E6E73", // Updated to Apple accessible secondary (#6E6E73) for WCAG AA 4.88:1 on white
          dark: "#424245",
          ink: "#1D1D1F",
          black: "#000000",
        },

        // System Compatibility Mapping to Apple Neutrals
        midnight: {
          DEFAULT: "#1D1D1F",
          dark: "#000000",
          light: "#424245",
        },
        pearl: {
          DEFAULT: "#FFFFFF",
          light: "#FFFFFF",
          dark: "#F5F5F7",
        },
        sand: {
          DEFAULT: "#F5F5F7",
          light: "#FFFFFF",
          dark: "#E8E8ED",
        },
        champagne: {
          DEFAULT: "#1D1D1F",
          light: "#424245",
          dark: "#000000",
          subtle: "rgba(0, 0, 0, 0.05)",
        },
        "royal-navy": {
          DEFAULT: "#1D1D1F",
          dark: "#000000",
          light: "#424245",
        },
        "deep-royal-blue": {
          DEFAULT: "#424245",
          dark: "#1D1D1F",
          light: "#86868B",
        },
        emerald: {
          DEFAULT: "#1D1D1F",
          dark: "#000000",
          light: "#424245",
        },
        "deep-teal": {
          DEFAULT: "#1D1D1F",
          dark: "#000000",
          light: "#424245",
        },
        "midnight-plum": {
          DEFAULT: "#1D1D1F",
          dark: "#000000",
          light: "#424245",
        },
        "electric-orchid": {
          DEFAULT: "#1D1D1F",
          dark: "#000000",
          light: "#424245",
        },
        "vivid-jade": {
          DEFAULT: "#1D1D1F",
          dark: "#000000",
          light: "#424245",
        },
        "acid-lime": {
          DEFAULT: "#1D1D1F",
          dark: "#000000",
          light: "#424245",
        },
        "coral-red": {
          DEFAULT: "#1D1D1F",
          dark: "#000000",
          light: "#424245",
        },
        "soft-porcelain": {
          DEFAULT: "#FFFFFF",
          dark: "#F5F5F7",
          light: "#FFFFFF",
        },
        "mineral-grey": {
          DEFAULT: "#E8E8ED",
          dark: "#D2D2D7",
          light: "#F5F5F7",
        },
        "ink-black": {
          DEFAULT: "#1D1D1F",
          dark: "#000000",
          light: "#424245",
        },
        "lavender-mist": {
          DEFAULT: "#F5F5F7",
          dark: "#E8E8ED",
          light: "#FFFFFF",
        },
        "deep-forest": {
          DEFAULT: "#1D1D1F",
          dark: "#000000",
          light: "#424245",
        },

        surface: {
          DEFAULT: "#FFFFFF",
          raised: "#F5F5F7",
          border: "#D2D2D7",
        },
        ink: {
          DEFAULT: "#1D1D1F",
          secondary: "#86868B",
          muted: "#86868B",
          light: "#FFFFFF",
        },
        brand: {
          DEFAULT: "#1D1D1F",
          blue: "#1D1D1F",
          dark: "#000000",
          soft: "rgba(0, 0, 0, 0.04)",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        editorial: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"SF Mono"',
          "ui-monospace",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        apple: "0 2px 8px rgba(0, 0, 0, 0.04), 0 12px 32px rgba(0, 0, 0, 0.08)",
        "apple-sm": "0 1px 3px rgba(0, 0, 0, 0.05)",
        "apple-lg": "0 20px 40px rgba(0, 0, 0, 0.12)",
        subtle: "0 1px 2px rgba(0, 0, 0, 0.04)",
        focus: "0 0 0 3px rgba(0, 113, 227, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
