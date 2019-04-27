window.addEventListener('scroll', () => {
  let homeArrow = document.querySelector('.home-arrow')

  if(window.scrollY >= 500){
    homeArrow.style.bottom = "40px"
  }else{
      homeArrow.style.bottom = "-40px"
  }
})
