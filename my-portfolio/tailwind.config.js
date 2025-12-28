/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Menambahkan animasi custom
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite', // Animasi jalan terus menerus
        'blob': 'blob 7s infinite', // Animasi background gerak-gerak
      },
      // Mendefinisikan gerakan animasinya (Keyframes)
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }, // Bergerak ke kiri sejauh 50% (karena list diduplikat)
        },
        'blob': {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" }
        }
      }
    },
  },
  plugins: [],
}