const iconNavbar = document.getElementById("fa-bars");
const navbar_links = document.getElementById("navbar_links");
const main = document.getElementById("main");

const classNavbarActive = "activeMenu";
const classMainActive = "activeMain";

iconNavbar.addEventListener('click', () => {
    navbar_links.classList.toggle(classNavbarActive);
    main.classList.toggle(classMainActive);
    if(navbar_links.classList.contains(classNavbarActive)) iconNavbar.classList.replace("fa-bars", "fa-xmark");
    else iconNavbar.classList.replace("fa-xmark", "fa-bars");
});

window.addEventListener("scroll", function() {
    if (scrollY >= 70) {
        navbar_links.classList.remove(classNavbarActive);
        main.classList.remove(classMainActive);
        iconNavbar.classList.replace("fa-xmark", "fa-bars");
    }
});