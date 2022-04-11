const hamburgerMenu = document.querySelector(
  ".navbar-mobile .navbar-mobile-hamburger"
);

const navbarModal = document.querySelector(
  ".navbar-mobile .navbar-mobile-modal"
);

const crossIcon = document.querySelector(
  ".navbar-mobile .navbar-mobile-modal .navbar-mobile-cross"
);

hamburgerMenu.addEventListener("click", () => {
  navbarModal.classList.add("showModal");
});

crossIcon.addEventListener("click", () => {
  navbarModal.classList.remove("showModal");
});
