let lastScrollY = 0; // Store last scroll position
const nav = document.querySelector('.nav');

window.onscroll = function() {
    const scrollY = window.scrollY;

    if (scrollY > 150 && scrollY > lastScrollY) {
        nav.classList.add('fixed-nav'); // Add fixed-nav class to fix the navbar
    } else if (scrollY < lastScrollY) {
        nav.classList.remove('fixed-nav'); // Remove fixed-nav class when scrolling up
    }

    lastScrollY = scrollY; // Update last scroll position
};
