let menuTrigger = document.querySelector(".nav")
let menu = document.querySelector(".menu-nav")

menuTrigger.addEventListener("click", () => {
  menu.classList.toggle("active")
})

window.addEventListener('scroll', () => {
  if(window.scrollY >= 100 && menu.classList.contains("active")){
    menu.classList.toggle("active")
  }
})
