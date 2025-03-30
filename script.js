document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", () => {
        let content = button.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
