const navbar  = document.querySelector(".navbar")
const menuIcon = document.querySelector(".close-open")

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("showNavbar")
    menuIcon.classList.toggle("close-menu")
})
