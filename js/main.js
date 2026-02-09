// ============================
// MOBILE MENU TOGGLE
// ============================
const menuBtn = document.getElementById('menu-btn');
const navList = document.querySelector('.nav-list');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// ============================
// MAIN SLIDER
// ============================
const prevSlideBtn = document.querySelector('.prev-slide');
const nextSlideBtn = document.querySelector('.next-slide');

// Next / Prev button events
prevSlideBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextSlideBtn.addEventListener('click', () => {
    nextSlide(); // re-use existing function
});

const slides = document.querySelectorAll('.slider .slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const slideInterval = 5000; // 5 seconds

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initialize slider
showSlide(currentSlide);
setInterval(nextSlide, slideInterval);

// Dot navigation
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
});

// ============================
// ABOUT SECTION SLIDER
// ============================
const aboutSlides = document.querySelectorAll('.about-slider .slide');
const prevBtn = document.querySelector('.about-slider .prev-btn');
const nextBtn = document.querySelector('.about-slider .next-btn');
let aboutIndex = 0;

function showAboutSlide(index) {
    aboutSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    aboutIndex = (aboutIndex - 1 + aboutSlides.length) % aboutSlides.length;
    showAboutSlide(aboutIndex);
});

nextBtn.addEventListener('click', () => {
    aboutIndex = (aboutIndex + 1) % aboutSlides.length;
    showAboutSlide(aboutIndex);
});

// Initialize about slider
showAboutSlide(aboutIndex);
