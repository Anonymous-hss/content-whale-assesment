/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // (temporary) prove the config is loaded even if extend failed:
  safelist: ["text-ink-900", "bg-brand-500", "shadow-card"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f7f4ff",
          100: "#eee9ff",
          200: "#d9ccff",
          300: "#bea3ff",
          400: "#9e76ff",
          500: "#7c4dff",
          600: "#6439e6",
          700: "#512fc0",
          800: "#422999",
          900: "#2a1b66",
        },
        accent: { 400: "#ffb347", 500: "#ff9a44", 600: "#ff7a1a" },
        ink: {
          900: "#0e1116",
          700: "#2c3340",
          500: "#5b6576",
          300: "#99a2b0",
          200: "#c9ced7",
          100: "#eef1f5",
        },
      },
      boxShadow: {
        card: "0 10px 30px rgba(19,18,66,.08)",
        head: "0 6px 20px rgba(19,18,66,.06)",
      },
      maxWidth: { container: "1200px" },
      borderRadius: { xl: "0.75rem", "2xl": "1rem" },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
    },
  },
  plugins: [],
};
