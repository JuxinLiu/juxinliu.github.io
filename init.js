"use strict";

(function() {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = 'jliu_home.ico';
})();

function loadNav() {
    const navLinks = document.querySelectorAll("header nav a");
    const currentPath = window.location.pathname.split("/").pop();
    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i].getAttribute("href") === currentPath) {
            navLinks[i].classList.add("active");
        }
    }
}

document.addEventListener("DOMContentLoaded", loadNav);