/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize:{
      xxs: '0.5rem',
      xs:'0.75rem',
      sm: '0.875rem',
      lg: '1.125rem',
      xl: '1.25rem',
    }
  },
  plugins: [require("daisyui")],
}

