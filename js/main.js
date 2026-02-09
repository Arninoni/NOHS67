// ===== MOBILE MENU =====
const menuBtn = document.getElementById('menu-btn');
const navList = document.querySelector('.nav-list');
menuBtn.addEventListener('click', ()=> navList.classList.toggle('active'));

// ===== MAIN SLIDER =====
const slides = document.querySelectorAll('.slider .slide');
const dots = document.querySelectorAll('.dot');
const prevSlideBtn = document.querySelector('.prev-slide');
const nextSlideBtn = document.querySelector('.next-slide');
let currentSlide = 0;
const slideIntervalTime = 5000;
let slideInterval;

function showSlide(i){
    slides.forEach((s,index)=> s.style.opacity = index===i?'1':'0');
    dots.forEach((d,index)=> d.classList.toggle('active', index===i));
}

function nextSlide(){ currentSlide = (currentSlide+1)%slides.length; showSlide(currentSlide); }
function prevSlide(){ currentSlide = (currentSlide-1+slides.length)%slides.length; showSlide(currentSlide); }

function startSlider(){ slideInterval=setInterval(nextSlide, slideIntervalTime); }
function stopSlider(){ clearInterval(slideInterval); }

showSlide(currentSlide);
startSlider();

const slider = document.querySelector('.slider');
const cardsSection = document.querySelector('.cards-section');
[slider,cardsSection].forEach(el=>el.addEventListener('mouseenter',stopSlider));
[slider,cardsSection].forEach(el=>el.addEventListener('mouseleave',startSlider));

// Dot navigation
dots.forEach((dot,i)=> dot.addEventListener('click',()=> { currentSlide=i; showSlide(i); }));

// Prev/Next buttons
if(prevSlideBtn) prevSlideBtn.addEventListener('click', prevSlide);
if(nextSlideBtn) nextSlideBtn.addEventListener('click', nextSlide);

// ===== ABOUT SLIDER =====
const aboutSlides = document.querySelectorAll('.about-slider .slide');
const prevBtn = document.querySelector('.about-slider .prev-btn');
const nextBtn = document.querySelector('.about-slider .next-btn');
let aboutIndex = 0;

function showAboutSlide(i){ aboutSlides.forEach((s,index)=> s.classList.toggle('active', index===i)); }

if(prevBtn) prevBtn.addEventListener('click',()=>{ aboutIndex=(aboutIndex-1+aboutSlides.length)%aboutSlides.length; showAboutSlide(aboutIndex); });
if(nextBtn) nextBtn.addEventListener('click',()=>{ aboutIndex=(aboutIndex+1)%aboutSlides.length; showAboutSlide(aboutIndex); });

showAboutSlide(aboutIndex);
