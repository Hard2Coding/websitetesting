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

document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let counterElement = document.getElementById("counter");
                let count = 1;
                let interval = setInterval(function() {
                    counterElement.textContent = count;
                    count++;
                    if (count > 7) {
                        clearInterval(interval);
                    }
                }, 165); 
                observer.disconnect();
            }
        });
    });

    observer.observe(document.querySelector('.textpolicyhead'));
});

function fadeInElements() {
    var policyElement = document.querySelector('.policy1');
    var items = policyElement.querySelectorAll('span');

    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)'; 
        }, index * 300); 
    });
}

function checkDeviceAndFade() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    if (windowWidth <= 768) { 
        fadeInElements(); 
    } else {
        
        window.addEventListener('scroll', function() {
            var policyElement = document.querySelector('.policy1');
            var rect = policyElement.getBoundingClientRect();
            var windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight && rect.bottom >= 0) {
                fadeInElements();
            }
        });
    }
}

window.addEventListener('load', checkDeviceAndFade);



