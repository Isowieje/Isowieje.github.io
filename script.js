const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        showSlide(currentSlide + 1);
    } else if (event.key === 'ArrowLeft') {
        showSlide(currentSlide - 1);
    }
});

// Initial setup
slides[currentSlide].classList.add('active');
