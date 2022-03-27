const navbarMobile = document.querySelector("span.navbar-mobile");
const navbar = document.querySelector(".navbar");

navbarMobile.addEventListener("click", () => {
  navbar.classList.toggle("navbar-show");
});
