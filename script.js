// Select all slides and initialize the current slide index
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Function to show a slide based on its index
function showSlide(index) {
    // Remove 'active' class from the current slide
    slides[currentSlide].classList.remove('active');
    // Update the current slide index, wrapping around if necessary
    currentSlide = (index + slides.length) % slides.length;
    // Add 'active' class to the new current slide
    slides[currentSlide].classList.add('active');
}

// Event listener for keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        // Move to the next slide
        showSlide(currentSlide + 1);
    } else if (event.key === 'ArrowLeft') {
        // Move to the previous slide
        showSlide(currentSlide - 1);
    }
});

// Optional: Enable navigation using swipe gestures (for touch devices)
let startX = 0;
document.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});
document.addEventListener('touchend', (event) => {
    const endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) {
        // Swipe left: Next slide
        showSlide(currentSlide + 1);
    } else if (endX - startX > 50) {
        // Swipe right: Previous slide
        showSlide(currentSlide - 1);
    }
});

// Initial setup: Show the first slide
showSlide(0);
