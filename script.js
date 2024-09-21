function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide-img');
// const totalSlides = slides.length;

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.remove('active');
//         if (i === index) {
//             slide.classList.add('active');
//         }
//     });
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % totalSlides; // Go back to the first slide after the last one
//     showSlide(currentSlide);
// }

// // Start the slideshow and switch slides every 10 seconds
// setInterval(nextSlide, 1000); // 10,000 milliseconds = 10 seconds

// // Show the first slide on page load
// showSlide(currentSlide);

<script src="path/to/particles.min.js"></script>

    particlesJS.load('particles-js-canvas-el', 'path/to/particles.json', function() {
        console.log('particles.js loaded - callback');
    });
