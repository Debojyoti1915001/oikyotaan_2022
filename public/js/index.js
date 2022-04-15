// =================== NAVBAR =========================

// Navbar active style add
const navlinks = document.querySelectorAll(".navbar nav a");

navlinks.forEach((navlink) => {
  // Select all navlinks except the brand img
  if (navlink.children.length === 0) {
    // Click listener to all navlinks
    navlink.addEventListener("click", () => {
      // Remove the `active` class from all navlinks
      navlinks.forEach((navlink) => {
        navlink.classList.remove("active");
      });
      // Add `active` class to the clicked navlink
      navlink.classList.add("active");
    });
  }
});

// ====================== SCROLL TO TOP BUTTON ==================

const scrollToTop = document.querySelector("#scrollToTop");

scrollToTop.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// ================= ANCHOR TAG HREF ===========================
const teamPageATag = document.querySelectorAll(
  ".carousal .slider-rotate__item .carousal-modal a.icons"
);
teamPageATag.forEach((aTag) => {
  aTag.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
