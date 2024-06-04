/* eslint-disable global-require */

/** @type {import('tailwindcss').Config} */
import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: {min: '320px', max: '859px'},
        tablet: {min: '860px', max: '1369px'},
        desktop: {min: '1370px'},
      },
      minWidth: {
        15: '3.75rem',
      },
      spacing: {
        4.5: '1.125rem',
        8.5: '2.125rem',
        9.5: '2.375rem',
        11.5: '2.875rem',
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        19: '4.75rem',
        22.5: '5.625rem',
        23: '5.75rem',
        25: '6.25rem',
        27: '6.75rem',
        29: '7.25rem',
        30: '7.5rem',
        33: '8.25rem',
        35: '8.75rem',
        45: '11.25rem',
        50: '12.5rem',
        57: '14.25rem',
        69: '17.25rem',
        43: '10.75rem',
        77: '19.25rem',
        84: '21rem',
        91.5: '22.875rem',
        95: '23.75rem',
        100: '25rem',
        101: '25.25rem',
        110: '27.5rem',
        123.5: '30.875rem',
        136: '34rem',
        155: '38.75rem',
        162: '40.5rem',
        196.5: '49.125rem',
        205: '51.25rem',
      },
      fontFamily: {
        poppins: ['"Poppins"'],
        sans: ['"Nunito Sans"'],
      },
      fontSize: {
        '3xl': ['56px', {lineHeight: '55px'}],
        '2xl': ['34px', {lineHeight: '40px'}],
        xl: ['24px', {lineHeight: '32px', letterSpacing: '0em'}],
        l: ['17px', {lineHeight: '60px'}],
        m: ['15px', {lineHeight: '26px', letterSpacing: '0em'}],
        s: ['12px', {lineHeight: '16px', letterSpacing: '0em'}],
        xs: ['8px', {lineHeight: '12px', letterSpacing: '0em'}],
      },

      colors: {
        main: {
          100: '#FFFFFF',
          300: '#F5F5F8',
          900: '#353844',
        },
        secondary: {
          100: '#D2AD81',
        },
        primary: {
          300: '#506BCA',
          700: '#1B264F',
        },
      },

      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
};

export default config;
