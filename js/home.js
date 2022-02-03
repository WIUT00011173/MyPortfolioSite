const navbar  = document.querySelector(".navbar")
const menuIcon = document.querySelector(".close-open")

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("showNavbar")
    menuIcon.classList.toggle("close-menu")
})

const loader = document.querySelector("#preloader")
window.addEventListener("load", ()=> {
    loader.style.display = "none"
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
