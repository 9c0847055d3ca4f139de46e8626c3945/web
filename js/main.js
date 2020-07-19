// Declaration of Variables
const menuButton = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');
const menuLinks = document.querySelectorAll('.nav-list li');

// Menu toggle
menuButton.addEventListener('click', () => {
//Toggle menu and Logo Change
    menuButton.classList.toggle('close');
    menu.classList.toggle('active');
// Links fade in
    menuLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation= `linksFadein 0.3s ease forwards ${index/7 + 0.6}s`;
        }
    })
});
