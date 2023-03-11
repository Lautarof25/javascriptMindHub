// Menu toggle
const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");
const navMenuAll = document.querySelectorAll(".nav-menu");
const img_detail = document.querySelector(".img_detail");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    img_detail.style.zIndex = "-1";
    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "abrir menú");
        img_detail.style.zIndex = "0";
    }
});

navMenuAll.forEach(function (element) {
    element.addEventListener("click", () => {
        navMenu.classList.remove("nav-menu_visible");
    })
});
