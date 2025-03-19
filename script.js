document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(0, 0, 0, 0.95)";
        } else {
            navbar.style.background = "rgba(0, 0, 0, 0.8)";
        }
    });
});
