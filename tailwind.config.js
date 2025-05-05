// Tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transform: ['group-hover'], // Enable group-hover for transform
    },
  },
  plugins: [],
};