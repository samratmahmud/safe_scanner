import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          "300": "#D7D9DC",
          "400": "rgba(221, 221, 221, 0.15)",
          "500": "rgba(151, 153, 157, 0.50)",
        },
        gray: {
          "50": "#ffffff",
          "400": "rgba(0, 171, 85, 0.15)",
          "900": "2A2A2D",
        },
        neutral: {"400": "#97999D", "700": "#3C4043", "800": "#202124"},
        stone: {"700": "rgba(42, 42, 45, 0.50)", "900": "#131413"},
        emerald: {"400": "#13FF75", "900": "rgba(167, 255, 194, 0.05)"},
      },
      backgroundImage: {},
    },
    fontSize: {
      xs: ["11px", {lineHeight: "1.55em", letterSpacing: "0.1em"}],
      sm: ["12px", {lineHeight: "1.33em", letterSpacing: "0.021em"}],
      md: ["13px", {lineHeight: "1.54em"}],
      base: ["16px", {lineHeight: "1.19em"}],
      lg: ["17px", {lineHeight: "1.53em"}],
      xl: ["24px", {lineHeight: "1em"}],
      "2xl": ["28px", {lineHeight: "1.11em"}],
      "3xl": ["48px", {lineHeight: "1.1em"}],
    },
    shadows: {
      sm: "142px 142px 142px",
      md: "0px 4px 6px rgba(0, 0, 0, 0.20)",
      lg: "32px 32px 32px",
      xl: "0px -1px 0px rgba(0, 0, 0, 0.12)",
    },
    fontFamily: {
      roboto: ["'Roboto'", ...fontFamily.sans],
      "dm-sans": ["'DM Sans'", ...fontFamily.sans],
      "sf-pro-text": ["'SF Pro Text'", ...fontFamily.sans],
      "dm-mono": ["'DM Mono'", ...fontFamily.sans],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1020px",
      xl: "1300px",
    },
  },
  plugins: [],
};
export default config;
