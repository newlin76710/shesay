import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blush: '#fff7fb',
        rose: '#ff5c8a',
        plum: '#5b2145',
        sand: '#f7efe8',
        gold: '#f5b971',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(91, 33, 69, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
