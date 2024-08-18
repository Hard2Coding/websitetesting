document.addEventListener('DOMContentLoaded', function() {
    // Show slides
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

    // Counter animation
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

    // Fade in policy elements
    function fadeInPolicyElements(policyClass) {
        var policyElement = document.querySelector(policyClass);
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

    function checkDeviceAndFadePolicy(policyMoveClass, policyClass) {
        var windowWidth = window.innerWidth || document.documentElement.clientWidth;
        var policyElement = document.querySelector(policyMoveClass);

        if (windowWidth <= 1200) {
            fadeInPolicyElements(policyClass);
        } else {
            if (!policyElement) return; 

            function onScroll() {
                var rect = policyElement.getBoundingClientRect();
                var windowHeight = window.innerHeight || document.documentElement.clientHeight;

                if (rect.top <= windowHeight && rect.bottom >= 0) {
                    fadeInPolicyElements(policyClass);
                    window.removeEventListener('scroll', onScroll); 
                }
            }

            window.addEventListener('scroll', onScroll);
            onScroll(); 
        }
    }

    checkDeviceAndFadePolicy('.aboutcontentmove', '.about1');
    checkDeviceAndFadePolicy('.aboutcontent2move', '.about2');
    checkDeviceAndFadePolicy('.policy1move', '.policy1');
    checkDeviceAndFadePolicy('.policy2move', '.policy2');
    checkDeviceAndFadePolicy('.policy3move', '.policy3');
    checkDeviceAndFadePolicy('.policy4move', '.policy4');

//fadepolicy

    function swipeInContent() {
        const highlightText = document.querySelector('.highlighttext');
        const textPolicyHead  = document.querySelector('.textpolicyhead');
        
        if (highlightText) {
            let rect = highlightText.getBoundingClientRect();
            let windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                highlightText.classList.add('swipe-in');
                window.removeEventListener('scroll', swipeInContent);
            }
        }
        if (textPolicyHead) {
            let rect = textPolicyHead.getBoundingClientRect();
            let windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                textPolicyHead.classList.add('swipe-in');
                window.removeEventListener('scroll', swipeInContent);
            }
        }
    }

    window.addEventListener('scroll', swipeInContent);
    swipeInContent();
});