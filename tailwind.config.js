/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '22.5rem',
      md: '45rem',
      xl: '74rem',
    },
    colors: {
      "primary": "var(--clr-primary)",
      "neutral-800": "var(--clr-neutral-800)",
      "neutral-750": "var(--clr-neutral-750)",
      "neutral-500": "var(--clr-neutral-500)",
      "neutral-300": "var(--clr-neutral-300)",
      "neutral-50": "var(--clr-neutral-50)",
      "danger": "var(--clr-danger)",
      "transparent": "transparent"
    },
    extend: {
      boxShadow: {
        "card-xl": "0px 75px 100px -50px rgba(56, 66, 85, 0.503223)"
      }
    },
  },
  plugins: [],
}
