import formModal from './formModal.js'
import formSend from './formSend.js'
import nav_bar from './nav_bar.js'
import StarFall from './starfall.js'
import Stars from './stars.js'

const d = document,
  w = window

d.addEventListener('DOMContentLoaded', (e) => {
  nav_bar('.hamburger', 'header', '.header__container')
  Stars()
  StarFall('.starFall__container')
  formSend('contactForm')
  formModal('.formSend', '.formSend__close')
})

const $load = d.querySelector('.load'),
  $body = d.querySelector('.body__overflow')

w.addEventListener('load', (e) => {
  setTimeout(() => {
    $load.remove()
    $body.hasAttribute('class')
      ? $body.classList.remove('body__overflow')
      : null
  }, 500)
})
