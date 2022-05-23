module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['GeomanistBold', 'sans-serif'],
    },
    extend: {
      colors: {
        'accent-1': '#F6F7F7',
        'accent-2': '#EEEFF7',
        'accent-7': '#883DF2',
        'accent-8': '#B150F2',
        'accent-9': '#D762D9',
        'type-1': '#282140',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },

      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      gridTemplateColumns: {
        works: '55fr 38fr',
      },
      gridAutoRows: {
        '157': '157px',
      },
      gap: {
        row: '50px',
        column: '50px',
      },
    },
  },
  plugins: [],
}
