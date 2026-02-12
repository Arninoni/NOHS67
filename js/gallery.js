// Select elements
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');

// Open lightbox
galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';        // use flex to center
    lightbox.style.opacity = 0;
    lightboxImg.src = img.src;

    // Fade in
    setTimeout(() => {
      lightbox.style.opacity = 1;
    }, 10);
  });
});

// Close lightbox on X
closeBtn.addEventListener('click', () => {
  fadeOut(lightbox);
});

// Close lightbox when clicking outside image
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    fadeOut(lightbox);
  }
});

// Smooth fade out function
function fadeOut(element) {
  element.style.opacity = 1;
  let fadeEffect = setInterval(() => {
    if (element.style.opacity > 0) {
      element.style.opacity -= 0.05;
    } else {
      clearInterval(fadeEffect);
      element.style.display = 'none';
    }
  }, 15);
}