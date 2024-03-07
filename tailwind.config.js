/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

// content: ['./public/**/*.{html,js}', './index.html'],
/* 
  Note 
  - Arti dari baris yang dikomen adalah masuk ke root -> public -> apapun folder didalamnya -> apapun file yang ada di dalamnya yang berekstensi .html atau .js. Koma (,) disini berguna untuk melihat atau menambahkan file yang lainnya. Kenapa gaperlu ditambahkan index.html nya karena file tersebut sudah berada di dalam folder public
*/