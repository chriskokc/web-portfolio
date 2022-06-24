const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__nav-menu");
const navLinks= document.querySelectorAll(".nav__nav-link");

// attach hamburger to an Event Listener
// menu shows up when a click on hamburger is detected
hamburger.addEventListener("click", function() {
    navMenu.classList.toggle("active");
} );

// menu disappear when a click on nav links is detected
for (let i = 0; i < navLinks.length; i++) {
    // attach each nav link to an Event Listener
    navLinks[i].addEventListener("click", function() {
        navMenu.classList.remove("active");
    });
}



