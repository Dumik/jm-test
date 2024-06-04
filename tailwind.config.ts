/* eslint-disable global-require */

/** @type {import('tailwindcss').Config} */
import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: {min: '320px', max: '743px'},
        tablet: {min: '744px', max: '1279px'},
        desktop: {min: '1280px'},
      },
      minWidth: {
        15: '3.75rem',
      },
      spacing: {
        '4.5': '1.125rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
        '11.5': '2.875rem',
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        19: '4.75rem',
        '22.5': '5.625rem',
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
        '91.5': '22.875rem',
        95: '23.75rem',
        100: '25rem',
        101: '25.25rem',
        110: '27.5rem',
        '123.5': '30.875rem',
        136: '34rem',
        155: '38.75rem',
        162: '40.5rem',
        '196.5': '49.125rem',
        205: '51.25rem',
      },
      borderRadius: {
        '20px': '20px',
        '30px': '30px',
      },
      borderWidth: {
        '1/2': '0.5px',
        '2/3': '1.5px',
      },
      fontFamily: {
        suisse: ['Suisse Intl', 'sans-serif'],
      },
      fontSize: {
        '2xl': ['34px', {lineHeight: '40px', letterSpacing: '-0.02em'}],
        xl: ['24px', {lineHeight: '28px', letterSpacing: '-0.01em'}],
        l: ['20px', {lineHeight: '24px', letterSpacing: '-0.01em'}],
        m: ['15px', {lineHeight: '24px', letterSpacing: '-0.01em'}],
        s: ['12px', {lineHeight: '16px', letterSpacing: '0em'}],
        xs: ['8px', {lineHeight: '12px', letterSpacing: '0em'}],
      },
      
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
      },
     
    },
  },
};
export default config;
