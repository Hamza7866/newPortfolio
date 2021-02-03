AOS.init();
let { body } = document;
const backTop = document.querySelector(".back-top");
const background1 = document.querySelector(".background-1");
const background2 = document.querySelector(".background-2");
const hambuger = document.querySelector(".hambuger");
const navLink = document.querySelector(".nav-link");
const navbar = document.querySelector(".navbar");

hambuger.addEventListener("click", () => {
  navLink.classList.toggle("active");
});

background2.addEventListener("click", () => {
  body.style.background = "#23263a";
});

background1.addEventListener("click", () => {
  body.style.background = "#324247";
});

const backToTop = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
};

window.addEventListener("scroll", backToTop);
backTop.addEventListener("click", (e) => {
  navbar.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", backToTop);
