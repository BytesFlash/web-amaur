/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        prish: {
          100: '#E3F2FD',
          200: '#90CAF9',
          300: '#42A5F5',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
