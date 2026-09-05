/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#F8FAFC",
          card: "#FFFFFF",
          subtle: "#F1F5F9",
          border: "#E2E8F0",
        },
        brand: {
          blue: "#2563EB",
          indigo: "#4F46E5",
          cyan: "#0284C7",
          accent: "#2563EB",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 0 0 1px rgba(15, 23, 42, 0.03)",
        card: "0 10px 30px -5px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(15, 23, 42, 0.04)",
        glow: "0 10px 40px -10px rgba(37, 99, 235, 0.25)",
        "glow-cyan": "0 10px 35px -5px rgba(2, 132, 199, 0.3)",
        "glow-blue": "0 10px 35px -5px rgba(37, 99, 235, 0.3)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
        "dots-pattern": "radial-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
