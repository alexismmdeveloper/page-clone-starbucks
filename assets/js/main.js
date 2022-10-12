// CONST NAVBAR
const iconNavbar = document.getElementById("fa-bars");
const navbar_links = document.getElementById("navbar_links");
const main = document.getElementById("main");

const classNavbarActive = "activeMenu";
const classMainActive = "activeMain";

// CONST FOOTER
const footer_icon_one = document.getElementById("footer_navbar_section_title_one");
const footer_icon_two = document.getElementById("footer_navbar_section_title_two");
const footer_link_one = document.getElementById("footer_navbar_section_links_one");
const footer_link_two = document.getElementById("footer_navbar_section_links_two");
const footerActive = "footer_navbar_section_links_active";

// NAVBAR

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

// FOOTER
footer_icon_one.addEventListener("click", () => {
    if (footer_link_one.classList.contains(footerActive)) {
        footer_link_one.classList.replace(footerActive, "footer_navbar_section_links");
    } else {
        footer_link_one.classList.replace("footer_navbar_section_links", footerActive)
    }
});

footer_icon_two.addEventListener("click", () => {
    if (footer_link_two.classList.contains(footerActive)) {
        footer_link_two.classList.replace(footerActive, "footer_navbar_section_links");
    } else {
        footer_link_two.classList.replace("footer_navbar_section_links", footerActive)
    }
});