/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        red: '#D22630',
        'red-dark': '#882827',
        grey: '#54585A',
        'grey-light': '#BABABA',
        'grey-dark': '#2b2e30',
      },
    },
  },
  plugins: [],
};
