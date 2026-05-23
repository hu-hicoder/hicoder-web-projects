import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        first: 'hsl(187, 60%, 51%)',
        'first-alt': 'hsl(187, 51%, 43%)',
        'first-lighter': 'hsl(187, 92%, 85%)',
        title: 'hsl(187, 8%, 15%)',
        'text-main': 'hsl(187, 8%, 35%)',
        'text-light': 'hsl(187, 8%, 65%)',
        input: 'hsl(187, 70%, 93%)',
        body: 'hsl(187, 60%, 98%)',
        border: 'hsl(187, 9%, 82%)',
        container: '#ffffff',
      },
      fontFamily: {
        sans: [
          'var(--font-lato)',
          'var(--font-noto)',
          'Hiragino Sans',
          'ヒラギノ角ゴシック',
          'YuGothic',
          'Yu Gothic',
          'メイリオ',
          'Meiryo',
          'sans-serif',
        ],
      },
      fontSize: {
        sm: '0.75rem',
        md: '0.938rem',
        lg: '1.25rem',
        xl: '1.75rem',
      },
      maxWidth: {
        container: '992px',
      },
    },
  },
  plugins: [],
};

export default config;
