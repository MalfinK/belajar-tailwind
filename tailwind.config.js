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
  - File ini juga merepresentasikan jika kita sedang proses development tapi kita lagi coba2 classnya atau style nya misal antara text-blue-600 dengan text-blue-400, kan itu nanti akan ada 2 style di style.css nya kan. Padahal yang dipakai satu misalnya yang 600. Nah ada 2 cara ngilanginnya yaitu dengan matiin si watch nya dan yang kedua dengan save file ini aja (cara 2 lebih simple).
  - (Ini note untuk package.json => ditaro di sini notenya karena mau tambahin di file nya ga bisa karena nanti error) Nah kalau script "dev": "npx tailwindcss -i ./src/css/input.css -o ./public/css/style.css --watch" -> buatan sendiri biar nulis langsung npm run dev aja.
*/