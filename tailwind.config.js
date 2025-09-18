/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'turquoise': '#12A5B6',
        'sand': '#F4D9B8',
        'deep-ocean': '#023E5A',
        'coral': '#FF6F61'
      },
      spacing: {
        '120': '30rem'
      },
      backgroundImage: {
        'hero-pattern': 'url("https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
      }
    },
  },
  plugins: [],
};