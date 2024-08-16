let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.imagecontentbox img');
    slideIndex++;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    
    document.querySelector('.imagecontentbox').scrollTo({
        left: slides[slideIndex].offsetLeft,
        behavior: 'smooth'
    });
}

setInterval(showSlides, 5000); 