document.addEventListener("DOMContentLoaded", function () {
    let text = document.getElementById("animatedText");
    let textContent = text.textContent;
    text.textContent = "";
    let i = 0;

    function typeEffect() {
        if (i < textContent.length) {
            text.textContent += textContent.charAt(i);
            i++;
            setTimeout(typeEffect, 150);
        }
    }

    typeEffect();
});

function toggleProfileMenu() {
    let menu = document.getElementById("profileMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
