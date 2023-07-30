/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-bg': 'url(./assets/bg-hero.svg)',
        'section-1': 'url(./assets/section-1-bg.jpeg)',
      },
      backgroundColor: {
        'glasmophism-bg': 'rgba(255, 255, 255, 0.16);',
      },
      boxShadow: {
        'glasmophism-shadow': '4px 4px 8px 0px rgba(0, 0, 0, 0.12);'
      },
      fontFamily: {
        roboto: 'var(--font-roboto)'
      }
    },
  },
  plugins: [],
}
