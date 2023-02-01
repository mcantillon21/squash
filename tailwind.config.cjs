const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        'spin': 'spinlogo 4s ease-in-out',
        'waving-hand': 'wave 2s linear infinite',
        'fadeIn': 'fadeIn 2s ease-in forwards'
      },
      keyframes: {
        spinlogo: {
            '0%': {transform: 'rotate3d(0, 1, 0, 0deg)'},
            '50%': {transform: 'rotate3d(0, 1, 0, 180deg)'},
            '100%': {transform: 'rotate3d(0, 1, 0, 360deg)'},
            },
            wave: {
              '0%': { transform: 'rotate(0.0deg)' },
              '10%': { transform: 'rotate(14deg)' },
              '20%': { transform: 'rotate(-8deg)' },
              '30%': { transform: 'rotate(14deg)' },
              '40%': { transform: 'rotate(-4deg)' },
              '50%': { transform: 'rotate(10.0deg)' },
              '60%': { transform: 'rotate(0.0deg)' },
              '100%': { transform: 'rotate(0.0deg)' },
            },
            fadeIn: {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 }
            }
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [require("tailwindcss-fluid-type")],
};
