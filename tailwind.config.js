/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.stories.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#4AB580', //giclee-400
      base: '#303633', //stone-900
      black: '#000000',
      white: '#FFFFFF',
      discord: '#5865F2',

      giclee: {
        50: '#E5F4EC',
        100: '#C0E4D0',
        200: '#98D2B3',
        300: '#6CC295',
        400: '#4AB580',
        500: '#1FA86A',
        600: '#189960',
        700: '#0F8753',
        800: '#0A7647',
        900: '#005732',
      },
      ruby: {
        50: '#F9ECEF',
        100: '#F1D0D6',
        200: '#DAA0A4',
        300: '#CA7E82',
        400: '#D36567',
        500: '#D75A55',
        600: '#C75251',
        700: '#B54A4A',
        800: '#A74544',
        900: '#953F3C',
      },
      amber: {
        50: '#FDFCEA',
        100: '#FAF6CB',
        200: '#F7F1A9',
        300: '#F3EB8A',
        400: '#EFE672',
        500: '#ECE15D',
        600: '#DDD057',
        700: '#C9BA50',
        800: '#B5A34A',
        900: '#937E40',
      },
      cobalt: {
        50: '#E5F6F9',
        100: '#BDE8F1',
        200: '#96D9E8',
        300: '#78C9E0',
        400: '#67BDDA',
        500: '#5CB2D6',
        600: '#54A4C8',
        700: '#4A91B5',
        800: '#4580A1',
        900: '#38617E',
      },
      emerald: {
        50: '#EFF8EA',
        100: '#D8EECA',
        200: '#BEE2A9',
        300: '#A4D786',
        400: '#8FCE6C',
        500: '#7CC552',
        600: '#6EB54A',
        700: '#5AA140',
        800: '#488D36',
        900: '#266A25',
      },
      stone: {
        50: '#EFEFEF',
        100: '#D7D9D8',
        200: '#BAC1BD',
        300: '#9CA8A1',
        400: '#85958D',
        500: '#6F8379',
        600: '#62736A',
        700: '#525F58',
        800: '#424B47',
        900: '#303633',
      },
    },
    extend: {
      width: {
        '90vw': '90vw',
      },
    },
  },
  plugins: [],
}
