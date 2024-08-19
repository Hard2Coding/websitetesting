document.addEventListener('DOMContentLoaded', function() {
    function swipeInContent() {
        const textPolicyHead  = document.querySelector('.topictext');
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