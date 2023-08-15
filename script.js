let button = document.querySelector(".mobile-menu-btn")
let mobileMenu = document.querySelector(".mobile-menu")

button.onclick = function () {
  mobileMenu.style.display = 'flex'
}

mobileMenu.onclick = function () {
  mobileMenu.style.display = 'none'
}