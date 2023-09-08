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
        'last-section': '(./assets/bg-last-section.svg)',
        'section-1': 'url(./assets/section-1-bg.jpeg)',
      },
      backgroundColor: {
        'glasmophism-bg': 'rgba(255, 255, 255, 0.16);',
      },
      boxShadow: {
        'glasmophism-shadow': '4px 4px 8px 0px rgba(0, 0, 0, 0.12);'
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        inter: ['var(--font-inter)']

      }
    },
    keyframes: {
      overlayShow: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      contentShow: {
        from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
        to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
      },
    },
    animation: {
      overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
    },
  },
  plugins: [],
}
