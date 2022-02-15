const navbar  = document.querySelector(".navbar")
const ul  = document.querySelector(".ul")
const menuIcon = document.querySelector(".close-open")

menuIcon.addEventListener("click", () => close())

ul.addEventListener("click", () => close())

function close() {
    navbar.classList.toggle("showNavbar")
    menuIcon.classList.toggle("close-menu")
}



const loader = document.querySelector("#preloader")
window.addEventListener("load", ()=> {
    loader.style.display = "none"
})


// Scroll effect header:

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
})


// ABOUT SECTION JS:

const wiutImg = document.querySelector(".wiutimg")
const overlay = document.querySelector(".overlay")

wiutImg.addEventListener("mouseover", function() {
    overlay.classList.add("overlayShow")
})
wiutImg.addEventListener("mouseout", function() {
    overlay.classList.remove("overlayShow")
})
