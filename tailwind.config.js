/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        IntegralCF: ['Integral'],
        Satoshi: ['Satoshi', 'sans-serif'],
      },
      backgroundImage: {

        'banner-texture': "url('/assets/image/banner.png')",
      }

    },
  },
  plugins: [],
}