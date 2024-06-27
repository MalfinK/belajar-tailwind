// Navbar fixed
window.onscroll = function () {
  // saat window di-scroll
  const header = document.querySelector("header");
  // Cara 1 (Sendiri)
  /* if (window.scrollY > 0) { // jika window di-scroll lebih dari 0
        header.classList.add('navbar-fixed'); // tambahkan class navbar-fixed
    } else { // jika tidak
        header.classList.remove('navbar-fixed'); // hapus class navbar-fixed
    } */

  // Cara 2 (Dari WPU)
  const fixedNav = header.offsetTop; // mendapatkan jarak dari atas ke header
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Untuk bagian hamburger menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

/*  
Note:
Bisa add (menambahkan) class baru, remove (menghapus) class yang sudah ada, dan toggle (menambahkan jika belum ada, menghapus jika sudah ada) class yang sudah ada.
*/
