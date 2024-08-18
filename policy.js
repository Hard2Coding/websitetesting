document.addEventListener('DOMContentLoaded', function() {
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

    checkDeviceAndFadePolicy('.policy1move', '.policy1');
    checkDeviceAndFadePolicy('.policy2move', '.policy2');
    checkDeviceAndFadePolicy('.policy3move', '.policy3');
    checkDeviceAndFadePolicy('.policy4move', '.policy4');

//fadepolicy
    function swipeInContent() {
        const textPolicyHead  = document.querySelector('.textpolicyhead');
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