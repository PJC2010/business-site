/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  './pages/**/*.{js,jsx}',
	  './components/**/*.{js,jsx}',
	  './app/**/*.{js,jsx}',
	  './src/**/*.{js,jsx}',
	],
	// ... (keep your plugins and other settings)
  theme: {
    extend: {
      colors: {
        'background': '#0A0A0A', // A very dark, near-black
        'foreground': '#EDEDED', // A soft white for body text
        'primary': '#FFFFFF',    // Pure white for headings
        'secondary': '#A1A1A1', // A light grey for secondary text
        'accent': '#00A3FF',    // A vibrant blue for accents and links
        'border': '#272727',    // A subtle border color
        'card': '#141414',      // A slightly lighter background for cards
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Set Inter as the default sans-serif font
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },

	plugins: [require("tailwindcss-animate")],
  }