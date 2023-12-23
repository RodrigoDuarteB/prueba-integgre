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
        primary: '#baa165',
        primaryLight: '#716f53',
        primaryDark: '#164731',
        secondary: '#5e91c4',
        secondaryLight: '#5a777a',
        secondaryDark: '#e55655',
      }
    },
  },
  plugins: [],
}
