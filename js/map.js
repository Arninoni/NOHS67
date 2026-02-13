const mapImage = document.querySelector(".map-image");
const lightbox = document.getElementById("imageLightbox");
const expandedImg = document.getElementById("expandedImg");
const closeBtn = document.querySelector(".close-btn");

mapImage.addEventListener("click", () => {
    lightbox.style.display = "flex";
    expandedImg.src = mapImage.src;
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
