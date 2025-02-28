window.addEventListener("load", function (e) {
    const userID = JSON.parse(this.localStorage.getItem("userID")); 
})

const menuIcon = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-links");
menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("fa-x"); 
    navLinks.classList.toggle("active");
});
