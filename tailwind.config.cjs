/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "simplegram-blue": "#3390ec",
        "simplegram-blue-dark": "#2086ea",
        "simplegram-green-light": "#eeffde",
        "simplegram-green": "#4fae4e",
      },
      zIndex: {
        '9999': '9999',
        '9998': '9998',
        '9997': '9997',
      }
    },
  },
  plugins: [],
};
