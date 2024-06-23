/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    // Extend itu perpanjangan dari class yang sudah ada nah kalau ga pakai extend maka class yang sudah ada tidak akan berfungsi
    extend: {
      spacing: {
        13 : '3.25rem',
      },
      fontFamily: {
        inter : ['Inter', 'sans-serif'],
      },
      colors: {
        wpu : '#bada55',
        kopi : '#c0ffee', // contoh aja kan harusnya ini warnya sesuai namanya (tapi kalau beda yaudah namanya juga belajar plus buat contoh)
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'goyang': 'goyang 1s ease-in-out infinite',
      },
      keyframes: {
        goyang: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    }
  },
  plugins: [],
}

