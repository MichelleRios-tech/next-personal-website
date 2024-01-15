/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    colors: {
      'peach-fuzz': {
        '50': '#FFF4ED',
        '100': '#FFE2D1',
        '200': '#FFD0B4',
        '300': '#FFBE98',
        '400': '#E49B78',
        '500': '#CA7A5B',
        '600': '#AF5C42',
        '700': '#94412D',
        '800': '#792A1C',
        '900': '#5F180F',
        '950': '#440A06',
      },
      'chaos-black': {
        '50': '#F7F7F7',
        '100': '#EFEFEF',
        '200': '#D7D7D7',
        '300': '#BFBFBF',
        '400': '#939393',
        '500': '#676767',
        '600': '#5D5D5D',
        '700': '#404040',
        '800': '#303030',
        '900': '#202020',
        '950': '#101010',
      },
    },
    extend: {},
  },
  plugins: [],
}
