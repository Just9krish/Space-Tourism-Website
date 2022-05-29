const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector(".primary-navigation");

mobileNavToggle.addEventListener("click", () => {
  const visibility = primaryNavigation.getAttribute("data-is-visible");

  if (visibility === "false") {
    primaryNavigation.setAttribute("data-is-visible", true);
    mobileNavToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNavigation.setAttribute("data-is-visible", false);
    mobileNavToggle.setAttribute("aria-expanded", false);
  }
})
