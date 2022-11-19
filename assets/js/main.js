// Navbar onscroll
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};
// Navbar toggler
const navMenu = document.querySelector(".menu");
navToggle = document.querySelector(".menu-btn");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
// close menu when navbarlink is clicked
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
  const navMenu = document.querySelector(".menu");
  navMenu.classList.remove("active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
// product colors
var pic = document.querySelector("#main-shoe");
var cyan = document.querySelector(".cyan");
var red = document.querySelector(".red");
var green = document.querySelector(".green");
var blue = document.querySelector(".blue");
var pink = document.querySelector(".pink");
var purple = document.querySelector(".purple");
const colors = document.querySelectorAll(".color");
var navbar = document.querySelector(".navbar");
//info color
var info = [
  {
    src: "./assets/image/products/blue.png",
  },
  {
    src: "./assets/image/products/green.png",
  },
  {
    src: "./assets/image/products/red.png",
  },
  {
    src: "./assets/image/products/pink.png",
  },
  {
    src: "./assets/image/products/cyan.png",
  },
  {
    src: "./assets/image/products/purple.png",
  },
];

//change color
blue.addEventListener("click", function () {
  pic.src = info[0].src;
});
green.addEventListener("click", function () {
  pic.src = info[1].src;
});
red.addEventListener("click", function () {
  pic.src = info[2].src;
});
pink.addEventListener("click", function () {
  pic.src = info[3].src;
});
cyan.addEventListener("click", function () {
  pic.src = info[4].src;
});
purple.addEventListener("click", function () {
  pic.src = info[5].src;
});

//active color
function color() {
  colors.forEach((c) => c.classList.remove("active"));
  this.classList.add("active");
}

colors.forEach((c) => c.addEventListener("click", color));
