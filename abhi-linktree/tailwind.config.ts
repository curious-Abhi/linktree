import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080A1A",
        violet: { glow: "#7C5CFF" },
        cyan: { glow: "#22D3EE" },
        rose: { glow: "#FF5CA8" },
        mist: "#E8EAFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        spinSlow: { to: { transform: "rotate(360deg)" } },
        floatA: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(40px,-60px) scale(1.15)" },
        },
        floatB: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-50px,40px) scale(1.1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        blink: { "50%": { opacity: "0" } },
      },
      animation: {
        spinSlow: "spinSlow 6s linear infinite",
        floatA: "floatA 16s ease-in-out infinite",
        floatB: "floatB 20s ease-in-out infinite",
        shimmer: "shimmer 5s linear infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
