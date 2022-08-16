/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Baloo 2', 'sans-serif']
      },
      colors: {
        'purple-300': '#7f47f8',
        'purple-500': '#4b2994',

        'yellow-300': '#F1E9C9',
        'yellow-500': '#C47F17',

        'background': '##F3F2F2',
        'label': '##e6e5e5',
        
        'brown-300': '#8D8585',
        'brown-500': '#574f4d',
        'brown-700': '#403937',
        'brown-900': '#272221',
      }
    },
  },
  plugins: [],
}
