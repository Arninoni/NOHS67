const modal = document.getElementById("achievementModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".more-btn").forEach(button => {
    button.addEventListener("click", () => {
        modalTitle.textContent = button.dataset.title;
        modalDescription.textContent = button.dataset.description;
        modalImage.src = button.dataset.image;

        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
});

