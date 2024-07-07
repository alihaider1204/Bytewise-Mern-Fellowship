document.addEventListener("DOMContentLoaded", function() {
    const revealBtn = document.querySelector(".reveal-btn");
    const hiddenContent = document.querySelector(".hidden-content");

    revealBtn.addEventListener("click", function() {
        if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
            hiddenContent.style.display = "block";
        } else {
            hiddenContent.style.display = "none";
        }
    });
});
