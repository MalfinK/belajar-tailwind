/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#2dd4bf",
        secondary: "#64748b",
        dark: "#0f766e", // aturan pake text-slate-900 tapi ini pake text-teal-700
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

/*  
Note:
Kalau extend kan menambahkan dari fitur yang sudah dimiliki oleh tailwindcss, tapi kalau langsung di dalam theme, maka akan menggantikan fitur yang sudah ada (menimpa) di tailwindcss tersebut.
*/
