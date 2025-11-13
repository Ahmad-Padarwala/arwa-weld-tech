const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("open");
});

// active link
const navLinks = document.querySelectorAll(".nav-menu .nav-item a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        // remove active from all links
        navLinks.forEach(item => item.classList.remove("active"));

        // add active to clicked link
        link.classList.add("active");
    });
});
