import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        med: {
          50: '#f6f7fa',
          100: '#e8ebf1',
          900: '#12203d',
        },
      },
    },
  },
  plugins: [],
};

export default config;
