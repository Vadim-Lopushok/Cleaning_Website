const hamburger = document.querySelector(
  '.block .navbar .nav-list .toggle')
const mobileMenu = document.querySelector('.block .navbar .nav-list ul')
const menuItem = document.querySelectorAll(
  '.block .navbar .nav-list ul li a')
const header = document.querySelector('.block.container-flex')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  mobileMenu.classList.toggle('active')
})

document.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY
  if (scrollPosition > 250) {
    header.style.backgroundColor = '#29323c'
  } else {
    header.style.backgroundColor = 'transparent'
  }
})

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    mobileMenu.classList.toggle('active')
  })
})

