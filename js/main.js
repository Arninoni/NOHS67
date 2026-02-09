// ============================
// MOBILE MENU TOGGLE
// ============================
const menuBtn = document.getElementById('menu-btn');
const navList = document.querySelector('.nav-list');

if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

// ============================
// MAIN HEADER SLIDER
// ============================
const slides = document.querySelectorAll('.slider .slide');
const dots = document.querySelectorAll('.slider .dot');
const prevSlideBtn = document.querySelector('.prev-slide');
const nextSlideBtn = document.querySelector('.next-slide');

let currentSlide = 0;
const slideIntervalTime = 5000;
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => slide.style.opacity = (i === index ? '1' : '0'));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

// Next / Previous functions
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide
function startSlider() {
    slideInterval = setInterval(nextSlide, slideIntervalTime);
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Initialize
if (slides.length > 0) {
    showSlide(currentSlide);
    startSlider();
}

// Pause on hover
const sliderSection = document.querySelector('.slider');
if (sliderSection) {
    sliderSection.addEventListener('mouseenter', stopSlider);
    sliderSection.addEventListener('mouseleave', startSlider);
}

// Dot navigation
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
});

// Prev/Next buttons
if (prevSlideBtn) prevSlideBtn.addEventListener('click', prevSlide);
if (nextSlideBtn) nextSlideBtn.addEventListener('click', nextSlide);

// ============================
// ABOUT SECTION SLIDER
// ============================
const aboutSlides = document.querySelectorAll('.about-slider .slide');
const aboutPrevBtn = document.querySelector('.about-slider .prev-btn');
const aboutNextBtn = document.querySelector('.about-slider .next-btn');
let aboutIndex = 0;

function showAboutSlide(index) {
    aboutSlides.forEach((slide, i) => slide.classList.toggle('active', i === index));
}

// Prev/Next buttons
if (aboutPrevBtn) {
    aboutPrevBtn.addEventListener('click', () => {
        aboutIndex = (aboutIndex - 1 + aboutSlides.length) % aboutSlides.length;
        showAboutSlide(aboutIndex);
    });
}

if (aboutNextBtn) {
    aboutNextBtn.addEventListener('click', () => {
        aboutIndex = (aboutIndex + 1) % aboutSlides.length;
        showAboutSlide(aboutIndex);
    });
}

// Auto-slide
let aboutInterval = setInterval(() => {
    aboutIndex = (aboutIndex + 1) % aboutSlides.length;
    showAboutSlide(aboutIndex);
}, 5000);

// Pause on hover
const aboutSliderContainer = document.querySelector('.about-slider');
if (aboutSliderContainer) {
    aboutSliderContainer.addEventListener('mouseenter', () => clearInterval(aboutInterval));
    aboutSliderContainer.addEventListener('mouseleave', () => {
        aboutInterval = setInterval(() => {
            aboutIndex = (aboutIndex + 1) % aboutSlides.length;
            showAboutSlide(aboutIndex);
        }, 5000);
    });
}

// Initialize about slider
if (aboutSlides.length > 0) showAboutSlide(aboutIndex);
