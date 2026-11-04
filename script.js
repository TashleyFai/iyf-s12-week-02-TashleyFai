// MOBILE NAVIGATION MENU

const menuIcon = document.querySelector(".menu-icon");
const siteNav = document.querySelector(".site-nav");

if (menuIcon && siteNav) {
    menuIcon.addEventListener("click", function () {
        siteNav.classList.toggle("active");

        const isOpen = siteNav.classList.contains("active");
        menuIcon.setAttribute("aria-expanded", isOpen);
    });
}
