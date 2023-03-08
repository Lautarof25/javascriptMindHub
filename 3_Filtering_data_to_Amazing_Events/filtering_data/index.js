// Menu toggle
const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "abrir menú");
    }
});

document.querySelectorAll('.nav-menu').forEach(function (element) {
    element.addEventListener("click", () => {
        navMenu.classList.remove("nav-menu_visible");
    })
});
