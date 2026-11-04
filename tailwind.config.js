/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: { DEFAULT: '#9CC7A1', light: '#EEF5EE', dark: '#7FAF86' },
        leaf: '#6B8F3F',
        bronze: '#8A5A1F',
        ink: '#3F3D3D',
        body: '#585656',
        mist: '#F4F5F3',
      },
      fontFamily: {
        display: ['Marcellus', 'Georgia', 'serif'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1170px' },
    },
  },
  plugins: [],
}
