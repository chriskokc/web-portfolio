const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__nav-menu");
const navLinks= document.querySelectorAll(".nav__nav-link");
let toggleBtn = document.querySelectorAll(".resume__toggle-button");
let dropdownMenu = document.querySelectorAll(".resume__dropdown-menu");

// hamburger
// attach hamburger to an Event Listener
// menu shows up when a click on hamburger is detected
hamburger.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});

// menu disappear when a click on nav links is detected
for (let i = 0; i < navLinks.length; i++) {
    // detach each nav link to an Event Listener
    navLinks[i].addEventListener("click", function() {
        navMenu.classList.remove("active");
    });
}

// menu disappear when user is scrolling the webpage
window.onscroll = function() {
    navMenu.classList.remove("active");
}

// dropdown menu
for (let i = 0; i < toggleBtn.length; i++) {
    toggleBtn[i].addEventListener("click", function() {
        // toggle between adding and removing the "show" class 
        // to switch between the plus and minus button
        this.classList.toggle("active");

        // nextElementSibling returns the HTML content of the next sibling
        let dropdownMenu = this.nextElementSibling;
        // console.log(`The button got clicked is ${this}.`);
        // console.log(`The nextElementSibling is ${dropdownMenu}.`);

        // slide down the content by setting a calculated max-height
        if (dropdownMenu.style.maxHeight) {
            dropdownMenu.style.maxHeight = null;
        } else {
            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
        }

    });

}


