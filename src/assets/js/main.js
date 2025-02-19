const menuIcon = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-links");
menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("fa-x"); 
    navLinks.classList.toggle("active");
});
