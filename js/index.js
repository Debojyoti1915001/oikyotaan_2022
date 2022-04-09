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
