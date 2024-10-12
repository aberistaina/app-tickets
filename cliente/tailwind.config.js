/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customColor1: "#4A90E2",
        customColor2: "#A8E2A0",
        customColor3: "#FF6B6B",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, rgba(74, 144, 226, 1) 0%, rgba(168, 226, 160, 1) 61%, rgba(255, 107, 107, 1) 100%)",
        "custom-gradient-home": "linear-gradient(128deg, rgba(74, 144, 226, 1) 59%, rgba(168, 226, 160, 1) 82%)"
      },
      animation: {
        'gradient-move': 'gradientMove 6s ease infinite',
      },
      backgroundSize: {
        '300%': '300%',
      },
      keyframes: {
        gradientMove: {
         '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '75%': { backgroundPosition: '50% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      }
    }
  },
  plugins: [],
}
