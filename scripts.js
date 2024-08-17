//Count 7

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

// Fade for policy1
function fadeInPolicy1Elements() {
    var policyElement = document.querySelector('.policy1');
    if (!policyElement) return; 
    var items = policyElement.querySelectorAll('span');
    
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.style.transition = 'opacity 1s ease-out, transform 1s ease-out'; 
        }, index * 300); 
    });
}

function checkDeviceAndFadePolicy1() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var policyElement = document.querySelector('.policy1move');

    if (windowWidth <= 1200) {
        fadeInPolicy1Elements();
    } else {
        if (!policyElement) return; 

        function onScroll() {
            var rect = policyElement.getBoundingClientRect();
            var windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight && rect.bottom >= 0) {
                fadeInPolicy1Elements();
                window.removeEventListener('scroll', onScroll); 
            }
        }

        window.addEventListener('scroll', onScroll);
        onScroll(); 
    }
}

// Fade for policy2
function fadeInPolicy2Elements() {
    var policyElement = document.querySelector('.policy2');
    if (!policyElement) return; 
    var items = policyElement.querySelectorAll('span');
    
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.style.transition = 'opacity 1s ease-out, transform 1s ease-out'; 
        }, index * 300); 
    });
}

function checkDeviceAndFadePolicy2() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var policyElement = document.querySelector('.policy2move');

    if (windowWidth <= 1200) {
        fadeInPolicy2Elements();
    } else {
        if (!policyElement) return; 

        function onScroll() {
            var rect = policyElement.getBoundingClientRect();
            var windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight && rect.bottom >= 0) {
                fadeInPolicy2Elements();
                window.removeEventListener('scroll', onScroll); 
            }
        }

        window.addEventListener('scroll', onScroll);
        onScroll(); 
    }
}

window.addEventListener('load', () => {
    checkDeviceAndFadePolicy1();
    checkDeviceAndFadePolicy2();
});




