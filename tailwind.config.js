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
      plusBtn:"#0dd6a6",
      plusTxt:"#fff",
      newMessage:"#030712",
      modalOutBg:"#000000",
      modalHeadBg:"#06d6a0",
      modalCloseIcon:"#c9d2d4",
      modalBg:"#fafafa",
      modalInputBorder:"#808384",
      modalSearchBg:"#e64469",
      modalSearchHoverBg:"#cc3c5c",
      modalCloseTxt:"#999fd6",
      modalSendBtn:"#09d1a7",
      modalSendTxt:"#fff",
      modalContactTxt:"#5e6266",
      modalNameTxt:"#212529",
      channleModalBtnBg:"#f6f6f9",
      channelModalBtnHoverBg:"#d1d1d4",
      channelModalBtnTxt:"#64666a",
      channelModalCloseTxt:"#f16c8c",
      channleModalContactBg:"#f8f8f9",
      channelModalContactBodyBg:"#fff",
      channelModalCheckBoxBg:"#6d75c5"
    },
  },
  plugins: [],
}
