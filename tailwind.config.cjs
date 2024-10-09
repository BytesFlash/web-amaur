/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        prish: {
          50: "#f8dfdb",
          100: "#fdb9ae",
          200: "#f15963",
          300: "#55241d",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
