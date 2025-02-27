import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: "#2F80ED",
        secondary: "#487FC8",
        tertiary: "#5F92C9",
        primaryTxt: "#2D2D2D",
        secondaryTxt: "#4F4F4F",
        tertiaryTxt: "#5A5A5A",
        primaryBG: "#F9FAFB",
        secondaryBG: "#F2F2F2",
        tertiaryBG: "#EAEAEA",
        success: "#4CAF50",
        danger: "#E63946",
        darkPrimary: "#3B7BE6",
        darkSecondary: "#486EA0",
        darkTertiary: "#5F7EA8",
        darkPrimaryTxt: "#D4D4D4",
        darkSecondaryTxt: "#B0B0B0",
        darkTertiaryTxt: "#B5B5B5",
        darkPrimaryBG: "#161B22",
        darkSecondaryBG: "#1C1C1C",
        darkTertiaryBG: "#242424",
        darkSuccess: "#66BB6A",
        darkDanger: "#FF5C5C",
      },
    },
  },
  plugins: [],
} satisfies Config;
