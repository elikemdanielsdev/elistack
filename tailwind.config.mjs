/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "inter-variable": ["Inter Variable", "sans-serif"],
      },
      fontSize: {
        "display-1": "clamp(2.5rem, 1.5rem + 5vw, 3.5rem)",
        "display-2": "clamp(2rem, 1.5rem + 3vw, 3rem)",
        "display-3": "clamp(1.5rem, 1.5rem + 2vw, 2.5rem)",
        "display-4": "clamp(1.25rem, 1.5rem + 1vw, 2rem)",
        "display-5": "clamp(1.125rem, 1.5rem + 0.5vw, 1.75rem)",
        "display-6": "clamp(1rem, 1.5rem + 0.5vw, 1.5rem)",
      },
      screens: {
        1400: "1400px",
        920: "920px",
        640: "640px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
