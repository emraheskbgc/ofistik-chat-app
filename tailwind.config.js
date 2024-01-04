/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors:{
      messageBg:"#6d75c5",
      messageBodyBg:"#f6f6f9",
      inputbg:"#fff",
      favTxt:"#919397",
      personBg:"#e9e9f3",
      personMesTxt:"#7b7e82",
      dotBg:"#06d6a0",
      messageCountBg:"#eaccdb",
      messageCountTxt:"#ed7b9a",
    },
  },
  plugins: [],
}
