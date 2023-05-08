/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'mi-gama': {
          '50': '#5c0a01',
          '100': '#f2f2f2',
          '200': '#eeeeee',
          '300': '#c41d1b',
          '400': '#991716',
          '500': '#999999',
          '600': '#808080',
          '700': '#666666',
          '800': '#4d4d4d',
          '900': '#333333'
        },
      },
    }
    
    
  },
  plugins: [],
}

