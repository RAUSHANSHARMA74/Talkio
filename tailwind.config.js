/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',    // Extra small screens
        'sm': '640px',    // Small screens
        'md': '768px',    // Medium screens (tablets)
        'lg': '1024px',   // Large screens (laptops)
        'xl': '1280px',   // Extra large screens (desktops)
        '2xl': '1536px',  // Extra extra large screens
      },
      colors: {
        'primary': '#101E31',   // Dark blue
        'secondary': '#E14748', // Red
        'accent': '#EBB144',    // Yellow
        'muted': '#3D858F',     // Teal/Muted blue
      },
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(150%)', opacity: '0' },  // Start off-screen to the right
          '100%': { transform: 'translateX(0)', opacity: '1' },   // End at normal position
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-150%)', opacity: '0' }, // Start off-screen to the left
          '100%': { transform: 'translateX(0)', opacity: '1' },    // End at normal position
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 1.2s ease-out', // Right slide-in animation
        'slide-in-left': 'slide-in-left 1.2s ease-out',   // Left slide-in animation
      },
    },
  },
  plugins: [],
}
