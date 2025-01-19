// scripts.js
document.getElementById('hamburger').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show'); // Toggle the 'show' class to display the menu
});


// Close the menu when a nav link is clicked
const navItems = document.querySelectorAll('.nav-links a');
const navLinks = document.querySelector('.nav-links');
navItems.forEach(item => {
    item.addEventListener("click", function () {
        navLinks.classList.remove("show"); // Hide the menu
    });
});

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block"; // Show button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide button
    }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling effect
    });
});

