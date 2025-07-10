/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'se': '415px',
      'md': '768px',
      'mil': '960px',
      'lg': '1024px',
      'xl': '1281px',
      'xxl': '1470px',
       '3xl': '1820px',
    },
    extend: {},
  },
  plugins: [],
}

