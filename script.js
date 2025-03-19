document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.85)";
    } else {
        navbar.style.background = "rgb(59, 59, 61)";
    }
});
