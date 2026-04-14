
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14112e",    
        secondary: "#875dfa",  
        highlight: "#ffffff",  // Is line ko check karein
        subText: "#c6bcf1",    
        cardBg: "#1e1b4b",    
        neon: "#a855f7",       
      },
    },
  },
  plugins: [],
}